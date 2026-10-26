import { useState, type ReactNode } from "react";
import { Shell, SectionHeader } from "@/components/Layout";
import { site, type Project } from "@/config/site";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";

export function Projects({ isSearchable = false }: { isSearchable?: boolean }) {
  const [query, setQuery] = useState("");

  const allProjects = site.projects.filter((p) => matchesQuery(p, query));

  return (
    <section id="projects">
      <SectionHeader title="Projects" anchorId="projects" />
      <Shell className="px-6 pb-12 pt-5 sm:px-8">
        {isSearchable && (
          <input
            aria-label="Search projects"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or technologies"
            className="mb-7 w-full border-b border-[var(--line)] bg-transparent py-3 font-mono text-xs text-[var(--fg)] outline-none placeholder:text-[var(--soft)] sm:max-w-sm"
          />
        )}

        {allProjects.length > 0 && (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {allProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-6 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white transition-all duration-300 hover:scale-[1.03]"
          >
            view full project gallery & archive →
          </Link>
        </div>
      </Shell>
    </section>
  );
}

function matchesQuery(p: Project, query: string) {
  if (!query) return true;
  const q = query.toLowerCase();
  return `${p.title} ${p.blurb} ${p.stack.join(" ")}`.toLowerCase().includes(q);
}
