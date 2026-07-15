import { ArrowRight, Play } from "lucide-react";
import sports from "@/assets/sports.jpg";

export function LiveSports() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={sports} alt="" width={1536} height={1024} loading="lazy" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 glass-strong rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-glow animate-pulse" />
            LIVE NOW · 12 events
          </span>
          <h2 className="mt-5 text-5xl md:text-7xl font-bold leading-[1.05]">
            Never miss <span className="text-gradient">the action</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Front-row seats to every game, race and match — in stunning clarity, with
            multi-view, real-time stats and instant replays.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+18332407057" className="bg-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 glow-emerald">
              <Play className="h-4 w-4" fill="currentColor" /> Call (833) 240-7057
            </a>
            <a href="tel:+18332407057" className="glass-strong px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { k: "200+", v: "Live channels" },
              { k: "8K", v: "Max quality" },
              { k: "<10ms", v: "Latency" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
