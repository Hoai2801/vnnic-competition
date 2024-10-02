import React, { useEffect, useRef, useState } from "react";
import Skeleton from "./Skeleton";

interface ImageComponentProps {
  src: string;
  className?: string;
}

const SkeletonProps: React.FC<ImageComponentProps> = ({
  src,
  className: additionalClassNames,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const classNames = additionalClassNames || "";
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);

    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    } else {
      img.addEventListener("load", () => {
        if (imageRef.current) {
          setImageHeight(imageRef.current.clientHeight);
        }
      });
    }
  }, [src]);

  return (
    <>
      <Skeleton
        className={`${classNames} absolute z-10 transition-opacity ${!isLoading ? "hidden opacity-0" : "opacity-100"}`}
        height={imageHeight}
      />
      <img ref={imageRef} src={src} alt="" className={`${classNames} w-full`} />
    </>
  );
};

export default SkeletonProps;
