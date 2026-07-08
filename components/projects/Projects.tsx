"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <SectionTitle
        subtitle="Projects"
        title="Featured Work"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}