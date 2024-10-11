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
      <div className="bg-white py-4 transition-colors dark:bg-dark dark:text-white">
        <div className="container px-4"> {children}</div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
