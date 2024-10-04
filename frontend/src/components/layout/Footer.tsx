import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mt-4 h-16 w-full border-t">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
