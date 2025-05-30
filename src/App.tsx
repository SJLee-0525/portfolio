import { useLayoutEffect, useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Profile from "@pages/profile/Profile";
import Projects from "@pages/projects/Projects";
import Interview from "@pages/Interview/Interview";
import Stacks from "@pages/stacks/Stacks";
import Footer from "@pages/footer/Footer";

import MainNavigation from "@components/nav/MainNavigation";
import Modal from "@components/modal/Modal";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [animationReady, setAnimationReady] = useState(false);

  const mainRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLElement>(null);
  const interviewRef = useRef<HTMLElement>(null);
  const stacksRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scopeElement = mainRef.current;
    const profileElement = profileRef.current;
    const contentElement = contentWrapperRef.current;

    if (!scopeElement || !profileElement || !contentElement) return;

    let ctx: gsap.Context | undefined;
    let pinTrigger: ScrollTrigger | undefined;
    let fadeTween: gsap.core.Tween | undefined;
    let showTween: gsap.core.Tween | undefined;

    ctx = gsap.context(() => {
      gsap.set(contentElement, { opacity: 0, y: 60 });
      gsap.set(profileElement, { opacity: 1, y: 0 });

      pinTrigger = ScrollTrigger.create({
        trigger: profileElement,
        start: "top top",
        end: "+=100%",
        pin: false,
        scrub: true,
        onUpdate: (self) => {
          gsap.to(profileElement, {
            opacity: 1 - self.progress,
            y: -60 * self.progress,
            duration: 0.1,
            overwrite: "auto",
          });

          gsap.to(contentElement, {
            opacity: self.progress,
            y: 60 * (1 - self.progress),
            duration: 0.1,
            overwrite: "auto",
          });
        },
      });
    }, scopeElement);

    return () => {
      if (pinTrigger) pinTrigger.kill();
      if (fadeTween) fadeTween.kill();
      if (showTween) showTween.kill();
      if (ctx) ctx.revert();
    };
  }, [mainRef, profileRef, contentWrapperRef]);

  // 네비게이션바 스크롤 이동 함수 (정확한 위치로 이동, 스크롤 보정)
  function scrollToSection(ref: React.RefObject<HTMLElement | null>) {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      window.scrollTo({
        top: rect.top + scrollTop,
        behavior: "smooth",
      });
    }
  }

  // 맨 위로 이동
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 페이지 로드 시 강제로 맨 위로 이동
  useEffect(() => {
    if (window.location.hash) window.location.hash = ""; // 강제로 hash 제거 (SPA 라우터가 아니라면)

    function handleBeforeUnload() {
      window.scrollTo(0, 0);
    }

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const sections = [
      { name: "interview", ref: interviewRef },
      { name: "stacks", ref: stacksRef },
      { name: "projects", ref: projectsRef },
    ];

    function handleScroll() {
      // 활성 로직
      const viewportCenterY = window.innerHeight / 2;
      let newActiveSection: string | null = null;
      let minDistanceToCenter = Infinity;

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const sectionCenterY = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenterY - viewportCenterY);

          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = visibleBottom - visibleTop;

          // 섹션이 화면에 보이고, 최소 10% 이상 보이거나, 높이가 0보다 클 때 활성 후보로 간주
          if (visibleHeight > 0 && visibleHeight >= rect.height * 0.1 && distance < minDistanceToCenter) {
            minDistanceToCenter = distance;
            newActiveSection = section.name;
          }
        }
      }
      setActiveSection(newActiveSection);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드 시 한 번 실행하여 상태 설정

    return () => window.removeEventListener("scroll", handleScroll);
  }, [profileRef, interviewRef, stacksRef, projectsRef]);

  useEffect(() => {
    if (!animationReady) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.backgroundColor = "#f3f4f6";
      }

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.backgroundColor = ""; // 원래 배경색으로 되돌리기

      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.paddingRight = "";
      document.body.style.backgroundColor = "";

      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [animationReady]);

  return (
    <>
      {/* 로딩 중일 때 스크롤 방지 */}
      {!animationReady && (
        <div
          className="fixed inset-0 w-full h-full bg-transparent z-[9999] pointer-events-auto"
          style={{ overscrollBehavior: "none", touchAction: "none" }}
        />
      )}

      <main ref={mainRef} className="flex flex-col justify-start items-center w-full h-fit bg-white ">
        <section ref={profileRef} className="relative w-full h-screen z-[1] bg-gray-100">
          <Profile
            infoReady={animationReady}
            setInfoReady={setAnimationReady}
            onScrollToInterview={() => scrollToSection(interviewRef)}
          />
        </section>

        <section
          ref={contentWrapperRef}
          className="w-full min-h-fit flex justify-between z-[2] bg-white lg:px-12 xl:px-32"
        >
          <aside className="relative hidden xl:block xl:relative w-1/4 min-h-full py-24">
            <MainNavigation
              activeSection={activeSection}
              onScrollToInterview={() => scrollToSection(interviewRef)}
              onScrollToSkills={() => scrollToSection(stacksRef)}
              onScrollToMyWorks={() => scrollToSection(projectsRef)}
              onScrollToTop={scrollToTop}
            />
          </aside>

          <section className="flex-1 w-full h-fit relative lg:px-16">
            <section ref={interviewRef} className="w-full">
              <Interview />
            </section>
            <section ref={stacksRef} className="w-full">
              <Stacks />
            </section>
            <section ref={projectsRef} className="w-full">
              <Projects />
            </section>
          </section>
        </section>

        <Footer onScrollToTop={scrollToTop} />

        <Modal />
      </main>
    </>
  );
};

export default App;
