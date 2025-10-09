import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import About from "@/components/aboutsection";
import Services from "@/components/servicesection";
import PortfolioPage from "@/components/portfoliosection";  
import ClientSection from "@/components/clientsection";
import ContactSection from "@/components/contactsection";
import FooterSection from "@/components/footersection";
import HeroStatsCard from "@/components/hero-stats-card";
import GallerySection from "@/components/gallery_section";
import PortfolioHero from "@/components/PortfolioHero";
export default function Home() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <Navbar />
      <HeroSection />
      <HeroStatsCard/>
      <About />
      <GallerySection />
      <Services/>
      <PortfolioHero />
      <PortfolioPage />
      <ClientSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}
