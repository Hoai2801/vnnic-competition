import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-background dark:bg-dark flex w-full items-center justify-center border-t p-4 text-sm text-white sm:text-base">
        tuoitregiadinh ©{new Date().getFullYear()} - All Rights Reserved
      </div>
    </>
  );
}
