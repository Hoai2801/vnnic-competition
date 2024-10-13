import React from "react";
import Transition from "../components/common/Transition";
import CategoryPost from "../components/ui/blog/CategoryPost";
import GroupPostsByCategory from "../components/ui/blog/GroupPostsByCategory";
import LatestBlog from "../components/ui/blog/LatestBlog";

export default function Home() {
  return (
    <Transition>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="container px-4">
          <GroupPostsByCategory />
          <CategoryPost header="Spotlight" />
        </div>
        <LatestBlog />
        <div className="container px-4">
          <CategoryPost header="Sự kiện" />
        </div>
      </div>
    </Transition>
  );
}
