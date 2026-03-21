import Navbar from "@/components/navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";
import FooterSection from "@/components/footersection";
import ClientSection from "@/components/clientsection";

export const metadata: Metadata = {
  title: "Contact Us | Amber Events",
  description:
    "Get in touch with Amber Events for weddings, corporate events, Jalwa functions, and catering services in Nagpur, Maharashtra.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Full bleed hero with image + title */}
        <ContactHero />

        {/* 2. Left info + Right form with Supabase */}
        <ContactForm />
        <ClientSection />
        <FooterSection />
      </main>
    </>
  );
}