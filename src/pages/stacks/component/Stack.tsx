import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import clsx from "clsx";

import { StackItem } from "@/types/profileTypes";

import StarIcon from "@assets/icon/StarIcon";

const Stack = ({ stackType, stackItems }: { stackType: string; stackItems: StackItem[] }) => {
  const stackItemRefs = useRef<(HTMLElement | null)[]>([]);
  const stackAnimRefs = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    stackAnimRefs.current.forEach((anim) => anim.kill());
    stackAnimRefs.current = [];

    stackItemRefs.current.forEach((el) => {
      if (el) {
        const anim = gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 70%",
              scrub: true,
              toggleActions: "play none none none",
            },
            clearProps: "transform", // 애니메이션 종료 후 transform 속성 제거
          }
        );

        stackAnimRefs.current.push(anim);
      }
    });

    ScrollTrigger.refresh();

    return () => {
      stackAnimRefs.current.forEach((anim) => anim.kill());
      stackAnimRefs.current = [];
    };
  }, [stackItems]);

  function getStackType(stackType: string): string {
    switch (stackType) {
      case "Languages":
        return "언어";
      case "Libraries":
        return "라이브러리 / 프레임워크";
      case "Tools":
        return "도구";
      default:
        return stackType;
    }
  }

  const stackTypeKor = getStackType(stackType);

  return (
    <div className="mb-16">
      <h1 className="text-3xl text-center font-pre-regular mb-8">{stackTypeKor}</h1>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6">
        {stackItems &&
          stackItems.map((stack, i) => {
            const imageClass = clsx("flex items-center justify-center", {
              "w-[100%] h-[100%]": stack.scale === "100%",
              "w-[90%] h-[90%]": stack.scale === "90%",
              "w-[80%] h-[80%]": stack.scale === "80%",
              "w-[70%] h-[70%]": stack.scale === "70%",
            });

            return (
              <figure
                key={i}
                ref={(el) => {
                  stackItemRefs.current[i] = el;
                }}
                className="flex flex-col items-center justify-center w-fit h-fit gap-1 transform-all duration-300 ease-in-out hover:scale-110"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-light aspect-[1] overflow-hidden">
                  <div className={imageClass}>
                    <img src={stack.icon} alt={stack.name} className="w-full h-full object-contain" />
                  </div>
                </div>

                <figcaption className="mt-1 text-sm text-text text-center font-pre-semi-bold">{stack.name}</figcaption>

                <figure className="flex items-center justify-center w-full h-4 p-1">
                  {stack.level &&
                    Array(stack.level)
                      .fill(null)
                      .map((_, index) => (
                        <span className="flex items-center justify-center w-1/5 h-full" key={index}>
                          <StarIcon width={14} height={14} strokeColor="#E6B50D" />
                        </span>
                      ))}
                </figure>
              </figure>
            );
          })}
      </div>
    </div>
  );
};

export default Stack;
