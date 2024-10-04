import React from "react";
import BackToTop from "./../ui/BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="w-full max-w-[1280px]">
        <Topbar />
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </div>
    </div>
  );
}
