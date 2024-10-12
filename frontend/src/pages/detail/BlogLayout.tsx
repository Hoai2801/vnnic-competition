import React from "react";
import RelatedPosts from "../../components/ui/blog/RelatedPosts";
import BlogDetailContent from "./BlogDetailContent";

const BlogLayout = () => {
  return (
    <div className={`flex grid-cols-3 flex-col gap-4 lg:grid`}>
      <div className={`col-span-2`}>
        <BlogDetailContent />
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
