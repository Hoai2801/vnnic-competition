import React from "react";
import RelatedPosts from "../../components/ui/blog/RelatedPosts";
import BlogDetailContent from "./BlogDetailContent";

const BlogLayout = () => {
  return (
    <div className={`flex grid-cols-3 flex-col gap-4 lg:grid`}>
      <div className={`col-span-2`}>
        <BlogDetailContent />
        <div className="flex items-center gap-2">
          <p className="text-medium py-4 text-lg">Chia sẽ bài viết này lên:</p>
          <a href="#">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-gray-500"
            >
              <title />
              <path
                d="M17.3,13.35a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41l2.12-2.12a2,2,0,0,0,0-2.83L17.3,5.28a2.06,2.06,0,0,0-2.83,0L12.35,7.4A1,1,0,0,1,10.94,6l2.12-2.12a4.1,4.1,0,0,1,5.66,0l1.41,1.41a4,4,0,0,1,0,5.66L18,13.06A1,1,0,0,1,17.3,13.35Z"
                fill="#464646"
              />
              <path
                d="M8.11,21.3a4,4,0,0,1-2.83-1.17L3.87,18.72a4,4,0,0,1,0-5.66L6,10.94A1,1,0,0,1,7.4,12.35L5.28,14.47a2,2,0,0,0,0,2.83L6.7,18.72a2.06,2.06,0,0,0,2.83,0l2.12-2.12A1,1,0,1,1,13.06,18l-2.12,2.12A4,4,0,0,1,8.11,21.3Z"
                fill="#464646"
              />
              <path
                d="M8.82,16.18a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l6.37-6.36a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L9.52,15.89A1,1,0,0,1,8.82,16.18Z"
                fill="#464646"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              enable-background="new 0 0 56.693 56.693"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 56.693 56.693"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="h-6 w-6 fill-gray-500"
            >
              <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
              className="h-6 w-6 fill-gray-500"
            >
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.576172 6 C 12.118043 9.5981082 10 14.323627 10 19.5 C 10 24.861353 12.268148 29.748596 15.949219 33.388672 C 15.815412 33.261195 15.988635 33.48288 16.005859 33.875 C 16.023639 34.279773 15.962689 34.835916 15.798828 35.386719 C 15.471108 36.488324 14.785653 37.503741 13.683594 37.871094 A 1.0001 1.0001 0 0 0 13.804688 39.800781 C 16.564391 40.352722 18.51646 39.521812 19.955078 38.861328 C 21.393696 38.200845 22.171033 37.756375 23.625 38.34375 A 1.0001 1.0001 0 0 0 23.636719 38.347656 C 26.359037 39.41176 29.356235 40 32.5 40 C 36.69732 40 40.631169 38.95117 44 37.123047 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 18.496094 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 34.804688 C 40.72689 36.812719 36.774644 38 32.5 38 C 29.610147 38 26.863646 37.459407 24.375 36.488281 C 22.261967 35.634656 20.540725 36.391201 19.121094 37.042969 C 18.352251 37.395952 17.593707 37.689389 16.736328 37.851562 C 17.160501 37.246758 17.523335 36.600775 17.714844 35.957031 C 17.941109 35.196459 18.033096 34.45168 18.003906 33.787109 C 17.974816 33.12484 17.916946 32.518297 17.357422 31.96875 L 17.355469 31.966797 C 14.016928 28.665356 12 24.298743 12 19.5 C 12 14.177406 14.48618 9.3876296 18.496094 6 z M 32.984375 14.986328 A 1.0001 1.0001 0 0 0 32 16 L 32 25 A 1.0001 1.0001 0 1 0 34 25 L 34 16 A 1.0001 1.0001 0 0 0 32.984375 14.986328 z M 18 16 A 1.0001 1.0001 0 1 0 18 18 L 21.197266 18 L 17.152344 24.470703 A 1.0001 1.0001 0 0 0 18 26 L 23 26 A 1.0001 1.0001 0 1 0 23 24 L 19.802734 24 L 23.847656 17.529297 A 1.0001 1.0001 0 0 0 23 16 L 18 16 z M 29.984375 18.986328 A 1.0001 1.0001 0 0 0 29.162109 19.443359 C 28.664523 19.170123 28.103459 19 27.5 19 C 25.578848 19 24 20.578848 24 22.5 C 24 24.421152 25.578848 26 27.5 26 C 28.10285 26 28.662926 25.829365 29.160156 25.556641 A 1.0001 1.0001 0 0 0 31 25 L 31 22.5 L 31 20 A 1.0001 1.0001 0 0 0 29.984375 18.986328 z M 38.5 19 C 36.578848 19 35 20.578848 35 22.5 C 35 24.421152 36.578848 26 38.5 26 C 40.421152 26 42 24.421152 42 22.5 C 42 20.578848 40.421152 19 38.5 19 z M 27.5 21 C 28.340272 21 29 21.659728 29 22.5 C 29 23.340272 28.340272 24 27.5 24 C 26.659728 24 26 23.340272 26 22.5 C 26 21.659728 26.659728 21 27.5 21 z M 38.5 21 C 39.340272 21 40 21.659728 40 22.5 C 40 23.340272 39.340272 24 38.5 24 C 37.659728 24 37 23.340272 37 22.5 C 37 21.659728 37.659728 21 38.5 21 z"></path>
            </svg>
          </a>
        </div>
        <section className="py-4">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h2 className="font-manrope mb-6 text-center text-2xl font-bold text-gray-900">
              Our latest blog
            </h2>
            <div className="flex flex-wrap justify-center gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
              <div className="group w-full rounded-2xl border border-gray-300 dark:bg-white max-lg:max-w-xl lg:w-1/3">
                <div className="flex items-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1696244317.png"
                    alt="blogs tailwind section"
                    className="w-full rounded-t-2xl object-cover"
                  />
                </div>
                <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
                  <span className="mb-3 block font-medium text-indigo-600">
                    Jan 01, 2023
                  </span>
                  <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                    Clever ways to invest in product to organize your portfolio
                  </h4>
                  <p className="mb-10 leading-6 text-gray-500">
                    Discover smart investment strategies to streamline and
                    organize your portfolio..
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-lg font-semibold text-indigo-600"
                  >
                    Read more..
                  </a>
                </div>
              </div>
              <div className="group w-full rounded-2xl border border-gray-300 dark:bg-white max-lg:max-w-xl lg:w-1/3">
                <div className="flex items-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1696244340.png"
                    alt="blogs tailwind section"
                    className="w-full rounded-t-2xl object-cover"
                  />
                </div>
                <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
                  <span className="mb-3 block font-medium text-indigo-600">
                    Feb 01, 2023
                  </span>
                  <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                    How to grow your profit through systematic investment with
                    us
                  </h4>
                  <p className="mb-10 leading-6 text-gray-500">
                    Unlock the power of systematic investment with us and watch
                    your profits soar. Our..
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-lg font-semibold text-indigo-600"
                  >
                    Read more..
                  </a>
                </div>
              </div>
              <div className="group w-full rounded-2xl border border-gray-300 dark:bg-white max-lg:max-w-xl lg:w-1/3">
                <div className="flex items-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1696244356.png"
                    alt="blogs tailwind section"
                    className="w-full rounded-t-2xl object-cover"
                  />
                </div>
                <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
                  <span className="mb-3 block font-medium text-indigo-600">
                    Mar 01, 20233
                  </span>
                  <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                    How to analyze every holdings of your portfolio
                  </h4>
                  <p className="mb-10 leading-6 text-gray-500">
                    Our comprehensive guide will equip you with the tools and
                    insights needed to..
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-lg font-semibold text-indigo-600"
                  >
                    Read more..
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={`col-span-1`}>
        <RelatedPosts />
      </div>
    </div>
  );
};

export default BlogLayout;
