interface CarouselButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const CarouselButton = ({ isActive, onClick, icon }: CarouselButtonProps) => {
  return (
    <button
      className={`bg-black/20 rounded-full p-2 transition-all duration-300 ease-in-out cursor-pointer pointer-events-auto hover:bg-black/40 ${isActive ? "opacity-100" : "opacity-0"}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default CarouselButton;
