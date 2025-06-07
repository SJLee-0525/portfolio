import { useState, useEffect } from "react";

import { Portfolio } from "@/types/stackTypes";

import useModalStore from "@stores/modalStore";

import ProjectImageDetailModal from "@pages/projectInfo/component/ProjectImageDetailModal";

import ImageLoadingSpinner from "@components/spinner/ImageLoadingSpinner";
import CarouselButton from "@components/button/CarouselButton";

import ExpandIcon from "@assets/icon/ExpandIcon";
import PlayIcon from "@assets/icon/PlayIcon";
import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

const ProjectImages = ({ portfolio }: { portfolio: Portfolio }) => {
  const { openImageModal } = useModalStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoadingStatus, setImageLoadingStatus] = useState<Record<string, boolean>>({});
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [videoPlayState, setVideoPlayState] = useState<Record<number, boolean>>({}); // 비디오별 재생 상태

  const PROJECT_IMAGES = portfolio.project.imgSrc || [];

  useEffect(() => {
    const initialLoadingStatus: Record<string, boolean> = {};

    if (PROJECT_IMAGES) {
      PROJECT_IMAGES.forEach((item) => {
        if (item.type === "img" && item.src) {
          initialLoadingStatus[item.src] = true; // 초기에 모든 이미지를 로딩 중으로 설정
        }
      });
    }

    setImageLoadingStatus(initialLoadingStatus);
    setCurrentIndex(0); // 포트폴리오 변경 시 캐러셀 인덱스 초기화
  }, [portfolio.project.imgSrc]); // portfolio 객체 전체 대신 imgSrc 배열을 직접 의존성으로 사용

  function handleNext() {
    if (currentIndex < PROJECT_IMAGES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleImageLoad(src: string) {
    setImageLoadingStatus((prevStatus) => ({ ...prevStatus, [src]: false }));
  }

  function handleImageError(src: string) {
    console.error(`Failed to load image: ${src}`);

    setImageLoadingStatus((prevStatus) => ({ ...prevStatus, [src]: false }));
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
        handlePrevious();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  }

  // 유튜브 썸네일 추출 함수
  function getYoutubeThumbnail(url: string) {
    // embed, watch 등 다양한 형태 지원
    const match = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : undefined;
  }

  return (
    <>
      <section
        className="relative w-full h-fit overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="absolute bottom-4 right-4 z-20 p-2 flex items-center justify-center rounded-full bg-black/20 transition-all duration-300 ease-in-out cursor-pointer pointer-events-auto hover:bg-black/40"
          aria-label="확대"
          onClick={() =>
            openImageModal(
              <ProjectImageDetailModal
                PROJECT_IMAGES={PROJECT_IMAGES}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            )
          }
          tabIndex={0}
        >
          <ExpandIcon width={18} height={18} strokeColor="#fff" />
        </button>

        <figure
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {PROJECT_IMAGES.length === 0 && (
            <div className="w-full flex-shrink-0" style={{ width: "100%" }}>
              <div className="aspect-[16/9] bg-black/15 flex items-center justify-center">
                <p className="text-text font-pre-bold">이미지가 없습니다.</p>
              </div>
            </div>
          )}

          {PROJECT_IMAGES.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 cursor-pointer" style={{ width: "100%" }}>
              <div
                className="relative w-full aspect-[16/9] overflow-hidden bg-black/15 pointer-events-auto"
                title="클릭하시면 크게 보실 수 있습니다."
                onClick={() => {
                  if (!(item.type === "video" && videoPlayState[index])) {
                    openImageModal(
                      <ProjectImageDetailModal
                        PROJECT_IMAGES={PROJECT_IMAGES}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                      />
                    );
                  }
                }}
              >
                {item.type === "video" && item.src && !videoPlayState[index] && (
                  <>
                    {/* 썸네일(유튜브) + 재생버튼 오버레이 */}
                    <img
                      src={getYoutubeThumbnail(item.src) || ""}
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
                )}
                {item.type === "video" && item.src && videoPlayState[index] && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={item.src + (item.src.includes("?") ? "&autoplay=1" : "?autoplay=1")}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ border: "none", display: "block" }}
                  />
                )}
                {item.type === "img" && item.src && (
                  <>
                    {imageLoadingStatus[item.src] && <ImageLoadingSpinner />}
                    <img
                      src={item.src}
                      alt={`프로젝트 이미지 ${index + 1}`}
                      className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoadingStatus[item.src] ? "opacity-0" : "opacity-100"}`}
                      onLoad={() => handleImageLoad(item.src)}
                      onError={() => handleImageError(item.src)}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </figure>

        {PROJECT_IMAGES.length > 1 && (
          <nav
            className="hidden sm:flex absolute justify-between items-center w-full h-8 px-4 left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
            onClick={(e) => e.stopPropagation()} // 버튼 클릭 시 상위 onClick 전파 방지
          >
            <div className="pointer-events-auto flex items-center h-full">
              <CarouselButton
                isActive={currentIndex > 0}
                onClick={handlePrevious}
                icon={<ArrowLeftIcon width={32} height={32} strokeColor="#fff" />}
              />
            </div>
            <div className="pointer-events-auto flex items-center h-full">
              <CarouselButton
                isActive={currentIndex < PROJECT_IMAGES.length - 1}
                onClick={handleNext}
                icon={<ArrowRightIcon width={32} height={32} strokeColor="#fff" />}
              />
            </div>
          </nav>
        )}
      </section>

      <nav className="w-full h-fit py-2.5 flex justify-center items-center ">
        {(() => {
          const maxIndicators = 7; // 최대 표시할 인디케이터 개수
          const total = PROJECT_IMAGES.length;
          if (total === 0) return null;

          let start = 0;
          let end = total;

          if (total > maxIndicators) {
            if (currentIndex <= 3) {
              start = 0;
              end = maxIndicators;
            } else if (currentIndex >= total - 4) {
              start = total - maxIndicators;
              end = total;
            } else {
              start = currentIndex - 3;
              end = currentIndex + 4;
            }
          }

          return Array(end - start)
            .fill(0)
            .map((_, i) => {
              const index = start + i;

              let opacity = "opacity-200";
              if (total > maxIndicators) {
                if ((index === start && start !== 0) || (index === end - 1 && end !== total)) {
                  opacity = "opacity-50 ";
                }
              }
              return (
                <button
                  key={index}
                  className={`aspect-[1/1] rounded-full mx-1  cursor-pointer ${
                    currentIndex === index ? "bg-theme w-2 h-2" : "bg-gray-300 w-1.5 h-1.5"
                  } ${opacity}`}
                  onClick={() => setCurrentIndex(index)}
                />
              );
            });
        })()}
      </nav>
    </>
  );
};

export default ProjectImages;
