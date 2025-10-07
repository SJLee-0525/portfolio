import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { InnerProfile } from "@/types/profileTypes";

import { PROFILE_INFO } from "@data/ProfileInfo";

import ArrowDownDoubleIcon from "@assets/icon/ArrowDownDoubleIcon";

import ContactInfo from "@pages/profile/component/ProfileContactInfo";

interface ProfileInnerProfileProps {
  innerProfile: InnerProfile;
  onAnimationEnd?: () => void;
  showScroll: boolean;
  setShowScroll: (show: boolean) => void;
  // onScrollToInterview: () => void;
}

const ProfileInnerProfile = ({
  innerProfile,
  onAnimationEnd,
  showScroll,
  setShowScroll,
  // onScrollToInterview,
}: ProfileInnerProfileProps) => {
  const [profileReady, setProfileReady] = useState(false);

  const introRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const finished = useRef(false);
  const animTimeline = useRef<gsap.core.Timeline | null>(null);
  const scrollSectionRef = useRef<HTMLElement>(null);
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

    // 연락처 정보 애니메이션
    if (contactRef.current) {
      gsap.set(contactRef.current, { opacity: 0, y: 40 });
      gsap.to(contactRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: tl.duration() });
    }

    // 타이핑 애니메이션이 끝나면 프로필 준비 완료 상태로 변경
    setProfileReady(true);

    return () => {
      if (animTimeline.current) {
        animTimeline.current.kill();
        animTimeline.current = null;
      }
    };
  }, [innerProfile.introduction, innerProfile.title]);

  useEffect(() => {
    if (!profileReady) return;

    function handleScroll() {
      const el = scrollSectionRef.current;
      if (!el) return;

      const needsScroll = el.scrollHeight > el.clientHeight + 2;
      const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 2;

      setShowScroll(needsScroll && !isAtBottom);
    }

    const el = scrollSectionRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, [profileReady]);

  useEffect(() => {
    if (!profileReady) return;

    if (showScroll && scrollableSectionRef.current) {
      gsap.set(scrollableSectionRef.current, { opacity: 0 });
      gsap.to(scrollableSectionRef.current, {
        opacity: 1,
        delay: 0.7,
        duration: 0.4,
        onComplete: () => {
          gsap.to(scrollableSectionRef.current, {
            y: -8,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power2.inOut",
          });
        },
      });
    } else if (scrollableSectionRef.current) {
      gsap.set(scrollableSectionRef.current, { y: 0, opacity: 0 });
      gsap.killTweensOf(scrollableSectionRef.current);
    }

    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        opacity: showScroll ? 1 : 0,
        delay: 0.7,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [showScroll]);

  return (
    <>
      <section
        className="flex flex-col items-center justify-center xl:justify-between w-full h-fit xl:h-full xl:px-0 xl:py-24 gap-8"
        ref={scrollSectionRef}
      >
        <header className="flex flex-col justify-start items-center xl:items-end w-full h-fit gap-2 px-4">
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
            className="text-center font-pre-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl xl:text-start"
          >
            {innerProfile.title ? innerProfile.title : ""}
          </h1>
        </header>

        <div ref={contactRef} className="w-full h-fit flex flex-col items-center xl:items-end">
          <ContactInfo contacts={PROFILE_INFO.contacts} />
        </div>
      </section>

      {/* 스크롤 가능 & 끝이 아닐 때만 */}
      {showScroll && (
        <div
          ref={scrollableSectionRef}
          className="fixed bottom-6 left-0 flex justify-center w-full h-fit p-2 z-50 pointer-events-none"
          // onClick={onScrollToInterview}
        >
          <ArrowDownDoubleIcon width={24} height={24} strokeColor="#bcc0c3" />
        </div>
      )}

      {/* 그림자 */}
      <div
        ref={shadowRef}
        className="hidden xl:block pointer-events-none absolute left-0 bottom-0 w-full h-10"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1))" }}
      />
    </>
  );
};

export default ProfileInnerProfile;

/*
문제의 원인은 타이핑 효과에서 한글(조합형 문자) 입력 시, 자바스크립트의 문자열 인덱싱이 완성형 글자가 아닌 "유니코드 단위"로 동작하기 때문입니다.
예를 들어 "건반"의 "건"이 완성되기 전에 "ㄱ", "ㅓ", "ㄴ"이 각각 한 글자로 처리되어 "건"이 완성되기 전 "undefined"가 출력될 수 있습니다.

이 문제는 [...intro] (스프레드 연산자)로 문자열을 배열로 변환하면, 한글도 완성형 기준으로 한 글자씩 처리할 수 있어 해결됩니다.
*/
