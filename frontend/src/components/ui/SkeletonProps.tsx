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
        if (
          entry.isIntersecting &&
          (entry.target as HTMLImageElement).complete
        ) {
          setHeight((entry.target as HTMLImageElement).clientHeight);
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
      {isLoading && <Skeleton className={classNames} height={height} />}
      <img
        ref={imgRef}
        src={src}
        alt=""
        className={`${classNames} w-full`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(true)}
      />
    </>
  );
};

export default SkeletonProps;
