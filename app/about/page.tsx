import type { Metadata } from "next";
import { Bio } from "@/components/about/bio";
import { SkillGroups } from "@/components/about/skill-group";
import { EducationTimeline } from "@/components/about/education-timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer building HIPAA-compliant AI systems for healthcare — background, skills, and education.",
};

export default function AboutPage() {
  return (
    <>
      <Bio />
      <SkillGroups />
      <EducationTimeline />
    </>
  );
}
