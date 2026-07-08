import Background from "@/components/effects/Background";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import SectionTitle from "@/components/ui/SectionTitle";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

<SectionTitle
    subtitle="Skills"
    title="Technologies I Work With"
/>

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

    </main>
  );
}