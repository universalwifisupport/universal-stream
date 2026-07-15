import { Monitor, Mic, Wifi, Users, RefreshCw, Sparkles } from "lucide-react";
import { Section } from "./Section";

const features = [
  { icon: Monitor, title: "4K Ultra HD", desc: "Cinema-grade visuals with HDR10+ and Dolby Vision support." },
  { icon: Mic, title: "Voice Remote", desc: "Search, launch and control with natural language." },
  { icon: Wifi, title: "Wi-Fi 6E", desc: "Tri-band streaming with no buffering, ever." },
  { icon: Users, title: "Family Profiles", desc: "Personalized rows for everyone in the house." },
  { icon: RefreshCw, title: "Multi-Device Sync", desc: "Pause on TV, resume on your phone." },
  { icon: Sparkles, title: "Smart Recs", desc: "AI that actually understands your taste." },
];

export function WhyUs() {
  return (
    <Section
      eyebrow="Why Universal Stream"
      title={<>Engineered for the <span className="text-gradient">love of TV</span></>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl glass p-7 hover:bg-white/[0.06] transition"
          >
            <div className="h-12 w-12 rounded-xl bg-brand grid place-items-center mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
