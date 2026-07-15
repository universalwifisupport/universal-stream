import m1 from "@/assets/movie-1.jpg";
import m2 from "@/assets/movie-2.jpg";
import m3 from "@/assets/movie-3.jpg";
import m4 from "@/assets/movie-4.jpg";
import m5 from "@/assets/movie-5.jpg";
import m6 from "@/assets/movie-6.jpg";
import m7 from "@/assets/movie-7.jpg";
import m8 from "@/assets/movie-8.jpg";

type Movie = { img: string; title: string; genre: string; rating: string };

const rowA: Movie[] = [
  { img: m1, title: "Emerald Horizon", genre: "Sci-Fi", rating: "TV-14" },
  { img: m2, title: "Neon Alibi", genre: "Thriller", rating: "TV-MA" },
  { img: m3, title: "Lantern Keep", genre: "Fantasy", rating: "PG-13" },
  { img: m4, title: "Redline", genre: "Action", rating: "PG-13" },
  { img: m5, title: "After the Sun", genre: "Romance", rating: "PG-13" },
  { img: m6, title: "Jungle Riot", genre: "Family", rating: "PG" },
  { img: m7, title: "Hollowlight", genre: "Horror", rating: "TV-MA" },
  { img: m8, title: "Champion Rise", genre: "Sports", rating: "PG-13" },
];

const rowB: Movie[] = [
  { img: m5, title: "Golden Hours", genre: "Drama", rating: "PG-13" },
  { img: m8, title: "The Final Lap", genre: "Sports", rating: "PG" },
  { img: m2, title: "Nightfall Bay", genre: "Noir", rating: "TV-MA" },
  { img: m6, title: "Tinyverse", genre: "Animation", rating: "G" },
  { img: m1, title: "Orbit Zero", genre: "Sci-Fi", rating: "TV-14" },
  { img: m7, title: "Fog Signal", genre: "Mystery", rating: "TV-14" },
  { img: m3, title: "Emberwoods", genre: "Fantasy", rating: "PG-13" },
  { img: m4, title: "Silver Range", genre: "Action", rating: "PG-13" },
];

function Card({ m }: { m: Movie }) {
  return (
    <div className="group relative shrink-0 w-40 sm:w-48 md:w-56 aspect-[2/3] rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-emerald-glow/60 transition">
      <img
        src={m.img}
        alt={m.title}
        loading="lazy"
        width={512}
        height={768}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/50 backdrop-blur text-white/90">
        {m.rating}
      </span>
      <div className="absolute inset-x-3 bottom-3">
        <div className="text-xs text-emerald-glow font-semibold tracking-wider uppercase">{m.genre}</div>
        <div className="font-bold text-sm md:text-base leading-tight truncate">{m.title}</div>
      </div>
    </div>
  );
}

export function MoviesMarquee() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-glow">Trending on Universal Stream</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold">
            50,000+ titles. <span className="text-gradient">Zero limits.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            New blockbusters, cult classics, live sports and hand-picked originals — refreshed every week.
          </p>
        </div>
      </div>

      {/* Row 1 */}
      <div className="mt-12 mask-fade-x">
        <div className="flex gap-4 md:gap-5 w-max animate-marquee-slow will-change-transform">
          {[...rowA, ...rowA].map((m, i) => <Card key={`a-${i}`} m={m} />)}
        </div>
      </div>

      {/* Row 2 - reverse */}
      <div className="mt-5 mask-fade-x">
        <div className="flex gap-4 md:gap-5 w-max animate-marquee-reverse will-change-transform">
          {[...rowB, ...rowB].map((m, i) => <Card key={`b-${i}`} m={m} />)}
        </div>
      </div>
    </section>
  );
}
