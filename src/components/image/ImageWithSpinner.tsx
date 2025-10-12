import { useState } from "react";

import ImageLoadingSpinner from "@components/spinner/ImageLoadingSpinner";

const ImageWithSpinner = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <figure className="flex items-center justify-center w-full h-full bg-white/20">
      {loading && <ImageLoadingSpinner />}

      <img
        src={src}
        alt={alt}
        className={`h-full object-contain mx-auto transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
        style={{ display: "block" }}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        draggable={false}
      />
    </figure>
  );
};

export default ImageWithSpinner;
