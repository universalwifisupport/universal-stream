import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import setup from "@/assets/srv-setup.jpg";
import smart from "@/assets/srv-smart.jpg";
import install from "@/assets/srv-install.jpg";
import support from "@/assets/srv-support.jpg";
import optimize from "@/assets/srv-optimize.jpg";
import bundle from "@/assets/srv-bundle.jpg";

const services = [
  { img: setup, title: "Streaming Setup", desc: "We get you watching in minutes." },
  { img: smart, title: "Smart TV Integration", desc: "One ecosystem, all your devices." },
  { img: install, title: "Device Installation", desc: "Pro install, anywhere in the home." },
  { img: bundle, title: "Subscription Manager", desc: "All your apps, one bill." },
  { img: support, title: "Premium Support", desc: "24/7 priority help from real humans." },
  { img: optimize, title: "Network Optimization", desc: "Tune your network for perfect streams." },
];

export function ServicesOverview() {
  return (
    <Section
      eyebrow="Services"
      title={<>White-glove streaming, <span className="text-gradient">end to end</span></>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl overflow-hidden glass-strong hover:bg-white/[0.06] transition flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center justify-center gap-2 bg-cta text-primary-foreground px-4 py-3 rounded-xl font-semibold glow-emerald text-sm">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
