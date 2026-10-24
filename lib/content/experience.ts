import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    company: "Kinwits",
    role: "Software Engineer",
    location: "Remote",
    period: "Jul 2025 – Present",
    current: true,
    bullets: [
      "Core engineer on a HIPAA-compliant clinical AI platform in production for a US healthcare provider, generating treatment plans from EHR (Cerbo), CRM (GoHighLevel) and lab data.",
      "Migrated the platform's LLM integration from OpenAI to Anthropic Claude across the codebase, behind a provider-abstraction layer that enables configuration-driven switching and safe model upgrades.",
      "Architected the supplement-recommendation engine (RAG over AWS Bedrock Knowledge Bases with deterministic pre-LLM selection across a 500+ product catalog), the platform's largest subsystem.",
      "Designed an asynchronous clinician-feedback pipeline that classifies provider corrections to AI-generated plans and proposes fixes, closing the human-in-the-loop quality cycle.",
      "Built the provider-facing web app (Next.js): feedback dashboard, AI-insights analytics, scheduled-plan review with one-click EMR write-back, and a rich-text plan editor with version history.",
      "Improved reliability and performance: redesigned lab-result retrieval to read stored results before LLM extraction, sped up PDF processing ~17x, and cut CRM API calls ~90% through caching.",
      "Hardened HIPAA compliance across the stack: PHI scrubbing in logs, customer-managed encryption, immutable audit archives, and LLM calls routed within the compliance boundary.",
      "Created a shared Python library (LLM client, PHI scrubbing, audit logging) used by two production services; rebuilt the backend CI/CD pipeline with required tests, vulnerability scanning and smoke tests.",
      "Built and maintain a serverless CRM-to-EHR integration service (FastAPI, AWS Lambda) for questionnaire scoring and lab-result webhooks; scaffolded the patient-portal frontend later built out by a five-engineer team.",
      "Raised engineering standards across four repositories (PR templates, security policies, CI gates); review pull requests and mentor junior engineers. Company Rewards & Recognition award (Mar 2026).",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "AWS Bedrock",
      "Next.js",
      "Tailwind CSS",
      "ECS Fargate",
      "AWS",
    ],
  },
  {
    company: "SidsFarm Pvt. Ltd.",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Jul 2024 – Feb 2025",
    current: false,
    bullets: [
      "Built an interactive logistics map with the Google Maps API — driving/aerial distance calculation and Places Autocomplete for real-time location input — improving delivery-address accuracy.",
      "Shipped multiple feature enhancements across a React + Django stack and conducted peer code reviews to maintain code quality and share knowledge.",
    ],
    tech: ["React", "Redux", "Django", "PostgreSQL"],
  },
  {
    company: "CodeParva Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    location: "Bengaluru, India",
    period: "Jan 2023 – Jul 2024",
    current: false,
    bullets: [
      "Built and deployed the Vehicles module of a storage-management product end to end, using Redux for API state and Formik FieldArray for dynamic form management.",
      "Developed and maintained 80+ client websites on an internal low-code builder — React with Strapi headless CMS and Netlify CI/CD with per-site environments.",
      "Centralized typography across the website-builder framework, eliminating per-site styling work and standardizing UI across all client sites.",
    ],
    tech: ["React", "Redux", "Formik", "Strapi", "Netlify"],
  },
  {
    company: "Cyient Pvt. Ltd.",
    role: "Reliability Engineer",
    location: "Bengaluru, India",
    period: "Jun 2021 – Aug 2022",
    current: false,
    bullets: [
      "Analyzed aircraft incident reports and maintained reliability data in SAP before transitioning into software engineering.",
    ],
    tech: [],
  },
];
