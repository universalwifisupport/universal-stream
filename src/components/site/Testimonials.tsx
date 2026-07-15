import { Section } from "./Section";
import { Star } from "lucide-react";

const reviews = [
  { name: "Maya R.", role: "Designer · Brooklyn", text: "Setup took ten minutes. The picture on my OLED is unreal — like a cinema in my apartment.", rating: 5 },
  { name: "Daniel K.", role: "Family of 5 · Austin", text: "Family profiles solved our chaos. The kids' row stays kids, my action movies stay mine.", rating: 5 },
  { name: "Priya S.", role: "Sports nut · London", text: "Multi-view during the playoffs was a game changer. I'll never go back.", rating: 5 },
  { name: "Ahmed T.", role: "Audiophile · Toronto", text: "Lossless audio over Wi-Fi 6E sounds better than my old wired setup. Magic.", rating: 5 },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Loved by 2M+ households"
      title={<>People can't stop <span className="text-gradient">streaming</span></>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div key={r.name} className="glass-strong rounded-3xl p-8 ring-gradient relative">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-neon-orange" fill="currentColor" />
              ))}
            </div>
            <p className="text-lg leading-relaxed">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-brand grid place-items-center font-bold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
