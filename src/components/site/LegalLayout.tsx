import type { ReactNode } from "react";
import { Section } from "@/components/site/Section";
import { ShieldCheck } from "lucide-react";
import legalHero from "@/assets/legal-hero.jpg";

export function LegalLayout({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { id: string; heading: string; body: ReactNode }[];
}) {
  return (
    <>
      <section className="relative overflow-hidden -mt-24 pt-32 pb-16 bg-hero">
        <div className="absolute inset-0">
          <img src={legalHero} alt="" aria-hidden="true" width={1536} height={768} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-neon-pink" /> Legal
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">{title}</h1>
            <p className="mt-4 text-muted-foreground">Last updated: {updated}</p>
          </div>
        </div>
      </section>
      <Section align="left" className="!pt-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10">
          <aside className="lg:sticky lg:top-28 self-start">
            <nav className="glass rounded-2xl p-4 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>
          <article className="glass-strong rounded-3xl p-8 md:p-12 space-y-10">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold">{s.heading}</h2>
                <div className="mt-4 text-muted-foreground space-y-3 leading-relaxed">{s.body}</div>
              </section>
            ))}
          </article>
        </div>
      </Section>
    </>
  );
}
