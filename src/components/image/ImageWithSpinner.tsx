import { useState } from "react";

import ImageLoadingSpinner from "@components/spinner/ImageLoadingSpinner";

const ImageWithSpinner = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <ImageLoadingSpinner />}
      <img
        src={src}
        alt={alt}
        className={`max-h-full w-auto max-w-full object-contain mx-auto transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
        style={{ display: "block" }}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        draggable={false}
      />
    </>
  );
};

export default ImageWithSpinner;
