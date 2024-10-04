import React, { useEffect, useRef, useState } from "react";
import Skeleton from "./Skeleton";

interface SkeletonProps {
  src: string;
  height?: number;
  width?: number;
  additionalClassNames?: string;
}

const SkeletonImage: React.FC<SkeletonProps> = ({
  src,
  height: initialHeight,
  width: initialWidth,
  additionalClassNames,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [height, setHeight] = useState<number>(initialHeight || 0);
  const [width, setWidth] = useState<number>(initialWidth || 0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      if (imgRef.current) {
        setHeight(imgRef.current.naturalHeight);
      }
    };

    const handleLoad = () => {
      if (imgRef.current) {
        setHeight(imgRef.current.naturalHeight);
        setWidth(imgRef.current.naturalWidth);
        setIsLoading(false);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imgRef.current) {
          if (imgRef.current.complete) {
            handleLoad();
            observer.unobserve(entry.target);
          } else {
            imgRef.current.addEventListener("load", handleLoad);
          }
        }
      });
    });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current);
        imgRef.current.removeEventListener("load", handleLoad);
      }
    };
  }, [src]);

  return (
    <>
      {isLoading ? (
        <Skeleton
          className={additionalClassNames || ""}
          height={height}
          width={width}
        />
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt="Loaded content"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(true)}
        />
      )}
    </>
  );
};

export default SkeletonImage;
