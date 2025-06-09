import ArrowDownIcon from "@assets/icon/ArrowDownIcon";
import ArrowUpIcon from "@assets/icon/ArrowUpIcon";

interface ProjectTaskProps {
  task: string;
  innerTasks?: string[];
  isOpen?: boolean;
  onToggle?: () => void;
}

const ListToggleButton = ({ task, innerTasks, isOpen, onToggle }: ProjectTaskProps) => {
  return (
    <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
      <span className="flex items-start justify-between w-fit h-fit gap-2 cursor-pointer" onClick={onToggle}>
        <span className="py-0.5">
          {isOpen ? (
            <ArrowUpIcon width={24} height={24} strokeColor="#072491" />
          ) : (
            <ArrowDownIcon width={24} height={24} strokeColor="#072491" />
          )}
        </span>
        <p className="flex-1 text-xl text-theme font-pre-semi-bold">{task}</p>
      </span>

      <ul
        className={`flex flex-col items-start justify-start gap-2 px-1 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-144" : "max-h-0"
        } overflow-hidden`}
      >
        {innerTasks &&
          innerTasks.map((innerTask, i) => {
            return (
              <li key={i} className="mt-1 ms-7 px-1.5 py-0.5 text-content font-pre-semi-bold bg-content/10 rounded-sm">
                {innerTask}
              </li>
            );
          })}
      </ul>
    </article>
  );
};

export default ListToggleButton;
