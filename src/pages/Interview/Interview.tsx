import { useEffect, useRef } from "react";
import gsap from "gsap";

import InterviewLists from "@pages/Interview/component/InterviewList";

const Interview = () => {
  const InterviewHeaderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elem = InterviewHeaderRef.current;
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
    <section className="relative flex flex-col justify-between items-center w-full min-h-screen h-fit py-24 gap-18 bg-white">
      <header className="w-full h-fit bg-white xl:hidden" ref={InterviewHeaderRef}>
        <h1 className="text-5xl lg:text-6xl inter-350 text-center">ABOUT ME</h1>
      </header>

      <InterviewLists />
    </section>
  );
};

export default Interview;
