import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary flex min-h-screen w-full justify-center">
      <div className="w-full max-w-[1170px] bg-white">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
