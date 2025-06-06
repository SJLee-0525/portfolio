import { Portfolio } from "@/types/stackTypes";

import ProjectStack from "@pages/projectInfo/component/ProjectStack";

const ProjectStacks = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <header className="flex items-center justify-between w-full h-fit gap-4">
        <h1 className="text-3xl font-pre-bold">🔨 사용 기술</h1>
      </header>

      <section className="flex flex-col items-start justify-start w-full h-fit gap-4">
        {Object.entries(portfolio.technologies).map(([stackType, stackItems], index) => {
          return (
            <div key={`${stackType}-${index}`} className="flex flex-col items-start justify-start w-full h-fit gap-2">
              <h3 className="text-lg text-text font-pre-semi-bold">{stackType}</h3>
              <ul className="flex flex-wrap items-center justify-start gap-x-2 gap-y-2">
                {stackItems.map((stackObj, idx) =>
                  Object.entries(stackObj).map(([stack, reason]) => (
                    <ProjectStack key={`${stack}-${idx}`} stack={stack} reason={reason} />
                  ))
                )}
              </ul>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ProjectStacks;
