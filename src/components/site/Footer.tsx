import { Link } from "@tanstack/react-router";
import { Twitter, Instagram, Youtube, Facebook, Mail, ArrowRight, Phone } from "lucide-react";
import logo from "@/assets/logo-universal-stream.svg";
import { BRAND_EMAIL, BRAND_PHONE_DISPLAY, BRAND_PHONE_HREF } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative">
        {/* Newsletter CTA */}
        <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12 mb-16 ring-gradient">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Fresh drops in your <span className="text-gradient">inbox</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Weekly picks, new arrivals and members-only previews. No spam, unsubscribe anytime.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-2 glass rounded-xl px-4 py-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@home.tv"
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
              <button className="bg-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 glow-emerald">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center" aria-label="Universal Stream">
              <img src={logo} alt="Universal Stream" width={1600} height={544} loading="lazy" className="h-14 sm:h-16 w-auto object-contain" />
            </Link>

            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Your entire streaming universe — movies, live TV, sports, music and originals —
              beautifully unified on every screen you own.
            </p>
            <a href={BRAND_PHONE_HREF} className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition">
              <Phone className="h-4 w-4" /> {BRAND_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${BRAND_EMAIL}`} className="mt-2 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition">
              <Mail className="h-4 w-4" /> {BRAND_EMAIL}
            </a>
            <div className="flex gap-3 mt-6">
              {[Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { to: "/products", label: "Devices" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Watch"
            links={[
              { to: "/products", label: "Movies" },
              { to: "/products", label: "Live TV" },
              { to: "/products", label: "Sports" },
              { to: "/products", label: "Originals" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { to: "/legal/privacy", label: "Privacy Policy" },
              { to: "/legal/terms", label: "Terms & Conditions" },
              { to: "/legal/disclaimer", label: "Disclaimer" },
              { to: "/legal/cookies", label: "Cookie Policy" },
            ]}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Universal Stream Inc. Owned by Kiran Kapoor. All rights reserved.</p>
          <p>Made for people who love the story on the screen.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l, i) => (
          <li key={`${l.to}-${i}`}>
            <Link
              to={l.to}
              className="text-sm text-foreground/80 hover:text-foreground transition story-link"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
