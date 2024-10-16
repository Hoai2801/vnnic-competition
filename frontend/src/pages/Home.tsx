import React from "react";
import Transition from "../components/common/Transition";
import CategoryPost from "../components/ui/blog/CategoryPost";
import GroupPostsByCategory from "../components/ui/blog/GroupPostsByCategory";
import LatestBlog from "../components/ui/blog/LatestBlog";

export default function Home() {
  return (
    <Transition>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
        <div className="container px-4 py-2">
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
