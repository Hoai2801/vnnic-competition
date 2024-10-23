import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkeletonImage from "../skeleton/SkeletonImage";

interface Post {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage: string;
}

export default function LatestBlog() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 0,
      title:
        "CUỘC THI TRỰC TUYẾN “SINH VIÊN ĐẠI HỌC ĐÔNG Á VỚI CHUYỂN ĐỔI SỐ” năm 2024",
      category: "Tin 1",
      excerpt:
        "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốc gia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính thức phát động Cuộc thi Trực tuyến...",
      slug: "tin-1",
      date: "01/01/2023",
      coverImage:
        "https://images.unsplash.com/photo-1728321406248-8b24f68d869d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore rfgfsdgsdfgsdgshghjhjgjgjgjgm",
      category: "Tin 1",
      excerpt:
        "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốc gia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính th.rpm phát động Cuộc thi Tracular...",
      slug: "tin-1",
      date: "01/01/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 2,
      title: "New Post Title 1",
      category: "Tin 2",
      excerpt: "This is a short excerpt for the new post 1.",
      slug: "tin-2",
      date: "02/01/2023",
      coverImage: "https://example.com/image1.png",
    },
    {
      id: 3,
      title: "New Post Title 2",
      category: "Tin 3",
      excerpt: "This is a short excerpt for the new post 2.",
      slug: "tin-3",
      date: "03/01/2023",
      coverImage: "https://example.com/image2.png",
    },
    {
      id: 4,
      title: "New Post Title 3",
      category: "Tin 4",
      excerpt: "This is a short excerpt for the new post 3.",
      slug: "tin-4",
      date: "04/01/2023",
      coverImage: "https://example.com/image3.png",
    },
    {
      id: 5,
      title: "New Post Title 4",
      category: "Tin 5",
      excerpt: "This is a short excerpt for the new post 4.",
      slug: "tin-5",
      date: "05/01/2023",
      coverImage: "https://example.com/image4.png",
    },
    {
      id: 6,
      title: "New Post Title 5",
      category: "Tin 6",
      excerpt: "This is a short excerpt for the new post 5.",
      slug: "tin-6",
      date: "06/01/2023",
      coverImage:
        "https://images.unsplash.com/photo-1728346752157-f2e57a245650?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "New Post Title 6",
      category: "Tin 7",
      excerpt: "This is a short excerpt for the new post 6.",
      slug: "tin-7",
      date: "07/01/2023",
      coverImage: "https://example.com/image6.png",
    },
  ]);

  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-center">
        <div className="container flex w-full flex-col p-4 py-20">
          <div className="flex w-full items-center justify-between border-b border-gray-300 pb-4">
            <p className="text-2xl font-bold">Tin mới</p>
            <Link to={"/blog"} className="text-gray-300">
              Xem thêm
            </Link>
          </div>
          <div className="flex flex-col gap-8 py-12 lg:flex-row">
            {/* Post 1 */}
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
              <SkeletonImage
                src={posts[0].coverImage}
                className="aspect-video object-cover"
              />
              <div className="flex w-full justify-center gap-4">
                <div className="w-fit rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
                  {posts[0].category}
                </div>
                <p className={`flex items-center gap-1 text-sm text-white`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-white"
                  >
                    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                  </svg>
                  {posts[0].date}
                </p>
              </div>
              <div className="w-full text-center font-bold">
                {posts[0].title}
              </div>
              <div className="text-sm">{posts[0].excerpt}</div>
            </div>
            {/* Post 2 */}
            <div className="flex w-full flex-col gap-4 lg:w-1/4">
              {posts.slice(1, 5).map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col gap-2 border-b pb-4"
                >
                  <p className="line-clamp-3 font-bold">{post.title}</p>
                  <p className={`flex items-center gap-1 text-sm text-white`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-white"
                    >
                      <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                    </svg>
                    {post.date}
                  </p>
                </div>
              ))}
            </div>
            {/* Post 3 */}
            <div className="flex flex-col-reverse gap-8 lg:w-1/4 lg:flex-col">
              <div className="flex flex-col gap-4">
                <SkeletonImage
                  height="240px"
                  src={posts[6].coverImage}
                  className="aspect-video object-cover"
                />
                <div className="text-bold text-center"> {posts[6].title}</div>
                <div className="flex w-full items-center justify-center gap-4">
                  <div className="w-fit rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
                    {posts[6].category}
                  </div>
                  <p className={`flex items-center gap-1 text-sm text-white`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-white"
                    >
                      <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                    </svg>
                    {posts[6].date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:border-t lg:py-4">
                <p className="line-clamp-3 truncate font-bold">
                  {posts[7].title}
                </p>
                <p className={`flex items-center gap-1 text-sm text-white`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-white"
                  >
                    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
                  </svg>
                  {posts[7].date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
