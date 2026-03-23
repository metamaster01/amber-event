import { notFound } from "next/navigation";
import { portfolioStories, getStoryBySlug } from "@/context/portfolio-data";
import Navbar from "@/components/navbar";
import PortfolioDetail from "@/components/PortfolioDetail";
import PortfolioHero from "@/components/PortfolioHero";
import Footer from "@/components/footersection";
import ContactSection from "@/components/contactsection";

export function generateStaticParams() {
  return portfolioStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const story = await getStoryBySlug(params.slug);
  if (!story) return {};
  return {
    title: `${story.couple} | Amber Events Portfolio`,
    description: story.shortDesc,
  };
}

export default function PortfolioStoryPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug);
  if (!story) notFound();

  return (
    <>
      <Navbar />
      <main>
        <PortfolioDetail story={story} />

      </main>
      <PortfolioHero />
      <ContactSection />
      <Footer />
    </>
  );
}