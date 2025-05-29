import { useEffect, useRef } from "react";
import gsap from "gsap";

import { PROFILE_INFO } from "@data/ProfileInfo";

import Stack from "@pages/stacks/component/Stack";

const Stacks = () => {
  const stacks = PROFILE_INFO.stacks;

  const SkillHeaderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elem = SkillHeaderRef.current;
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
      <header className="w-full h-fit bg-white" ref={SkillHeaderRef}>
        <h1 className="text-5xl lg:text-6xl inter-300 text-center">SKILLS</h1>
      </header>

      <section className="flex-1 flex flex-col items-center justify-start w-full lg:w-3/5 h-fit gap-4">
        {stacks &&
          Object.entries(stacks).map(([stackType, stackItems], index) => {
            return (
              <div key={index} className="flex flex-col w-full h-full px-4 gap-4">
                <Stack stackType={stackType} stackItems={stackItems} />
              </div>
            );
          })}
      </section>
    </section>
  );
};

export default Stacks;
