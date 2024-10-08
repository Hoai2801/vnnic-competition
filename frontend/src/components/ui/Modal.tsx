import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return ReactDOM.createPortal(
    <>
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
              className="flex h-full w-full items-center justify-center bg-black bg-opacity-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
              }}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative flex items-center justify-center rounded bg-white p-6 shadow-lg"
              >
                <button
                  onClick={onClose}
                  className="absolute -top-1.5 right-1 text-2xl sm:text-3xl"
                >
                  &times;
                </button>
                {children}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
};

export default Modal;
