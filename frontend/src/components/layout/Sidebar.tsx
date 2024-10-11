import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  to: string;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navItems: NavItem[] = [
    { to: "/", children: "Trang chủ" },
    { to: "/a", children: "Tin tức" },
    { to: "/b", children: "Sự kiện" },
    { to: "/c", children: "Thông báo" },
    { to: "/d", children: "Hoạt động đoàn" },
  ];

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          <div
            className="flex h-full w-full items-center justify-end bg-black bg-opacity-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-64 overflow-y-auto border-l border-gray-500 bg-white p-6 shadow-lg dark:bg-dark dark:text-white"
            >
              <button
                onClick={onClose}
                className="absolute -top-1 right-2 text-4xl"
              >
                &times;
              </button>
              <h2 className="font-neue text-2xl font-bold tracking-wider">
                Menu
              </h2>
              <div className="flex flex-col pt-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive, isPending, isTransitioning }) =>
                      [
                        "text-nowrap border-b border-gray-500 p-2 transition-colors hover:text-indigo-600",
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
              <div className="absolute bottom-6 w-52 border-t border-black bg-white pr-4 pt-4 dark:bg-dark">
                <Link to="/login">Login</Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Sidebar;
