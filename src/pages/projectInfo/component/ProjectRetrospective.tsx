import { Portfolio } from "@/types/stackTypes";

const ProjectRetrospective = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <h1 className="text-3xl font-pre-bold">✨ 회고</h1>

      <section className="flex flex-col items-start justify-start w-full h-fit px-5 py-5 gap-10 rounded-xl bg-slate-200/70">
        {portfolio.retrospective.map((item, index) => (
          <div key={index} className="flex flex-col items-start justify-start w-full h-fit">
            <p className="text-lg text-text font-pre-semi-bold" style={{ whiteSpace: "pre-line", lineHeight: "1.68" }}>
              {item}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProjectRetrospective;
