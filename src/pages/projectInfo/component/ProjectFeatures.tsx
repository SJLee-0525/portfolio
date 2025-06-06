import { Portfolio } from "@/types/stackTypes";

import ProjectFeature from "@pages/projectInfo/component/ProjectFeature";

const ProjectFeatures = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <header className="flex items-center justify-between w-full h-fit gap-4">
        <h1 className="text-3xl font-pre-bold">📋 주요 기능</h1>
      </header>

      <section className="flex flex-col items-start justify-start w-full h-fit gap-6">
        {Object.entries(portfolio.project.main_feature).map(([mainFeature, descriptions], index) => {
          return <ProjectFeature key={index} feature={mainFeature} descriptions={descriptions} />;
        })}
      </section>
    </section>
  );
};

export default ProjectFeatures;
