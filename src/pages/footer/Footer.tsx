import { useEffect, useRef } from "react";
import gsap from "gsap";

import { LAST_UPDATE_DATE } from "@data/ProfileInfo";

const KOREAN_THANK_YOU_TEXT = "봐주셔서 감사합니다";

const Footer = ({ onScrollToTop }: { onScrollToTop: () => void }) => {
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const button = buttonRef.current;

    if (!section) return;

    function handleAnimate() {
      if (hasAnimated.current) return;

      hasAnimated.current = true;

      const koreanChars = gsap.utils.toArray<HTMLElement>(".korean-char");
      const thankYouBg = document.getElementById("footer-thankyou-bg");
      const tl = gsap.timeline();

      gsap.set(koreanChars, {
        opacity: 0,
        y: 60,
        scale: 0.3,
        rotationX: -90,
        transformOrigin: "center bottom",
      });

      gsap.set(button, { opacity: 0, y: 20 });

      tl.to(koreanChars, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.1,
      });

      if (thankYouBg) {
        gsap.set(thankYouBg, { opacity: 0, y: 80, scale: 0.9 });
        tl.to(
          thankYouBg,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      if (button) {
        tl.to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.inOut",
            clearProps: "transform", // 애니메이션 종료 후 transform 속성 제거
          },
          "+=0.1" // thankYouBg 이후 약간의 딜레이
        );
      }
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleAnimate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-end items-center w-full h-screen py-16 gap-12 md:gap-20 overflow-hidden bg-white"
    >
      <section
        aria-label={KOREAN_THANK_YOU_TEXT}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center w-full h-fit mb-8 md:mb-0"
      >
        <article className="flex justify-center items-center font-pre-bold text-3xl sm:text-4xl md:text-6xl text-black ">
          {KOREAN_THANK_YOU_TEXT.split("").map((char, index) => (
            <span key={index} className="korean-char" style={{ display: "inline-block", whiteSpace: "pre" }}>
              {char}
            </span>
          ))}
        </article>
        <article
          id="footer-thankyou-bg"
          className="w-full select-none pointer-events-none z-0 font-pre-extra-bold text-center text-6xl sm:text-7xl md:text-7xl lg:text-9xl text-gray-200 opacity-0"
        >
          THANK YOU
        </article>

        <button
          ref={buttonRef}
          className="rounded-full mt-2 px-3.5 py-2 bg-black/80 text-white  font-pre-regular transtion-all duration-300 ease-in-out cursor-pointer hover:bg-black/100 hover:scale-110 opacity-0"
          onClick={onScrollToTop}
        >
          표지로 돌아가기
        </button>
      </section>

      <footer className="w-5/6 h-fit text-center z-10 mt-auto">
        <p className="text-sm inter-500 mb-2 text-text/50">Last updated on {LAST_UPDATE_DATE}</p>

        <p className="text-xs sm:text-sm font-pre-regular">Copyright 2025. Sungjoon Lee All Rights Reserved</p>
        <p className="text-xs sm:text-sm font-pre-regular">React, Tailwind CSS, GSAP을 기반으로 제작되었습니다</p>
      </footer>
    </section>
  );
};

export default Footer;
