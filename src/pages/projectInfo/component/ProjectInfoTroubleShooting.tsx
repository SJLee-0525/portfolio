import { Portfolio } from "@/types/stackTypes";

const ProjectInfoTroubleShooting = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <h1 className="text-3xl font-pre-bold">🛠️ 트러블 슈팅</h1>

      <ul className="flex flex-col items-start justify-start w-full h-fit gap-4">
        {portfolio.troubleshooting.map((trouble, index) => (
          <li key={index} className="w-full">
            <h3 className="text-xl text-[#9f0712] font-pre-bold bg-red-500/10 px-5 py-4 rounded-t-xl">
              {trouble.problem}
            </h3>
            <p className="text-lg text-text font-pre-semi-bold bg-blue-500/10 px-5 py-4 rounded-b-xl">
              {trouble.solution}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectInfoTroubleShooting;
