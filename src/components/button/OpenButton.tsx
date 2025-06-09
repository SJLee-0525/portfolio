interface OpenButtonProps {
  message?: string;
  onClick: () => void;
}

const OpenButton = ({ message = "모두 열기", onClick }: OpenButtonProps) => {
  return (
    <button
      className="text-sm text-content font-pre-medium px-1.5 py-0.5 rounded-sm duration-300 transition-colors ease-in-out cursor-pointer hover:bg-content hover:text-white"
      onClick={onClick}
    >
      {message}
    </button>
  );
};

export default OpenButton;
