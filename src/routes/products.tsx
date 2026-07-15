import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Check, X, ArrowRight } from "lucide-react";
import box from "@/assets/device-box.jpg";
import stick from "@/assets/device-stick.jpg";
import hub from "@/assets/device-hub.jpg";
import cinema from "@/assets/device-cinema.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Devices — Universal Stream Streaming Products" },
      { name: "description", content: "Premium streaming boxes, sticks and hubs. 4K, 8K, voice remote and Wi-Fi 6E. Free shipping." },
      { property: "og:title", content: "Universal Stream Devices" },
      { property: "og:description", content: "Hardware that disappears. Magic that stays." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { name: "StreamBox Ultra", img: box, tag: "Flagship", glow: "glow-emerald",
    desc: "Our most powerful streamer. 8K HDR, AI upscaling and the snappiest interface ever shipped.",
    specs: { Resolution: "8K @ 60fps", HDR: "Dolby Vision, HDR10+", "Wi-Fi": "Wi-Fi 6E tri-band", Storage: "32 GB", Audio: "Dolby Atmos" },
    has: { "4K HDR": true, "8K": true, Voice: true, Atmos: true, Ethernet: true } },
  { name: "StreamStick Pro", img: stick, tag: "Portable", glow: "glow-amber",
    desc: "Pocketable 4K HDR streamer. Travel-ready and TV-ready in seconds.",
    specs: { Resolution: "4K @ 60fps", HDR: "HDR10+", "Wi-Fi": "Wi-Fi 6 dual-band", Storage: "8 GB", Audio: "Dolby Digital+" },
    has: { "4K HDR": true, "8K": false, Voice: true, Atmos: false, Ethernet: false } },
  { name: "SmartBeam Hub", img: hub, tag: "Smart Home", glow: "glow-teal",
    desc: "A voice-first hub that ties your whole home together — TV, lights, speakers, scenes.",
    specs: { Resolution: "4K @ 60fps", HDR: "Dolby Vision", "Wi-Fi": "Wi-Fi 6E", Storage: "16 GB", Audio: "Dolby Atmos" },
    has: { "4K HDR": true, "8K": false, Voice: true, Atmos: true, Ethernet: true } },
  { name: "HomeCinema Max", img: cinema, tag: "Theater", glow: "",
    desc: "A streamer and audiophile soundbar in one beautiful enclosure.",
    specs: { Resolution: "4K @ 120fps", HDR: "Dolby Vision IQ", "Wi-Fi": "Wi-Fi 6E", Audio: "5.1.2 Dolby Atmos", Speakers: "9-driver array" },
    has: { "4K HDR": true, "8K": false, Voice: true, Atmos: true, Ethernet: true } },
];

const compareKeys = ["4K HDR", "8K", "Voice", "Atmos", "Ethernet"] as const;

function ProductsPage() {
  return (
    <>
      <Section
        eyebrow="Devices"
        title={<>Hardware that <span className="text-gradient">disappears</span></>}
        subtitle="Quietly powerful. Beautifully designed. Built to last."
      />

      <div className="container mx-auto px-6 space-y-24">
        {products.map((p, i) => (
          <div key={p.name} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className={`relative aspect-square rounded-3xl overflow-hidden glass-strong ${p.glow}`}>
              <img src={p.img} alt={p.name} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient">{p.tag}</span>
              <h2 className="mt-3 text-4xl md:text-6xl font-bold">{p.name}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{p.desc}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {Object.entries(p.specs).map(([k, v]) => (
                  <div key={k} className="glass rounded-xl p-4">
                    <div className="text-xs text-muted-foreground">{k}</div>
                    <div className="font-semibold">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="tel:+18332407057" className="bg-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold glow-emerald flex items-center gap-2">
                  Call (833) 240-7057 <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+18332407057" className="glass-strong px-6 py-3 rounded-xl font-semibold">Talk to an expert</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Section eyebrow="Compare" title={<>Find your <span className="text-gradient">perfect fit</span></>}>
        <div className="overflow-x-auto">
          <table className="w-full glass-strong rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-5 text-sm font-medium text-muted-foreground">Feature</th>
                {products.map((p) => (
                  <th key={p.name} className="p-5 text-sm font-semibold">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareKeys.map((k) => (
                <tr key={k} className="border-b border-white/5 last:border-0">
                  <td className="p-5 font-medium">{k}</td>
                  {products.map((p) => (
                    <td key={p.name} className="p-5 text-center">
                      {p.has[k] ? <Check className="h-5 w-5 text-emerald-glow mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
