import { Portfolio } from "@/types/stackTypes";

import ProjectImages from "@pages/projectInfo/component/ProjectImages";
import ProjectInfoHeader from "@pages/projectInfo/component/ProjectInfoHeader";
import ProjectDescription from "@pages/projectInfo/component/ProjectDesciprtion";
import ProjectInfoRole from "@pages/projectInfo/component/ProjectInfoRole";
import ProjectInfoTroubleShooting from "@pages/projectInfo/component/ProjectInfoTroubleShooting";

const ProjectInfo = ({ portfolio }: { portfolio: Portfolio }) => {
  if (!portfolio) {
    return <div className="flex items-center justify-center w-full h-full">No project selected</div>;
  }

  return (
    <section className="flex flex-col items-center justify-start w-full h-fit bg-white">
      <ProjectImages portfolio={portfolio} />

      <section className="relative flex flex-1 flex-col items-start justify-start w-full h-full px-8 pb-4">
        <ProjectInfoHeader portfolio={portfolio} />

        <section className="flex flex-col items-start justify-start w-full h-full gap-16 py-4">
          <ProjectDescription portfolio={portfolio} />
          <ProjectInfoRole portfolio={portfolio} />
          <ProjectInfoTroubleShooting portfolio={portfolio} />
        </section>
      </section>
    </section>
  );
};

export default ProjectInfo;
