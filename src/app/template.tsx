"use client";

import { motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        clipPath: "inset(0 100% 0 0)",
      }}
      animate={{
        clipPath: "inset(0 0% 0 0)",
      }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
