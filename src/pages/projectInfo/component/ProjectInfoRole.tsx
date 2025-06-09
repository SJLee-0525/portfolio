import { useState, useEffect } from "react";

import { Portfolio } from "@/types/stackTypes";

import { getOpenState } from "@utils/getProjectData";

import OpenButton from "@components/button/OpenButton";
import ListToggleButton from "@components/button/ListToggleButton";

const ProjectInfoRole = ({ portfolio }: { portfolio: Portfolio }) => {
  const [rolesOpen, setRolesOpen] = useState<Record<string, boolean>>({});
  const [isOpenAll, setIsOpenAll] = useState<boolean>(false);

  useEffect(() => {
    if (portfolio.responsibilities.tasks) {
      const initialRolesState: Record<string, boolean> = {};

      Object.keys(portfolio.responsibilities.tasks).forEach((task) => {
        initialRolesState[task] = false; // 모든 역할을 기본적으로 닫힌 상태로 설정
      });

      setRolesOpen(initialRolesState);
    }
  }, [portfolio.responsibilities.tasks]);

  useEffect(() => {
    const rolesState = getOpenState(rolesOpen);
    setIsOpenAll(rolesState === "all-open");
  }, [rolesOpen]);

  function handleToggleAll() {
    const newRolesState: Record<string, boolean> = {};

    Object.keys(rolesOpen).forEach((task) => {
      newRolesState[task] = !isOpenAll; // 현재 상태의 반대로 설정
    });

    setRolesOpen(newRolesState);
  }

  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <header className="flex items-start justify-between w-full h-fit gap-4">
        <h1 className="text-3xl font-pre-bold">🧑‍💻 담당 업무</h1>
        <OpenButton message={isOpenAll ? "모두 닫기" : "모두 열기"} onClick={handleToggleAll} />
      </header>

      <section className="flex flex-col items-start justify-start w-full h-fit gap-6">
        {portfolio.responsibilities.tasks &&
          Object.entries(portfolio.responsibilities.tasks).map(([task, innerTasks], index) => {
            return (
              <ListToggleButton
                key={index}
                task={task}
                innerTasks={innerTasks}
                isOpen={rolesOpen[task]}
                onToggle={() =>
                  setRolesOpen((prev) => {
                    return { ...prev, [task]: !prev[task] };
                  })
                }
              />
            );
          })}
      </section>
    </section>
  );
};

export default ProjectInfoRole;
