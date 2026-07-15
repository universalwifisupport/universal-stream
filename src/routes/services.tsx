import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Settings, Home, Wrench, CreditCard, Users2, Gauge, Check, ArrowRight } from "lucide-react";
import setupImg from "@/assets/srv-setup.jpg";
import smartImg from "@/assets/srv-smart.jpg";
import installImg from "@/assets/srv-install.jpg";
import supportImg from "@/assets/srv-support.jpg";
import optimizeImg from "@/assets/srv-optimize.jpg";
import bundleImg from "@/assets/srv-bundle.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Universal Stream" },
      { name: "description", content: "Streaming setup, smart home integration, premium support and optimization services for modern homes." },
      { property: "og:title", content: "Universal Stream Services" },
      { property: "og:description", content: "White-glove streaming, end to end." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Settings, img: setupImg, title: "Streaming Consultation", desc: "A 30-minute session with a streaming strategist to map out the perfect setup for your home, household and budget.", points: ["Personalized device match", "App stack recommendation", "Cost-saving subscription audit"] },
  { icon: Home, img: smartImg, title: "Smart Home Integration", desc: "Unify your TVs, speakers, lights and assistants into a single, scene-based entertainment system.", points: ["Works with Alexa, Google, Apple", "Multi-room sync", "One-tap movie scenes"] },
  { icon: Wrench, img: installImg, title: "Device Setup & Installation", desc: "Certified pros mount, wire, and configure every device — leaving your space spotless.", points: ["Cable management", "Calibration included", "Same-day in 80+ cities"] },
  { icon: CreditCard, img: supportImg, title: "Premium Streaming Support", desc: "24/7 priority support, proactive monitoring and remote diagnostics for your entire ecosystem.", points: ["Dedicated specialist", "Sub-2 minute response", "Hardware-on-loan during repairs"] },
  { icon: Gauge, img: optimizeImg, title: "Performance Optimization", desc: "Network audit, mesh tuning and codec calibration for buffer-free 4K and 8K streams.", points: ["Wi-Fi heatmap", "QoS tuning", "Streaming benchmark report"] },
  { icon: Users2, img: bundleImg, title: "Entertainment Bundles", desc: "Curated subscription bundles that save up to 40% versus buying apps individually.", points: ["Mix-and-match plans", "Single bill", "Cancel anytime"] },
];

const steps = [
  { n: "01", t: "Discover", d: "Tell us about your space, devices and people." },
  { n: "02", t: "Design", d: "We design a tailored streaming blueprint." },
  { n: "03", t: "Deploy", d: "Pros install and configure everything." },
  { n: "04", t: "Delight", d: "Lifetime priority support keeps it humming." },
];

function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title={<>Concierge for your <span className="text-gradient">entertainment</span></>}
        subtitle="From first plug to perfect picture — we handle every detail so you just press play."
      />

      <div className="container mx-auto px-6 -mt-12">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid md:grid-cols-2 gap-8 glass-strong rounded-3xl p-8 md:p-12 items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-brand grid place-items-center glow-emerald">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-3xl md:text-4xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-lg">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-emerald-glow" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+18332407057" className="mt-8 inline-flex items-center gap-2 bg-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold glow-emerald">
                  Call (833) 240-7057 <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative aspect-video rounded-2xl ring-gradient overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={576} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                <div className="absolute -bottom-10 -right-10 h-48 w-48 bg-brand opacity-30 blur-3xl rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section eyebrow="Process" title={<>How it <span className="text-gradient">works</span></>}>
        <div className="grid md:grid-cols-4 gap-5 relative">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-4 text-xl font-bold">{s.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
