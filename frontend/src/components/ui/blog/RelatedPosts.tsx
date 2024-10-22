import React, { useEffect, useState } from "react";
import BlogThumbnailRowLayout from "./BlogThumbnailRowLayout";

interface Post {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage: string;
}

const RelatedPosts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    fetch('http://localhost:8080/blog/random')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])
  return (
    <div className={`sticky top-32 rounded-2xl bg-white p-4 dark:bg-gray-700`}>
      <h2
        className={`mb-4 w-fit border-b-4 border-b-blue-400 p-2 text-2xl font-semibold`}
      >
        Bài viết liên quan
      </h2>
      <div className={`grid grid-cols-1 gap-4`}>
        {posts?.map((post) => (
          <div className={`p-2`}>
            <BlogThumbnailRowLayout
              key={post.id}
              title={post.title}
              thumbnailUrl={post.coverImage}
              category={post.category}
              slug={post.slug}
              date={post.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
