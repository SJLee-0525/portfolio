import { useState, useEffect } from "react";

import { Portfolio } from "@/types/stackTypes";

import useModalStore from "@stores/modalStore";

import ProjectImageDetail from "@pages/projectInfo/component/ProjectImageDetail";

import NoImage from "@components/image/NoImage";
import CarouselButton from "@components/button/CarouselButton";
import VideoThumbnail from "@components/video/VideoThumbnail";
import VideoPlayer from "@components/video/VideoPlayer";
import ImageWithSpinner from "@components/image/ImageWithSpinner";
import ImageIndicator from "@components/image/ImageIndicator";

import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

const ProjectImages = ({ portfolio }: { portfolio: Portfolio }) => {
  const { openImageModal } = useModalStore();

  const [currentIndex, setCurrentIndex] = useState(0);
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

  return (
    <>
      <section
        className="relative w-full h-fit overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <figure
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {PROJECT_IMAGES.length === 0 && <NoImage />}
          {PROJECT_IMAGES.length > 0 &&
            PROJECT_IMAGES.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 cursor-pointer" style={{ width: "100%" }}>
                <div
                  className="relative w-full aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-black/15 pointer-events-auto"
                  title="클릭하시면 크게 보실 수 있습니다."
                  onClick={() => {
                    if (!(item.type === "video" && videoPlayState[index])) {
                      openImageModal(
                        <ProjectImageDetail
                          PROJECT_IMAGES={PROJECT_IMAGES}
                          currentIndex={currentIndex}
                          setCurrentIndex={setCurrentIndex}
                        />
                      );
                    }
                  }}
                >
                  {item.type === "video" && item.src && !videoPlayState[index] && (
                    <VideoThumbnail url={item.src} index={index} setVideoPlayState={setVideoPlayState} />
                  )}
                  {item.type === "video" && item.src && videoPlayState[index] && (
                    <VideoPlayer url={item.src} index={index} />
                  )}
                  {item.type === "img" && item.src && (
                    <ImageWithSpinner src={item.src} alt={`프로젝트 이미지 ${index + 1}`} />
                  )}
                </div>
              </div>
            ))}
        </figure>

        {PROJECT_IMAGES.length > 1 && (
          <nav
            className="hidden sm:flex absolute justify-between items-center w-full h-8 px-5.5 left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
            onClick={(e) => e.stopPropagation()} // 버튼 클릭 시 상위 onClick 전파 방지
          >
            <div className="pointer-events-auto flex items-center h-full">
              <CarouselButton
                isActive={currentIndex > 0}
                onClick={handlePrevious}
                icon={<ArrowLeftIcon width={28} height={28} strokeColor="#fff" />}
              />
            </div>
            <div className="pointer-events-auto flex items-center h-full">
              <CarouselButton
                isActive={currentIndex < PROJECT_IMAGES.length - 1}
                onClick={handleNext}
                icon={<ArrowRightIcon width={28} height={28} strokeColor="#fff" />}
              />
            </div>
          </nav>
        )}
      </section>

      <nav className="w-full h-fit py-2.5 flex justify-center items-center ">
        <ImageIndicator
          total={PROJECT_IMAGES.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          maxIndicators={7}
        />
      </nav>
    </>
  );
};

export default ProjectImages;
