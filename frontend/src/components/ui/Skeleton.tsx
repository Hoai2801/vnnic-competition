import React from "react";

type SkeletonProps = {
  width?: number;
  height?: number;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  className: additionalClassNames,
}) => {
  const classNames = additionalClassNames || "";
  const heightStyle = height ? `h-[${height}px]` : "h-auto";
  const widthStyle = width ? `w-[${width}px]` : "w-full";

  return (
    <div
      className={`${widthStyle} ${classNames} ${heightStyle} animate-pulse bg-gray-300 transition-opacity`}
      style={{ width: width, height: height }}
    ></div>
  );
};

export default Skeleton;
