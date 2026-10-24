export const site = {
  name: "Sai Praneeth Pegada",
  role: "Software Engineer",
  tagline: "building AI systems that clinicians actually use.",
  url: "https://saipraneeth-portfolio.netlify.app",
  bio: "Software engineer with 4+ years of professional experience, 3+ in software development, building production web and AI applications. I'm a core engineer on a HIPAA-compliant clinical AI platform, working across Next.js frontends, Python/FastAPI backends and LangGraph agent pipelines on AWS. I've built a shared library used by production services, and I contribute to releases, code reviews and engineering standards across a multi-repo codebase.",
  email: "saipraneethpegada@gmail.com",
  phone: "+91 7989427037",
  social: {
    github: "https://github.com/SaiPraneethPegada",
    linkedin: "https://www.linkedin.com/in/sai-praneeth-pegada-psp131199",
  },
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL ??
    "https://drive.google.com/file/d/1Kpuk1CSQj5iB5pnUSG_gfjNM6vp1tMrO/view?usp=sharing",
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  },
} as const;
