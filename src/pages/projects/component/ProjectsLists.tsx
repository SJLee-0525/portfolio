import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectsType } from "@/types/stackTypes";

import useModalStore from "@stores/modalStore";

import ProjectInfo from "@pages/projectInfo/ProjectInfo";

gsap.registerPlugin(ScrollTrigger);

const ProjectsLists = ({ projects }: { projects: ProjectsType }) => {
  const { openModal } = useModalStore();

  const projectItemRefs = useRef<(HTMLElement | null)[]>([]);
  const projectAnimRefs = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    projectAnimRefs.current.forEach((anim) => anim.kill());
    projectAnimRefs.current = [];

    projectItemRefs.current.forEach((el) => {
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
          }
        );
        projectAnimRefs.current.push(anim);
      }
    });

    ScrollTrigger.refresh();
    return () => {
      projectAnimRefs.current.forEach((anim) => anim.kill());
      projectAnimRefs.current = [];
    };
  }, [projects]);

  return (
    <section className="flex-1 flex flex-col items-center justify-between w-full h-fit">
      <div className="flex justify-center items-center w-full px-4 h-fit">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 w-full h-fit items-start justify-start">
          {projects &&
            Object.entries(projects)
              .reverse()
              .map(([key, project], index) => (
                <figure
                  key={key}
                  onClick={() => openModal(<ProjectInfo portfolio={project} />)}
                  ref={(el) => {
                    projectItemRefs.current[index] = el;
                  }}
                  className="group flex flex-col justify-between items-center w-full h-full transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-full aspect-[3/2] rounded-t-2xl overflow-hidden">
                    <img
                      src={project.project.thumbnail}
                      alt="Project"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <figcaption className="flex-1 flex flex-col justify-start w-full h-full gap-1.5 px-6 py-4 rounded-b-2xl bg-black/5">
                    <div className="flex items-start justify-between w-full h-fit">
                      <span className="text-xl text-text font-pre-bold">{project.project.title}</span>
                      <span className="text-sm text-content font-pre-medium">{project.project["mini-duration"]}</span>
                    </div>
                    <p className="text-content font-pre-medium">{project.project.description}</p>
                  </figcaption>
                </figure>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsLists;
