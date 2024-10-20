import React, { useState } from "react";
import SkeletonImage from "./../skeleton/SkeletonImage";
import BlogThumbnailRowLayout from "./BlogThumbnailRowLayout";
import BlogThumbnailColumnLayout from "./BlogThumbnailColumnLayout";

interface Post {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage: string;
}
const GroupPostsByCategory = ( {header} : {header: string}) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      "id": 8,
      "title": "Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết Trung ương 10, khóa XIII",
      "category": "Sự kiện",
      "excerpt": "<figure class=\"image\"><img style=\"aspect-ratio:800/598;\" src=\"https://image.nhandan.vn/w800/Uploaded",
      "slug": "Hội-nghị-toàn-quốc-quán-triệt,-triển-khai-thực-hiện-Nghị-quyết-Trung-ương-10,-khóa-XIII",
      "date": "2024-10-20",
      "coverImage": "1729414771896_Screenshot from 2024-10-17 13-53-21.png"
    },
    {
      "id": 7,
      "title": "[Ảnh] Chủ tịch Quốc hội Trần Thanh Mẫn tiếp Chánh án Tòa án nhân dân tối cao Trung Quốc",
      "category": "Tin tức",
      "excerpt": "<p>&nbsp;</p><p><span class=\" prefix-sapo\">NDO - </span>Sáng 20/10, tại Nhà Quốc hội, <a target=\"_bl",
      "slug": "[Ảnh]-Chủ-tịch-Quốc-hội-Trần-Thanh-Mẫn-tiếp-Chánh-án-Tòa-án-nhân-dân-tối-cao-Trung-Quốc",
      "date": "2024-10-20",
      "coverImage": "1729412509756_Screenshot from 2024-10-17 13-53-21.png"
    },
    {
      "id": 6,
      "title": "[Ảnh] Chủ tịch Quốc hội Trần Thanh Mẫn tiếp Chánh án Tòa án nhân dân tối cao Trung Quốc",
      "category": "Tin tức",
      "excerpt": "<p>&nbsp;</p><p><span class=\" prefix-sapo\">NDO - </span>Sáng 20/10, tại Nhà Quốc hội, <a target=\"_bl",
      "slug": "[Ảnh]-Chủ-tịch-Quốc-hội-Trần-Thanh-Mẫn-tiếp-Chánh-án-Tòa-án-nhân-dân-tối-cao-Trung-Quốc",
      "date": "2024-10-20",
      "coverImage": "1729410727332_Screenshot from 2024-10-17 13-53-21.png"
    },
    {
      "id": 8,
      "title": "Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết Trung ương 10, khóa XIII",
      "category": "Sự kiện",
      "excerpt": "<figure class=\"image\"><img style=\"aspect-ratio:800/598;\" src=\"https://image.nhandan.vn/w800/Uploaded",
      "slug": "Hội-nghị-toàn-quốc-quán-triệt,-triển-khai-thực-hiện-Nghị-quyết-Trung-ương-10,-khóa-XIII",
      "date": "2024-10-20",
      "coverImage": "1729414771896_Screenshot from 2024-10-17 13-53-21.png"
    },
    {
      "id": 7,
      "title": "[Ảnh] Chủ tịch Quốc hội Trần Thanh Mẫn tiếp Chánh án Tòa án nhân dân tối cao Trung Quốc",
      "category": "Tin tức",
      "excerpt": "<p>&nbsp;</p><p><span class=\" prefix-sapo\">NDO - </span>Sáng 20/10, tại Nhà Quốc hội, <a target=\"_bl",
      "slug": "[Ảnh]-Chủ-tịch-Quốc-hội-Trần-Thanh-Mẫn-tiếp-Chánh-án-Tòa-án-nhân-dân-tối-cao-Trung-Quốc",
      "date": "2024-10-20",
      "coverImage": "1729412509756_Screenshot from 2024-10-17 13-53-21.png"
    },
    {
      "id": 6,
      "title": "[Ảnh] Chủ tịch Quốc hội Trần Thanh Mẫn tiếp Chánh án Tòa án nhân dân tối cao Trung Quốc",
      "category": "Tin tức",
      "excerpt": "<p>&nbsp;</p><p><span class=\" prefix-sapo\">NDO - </span>Sáng 20/10, tại Nhà Quốc hội, <a target=\"_bl",
      "slug": "[Ảnh]-Chủ-tịch-Quốc-hội-Trần-Thanh-Mẫn-tiếp-Chánh-án-Tòa-án-nhân-dân-tối-cao-Trung-Quốc",
      "date": "2024-10-20",
      "coverImage": "1729410727332_Screenshot from 2024-10-17 13-53-21.png"
    }
  ]);

  return (
    <div className={`mx-auto flex w-full flex-col gap-4`}>
      <h2 className={`mb-2 border-y p-4 text-center text-3xl font-bold`}>
        Tin tức
      </h2>
      <div className={`flex flex-col justify-center gap-8 xl:flex-row`}>
        <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start">
          <div className={`flex flex-col gap-4`}>
            <BlogThumbnailColumnLayout
              isMain={false}
              title={posts[1].title}
              category={posts[1].category}
              description={posts[1].excerpt}
              date={posts[1].date}
              thumbnailUrl={posts[1].coverImage}
              slug={posts[1].slug}
            />
            <BlogThumbnailColumnLayout
              isMain={false}
              title={posts[2].title}
              category={posts[2].category}
              description={posts[2].excerpt}
              date={posts[2].date}
              thumbnailUrl={posts[2].coverImage}
              slug={posts[2].slug}
            />
          </div>
          <div className={`flex grid-cols-1 flex-col gap-4`}>
            <BlogThumbnailColumnLayout
              isMain={true}
              title={posts[0].title}
              category={posts[0].category}
              description={posts[0].excerpt}
              date={posts[0].date}
              thumbnailUrl={posts[0].coverImage}
              slug={posts[0].slug}
            />
          </div>
        </div>
        <div className="w-full justify-center lg:flex">
          <div className={`flex flex-col gap-4 p-2 lg:p-0`}>
            {posts.slice(3, posts.length).map((post) => (
              <BlogThumbnailRowLayout
                key={post.id}
                thumbnailUrl={post.coverImage}
                category={post.category}
                title={post.title}
                slug={post.slug}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div className="container flex w-full flex-col justify-center gap-10 lg:flex-row">
    //   <div>
    //   <h2 className={`mb-2 border-y p-4 text-center text-3xl font-bold`}>{header}</h2>
    //   <div className="flex flex-col gap-4">
    //     <SkeletonImage
    //       height="240px"
    //       src={posts[0].coverImage}
    //       className="aspect-video object-cover"
    //     />
    //     <div className="flex w-full justify-center gap-4">
    //       <div className="w-fit rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
    //         {posts[0].category}
    //       </div>
    //       <p
    //         className={`flex items-center gap-1 text-gray-500 dark:text-gray-300`}
    //       >
    //         {/*clock icon*/}
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           x="0px"
    //           y="0px"
    //           viewBox="0 0 24 24"
    //           className="h-4 w-4 fill-gray-500 dark:fill-gray-300"
    //         >
    //           <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
    //         </svg>
    //         {posts[0].date}
    //       </p>
    //     </div>
    //     <p className="text-md line-clamp-2 text-center font-semibold md:text-2xl">
    //       {posts[0].title}
    //     </p>
    //     <p className="line-clamp-3 text-balance text-center text-sm">
    //       {posts[0].excerpt}
    //     </p>
    //   </div>
    //   </div>
    //
    //   <div className="rounded-2xl bg-gray-100 p-4 dark:bg-gray-800 lg:w-2/6">
    //     <div className="relative py-4 font-neue text-2xl font-bold">
    //       Trending Now
    //       <div className="absolute h-0.5 w-8 bg-sky-500"></div>
    //     </div>
    //     <div className="flex flex-col gap-4 p-2">
    //       {posts.slice(1, 5).map((post) => (
    //         <BlogThumbnailRowLayout
    //           key={post.id}
    //           thumbnailUrl={post.coverImage}
    //           title={post.title}
    //           slug={post.slug}
    //           date={post.date}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default GroupPostsByCategory;
