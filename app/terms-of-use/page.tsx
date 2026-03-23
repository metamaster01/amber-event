import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footersection";

export const metadata: Metadata = {
  title: "Terms of Use | Amber Events",
  description:
    "Read the Terms of Use for Amber Events — your trusted event planning partner in Nagpur, Maharashtra.",
};

// ── Last updated date ──────────────────────────────────────────────────────────
const LAST_UPDATED = "1 March 2025";
const EFFECTIVE_DATE = "1 March 2025";

// ── Section data ──────────────────────────────────────────────────────────────
const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing, browsing, or using the Amber Events website (amberevents.in) or by submitting an enquiry, booking request, or any other communication through our digital or physical channels, you confirm that you have read, understood, and agree to be legally bound by these Terms of Use.",
      "If you do not agree to any part of these Terms, you must not use our website or services. These Terms constitute the entire agreement between you and Amber Events regarding your use of this website.",
      "Amber Events reserves the right to update or modify these Terms at any time without prior notice. Continued use of our website after changes are published constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "services",
    title: "2. Our Services",
    content: [
      "Amber Events is a professional event planning and management company based in Nagpur, Maharashtra, India. We offer a range of services including Wedding Events, Corporate Events, Jalwa Functions (Sangeet, Mehndi, Haldi ceremonies), and Catering Services.",
      "All service descriptions, package details, and pricing communicated through this website are for informational purposes only and do not constitute a binding contract. Actual service agreements, deliverables, timelines, and payment schedules are formalised through a separate written Service Agreement signed between Amber Events and the client.",
      "We reserve the right to decline any booking request at our sole discretion without being required to provide a reason.",
    ],
  },
  {
    id: "bookings",
    title: "3. Enquiries, Bookings & Payments",
    content: [
      "Submitting an enquiry form or contact request through our website does not constitute a confirmed booking. A booking is only confirmed upon execution of a formal Service Agreement and receipt of the applicable advance payment or booking deposit as specified therein.",
      "Payment terms, cancellation policies, refund conditions, and force majeure provisions are detailed in the individual Service Agreement provided to each client. Amber Events is not liable for any loss arising from a reliance on website information in lieu of a signed agreement.",
      "All payments must be made in Indian Rupees (INR) through the payment methods agreed upon in the Service Agreement. Amber Events does not accept responsibility for payments made through unauthorised channels.",
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: [
      "All content published on this website — including but not limited to text, photographs, videos, graphics, logos, event concepts, design layouts, and branding — is the exclusive property of Amber Events or is used with the permission of third parties, and is protected under applicable Indian and international intellectual property laws.",
      "You may not reproduce, redistribute, republish, sell, modify, or create derivative works from any content on this website without the prior written consent of Amber Events.",
      "Event photographs and videos produced during services rendered by Amber Events may be used by Amber Events for promotional purposes, including on our website, social media, and marketing materials, unless the client has expressly requested otherwise in writing prior to the event.",
    ],
  },
  {
    id: "user-conduct",
    title: "5. User Conduct",
    content: [
      "You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit their use and enjoyment of this website.",
      "Prohibited conduct includes, but is not limited to: submitting false or misleading information in enquiry forms; attempting to gain unauthorised access to any portion of the website or its underlying systems; using automated tools to scrape, crawl, or extract data from the website; and engaging in any conduct that could damage the reputation or interests of Amber Events.",
      "Amber Events reserves the right to report any unlawful activity to the appropriate authorities and to take legal action where necessary.",
    ],
  },
  {
    id: "third-party",
    title: "6. Third-Party Vendors & Partners",
    content: [
      "In the course of delivering our services, Amber Events may engage third-party vendors including photographers, videographers, florists, caterers, decorators, performers, and venues. While we carefully select our vendor network, Amber Events is not liable for any failure, negligence, or misconduct on the part of third-party vendors.",
      "Our website may contain links to third-party websites for informational purposes. Amber Events does not endorse, control, or accept responsibility for the content or practices of any third-party websites. Accessing those links is at your own risk.",
    ],
  },
  {
    id: "limitation",
    title: "7. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Amber Events, its directors, employees, and associates shall not be liable for any indirect, incidental, consequential, punitive, or special damages arising out of or related to your use of this website or our services, even if we have been advised of the possibility of such damages.",
      "Our total liability to you for any direct damages shall not exceed the amount paid by you to Amber Events under the relevant Service Agreement in the three months preceding the event giving rise to the claim.",
      "We do not guarantee that the website will be uninterrupted, error-free, or free from viruses or other harmful components. You access the website at your own risk.",
    ],
  },
  {
    id: "governing-law",
    title: "8. Governing Law & Dispute Resolution",
    content: [
      "These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra, India.",
      "We encourage clients and visitors to first contact us directly to resolve any concerns before initiating formal proceedings. Most concerns can be resolved quickly and amicably through open communication.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding these Terms of Use, please reach out to us. We are always happy to clarify and assist.",
    ],
    isContact: true,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24"
          style={{
            background:
              "linear-gradient(135deg, #FF2D78 0%, #FF5CA0 55%, #FF2D78 100%)",
          }}
        >
          {/* Decorative rings */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute bottom-0 left-12 w-48 h-48 rounded-full border border-white/10 translate-y-1/2 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-white/60 rounded-full" />
              <span
                className="text-white/70 text-xs font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Legal
              </span>
            </div>
            <h1
              className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-white leading-tight tracking-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Terms of{" "}
              <span
                className="italic font-normal"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "1.05em",
                }}
              >
                Use
              </span>
            </h1>
            <p
              className="text-white/75 text-base max-w-xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Please read these terms carefully before using our website or
              engaging our services. By continuing, you agree to be bound by
              the terms outlined below.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <div
                  className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Effective Date
                </div>
                <div
                  className="text-white/90 text-sm font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {EFFECTIVE_DATE}
                </div>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <div
                  className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Last Updated
                </div>
                <div
                  className="text-white/90 text-sm font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {LAST_UPDATED}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY ──────────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-24">

          {/* Quick nav */}
          <div className="bg-[#F9F5F0] rounded-2xl p-6 mb-14 border border-gray-100">
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase text-gray-400 mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contents
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors duration-150 group"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-300 group-hover:bg-pink-500 transition-colors shrink-0" />
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h2>

                <div className="flex flex-col gap-4">
                  {s.content.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-500 text-[15px] leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Contact block */}
                {s.isContact && (
                  <div className="mt-6 bg-pink-50 border border-pink-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-6">
                    {[
                      {
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ),
                        label: "Email",
                        value: "info@amberevents.in",
                        href: "mailto:info@amberevents.in",
                      },
                      {
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        label: "Address",
                        value: "Nagpur, Maharashtra, India",
                        href: null,
                      },
                    ].map(({ icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center shrink-0 mt-0.5">
                          {icon}
                        </div>
                        <div>
                          <div
                            className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {label}
                          </div>
                          {href ? (
                            <a
                              href={href}
                              className="text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {value}
                            </a>
                          ) : (
                            <span
                              className="text-gray-700 font-medium text-sm"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              © {new Date().getFullYear()} Amber Events. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-pink-500 hover:text-pink-600 transition-colors font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Privacy Policy
              </Link>
              <span className="text-gray-200">|</span>
              <Link
                href="/contact"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>



      <Footer />
    </>
  );
}