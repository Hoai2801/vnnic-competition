import React, { useState } from "react";
import SkeletonImage from "../components/ui/skeleton/SkeletonImage";

interface Post {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage: string;
}

function Blog() {
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
    <div className="container max-w-[500px]">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.category}</p>
          <p>{post.excerpt}</p>
          <p>{post.slug}</p>
          <p>{post.date}</p>
          <SkeletonImage
            src={post.coverImage}
            className="aspect-video object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Blog;
