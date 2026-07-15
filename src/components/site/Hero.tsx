import { Play, Sparkles, ArrowRight, Star, Info } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-netflix.jpg";
import m1 from "@/assets/movie-1.jpg";
import m2 from "@/assets/movie-2.jpg";
import m3 from "@/assets/movie-3.jpg";
import m4 from "@/assets/movie-4.jpg";
import m5 from "@/assets/movie-5.jpg";
import m6 from "@/assets/movie-6.jpg";

const rotating = ["movies.", "live sports.", "originals.", "kids' shows.", "concerts.", "documentaries."];

function useTyper(words: string[], typeMs = 90, holdMs = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "hold" | "delete">("type");
  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      else t = setTimeout(() => setPhase("delete"), holdMs);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), typeMs / 2);
      else { setPhase("type"); setI((n) => n + 1); return; }
    }
    return () => clearTimeout(t);
  }, [text, phase, i, words, typeMs, holdMs]);
  return text;
}

const colA = [m1, m3, m5];
const colB = [m2, m4, m6];
const colC = [m5, m1, m4];

function PosterCol({ imgs, className = "", reverse = false }: { imgs: string[]; className?: string; reverse?: boolean }) {
  const doubled = [...imgs, ...imgs, ...imgs];
  return (
    <div className={`relative h-full overflow-hidden rounded-2xl ${className}`}>
      <div
        className={`flex flex-col gap-3 ${reverse ? "animate-marquee-y-reverse" : "animate-marquee-y"} will-change-transform`}
      >
        {doubled.map((src, i) => (
          <div key={i} className="relative aspect-[2/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shrink-0">
            <img src={src} alt="" width={400} height={600} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const typed = useTyper(rotating);

  return (
    <section className="relative overflow-hidden -mt-24 pt-32 pb-20 md:pb-28 bg-hero min-h-[92vh] flex items-center">
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </div>
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[oklch(0.58_0.24_25/0.25)] blur-3xl animate-glow" />
      <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-[oklch(0.42_0.22_22/0.3)] blur-3xl animate-glow [animation-delay:1.5s]" />
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — cinematic headline */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              #1 rated streaming ecosystem 2026
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-bold leading-[0.98] tracking-tight">
              Unlimited
              <br />
              <span className="text-gradient">{typed}</span>
              <span className="inline-block w-[4px] h-[0.9em] align-[-0.1em] ml-1 bg-primary animate-caret" />
              <br />
              <span className="text-foreground/80 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold">
                One cinematic home.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground">
              50,000+ blockbusters, live channels, sports and originals — streamed in 4K Dolby Vision on
              every screen you own. Cancel anytime.
            </p>

            {/* Rating strip */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[m1, m2, m3, m4].map((s, i) => (
                  <img key={i} src={s} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-background" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-glow">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5" fill="currentColor" />)}
                </div>
                <div className="text-xs text-muted-foreground">Loved by 12,400+ viewers worldwide</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:+18332407057"
                className="bg-cta text-primary-foreground px-7 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 glow-emerald hover:scale-[1.02] transition text-base"
              >
                <Play className="h-5 w-5" fill="currentColor" /> Call (833) 240-7057
              </a>
              <Link
                to="/services"
                className="glass-strong px-7 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition"
              >
                <Info className="h-4 w-4" /> Explore the ecosystem <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { k: "4K", v: "Dolby Vision" },
                { k: "200+", v: "Live channels" },
                { k: "30d", v: "Free trial" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-xl p-3">
                  <div className="text-lg sm:text-xl font-bold text-gradient">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — animated poster wall */}
          <div className="relative animate-fade-up [animation-delay:180ms]">
            <div className="absolute -inset-6 bg-mesh opacity-30 blur-3xl rounded-[3rem]" />
            <div className="relative grid grid-cols-3 gap-3 h-[520px] md:h-[600px] lg:h-[640px]">
              <PosterCol imgs={colA} />
              <PosterCol imgs={colB} reverse className="mt-8" />
              <PosterCol imgs={colC} />
              {/* fade top/bottom */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Floating now-playing card */}
            <div className="absolute -left-4 md:-left-10 bottom-6 glass-strong rounded-2xl p-3 md:p-4 w-[260px] md:w-[300px] shadow-elevated flex items-center gap-3 animate-float">
              <div className="h-11 w-11 rounded-xl bg-cta grid place-items-center glow-emerald shrink-0">
                <Play className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Now streaming</div>
                <div className="font-semibold text-sm truncate">Crimson Horizon · 4K HDR</div>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-brand" />
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <div className="hidden md:flex absolute -right-4 top-6 glass-strong rounded-2xl px-4 py-3 shadow-elevated items-center gap-2 animate-float [animation-delay:1.5s]">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold">AI-picked for you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
