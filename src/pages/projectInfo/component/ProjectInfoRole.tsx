import { Portfolio } from "@/types/stackTypes";

import ProjectTask from "@pages/projectInfo/component/ProjectTask";

const ProjectInfoRole = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <header className="flex items-start justify-between w-full h-fit">
        <h1 className="text-3xl font-pre-bold">담당 역할</h1>
        <p className="bg-theme px-2.5 py-1 text-[#fff] text-2xl font-pre-bold rounded-lg">
          {portfolio.responsibilities.role}
        </p>
      </header>

      <section className="flex flex-col items-start justify-start w-full h-fit gap-6">
        {portfolio.responsibilities.tasks &&
          Object.entries(portfolio.responsibilities.tasks).map(([task, innerTasks], index) => {
            return <ProjectTask key={index} task={task} innerTasks={innerTasks} />;
          })}
      </section>
    </section>
  );
};

export default ProjectInfoRole;
