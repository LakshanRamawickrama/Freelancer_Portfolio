import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Skills } from "@/components/skills/skills";
import { Projects } from "@/components/projects/projects";
import { Experience } from "@/components/experience/experience";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <SiteFooter />
    </div>
  );
}
