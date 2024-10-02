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
      className={`w-${width} ${classNames} h-[440px] animate-pulse bg-[#ccc]`}
    />
  );
};

export default Skeleton;
