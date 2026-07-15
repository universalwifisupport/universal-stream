import { Tv, Film, Trophy, Baby, Music, Radio, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import livetv from "@/assets/exp-livetv.jpg";
import movies from "@/assets/exp-movies.jpg";
import sports from "@/assets/sports.jpg";
import kids from "@/assets/exp-kids.jpg";
import music from "@/assets/exp-music.jpg";
import podcast from "@/assets/exp-podcast.jpg";

const items = [
  { icon: Tv, title: "Live TV", desc: "200+ live channels and free over-the-air streams.", img: livetv, span: "md:col-span-2 md:row-span-2 min-h-[420px]" },
  { icon: Film, title: "Movies", desc: "Blockbusters and indie gems on demand.", img: movies, span: "min-h-[200px]" },
  { icon: Trophy, title: "Sports", desc: "Live games, scores and replays.", img: sports, span: "min-h-[200px]" },
  { icon: Baby, title: "Kids", desc: "Safe, hand-curated entertainment.", img: kids, span: "min-h-[200px]" },
  { icon: Music, title: "Music", desc: "Lossless audio in every room.", img: music, span: "min-h-[200px]" },
  { icon: Radio, title: "Podcasts", desc: "10M+ shows synced across devices.", img: podcast, span: "md:col-span-2 min-h-[260px]" },
];

export function ExperienceBento() {
  return (
    <Section
      eyebrow="Streaming Experience"
      title={<>One ecosystem, <span className="text-gradient">every screen</span></>}
      subtitle="Movies, sports, music and more — beautifully unified across devices."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {items.map(({ icon: Icon, title, desc, img, span }) => (
          <article
            key={title}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 ${span}`}
          >
            <img
              src={img}
              alt={title}
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-neon-purple/30 via-transparent to-neon-pink/20 transition-opacity duration-500" />

            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="glass rounded-full p-2.5">
                  <Icon className="h-5 w-5 text-foreground" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-foreground/60 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">{desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
