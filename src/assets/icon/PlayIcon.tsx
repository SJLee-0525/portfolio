import { IconProps } from "@/types/iconProps";

const PlayIcon = ({ width = 22, height = 22, strokeColor, onClick }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="16,13 28,20 16,27" fill={strokeColor} />
    </svg>
  );
};

export default PlayIcon;
