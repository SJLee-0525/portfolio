import "@/styles/animations.css";

const ImageLoadingSpinner = () => {
  return (
    <div className="abolute inset-0 flex items-center justify-center w-full h-full bg-black/30">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-4 h-16 rounded-sm ${i % 2 === 0 ? "bg-white" : "bg-black"} animate-piano`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageLoadingSpinner;
