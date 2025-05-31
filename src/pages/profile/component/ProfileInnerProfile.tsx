import { useEffect, useRef } from "react";
import gsap from "gsap";

import { InnerProfile } from "@/types/profileTypes";

interface ProfileInnerProfileProps {
  innerProfile: InnerProfile;
  onAnimationEnd?: () => void;
}

const ProfileInnerProfile = ({ innerProfile, onAnimationEnd }: ProfileInnerProfileProps) => {
  const introRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const finished = useRef(false);
  const animTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const introChars = introRef.current ? introRef.current.querySelectorAll<HTMLElement>(".intro-char") : [];
    const title = titleRef.current;

    if (!introChars.length || !title) return;

    // 기존 타임라인이 있다면 정리
    if (animTimeline.current) {
      animTimeline.current.kill();
      animTimeline.current = null;
    }

    gsap.set(introChars, {
      opacity: 0,
      y: 32,
      scale: 0.3,
      rotationX: -90,
      transformOrigin: "center bottom",
    });

    gsap.set(title, { opacity: 0, y: 40 });

    const tl = gsap.timeline();
    tl.to(introChars, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
      stagger: 0.05,
    });

    tl.to(
      title,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        onComplete: () => {
          if (!finished.current && onAnimationEnd) {
            finished.current = true;
            onAnimationEnd();
          }
        },
      },
      "+=0.1"
    );

    animTimeline.current = tl;

    return () => {
      if (animTimeline.current) {
        animTimeline.current.kill();
        animTimeline.current = null;
      }
    };
  }, [innerProfile.introduction, innerProfile.title]);

  return (
    <section className="flex flex-col w-full lg:w-4/5 h-fit px-2">
      <header className="flex flex-col w-full h-full gap-2 px-4 text-start">
        <p
          ref={introRef}
          className="text-content text-center font-pre-semi-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xl:text-start"
        >
          {innerProfile.introduction
            ? [...innerProfile.introduction].map((char, idx) => (
                <span key={idx} className="intro-char" style={{ display: "inline-block", whiteSpace: "pre" }}>
                  {char}
                </span>
              ))
            : ""}
        </p>
        <h1
          ref={titleRef}
          className="text-center font-pre-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-start"
        >
          {innerProfile.title ? innerProfile.title : ""}
        </h1>
      </header>
    </section>
  );
};

export default ProfileInnerProfile;

/*
문제의 원인은 타이핑 효과에서 한글(조합형 문자) 입력 시, 자바스크립트의 문자열 인덱싱이 완성형 글자가 아닌 "유니코드 단위"로 동작하기 때문입니다.
예를 들어 "건반"의 "건"이 완성되기 전에 "ㄱ", "ㅓ", "ㄴ"이 각각 한 글자로 처리되어 "건"이 완성되기 전 "undefined"가 출력될 수 있습니다.

이 문제는 [...intro] (스프레드 연산자)로 문자열을 배열로 변환하면, 한글도 완성형 기준으로 한 글자씩 처리할 수 있어 해결됩니다.
*/
