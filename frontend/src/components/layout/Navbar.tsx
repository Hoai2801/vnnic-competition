import { motion, useScroll, useSpring } from "framer-motion";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Modal from "../ui/Modal";
import ThemeToggle from "./../theme/ThemeToggle";
import Sidebar from "./Sidebar";

interface NavItem {
  to: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems: NavItem[] = [
    { to: "/", children: "Trang chủ" },
    { to: "/blog", children: "Tin tức" },
    { to: "/b", children: "Sự kiện" },
    { to: "/c", children: "Thông báo" },
    { to: "/d", children: "Hoạt động đoàn" },
  ];

  const variants = {
    initial: { opacity: 0, zIndex: -1 },
    enter: { opacity: 1, zIndex: 40 },
    exit: { width: 0 },
  };

  return (
    <>
      <div className="sticky top-0 z-30">
        <div className="relative border-b bg-white px-4 transition-colors dark:bg-dark dark:text-white">
          <div className="container flex h-[60px] items-center justify-between md:h-[70px] 2xl:h-[120px]">
            <div className="flex items-center gap-2">
              <Link to={"/"}>
                <img src={logo} alt="" className="h-[40px] md:h-[50px]" />
              </Link>
              <div className="hidden md:block">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive, isPending, isTransitioning }) =>
                      [
                        "text-nowrap p-2 font-semibold transition-colors hover:text-indigo-600",
                        isPending ? "pending" : "",
                        isActive ? "text-indigo-600" : "",
                        isTransitioning ? "transitioning" : "",
                      ].join(" ")
                    }
                  >
                    {item.children}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={openModal}
                className="h-5 w-5 cursor-pointer"
              >
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-black dark:stroke-white"
                />
              </svg>
              <svg
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer md:hidden"
                onClick={openSidebar}
              >
                <path
                  d="M6.5 10.32C8.433 10.32 10 8.753 10 6.82001C10 4.88701 8.433 3.32001 6.5 3.32001C4.567 3.32001 3 4.88701 3 6.82001C3 8.753 4.567 10.32 6.5 10.32Z"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-black dark:stroke-white"
                />
                <path
                  d="M17.5 10.32C19.433 10.32 21 8.753 21 6.82001C21 4.88701 19.433 3.32001 17.5 3.32001C15.567 3.32001 14 4.88701 14 6.82001C14 8.753 15.567 10.32 17.5 10.32Z"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-black dark:stroke-white"
                />
                <path
                  d="M6.5 21.32C8.433 21.32 10 19.753 10 17.82C10 15.887 8.433 14.32 6.5 14.32C4.567 14.32 3 15.887 3 17.82C3 19.753 4.567 21.32 6.5 21.32Z"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-black dark:stroke-white"
                />
                <path
                  d="M17.5 21.32C19.433 21.32 21 19.753 21 17.82C21 15.887 19.433 14.32 17.5 14.32C15.567 14.32 14 15.887 14 17.82C14 19.753 15.567 21.32 17.5 21.32Z"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-black dark:stroke-white"
                />
              </svg>
              <Link to="/login">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-5 w-5 md:block"
                >
                  <path
                    d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M11 16L15 12M15 12L11 8M15 12H3"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-black dark:stroke-white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.15 }}
          style={{ scaleX }}
          className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-indigo-500`}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex gap-2 px-2">
          <input
            className="w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm focus:outline-none dark:bg-dark dark:text-white"
            type="text"
            placeholder="Search something..."
          />
          <button className="rounded-md bg-indigo-600 px-2 py-1 text-white hover:bg-indigo-500">
            Search
          </button>
        </div>
      </Modal>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}
