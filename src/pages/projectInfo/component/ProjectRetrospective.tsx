import { Portfolio } from "@/types/stackTypes";

const ProjectRetrospective = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-fit gap-10">
      <header className="flex items-center justify-between w-full h-fit gap-4">
        <h1 className="text-3xl font-pre-bold">회고</h1>
      </header>

      <section className="flex flex-col items-start justify-start w-full h-fit p-5 gap-6 rounded-lg bg-disable/30">
        {portfolio.retrospective.map((item, index) => (
          <div key={index} className="flex flex-col items-start justify-start w-full h-fit">
            <p className="text-text font-pre-medium" style={{ whiteSpace: "pre-line", lineHeight: "1.68" }}>
              {item}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProjectRetrospective;
