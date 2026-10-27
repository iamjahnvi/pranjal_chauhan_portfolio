import { type Project } from "@/config/site";
import { GitHubIcon } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project: p }: { project: Project; index?: number }) {
  return (
    <article className="py-10 sm:py-14">
      {/* PROJECT NAME */}
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h4 className="font-serif text-2xl text-[var(--fg)] sm:text-3xl">{p.title}</h4>
        {p.year && <span className="font-mono text-xs text-[var(--soft)]">{p.year}</span>}
      </div>

      {/* LIVE + GITHUB — hidden individually when the URL doesn't exist */}
      {(p.links.live || p.links.source) && (
        <div className="mt-4 flex items-center gap-6">
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live website`}
              title={`${p.title} live website`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
              Live
            </a>
          )}
          {p.links.source && (
            <a
              href={p.links.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} GitHub repository`}
              title={`${p.title} GitHub repository`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              <GitHubIcon className="size-4" aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}