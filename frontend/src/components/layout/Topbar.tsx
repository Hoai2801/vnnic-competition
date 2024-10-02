import React from "react";

export default function Topbar() {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 border-b px-4">
        <div className="flex items-center gap-3">
          <img
            src="https://vtcnews.vn/Content/pc/theme/images/logo.png?v=1209"
            alt=""
            className="h-[60px]"
          />
          <p className="text-sm">
            {new Intl.DateTimeFormat("vi-VN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="border-r px-2">bla bla</p>
          <p className="border-r px-2">bla bla</p>
          <div className="flex items-center rounded-md">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="flex-1 rounded-l-md border px-3 py-1 focus:outline-none"
            />
            <button className="rounded-r-md border bg-gray-300 px-3 py-1 transition-colors hover:bg-gray-400 active:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/200/svg"
                className="h-6 w-6"
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
            <button className="ml-4 rounded-md bg-gray-300 px-3 py-1 transition-colors hover:bg-gray-400 active:bg-gray-300">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center py-4">
        <img
          src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/461340984_925343789628003_5559711756639599007_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGmYMQYlA9cPGQk2majVgyQ2FuOTn8nE8XYW45OfycTxeYtzFjBQ3WwrvQHWvFPrmcOiDHpnn7mpKLiB69l92u_&_nc_ohc=XDSNj0JvjssQ7kNvgGqjgwV&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=AmLAf32CfLUQcR3b6x7x4dK&oh=00_AYD4N2lLbZ6lw8uwnMpGaDwFRfHog3GyDDO2JZHUQQutgA&oe=6701BE71"
          alt=""
          className="max-w-[1170px]"
        />
      </div>
    </>
  );
}
