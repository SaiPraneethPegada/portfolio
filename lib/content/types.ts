export type ProjectTier = "flagship" | "infrastructure" | "early";

export interface ProjectLink {
  label: "GitHub" | "Live Demo";
  href: string;
}

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  tier: ProjectTier;
  title: string;
  role?: string;
  period?: string;
  summary: string;
  impact?: string[];
  sections?: CaseStudySection[];
  tech: string[];
  links: ProjectLink[];
  image?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  tech?: string[];
}

export interface SkillItem {
  name: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  location: string;
  period: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  credentialUrl: string;
}
