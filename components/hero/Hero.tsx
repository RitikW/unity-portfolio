"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-32">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div
className="
absolute
left-1/2
top-1/2
h-[700px]
w-[700px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-blue-500/10
blur-[180px]
"
/>


      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Role */}
        <p className="uppercase tracking-[0.45em] text-blue-400">
          {profile.role}
        </p>

        {/* Tagline */}
        <p className="mt-1.5 max-w-6xl text-sm uppercase tracking-[0.35em] text-blue-300 md:text-base">
          {profile.tagline}
        </p>

        {/* Name */}
        <h1 className="mt-5 text-6xl font-black leading-none text-white sm:text-7xl lg:text-9xl">
          {profile.firstName}
        </h1>

        <h1 className="text-6xl font-black leading-none text-zinc-500 sm:text-7xl lg:text-9xl">
          {profile.lastName}
        </h1>

        {/* Description
        <p className="mt-5 max-w-3xl text-lg leading-9 text-zinc-400">
          {profile.description}
        </p> */}

        {/* Tech Stack */}
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Unity • C# • DOTS • Multiplayer • AI • VR • Render Pipelines
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="#projects"
            className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-400"
          >
            View Projects
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20
hover:border-blue-400
hover:text-blue-400 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white"
          >
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-6 grid w-full max-w-4xl grid-cols-2 gap-10 md:grid-cols-4">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-5xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-5 flex items-center gap-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-all duration-300 hover:scale-110 hover:text-white "
          >
            <FaGithub size={28} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </motion.div>

      
    </section>
  );
}