import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
            className="flex h-full w-full items-center justify-end bg-black bg-opacity-50 dark:bg-white dark:bg-opacity-5"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="dark:bg-dark relative h-full w-64 bg-white p-6 shadow-lg dark:text-white"
            >
              <button
                onClick={onClose}
                className="absolute -top-1 right-2 text-4xl"
              >
                &times;
              </button>
              <p>hello world</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Sidebar;
