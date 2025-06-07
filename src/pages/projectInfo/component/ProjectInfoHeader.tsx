import { Portfolio } from "@/types/stackTypes";

import GithubIcon from "@assets/icon/GithubIcon";
import PresentationIcon from "@assets/icon/PresentationIcon";

const ProjectInfoHeader = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <header className="sticky top-0 bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between w-full h-fit border-b border-gray-200 z-10">
      <section className="flex items-center justify-start w-fit h-fit gap-4">
        <figure className="flex items-center justify-center w-12 h-12 aspect-[1/1] bg-white overflow-hidden">
          {portfolio.project.logo ? (
            <img
              src={portfolio.project.logo}
              srcSet={`
                ${portfolio.project.logoSmall} 48w,
                ${portfolio.project.logoMedium} 96w,
                ${portfolio.project.logoLarge} 192w
              `}
              sizes="(max-width: 1280px) 48px, (max-width: 1920px) 96px, 192px"
              alt="logo"
            />
          ) : (
            <span className="w-full h-full flex items-center justify-center rounded-full bg-gray-200" />
          )}
        </figure>
        <figcaption className="flex flex-col items-start justify-start w-fit h-fit gap-0.5 py-3.5">
          <h3 className="text-3xl text-text font-pre-bold">{portfolio.project.title}</h3>
          <span className="flex flex-col items-start justify-start w-full h-fit">
            <p className="text-theme font-pre-bold">{portfolio.project.name}</p>
            {/* <p className="text-text font-pre-medium">{portfolio.project.description}</p> */}
          </span>
        </figcaption>
      </section>

      <section className="hidden lg:flex items-center justify-center w-fit h-fit pe-12 gap-2">
        <a
          href={portfolio.project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent hover:bg-black/10 transition-colors duration-300"
        >
          <GithubIcon />
        </a>
        <a
          href={portfolio.project.presentation}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent hover:bg-black/10 transition-colors duration-300"
        >
          <PresentationIcon width={30} height={30} strokeColor="black" />
        </a>
      </section>
    </header>
  );
};

export default ProjectInfoHeader;
