import "@/styles/animations.css";

import { useState } from "react";

import { PROFILE_IMAGES, EMOJIS } from "@data/ProfileImages";

import { EmojiInstance } from "@/types/iconProps";

// import CarouselButton from "@components/button/CarouselButton";

// import ArrowLeftIcon from "@assets/icon/ArrowLeftIcon";
// import ArrowRightIcon from "@assets/icon/ArrowRightIcon";

function getRandomEmoji() {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
}

const ProfileImageCarousel = () => {
  const [emojis, setEmojis] = useState<EmojiInstance[]>([]);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // function handleNext() {
  //   if (currentIndex < PROFILE_IMAGES.length - 1) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // }

  // function handlePrevious() {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // }

  function handleImageClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newEmoji: EmojiInstance = {
      id: Date.now() + Math.random(),
      x,
      y,
      symbol: getRandomEmoji(),
    };
    setEmojis((prev) => [...prev, newEmoji]);

    setTimeout(() => {
      setEmojis((prev) => prev.filter((emo) => emo.id !== newEmoji.id));
    }, 1100);
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <div className="w-full h-full" onClick={handleImageClick} style={{ cursor: "pointer", position: "relative" }}>
        {emojis.map((emo) => (
          <span
            key={emo.id}
            className="absolute animate-float-emoji text-5xl pointer-events-none select-none z-30"
            style={{ left: emo.x, top: emo.y, transform: "translate(-50%, -50%)" }}
          >
            {emo.symbol}
          </span>
        ))}

        <img src={PROFILE_IMAGES[0].src} alt={PROFILE_IMAGES[0].alt} className="object-cover w-full h-full" />
      </div>

      {/* <div className="absolute flex justify-between items-center w-full px-4 left-0 top-1/2 -translate-y-1/2">
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
      </div> */}
    </div>
  );
};

export default ProfileImageCarousel;
