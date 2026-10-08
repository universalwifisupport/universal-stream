import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Phone, Gift, Check, Sparkles } from "lucide-react";
import { BRAND_PHONE_DISPLAY, BRAND_PHONE_HREF } from "@/lib/contact";

const SEEN_KEY = "streaming-help-offer-seen";

export function OfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // storage unavailable, still show once per mount
    }
    timer = setTimeout(() => setOpen(true), 1200);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Limited time streaming offer"
    >
      <button
        aria-label="Dismiss offer"
        onClick={close}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl glass-strong ring-gradient bg-hero p-7 sm:p-8 shadow-elevated animate-fade-up">
        <div className="absolute -top-16 left-1/2 h-48 w-[80%] -translate-x-1/2 bg-brand opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-xl glass hover:bg-white/10 transition"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative">
          <span className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-emerald-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Limited time offer
          </span>

          <div className="mt-4 flex items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cta glow-emerald">
              <Gift className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Fall Streaming Event. New customers only.
            </p>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            Save 40% on bundles <span className="text-gradient">plus FREE pro setup</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Get 50,000+ movies, 200+ live channels and sports in 4K. Includes a 30 day free
            trial and free professional installation in 80+ cities.
          </p>

          <ul className="mt-5 space-y-2 text-sm">
            {[
              "40% off curated entertainment bundles",
              "Free device setup and Wi-Fi tuning",
              "Cancel anytime. No setup fees",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-emerald-glow" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <a
            href={BRAND_PHONE_HREF}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-4 font-bold text-primary-foreground glow-emerald hover:scale-[1.01] transition"
          >
            <Phone className="h-5 w-5" />
            Call {BRAND_PHONE_DISPLAY}
          </a>
          <Link
            to="/products"
            onClick={close}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl glass-strong px-6 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Shop the devices
          </Link>

          <button
            onClick={close}
            className="mt-4 w-full text-center text-xs text-muted-foreground hover:text-foreground transition"
          >
            No thanks, I will pay full price later
          </button>
          <p className="mt-2 text-center text-[11px] text-muted-foreground/70">
            Mention this popup when you call to claim the discount.
          </p>
        </div>
      </div>
    </div>
  );
}
