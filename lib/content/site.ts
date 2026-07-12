export const site = {
  name: "Sai Praneeth Pegada",
  role: "Software Engineer",
  tagline: "building AI systems that clinicians actually use.",
  url: "https://saipraneeth-portfolio.netlify.app",
  bio: "Software engineer with 4+ years of experience, including 3+ years shipping production web and AI applications. I like owning systems end to end — from architecture decisions to the code that ships — and right now that means being the top contributor on a HIPAA-compliant clinical AI platform: building Next.js/TypeScript frontends, Python/FastAPI backends, and LangGraph agent pipelines on AWS Bedrock. I've also created two shared infrastructure codebases used across production services, and drive releases, code reviews, and engineering standards across a multi-repo, multi-team codebase.",
  email: "saipraneethpegada@gmail.com",
  phone: "+91 7989427037",
  social: {
    github: "https://github.com/SaiPraneethPegada",
    linkedin: "https://www.linkedin.com/in/sai-praneeth-pegada-psp131199",
  },
  resumeUrl: "/Sai_Praneeth_Pegada_Resume.pdf",
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  },
} as const;
