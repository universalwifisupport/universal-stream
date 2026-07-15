import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { BRAND_EMAIL, BRAND_ADDRESS } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Universal Stream" },
      { name: "description", content: "Reach the Universal Stream team for sales, support and partnerships. We reply within a few hours." },
      { property: "og:title", content: "Contact Universal Stream" },
      { property: "og:description", content: "We're here to help you stream smarter." },
    ],
  }),
  component: ContactPage,
});

const cards = [
  { icon: Mail, t: "Email us", d: BRAND_EMAIL, href: `mailto:${BRAND_EMAIL}` },
  { icon: MessageSquare, t: "Live chat", d: "In-app chat, 24/7" },
  { icon: MapPin, t: "HQ", d: BRAND_ADDRESS },
  { icon: Clock, t: "Hours", d: "24/7 priority support" },
];

function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title={<>Let's get you <span className="text-gradient">streaming</span></>}
        subtitle="Questions, demos, partnerships — our team usually replies in under an hour."
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10 space-y-5 ring-gradient"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" placeholder="Alex Doe" />
            <Field label="Email" placeholder="alex@home.tv" type="email" />
          </div>
          <Field label="Subject" placeholder="I want to upgrade my home theater" />
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={6}
              placeholder="Tell us about your space and what you're hoping to stream…"
              className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition"
            />
          </div>
          <button className="w-full sm:w-auto bg-cta text-primary-foreground px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 glow-emerald">
            Send message <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          {cards.map((c) => {
            const Inner = (
              <>
                <div className="h-12 w-12 rounded-xl bg-brand grid place-items-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{c.t}</div>
                  <div className="font-semibold mt-0.5">{c.d}</div>
                </div>
              </>
            );
            return c.href ? (
              <a key={c.t} href={c.href} className="glass-strong rounded-2xl p-6 flex gap-4 items-start hover:bg-white/[0.06] transition">
                {Inner}
              </a>
            ) : (
              <div key={c.t} className="glass-strong rounded-2xl p-6 flex gap-4 items-start">
                {Inner}
              </div>
            );
          })}
          <div className="rounded-2xl overflow-hidden h-64 glass-strong relative">
            <div className="absolute inset-0 dot-bg opacity-40" />
            <div className="absolute inset-0 bg-hero opacity-60" />
            <div className="absolute inset-0 grid place-items-center text-center px-6">
              <div>
                <MapPin className="h-8 w-8 mx-auto text-emerald-glow" />
                <div className="mt-2 font-semibold">San Francisco, CA</div>
                <div className="text-sm text-muted-foreground">Visits by appointment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section />
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition"
      />
    </div>
  );
}
