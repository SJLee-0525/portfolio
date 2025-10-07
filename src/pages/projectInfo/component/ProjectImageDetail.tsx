import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useModalStore from "@stores/modalStore";

import NoImage from "@components/image/NoImage";
import CarouselButton from "@components/button/CarouselButton";
import VideoThumbnail from "@components/video/VideoThumbnail";
import VideoPlayer from "@components/video/VideoPlayer";
import ImageWithSpinner from "@components/image/ImageWithSpinner";

import CloseIcon from "@assets/icon/CloseIcon";
import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

interface ProjectImageDetailProps {
  PROJECT_IMAGES: { type: string; src: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const ProjectImageDetail = ({ PROJECT_IMAGES, currentIndex, setCurrentIndex }: ProjectImageDetailProps) => {
  const { closeImageModal } = useModalStore();

  const TOTAL = PROJECT_IMAGES.length;

  const [index, setIndex] = useState(currentIndex);
  const [dir, setDir] = useState<1 | -1>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [videoPlayState, setVideoPlayState] = useState<Record<number, boolean>>({});

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index, setCurrentIndex]);

  // 키보드 네비게이션
  const goNext = useCallback(() => {
    if (!TOTAL) return;
    setDir(1);
    setIndex((i) => (i + 1) % TOTAL);
  }, [TOTAL]);

  const goPrev = useCallback(() => {
    if (!TOTAL) return;
    setDir(-1);
    setIndex((i) => (i - 1 + TOTAL) % TOTAL);
  }, [TOTAL]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      const threshold = 50; // 스와이프 인식 임계값(px)

      if (distance > threshold) {
        goNext();
      } else if (distance < -threshold) {
        goPrev();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  }, [touchStartX, touchEndX, goNext, goPrev]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    }

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // peek 카드 개수
  const peekCount = clamp(TOTAL - 1, 0, 3);

  const layers = useMemo(() => {
    const arr = Array.from({ length: 1 + peekCount }, (_, i) => (index + i) % TOTAL);
    const conf = [
      { scale: 1, tx: 0, ty: 0, z: 30, blur: 0 },
      { scale: 0.975, tx: 16, ty: -16, z: 20, blur: 1 },
      { scale: 0.95, tx: 32, ty: -26, z: 10, blur: 2 },
      { scale: 0.925, tx: 46, ty: -34, z: 5, blur: 2.5 },
    ];

    return arr.map((idx, i) => ({ idx, style: conf[i] }));
  }, [index, peekCount, TOTAL]);

  const variants = {
    enter: (direction: 1 | -1) => ({
      x: direction === 1 ? 40 : -40,
      opacity: 0.6,
      rotate: direction === 1 ? 0.6 : -0.6,
    }),
    center: { x: 0, opacity: 1, rotate: 0 },
    exit: (direction: 1 | -1) => ({
      x: direction === 1 ? -120 : 120,
      opacity: 0,
      rotate: direction === 1 ? -0.6 : 0.6,
    }),
  } as const;

  if (!TOTAL) {
    return <NoImage />;
  }

  return (
    <div ref={containerRef} className="relative w-full h-full select-none" aria-roledescription="carousel">
      <button
        className="absolute top-5 right-5 z-100 p-2 rounded-full bg-white/35 hover:bg-red-500 transition-colors duration-300 ease-in-out"
        onClick={closeImageModal}
      >
        <CloseIcon />
      </button>

      {/* 카드들이 겹쳐서 보이는 부분 */}
      <section
        className="absolute inset-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 뒤에 살짝 보일 카드들 */}
        {layers.slice(1).map(({ idx, style }) => (
          <section
            key={`peek-${idx}`}
            className="hidden xl:flex absolute inset-0"
            style={{ zIndex: style.z }}
            aria-hidden
          >
            <figure
              className="flex justify-center items-center w-260 max-w-[95vw] h-200 max-h-[80vh] bg-black m-auto origin-top-right rounded-2xl overflow-hidden"
              style={{
                transform: `translate(${style.tx}px, ${style.ty}px) scale(${style.scale})`,
                filter: `blur(${style.blur}px)`,
              }}
            >
              {PROJECT_IMAGES[idx].type === "video" && PROJECT_IMAGES[idx].src && !videoPlayState[idx] && (
                <VideoThumbnail url={PROJECT_IMAGES[idx].src} index={idx} setVideoPlayState={setVideoPlayState} />
              )}
              {PROJECT_IMAGES[idx].type === "video" && PROJECT_IMAGES[idx].src && videoPlayState[idx] && (
                <VideoPlayer url={PROJECT_IMAGES[idx].src} index={idx} />
              )}
              {PROJECT_IMAGES[idx].type === "img" && PROJECT_IMAGES[idx].src && (
                <ImageWithSpinner src={PROJECT_IMAGES[idx].src} alt={`Project Image ${idx + 1}`} />
              )}
            </figure>
          </section>
        ))}

        {/* 최상단 카드 */}
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={`top-${layers[0].idx}`}
            className="absolute inset-0 flex z-40"
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 420, damping: 48, mass: 0.8 }}
          >
            <div className="flex justify-center items-center w-260 max-w-[95vw] h-200 max-h-[80vh] bg-black m-auto origin-center rounded-2xl overflow-hidden">
              {PROJECT_IMAGES[layers[0].idx].type === "video" &&
                PROJECT_IMAGES[layers[0].idx].src &&
                !videoPlayState[layers[0].idx] && (
                  <VideoThumbnail
                    url={PROJECT_IMAGES[layers[0].idx].src}
                    index={layers[0].idx}
                    setVideoPlayState={setVideoPlayState}
                  />
                )}
              {PROJECT_IMAGES[layers[0].idx].type === "video" &&
                PROJECT_IMAGES[layers[0].idx].src &&
                videoPlayState[layers[0].idx] && (
                  <VideoPlayer url={PROJECT_IMAGES[layers[0].idx].src} index={layers[0].idx} />
                )}
              {PROJECT_IMAGES[layers[0].idx].type === "img" && PROJECT_IMAGES[layers[0].idx].src && (
                <ImageWithSpinner src={PROJECT_IMAGES[layers[0].idx].src} alt={`Project Image ${layers[0].idx + 1}`} />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 좌/우 네비게이션 버튼 */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-between px-8 z-100 pointer-events-none">
        <CarouselButton
          // isActive={index > 0}
          onClick={goPrev}
          icon={<ArrowLeftIcon width={24} height={24} strokeColor="#fff" />}
        />
        <CarouselButton
          // isActive={index < PROJECT_IMAGES.length - 1}
          onClick={goNext}
          icon={<ArrowRightIcon width={24} height={24} strokeColor="#fff" />}
        />
      </div>

      {/* 페이지 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center px-2.5 py-2 gap-2 z-50 rounded-full bg-black/70">
        {PROJECT_IMAGES.map((_, i) => (
          <span
            key={i}
            className={`${i === index ? "w-2 h-2 bg-white" : "w-1.5 h-1.5 hover:w-2 hover:h-2 bg-white/60"} rounded-full transition-all duration-300 cursor-pointer`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectImageDetail;
