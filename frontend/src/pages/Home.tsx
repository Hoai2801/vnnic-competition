import React from "react";
import Transition from "../components/common/Transition";
import GroupPostsByCategory from "../components/ui/blog/GroupPostsByCategory";

export default function Home() {
  return (
    <Transition>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <GroupPostsByCategory />
      </div>
    </Transition>
  );
}
