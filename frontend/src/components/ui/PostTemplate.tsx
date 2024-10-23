import React from "react";
import Post from "../models/Post";
import SkeletonImage from "../skeleton/SkeletonImage";

export default function PostTemplate({ posts }: { posts: Post[] }) {
  return (
    <div className="flex w-full flex-col gap-8">
      {posts?.length < 8 ? (
        <>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts?.map((post) => (
              <div
                key={post.id}
                className="flex w-full max-w-lg flex-col gap-4"
              >
                <SkeletonImage
                  src={post.coverImage}
                  className="aspect-video object-cover"
                />
                <p className="text-md line-clamp-2 text-center font-semibold md:text-2xl">
                  {post.title}
                </p>
                <p className="line-clamp-3 text-balance text-center">
                  {post.excerpt}
                </p>
                <p
                  className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
                >
                  {/*clock icon*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                  >
                    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                  </svg>
                  {post.date}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex w-full flex-col gap-4 lg:w-2/4">
              <SkeletonImage
                src={posts[0]?.coverImage}
                className="aspect-video object-cover"
              />
              <p className="text-md line-clamp-2 text-center font-semibold md:text-2xl">
                {posts[0]?.title}
              </p>
              <p className="line-clamp-3 text-balance text-center">
                {posts[0]?.excerpt}
              </p>
              <p
                className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
              >
                {/*clock icon*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                >
                  <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                </svg>
                {posts[0]?.date}
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:w-1/4">
              {posts?.slice(1, 4).map((post) => (
                <div key={post.id} className="flex flex-col gap-2">
                  <p className="line-clamp-3 text-lg font-semibold">
                    {post.title}
                  </p>
                  <p className="line-clamp-4">{post.excerpt}</p>
                  <p
                    className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
                  >
                    {/*clock icon*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                    >
                      <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                    </svg>
                    {posts[0]?.date}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:w-1/4">
              {posts?.slice(4, 7).map((post) => (
                <div key={post.id} className="flex flex-col gap-2">
                  <p className="line-clamp-3 text-lg font-semibold">
                    {post.title}
                  </p>
                  <p className="line-clamp-4">{post.excerpt}</p>
                  <p
                    className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
                  >
                    {/*clock icon*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                    >
                      <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                    </svg>
                    {posts[0]?.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
            {posts?.slice(7).map((post) => (
              <div
                key={post.id}
                className="flex w-full max-w-lg flex-col gap-4"
              >
                <SkeletonImage
                  src={post.coverImage}
                  className="aspect-video object-cover"
                />
                <p className="text-md line-clamp-2 text-center font-semibold md:text-2xl">
                  {post.title}
                </p>
                <p className="line-clamp-3 text-balance text-center">
                  {post.excerpt}
                </p>
                <p
                  className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
                >
                  {/*clock icon*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
                  >
                    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                  </svg>
                  {post.date}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
