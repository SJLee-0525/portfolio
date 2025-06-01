import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import { PROFILE_INFO } from "@data/ProfileInfo";

import ProfileInnerProfile from "@pages/profile/component/ProfileInnerProfile";
import ContactInfo from "@pages/profile/component/ProfileContactInfo";
import ProfileEducation from "@pages/profile/component/ProfileEducation";
import ProfileAwards from "@pages/profile/component/ProfileAwards";

import ArrowDownDoubleIcon from "@assets/icon/ArrowDownDoubleIcon";

interface ProfileInfoProps {
  showScroll: boolean;
  setShowScroll: (show: boolean) => void;
  onScrollToInterview: () => void;
  onProfileInfoReady: () => void;
}

const ProfileInfo = ({ showScroll, setShowScroll, onScrollToInterview, onProfileInfoReady }: ProfileInfoProps) => {
  const [profileReady, setProfileReady] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const innerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLElement>(null);
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableSectionRef.current) {
      gsap.set(scrollableSectionRef.current, { opacity: 1, y: 0 });
    }

    if (innerRef.current) {
      gsap.set(innerRef.current, { opacity: 1, y: 0 });
    }

    if (contactRef.current) {
      gsap.set(contactRef.current, { opacity: 0, y: 40 });
    }

    if (educationRef.current) {
      gsap.set(educationRef.current, { opacity: 0, y: 40 });
    }

    if (awardsRef.current) {
      gsap.set(awardsRef.current, { opacity: 0, y: 40 });
    }

    if (shadowRef.current) {
      gsap.set(shadowRef.current, { opacity: 0 });
    }
  }, []);

  useEffect(() => {
    if (profileReady) {
      if (contactRef.current) {
        gsap.to(contactRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      }

      if (educationRef.current) {
        gsap.to(educationRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            if (onProfileInfoReady) onProfileInfoReady();
          },
        });
      } else {
        if (onProfileInfoReady) onProfileInfoReady();
      }

      if (awardsRef.current) {
        gsap.to(awardsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      } else {
        if (onProfileInfoReady) onProfileInfoReady();
      }
    }
  }, [profileReady, onProfileInfoReady]);

  useEffect(() => {
    if (!profileReady) return;

    function handleScroll() {
      const el = scrollSectionRef.current;
      if (!el) return;

      const needsScroll = el.scrollHeight > el.clientHeight + 2;
      const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 2;

      setShowScroll(needsScroll && !isAtBottom);
      setIsBottom(isAtBottom);
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

  if (!PROFILE_INFO) {
    return null;
  }

  return (
    <>
      <section
        ref={scrollSectionRef}
        className="relative flex-1 flex flex-col items-center w-full h-full gap-2 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <section className="flex flex-col items-center justify-between w-full h-fit py-8 gap-16 xl:h-screen xl:py-20 flex-shrink-0">
          <div ref={innerRef} className="w-full h-fit flex justify-center items-center">
            <ProfileInnerProfile
              innerProfile={PROFILE_INFO.innerProfile}
              onAnimationEnd={() => setProfileReady(true)}
            />
          </div>
          <div ref={contactRef} className="w-full h-fit flex flex-col justify-center items-center">
            <ContactInfo contacts={PROFILE_INFO.contacts} />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center w-full h-fit pb-24 gap-16">
          <div ref={educationRef} className="w-5/6 xl:w-3/4 h-fit">
            <ProfileEducation educations={PROFILE_INFO.educations} />
          </div>
          <div ref={awardsRef} className="w-5/6 xl:w-3/4 h-fit">
            <ProfileAwards awards={PROFILE_INFO.awards} />
          </div>
        </section>
      </section>

      {/* 스크롤 가능 & 끝이 아닐 때만 */}
      {showScroll && (
        <div
          ref={scrollableSectionRef}
          className="fixed bottom-6 flex justify-center w-full xl:w-3/5 h-fit p-2 z-50 pointer-events-none"
        >
          <ArrowDownDoubleIcon width={24} height={24} strokeColor="#bcc0c3" />
        </div>
      )}

      {/* 스크롤 끝에 도달했을 때만 */}
      {isBottom && (
        <div className="fixed bottom-6 flex justify-center w-full xl:w-3/5 h-fit p-2 z-50 pointer-events-none">
          <button
            className="bg-white text-text rounded-full px-5 py-2 shadow-lg text-center text-sm inter-500 transition-all pointer-events-auto cursor-pointer hover:bg-theme/80 hover:text-white"
            onClick={onScrollToInterview}
          >
            MORE
          </button>
        </div>
      )}

      {/* 그림자 */}
      <div
        ref={shadowRef}
        className="hidden xl:block pointer-events-none absolute left-0 bottom-0 w-full xl:w-3/5 h-10"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1))" }}
      />
    </>
  );
};

export default ProfileInfo;
