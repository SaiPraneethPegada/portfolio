import type { Project } from "./types";

export const projects: Project[] = [
  // ---- Flagship ----
  {
    slug: "e4l-prometheus",
    tier: "flagship",
    title: "E4L-Prometheus",
    role: "Core Engineer — Kinwits, for healthcare client bVital / Energy4Life Centers",
    period: "Jul 2025 – Present",
    summary:
      "A HIPAA-compliant AI platform in production that generates Parkinson's treatment plans from EHR, CRM, and lab data. Top contributor with ~56% of backend and ~68% of frontend commits.",
    impact: [
      "119-file LLM provider migration (OpenAI → Anthropic Claude on AWS Bedrock)",
      "Platform's largest subsystem: a RAG-based supplement recommendation engine, 112 unit tests",
      "Authored ~30 of the provider-facing app's 43 components",
    ],
    sections: [
      {
        heading: "The Platform",
        body: [
          "E4L-Prometheus generates clinical treatment plans for Parkinson's patients by combining data from an EHR (Cerbo), a CRM (GoHighLevel), and lab results, then running it through an LLM pipeline with a provider-facing review and feedback workflow.",
        ],
      },
      {
        heading: "AI Provider Architecture",
        body: [
          "Led the platform-wide LLM migration from OpenAI to Anthropic Claude on AWS Bedrock: designed a provider-abstraction layer (text, JSON, vision, and structured-output APIs) that became the single integration point for all AI calls, enabling environment-driven provider switching and safe model upgrades — a 119-file refactor.",
        ],
      },
      {
        heading: "RAG Recommendation Engine",
        body: [
          "Architected a supplement recommendation engine using RAG over AWS Bedrock Knowledge Bases — clinical rules extracted from practitioner transcripts, deterministic pre-LLM selection over a 500+ product catalog with fuzzy matching. It's the platform's largest subsystem, backed by 112 unit tests.",
        ],
      },
      {
        heading: "Human-in-the-Loop Feedback",
        body: [
          "Designed an asynchronous clinician-feedback pipeline (DynamoDB Streams → Lambda → SQS FIFO → LangGraph workers) that classifies provider corrections to AI-generated plans and proposes fixes, with conflict detection and an insights analytics API.",
        ],
      },
      {
        heading: "Reliability & Compliance",
        body: [
          "Built the nightly batch plan-generation service on ECS Fargate with EventBridge scheduling, two-level deduplication, and per-plan token/cost tracking with CloudWatch alarms. Hardened HIPAA compliance across the stack: PHI scrubbing in structured logs, customer-managed KMS encryption, and immutable audit archives.",
          "Resolved production reliability issues including subprocess-isolated PDF rendering to survive native crashes in nightly batches, and a PDF-processing migration that cut document-processing time roughly 17x.",
        ],
      },
      {
        heading: "Provider-Facing Web App",
        body: [
          "Designed and built the provider-facing web app in Next.js, TypeScript, and Tailwind CSS: a feedback-management dashboard, AI-insights analytics, scheduled-plan review with one-click EMR write-back, and a WYSIWYG treatment-plan editor with locked clinical sections and version history — authoring roughly 30 of the app's 43 components.",
        ],
      },
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Anthropic Claude",
      "AWS Bedrock",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "TipTap",
      "DynamoDB",
      "SQS",
      "ECS Fargate",
    ],
    links: [],
    featured: true,
  },

  // ---- Infrastructure ----
  {
    slug: "bvital-core",
    tier: "infrastructure",
    title: "bvital-core",
    role: "Creator — shared platform library",
    summary:
      "A shared HIPAA-compliant Python library eliminating code duplication between two production services.",
    impact: [
      "Unified LLM client, PHI scrubbing, audit logging, metrics, and an async SQLAlchemy ORM layer (~20 models)",
      "187 tests, CI-gated CalVer releases, published via AWS CodeArtifact",
      "Consumed by two production services",
    ],
    sections: [
      {
        heading: "Why it exists",
        body: [
          "Two services had diverged copies of logging, LLM-client, and database code. bvital-core consolidates them into one canonical, versioned, testable package rather than maintained-twice utilities.",
        ],
      },
      {
        heading: "What it owns",
        body: [
          "Unified LLM client (text/JSON/vision/structured outputs), PHI scrubbing, audit logging, metrics, secrets handling, and an async SQLAlchemy database layer with roughly 20 ORM models aligned to the production schema.",
          "187 tests with no external dependencies (SDKs mocked), CI-gated version bumps, and a GitHub Actions workflow that publishes releases to AWS CodeArtifact.",
        ],
      },
    ],
    tech: ["Python", "SQLAlchemy", "Alembic", "AWS CodeArtifact", "pytest"],
    links: [],
  },
  {
    slug: "ghl-cerbo-pdq39",
    tier: "infrastructure",
    title: "GHL ↔ Cerbo Integration Service",
    role: "Creator & primary owner",
    summary:
      "A serverless integration service bridging a CRM and an EHR, automating patient survey data into clinical encounters.",
    impact: [
      "FastAPI on AWS Lambda, deployed with SAM/CloudFormation",
      "Automates Parkinson's questionnaire scoring into clinical encounters",
      "18-metric CloudWatch monitoring dashboard, 3 authentication schemes",
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Patient-completed surveys and intake forms lived in a CRM but needed to become structured records in the clinical EHR automatically, alongside incoming lab-result webhooks.",
        ],
      },
      {
        heading: "The system",
        body: [
          "Built and own a serverless FastAPI service on AWS Lambda (SAM/CloudFormation): automates Parkinson's questionnaire (PDQ-39) scoring into clinical encounters, processes lab-result webhooks behind three distinct authentication schemes, and ships with an 18-metric CloudWatch monitoring dashboard.",
        ],
      },
    ],
    tech: ["Python", "FastAPI", "AWS Lambda", "SAM", "CloudWatch"],
    links: [],
  },
  {
    slug: "patient-portal-frontend",
    tier: "infrastructure",
    title: "Patient Portal — Founding Architecture",
    role: "Founding engineer",
    summary:
      "Scaffolded the architecture for a patient-facing portal later built out by a five-engineer team.",
    impact: [
      "Next.js 16 / React 19 application scaffold",
      "Design system (shadcn/ui + Radix), PWA setup, strict CSP",
      "AWS Amplify CI/CD pipeline",
    ],
    sections: [
      {
        heading: "Founding the codebase",
        body: [
          "Scaffolded the Next.js 16 / React 19 application that a five-engineer team later built features on top of: the design system (shadcn/ui + Radix), PWA setup, a strict Content Security Policy, and the AWS Amplify CI/CD pipeline.",
        ],
      },
    ],
    tech: ["Next.js", "React", "shadcn/ui", "AWS Amplify"],
    links: [],
  },

  // ---- Early projects ----
  {
    slug: "stack-overflow-clone",
    tier: "early",
    title: "Stack Overflow Clone",
    summary:
      "Clone of the popular Q&A platform, with question posting, answering, upvoting, view tracking, and full authentication.",
    tech: ["MongoDB", "Express.js", "React", "Redux Toolkit"],
    links: [
      { label: "GitHub", href: "https://github.com/SaiPraneethPegada/stack-overflow-clone-client" },
      { label: "Live Demo", href: "https://stack-overflow-clone-client.netlify.app" },
    ],
    image: { src: "/images/projects/stack-overflow-clone.jpg", alt: "Stack Overflow Clone screenshot" },
  },
  {
    slug: "food-delivery",
    tier: "early",
    title: "Food Delivery",
    summary:
      "Full-stack food ordering app with third-party payment processor integration, supporting both user and admin roles.",
    tech: ["MongoDB", "Express.js", "React", "Context API", "Razorpay"],
    links: [
      { label: "GitHub", href: "https://github.com/SaiPraneethPegada/Food-Delivery-Frontend" },
      { label: "Live Demo", href: "https://food-delivery-fe.netlify.app" },
    ],
    image: { src: "/images/projects/food-delivery.jpg", alt: "Food Delivery app screenshot" },
  },
  {
    slug: "kitchen-recipe-management",
    tier: "early",
    title: "Kitchen Recipe Management",
    summary:
      "A recipe-sharing application where users can post, view, favorite, comment on, and share recipes.",
    tech: ["MongoDB", "Express.js", "React", "Context API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/SaiPraneethPegada/Kitchen-Recipe-Management-Frontend",
      },
      { label: "Live Demo", href: "https://kitchen-recipe-management-fe.netlify.app" },
    ],
    image: {
      src: "/images/projects/kitchen-recipe-management.jpg",
      alt: "Kitchen Recipe Management screenshot",
    },
  },
  {
    slug: "chat-app",
    tier: "early",
    title: "Chat App",
    summary:
      "Real-time one-on-one chat application with Socket.io, including message notifications, profile picture uploads, and user search.",
    tech: ["MongoDB", "Express.js", "React", "Context API", "Socket.io"],
    links: [
      { label: "GitHub", href: "https://github.com/SaiPraneethPegada/Chat-App-Frontend" },
      { label: "Live Demo", href: "https://chat-app-fe.netlify.app" },
    ],
    image: { src: "/images/projects/chat-app.jpg", alt: "Chat App screenshot" },
  },
];

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const infrastructureProjects = projects.filter((p) => p.tier === "infrastructure");
export const earlyProjects = projects.filter((p) => p.tier === "early");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.tier !== "early");
}
