import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footersection";

export const metadata: Metadata = {
  title: "Privacy Policy | Amber Events",
  description:
    "Learn how Amber Events collects, uses, and protects your personal information. Your privacy matters to us.",
};

const LAST_UPDATED = "1 March 2025";
const EFFECTIVE_DATE = "1 March 2025";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "Amber Events ('we', 'us', or 'our') is committed to protecting the privacy and personal information of every individual who visits our website, submits an enquiry, or engages our event planning and management services.",
      "This Privacy Policy explains what personal data we collect, why we collect it, how we use it, who we share it with, and what rights you have over it. It applies to all interactions with our website (amberevents.in) and any communications between you and Amber Events.",
      "By using our website or submitting your information through any of our contact channels, you consent to the practices described in this Privacy Policy. If you do not agree, please refrain from using our website or providing us with your personal information.",
    ],
  },
  {
    id: "what-we-collect",
    title: "2. Information We Collect",
    content: [
      "We collect information that you voluntarily provide to us, including when you fill out our contact or enquiry form. This includes your full name, email address, phone number, the type of service you are interested in, your approximate budget, and any special message or requirements you choose to share with us.",
      "When you visit our website, we may also collect certain technical information automatically through cookies and analytics tools, including your IP address, browser type, operating system, pages visited, time spent on pages, and referring URLs. This information helps us understand how people use our website so we can improve it.",
      "We do not collect sensitive personal information such as financial account numbers, government identification documents, or health-related information unless explicitly required for a contracted service and with your direct consent.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: [
      "We use the information you provide primarily to respond to your enquiries, understand your event requirements, and communicate with you about our services, availability, proposals, and bookings.",
      "With your consent, we may use your contact information to send you relevant updates, service announcements, or promotional materials about Amber Events. You may opt out of marketing communications at any time by contacting us directly or by using the unsubscribe option in any email we send.",
      "Technical data collected through cookies and analytics is used solely to improve the performance, usability, and content of our website. We do not use this data to make automated decisions that affect you.",
      "We may use event photographs or videos captured during our services for portfolio and promotional purposes on our website and social media — but only in accordance with the consent provisions outlined in your Service Agreement. If you prefer that your event content not be used, please notify us in writing before the event.",
    ],
  },
  {
    id: "data-storage",
    title: "4. Data Storage & Security",
    content: [
      "Contact form submissions are securely stored in our database system (powered by Supabase) which operates under industry-standard security protocols including encryption at rest and in transit, access controls, and regular security audits.",
      "We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, comply with legal obligations, or resolve disputes. For active clients, records are generally retained for a minimum of 3 years following the conclusion of services. Enquiry data from individuals who did not proceed with a booking is typically deleted within 12 months.",
      "While we take all reasonable measures to protect your personal data, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we are committed to promptly addressing any breach and notifying affected individuals where required by law.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing Your Information",
    content: [
      "Amber Events does not sell, rent, or trade your personal information to any third party for marketing purposes — ever.",
      "We may share your information with trusted third-party service providers who assist us in operating our business, such as our database provider, email service, or website hosting platform. These providers are contractually obligated to handle your data securely and only for the purposes we specify.",
      "In the course of delivering our event services, we may share relevant details (such as your name, contact information, and event requirements) with third-party vendors engaged for your specific event — for example, caterers, photographers, decorators, or venue managers. We share only what is necessary for them to fulfil their role and only with your implicit consent as part of the booked service.",
      "We may disclose your information if required to do so by law, court order, or government authority, or if we believe in good faith that such disclosure is necessary to protect the rights, safety, or property of Amber Events or others.",
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies & Analytics",
    content: [
      "Our website uses cookies — small text files stored on your device — to improve your browsing experience, remember preferences, and gather analytical data about how our website is used.",
      "We use analytics tools (such as Google Analytics or similar) to collect aggregated, anonymised data about website traffic and user behaviour. This helps us understand which pages are most visited, how long users stay, and where they come from, so we can improve our content and services.",
      "You can control cookie preferences through your browser settings. Most browsers allow you to refuse cookies or delete them. Please note that disabling cookies may affect the functionality of certain parts of our website.",
      "We do not use cookies for advertising, remarketing, or behavioural profiling.",
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      "You have the right to access the personal information we hold about you and to request a copy of it. You may also request that we correct inaccurate or incomplete information.",
      "You have the right to request the deletion of your personal data, subject to any legal obligations we may have to retain certain records. We will process such requests within a reasonable timeframe.",
      "You have the right to withdraw consent to marketing communications at any time without affecting the lawfulness of any prior processing. You may also object to certain uses of your data.",
      "To exercise any of these rights, please contact us at info@amberevents.in. We will respond within 30 days of receiving your request.",
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      "Our website and services are not directed at children under the age of 18. We do not knowingly collect personal information from minors. If you believe that a child has provided us with personal information without appropriate consent, please contact us immediately and we will take steps to delete such information.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. When we make material changes, we will update the 'Last Updated' date at the top of this page.",
      "We encourage you to review this page periodically to stay informed about how we protect your information. Continued use of our website after a revised Policy is posted constitutes your acceptance of those changes.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal data, please do not hesitate to get in touch. We take every privacy concern seriously and are committed to resolving matters promptly and transparently.",
    ],
    isContact: true,
  },
];

export default function PrivacyPage() {
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
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute bottom-0 right-20 w-52 h-52 rounded-full border border-white/10 translate-y-1/2 pointer-events-none" />

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
              Privacy{" "}
              <span
                className="italic font-normal"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "1.05em",
                }}
              >
                Policy
              </span>
            </h1>
            <p
              className="text-white/75 text-base max-w-xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              At Amber Events, your trust is our most valued asset. This policy
              explains how we collect, use, and protect your personal information
              — transparently and responsibly.
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

        {/* ── COMMITMENT BANNER ─────────────────────────────────────────────── */}
        <div className="bg-[#F9F5F0] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Never Sold",
                  desc: "We never sell your data to any third party.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Securely Stored",
                  desc: "Your data is encrypted and protected.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  title: "Full Transparency",
                  desc: "You always know how your data is used.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-500 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div
                      className="font-bold text-gray-900 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {title}
                    </div>
                    <div
                      className="text-gray-400 text-xs mt-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
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
                href="/terms"
                className="text-xs text-pink-500 hover:text-pink-600 transition-colors font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Terms of Use
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