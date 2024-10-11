import { useState } from "react";
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
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
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
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    }
  ]);
  return (
    <div className={`bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-lg sticky top-20`}>
      <h2 className={`text-2xl font-semibold mb-4 border-b-4 border-b-blue-400 p-2 w-fit`}>Bài viết liên quan</h2>
      <div className={`grid grid-cols-1 gap-4`}>
        {
          posts.map((post) => (
            <div className={`border-b-2 border-gray-200 p-2`}>
              <BlogThumbnailRowLayout
                key={post.id}
                title={post.title}
                thumbnailUrl={post.coverImage}
                slug={post.slug}
                date={post.date}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default RelatedPosts;
