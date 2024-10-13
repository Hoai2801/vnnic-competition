import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackToTop from "../ui/BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <div className="bg-white py-4 transition-colors dark:bg-dark dark:text-white">
        {children}
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
