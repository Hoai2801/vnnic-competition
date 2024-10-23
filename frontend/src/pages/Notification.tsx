import React from "react";
import Transition from "../components/common/Transition";
import PostTemplate from "../components/ui/PostTemplate";

function Notification() {
  return (
    <Transition>
      <div className="container flex min-h-screen w-full flex-col gap-8 px-4 lg:flex-row">
        <PostTemplate />
      </div>
    </Transition>
  );
}

export default Notification;
