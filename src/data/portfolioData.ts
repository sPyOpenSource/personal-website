import { Project, SkillCategory, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "sPyOpenSource",
  fullName: "Xuyi 'sPy' Wang",
  title: "Full Stack Engineer & Open Source Craftsman",
  bio: "Passionate software engineer specializing in high-performance web applications, 3D graphics with Three.js, real-time systems, and open-source tooling. Dedicated to building clean, accessible, and delightful digital experiences.",
  location: "San Francisco, CA (Remote available)",
  status: "Available for exciting projects",
  email: "xuyi@tetra.nl",
  github: "https://github.com/sPyOpenSource",
  linkedin: "https://linkedin.com/in/xuyi-wang-9196b128a",
  twitter: "https://x.com/spyopensource",
  resumeUrl: "#",
  stats: {
    yearsExperience: 8,
    projectsCompleted: 20,
    githubContributions: 142,
    openSourceStars: 15
  }
};

export const PROJECTS: Project[] = [
  {
    id: "3d-portfolio-site",
    title: "Interactive 3D Portfolio",
    description: "Personal web experience built with Three.js, React, and Tailwind CSS. Features procedurally rendered space environments, lighting, and interactive camera parallax.",
    category: "3D & WebGL",
    tags: ["Three.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/sPyOpenSource/personal-website",
    liveUrl: "https://spyopensource.dev",
    featured: true,
    stars: 342,
    forks: 89
  },
  {
    id: "quantum-ui-kit",
    title: "Quantum UI Design System",
    description: "An accessible, lightweight component library for dark-mode web applications with fluid spring-based animations.",
    category: "Open Source",
    tags: ["React", "Tailwind CSS", "Motion", "Storybook"],
    githubUrl: "https://github.com/sPyOpenSource/quantum-ui",
    liveUrl: "https://quantum-ui.demo",
    featured: true,
    stars: 215,
    forks: 41
  },
  {
    id: "dev-cli-tools",
    title: "sPy CLI Toolbelt",
    description: "Fast Node.js CLI utility for quick workspace bootstrapping, environment variable encryption, and git workflow hooks.",
    category: "Tools",
    tags: ["Node.js", "TypeScript", "Commander", "npm"],
    githubUrl: "https://github.com/sPyOpenSource/dev-cli-tools",
    featured: false,
    stars: 120,
    forks: 15
  },
  {
    id: "collab-canvas",
    title: "Realtime Collab Canvas",
    description: "Multi-user digital whiteboard supporting vector drawing, sticky notes, and instant cursor synchronization.",
    category: "Full Stack",
    tags: ["React", "TypeScript", "WebSockets", "HTML5 Canvas"],
    githubUrl: "https://github.com/sPyOpenSource/collab-canvas",
    liveUrl: "https://canvas.spyopensource.dev",
    featured: true,
    stars: 156,
    forks: 28
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & 3D Graphics",
    iconName: "Code",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Three.js / WebGL", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 Canvas & SVG", level: 90 }
    ]
  },
  {
    title: "Backend & Cloud Services",
    iconName: "Server",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "RESTful & GraphQL APIs", level: 88 },
      { name: "PostgreSQL & Prisma", level: 82 },
      { name: "Docker & Containers", level: 78 },
    ]
  },
  {
    title: "Tools, Testing & DevOps",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub Actions", level: 92 },
      { name: "Vite / Webpack / Esbuild", level: 88 },
      { name: "Linux CLI & Bash", level: 85 },
      { name: "CI/CD Pipelines", level: 82 }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Software Engineer",
    organization: "Tetra B.V.",
    period: "2018 - Present",
    description: "Leading frontend architecture and 3D web visualizations for real-time cloud infrastructure monitoring dashboard.",
    achievements: [
      "Engineered WebGL-accelerated graph visualizer rendering 50,000+ active nodes at 60 FPS.",
      "Reduced initial bundle load time by 42% through aggressive code splitting and asset pre-caching.",
      "Mentored junior developers and established company-wide TypeScript coding standards."
    ],
    type: "Work"
  },
  {
    id: "exp-2",
    role: "Lead Maintainer & Core Developer",
    organization: "sPyOpenSource Projects",
    period: "2021 - Present",
    description: "Creating and maintaining open-source web packages, CLI utilities, and Three.js shader experiments.",
    achievements: [
      "Accumulated 800+ total GitHub stars across open source repositories.",
      "Published 6 popular npm packages with over 15,000 monthly downloads.",
      "Reviewed and merged 150+ community pull requests."
    ],
    type: "Open Source"
  }
];
