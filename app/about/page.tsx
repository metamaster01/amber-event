import Navbar from "@/components/navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import type { Metadata } from "next";
import FooterSection from "@/components/footersection";
import PortfolioHero from "@/components/PortfolioHero";
import ClientSection from "@/components/clientsection";

export const metadata: Metadata = {
  title: "About Us | Amber Events",
  description:
    "At Amber Events, we believe that every celebration is more than an occasion — it's a reflection of love, joy, and togetherness.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Pink hero with title + tagline */}
        <AboutHero />

        {/* 2. Story, philosophy, values, full bleed image, promise */}
        <AboutStory />
        <PortfolioHero />
        <ClientSection />
        <FooterSection />
      </main>
    </>
  );
}