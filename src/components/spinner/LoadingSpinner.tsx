import "@/styles/animations.css";

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
    <div className="w-2/3 max-w-xl h-2 bg-disable rounded overflow-hidden shadow">
      <div className="h-full bg-black animate-loading-bar" />
    </div>
  </div>
);

export default LoadingSpinner;
