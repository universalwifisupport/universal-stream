import { Section } from "./Section";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Do I need a smart TV to use Universal Stream?", a: "No. Our devices plug into any TV with HDMI and instantly turn it into a smart TV." },
  { q: "Which streaming apps are supported?", a: "All the major ones — Netflix, Disney+, Prime Video, Apple TV+, YouTube, plus 10,000+ free channels." },
  { q: "Is professional installation included?", a: "Standard shipping is free. White-glove install is available in 80+ cities as a flat-rate add-on." },
  { q: "Can I share my subscription with family?", a: "Yes. Every plan includes 6 individual profiles with personalized recommendations and parental controls." },
  { q: "What about my privacy?", a: "Your viewing data never leaves your account. We don't sell it. Period." },
  { q: "Is there a free trial?", a: "Every new member gets a 30-day free trial of Universal Stream+ — cancel anytime, no questions asked." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="Questions" title={<>Everything you need <span className="text-gradient">to know</span></>}>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left glass-strong rounded-2xl p-6 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <Plus className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </div>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
