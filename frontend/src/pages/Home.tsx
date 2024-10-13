import React from "react";
import Transition from "../components/common/Transition";
import CategoryPost from "../components/ui/blog/CategoryPost";
import LatestBlog from "../components/ui/blog/LatestBlog";
import GroupPostsByCategory from "./../components/ui/blog/GroupPostsByCategory";

export default function Home() {
  return (
    <Transition>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="container px-4 py-8">
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
