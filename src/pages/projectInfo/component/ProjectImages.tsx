import { useState } from "react";

import { Portfolio } from "@/types/stackTypes";

import CarouselButton from "@components/button/CarouselButton";

import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

const ProjectImages = ({ portfolio }: { portfolio: Portfolio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const PROJECT_IMAGES = portfolio.project.imgSrc;

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
            <div className="w-full aspect-[16/9] overflow-hidden bg-black/15">
              {item.type === "video" && (
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
              {item.type === "img" && (
                <img src={item.src} alt={`프로젝트 이미지 ${index + 1}`} className="w-full h-full object-contain" />
              )}
            </div>
          </div>
        ))}
      </figure>

      {PROJECT_IMAGES.length > 1 && (
        <nav className="absolute flex justify-between items-center w-full px-4 left-0 top-1/2 -translate-y-1/2">
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
      {/* <p className="text-sm text-content font-pre-semi-bold">이미지를 클릭하시면 더 크게 확인이 가능합니다.</p> */}
    </section>
  );
};

export default ProjectImages;
