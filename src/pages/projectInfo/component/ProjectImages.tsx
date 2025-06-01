import { useState, useEffect } from "react";

import { Portfolio } from "@/types/stackTypes";

import ImageLoadingSpinner from "@components/spinner/ImageLoadingSpinner";
import CarouselButton from "@components/button/CarouselButton";

import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

const ProjectImages = ({ portfolio }: { portfolio: Portfolio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoadingStatus, setImageLoadingStatus] = useState<Record<string, boolean>>({}); // 각 이미지 SRC를 키로 사용하여 로딩 상태를 저장하는 객체

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

  return (
    <section className="relative w-full h-fit overflow-hidden">
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
          <div key={index} className="w-full flex-shrink-0" style={{ width: "100%" }}>
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/15">
              {item.type === "video" && item.src && (
                <iframe
                  width="100%"
                  height="100%"
                  src={item.src}
                  title="YouTube video player"
                  frameBorder={0}
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
        <nav className="absolute flex justify-between items-center w-full px-4 left-0 top-1/2 -translate-y-1/2 z-20">
          <CarouselButton
            isActive={currentIndex > 0}
            onClick={handlePrevious}
            icon={<ArrowLeftIcon width={32} height={32} strokeColor="#fff" />}
          />
          <CarouselButton
            isActive={currentIndex < PROJECT_IMAGES.length - 1}
            onClick={handleNext}
            icon={<ArrowRightIcon width={32} height={32} strokeColor="#fff" />}
          />
        </nav>
      )}
    </section>
  );
};

export default ProjectImages;
