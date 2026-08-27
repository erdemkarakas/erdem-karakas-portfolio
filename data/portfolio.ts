export const personal = {
  name: "Erdem Karakas",
  role: "Full-Stack Engineer",
  location: "Berlin, Germany",
  timezone: "Europe/Berlin",
  email: "erdemkarakas26@gmail.com",
  photo: "/erdem-karakas.jpg",
  status: {
    label: "Open to full-stack roles",
    tone: "positive" as const,
  },
};

export const intro = {
  headline:
    "I build web and mobile products end to end: React and Next.js in front, Node and FastAPI behind them, PostgreSQL underneath.",
  bio: [
    "Five years of shipping production software, with TypeScript on both sides of it. In practice that has meant multi-tenant storefronts on shared infrastructure, role-based access control across an internal CRM, real-time trading screens fed by WebSockets, and a React Native app I took from crash-prone to stable.",
    "I like owning a feature end to end, from the data model through the API to the interface. I started out writing backend services and SQL rather than screens, so the database end still feels like my problem too. LLM tooling is part of how I build now rather than a side interest: RAG pipelines, the Vercel AI SDK, MCP, and Claude Code in the daily loop. I work closely with design and product, and I care more about code the next person can read than about clever code.",
  ],
  context: "Currently building at Machinarium · Based in Berlin.",
};

export type Metric = {
  value: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: "5+ yrs", label: "shipping production software" },
  { value: "~90%", label: "crash reduction on a React Native app" },
  { value: "50%+", label: "faster multi-brand storefronts" },
  { value: "Millions", label: "users served across live products" },
];

export const availability = [
  {
    k: "Work permit",
    v: "Valid German work visa · no sponsorship needed",
  },
  {
    k: "Location",
    v: "Berlin · remote, hybrid or onsite · open to relocation within Germany",
  },
  {
    k: "Languages",
    v: "English C1 · German A2 and improving · Turkish native",
  },
  {
    k: "Focus",
    v: "Full-stack: TypeScript, React, Next.js, Node, PostgreSQL",
  },
];

export type Principle = {
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    title: "Own the whole slice.",
    body: "A feature isn't done at the API boundary. I'd rather trace one request from the table to the button than hand half of it off and hope the other side lines up.",
  },
  {
    title: "Prefer the boring option.",
    body: "Most production incidents start as code someone was proud of. I write for whoever has to read it in six months.",
  },
  {
    title: "Performance is a budget.",
    body: "I set the budget before building, then profile on the slowest device and network our users have rather than on my laptop.",
  },
  {
    title: "Ship, then measure.",
    body: "Putting something small in front of users teaches me more than another week of planning. Crash rates and Core Web Vitals are harder to argue with than taste.",
  },
];

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
      "Product UI, internal tools, and the Eve Shop mobile app, built with React, React Native, Next.js and TypeScript for both web and the app stores.",
    highlights: [
      "Cut errors and crashes by ~90% on the Eve Shop React Native app and got it stable across the device matrix.",
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
      "Headless commerce platform behind brands like Crocs, Koton, US Polo and Doğtaş, running multi-tenant storefronts on shared infrastructure.",
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
      "Real-time forex platforms and an internal CRM, shipped under tight performance budgets.",
    highlights: [
      "Built the real-time market data layer on Socket.IO, which kept prices, charts and order state in sync under a continuous update stream.",
      "Implemented role-based access control across the CRM so every team saw only its own slice of the data.",
    ],
    tech: ["TypeScript", "Next.js", "Socket.IO", "Redux Toolkit", "Recharts"],
    link: "https://overcodex.com",
  },
  {
    company: "GüvenleKirala",
    role: "Frontend Engineer",
    start: "07/2022",
    end: "01/2023",
    summary:
      "Real estate management platform. I built the Figma designs out to the pixel, integrated Google Maps, and kept everything working across browsers.",
    tech: ["React", "Next.js", "Chakra UI", "Tailwind CSS", "Firebase"],
    link: "https://guvenlekirala.com",
  },
  {
    company: "Alpata Technology",
    role: "Software Developer",
    start: "02/2020",
    end: "04/2021",
    summary:
      "Commodity exchange software. I worked on the backend half: accounting and management modules in C# and ASP.NET, running against MSSQL.",
    highlights: [
      "Wrote the server-side modules along with the MSSQL schema and queries behind them.",
      "Integrated on-site IoT hardware into the exchange workflow and supported it in the field with customers.",
    ],
    tech: ["C#", "ASP.NET", "MSSQL", "Angular"],
    link: "https://alpatateknoloji.com",
  },
];

