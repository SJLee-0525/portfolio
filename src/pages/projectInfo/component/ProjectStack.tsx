import { useState } from "react";

const ProjectStack = ({ stack, reason }: { stack: string; reason: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative px-1.5 py-0.5 text-sm text-content font-pre-semi-bold bg-content/10 rounded-sm cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {stack}
      {isOpen && reason.length > 0 && (
        <span
          className="absolute z-10 left-0 top-6 px-2 py-1 text-sm text-white bg-black/75 rounded shadow-lg whitespace-pre-line"
          style={{
            whiteSpace: "pre-line",
            minWidth: "120px",
            maxWidth: "280px",
            wordBreak: "break-word",
          }}
        >
          {reason}
        </span>
      )}
    </li>
  );
};

export default ProjectStack;
