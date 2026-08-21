/* ──────────────────────────────────────────────────────────
   SINGLE SOURCE OF TRUTH — All portfolio content
   (Updated directly from official resume)
   ────────────────────────────────────────────────────────── */

// ── Contact / Social ──────────────────────────────────────
export const CONTACT = {
  name: "Saurabh Singh",
  title: "Senior Backend Engineer",
  tagline: "API Architecture · Distributed Caching · Scalable Systems",
  location: "Vadodara, Gujarat, India",
  phone: "+91 83204 44237",
  email: "singhsaurabh0724@gmail.com",
  github: "https://github.com/saurabhsingh",
  linkedin: "https://www.linkedin.com/in/saurabh-singh-backend",
  resumeUrl: "/resume.pdf",
} as const;

// ── Hero ──────────────────────────────────────────────────
export const HERO = {
  headline: "I build backend systems that scale.",
  subheadline:
    "Senior Backend Engineer with 5+ years architecting, building, and scaling backend services and REST APIs for production platforms. Expert in API design, MySQL/PostgreSQL optimization, Redis caching, JWT/OAuth auth, Docker, and AWS.",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "40%", label: "Faster APIs" },
    { value: "500+", label: "Daily Active Users" },
    { value: "20+", label: "Production Systems" },
  ],
  terminalLines: [
    "$ ./saurabh --status",
    "",
    "> Initializing system check...",
    "✓ API response time: 40% faster",
    "✓ Systems in production: 20+",
    "✓ Uptime: 5+ years",
    "✓ Engineer status: AVAILABLE",
  ],
} as const;

// ── Impact Metrics ────────────────────────────────────────
export const METRICS = [
  { value: 40, suffix: "%", label: "Average API response time improvement" },
  { value: 30, suffix: "%", label: "Reduction in post-release defects" },
  { value: 500, suffix: "+", label: "Daily active users supported" },
  { value: 20, suffix: "+", label: "Production PHP/MySQL systems delivered" },
  { value: 2, suffix: "+", label: "Developers mentored" },
  { value: 100, suffix: "+", label: "Hours of structured technical instruction" },
] as const;

// ── Engineering Philosophy ────────────────────────────────
export const PHILOSOPHY = [
  {
    title: "Design for Scale",
    description:
      "Build modular backend architecture that scales horizontally without sacrificing code maintainability.",
    icon: "Layers",
    tags: ["Laravel", "Microservices", "REST API Design"],
  },
  {
    title: "Optimize with Evidence",
    description:
      "Use MySQL indexing strategies, Redis caching, profiling, and metrics rather than guesswork.",
    icon: "Activity",
    tags: ["Redis", "MySQL", "Query Optimization"],
  },
  {
    title: "Security by Default",
    description:
      "Multi-layered authentication (JWT/OAuth 2.0/Sanctum), webhook signature verification, and secure API design.",
    icon: "Shield",
    tags: ["JWT", "OAuth 2.0", "Sanctum"],
  },
  {
    title: "Ship with Confidence",
    description:
      "Automated testing (PHPUnit/PestPHP), code review workflows, static analysis (PHPStan), and GitHub Actions CI/CD pipelines.",
    icon: "Rocket",
    tags: ["PHPUnit", "PestPHP", "PHPStan", "GitHub Actions"],
  },
  {
    title: "Own the Entire Lifecycle",
    description:
      "Design → Develop → Test → Containerize → Deploy → Monitor → Maintain. End-to-end ownership for distributed engineering teams.",
    icon: "RefreshCw",
    tags: ["Docker", "AWS", "Nginx", "CI/CD"],
  },
] as const;

