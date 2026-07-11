import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sai Praneeth Pegada.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
      <Reveal>
        <SectionHeading eyebrow="Get in touch" title="Contact" />
      </Reveal>
      <div className="grid sm:grid-cols-5 gap-6">
        <Reveal className="sm:col-span-3">
          <Card className="p-6">
            <ContactForm />
          </Card>
        </Reveal>
        <Reveal delay={100} className="sm:col-span-2">
          <ContactInfo />
        </Reveal>
      </div>
    </div>
  );
}
