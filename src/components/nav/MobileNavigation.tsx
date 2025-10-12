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

  // Liquid Glass 효과 적용
  useEffect(() => {
    if (!navRef.current) return;

    const detach = attachLiquidGlassToElement(navRef.current, {
      width: window.innerWidth,
      height: 56,
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

  function handleNavigation(scrollFunction: () => void) {
    // 기존 타이머가 있으면 취소
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);

    isNavigatingRef.current = true;
    scrollFunction();

    // 새로운 타이머 설정
    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1800);
  }

  return (
    <nav className="slide-down-nav fixed flex justify-center sm:justify-start items-start top-0 left-0 w-full sm:max-w-120 xl:w-0 h-fit p-2.5 z-10 pointer-events-none">
      <section
        ref={navRef}
        className={`flex justify-center items-center ${menuOpen ? "w-full h-14" : "w-32 h-8"} bg-white/25 rounded-full transition-width duration-200 ease-in-out pointer-events-auto`}
      >
        {/* 닫힘 상태 */}
        <header
          className={`flex justify-center items-center ${menuOpen ? "w-0 opacity-0" : "w-28 opacity-100"} h-full gap-1.5 rounded-full transition-all duration-200 ease-in-out pointer-events-auto cursor-pointer`}
          onClick={() => setMenuOpen(true)}
        >
          <figure className="w-fit h-fit aspect-[1/1]">
            {!activeSection && <ProfileIcon width={20} height={20} strokeColor="#000" />}
            {activeSection === "interview" && <InfoIcon width={20} height={20} strokeColor="#000" />}
            {activeSection === "stacks" && <SkillIcon width={20} height={20} strokeColor="#000" />}
            {(activeSection === "projects" || activeSection === "footer") && (
              <ProjectIcon width={20} height={20} strokeColor="#000" />
            )}
          </figure>

          <h1 className="m-0 text-center font-pre-regular text-sm whitespace-nowrap">
            {!activeSection && "PROFILE"}
            {activeSection === "interview" && "ABOUT ME"}
            {activeSection === "stacks" && "SKILLS"}
            {(activeSection === "projects" || activeSection === "footer") && "MY WORKS"}
          </h1>
        </header>

        {/* 열림 상태 */}
        <ul
          className={`flex justify-between items-center h-full overflow-hidden transition-all duration-200 ease-in-out ${
            menuOpen ? "w-full p-1 opacity-100" : "w-0 p-0 opacity-0"
          }`}
        >
          <li
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${!activeSection ? "bg-content/25" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToTop)}
          >
            <ProfileIcon width={22} height={22} strokeColor={!activeSection ? "#0a5685" : "black"} />
            <span
              className={`text-[0.65rem] ${!activeSection ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              Profile
            </span>
          </li>

          <li
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${activeSection === "interview" ? "bg-content/25" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToInterview)}
          >
            <InfoIcon width={22} height={22} strokeColor={activeSection === "interview" ? "#0a5685" : "black"} />
            <span
              className={`text-[0.65rem] ${activeSection === "interview" ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              About
            </span>
          </li>

          <li
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${activeSection === "stacks" ? "bg-content/25" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToSkills)}
          >
            <SkillIcon width={22} height={22} strokeColor={activeSection === "stacks" ? "#0a5685" : "black"} />
            <span
              className={`text-[0.65rem] ${activeSection === "stacks" ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              Skills
            </span>
          </li>

          <li
            className={`flex flex-col justify-between items-center px-2 py-1 w-full max-w-22 h-full ${activeSection === "projects" || activeSection === "footer" ? "bg-content/25" : "bg-transparent hover:bg-content/20"} rounded-full transition-colors duration-300 cursor-pointer`}
            onClick={() => handleNavigation(onScrollToMyWorks)}
          >
            <ProjectIcon
              width={22}
              height={22}
              strokeColor={activeSection === "projects" || activeSection === "footer" ? "#0a5685" : "black"}
            />
            <span
              className={`text-[0.65rem] ${activeSection === "projects" || activeSection === "footer" ? "text-[#0a5685] font-pre-bold" : "text-black font-pre-regular"}`}
            >
              My Works
            </span>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default MobileNavigation;
