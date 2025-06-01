import "@/styles/animations.css";

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center w-full h-full text-center bg-white z-[9999]">
    <h1 className="inter-700 text-2xl font-bold text-text animate-fade-in">SUNGJOON LEE</h1>
    <p className="inter-350 text-sm text-text/50 mt-2 animate-fade-in">
      Frontend Developer · Creating Interactive Web Experiences
    </p>

    <div className="w-4/5 max-w-xl h-2 bg-disable rounded overflow-hidden shadow mt-8">
      <div className="h-full bg-text animate-loading-bar" />
    </div>

    <p className="inter-500 mt-4 text-xs text-text/50 animate-pulse">Loading Portfolio...</p>
  </div>
);

export default LoadingSpinner;
