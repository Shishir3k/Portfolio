"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "シシール [SHISHIR]",
  "MANGA_DEV",
  "PYTHON_DEV",
  "WEB_DEV",
  "JAVASCRIPT_DEV"
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500); // Changes text every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block min-h-[1.2em] relative overflow-hidden vertical-align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-block text-zinc-50 font-bold bg-zinc-800/50 px-2 border-l-2 border-zinc-400"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}