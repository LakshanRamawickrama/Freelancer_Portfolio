import projectsData from "@/data/projects.json";
import { ProjectGrid } from "@/components/projects/project-grid";
import type { ProjectItem } from "@/components/projects/types";

const items = projectsData as ProjectItem[];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Projects
        </span>
        <h2 className="font-heading mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Work across brands and formats
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          A mix of poster design, video production, AI-assisted content, and
          real ad campaign results from freelance and client work.
        </p>

        <div className="mt-10">
          <ProjectGrid items={items} />
        </div>
      </div>
    </section>
  );
}
