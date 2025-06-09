interface VideoPlayerProps {
  url: string;
  index: number;
}

const VideoPlayer = ({ url, index }: VideoPlayerProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
      <iframe
        src={url + (url.includes("?") ? "&autoplay=1" : "?autoplay=1")}
        title={`Project Video ${index + 1}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-auto max-h-full bg-black"
        style={{ display: "block", aspectRatio: "16/9" }}
      />
    </div>
  );
};

export default VideoPlayer;
