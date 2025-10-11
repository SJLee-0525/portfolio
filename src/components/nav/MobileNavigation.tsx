import { useState, useRef, useEffect } from "react";

import { attachLiquidGlassToElement, defaultFragment } from "@/lib/liquid-glass-shader";

import ProfileIcon from "@assets/icon/ProfileIcon";
import InfoIcon from "@assets/icon/InfoIcon";
import SkillIcon from "@assets/icon/SkillIcon";
import ProjectIcon from "@assets/icon/ProjectIcon";

const MobileNavigation = ({
  infoReady,
  activeSection,
  onScrollToTop,
  onScrollToInterview,
  onScrollToSkills,
  onScrollToMyWorks,
}: {
  infoReady: boolean;
  activeSection: string | null;
  onScrollToTop: () => void;
  onScrollToInterview: () => void;
  onScrollToSkills: () => void;
  onScrollToMyWorks: () => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const HEADER = {
    profile: { name: "PROFILE" },
    interview: { name: "ABOUT ME" },
    stacks: { name: "SKILLS" },
    projects: { name: "MY WORKS" },
  };

  // Liquid Glass 효과 적용
  useEffect(() => {
    if (!navRef.current) return;

    const detach = attachLiquidGlassToElement(navRef.current, {
      width: window.innerWidth,
      height: 60,
      fragment: defaultFragment, // 원본 fragment 사용
    });

    return detach;
  }, []);

  // 스크롤 방향에 따라 메뉴 숨기기/보이기
  useEffect(() => {
    function handleScroll() {
      if (isNavigatingRef.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) setMenuOpen(false);
      else setMenuOpen(true);

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // infoReady가 true가 되면 메뉴 보이기
  useEffect(() => {
    if (infoReady && navRef.current) {
      const timeoutId = setTimeout(() => {
        setMenuOpen(true);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [infoReady]);

  const handleNavigation = (scrollFunction: () => void) => {
    // 기존 타이머가 있으면 취소
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);

    isNavigatingRef.current = true;
    scrollFunction();

    // 새로운 타이머 설정
    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1800);
  };

  return (
    <nav className="slide-down-nav fixed flex justify-center sm:justify-start items-start top-0 left-0 w-full sm:max-w-120 xl:w-0 h-fit pt-2 px-4 z-10 pointer-events-none">
      <section
        ref={navRef}
        className={`flex justify-center items-center ${menuOpen ? "w-full" : "w-28"} h-14 bg-white/25 rounded-full transition-width duration-200 ease-in-out pointer-events-auto`}
      >
        <header
          className={`flex justify-center items-center ${menuOpen ? "w-0 opacity-0" : "w-28 opacity-100"} h-fit rounded-full transition-all duration-200 ease-in-out pointer-events-auto cursor-pointer`}
          onClick={() => setMenuOpen(true)}
        >
          <h1 className="m-0 text-center font-pre-medium text-sm whitespace-nowrap">
            {!activeSection && HEADER.profile.name}
            {activeSection === "interview" && HEADER.interview.name}
            {activeSection === "stacks" && HEADER.stacks.name}
            {(activeSection === "projects" || activeSection === "footer") && HEADER.projects.name}
          </h1>
        </header>

        <section
          className={`flex justify-between items-center h-full overflow-hidden transition-all duration-200 ease-in-out ${
            menuOpen ? "w-full p-1 opacity-100" : "w-0 p-0 opacity-0"
          }`}
        >
          <button
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${!activeSection ? "bg-content/15" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToTop)}
          >
            <ProfileIcon width={22} height={22} strokeColor={!activeSection ? "#0a5685" : "black"} />
            <span
              className={`text-xs ${!activeSection ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              Profile
            </span>
          </button>

          <button
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${activeSection === "interview" ? "bg-content/16" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToInterview)}
          >
            <InfoIcon width={22} height={22} strokeColor={activeSection === "interview" ? "#0a5685" : "black"} />
            <span
              className={`text-xs ${activeSection === "interview" ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              About
            </span>
          </button>

          <button
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${activeSection === "stacks" ? "bg-content/15" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToSkills)}
          >
            <SkillIcon width={22} height={22} strokeColor={activeSection === "stacks" ? "#0a5685" : "black"} />
            <span
              className={`text-xs ${activeSection === "stacks" ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              Skills
            </span>
          </button>

          <button
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${activeSection === "projects" || activeSection === "footer" ? "bg-content/15" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToMyWorks)}
          >
            <ProjectIcon
              width={22}
              height={22}
              strokeColor={activeSection === "projects" || activeSection === "footer" ? "#0a5685" : "black"}
            />
            <span
              className={`text-xs ${activeSection === "projects" || activeSection === "footer" ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              My Works
            </span>
          </button>
        </section>
      </section>
    </nav>
  );
};

export default MobileNavigation;
