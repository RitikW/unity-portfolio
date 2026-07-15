"use client";

import { Project } from "@/types/project";
import ProjectMedia from "./ProjectMedia";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Gameplay GIF */}
      <div className="overflow-hidden">
                <ProjectMedia
    gifs={project.gifs}
    image={project.image}
    video={project.video}
    youtubeId={project.youtubeId}
/>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Optional company & duration */}
        {(project.company || project.duration) && (
          <p className="mb-2 text-sm uppercase tracking-widest text-blue-400">
            {project.company}
            {project.company && project.duration && " • "}
            {project.duration}
          </p>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1
                text-sm
                text-blue-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">

          <button
           onClick={onClick}
            className="
              text-blue-400
              cursor-pointer
              font-semibold
              transition-all
              duration-300
              group-hover:translate-x-2
            "
          >
            View More Info →
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              GitHub
            </a>
          )}

        </div>

      </div>
    </div>
  );
}