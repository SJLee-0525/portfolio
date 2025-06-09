interface ImageIndicatorProps {
  total: number;
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
  maxIndicators?: number;
}

const ImageIndicator = ({ total, currentIndex, setCurrentIndex, maxIndicators = 7 }: ImageIndicatorProps) => {
  if (total === 0) return null;

  let start = 0;
  let end = total;

  if (total > maxIndicators) {
    if (currentIndex <= 3) {
      start = 0;
      end = maxIndicators;
    } else if (currentIndex >= total - 4) {
      start = total - maxIndicators;
      end = total;
    } else {
      start = currentIndex - 3;
      end = currentIndex + 4;
    }
  }

  return (
    <>
      {Array(end - start)
        .fill(null)
        .map((_, i) => {
          const index = start + i;
          let opacity = "opacity-200";
          if (total > maxIndicators) {
            if ((index === start && start !== 0) || (index === end - 1 && end !== total)) {
              opacity = "opacity-50 ";
            }
          }
          return (
            <button
              key={index}
              className={`aspect-[1/1] rounded-full mx-1 cursor-pointer ${
                currentIndex === index ? "bg-theme w-2 h-2" : "bg-gray-300 w-1.5 h-1.5"
              } ${opacity}`}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
    </>
  );
};

export default ImageIndicator;
