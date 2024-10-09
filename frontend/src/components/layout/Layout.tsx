import React from "react";
import BackToTop from "../ui/BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="min-h-screen max-w-[1280px] px-4">{children}</div>
      <Footer />
      <BackToTop />
    </>
  );
}
