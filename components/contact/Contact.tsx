"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <SectionTitle
        subtitle="Contact"
        title="Let's Build Something Great"
      />

      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">

        <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-zinc-400">
          Whether you're building a AAA game, multiplayer experience,
          simulation, or VR application, I'd be happy to discuss how I can
          contribute to your team.
        </p>

        {/* CTA Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-400"
          >
            <FaEnvelope className="mr-2 inline" />
            Email Me
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-blue-500 hover:bg-white/5"
          >
            <FaLinkedin className="mr-2 inline" />
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-blue-500 hover:bg-white/5"
          >
            <FaGithub className="mr-2 inline" />
            GitHub
          </a>

          <a
            href={profile.resume}
            target="_blank"
            className="rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-blue-500 hover:bg-white/5"
          >
            <FaDownload className="mr-2 inline" />
            Resume
          </a>

        </div>

        {/* Contact Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="flex items-center gap-3">

              <FaEnvelope className="text-blue-400" />

              <h3 className="font-semibold text-white">
                Email
              </h3>

            </div>

            <p className="mt-4 text-zinc-400">
              {profile.email}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="flex items-center gap-3">

              <FaMapMarkerAlt className="text-blue-400" />

              <h3 className="font-semibold text-white">
                Location
              </h3>

            </div>

            <p className="mt-4 text-zinc-400">
              {profile.location}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}