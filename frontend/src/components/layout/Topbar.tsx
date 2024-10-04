import React from "react";
import { Link } from "react-router-dom";
import SkeletonImage from "../ui/SkeletonImage";

// todo kiếm logo tách phông
export default function Topbar() {
  return (
    <>
      <div className="sticky top-0 z-10 flex w-full items-center justify-between gap-4 border-b bg-white p-2 sm:px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/0/09/Huy_Hi%E1%BB%87u_%C4%90o%C3%A0n.png"
              alt=""
              className="h-[40px] sm:h-[50px]"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/LogoGDU.jpg"
              alt=""
              className="h-[35px] sm:h-[45px]"
            />
          </div>
          <p className="hidden text-sm md:block">
            {new Intl.DateTimeFormat("vi-VN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <div className="flex items-center gap-2 rounded-md">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="hidden flex-1 rounded-l-md border px-3 py-1 focus:outline-none sm:block"
            />
            <button className="rounded-r-md border bg-gray-300 px-3 py-2 text-sm transition-colors hover:bg-gray-400 active:bg-gray-300 sm:px-2 sm:py-1 sm:text-base">
              <svg
                xmlns="http://www.w3.org/200/svg"
                className="h-4 w-4 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link to={"/login"}>
              <button className="rounded-md bg-sky-500 px-3 py-2 text-sm text-white transition-colors hover:bg-sky-600">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center py-4">
        <SkeletonImage
          height={120}
          src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/461340984_925343789628003_5559711756639599007_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGmYMQYlA9cPGQk2majVgyQ2FuOTn8nE8XYW45OfycTxeYtzFjBQ3WwrvQHWvFPrmcOiDHpnn7mpKLiB69l92u_&_nc_ohc=XDSNj0JvjssQ7kNvgGqjgwV&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmLAf32CfLUQcR3b6x7x4dK&oh=00_AYD4N2lLbZ6lw8uwnMpGaDwFRfHog3GyDDO2JZHUQQutgA&oe=6701BE71"
          additionalClassNames="max-w-[1280px]"
        />
      </div>
    </>
  );
}
