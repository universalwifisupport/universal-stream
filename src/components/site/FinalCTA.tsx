import { Play, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-hero ring-gradient p-8 sm:p-12 md:p-20 text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-[60%] bg-brand opacity-25 blur-3xl" />
          <div className="absolute inset-0 dot-bg opacity-30" />
          <div className="relative max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-glow">Ready when you are</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Press play on your <span className="text-gradient">Universal Stream.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground">
              Free 30-day trial. Cancel anytime. Zero setup fees.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+18332407057"
                className="bg-cta text-primary-foreground px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 glow-emerald text-base sm:text-xl hover:scale-[1.02] transition"
              >
                <Play className="h-5 w-5" fill="currentColor" /> Call (833) 240-7057
              </a>
              <a
                href="tel:+18332407057"
                className="glass-strong px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
