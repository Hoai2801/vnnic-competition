import React from "react";

type SkeletonProps = {
  width?: string;
  height: number;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width: additionalWidth,
  height,
  className: additionalClassNames,
}) => {
  const width = additionalWidth || "full";
  const classNames = additionalClassNames || "";

  return (
    <div
      className={`w-${width} ${classNames} h-[${height}px] absolute z-10 animate-pulse bg-[#ccc] transition-opacity`}
    />
  );
};

export default Skeleton;
