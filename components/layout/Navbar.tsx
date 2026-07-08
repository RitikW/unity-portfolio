"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-6 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-mono text-xl font-bold text-white">
          &lt;RKVW/&gt;
        </h1>

        <div className="flex gap-8 text-sm text-zinc-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}