// ── Experience ────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Senior Backend Developer",
    company: "Kode Creators Pvt. Ltd.",
    location: "Vadodara",
    period: "Dec 2025 — Present",
    type: "current" as const,
    highlights: [
      "Own backend service and API architecture for US-based client platforms, driving design decisions and feature delivery in direct coordination with international stakeholders.",
      "Redesigned MySQL indexing strategy and introduced Redis caching across production services, cutting average API response time by 40% and restructuring services into modular components.",
      "Built secure API authentication (JWT, OAuth 2.0, Sanctum) and a Redis pub/sub event-driven layer to support real-time features across services.",
      "Containerized services with Docker/Docker Compose and configured Nginx for reverse-proxy, load-balanced deployments on AWS (EC2, S3, RDS); automated build/test/deploy with GitHub Actions CI/CD.",
      "Designed secure webhook/signature-verified integrations with payment gateways (Razorpay, PayU, Stripe) and shipped a production LLM (OpenAI/Claude) integration.",
      "Cut post-release bug rate 30% by establishing a structured PR review workflow, coding standards, and PHPUnit/PestPHP coverage with PHPStan static analysis; mentored 2+ backend developers.",
    ],
    tags: [
      "PHP 8.x", "Laravel", "MySQL", "Redis", "Redis Pub/Sub",
      "JWT", "OAuth 2.0", "Sanctum", "Docker", "Nginx", "AWS (EC2/S3/RDS)",
      "GitHub Actions", "PHPUnit", "PestPHP", "PHPStan", "Razorpay/Stripe", "OpenAI/Claude API",
    ],
    outcomes: [
      { metric: "40%", description: "API response time reduction" },
      { metric: "30%", description: "Post-release defect reduction" },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "BIT Infotech",
    location: "Vadodara",
    period: "Feb 2024 — Nov 2025",
    type: "past" as const,
    highlights: [
      "Architected and scaled an LMS/CRM backend to 500+ daily active users using modular, horizontally-scalable Laravel/CodeIgniter services.",
      "Designed versioned REST APIs consumed by frontend teams, reducing integration bugs across 2 teams through clearer contracts.",
      "Contributed backend support for SEO/Core Web Vitals initiatives, part of a push that grew organic traffic 35% within 3 months.",
    ],
    tags: [
      "Laravel", "CodeIgniter", "MySQL", "REST APIs",
      "SEO", "Core Web Vitals",
    ],
    outcomes: [
      { metric: "500+", description: "Daily active users" },
      { metric: "35%", description: "Organic traffic growth" },
    ],
  },
  {
    role: "Website Developer",
    company: "Dev Infotech",
    location: "Vadodara",
    period: "Jan 2021 — Dec 2023",
    type: "past" as const,
    highlights: [
      "Built and deployed 20+ production PHP/MySQL backend systems end-to-end as sole developer, from schema design through hosting/deployment.",
      "Integrated Razorpay/PayU payment APIs with secure transaction handling across multiple client industries, with zero major incidents.",
    ],
    tags: [
      "PHP", "MySQL", "Razorpay", "PayU",
      "Database Design", "Deployment",
    ],
    outcomes: [
      { metric: "20+", description: "Production systems delivered" },
    ],
  },
] as const;

// ── Education ─────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    period: "2022 – 2024",
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A)",
    institution: "Sardar Patel University",
    location: "Gujarat",
    period: "2019 – 2022",
  },
] as const;

// ── Case Studies ──────────────────────────────────────────
export const CASE_STUDIES = [
  {
    number: "01",
    title: "Making APIs 40% Faster",
    problem: "Production API performance needed improvement to support growing user traffic and complex query patterns.",
    approach: [
      "Analyzed database access patterns and identified bottleneck queries",
      "Redesigned MySQL indexes for high-frequency query paths",
      "Introduced Redis caching layer for frequently-accessed data",
      "Refactored services into modular, cacheable components",
    ],
    result: "40% reduction in average API response time",
    tags: ["MySQL", "Redis", "Laravel", "Query Optimization"],
    diagramType: "performance" as const,
  },
  {
    number: "02",
    title: "Production-Ready Authentication",
    problem: "Build a multi-layered authentication and authorization system supporting multiple auth strategies.",
    approach: [
      "Designed authentication middleware supporting JWT, OAuth 2.0, and Laravel Sanctum",
      "Implemented role-based access control with fine-grained permissions",
      "Added webhook signature verification for third-party integrations",
      "Secured API endpoints with rate limiting and token rotation",
    ],
    result: "Multi-strategy auth system serving production traffic with zero security incidents",
    tags: ["JWT", "OAuth 2.0", "Laravel Sanctum", "Security"],
    diagramType: "auth" as const,
  },
  {
    number: "03",
    title: "Event-Driven Backend Architecture",
    problem: "Tightly coupled services caused cascading failures and made feature deployment risky.",
    approach: [
      "Introduced Redis Pub/Sub for asynchronous inter-service communication",
      "Decoupled producer and consumer services for independent scaling",
      "Implemented retry logic and dead letter handling for reliability",
      "Built real-time features powered by event streams",
    ],
    result: "Decoupled architecture enabling independent service deployment and real-time features",
    tags: ["Redis Pub/Sub", "Event-Driven", "Laravel", "Queues"],
    diagramType: "event" as const,
  },
  {
    number: "04",
    title: "From Code to Production",
    problem: "Manual deployments were error-prone and time-consuming, blocking rapid iteration.",
    approach: [
      "Built GitHub Actions CI/CD pipeline with automated testing",
      "Integrated PHPUnit, PestPHP, and PHPStan into the pipeline",
      "Containerized applications with Docker and Docker Compose",
      "Configured Nginx reverse proxy and deployed to AWS EC2/S3/RDS",
    ],
    result: "Fully automated deployment pipeline from git push to production",
    tags: ["Docker", "GitHub Actions", "Nginx", "AWS", "PHPUnit", "PHPStan"],
    diagramType: "deployment" as const,
  },
] as const;

