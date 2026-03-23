// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Instagram, Youtube, X } from "lucide-react";
// import { motion, Variants } from "framer-motion";

// type NavItem = { label: string; href?: string };

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// };

// export default function FooterSection() {
//   const company: NavItem[] = [
//     { label: "Home", href: "#" },
//     { label: "About us", href: "#" },
//     { label: "Gallery", href: "#" },
//     { label: "Blog", href: "#" },
//     { label: "Contact", href: "#" },
//   ];

//   const explore: NavItem[] = [
//     { label: "Service", href: "#" },
//     { label: "Portfolio", href: "#" },
//     { label: "Testimonials", href: "#" },
//   ];

//   const legal: NavItem[] = [
//     { label: "Terms of use", href: "#" },
//     { label: "Privacy policy", href: "#" },
//   ];

//   return (
//     <footer className="bg-[#FFF3EC] text-[#C64E2C]">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12">
//         {/* Top area: logo + columns */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10">
//           {/* Logo & Follow (col-span 4 on md) */}
//           <motion.div
//             className="md:col-span-3 col-span-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <div className="flex flex-col items-start gap-4">
//               <div className="w-[170px]">
//                 <Image src="/logo.png" alt="Amber Logo" width={170} height={56} priority className="object-contain" />
//               </div>

//               <p className="text-sm text-[#9b3b1f] max-w-[220px] leading-snug">
//                 Crafting unforgettable weddings, social gatherings, and corporate events with creativity and passion.
//               </p>

//               <div className="mt-2">
//                 <h4 className="text-base font-semibold mb-3 text-[#C64E2C]">Follow Us</h4>
//                 <div className="flex gap-3">
//                   {/* Circular icon buttons */}
//                   <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
//                     <Facebook size={14} />
//                   </a>
//                   <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
//                     <Instagram size={14} />
//                   </a>
//                   <a href="#" aria-label="X" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
//                     <X size={14} />
//                   </a>
//                   <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
//                     <Youtube size={14} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Company column */}
//           <motion.div
//             className="md:col-span-2 col-span-6"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h4 className="text-lg font-semibold mb-4">Company</h4>
//             <nav className="flex flex-col gap-3 text-sm">
//               {company.map((item) => (
//                 <Link key={item.label} href={item.href ?? "#"} className="group inline-block">
//                   <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
//                     {item.label}
//                   </span>
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>

//           {/* Explore column */}
//           <motion.div
//             className="md:col-span-2 col-span-6"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h4 className="text-lg font-semibold mb-4">Explore</h4>
//             <nav className="flex flex-col gap-3 text-sm">
//               {explore.map((item) => (
//                 <Link key={item.label} href={item.href ?? "#"} className="group inline-block">
//                   <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
//                     {item.label}
//                   </span>
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>

//           {/* Contact info column */}
//           <motion.div
//             className="md:col-span-3 col-span-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h4 className="text-lg font-semibold mb-4">Contact info</h4>

//             <div className="text-sm text-[#7a2f19] space-y-3">
//               <a href="mailto:info@amber.com" className="block group">
//                 <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
//                   info@amber.com
//                 </span>
//               </a>
//               <a href="tel:+91***********" className="block">
//                 +91***********
//               </a>
//             </div>
//           </motion.div>

//           {/* Legal column */}
//           <motion.div
//             className="md:col-span-2 col-span-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//           >
//             <h4 className="text-lg font-semibold mb-4">Legal</h4>
//             <nav className="flex flex-col gap-3 text-sm">
//               {legal.map((item) => (
//                 <Link key={item.label} href={item.href ?? "#"} className="group inline-block">
//                   <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
//                     {item.label}
//                   </span>
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-[#F2D8CB] mt-2"></div>

//         {/* Bottom row: copyright left, support right */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <p className="text-sm text-[#9b3b1f]">amber @ 2025. All rights Reserved.</p>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//             <a href="mailto:support@amber.com" className="text-sm text-[#C64E2C] hover:underline">
//               support@amber.com
//             </a>
//           </motion.div>
//         </div>

//         {/* Footer banner / decorative image */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="pt-4 pb-8 flex justify-center"
//         >
//           <div className="w-full max-w-[1100px]">
//             <Image src="/footer1.png" alt="Footer Banner" width={1100} height={140} className="w-full h-auto object-cover rounded-md" priority />
//           </div>
//         </motion.div> */}
//       </div>
//     </footer>
//   );
// }






"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const company = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  // { label: "Blog", href: "/bl" }
  { label: "Contact", href: "/contact" },
];

