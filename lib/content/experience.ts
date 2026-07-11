import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    company: "Kinwits",
    role: "Software Engineer",
    location: "Healthcare client: bVital / Energy4Life Centers",
    period: "Jul 2025 – Present",
    current: true,
    bullets: [
      "Core engineer on E4L-Prometheus, a HIPAA-compliant AI platform in production that generates Parkinson's treatment plans from EHR, CRM, and lab data — top contributor with ~56% of backend and ~68% of frontend commits.",
      "Led the platform-wide LLM migration from OpenAI to Anthropic Claude on AWS Bedrock, designing the provider-abstraction layer that became the single integration point for all AI calls.",
      "Architected a supplement recommendation engine using RAG over AWS Bedrock Knowledge Bases — the platform's largest subsystem, backed by 112 unit tests.",
      "Designed an asynchronous clinician-feedback pipeline (DynamoDB Streams → Lambda → SQS FIFO → LangGraph workers) closing the human-in-the-loop AI quality cycle.",
      "Created bvital-core, a shared HIPAA-compliant Python library consumed by two production services, and built a serverless CRM-to-EHR integration service on AWS Lambda.",
      "Founded the architecture for a patient-facing portal later built out by a five-engineer team — design system, PWA setup, and CI/CD pipeline.",
      "Drove engineering standards across four repositories, own release integration, and mentor an intern and junior engineers through code review.",
      "Authored client-facing technical decision documents, including an AWS account-ownership and HIPAA compliance transition guide; recognized with a company Rewards & Recognition award.",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "AWS Bedrock", "Next.js", "TypeScript", "AWS"],
  },
  {
    company: "SidsFarm Pvt. Ltd.",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Jul 2024 – Feb 2025",
    current: false,
    bullets: [
      "Built an interactive logistics map with the Google Maps API — driving/aerial distance calculation and Places Autocomplete — improving delivery-address accuracy.",
      "Shipped multiple feature enhancements across a React + Django stack and conducted peer code reviews.",
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
      "Led end-to-end development of the Vehicles module in a storage-management product, using Redux and Formik FieldArray for dynamic form management.",
      "Developed and maintained 80+ client websites on an internal low-code builder with Strapi headless CMS and Netlify CI/CD.",
      "Centralized typography across the website-builder framework, standardizing UI across all client sites.",
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
