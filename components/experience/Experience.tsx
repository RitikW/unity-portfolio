"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#050505] py-32"
    >
      <div className="mx-auto max-w-6xl px-8">

        <p className="mb-4 uppercase tracking-[0.4em] text-blue-400">
          Experience
        </p>

        <h2 className="mb-20 text-5xl font-bold text-white">
          Professional Journey
        </h2>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-zinc-800" />

          <div className="space-y-20">

            {experience.map((job, index) => (

              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="relative pl-16"
              >

                {/* Timeline Dot */}

                <div className="absolute left-0 top-3 h-10 w-10 rounded-full border-4 border-blue-500 bg-[#050505]" />

                <p className="text-sm uppercase tracking-widest text-blue-400">
                  {job.duration}
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {job.company}
                </h3>

                <p className="mb-8 text-zinc-400">
                  {job.position}
                </p>

                <ul className="space-y-3 text-zinc-300">

                  {job.highlights.map((item) => (

                    <li
                      key={item}
                      className="flex gap-3"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

                <div className="mt-8 flex flex-wrap gap-3">

                  {job.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}