import { Section } from "./Section";

const stats = [
  { k: "2M+", v: "Households" },
  { k: "10K+", v: "Channels & apps" },
  { k: "99.99%", v: "Stream uptime" },
  { k: "4.9★", v: "Avg. rating" },
];

export function Stats() {
  return (
    <Section className="!py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.v} className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient">{s.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
