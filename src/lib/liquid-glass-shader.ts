// "use client"  ← 이 파일을 바로 컴포넌트에서 임포트하면 없어도 됨

const smoothStep = (a: number, b: number, t: number) => {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const length2 = (x: number, y: number) => {
  return Math.sqrt(x * x + y * y);
};

const roundedRectSDF = (x: number, y: number, w: number, h: number, r: number) => {
  const qx = Math.abs(x) - w + r;
  const qy = Math.abs(y) - h + r;
  return Math.min(Math.max(qx, qy), 0) + length2(Math.max(qx, 0), Math.max(qy, 0)) - r;
};

const texture = (x: number, y: number) => {
  return { x, y };
};

const generateId = () => {
  return "liquid-glass-" + Math.random().toString(36).slice(2, 9);
};

type FragmentFn = (uv: { x: number; y: number }, mouse?: { x: number; y: number }) => { x: number; y: number };
type ShaderOpts = {
  width?: number;
  height?: number;
  fragment?: FragmentFn;
  element?: HTMLElement | null; // 요소를 직접 전달
};

export class Shader {
  width: number;
  height: number;
  fragment: FragmentFn;
  canvasDPI = 1;
  id = generateId();
  offset = 10;
  mouse = { x: 0, y: 0 };
  mouseUsed = false;

  container!: HTMLElement;
  svg!: SVGSVGElement;
  feImage!: SVGFEImageElement;
  feDisplacementMap!: SVGFEDisplacementMapElement;
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;

  private externalElement?: HTMLElement | null;

  constructor(options: ShaderOpts = {}) {
    this.width = options.width ?? 300;
    this.height = options.height ?? 200;
    this.fragment = options.fragment ?? ((uv) => texture(uv.x, uv.y));
    this.externalElement = options.element ?? null;

    this.createElement();
    this.setupEventListeners();
    this.updateShader();
  }

  private createElement() {
    // 외부 요소가 있으면 그걸 컨테이너로 사용
    if (this.externalElement) {
      this.container = this.externalElement;
      // 필요한 기본 스타일 보정 (투명도 있어야 backdrop가 보임)
      this.container.style.backdropFilter = `url(#${this.id}_filter) blur(1.5px) brightness(1.5) saturate(1.2)`;
      this.container.style.boxShadow = `
        4px 4px 6px rgba(0, 0, 0, 0.125),
        0 -10px 25px inset rgba(0, 0, 0, 0.01),
        0 -1px 4px 1px inset rgba(255, 255, 255, 0.85)
      `;
      (this.container.style as any).webkitBackdropFilter = this.container.style.backdropFilter;
      this.container.style.overflow = this.container.style.overflow || "hidden";
    } else {
      // 없으면 새로 만듦
      const div = document.createElement("div");
      div.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: ${this.width}px;
        height: ${this.height}px;
        overflow: hidden;
        border-radius: 150px;
        box-shadow:
          0 4px 8px rgba(0, 0, 0, 0.25),
          0 -10px 25px inset rgba(0, 0, 0, 0.15),
          0 -1px 4px 1px inset rgba(255, 255, 255, 0.74);
        cursor: default;
        backdrop-filter: url(#${this.id}_filter) blur(0.25px) brightness(1.5) saturate(1.1);
        z-index: 9999;
        pointer-events: auto;
        background: rgba(255,255,255,0.30);
      `;
      this.container = div;
    }

    // SVG filter
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.svg.setAttribute("width", "0");
    this.svg.setAttribute("height", "0");
    this.svg.style.cssText = `position: fixed; top:0; left:0; pointer-events:none; z-index: 0;`;

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", `${this.id}_filter`);
    filter.setAttribute("filterUnits", "userSpaceOnUse");
    filter.setAttribute("colorInterpolationFilters", "sRGB");
    filter.setAttribute("x", "0");
    filter.setAttribute("y", "0");
    filter.setAttribute("width", this.width.toString());
    filter.setAttribute("height", this.height.toString());

    this.feImage = document.createElementNS("http://www.w3.org/2000/svg", "feImage");
    this.feImage.setAttribute("id", `${this.id}_map`);
    this.feImage.setAttribute("width", this.width.toString());
    this.feImage.setAttribute("height", this.height.toString());

    this.feDisplacementMap = document.createElementNS("http://www.w3.org/2000/svg", "feDisplacementMap");
    this.feDisplacementMap.setAttribute("in", "SourceGraphic");
    this.feDisplacementMap.setAttribute("in2", `${this.id}_map`);
    this.feDisplacementMap.setAttribute("xChannelSelector", "R");
    this.feDisplacementMap.setAttribute("yChannelSelector", "G");

    filter.appendChild(this.feImage);
    filter.appendChild(this.feDisplacementMap);
    defs.appendChild(filter);
    this.svg.appendChild(defs);

    // Canvas (hidden)
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width * this.canvasDPI;
    this.canvas.height = this.height * this.canvasDPI;
    this.canvas.style.display = "none";
    this.context = this.canvas.getContext("2d")!;
  }

  private setupEventListeners() {
    // 리사이즈 시 필터 크기 갱신
    window.addEventListener("resize", this.handleResize);
  }

  private handleResize = () => {
    const rect = this.container.getBoundingClientRect();
    this.width = Math.round(rect.width);
    this.height = Math.round(rect.height);
    this.updateShader();
  };

  updateShader() {
    const w = this.width * this.canvasDPI;
    const h = this.height * this.canvasDPI;
    const data = new Uint8ClampedArray(w * h * 4);

    let maxScale = 0;
    const raw: number[] = [];

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);
      const pos = this.fragment({ x: x / w, y: y / h }, this.mouse);
      const dx = pos.x * w - x;
      const dy = pos.y * h - y;
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      raw.push(dx, dy);
    }

    maxScale *= 0.5;

    let k = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = raw[k++] / maxScale + 0.5;
      const g = raw[k++] / maxScale + 0.5;
      data[i] = r * 255;
      data[i + 1] = g * 255;
      data[i + 2] = 0;
      data[i + 3] = 255;
    }

    this.context.putImageData(new ImageData(data, w, h), 0, 0);

    // SVG에 주입
    this.feImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.canvas.toDataURL());
    this.feDisplacementMap.setAttribute("scale", (maxScale / this.canvasDPI).toString());

    // 필터 크기/좌표 업데이트
    const filter = this.svg.querySelector(`#${this.id}_filter`) as SVGFilterElement;
    filter?.setAttribute("width", String(this.width));
    filter?.setAttribute("height", String(this.height));
  }

  appendTo(parent: HTMLElement) {
    // 외부 요소를 쓰면 container는 append하지 않고 SVG만 body에 등록
    if (!this.externalElement) parent.appendChild(this.container);
    parent.appendChild(this.svg);
  }

  destroy() {
    window.removeEventListener("resize", this.handleResize);
    this.svg.remove();
    if (!this.externalElement) this.container.remove();
    this.canvas.remove();
  }
}

// 편의 함수: 주어진 요소에 바로 붙이기
export const attachLiquidGlassToElement = (el: HTMLElement, opts: Omit<ShaderOpts, "element"> = {}) => {
  const shader = new Shader({ ...opts, element: el });
  shader.appendTo(document.body);
  return () => shader.destroy();
};

// fragment
export const defaultFragment: FragmentFn = (uv) => {
  const ix = uv.x - 0.5;
  const iy = uv.y - 0.5;
  const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
  const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
  const scaled = smoothStep(0, 1, displacement);
  return texture(ix * scaled + 0.5, iy * scaled + 0.5);
};
