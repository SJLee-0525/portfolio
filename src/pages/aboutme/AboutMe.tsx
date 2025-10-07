import { useEffect, useRef } from "react";
import gsap from "gsap";

import ProfileInfo from "@pages/aboutme/component/ProfileInfo";
import InterviewLists from "@pages/aboutme/component/InterviewList";

const AboutMe = () => {
  const AboutMeHeaderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elem = AboutMeHeaderRef.current;

    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(elem, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(elem);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative flex flex-col justify-start items-center w-full min-h-screen h-fit py-24 gap-24 bg-white">
      <header className="sticky top-0 w-full h-fit z-10 pt-8 pb-4 bg-white xl:hidden" ref={AboutMeHeaderRef}>
        <h1 className="text-5xl lg:text-6xl inter-350 text-center">ABOUT ME</h1>
      </header>

      <ProfileInfo />
      <InterviewLists />
    </section>
  );
};

export default AboutMe;
