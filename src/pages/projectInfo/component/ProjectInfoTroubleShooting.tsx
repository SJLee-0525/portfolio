import { Portfolio } from "@/types/stackTypes";

const ProjectInfoTroubleShooting = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <h1 className="text-3xl font-pre-bold">트러블 슈팅</h1>

      <table className="table-fixed w-full">
        <thead>
          <tr className="text-center">
            <th className="text-xl text-error font-pre-bold bg-red-100 pt-4 rounded-t-lg">문제</th>
            <th className="w-2"></th>
            <th className="text-xl text-theme font-pre-bold bg-blue-100 pt-4 rounded-t-lg">해결</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.troubleshooting.map((trouble, index) => {
            const isLastRow = index === portfolio.troubleshooting.length - 1;

            return (
              <tr key={index} className="font-pre-medium text-text">
                <td className={`p-4 bg-red-100 ${isLastRow ? "rounded-b-lg" : ""}`}>{trouble.problem}</td>
                <td className="w-2"></td>
                <td className={`p-4 bg-blue-100 ${isLastRow ? "rounded-b-lg" : ""}`}>{trouble.solution}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectInfoTroubleShooting;
