import { useEffect, useRef } from "react";
import gsap from "gsap";

import { PROJECTS } from "@data/ProjectsList";

import ProjectsLists from "@pages/projects/component/ProjectsLists";

const Projects = () => {
  const projectsHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = projectsHeaderRef.current;
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
    <section className="flex flex-col justify-between items-center w-full min-h-screen h-fit gap-24 py-24 bg-white">
      <header className="w-full h-fit bg-white" ref={projectsHeaderRef}>
        <h1 className="text-5xl lg:text-6xl font-pre-light text-center">MY WORKS</h1>
      </header>

      <ProjectsLists projects={PROJECTS} />
    </section>
  );
};

export default Projects;
