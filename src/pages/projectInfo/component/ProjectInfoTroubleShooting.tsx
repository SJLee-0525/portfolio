import { useState, useEffect } from "react";

import { Portfolio } from "@/types/stackTypes";

import OpenButton from "@components/button/OpenButton";
import TroubleShootingButton from "@components/button/TroubleShootingButton";

const ProjectInfoTroubleShooting = ({ portfolio }: { portfolio: Portfolio }) => {
  const [troubleshootingOpen, setTroubleshootingOpen] = useState<boolean[]>([]);
  const [isOpenAll, setIsOpenAll] = useState<boolean>(false);

  useEffect(() => {
    if (portfolio.troubleshooting) {
      const initialTroubleshootingState = portfolio.troubleshooting.map(() => false);
      setTroubleshootingOpen(initialTroubleshootingState);
    }
  }, [portfolio.troubleshooting]);

  useEffect(() => {
    const allOpen = troubleshootingOpen.every((open) => open);
    setIsOpenAll(allOpen);
  }, [troubleshootingOpen]);

  function handleToggleAll() {
    const newTroubleshootingState = troubleshootingOpen.map(() => !isOpenAll);
    setTroubleshootingOpen(newTroubleshootingState);
  }

  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <header className="flex items-start justify-between w-full h-fit gap-4">
        <h1 className="text-3xl font-pre-bold">⚙️ 트러블 슈팅</h1>
        <OpenButton message={isOpenAll ? "모두 닫기" : "모두 열기"} onClick={handleToggleAll} />
      </header>

      <ul className="flex flex-col items-start justify-start w-full h-fit gap-6">
        {portfolio.troubleshooting.map((trouble, index) => (
          <TroubleShootingButton
            key={index}
            trouble={trouble}
            isOpen={troubleshootingOpen[index]}
            onToggle={() =>
              setTroubleshootingOpen((prev) => {
                const newState = [...prev];
                newState[index] = !newState[index];
                return newState;
              })
            }
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectInfoTroubleShooting;