const explore = [
  { label: "Service", href: "/#service" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
];

const legal = [
  { label: "Terms of use", href: "/terms-of-use" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917008334010",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.847L0 24l6.341-1.513A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.374l-.36-.214-3.727.889.904-3.643-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Columns stagger in
      if (colsRef.current) {
        const cols = colsRef.current.querySelectorAll(".footer-col");
        gsap.fromTo(cols,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.08, duration: 0.65, ease: "power2.out",
            scrollTrigger: { trigger: footerRef.current, start: "top 88%", once: true },
          }
        );
      }
      // Footer image reveal
      gsap.fromTo(imgRef.current,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 90%", once: true },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FF2D78 0%, #FF5CA0 55%, #FF2D78 100%)" }}
    >
      {/* ── MAIN FOOTER CONTENT ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-14 pb-6">
        <div
          ref={colsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10 pb-10"
        >
          {/* ── Logo + tagline + socials ─────────────────────────────── */}
          <div className="footer-col col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Amber Events"
                width={130}
                height={52}
                className="object-contain brightness-0 invert"
                priority
              />
            </Link>
            <p
              className="text-white/75 text-sm leading-relaxed max-w-[200px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Crafting unforgettable weddings, social gatherings, and corporate events with creativity and passion.
            </p>
            <div>
              <p className="text-white/60 text-xs font-bold tracking-[0.18em] uppercase mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-pink-500 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Company ──────────────────────────────────────────────── */}
          <div className="footer-col">
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {company.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/70 text-sm hover:text-white transition-colors duration-200 group flex items-center gap-1.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300 rounded-full" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Explore ───────────────────────────────────────────────── */}
          <div className="footer-col">
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {explore.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/70 text-sm hover:text-white transition-colors duration-200 group flex items-center gap-1.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300 rounded-full" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Contact ───────────────────────────────────────────────── */}
          <div className="footer-col">
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Contact Info
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:ambercaterer.isd@gmail.com"
                className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                ambercaterer.isd@gmail.com
              </a>
              <a href="tel:+917008334010"
                className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                +91 7008334010
              </a>
              <p className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Nagpur, Maharashtra
              </p>
            </div>
          </div>

          {/* ── Legal ─────────────────────────────────────────────────── */}
          <div className="footer-col">
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              {legal.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/70 text-sm hover:text-white transition-colors duration-200 group flex items-center gap-1.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300 rounded-full" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Divider + Bottom row ─────────────────────────────────────── */}
        <div className="border-t border-white/15 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-white/50 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <a href="https://www.metamaster.in" target="_blank" rel="noopener noreferrer">
              Meta Master
            </a> © 2026. All rights reserved.
          </p>
          <a
            href="mailto:info@metamaster.in"
            className="text-white/60 text-xs hover:text-white transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            info@metamaster.in
          </a>
        </div>
      </div>

      {/* ── FOOTER IMAGE — Full bleed at bottom ──────────────────────── */}
      <div
        ref={imgRef}
        className="relative w-full mt-4"
        style={{ height: "clamp(240px, 45vw, 520px)" }}
      >
        <Image
          src="/footer-image.png"
          alt="Beautiful Amber Events celebration"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Top fade to match pink footer */}
        <div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #FF2D78 0%, transparent 100%)",
          }}
        />
      </div>
    </footer>
  );
}