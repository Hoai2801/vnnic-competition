import React, { useState } from "react";
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
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 0,
      title:
        "CUỘC THI TRỰC TUYẾN “SINH VIÊN ĐẠI HỌC ĐÔNG Á VỚI CHUYỂN ĐỔI SỐ” năm 2024",
      category: "Tin 1",
      excerpt:
        "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốcgia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính thức phát động Cuộc thi Trực tuyến...",
      slug: "tin-1",
      date: "01/01/2023",
      coverImage:
        "https://images.unsplash.com/photo-1728666044033-379cbc9e8f3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title:
        "CUỘC THI TRỰC TUYẾN “SINH VIÊN ĐẠI HỌC ĐÔNG Á VỚI CHUYỂN ĐỔI SỐ” năm 2024",
      category: "Tin 1",
      excerpt:
        "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốc gia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính th.rpm phát động Cuộc thi Tracular...",
      slug: "tin-1",
      date: "01/01/2023",
      coverImage:
        "https://images.unsplash.com/photo-1728388939226-3fc095526a91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
  return (
    <div className={`sticky top-32 rounded-2xl bg-white p-4 dark:bg-gray-700`}>
      <h2
        className={`mb-4 w-fit border-b-4 border-b-blue-400 p-2 text-2xl font-semibold`}
      >
        Bài viết liên quan
      </h2>
      <div className={`grid grid-cols-1 gap-4`}>
        {posts.map((post) => (
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