// ── Architecture Lab ──────────────────────────────────────
export const ARCHITECTURE_TABS = [
  {
    id: "api",
    label: "API Architecture",
    description: "Layered REST API architecture with clean separation of concerns",
    nodes: [
      { id: "client", label: "Client", description: "Web / Mobile / Third-party" },
      { id: "api", label: "REST API", description: "Route definitions + validation" },
      { id: "controller", label: "Controller", description: "Request handling + response" },
      { id: "service", label: "Service Layer", description: "Business logic + orchestration" },
      { id: "repository", label: "Repository", description: "Data access abstraction" },
      { id: "cache", label: "Redis Cache", description: "Read-through caching layer" },
      { id: "db", label: "MySQL / PostgreSQL", description: "Persistent data storage" },
    ],
  },
  {
    id: "caching",
    label: "Caching Architecture",
    description: "Read-through caching strategy with Redis",
    nodes: [
      { id: "request", label: "API Request", description: "Incoming client request" },
      { id: "check", label: "Cache Check", description: "Look up key in Redis" },
      { id: "hit", label: "Cache Hit", description: "Return cached response" },
      { id: "miss", label: "Cache Miss", description: "Query the database" },
      { id: "store", label: "Store in Cache", description: "Write result to Redis with TTL" },
      { id: "response", label: "Return Response", description: "Send data to client" },
    ],
  },
  {
    id: "auth",
    label: "Authentication",
    description: "Multi-strategy authentication pipeline",
    nodes: [
      { id: "client", label: "Client Request", description: "With credentials or token" },
      { id: "gateway", label: "API Gateway", description: "Rate limiting + CORS" },
      { id: "middleware", label: "Auth Middleware", description: "Token extraction + validation" },
      { id: "verify", label: "JWT / OAuth / Sanctum", description: "Strategy-based verification" },
      { id: "authorize", label: "Authorization", description: "Role + permission check" },
      { id: "resource", label: "Protected Resource", description: "Authorized data access" },
    ],
  },
  {
    id: "event",
    label: "Event-Driven",
    description: "Pub/Sub architecture for decoupled services",
    nodes: [
      { id: "producer", label: "Producer Service", description: "Publishes domain events" },
      { id: "channel", label: "Redis Pub/Sub", description: "Message broker channel" },
      { id: "consumer", label: "Consumer Service", description: "Subscribes + processes events" },
      { id: "action", label: "Side Effect", description: "Notification / sync / update" },
      { id: "feedback", label: "Real-time Update", description: "WebSocket or SSE push" },
    ],
  },
  {
    id: "deployment",
    label: "Deployment Pipeline",
    description: "Automated CI/CD from code to production",
    nodes: [
      { id: "git", label: "Git Push", description: "Code pushed to repository" },
      { id: "actions", label: "GitHub Actions", description: "CI pipeline triggered" },
      { id: "test", label: "PHPUnit / PestPHP", description: "Automated test suite" },
      { id: "analyze", label: "PHPStan", description: "Static analysis" },
      { id: "docker", label: "Docker Build", description: "Container image creation" },
      { id: "nginx", label: "Nginx", description: "Reverse proxy + SSL" },
      { id: "aws", label: "AWS EC2 / S3 / RDS", description: "Production infrastructure" },
    ],
  },
] as const;

