import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/context/service-data";
import Navbar from "@/components/navbar";
import ServiceHero from "@/components/services/serviceHero";
import ServiceIntro from "@/components/services/serviceIntro";
import ServiceCTA from "@/components/services/ServiceCTA";
import ContactSection from "@/components/contactsection";
import TestimonialsSection from "@/components/clientsection";
import Footer from "@/components/footersection";

// ── Static params for all 4 services ────────────────────────────────────────
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} ${service.scriptTitle} | Amber Events`,
    description: service.shortDesc,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Full bleed hero with image + title overlay */}
        <ServiceHero service={service} />

        {/* 2. Quote → image+text two-column → Approach → Features grid */}
        <ServiceIntro service={service} />

        {/* 3. Full bleed CTA banner with parallax */}
        <ServiceCTA service={service} />


        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}