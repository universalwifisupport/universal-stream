import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import box from "@/assets/device-box.jpg";
import stick from "@/assets/device-stick.jpg";
import hub from "@/assets/device-hub.jpg";
import cinema from "@/assets/device-cinema.jpg";

const products = [
  { name: "StreamBox Ultra", tag: "Flagship", desc: "8K HDR, Wi-Fi 6E, AI upscaling.", img: box, glow: "glow-emerald" },
  { name: "StreamStick Pro", tag: "Portable", desc: "4K HDR in your pocket.", img: stick, glow: "glow-amber" },
  { name: "SmartBeam Hub", tag: "Smart Home", desc: "Voice-first whole-home control.", img: hub, glow: "glow-teal" },
  { name: "HomeCinema Max", tag: "Theater", desc: "Soundbar + streamer in one.", img: cinema, glow: "" },
];

export function FeaturedProducts() {
  return (
    <Section
      eyebrow="Featured Devices"
      title={<>Hardware built for <span className="text-gradient">binge nights</span></>}
      subtitle="Every device is designed to feel invisible — until the magic begins."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="group relative rounded-3xl glass-strong overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500"
          >
            <div className={`relative aspect-square overflow-hidden ${p.glow}`}>
              <img
                src={p.img}
                alt={p.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 glass rounded-full text-xs px-3 py-1">{p.tag}</span>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
              <a
                href="tel:+18332407057"
                className="mt-5 bg-cta text-primary-foreground px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 glow-emerald text-sm"
              >
                Call (833) 240-7057 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
