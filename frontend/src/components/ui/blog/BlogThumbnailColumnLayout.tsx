import React from "react";
import { Link } from "react-router-dom";
import SkeletonImage from "../skeleton/SkeletonImage";

interface Props {
  thumbnailUrl: string;
  title: string;
  category: string;
  description: string;
  date: string;
  slug: string;
  isMain: boolean;
}

const BlogThumbnailColumnLayout: React.FC<Props> = ({
  thumbnailUrl,
  title,
  category,
  description,
  date,
  slug,
  isMain,
}) => {
  return (
    <Link to={`/blog/${slug}`}>
      <div className={`${isMain ? "xl:w-[600px]" : "xl:w-[340px]"}`}>
        <div
          className={`flex items-center justify-center overflow-hidden rounded-md`}
        >
          <SkeletonImage
            src={thumbnailUrl}
            height={isMain ? "340px" : "240px"}
            className={`h-[240px] w-full object-cover ${isMain ? "xl:h-[340px]" : "h-[240px]"}`}
          />
        </div>
        <div className={`flex max-w-2xl flex-col gap-2 py-4`}>
          <p
            className={`w-fit rounded-full bg-[#D3AA7E] px-3 py-1 text-sm font-semibold text-white`}
          >
            {category}
          </p>
          <h1
            className={`text-sm font-bold ${isMain ? "xl:text-2xl" : "text-sm"}`}
          >
            {title}
          </h1>
          <p
            className={` ${isMain ? "lg:block xl:text-base" : "xl:hidden"} text-sm`}
          >
            {description}
          </p>
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
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogThumbnailColumnLayout;
