import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/FinalCTA";
import family from "@/assets/family.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Universal Stream" },
      { name: "description", content: "We're building the smartest entertainment ecosystem for the modern home. Meet the team behind Universal Stream." },
      { property: "og:title", content: "About Universal Stream" },
      { property: "og:description", content: "Our mission: stream smarter, live brighter." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "2019", t: "Founded", d: "Two engineers, one stubborn idea: streaming should just work." },
  { y: "2021", t: "First device", d: "StreamStick ships to 50,000 homes in 8 weeks." },
  { y: "2023", t: "1M households", d: "Crossed seven figures and launched Universal Stream+." },
  { y: "2026", t: "Today", d: "2M+ homes streaming smarter across 40 countries." },
];

const team = [
  { n: "Kiran Kapoor", r: "Owner & Founder" },
  { n: "Jordan Reyes", r: "CEO & Co-founder" },
  { n: "Sasha Petrov", r: "CTO & Co-founder" },
  { n: "Imani Clarke", r: "Head of Design" },
  { n: "Kenji Watanabe", r: "VP of Engineering" },
];

const stats = [
  { k: "2M+", v: "Households" },
  { k: "40", v: "Countries" },
  { k: "10K+", v: "Channels" },
  { k: "4.9★", v: "App rating" },
];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title={<>Building the smartest <span className="text-gradient">living room</span> on Earth</>}
        subtitle="We believe entertainment should feel effortless, beautiful and a little bit magical."
      />

      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden ring-gradient">
          <img src={family} alt="Family streaming" width={1280} height={896} loading="lazy" className="w-full h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      <Section align="left" eyebrow="Our mission" title={<>Less remote, <span className="text-gradient">more wonder</span></>}>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg text-muted-foreground">
            Streaming should not require a tech degree. We design devices, software and services
            that vanish into the background — so what's left is the story on the screen and the
            people watching it with you.
          </p>
          <p className="text-lg text-muted-foreground">
            Every product we ship is judged by a single test: does it make movie night easier,
            faster and more beautiful? If the answer is no, it doesn't ship.
          </p>
          <p className="text-lg text-muted-foreground md:col-span-2">
            Universal Stream is proudly owned by <span className="font-semibold text-foreground">Kiran Kapoor</span>,
            whose vision continues to guide our mission to make entertainment effortless for every home.
          </p>
        </div>
      </Section>

      <Section className="!py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.v} className="glass rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Timeline" title={<>The <span className="text-gradient">story so far</span></>}>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-pink to-neon-blue" />
          <div className="space-y-10">
            {milestones.map((m) => (
              <div key={m.y} className="relative pl-20">
                <div className="absolute left-0 top-0 h-12 w-12 rounded-2xl bg-brand grid place-items-center font-bold text-sm">
                  {m.y}
                </div>
                <h3 className="text-2xl font-bold">{m.t}</h3>
                <p className="mt-2 text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Team" title={<>The <span className="text-gradient">humans</span> behind it</>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((t) => (
            <div key={t.n} className="glass-strong rounded-2xl p-6 text-center">
              <div className="h-20 w-20 mx-auto rounded-full bg-brand grid place-items-center text-2xl font-bold">
                {t.n.split(" ").map((s) => s[0]).join("")}
              </div>
              <div className="mt-4 font-bold">{t.n}</div>
              <div className="text-sm text-muted-foreground">{t.r}</div>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
