"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/types/project";
import ProjectMedia from "./ProjectMedia";

type Props = {
    project: Project | null;
    onClose: () => void;
};

export default function ProjectModal({
    project,
    onClose,
}: Props) {

    return (
        <AnimatePresence>

            {project && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
                    onClick={onClose}
                >

                    <motion.div
                        initial={{ scale: .95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: .95, opacity: 0 }}
                        transition={{ duration: .25 }}
                        onClick={(e)=>e.stopPropagation()}
                        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111111]"
                    >

                        <button
                            onClick={onClose}
                            className="absolute right-5 top-5 z-50 rounded-full bg-black/50 p-2 hover:bg-black"
                        >
                            <X className="text-white"/>
                        </button>

                        <ProjectMedia
                            gifs={project.gifs}
                            image={project.image}
                            video={project.video}
                            youtubeId={project.youtubeId}
                        />

                        <div className="p-10">

                            <p className="uppercase tracking-widest text-blue-400">
                                {project.company} • {project.duration}
                            </p>

                            <h2 className="mt-3 text-5xl font-bold text-white">
                                {project.title}
                            </h2>

                            <p className="mt-6 leading-8 text-zinc-300">
                                {project.overview}
                            </p>

                            {project.responsibilities && (

                                <>
                                    <h3 className="mt-10 text-2xl font-semibold text-white">
                                        Responsibilities
                                    </h3>

                                    <ul className="mt-5 space-y-3 text-zinc-300">

                                        {project.responsibilities.map((item)=>(
                                            <li key={item}>
                                                • {item}
                                            </li>
                                        ))}

                                    </ul>
                                </>

                            )}

                            <h3 className="mt-10 text-2xl font-semibold text-white">
                                Technologies
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-3">

                                {project.technologies.map((tech)=>(

                                    <span
                                        key={tech}
                                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-300"
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}