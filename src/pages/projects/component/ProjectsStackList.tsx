import { StackUsages } from "@/types/stackTypes";

const ProjectsStackList = ({ stacks }: { stacks: StackUsages }) => {
  return (
    <div className="flex flex-col items-center justify-center w-2/5 min-w-lg px-12 py-16 h-full bg-bg/10">
      <header className="w-full h-fit">
        <h1 className="text-3xl font-pre-bold">Used Stack List</h1>
      </header>

      <div className="flex flex-col w-full h-full gap-4 mt-6">
        <div>
          <div className="flex flex-wrap w-full h-full gap-4">
            {stacks &&
              Object.entries(stacks).map(([stackType, stackItems], index) => {
                return (
                  <span
                    key={index}
                    className={`flex items-center justify-between px-2 py-0.5 transition-all duration-300 ease-in-out ${stackItems.isUsed ? "bg-warning text-[#fff]" : "text-disable bg-black/25"} rounded-md`}
                  >
                    <p className="text-[#fff] font-pre-light whitespace-nowrap"># {stackType}</p>
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsStackList;
