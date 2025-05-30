import ArrowUpIcon from "@assets/icon/ArrowUpIcon";

const MainNavigation = ({
  activeSection,
  onScrollToInterview,
  onScrollToSkills,
  onScrollToMyWorks,
  onScrollToTop,
}: {
  activeSection: string | null;
  onScrollToInterview: () => void;
  onScrollToSkills: () => void;
  onScrollToMyWorks: () => void;
  onScrollToTop: () => void; // Optional prop for scrolling to top
}) => {
  return (
    <nav className="sticky top-24 left-0 flex flex-col items-start justify-between w-full min-h-[78vh] py-6 text-start">
      <div className="flex flex-col items-start w-full h-fit gap-4">
        <button
          onClick={onScrollToInterview} // Uses the new specific interviewRef
          className={`inter-300 transition-all duration-300 ease-in-out ${activeSection === "interview" ? "text-5xl inter-350" : "text-3xl text-text/50 hover:text-4xl hover:text-text/80"}`}
        >
          ABOUT ME
        </button>
        <button
          onClick={onScrollToSkills}
          className={`inter-300 transition-all duration-300 ease-in-out ${activeSection === "stacks" ? "text-5xl inter-350" : "text-3xl text-text/50 hover:text-4xl hover:text-text/80"}`}
        >
          SKILLS
        </button>
        <button
          onClick={onScrollToMyWorks}
          className={`inter-300 transition-all duration-300 ease-in-out ${activeSection === "projects" ? "text-5xl inter-350" : "text-3xl text-text/50 hover:text-4xl hover:text-text/80"}`}
        >
          MY WORKS
        </button>
      </div>

      <button
        onClick={onScrollToTop}
        className="flex justify-center items-center gap-2.5 pe-4 rounded-full text-black/80 hover:bg-black/50 hover:text-white transition-colors"
        aria-label="Scroll to top"
      >
        <figure className="p-1.5 bg-black/60 rounded-full">
          <ArrowUpIcon width={28} height={28} strokeColor="white" />
        </figure>
        <span className="inter-300">TOP</span>
      </button>
    </nav>
  );
};

export default MainNavigation;
