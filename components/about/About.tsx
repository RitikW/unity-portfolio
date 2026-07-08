export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-24"
    >
      <div className="grid gap-16 md:grid-cols-2">

        <div>
          <p className="mb-3 uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Gameplay Programmer
          </h2>

          <p className="leading-8 text-zinc-400">
            I'm a Unity Gameplay Programmer with 5+ years of professional
            experience developing gameplay systems, AI, multiplayer features,
            optimization tools, and mobile/AAA projects.

            I enjoy building scalable gameplay architecture while maintaining
            clean, maintainable code.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Quick Facts
          </h3>

          <div className="space-y-4 text-zinc-300">
            <p>🎮 5+ Years Professional Experience</p>
            <p>⚙️ Unity & C# Specialist</p>
            <p>🚀 Gameplay Programming</p>
            <p>🧠 AI Systems</p>
            <p>🌐 Multiplayer </p>
            <p>⚡ Performance Optimization</p>
          </div>
        </div>

      </div>
    </section>
  );
}