import React from "react";
import Transition from "../components/common/Transition";
import GroupPostsByCategory from "./../components/ui/blog/GroupPostsByCategory";

export default function Home() {
  return (
    <Transition>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {/* <SkeletonImage
          src="https://picsum.photos/200/300"
          width="200px"
          height="100px"
        /> */}
        <GroupPostsByCategory />
      </div>
    </Transition>
  );
}
