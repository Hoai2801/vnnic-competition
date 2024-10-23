import React from "react";
import PostTemplate from "../components/ui/PostTemplate";
import Transition from "./../components/common/Transition";

export default function Activity() {
  return (
    <Transition>
      <div className="container flex min-h-screen w-full flex-col gap-8 px-4 lg:flex-row">
        <PostTemplate />
      </div>
    </Transition>
  );
}
