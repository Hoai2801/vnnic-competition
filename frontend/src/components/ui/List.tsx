import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface ListProps {
  onOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function List({ onOpen, onClose, children }: ListProps) {
  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {onOpen && (
        <motion.ol
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {React.Children.map(children, (child, index) => (
            <motion.li key={index} variants={item}>
              {child}
            </motion.li>
          ))}
        </motion.ol>
      )}
    </AnimatePresence>
  );
}
