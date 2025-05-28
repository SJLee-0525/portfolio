import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PROFILE_INFO } from "@data/ProfileInfo";

gsap.registerPlugin(ScrollTrigger);

const InterviewLists = () => {
  const INTERVIEWS = PROFILE_INFO.interviews;
  const interviewItemRefs = useRef<(HTMLElement | null)[]>([]);
  const interviewAnimRefs = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    interviewAnimRefs.current.forEach((anim) => anim.kill());
    interviewAnimRefs.current = [];

    interviewItemRefs.current.forEach((el, i) => {
      if (el) {
        const anim = gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "bottom 75%",
              scrub: true,
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
        interviewAnimRefs.current.push(anim);
      }
    });

    ScrollTrigger.refresh();
    return () => {
      interviewAnimRefs.current.forEach((anim) => anim.kill());
      interviewAnimRefs.current = [];
    };
  }, [INTERVIEWS]);

  return (
    <section className="flex-1 flex flex-col items-center justify-start w-full lg:w-3/5 h-fit gap-4">
      {INTERVIEWS &&
        INTERVIEWS.map((interview, index) => (
          <article
            key={index}
            ref={(el) => {
              interviewItemRefs.current[index] = el;
            }}
            className="group flex flex-col justify-start items-start w-full h-fit p-6 gap-4 bg-white/50 rounded-3xl transition-all duration-300"
          >
            <h3 className="text-2xl font-pre-bold">Q. {interview.question}</h3>
            <p className="lg:ps-7 text-lg font-pre-light" style={{ whiteSpace: "pre-line" }}>
              {interview.answer}
            </p>
          </article>
        ))}
    </section>
  );
};

export default InterviewLists;
