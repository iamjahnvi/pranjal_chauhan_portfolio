import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";

const getSkillIcon = (skill: string) => {
  const map: Record<string, string> = {
    Python: "python",
    CSS: "css",
    HTML: "html",
    Git: "git",
    GitHub: "github",
    JavaScript: "javascript",
    n8n: "n8n",
    Netlify: "netlify",
    TinyFish: "fish",
  };
  return map[skill];
};

export function Skills() {
  if (!site.skills.length) return null;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <SectionHeader id="skills" index="04" title="Skills & Technologies" />

      <Reveal>
        <div className="flex flex-wrap gap-3">
          {site.skills.map((skill) => (
            <motion.span
              key={skill}
              className="flex items-center gap-2 cursor-default rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 font-mono text-xs text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-neutral-600 hover:text-white hover:bg-neutral-800/80 shadow-sm"
            >
              {getSkillIcon(skill) && (
                <img
                  src={`https://skillicons.dev/icons?i=${getSkillIcon(skill)}`}
                  alt={`${skill} icon`}
                  className="w-4 h-4 object-contain shrink-0"
                />
              )}
              {skill}
            </motion.span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
