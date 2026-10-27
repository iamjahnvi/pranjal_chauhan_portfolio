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
    nowBuilding: "NextStep",
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
      title: "SustainTheGlobe (EcoEcho)",
      blurb:
        "A hackathon project that turns small eco-friendly actions into points. Users sign in, log an environmental action with a photo, earn points calculated on the server, and see how they rank on a leaderboard.",
      story:
        "A React + TypeScript web client on a serverless AWS backend: Cognito for sign-up and sign-in, API Gateway and Lambda for the API, DynamoDB for data, and S3 presigned URLs for private photo uploads. Points come only from a server-side rule table, duplicate submissions are rejected, and the leaderboard masks user IDs.\n\nThe repo also has a Kotlin / Jetpack Compose Android starter and a Docker + LocalStack setup for local development. Deploying the full stack to AWS is the next step.",
      stack: ["React", "TypeScript", "Vite", "TailwindCSS", "AWS Lambda", "DynamoDB", "Amazon S3", "Amazon Cognito", "Docker", "Kotlin"],
      year: "2026",
      // image: "/project-images/sustaintheglobe.jpeg",
      links: {
        source: "https://github.com/iampranjal-source/wemakedevshachathon",
      },
    },
    {
      title: "Ashok Namkeen & Sweets",
      blurb:
        "A single-page website for a snack and sweets shop in Malviya Nagar, New Delhi. It presents the menu categories, the shop's story, customer reviews, opening hours and directions, with online ordering linked to Zomato.",
      story:
        "Built as a fast, mobile-friendly landing page with smooth in-page navigation: a hero with calls to action, specialties (Namkeen, Mithai, Hot Snacks), a 4.8-rated reviews section, and a store section with address, hours and a Google Maps link.",
      stack: ["HTML", "CSS", "Netlify"],
      year: "2026",
      // image: "/project-images/ashok-sweets.jpeg",
      links: {
        live: "https://ashok-sweets-namkeens.netlify.app/",
      },
    },
    {
      title: "Cafe Nine",
      blurb:
        "A single-page website for a neighbourhood coffeehouse in Khirki Extension, Malviya Nagar. It sets a slow-coffee mood and covers the café's story, menu highlights with prices, ratings from Zomato, Google, Magicpin and Swiggy, and visit details.",
      story:
        "A responsive landing page with a hero, a story section about the aquarium-café atmosphere, a short menu (frappe, hakka noodles, smoked sandwich), review highlights, an open-now status, and links for ordering on Zomato and reserving a table.",
      stack: ["HTML", "CSS", "Netlify"],
      year: "2026",
      // image: "/project-images/cafe-nine.jpeg",
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
