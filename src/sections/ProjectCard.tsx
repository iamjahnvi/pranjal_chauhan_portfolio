import { type Project } from "@/config/site";
import { GitHubIcon } from "@/components/icons";
import { SKILL_ICONS } from "./TechStack";
import { Icon } from "@iconify/react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

export function ProjectCard({ project: p }: { project: Project; index?: number }) {
  return (
    <article className="py-10 sm:py-14">
      {/* PHOTO — shows your image once `image` is set in site.ts, otherwise an empty slot */}
      {p.image ? (
        <div className="project-image-frame rounded-lg">
          <div
            className="project-image-window aspect-video overflow-hidden rounded-md"
            style={p.imageFit === "contain" && p.imageBg ? { background: p.imageBg } : undefined}
          >
            <img
              src={p.image}
              alt={`${p.title} preview`}
              loading="lazy"
              className={`h-full w-full ${p.imageFit === "contain" ? "object-contain" : "object-cover"} ${
                p.imagePosition === "center" ? "object-center" : "object-top"
              }`}
            />
          </div>
        </div>
      ) : (
        <div className="grid aspect-video w-full place-items-center rounded-lg border border-dashed border-[var(--line)] bg-[var(--chip)] text-[var(--soft)]">
          <div className="flex flex-col items-center gap-2 font-mono text-xs">
            <ImageIcon className="size-5" aria-hidden="true" />
            project photo goes here
          </div>
        </div>
      )}

      {/* NAME */}
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
        <h4 className="font-serif text-2xl text-[var(--fg)] sm:text-3xl">{p.title}</h4>
        {p.year && <span className="font-mono text-xs text-[var(--soft)]">{p.year}</span>}
      </div>

      {/* DESCRIPTION */}
      {p.blurb && (
        <p className="project-blurb mt-3 max-w-2xl whitespace-pre-line text-base leading-7">{p.blurb}</p>
      )}
      {p.story && (
        <p className="project-blurb mt-3 max-w-2xl whitespace-pre-line text-sm leading-6 opacity-80">{p.story}</p>
      )}

      {/* TECH STACK — icon + name */}
      {!!p.stack.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="project-tech inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--card)] px-2.5 py-1 font-mono text-[12px]"
            >
              <Icon icon={SKILL_ICONS[t] || "lucide:code-2"} className="size-3.5 shrink-0" />
              {t}
            </span>
          ))}
        </div>
      )}

      {/* LIVE + GITHUB — each one only shows if its URL exists */}
      {(p.links.live || p.links.source) && (
        <div className="mt-4 flex items-center gap-6">
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live website`}
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