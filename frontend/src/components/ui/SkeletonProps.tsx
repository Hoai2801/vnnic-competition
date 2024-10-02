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
  const [height, setHeight] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.complete) {
          setHeight(entry.target.clientHeight);
          observer.unobserve(entry.target);
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
      <Skeleton
        className={`${classNames} ${!isLoading ? "hidden opacity-0" : "opacity-100"}`}
        height={height}
      />
      <img ref={imgRef} src={src} alt="" className={`${classNames} w-full`} />
    </>
  );
};

export default SkeletonProps;
