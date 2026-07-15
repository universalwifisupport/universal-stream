import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { MoviesMarquee } from "@/components/site/MoviesMarquee";
import { ExperienceBento } from "@/components/site/ExperienceBento";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { WhyUs } from "@/components/site/WhyUs";
import { LiveSports } from "@/components/site/LiveSports";
import { ServicesOverview } from "@/components/site/ServicesOverview";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Universal Stream — Your universe of movies, live TV & originals" },
      { name: "description", content: "50,000+ movies, live channels, sports and originals — beautifully unified on every screen. Start your 30-day free trial." },
      { property: "og:title", content: "Universal Stream — Your universe of streaming" },
      { property: "og:description", content: "One cinematic ecosystem. Every movie, live channel and playlist you love." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <MoviesMarquee />
      <ExperienceBento />
      <FeaturedProducts />
      <WhyUs />
      <LiveSports />
      <ServicesOverview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