// ── Tech Stack ────────────────────────────────────────────
export const TECH_STACK = [
  {
    category: "Backend Architecture",
    items: [
      "REST API Design", "MVC Architecture", "Microservices Fundamentals",
      "Event-Driven Architecture (Redis Pub/Sub)", "Horizontal Scalability", "Load Balancing",
    ],
  },
  {
    category: "Languages & Frameworks",
    items: ["PHP (Core & OOP, PHP 8.x)", "Laravel", "CodeIgniter", "Node.js / Express", "Python (FastAPI)"],
  },
  {
    category: "Data & Caching",
    items: [
      "MySQL (Query Optimization, Indexing, Schema Design, Joins)",
      "PostgreSQL", "Redis (Caching, Queues, Pub/Sub)",
    ],
  },
  {
    category: "Security",
    items: ["JWT", "OAuth 2.0", "Laravel Sanctum", "Secure API Authentication", "Webhook Signature Verification"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Docker Compose", "Nginx (Reverse Proxy & Load Balancing)", "AWS (EC2, S3, RDS)", "CI/CD (GitHub Actions)", "Git / GitHub"],
  },
  {
    category: "Testing & Process",
    items: ["PHPUnit", "PestPHP", "PHPStan", "Code Review Workflows", "Coding Standards"],
  },
  {
    category: "Integrations",
    items: ["Payment Gateways (Razorpay, PayU, Stripe)", "LLM API Integration (OpenAI / Claude)"],
  },
] as const;

// ── Achievements ──────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    title: "Parul University Tech Expo 2023",
    position: "2nd Place",
    project: "Facial Recognition Attendance Tracker",
    description: "Built a facial recognition-based attendance tracking system that earned second place at the university-wide technology expo.",
  },
  {
    title: "Technical Instruction",
    position: "100+ Hours",
    project: "Structured Technical Training",
    description: "Delivered over 100 hours of structured live technical instruction covering backend development, API design, and software engineering best practices; recognized for teaching quality and consistency.",
  },
] as const;

// ── Recruiter / Value Proposition ─────────────────────────
export const VALUE_PROPS = [
  {
    title: "Backend Ownership",
    description: "Design and build production APIs and backend services end-to-end, from architecture to deployment.",
    icon: "Server",
  },
  {
    title: "Performance Engineering",
    description: "Improve database performance, caching strategies, and API response times with measurable results.",
    icon: "Zap",
  },
  {
    title: "Production Engineering",
    description: "Containerization, CI/CD pipelines, cloud infrastructure, automated testing, and reliable deployment.",
    icon: "Container",
  },
] as const;

// ── Navigation ────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Architecture Lab", href: "#architecture-lab" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Backend Flow Diagram (Hero) ───────────────────────────
export const BACKEND_FLOW_NODES = [
  { id: "user", label: "User Request", icon: "Monitor" },
  { id: "gateway", label: "API Gateway", icon: "Globe" },
  { id: "laravel", label: "Laravel Services", icon: "Code" },
  { id: "redis", label: "Redis Cache", icon: "Database" },
  { id: "db", label: "MySQL / PostgreSQL", icon: "HardDrive" },
  { id: "queue", label: "Queue / Pub/Sub", icon: "ArrowLeftRight" },
  { id: "aws", label: "AWS Infrastructure", icon: "Cloud" },
] as const;

// ── 3D Network Graph Nodes ────────────────────────────────
export const NETWORK_NODES = [
  { id: "core", label: "API Core", tooltip: "Central API service layer", position: [0, 0, 0] as [number, number, number], size: 0.4 },
  { id: "client", label: "Client", tooltip: "Web & mobile applications", position: [-2.5, 1.5, 0] as [number, number, number], size: 0.25 },
  { id: "auth", label: "Auth", tooltip: "JWT / OAuth 2.0 / Laravel Sanctum", position: [-1.5, 2.5, 0.5] as [number, number, number], size: 0.25 },
  { id: "redis", label: "Redis", tooltip: "Distributed caching · 40% latency reduction", position: [1.5, 2, -0.5] as [number, number, number], size: 0.25 },
  { id: "mysql", label: "MySQL", tooltip: "Schema design · Indexing · Query optimization", position: [2.5, 0.5, 0] as [number, number, number], size: 0.25 },
  { id: "queue", label: "Queue", tooltip: "Redis Pub/Sub · Event-driven architecture", position: [2, -1.5, 0.5] as [number, number, number], size: 0.25 },
  { id: "payments", label: "Payments", tooltip: "Razorpay / PayU / Stripe", position: [0, -2.5, 0] as [number, number, number], size: 0.25 },
  { id: "external", label: "External APIs", tooltip: "OpenAI / Claude API integration", position: [-2, -1.5, -0.5] as [number, number, number], size: 0.25 },
  { id: "aws", label: "AWS", tooltip: "EC2 / S3 / RDS · Production infrastructure", position: [-2.5, -0.5, 0] as [number, number, number], size: 0.25 },
] as const;

export const NETWORK_CONNECTIONS = [
  ["core", "client"],
  ["core", "auth"],
  ["core", "redis"],
  ["core", "mysql"],
  ["core", "queue"],
  ["core", "payments"],
  ["core", "external"],
  ["core", "aws"],
] as const;

// ── System Status (Contact) ──────────────────────────────
export const SYSTEM_STATUS = [
  { service: "API", status: "ONLINE", color: "green" },
  { service: "CACHE", status: "READY", color: "green" },
  { service: "DATABASE", status: "HEALTHY", color: "green" },
  { service: "ENGINEER", status: "AVAILABLE", color: "green" },
] as const;
