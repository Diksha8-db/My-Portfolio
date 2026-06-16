export const vibemptionImg = "/assets/projects/vibemption.jpeg";
export const finlyticsImg = "/assets/projects/finlytics.jpeg";
export const taskoraImg = "/assets/projects/taskora.jpeg";
export const portfolioImg = "/assets/projects/portfolio.jpeg";
export const storyweaverImg = "/assets/projects/storyweaver.png";
export const griefbridgeImg = "/assets/projects/griefbridge.png";
export const knowsphereImg = "/assets/projects/knowsphere.png";
export const ieeeImg = "/assets/projects/ieeewebsite.png";

const githubProjects = [
    {
      id: 1,
      name: "GriefBridge – AI-Powered Legacy & Bereavement Support",
      description:
        "A multi-agent AI system that helps families navigate the administrative and emotional aftermath of losing a loved one. Orchestrates five specialized LangChain.js agents — document drafter, notification manager, memory ingestion pipeline, and a RAG-powered Legacy Companion — through a shared state graph with zero-hallucination guardrails. (Team of 4)",
      deploymentLink: "https://grief-bridge-y2ln.vercel.app/",
      techStack: ["Next.js", "LangChain.js", "Claude API", "Whisper", "Pinecone", "PostgreSQL", "Tailwind CSS", "Clerk"],
      githubUrl: "https://github.com/Diksha8-db/GriefBridge",
      image: griefbridgeImg,
    },
    {
      id: 2,
      name: "KnowSphere – RAG-Based Technical Chatbot",
      description:
        "An intelligent RAG chatbot that answers technical questions using real-world documentation via vector-based semantic search. Built with LangChain, Gemini API, and Astra DB — achieving a 35% improvement in query resolution accuracy, 97% GTmetrix performance score, and per-user rate limiting via Upstash Redis. Deployed on Vercel.",
      deploymentLink: "https://know-sphere-wnl9.vercel.app/",
      techStack: ["Next.js", "TypeScript", "LangChain", "Gemini API", "Astra DB", "Upstash Redis", "MongoDB", "JWT", "Framer Motion"],
      githubUrl: "https://github.com/Diksha8-db/KnowSphere",
      image: knowsphereImg,
    },
    {
      id: 3,
      name: "StoryWeaver – Preserving Culture, One Story at a Time",
      description:
        "A full-stack web application that preserves dying local dialects and oral histories by transforming spoken stories into translated, culturally explained, searchable digital archives. Built with Next.js, Firebase, and Gemini 1.5 Pro. 🏆 Won 1st place at GDG TechSprint among 100+ competing teams.",
      deploymentLink: "https://story-weaver-szm.vercel.app/",
      techStack: ["Next.js", "Firebase", "Gemini 1.5 Pro", "Google Speech-to-Text", "Tailwind CSS", "Vertex AI"],
      githubUrl: "https://github.com/Diksha8-db/StoryWeaver",
      image: storyweaverImg,
    },
    {
      id: 4,
      name: "Vibemption – Feel the Mood, Hear the Music",
      description:
        "Vibemption tunes into your mood and plays what your heart needs — AI-powered playlists, tailored to your emotions. 🎧✨ A full-stack MERN application using Gemini API for sentiment analysis to curate personalized YouTube playlists, with JWT auth, Bcrypt security, and a Chart.js analytics dashboard.",
      deploymentLink: "https://vibemption.vercel.app/",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini API", "Youtube API", "JWT"],
      githubUrl: "https://github.com/Diksha8-db/Vibemption",
      image: vibemptionImg,
    },
    {
      id: 5,
      name: "Finlytics – Track Smart. Spend Smarter.",
      description:
        "A smart financial tracker with an interactive income vs. expense dashboard. Features dynamic alert thresholds (50%/80%), floating overspend notifications, middleware-protected JWT auth, and interactive Recharts visualizations (Bar, Doughnut, Line) for category-based expense breakdowns.",
      deploymentLink: "https://finlytics-ezo1.onrender.com/",
      techStack: ["Next.js", "Tailwind CSS", "Recharts", "MongoDB", "JWT", "bcrypt", "Lucide Icons"],
      githubUrl: "https://github.com/Diksha8-db/Finlytics",
      image: finlyticsImg,
    },
    {
      id: 6,
      name: "IEEE SB NIT Patna – Official Website",
      description:
        "Collaborated as Web Developer (POC) on the official IEEE Student Branch website for NIT Patna. Contributed to UI development, component architecture, and team-based delivery as part of the IEEE SB tech team.",
      deploymentLink: "https://ieeesbnitp.vercel.app/",
      techStack: ["React.js", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/Sandeepkumargond/IEEE_SB_NITP-official-site",
      image: ieeeImg,
    },
    {
      id: 7,
      name: "Portfolio Website",
      description:
        "A dynamic and visually engaging portfolio built with React.js, Tailwind CSS, and Framer Motion. Brings skills and projects to life through smooth animations, responsive design, and a clean modern interface.",
      deploymentLink: "https://diksha-bharti-portfolio.vercel.app/",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS", "Lucide Icons"],
      githubUrl: "https://github.com/Diksha8-db/My-Portfolio",
      image: portfolioImg,
    },
    {
      id: 8,
      name: "Taskora – Organize. Prioritize. Conquer",
      description:
        "A responsive task manager with drag-and-drop reordering, due date filtering, status tracking, and deadline reminders. Clean vanilla JS implementation with no framework overhead.",
      deploymentLink: "https://taskora-to-do.vercel.app/",
      techStack: ["HTML5", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/Diksha8-db/TASKORA-To-Do-App",
      image: taskoraImg,
    },
  ];

export default githubProjects;