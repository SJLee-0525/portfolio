import { useState } from "react";

import { PROFILE_IMAGES } from "@data/ProfileImages";

import CarouselButton from "@components/button/CarouselButton";

import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

const ProfileImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex < PROFILE_IMAGES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-2/5 lg:w-2/5 lg:min-w-lg lg:h-full">
      <div className="w-full h-full">
        <img
          src={PROFILE_IMAGES[currentIndex].src}
          alt={PROFILE_IMAGES[currentIndex].alt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute flex justify-between items-center w-full px-4 left-0 top-1/2 -translate-y-1/2">
        <CarouselButton
          isActive={currentIndex > 0}
          onClick={handlePrevious}
          icon={<ArrowLeftIcon width={32} height={32} strokeColor="#fff" />}
        />
        <CarouselButton
          isActive={currentIndex < PROFILE_IMAGES.length - 1}
          onClick={handleNext}
          icon={<ArrowRightIcon width={32} height={32} strokeColor="#fff" />}
        />
      </div>
    </div>
  );
};

export default ProfileImageCarousel;
