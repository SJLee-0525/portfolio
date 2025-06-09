import { getYoutubeThumbnail } from "@utils/getVideoData";

import PlayIcon from "@assets/icon/PlayIcon";

interface VideoThumbnailProps {
  url: string;
  index: number;
  setVideoPlayState: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}

const VideoThumbnail = ({ url, index, setVideoPlayState }: VideoThumbnailProps) => {
  return (
    <>
      {/* 썸네일(유튜브) + 재생버튼 오버레이 */}
      <img
        src={getYoutubeThumbnail(url) || ""}
        alt="YouTube 썸네일"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ background: "#000" }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
        <button
          className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            setVideoPlayState((prev) => ({ ...prev, [index]: true }));
          }}
        >
          <PlayIcon width={40} height={40} strokeColor="#fff" />
        </button>
      </div>
    </>
  );
};

export default VideoThumbnail;
