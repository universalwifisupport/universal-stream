import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Play } from "lucide-react";
import logo from "@/assets/logo-universal-stream.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Devices" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center group min-w-0" aria-label="Universal Stream">
            <img
              src={logo}
              alt="Universal Stream"
              width={1600}
              height={544}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain shrink-0 drop-shadow-[0_0_14px_rgba(229,9,20,0.35)]"
            />
          </Link>


          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-brand rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+18332407057"
              className="bg-cta text-primary-foreground px-4 lg:px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity glow-emerald flex items-center gap-2"
            >
              <Play className="h-4 w-4" fill="currentColor" /> Call (833) 240-7057
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-fade-up">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+18332407057"
              className="mt-2 bg-cta text-primary-foreground px-4 py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2 glow-emerald"
            >
              <Play className="h-4 w-4" fill="currentColor" /> Call (833) 240-7057
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
