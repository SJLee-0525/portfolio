import ArrowDownIcon from "@assets/icon/ArrowDownIcon";
import ArrowUpIcon from "@assets/icon/ArrowUpIcon";

interface ProjectTaskProps {
  trouble: {
    problem: string;
    solution: string;
  };
  isOpen?: boolean;
  onToggle?: () => void;
}

const TroubleShootingButton = ({ trouble, isOpen, onToggle }: ProjectTaskProps) => {
  return (
    <article className="flex flex-col items-start justify-start w-full h-fit gap-2">
      <span className="flex items-start justify-between w-fit h-fit gap-2 cursor-pointer" onClick={onToggle}>
        <span className="py-0.5">
          {isOpen ? (
            <ArrowUpIcon width={24} height={24} strokeColor="#9f0712" />
          ) : (
            <ArrowDownIcon width={24} height={24} strokeColor="#9f0712" />
          )}
        </span>
        <p className="flex-1 text-xl text-[#9f0712] font-pre-semi-bold">{trouble.problem}</p>
      </span>

      <span
        className={`flex flex-col items-start justify-start gap-2 px-1 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-144" : "max-h-0"
        } overflow-hidden`}
      >
        <p
          className="mt-1 ms-7 px-3.5 py-2 text-lg text-text/100 font-pre-medium bg-sky-100/50 rounded-sm"
          style={{ whiteSpace: "pre-line", lineHeight: "1.68" }}
        >
          {trouble.solution}
        </p>
      </span>
    </article>
  );
};

export default TroubleShootingButton;
