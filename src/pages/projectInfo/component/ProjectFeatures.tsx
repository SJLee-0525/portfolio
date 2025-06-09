import { useState, useEffect } from "react";

import { Portfolio } from "@/types/stackTypes";

import { getOpenState } from "@utils/getProjectData";

import OpenButton from "@components/button/OpenButton";
import ListToggleButton from "@components/button/ListToggleButton";

const ProjectFeatures = ({ portfolio }: { portfolio: Portfolio }) => {
  const [featuresOpen, setFeaturesOpen] = useState<Record<string, boolean>>({});
  const [isOpenAll, setIsOpenAll] = useState<boolean>(false);

  useEffect(() => {
    if (portfolio.project.main_feature) {
      const initialFeaturesState: Record<string, boolean> = {};

      Object.keys(portfolio.project.main_feature).forEach((feature) => {
        initialFeaturesState[feature] = false; // 모든 기능을 기본적으로 닫힌 상태로 설정
      });

      setFeaturesOpen(initialFeaturesState);
    }
  }, [portfolio.project.main_feature]);

  useEffect(() => {
    const featuresState = getOpenState(featuresOpen);
    setIsOpenAll(featuresState === "all-open");
  }, [featuresOpen]);

  function handleToggleAll() {
    const newRolesState: Record<string, boolean> = {};

    Object.keys(featuresOpen).forEach((task) => {
      newRolesState[task] = !isOpenAll; // 현재 상태의 반대로 설정
    });

    setFeaturesOpen(newRolesState);
  }

  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <header className="flex items-start justify-between w-full h-fit gap-4">
        <h1 className="text-3xl font-pre-bold">📋 주요 기능</h1>
        <OpenButton message={isOpenAll ? "모두 닫기" : "모두 열기"} onClick={handleToggleAll} />
      </header>

      <section className="flex flex-col items-start justify-start w-full h-fit gap-6">
        {Object.entries(portfolio.project.main_feature).map(([mainFeature, descriptions], index) => {
          return (
            <ListToggleButton
              key={index}
              task={mainFeature}
              innerTasks={descriptions}
              isOpen={featuresOpen[mainFeature]}
              onToggle={() =>
                setFeaturesOpen((prev) => {
                  return { ...prev, [mainFeature]: !prev[mainFeature] };
                })
              }
            />
          );
        })}
      </section>
    </section>
  );
};

export default ProjectFeatures;
