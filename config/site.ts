export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Pranjal Chauhan",
  url: "https://jahnvidotdev.vercel.app",
  profileImages: [
    "/profile.jpg",
  ],
  bannerImage: "/banner.png",
  socialBannerImage: "/banner.png",
  initials: "AJ",
  role: "Full Stack Developer",
  location: "Delhi, India",
  timezone: "Asia/Kolkata",
  email: "conveytojahnvi@gmail.com",
  greeting: "Hey, I'm Pranjal Chauhan",
  tagline: "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "I'm a 1st-year B.Tech CSE student exploring AI/ML, full-stack development, open source, and developer tools. I enjoy turning ideas into working projects, learning by experimenting, and building things that go beyond tutorials.",
    "High-agency builder with a little delusion and a laptop. I build by reverse-engineering, breaking things apart, and rebuilding them.",
    "If you hate 72-hour tutorials and love building random shit out of sheer curiosity, we'll probably be friends.",
  ],
  tldr: [
    "Building products.",
    "Learning technologies.",
    "Shipping consistently.",
    "Obsessed with clean code.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Backend Engineering • System Design • DSA • DevOps",
    nowBuilding: "NextStep",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/iampranjal-source",
    twitter: "https://x.com/iampranjal304",
    linkedin: "https://www.linkedin.com/in/pranjal-chauhan-57436a2b2/",
  },
  experience: [
    {
      company: "Independent Developer",
      role: "Frontend Developer",
      period: "2025 — Present",
      blurb:
        "Built and deployed multiple SPAs & web applications. Engaged in competitive coding events like the Smart India Hackathon and HT codeathon.",
      url: "",
    },
  ] as Job[],
  projects: [] as Project[],
  skills: [
    "Python",
    "CSS",
    "HTML",
    "Git",
    "GitHub",
    "JavaScript",
    "n8n",
    "Netlify",
    "TinyFish",
  ],
  writing: [] as Post[],
  github: {
    username: "iamjahnvi",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork "
} as const;

export type Site = typeof site;
