import React, { useState } from "react";
import SkeletonImage from "./../skeleton/SkeletonImage";
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
const GroupPostsByCategory = () => {
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
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 1,
      title:
        "CUỘC THI TRỰC TUYẾN “SINH VIÊN ĐẠI HỌC ĐÔNG Á VỚI CHUYỂN ĐỔI SỐ” năm 2024",
      category: "Tin 1",
      excerpt:
        "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốc gia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính thức phát động Cuộc thi Trực tuyến...",
      slug: "tin-1",
      date: "01/01/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 2,
      title: "SỰ KIỆN KHAI GIẢNG NĂM HỌC MỚI TẠI ĐẠI HỌC ĐÔNG Á",
      category: "Tin 2",
      excerpt:
        "Buổi lễ khai giảng năm học mới tại Đại học Đông Á sẽ diễn ra với sự tham dự của các lãnh đạo, giảng viên và sinh viên...",
      slug: "tin-2",
      date: "10/09/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 3,
      title: "CHƯƠNG TRÌNH THỰC TẬP SINH TẠI CÁC DOANH NGHIỆP ĐỐI TÁC",
      category: "Tin 3",
      excerpt:
        "Sinh viên sẽ có cơ hội tham gia chương trình thực tập tại các doanh nghiệp đối tác của nhà trường, học hỏi kinh nghiệm thực tế...",
      slug: "tin-3",
      date: "15/08/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 4,
      title: "HỘI THẢO CHUYÊN ĐỀ CHUYỂN ĐỔI SỐ TẠI ĐẠI HỌC ĐÔNG Á",
      category: "Tin 4",
      excerpt:
        "Hội thảo chuyên đề về chuyển đổi số diễn ra với sự tham gia của các chuyên gia đầu ngành, mang lại nhiều kiến thức bổ ích...",
      slug: "tin-4",
      date: "22/07/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 5,
      title: "CUỘC THI HACKATHON CHO SINH VIÊN CÔNG NGHỆ",
      category: "Tin 5",
      excerpt:
        "Cuộc thi Hackathon dành cho sinh viên khoa Công nghệ nhằm thúc đẩy tư duy sáng tạo và khả năng giải quyết vấn đề thực tế...",
      slug: "tin-5",
      date: "05/06/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 6,
      title: "NGÀY HỘI TƯ VẤN TUYỂN SINH NĂM 2024",
      category: "Tin 6",
      excerpt:
        "Ngày hội tư vấn tuyển sinh diễn ra tại Đại học Đông Á, thu hút sự quan tâm của các học sinh và phụ huynh...",
      slug: "tin-6",
      date: "20/05/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
    {
      id: 7,
      title: "CHƯƠNG TRÌNH HỖ TRỢ SINH VIÊN KHOA KINH TẾ TÌM VIỆC LÀM",
      category: "Tin 7",
      excerpt:
        "Nhằm giúp sinh viên khoa Kinh tế nhanh chóng tìm được việc làm sau khi tốt nghiệp, nhà trường đã tổ chức chuỗi sự kiện hỗ trợ...",
      slug: "tin-7",
      date: "30/04/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
  ]);

  return (
    // <div className={`mx-auto flex w-full flex-col gap-4`}>
    //   <h2 className={`mb-2 border-y p-4 text-center text-3xl font-bold`}>
    //     Tin tức
    //   </h2>
    //   <div className={`flex flex-col justify-center gap-8 xl:flex-row`}>
    //     <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start">
    //       <div className={`flex flex-col gap-4`}>
    //         <BlogThumbnailColumnLayout
    //           isMain={false}
    //           title={posts[1].title}
    //           category={posts[1].category}
    //           description={posts[1].excerpt}
    //           date={posts[1].date}
    //           thumbnailUrl={posts[1].coverImage}
    //           slug={posts[1].slug}
    //         />
    //         <BlogThumbnailColumnLayout
    //           isMain={false}
    //           title={posts[2].title}
    //           category={posts[2].category}
    //           description={posts[2].excerpt}
    //           date={posts[2].date}
    //           thumbnailUrl={posts[2].coverImage}
    //           slug={posts[2].slug}
    //         />
    //       </div>
    //       <div className={`flex grid-cols-1 flex-col gap-4`}>
    //         <BlogThumbnailColumnLayout
    //           isMain={true}
    //           title={posts[0].title}
    //           category={posts[0].category}
    //           description={posts[0].excerpt}
    //           date={posts[0].date}
    //           thumbnailUrl={posts[0].coverImage}
    //           slug={posts[0].slug}
    //         />
    //       </div>
    //     </div>
    //     <div className="w-full justify-center lg:flex">
    //       <div className={`flex flex-col gap-4 p-2 lg:p-0`}>
    //         {posts.slice(3, posts.length).map((post) => (
    //           <BlogThumbnailRowLayout
    //             key={post.id}
    //             thumbnailUrl={post.coverImage}
    //             title={post.title}
    //             slug={post.slug}
    //             date={post.date}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>\
    <div className="container flex w-full flex-col justify-center gap-10 lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-3/5">
        <SkeletonImage
          height="240px"
          src={posts[0].coverImage}
          className="aspect-video object-cover"
        />
        <div className="flex w-full justify-center gap-4">
          <div className="w-fit rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
            {posts[0].category}
          </div>
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
            {posts[0].date}
          </p>
        </div>
        <p className="text-md line-clamp-2 text-center font-semibold md:text-2xl">
          {posts[0].title}
        </p>
        <p className="line-clamp-3 text-balance text-center text-sm">
          {posts[0].excerpt}
        </p>
      </div>
      <div className="rounded-2xl bg-gray-100 p-4 dark:bg-gray-800 lg:w-2/6">
        <div className="relative py-4 font-neue text-2xl font-bold">
          Trending Now
          <div className="absolute h-0.5 w-8 bg-sky-500"></div>
        </div>
        <div className="flex flex-col gap-4 p-2">
          {posts.slice(1, 5).map((post) => (
            <BlogThumbnailRowLayout
              key={post.id}
              thumbnailUrl={post.coverImage}
              title={post.title}
              slug={post.slug}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupPostsByCategory;
