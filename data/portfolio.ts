export const personal = {
  name: "Erdem Karakaş",
  role: "Software Engineer",
  location: "Berlin, Germany",
  timezone: "Europe/Berlin",
  email: "erdemkarakas26@gmail.com",
  status: {
    label: "Open to chats",
    tone: "positive" as const,
  },
};

export const intro = {
  bio: [
    "I've always seen myself as more than just a UI developer. I'm a product-minded engineer who loves bridging the gap between complex logic and seamless user experience. While my heart beats for sharp interfaces and refined frontend details, I'm equally at home architecting robust full-stack solutions with React, Next.js, and TypeScript. Whether I'm building real-time trading platforms or e-commerce systems, I thrive on shipping products from start to finish so they feel fast, look right, and solve the actual problem at hand. I work closely with design and product teams to refine every detail, focusing on work that changes how people interact with technology.",
  ],
  context: "Currently building at Machinarium · Based in Berlin.",
};

export const availability = {
  permit: "Valid work visa",
  languages: ["English C1", "German A2"],
  workMode: "Open to remote, hybrid, or onsite",
};

export type WorkItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  highlights?: string[];
  tech: string[];
  link?: string;
};

export const work: WorkItem[] = [
  {
    company: "Machinarium",
    role: "Frontend Engineer",
    start: "08/2024",
    end: "Present",
    summary:
      "Working on product UI, internal tools, and the Eve Shop mobile app with React, React Native, and TypeScript.",
    highlights: [
      "Cut errors and crashes by ~90% on the Eve Shop React Native app, making it stable across the device matrix.",
    ],
    tech: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.machinarium.co/",
  },
  {
    company: "Akinon",
    role: "Frontend Engineer",
    start: "01/2024",
    end: "08/2024",
    summary:
      "Headless commerce platform powering brands like Crocs, Koton, US Polo, and Doğtaş.",
    highlights: [
      "Migrated multi-brand storefronts to Next.js with 50%+ performance gains.",
    ],
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Vitest"],
    link: "https://akinon.com",
  },
  {
    company: "Overcodex",
    role: "Frontend Engineer",
    start: "01/2023",
    end: "11/2023",
    summary:
      "Real-time forex platforms (Socket.IO + Next.js) and a CRM with role-based access, shipped under tight performance budgets.",
    tech: ["TypeScript", "Next.js", "Socket.IO", "Redux Toolkit", "Recharts"],
    link: "https://overcodex.com",
  },
  {
    company: "GüvenleKirala",
    role: "Frontend Engineer",
    start: "07/2022",
    end: "01/2023",
    summary:
      "Real estate management platform — pixel-perfect Figma builds, Google Maps integration, full cross-browser support.",
    tech: ["React", "Next.js", "Chakra UI", "Tailwind CSS", "Firebase"],
    link: "https://guvenlekirala.com",
  },
  {
    company: "Alpata Technology",
    role: "Software Developer",
    start: "02/2020",
    end: "04/2021",
    summary:
      "Commodity exchange software — accounting and management modules, plus IoT integrations and on-site customer support.",
    tech: ["C#", "ASP.NET", "Angular", "MSSQL"],
    link: "https://alpatateknoloji.com",
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Boyner",
    description:
      "Frontend for one of Turkey's largest fashion e-commerce platforms — millions of users, peak-hour traffic, real shopping volume.",
    stack: ["React", "Next.js", "Redux Toolkit", "SCSS"],
    link: "https://www.boyner.com.tr",
    status: "Live",
  },
  {
    title: "Stablex",
    description:
      "Akbank-backed crypto trading platform — architected from scratch, real-time market data, fast trade flows, UI trustworthy enough for bank capital.",
    stack: ["TypeScript", "Next.js", "Redux Toolkit", "WebSockets"],
    link: "https://stablex.com.tr/",
    status: "Live",
  },
  {
    title: "Eve Shop",
    description:
      "A React Native shopping app I helped take from buggy to production-grade. After I joined the team, errors and crashes dropped by ~90% across the device matrix.",
    stack: ["React Native", "TypeScript", "Redux"],
    link: "https://www.eveshop.com.tr/",
    status: "Live",
  },
  {
    title: "Dara Merchant Panel",
    description:
      "Merchant dashboard for the Dubai market, built on a reusable component architecture so every team ships fast.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    link: "https://thedara.co/",
    status: "Live",
  },
];

export const stack = {
  Languages: ["TypeScript", "JavaScript", "Python", "C#"],
  Frontend: [
    "React",
    "React Native",
    "Next.js",
    "Tailwind CSS",
    "SCSS",
    "Styled Components",
    "Chakra UI",
    "Framer Motion",
    "Zustand",
    "Redux Toolkit",
    "Recharts",
    "i18next",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Fastify",
    "FastAPI",
    "Supabase",
    "REST",
    "GraphQL",
  ],
  Database: ["PostgreSQL", "MSSQL", "Firebase", "Redis"],
  "AI & LLMs": [
    "OpenAI",
    "Anthropic",
    "LangChain",
    "Vercel AI SDK",
    "RAG pipelines",
    "Embeddings",
    "Vector databases",
    "MCP",
  ],
  Realtime: ["Socket.IO", "Server-Sent Events", "WebSockets"],
  Testing: ["Vitest", "Playwright", "Jest", "Testing Library"],
  Tooling: [
    "Vite",
    "Webpack",
    "Git",
    "GitHub Actions",
    "Vercel",
    "Figma",
    "Claude Code",
    "Cursor",
  ],
};

export type Social = {
  name: string;
  url: string;
  handle?: string;
};

export const socials: Social[] = [
  { name: "Email", url: `mailto:${personal.email}`, handle: personal.email },
  { name: "GitHub", url: "https://github.com/erdemkarakas", handle: "@erdemkarakas" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/erdemkarakas",
    handle: "in/erdemkarakas",
  },
];

export const seo = {
  title: "Erdem Karakaş · Software Engineer",
  description:
    "Product-minded software engineer based in Berlin. I build full-stack web and mobile products with React, React Native, Next.js, TypeScript, Python, and AI tooling — Anthropic Claude, OpenAI, LangChain, RAG, MCP, and Claude Code in daily flow.",
  url: "https://erdemkarakas.dev",
  keywords: [
    "Erdem Karakaş",
    "Erdem Karakas",
    "software engineer",
    "product engineer",
    "frontend engineer",
    "full-stack engineer",
    "frontend developer Berlin",
    "React developer",
    "React Native developer",
    "Next.js developer",
    "TypeScript engineer",
    "Python developer",
    "AI engineer",
    "Anthropic Claude",
    "OpenAI",
    "LangChain",
    "RAG",
    "MCP",
    "Claude Code",
    "Cursor",
    "freelance frontend Berlin",
  ],
};
