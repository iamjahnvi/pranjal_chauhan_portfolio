import { Shell, SectionHeader } from "@/components/Layout";

export function About() {
  return (
    <section id="about">
      <SectionHeader title="About" anchorId="about" />
      <Shell className="min-h-24 px-6 py-7 sm:px-8">
        <ul className="max-w-2xl space-y-5">
          <li className="flex gap-3">
            <span aria-hidden="true" className="shrink-0 text-base leading-7 text-[var(--soft)]">•</span>
            <p className="project-blurb text-base leading-7">
              I'm a 1st-year B.Tech CSE student exploring AI/ML, full-stack development, open source, and developer tools. I enjoy turning ideas into working projects, learning by experimenting, and building things that go beyond tutorials.
            </p>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="shrink-0 text-base leading-7 text-[var(--soft)]">•</span>
            <p className="project-blurb text-base leading-7">
              High-agency builder with a little delusion and a laptop. I build by reverse-engineering, breaking things apart, and rebuilding them.
            </p>
          </li>
        </ul>
      </Shell>
    </section>
  );
}
