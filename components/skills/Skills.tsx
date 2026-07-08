const skills = [
  {
    title: "Unity",
    description: "Gameplay systems, UI flows, physics, animation",
  },
  {
    title: "C#",
    description: "OOP, SOLID principles, design patterns",
  },
  {
    title: "DOTS",
    description: "Entity systems, proximity loading, performance",
  },
  {
    title: "Networking",
    description: "Photon Pun, Fusion, Unity Netcode",
  },
  {
    title: "Rendering",
    description: "Shader Graph, URP, HDRP pipelines",
  },
  {
    title: "Tools",
    description: "Git, Plastic SCM, Bitbucket",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24"
    >
      <p className="mb-3 uppercase tracking-[0.4em] text-blue-400">
        Skills
      </p>

      <h2 className="mb-16 text-5xl font-bold text-white">
        Technologies I Work With
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
          >
            <h3 className="mb-3 text-2xl font-semibold text-white">
              {skill.title}
            </h3>

            <p className="text-zinc-400">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}