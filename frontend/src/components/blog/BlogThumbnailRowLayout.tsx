import React from "react";
import { Link } from "react-router-dom";
import SkeletonImage from "../skeleton/SkeletonImage";

interface Props {
  title: string;
  thumbnailUrl: string;
  slug: string;
  category: string;
  date: string;
}

const BlogThumbnailRowLayout: React.FC<Props> = ({
  title,
  thumbnailUrl,
  slug,
  category,
  date,
}) => {
  return (
    <Link to={`/article/${slug}`}>
      <div
        className={`flex justify-between gap-4 border-t border-gray-300 pt-4 xl:w-auto`}
      >
        <div className={`flex max-w-xl flex-col gap-2`}>
          <p className={`text-gray-500`}>{category}</p>
          <p className={`line-clamp-4 text-sm font-medium dark:text-white`}>
            {title}
          </p>
          <p className={`flex items-center gap-1 text-gray-500`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-slate-500"
              >
                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
              </svg>
            </span>
            {date}
          </p>
        </div>
        <div className={`flex-shrink-0 overflow-hidden rounded-lg`}>
          <SkeletonImage
            src={thumbnailUrl}
            height="100px"
            width="100px"
            className="aspect-square min-h-[100px] object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogThumbnailRowLayout;
