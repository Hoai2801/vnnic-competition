import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`fixed bottom-3 right-3 z-10 rounded-full border p-2 transition-opacity ${visible ? "cursor-pointer opacity-100" : "cursor-default opacity-0"}`}
        onClick={visible ? handleClick : undefined}
      >
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 18V2m0 0l7 7m-7-7L3 9"
            className="stroke-gray-800"
          />
        </svg>
      </div>
    </>
  );
}
