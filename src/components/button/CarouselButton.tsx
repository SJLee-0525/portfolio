interface CarouselButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const CarouselButton = ({ isActive, onClick, icon }: CarouselButtonProps) => {
  return (
    <button
      className={`bg-black/10 rounded-full p-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-black/30 ${isActive ? "opacity-100" : "opacity-0"}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default CarouselButton;
