export interface IconProps {
  width?: number;
  height?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
}

export interface EmojiInstance {
  id: number;
  x: number;
  y: number;
  symbol: string;
}
