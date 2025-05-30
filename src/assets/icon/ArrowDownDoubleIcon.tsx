import { IconProps } from "@/types/iconProps";

const ArrowDownDoubleIcon = ({ width = 22, height = 22, strokeColor, onClick }: IconProps) => {
  return (
    <svg
      enable-background="new 0 0 26 26"
      width={width}
      height={height}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 26 26"
      onClick={onClick}
    >
      <g>
        <polygon
          fill={strokeColor}
          points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  "
        />
        <polygon
          fill={strokeColor}
          points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "
        />
      </g>
    </svg>
  );
};

export default ArrowDownDoubleIcon;
