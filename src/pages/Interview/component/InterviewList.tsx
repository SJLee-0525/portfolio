import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PROFILE_INFO } from "@data/ProfileInfo";

gsap.registerPlugin(ScrollTrigger);

const InterviewLists = () => {
  const INTERVIEWS = PROFILE_INFO.interviews;

  const interviewTitleRef = useRef<HTMLHeadingElement>(null);
  const interviewItemRefs = useRef<(HTMLElement | null)[]>([]);
  const interviewAnimRefs = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    interviewAnimRefs.current.forEach((anim) => anim.kill());
    interviewAnimRefs.current = [];

    if (!interviewTitleRef.current || interviewItemRefs.current.length === 0) return;

    gsap.set(interviewTitleRef.current, { opacity: 0, y: -60 });
    const titleAnim = gsap.to(interviewTitleRef.current, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: interviewTitleRef.current,
        start: "top 95%",
        end: "bottom 75%",
        scrub: true,
        toggleActions: "play none none none",
        // markers: true,
      },
    });
    interviewAnimRefs.current.push(titleAnim);

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
      titleAnim.kill();
      interviewAnimRefs.current.forEach((anim) => anim.kill());
      interviewAnimRefs.current = [];
    };
  }, [INTERVIEWS]);

  return (
    <section className="flex-1 flex flex-col items-start justify-start w-full h-fit px-10 py-6 gap-2">
      <h1 className="text-3xl lg:text-4xl text-start font-pre-semi-bold xl:font-pre-bold" ref={interviewTitleRef}>
        Interview
      </h1>

      <section className="flex flex-col w-full h-full gap-16 mt-6">
        {INTERVIEWS &&
          INTERVIEWS.map((interview, index) => (
            <article
              key={index}
              ref={(el) => {
                interviewItemRefs.current[index] = el;
              }}
              className="group flex flex-col justify-start items-start w-full h-fit transition-all duration-300"
            >
              <h3 className="text-xl lg:text-2xl font-pre-bold mb-2">Q. {interview.question}</h3>
              <p className="lg:ps-7 lg:text-lg font-pre-light" style={{ whiteSpace: "pre-line", lineHeight: "1.64" }}>
                {interview.answer.map((p, i) => {
                  return (
                    <span key={i} className="block mb-4">
                      {p}
                    </span>
                  );
                })}
              </p>
            </article>
          ))}
      </section>
    </section>
  );
};

export default InterviewLists;
