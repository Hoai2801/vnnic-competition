import React, { useEffect, useRef, useState } from "react";
import Skeleton from "./Skeleton";

interface ImageComponentProps {
  Height?: number;
  src: string;
  className?: string;
}

const SkeletonProps: React.FC<ImageComponentProps> = ({
  Height,
  src,
  className: additionalClassNames,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState(Height || 0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      if (imgRef.current) {
        setHeight(imgRef.current.naturalHeight);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imgRef.current) {
          setHeight(imgRef.current.naturalHeight);
          if ((entry.target as HTMLImageElement).complete) {
            observer.unobserve(entry.target);
          }
        }
      });
    });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (observer && imgRef.current) observer.unobserve(imgRef.current);
    };
  }, [src]);

  return (
    <>
      {isLoading ? (
        <Skeleton className={additionalClassNames || ""} height={height} />
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt=""
          className={`${additionalClassNames || ""} w-full`}
          onLoad={() => {
            setIsLoading(false);
            if (imgRef.current) {
              setHeight(imgRef.current.naturalHeight);
            }
          }}
          onError={() => setIsLoading(true)}
        />
      )}
    </>
  );
};

export default SkeletonProps;
