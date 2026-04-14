import { notFound } from "next/navigation";
import { use } from "react";
import { portfolioStories, getStoryBySlug } from "@/context/portfolio-data";
import Navbar from "@/components/navbar";
import PortfolioDetail from "@/components/PortfolioDetail";
import PortfolioHero from "@/components/PortfolioHero";
import Footer from "@/components/footersection";
import ContactSection from "@/components/contactsection";
import TestimonialsSection from "@/components/clientsection";

export function generateStaticParams() {
  return portfolioStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  if (!story) return {};
  return {
    title: `${story.couple} | Amber Events Portfolio`,
    description: story.shortDesc,
  };
}

export default function PortfolioStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  return (
    <>
      <Navbar />
      <main>
        <PortfolioDetail story={story} />

      </main>
      <PortfolioHero />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}