export type Project = {
  title: string;
  description: string;
  impact?: string;
  stack: string[];
  link?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Stablex",
    description:
      "Akbank-backed crypto trading platform, architected from scratch, with real-time market data and fast trade flows.",
    stack: ["TypeScript", "Next.js", "Redux Toolkit", "WebSockets"],
    link: "https://stablex.com.tr/",
    status: "Live",
  },
  {
    title: "Boyner",
    description:
      "Frontend for one of Turkey's largest fashion e-commerce platforms, with real shopping volume and heavy peak-hour traffic.",
    impact: "Millions of shoppers · peak-hour traffic",
    stack: ["React", "Next.js", "Redux Toolkit", "SCSS"],
    link: "https://www.boyner.com.tr",
    status: "Live",
  },
  {
    title: "Eve Shop",
    description:
      "A React Native shopping app I helped take from buggy to stable across the full device matrix.",
    impact: "~90% fewer errors and crashes",
    stack: ["React Native", "TypeScript", "Redux"],
    link: "https://www.eveshop.com.tr/",
    status: "Live",
  },
  {
    title: "Dara Merchant Panel",
    description:
      "Merchant dashboard for the Dubai market, built on a reusable component architecture so every team could ship against it without rebuilding the basics.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    link: "https://thedara.co/",
    status: "Live",
  },
];

export const stack = {
  Languages: ["TypeScript", "JavaScript", "Python", "C#"],
  "Backend & APIs": [
    "Node.js",
    "Express",
    "Fastify",
    "FastAPI",
    "REST",
    "GraphQL",
    "WebSockets",
    "Socket.IO",
    "Server-Sent Events",
  ],
  Databases: ["PostgreSQL", "MSSQL", "Redis", "Supabase", "Firebase"],
  "Frontend & Mobile": [
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Redux Toolkit",
    "Zustand",
    "SCSS",
    "Framer Motion",
  ],
  "AI & LLMs": [
    "Anthropic",
    "OpenAI",
    "LangChain",
    "Vercel AI SDK",
    "RAG pipelines",
    "Embeddings",
    "Vector databases",
    "MCP",
  ],
  Testing: ["Vitest", "Playwright", "Jest", "Testing Library"],
  "Infra & Tooling": [
    "Vercel",
    "GitHub Actions",
    "Docker",
    "Git",
    "Vite",
    "Webpack",
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
  title: "Erdem Karakas · Full-Stack Engineer",
  description:
    "Full-stack engineer in Berlin. TypeScript, React, Next.js, Node, FastAPI and PostgreSQL, end to end. Valid German work visa, open to full-stack roles.",
  url: "https://erdemkarakas.dev",
  keywords: [
    "Erdem Karakas",
    "Erdem Karakaş",
    "full-stack engineer",
    "full stack developer Berlin",
    "full stack engineer Germany",
    "software engineer Berlin",
    "product engineer",
    "React developer Berlin",
    "Next.js developer",
    "React Native developer",
    "TypeScript engineer",
    "Node.js developer",
    "PostgreSQL",
    "FastAPI",
    "REST APIs",
    "WebSockets",
    "Docker",
    "multi-tenant SaaS",
    "role-based access control",
    "LLM engineer",
    "AI agents",
    "Python developer",
    "AI engineer",
    "Anthropic Claude",
    "OpenAI",
    "LangChain",
    "RAG",
    "MCP",
    "Claude Code",
    "work visa Germany developer",
  ],
};
