import React from "react";
import { Link } from "react-router-dom";
import Post from "../models/Post";
import SkeletonImage from "../skeleton/SkeletonImage";

interface Props {
  header: string;
}

export default function CategoryPost({
  header,
  posts,
}: {
  header: string;
  posts: Post[];
}) {
  // const [posts, setPosts] = useState<Post[]>([
  //   {
  //     id: 0,
  //     title:
  //       "CUỘC THI TRỰC TUYẾN “SINH VIÊN ĐẠI HỌC ĐÔNG Á VỚI CHUYỂN ĐỔI SỐ” năm 2024",
  //     category: "Tin 1",
  //     excerpt:
  //       "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốc gia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính thức phát động Cuộc thi Trực tuyến...",
  //     slug: "tin-1",
  //     date: "01/01/2023",
  //     coverImage:
  //       "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 1,
  //     title:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore rfgfsdgsdfgsdgshghjhjgjgjgjgm",
  //     category: "Tin 1",
  //     excerpt:
  //       "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốc gia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính th.rpm phát động Cuộc thi Tracular...",
  //     slug: "tin-1",
  //     date: "01/01/2023",
  //     coverImage:
  //       "https://images.unsplash.com/photo-1728495145469-f0bcbda1dfa5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 2,
  //     title: "New Post Title 1",
  //     category: "Tin 2",
  //     excerpt: "This is a short excerpt for the new post 1.",
  //     slug: "tin-2",
  //     date: "02/01/2023",
  //     coverImage:
  //       "https://images.unsplash.com/photo-1727950183920-654c2feee258?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 3,
  //     title: "New Post Title 2",
  //     category: "Tin 3",
  //     excerpt: "This is a short excerpt for the new post 2.",
  //     slug: "tin-3",
  //     date: "03/01/2023",
  //     coverImage:
  //       "https://images.unsplash.com/photo-1728155288820-eadfefa52394?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ]);
  return (
    <div className="flex w-full flex-col gap-4 py-12">
      <div className="flex w-full items-center justify-between border-b border-gray-300 pb-4">
        <p className="text-2xl font-bold">{header}</p>
        <Link to={"/blog"} className="text-gray-500">
          Xem thêm
        </Link>
      </div>
      <div className="flex grid-cols-2 flex-col gap-8 md:grid lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            to={`/article/${post.slug}`}
            key={post.id}
            className="flex flex-col gap-4"
          >
            <SkeletonImage
              height="200px"
              src={post.coverImage}
              className="aspect-video w-full object-cover"
            />
            <p className="line-clamp-3 font-semibold">{post.title}</p>
            <p className="line-clamp-4 text-sm">{post.excerpt}</p>
            <p className={`flex items-center gap-1 text-gray-500`}>
              {/*clock icon*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-gray-500"
              >
                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
              </svg>
              {post.date}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
