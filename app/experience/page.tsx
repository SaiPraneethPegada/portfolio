import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience across healthcare AI, full-stack, and platform engineering roles.",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
