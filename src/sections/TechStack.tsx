import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Icon } from "@iconify/react";

// NOTE: ProjectCard.tsx imports this map, so keep the old entries.
export const SKILL_ICONS: Record<string, string> = {
  TypeScript: "logos:typescript-icon",
  JavaScript: "logos:javascript",
  Python: "logos:python",
  Java: "logos:java",
  HTML: "logos:html-5",
  HTML5: "logos:html-5",
  "HTML5 Audio": "logos:html-5",
  CSS3: "logos:css-3",
  CSS: "logos:css-3",
  React: "logos:react",
  Vite: "logos:vitejs",
  TailwindCSS: "logos:tailwindcss-icon",
  "Node.js": "logos:nodejs-icon",
  "Express.js": "logos:express",
  FastAPI: "logos:fastapi-icon",
  Uvicorn: "lucide:zap",
  Groq: "simple-icons:groq",
  MongoDB: "logos:mongodb-icon",
  Mongoose: "simple-icons:mongoose",
  Supabase: "logos:supabase-icon",
  Streamlit: "simple-icons:streamlit",
  "Razorpay API": "simple-icons:razorpay",
  Axios: "simple-icons:axios",
  "REST APIs": "lucide:cpu",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  Netlify: "logos:netlify-icon",
  // new
  n8n: "simple-icons:n8n",
  AWS: "simple-icons:amazonaws",
  Vercel: "simple-icons:vercel",
  TinyFish: "lucide:fish",
};

// Accent colors are revealed on hover only — pills rest monochrome.
const SKILL_COLORS: Record<string, string> = {
  Uvicorn: "#14b8a6",
  "REST APIs": "#f59e0b",
  Mongoose: "#c0392b",
  Streamlit: "#ff4b4b",
  "Razorpay API": "#3395ff",
  Axios: "#5a29e4",
  GitHub: "var(--fg)",
  // new
  n8n: "#ea4b71",
  AWS: "#ff9900",
  Vercel: "var(--fg)",
  TinyFish: "#0ea5e9",
};

// Which skills from site.skills go where.
const LANGUAGES: string[] = ["Python", "HTML", "CSS", "JavaScript"];
const TOOLS: string[] = ["n8n", "Git", "GitHub", "AWS", "Netlify", "Vercel", "TinyFish"];

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.02 } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

// Tiny synthesized mechanical click (Web Audio, no assets).
let clickCtx: AudioContext | null = null;
function playClickSound() {
  try {
    if (!clickCtx) {
      const AC =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      clickCtx = new AC();
    }
    if (clickCtx.state === "suspended") void clickCtx.resume();
    const t = clickCtx.currentTime;
    const dur = 0.045;
    const buf = clickCtx.createBuffer(1, Math.max(1, Math.floor(clickCtx.sampleRate * dur)), clickCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = clickCtx.createBufferSource();
    src.buffer = buf;
    const filter = clickCtx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 2400;
    const gain = clickCtx.createGain();
    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(clickCtx.destination);
    src.start(t);
  } catch {
    /* audio unavailable — stay silent */
  }
}

function SkillPills({ skills }: { skills: string[] }) {
  const [popped, setPopped] = useState<string | null>(null);
  const popTimer = useRef(0);

  useEffect(() => () => window.clearTimeout(popTimer.current), []);

  function handlePillClick(skill: string) {
    playClickSound();
    setPopped(skill);
    window.clearTimeout(popTimer.current);
    popTimer.current = window.setTimeout(() => setPopped(null), 380);
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2.5"
      >
        {skills.map((skill) => {
          const iconName = SKILL_ICONS[skill] || "lucide:code-2";
          const color = SKILL_COLORS[skill];
          return (
            <motion.button
              key={skill}
              type="button"
              onClick={() => handlePillClick(skill)}
              variants={pillVariants}
              whileTap={{ scale: 0.96 }}
              aria-label={skill}
              className="group flex cursor-pointer items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--muted)]"
            >
              <motion.span
                animate={popped === skill ? { scale: [1, 1.45, 1] } : { scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid shrink-0 place-items-center"
              >
                <Icon
                  icon={iconName}
                  width={16}
                  height={16}
                  style={color ? ({ "--skill": color } as CSSProperties) : undefined}
                  className={`size-4 shrink-0 grayscale transition-[filter,color] duration-200 group-hover:grayscale-0 ${
                    color ? "group-hover:text-[var(--skill)]" : ""
                  }`}
                />
              </motion.span>
              {skill}
            </motion.button>
          );
        })}
      </motion.div>
    </MotionConfig>
  );
}

export function TechStack() {
  if (!site.skills.length) return null;

  const languages = site.skills.filter((s) => LANGUAGES.includes(s));
  const tools = site.skills.filter((s) => TOOLS.includes(s));

  return (
    <>
      {/* ───────── Tech Stack → Languages ───────── */}
      <div id="skills">
        <SectionHeader title="Tech Stack" anchorId="skills" />
        <Shell className="px-6 py-6 sm:px-8">
          <div className="mb-4 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--soft)]">
            <Icon icon="lucide:code-2" width={14} height={14} className="size-3.5" />
            Languages
          </div>
          <SkillPills skills={languages} />
        </Shell>
      </div>

      {/* ───────── Tools & Workflows ───────── */}
      <div id="tools">
        <SectionHeader title="Tools & Workflows" anchorId="tools" />
        <Shell className="px-6 py-6 sm:px-8">
          <SkillPills skills={tools} />
        </Shell>
      </div>
    </>
  );
}

export default TechStack;