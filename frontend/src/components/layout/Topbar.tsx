import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Topbar() {
  const [letterIndex, setLetterIndex] = useState<number>(0);

  const posts = [
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore rfgfsdgsdfgsdgshghjhjgjgjgjgm",
      category: "Tin 1",
      excerpt:
        "Nhân dịp Kỷ niệm Ngày Chuyển đổi số Quốc gia 2024, Đoàn Thanh Niên Trường Đại học Đông Á chính th.rpm phát động Cuộc thi Tracular...",
      slug: "tin-1",
      date: "01/01/2023",
      coverImage:
        "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/Blue-Gradient-Artificial-Intelligence-Digital-Transformation-Futuristic-Illustrative-Infographic-2.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex((letterIndex + 1) % posts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [letterIndex]);
  return (
    <>
      <div className="border-b bg-background px-4 text-sm text-white transition-colors dark:bg-dark sm:text-base">
        <div className="container flex h-[41px] items-center justify-between">
          <div className="flex items-center gap-1 py-2.5">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8202 1.17444L12.7809 2.37532C13.9186 3.7975 14.3379 5.20075 14.299 6.54704C14.2612 7.85605 13.7915 9.02304 13.3225 9.98619C13.1649 10.3098 12.9946 10.6349 12.8386 10.9327C12.7663 11.0708 12.697 11.203 12.6335 11.3265C12.4214 11.739 12.2593 12.0804 12.1563 12.3799C12.0528 12.6806 12.0336 12.8708 12.0468 12.991C12.0567 13.0817 12.0872 13.173 12.2071 13.2929C12.4054 13.4912 12.5517 13.5469 12.6404 13.5639C12.731 13.5814 12.8515 13.5757 13.0239 13.5049C13.4095 13.3463 13.8803 12.9334 14.3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634 10.4938C15.712 10.2242 15.8295 9.99387 15.9091 9.83234C15.9488 9.75168 15.979 9.6885 15.9988 9.64651L16.0205 9.59999L16.0252 9.58959L16.0259 9.58824L16.026 9.5879L16.0261 9.58776L16.0261 9.58771L16.6117 8.29169L17.6332 9.28206C19.946 11.5244 20.6617 14.7623 19.1415 17.7019C17.8195 20.2583 15.1123 22 12 22C7.60499 22 4 18.5172 4 14.1697C4 11.8793 5.26687 10.2404 6.64671 8.62914C6.82673 8.41894 7.0107 8.20711 7.19757 7.99194C8.47882 6.5167 9.89649 4.88437 11.1122 2.5397L11.8202 1.17444ZM17.1269 11.7924C16.8148 12.3321 16.4089 12.9705 15.9379 13.561C15.3851 14.2542 14.6528 14.9975 13.7846 15.3546C13.33 15.5415 12.8109 15.6335 12.2624 15.5279C11.7119 15.4219 11.2196 15.1338 10.7929 14.7071C10.3617 14.2759 10.1196 13.7664 10.0586 13.2082C10.0008 12.6794 10.1126 12.1723 10.2651 11.729C10.4181 11.2846 10.6372 10.8353 10.8549 10.412C10.9327 10.2606 11.0095 10.114 11.0856 9.96886C11.2338 9.68618 11.3792 9.40866 11.5243 9.11064C11.9559 8.22433 12.2745 7.36712 12.2998 6.48929C12.3134 6.01847 12.2432 5.51449 12.0273 4.9728C10.9109 6.77097 9.71215 8.14915 8.69763 9.31555C8.51377 9.52693 8.33596 9.73135 8.16579 9.93006C6.7748 11.5543 6 12.6877 6 14.1697C6 17.3667 8.66302 20 12 20C14.3543 20 16.3818 18.6846 17.365 16.7832C18.2267 15.1169 18.1049 13.3127 17.1269 11.7924Z"
                className="fill-white"
              />
            </svg>
            <p className="hidden font-neue text-sm font-bold md:block">
              Popular
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={posts[letterIndex].id}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 40,
                  mass: 1,
                }}
                className="ml-1 flex items-center gap-2"
              >
                <p className="max-w-[calc(100vw-140px)] truncate text-sm md:max-w-[calc(100vw-240px)]">
                  {posts[letterIndex].title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center py-2.5">
            <div className="hidden items-center gap-3 pr-4 md:flex">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-337 273 123.5 256"
                className="h-4 w-4 fill-white"
              >
                <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
              </svg>
              <svg
                viewBox="0 0 512 512"
                id="Layer_1"
                enableBackground="new 0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-white"
              >
                <g>
                  <path d="m437.02 74.98c-48.353-48.352-112.64-74.98-181.02-74.98s-132.667 26.628-181.02 74.98-74.98 112.64-74.98 181.02 26.628 132.667 74.98 181.02 112.64 74.98 181.02 74.98 132.667-26.628 181.02-74.98 74.98-112.64 74.98-181.02-26.628-132.667-74.98-181.02zm-2.132 315.679c-15.31-10.361-31.336-19.314-47.952-26.789 7.339-28.617 11.697-59.688 12.784-91.87h79.702c-3.144 44.336-19.244 85.147-44.534 118.659zm-402.31-118.659h79.702c1.088 32.183 5.446 63.254 12.784 91.87-16.616 7.475-32.642 16.427-47.952 26.789-25.29-33.512-41.39-74.323-44.534-118.659zm44.53-150.654c15.31 10.362 31.336 19.315 47.954 26.79-7.338 28.615-11.695 59.683-12.783 91.864h-79.701c3.144-44.334 19.243-85.142 44.53-118.654zm283.519-42.581c-5.863-10.992-12.198-20.911-18.935-29.713 27.069 11.25 51.473 27.658 71.977 47.997-11.625 7.638-23.702 14.369-36.155 20.185-4.886-13.664-10.528-26.547-16.887-38.469zm-12.965 50.404c-29.211 9.792-60.039 14.831-91.662 14.831s-62.451-5.039-91.662-14.831c20.463-58.253 54.273-97.169 91.662-97.169s71.199 38.916 91.662 97.169zm-203.359 110.831c1.056-28.342 4.885-55.421 10.937-80.116 32.136 10.644 66.018 16.116 100.76 16.116s68.624-5.472 100.76-16.116c6.053 24.695 9.881 51.773 10.937 80.116zm223.394 32c-1.057 28.344-4.885 55.424-10.938 80.12-32.139-10.646-66.02-16.12-100.759-16.12s-68.62 5.474-100.759 16.12c-6.053-24.696-9.882-51.776-10.938-80.12zm-216.324-193.235c-6.358 11.922-12 24.805-16.887 38.468-12.452-5.815-24.53-12.547-36.155-20.185 20.503-20.34 44.907-36.747 71.977-47.997-6.737 8.803-13.073 18.722-18.935 29.714zm-16.886 316.008c4.886 13.661 10.528 26.542 16.885 38.462 5.863 10.992 12.198 20.911 18.935 29.713-27.067-11.25-51.469-27.655-71.971-47.992 11.625-7.637 23.701-14.368 36.151-20.183zm29.853-11.938c29.213-9.794 60.04-14.835 91.66-14.835s62.447 5.041 91.66 14.835c-20.463 58.251-54.272 97.165-91.66 97.165s-71.197-38.914-91.66-97.165zm196.287 50.4c6.357-11.92 11.999-24.801 16.885-38.462 12.451 5.815 24.527 12.547 36.151 20.183-20.502 20.337-44.904 36.743-71.971 47.992 6.737-8.802 13.073-18.721 18.935-29.713zm39.093-193.235c-1.088-32.18-5.445-63.249-12.783-91.864 16.618-7.475 32.645-16.428 47.954-26.79 25.287 33.511 41.386 74.319 44.53 118.654z" />
                </g>
              </svg>
            </div>
            <div className="flex gap-1 border-l pl-4 font-neue text-xl font-bold">
              <p>{new Date().getDate()}</p>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-medium leading-none">
                  {new Date().toLocaleString("en-US", { month: "short" })}
                </p>
                <p className="text-xs font-medium leading-none">
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
