import { Portfolio } from "@/types/stackTypes";

const ProjectDescription = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <h1 className="text-3xl font-pre-bold mt-3">📌 프로젝트 개요</h1>

      <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
        <h3 className="text-xl text-theme font-pre-bold">배경</h3>
        <p className="text-text md:text-lg font-pre-medium" style={{ whiteSpace: "pre-line", lineHeight: "1.68" }}>
          {portfolio.project.background}
        </p>
      </article>

      <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
        <h3 className="text-xl text-theme  font-pre-bold">기간</h3>
        <p className="text-text md:text-lg font-pre-medium" style={{ whiteSpace: "pre-line", lineHeight: "1.68" }}>
          {portfolio.project.duration}
        </p>
      </article>

      {portfolio.project.award && (
        <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
          <h3 className="text-xl text-theme  font-pre-bold">성과</h3>
          <p className="text-text md:text-lg font-pre-medium" style={{ whiteSpace: "pre-line", lineHeight: "1.68" }}>
            {portfolio.project.award}
          </p>
        </article>
      )}

      <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
        <h3 className="text-xl text-theme font-pre-bold">인원</h3>
        <ul className="flex flex-col items-start justify-start w-full h-fit gap-2">
          {portfolio.project.team.map(([role, person], index) => {
            return (
              <li key={index} className="text-text md:text-lg font-pre-medium">
                <span className="px-1.5 py-0.5 text-white bg-theme/70 rounded-sm">{role}</span> : {person}명
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default ProjectDescription;
