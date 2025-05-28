const CarouselButton = ({
  isActive,
  onClick,
  icon,
}: {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}) => {
  return (
    <button
      className={`bg-transparent rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black/30 ${isActive ? "opacity-100" : "opacity-0"}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default CarouselButton;
