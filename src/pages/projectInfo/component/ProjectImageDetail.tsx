import { useState, useEffect } from "react";

import useModalStore from "@stores/modalStore";

import ImageLoadingSpinner from "@components/spinner/ImageLoadingSpinner";
import CarouselButton from "@components/button/CarouselButton";

import CloseIcon from "@assets/icon/CloseIcon";
import PlayIcon from "@assets/icon/PlayIcon";
import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

interface ProjectImageDetailProps {
  PROJECT_IMAGES: { type: string; src: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const ProjectImageDetail = ({ PROJECT_IMAGES, currentIndex, setCurrentIndex }: ProjectImageDetailProps) => {
  const { closeImageModal } = useModalStore();

  const [modalIndex, setModalIndex] = useState(currentIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [videoPlayState, setVideoPlayState] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setCurrentIndex(modalIndex);
  }, [modalIndex, setCurrentIndex]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex]);

  function handleNext() {
    if (modalIndex < PROJECT_IMAGES.length - 1) setModalIndex(modalIndex + 1);
  }

  function handlePrev() {
    if (modalIndex > 0) setModalIndex(modalIndex - 1);
  }

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEndX(e.touches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      const threshold = 50; // 스와이프 인식 임계값(px)

      if (distance > threshold) {
        handleNext();
      } else if (distance < -threshold) {
        handlePrev();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  }

  function getYoutubeThumbnail(url: string) {
    // embed, watch 등 다양한 형태 지원
    const match = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : undefined;
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <button
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/35 hover:bg-red-500 transition-colors duration-300 ease-in-out"
        onClick={closeImageModal}
      >
        <CloseIcon />
      </button>

      <aside className="absolute top-5">
        <div className="flex items-center justify-center mb-4">
          <span className="text-white text-lg font-pre-light">
            {modalIndex + 1} / {PROJECT_IMAGES.length}
          </span>
        </div>
      </aside>

      <section
        className="relative w-[95vw] h-[85vh] overflow-hidden flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 슬라이드 애니메이션 이미지/비디오 영역 */}
        <figure
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${modalIndex * 100}%)` }}
        >
          {PROJECT_IMAGES.map((img, idx) => (
            <div key={idx} className="w-full flex-shrink-0 flex items-center justify-center" style={{ width: "100%" }}>
              {img.type === "video" && img.src && !videoPlayState[idx] && (
                <>
                  <img
                    src={getYoutubeThumbnail(img.src) || ""}
                    alt="YouTube 썸네일"
                    className="w-full h-auto max-h-full object-contain"
                    style={{ aspectRatio: "16/9", background: "#000" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button
                      className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setVideoPlayState((prev) => ({ ...prev, [idx]: true }));
                      }}
                    >
                      <PlayIcon width={40} height={40} strokeColor="#fff" />
                    </button>
                  </div>
                </>
              )}
              {img.type === "video" && img.src && videoPlayState[idx] && (
                <div className="w-full h-full flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src={img.src + (img.src.includes("?") ? "&autoplay=1" : "?autoplay=1")}
                    title={`Project Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-auto max-h-full bg-black"
                    style={{ display: "block", aspectRatio: "16/9" }}
                  />
                </div>
              )}
              {img.type === "img" && img.src && <ImageWithSpinner src={img.src} alt={`Project Image ${idx + 1}`} />}
            </div>
          ))}
        </figure>

        {PROJECT_IMAGES.length > 1 && (
          <nav className="hidden sm:flex absolute justify-between items-center w-full px-4 left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <CarouselButton
              isActive={modalIndex > 0}
              onClick={handlePrev}
              icon={<ArrowLeftIcon width={32} height={32} strokeColor="#fff" />}
            />
            <CarouselButton
              isActive={modalIndex < PROJECT_IMAGES.length - 1}
              onClick={handleNext}
              icon={<ArrowRightIcon width={32} height={32} strokeColor="#fff" />}
            />
          </nav>
        )}
      </section>
    </div>
  );
};

const ImageWithSpinner = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <ImageLoadingSpinner />}
      <img
        src={src}
        alt={alt}
        className={`max-h-full w-auto max-w-full object-contain mx-auto transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
        style={{ display: "block" }}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        draggable={false}
      />
    </>
  );
};

export default ProjectImageDetail;
