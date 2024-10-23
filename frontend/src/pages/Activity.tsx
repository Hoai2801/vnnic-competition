import React, { useEffect, useState } from "react";
import PostTemplate from "../components/ui/PostTemplate";
import Transition from "./../components/common/Transition";
import Post from "../components/models/Post";

export default function Activity() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/blog/category/4")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Transition>
      <div className="container flex min-h-screen w-full flex-col gap-8 px-4 lg:flex-row">
        <PostTemplate posts={posts} />
      </div>
    </Transition>
  );
}
