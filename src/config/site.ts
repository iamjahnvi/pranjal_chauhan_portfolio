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
  imageFit?: "cover" | "contain";
  /** Frame backdrop behind a `contain` image, sampled from the shot itself. */
  imageBg?: string;
  /** Object position for `cover` images. Defaults to top (good for website screenshots). Use center for centered device shots. */
  imagePosition?: "top" | "center";
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export const site = {
  name: "Pranjal Chauhan",
  firstName: "Pranjal",
  url: "https://jahnvidotdev.vercel.app",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  profileImages: [
    "/profile.jpg",
  ],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/banner.png",
  initials: "AJ",
  role: "Full Stack Developer",
  location: "Delhi, India",
  timezone: "Asia/Kolkata",
  email: "conveytojahnvi@gmail.com",
  greeting: "Hey, I'm Pranjal Chauhan",
  tagline: "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Pranjal Chauhan, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.",
    "I spend most of my time in the terminal, the browser, or scribbling on a whiteboard. I lean backend, not because I don't like frontend, but because I enjoy making polished things actually hold up.",
    "I don't ship junk. Maintainability isn't optional. And I build best when I'm curious.",
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
    nowBuilding: "Thoda Sukoon",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/iampranjal-source",
    twitter: "https://x.com/iampranjal304",
    linkedin: "https://www.linkedin.com/in/pranjal-chauhan-57436a2b2/?isSelfProfile=true",
    email: "mailto:conveytojahnvi@gmail.com",
    resume: "https://drive.google.com/file/d/1NQwCDHVQZxRd_hUnQ2vSI3dQX3SNb8Js/view?usp=sharing",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@jahnvidotdev",
  },
  experience: [
    {
      company: "Independent Developer",
      role: "Backend & Full-Stack Developer",
      period: "2025 – Present",
      blurb:
        "Building and shipping full-stack applications, SaaS products, and backend systems for real-world use cases. Working across APIs, authentication, databases, real-time systems, and modern web infrastructure.",
      url: "",
    },
  ] as Job[],
    projects: [
    {
      title: "Thoda Sukoon",
      blurb:
        "A small romantic-music player page with a now-playing card, a heart-styled progress bar and play, previous and next controls. It also links out to Spotify and YouTube.",
      stack: ["HTML", "CSS", "JavaScript", "Netlify"],
      year: "2026",
      image: "/project-images/thoda-sukkon-front-page.webp",
      links: {
        live: "https://thoda-sukoon.netlify.app/",
      },
    },
    {
      title: "Ashok Namkeen & Sweets",
      blurb:
        "A single-page website for a snack and sweets shop in Malviya Nagar, New Delhi. It shows the menu categories, the shop's story, customer reviews and store hours, with directions on Google Maps and online ordering through Zomato.",
      stack: ["HTML", "CSS", "Netlify"],
      year: "2026",
      image: "/project-images/ashoka-sweets-front-page.webp",
      links: {
        live: "https://ashok-sweets-namkeens.netlify.app/",
      },
    },
    {
      title: "Cafe Nine",
      blurb:
        "A single-page website for a neighbourhood coffeehouse in Khirki Extension, Malviya Nagar. It covers the café's story, menu highlights with prices, ratings across delivery platforms and visit details, with links to order on Zomato or reserve a table.",
      stack: ["HTML", "CSS", "Netlify"],
      year: "2026",
      image: "/project-images/cafe-nine-front-page.webp",
      links: {
        live: "https://cofee-cafe-9.netlify.app/",
      },
    },
  ] as Project[],
  skills: [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "n8n",
    "Git",
    "GitHub",
    "AWS",
    "Netlify",
    "Vercel",
    "TinyFish",
  ],
  github: {
    username: "iampranjal-source",
    contributionsLastYear: "52",
  },
  footerNote: "Built with ❤️ and hardwork"
} as const;

export type Site = typeof site;
