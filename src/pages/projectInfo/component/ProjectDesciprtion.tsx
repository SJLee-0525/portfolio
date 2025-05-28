import { Portfolio } from "@/types/stackTypes";

const ProjectDescription = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
        <h3 className="text-xl text-theme font-pre-bold">배경</h3>
        <p className="text-text font-pre-medium">{portfolio.project.background}</p>
      </article>

      <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
        <h3 className="text-xl text-theme  font-pre-bold">기간</h3>
        <p className="text-text font-pre-medium">{portfolio.project.duration}</p>
      </article>

      {portfolio.project.award && (
        <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
          <h3 className="text-xl text-theme  font-pre-bold">성과</h3>
          <p className="text-text font-pre-medium">{portfolio.project.award}</p>
        </article>
      )}

      <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
        <h3 className="text-xl text-theme  font-pre-bold">인원</h3>
        <ul className="flex flex-col items-start justify-start w-full h-fit gap-2">
          {portfolio.project.team.map(([role, person], index) => {
            return (
              <li key={index} className="text-text font-pre-medium">
                <span className="px-1.5 py-0.5 text-white bg-theme/70 rounded-sm">{role}</span> : {person}명
              </li>
            );
          })}
        </ul>
      </article>

      <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
        <h3 className="text-xl text-theme font-pre-bold">스택</h3>
        <div className="flex flex-col items-start justify-start w-full h-fit gap-4">
          {Object.entries(portfolio.technologies).map(([stackType, stackItems], index) => {
            return (
              <div key={index} className="flex flex-col items-start justify-start w-full h-fit gap-2">
                <h3 className="text-lg text-text font-pre-semi-bold">{stackType}</h3>
                <ul className="flex flex-wrap items-center justify-start gap-x-2 gap-y-2">
                  {stackItems.map((stack, i) => {
                    return (
                      <li
                        key={i}
                        className="px-1.5 py-0.5 text-sm text-content font-pre-semi-bold bg-content/10 rounded-sm"
                      >
                        {stack}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default ProjectDescription;
