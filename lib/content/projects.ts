import type { Project } from "./types";

export const projects: Project[] = [
  // ---- Flagship ----
  {
    slug: "clinical-ai-platform",
    tier: "flagship",
    title: "Clinical AI Platform",
    role: "Core Engineer — Kinwits, for a US healthcare provider",
    period: "Jul 2025 – Present",
    summary:
      "A HIPAA-compliant AI platform in production that generates treatment plans from EHR, CRM, and lab data.",
    impact: [
      "LLM provider migration (OpenAI → Anthropic Claude) behind a provider-abstraction layer",
      "Platform's largest subsystem: a RAG-based supplement recommendation engine over a 500+ product catalog",
      "~17x faster PDF processing and ~90% fewer CRM API calls",
    ],
    sections: [
      {
        heading: "The Platform",
        body: [
          "The platform generates clinical treatment plans by combining data from an EHR (Cerbo), a CRM (GoHighLevel), and lab results, then running it through an LLM pipeline with a provider-facing review and feedback workflow.",
        ],
      },
      {
        heading: "AI Provider Architecture",
        body: [
          "Migrated the platform's LLM integration from OpenAI to Anthropic Claude across the codebase, behind a provider-abstraction layer (text, JSON, vision, and structured-output APIs) that enables configuration-driven switching and safe model upgrades.",
        ],
      },
      {
        heading: "RAG Recommendation Engine",
        body: [
          "Architected the supplement-recommendation engine: RAG over AWS Bedrock Knowledge Bases with deterministic pre-LLM selection across a 500+ product catalog. It's the platform's largest subsystem.",
        ],
      },
      {
        heading: "Human-in-the-Loop Feedback",
        body: [
          "Designed an asynchronous clinician-feedback pipeline that classifies provider corrections to AI-generated plans and proposes fixes, closing the human-in-the-loop quality cycle.",
        ],
      },
      {
        heading: "Reliability & Compliance",
        body: [
          "Improved reliability and performance: redesigned lab-result retrieval to read stored results before LLM extraction, sped up PDF processing ~17x, and cut CRM API calls ~90% through caching.",
          "Hardened HIPAA compliance across the stack: PHI scrubbing in logs, customer-managed encryption, immutable audit archives, and LLM calls routed within the compliance boundary. Rebuilt the backend CI/CD pipeline with required tests, vulnerability scanning and smoke tests.",
        ],
      },
      {
        heading: "Provider-Facing Web App",
        body: [
          "Built the provider-facing web app in Next.js: a feedback dashboard, AI-insights analytics, scheduled-plan review with one-click EMR write-back, and a rich-text treatment-plan editor with version history.",
        ],
      },
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Anthropic Claude",
      "AWS Bedrock",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "DynamoDB",
      "SQS",
      "ECS Fargate",
    ],
    links: [],
    featured: true,
  },

  // ---- Infrastructure ----
  {
    slug: "shared-core-library",
    tier: "infrastructure",
    title: "Shared Core Library",
    role: "Creator — shared platform library",
    summary:
      "A shared HIPAA-compliant Python library that removes duplicated code between two production services.",
    impact: [
      "Unified LLM client, PHI scrubbing, audit logging, and a shared database layer",
      "CI-gated releases published via AWS CodeArtifact",
      "Used by two production services",
    ],
    sections: [
      {
        heading: "Why it exists",
        body: [
          "Two services had diverged copies of logging, LLM-client, and database code. The shared library consolidates them into one canonical, versioned, testable package instead of utilities maintained twice.",
        ],
      },
      {
        heading: "What it owns",
        body: [
          "A unified LLM client (text, JSON, vision, structured outputs), PHI scrubbing, audit logging, and a shared database layer, released through a CI-gated GitHub Actions workflow to AWS CodeArtifact.",
        ],
      },
    ],
    tech: ["Python", "AWS CodeArtifact", "GitHub Actions"],
    links: [],
  },
  {
    slug: "crm-ehr-integration",
    tier: "infrastructure",
    title: "CRM ↔ EHR Integration Service",
    role: "Developer & maintainer",
    summary:
      "A serverless integration service bridging a CRM and an EHR, automating patient survey data into clinical encounters.",
    impact: [
      "FastAPI on AWS Lambda, deployed with SAM/CloudFormation",
      "Automates questionnaire scoring and intake-survey notes into clinical encounters",
      "Processes lab-result webhooks; migrated to the CRM's v3 API",
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
          "Built and maintain a serverless FastAPI service on AWS Lambda (SAM/CloudFormation) that scores patient questionnaires, turns intake surveys into structured clinical encounter notes, and processes lab-result webhooks. Most recently migrated to the CRM's v3 API.",
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
      "Design system, PWA setup, strict CSP",
      "AWS Amplify CI/CD pipeline",
    ],
    sections: [
      {
        heading: "Founding the codebase",
        body: [
          "Scaffolded the Next.js 16 / React 19 application that a five-engineer team later built features on top of: the design system, PWA setup, a strict Content Security Policy, and the AWS Amplify CI/CD pipeline.",
        ],
      },
    ],
    tech: ["Next.js", "React", "AWS Amplify"],
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
