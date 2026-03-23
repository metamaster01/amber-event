// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     // Trigger entrance animation
//     setTimeout(() => setLoaded(true), 100);

//     // Handle scroll effect
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Service", href: "#services" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes slideDown {
//           from {
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes fadeInScale {
//           from {
//             transform: scale(0.8);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             transform: translateX(-30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -200% center;
//           }
//           100% {
//             background-position: 200% center;
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         .nav-container {
//           animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .logo-animate {
//           animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
//         }

//         .logo-animate:hover {
//           animation: float 2s ease-in-out infinite;
//         }

//         .nav-item {
//           position: relative;
//           animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
//         }

//         .nav-item::before {
//           content: '';
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #F2E8C6, #FFD700, #F2E8C6);
//           background-size: 200% 100%;
//           transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//           border-radius: 2px;
//         }

//         .nav-item:hover::before {
//           width: 100%;
//           animation: shimmer 1.5s linear infinite;
//         }

//         .nav-item:hover {
//           transform: translateY(-2px);
//           transition: transform 0.3s ease;
//         }

//         .nav-item:nth-child(1) { animation-delay: 0.3s; }
//         .nav-item:nth-child(2) { animation-delay: 0.4s; }
//         .nav-item:nth-child(3) { animation-delay: 0.5s; }
//         .nav-item:nth-child(4) { animation-delay: 0.6s; }
//         .nav-item:nth-child(5) { animation-delay: 0.7s; }
//         .nav-item:nth-child(6) { animation-delay: 0.8s; }

//         .mobile-menu {
//           animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .mobile-item {
//           animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) backwards;
//         }

//         .mobile-item:nth-child(1) { animation-delay: 0.1s; }
//         .mobile-item:nth-child(2) { animation-delay: 0.15s; }
//         .mobile-item:nth-child(3) { animation-delay: 0.2s; }
//         .mobile-item:nth-child(4) { animation-delay: 0.25s; }
//         .mobile-item:nth-child(5) { animation-delay: 0.3s; }
//         .mobile-item:nth-child(6) { animation-delay: 0.35s; }

//         .menu-button {
//           animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
//           transition: transform 0.3s ease, background-color 0.3s ease;
//         }

//         .menu-button:hover {
//           transform: rotate(90deg) scale(1.1);
//         }

//         .menu-button:active {
//           transform: rotate(90deg) scale(0.95);
//         }

//         .nav-bg {
//           background: linear-gradient(135deg, #C14600 0%, #D55000 50%, #C14600 100%);
//           background-size: 200% 200%;
//           animation: gradientShift 8s ease infinite;
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .nav-scrolled {
//           box-shadow: 0 10px 30px rgba(193, 70, 0, 0.3);
//           backdrop-filter: blur(10px);
//         }

//         .glow-effect {
//           position: relative;
//           overflow: hidden;
//         }

//         .glow-effect::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//           animation: glow 3s infinite;
//         }

//         @keyframes glow {
//           0% { left: -100%; }
//           100% { left: 100%; }
//         }

//         .decorative-line {
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           height: 6px;
//           background: linear-gradient(90deg, transparent, #F2E8C6, transparent);
//           transform: translateX(-50%) scaleX(0);
//           animation: expandLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
//           box-shadow: 0 0 15px rgba(212, 175, 55, 0.6), 0 0 30px rgba(255, 215, 0, 0.4);
//         }

//         @keyframes expandLine {
//           0% {
//             width: 0;
//             transform: translateX(-50%) scaleX(0);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             width: 85%;
//             transform: translateX(-50%) scaleX(1);
//             opacity: 1;
//           }
//         }

//         .decorative-line::before,
//         .decorative-line::after {
//           content: '';
//           position: absolute;
//           width: 8px;
//           height: 8px;
//           background: #FFD700;
//           border-radius: 50%;
//           top: 50%;
//           transform: translateY(-50%);
//           box-shadow: 0 0 10px #FFD700, 0 0 20px #D4AF37;
//           animation: pulseDot 2s ease-in-out infinite;
//         }

//         .decorative-line::before {
//           left: 0;
//         }

//         .decorative-line::after {
//           right: 0;
//         }

//         @keyframes pulseDot {
//           0%, 100% {
//             transform: translateY(-50%) scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: translateY(-50%) scale(1.3);
//             opacity: 0.7;
//           }
//         }
//       `}</style>

//       <nav
//         className={`nav-container nav-bg relative flex items-center justify-between px-8 py-4 text-white sticky top-0 z-50 bg-pink-500 ${
//           scrolled ? "nav-scrolled" : ""
//         } ${loaded ? "opacity-100" : "opacity-0"}`}
//       >
//         {/* Animated Background Glow */}
//         <div className="glow-effect absolute inset-0 pointer-events-none"></div>

//         {/* Decorative Animated Line */}
//         <div className="decorative-line"></div>

//         {/* Logo with Animation - Far Left */}
//         <Link href="/" className="logo-animate relative z-10">
//           <Image
//             src="/logo.png"
//             alt="Amber Logo"
//             width={120}
//             height={40}
//             className="cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
//           />
//         </Link>

//         {/* Desktop Menu with Staggered Animation - Far Right */}
//         <ul className="hidden md:flex space-x-8 text-lg font-medium z-10 ml-auto mr-4">
//           {navItems.map((item, index) => (
//             <li key={item.name} className="nav-item">
//               <Link
//                 href={item.href}
//                 className="relative hover:text-[#F2E8C6] transition-all duration-300 font-semibold tracking-wide"
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button with Animation */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden relative z-20 mr-4 menu-button p-2 rounded-lg hover:bg-[#A03800] active:bg-[#8B3000]"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Mobile Dropdown Menu with Animations */}
//         {isOpen && (
//           <div className="mobile-menu absolute top-full right-0 w-4/5 bg-gradient-to-b from-[#C14600] to-[#A03800] flex flex-col items-center space-y-4 py-6 shadow-2xl md:hidden z-10 rounded-l-xl border-l-4 border-[#F2E8C6]">
//             {navItems.map((item, index) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="mobile-item hover:text-[#F2E8C6] transition-all duration-300 text-lg font-semibold hover:scale-110 hover:tracking-wider w-full text-center py-2 hover:bg-[#8B3000] rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;




"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

// ── Service items with icons + slugs from serviceData ─────────────────────────
const serviceItems = [
  {
    label: "Wedding Events",
    slug: "wedding-events",
    tagline: "Where dreams meet design.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Corporate Events",
    slug: "corporate-events",
    tagline: "Where professionalism meets celebration.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: "Jalwa Function",
    slug: "jalwa-function",
    tagline: "Celebrate with colour, rhythm & soul.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: "Catering Service",
    slug: "catering-service",
    tagline: "Flavours that tell your story.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/#service", hasDropdown: true },
  { label: "Portfolio", href: "/#portfolio" },
  
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownInnerRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Entry animation ──────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, { y: -80, opacity: 0 });
      gsap.to(navRef.current, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2,
      });

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.querySelectorAll("li"),
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.07, duration: 0.6, ease: "power2.out", delay: 0.5 }
        );
      }

      gsap.fromTo(
        logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
      );
    });
    return () => ctx.revert();
  }, []);

  // ── Scroll glass effect ─────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Dropdown open/close with GSAP ──────────────────────────────────────
  const openDropdown = useCallback(() => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimerRef.current = setTimeout(() => setDropdownOpen(false), 120);
  }, []);

  useEffect(() => {
    if (!dropdownRef.current || !dropdownInnerRef.current) return;

    if (dropdownOpen) {
      gsap.set(dropdownRef.current, { display: "block" });
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power3.out" }
      );
      // Stagger items
      const items = dropdownInnerRef.current.querySelectorAll(".dd-item");
      gsap.fromTo(
        items,
        { x: -12, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.055, duration: 0.25, ease: "power2.out", delay: 0.05 }
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0, y: -8, scale: 0.97,
        duration: 0.2, ease: "power2.in",
        onComplete: () => {
          if (dropdownRef.current) gsap.set(dropdownRef.current, { display: "none" });
        },
      });
    }
  }, [dropdownOpen]);

  // ── Mobile menu animation ────────────────────────────────────────────────
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20, pointerEvents: "none" },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", pointerEvents: "all" }
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll(".mob-link"),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.055, duration: 0.32, ease: "power2.out", delay: 0.08 }
      );
    } else {
      setMobileServicesOpen(false);
      gsap.to(mobileMenuRef.current, {
        opacity: 0, y: -10, duration: 0.22, ease: "power2.in", pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  // ── Mobile services accordion ────────────────────────────────────────────
  useEffect(() => {
    if (!mobileServicesRef.current) return;
    if (mobileServicesOpen) {
      gsap.set(mobileServicesRef.current, { height: "auto", opacity: 1 });
      const h = mobileServicesRef.current.scrollHeight;
      gsap.fromTo(
        mobileServicesRef.current,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
      gsap.fromTo(
        mobileServicesRef.current.querySelectorAll(".mob-service-item"),
        { x: -12, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.06, duration: 0.28, ease: "power2.out", delay: 0.06 }
      );
    } else {
      gsap.to(mobileServicesRef.current, {
        height: 0, opacity: 0, duration: 0.28, ease: "power2.in",
      });
    }
  }, [mobileServicesOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-pink-500/85 backdrop-blur-xl shadow-lg shadow-pink-900/20 py-1"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-[78px]">

        {/* ── Logo ──────────────────────────────────────────────────────── */}
        <div ref={logoRef} className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="Amber Events"
              width={155}
              height={44}
              className="object-contain drop-shadow-md h-auto"
              priority
            />
          </Link>
        </div>

        {/* ── Desktop Nav ───────────────────────────────────────────────── */}
        <ul ref={linksRef} className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              // ── Service with dropdown ────────────────────────────────
              <li key={link.label} className="relative">
                <button
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  onClick={() => (dropdownOpen ? closeDropdown() : openDropdown())}
                  className="relative flex items-center gap-1.5 px-3 py-1.5 text-white font-semibold text-[16px] tracking-wide group transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Chevron */}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </button>

                {/* ── Dropdown panel ────────────────────────────────── */}
                <div
                  ref={dropdownRef}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[340px] hidden"
                  style={{ zIndex: 100 }}
                >
                  {/* Arrow tip */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white rounded-sm shadow-sm" />

                  <div
                    ref={dropdownInnerRef}
                    className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/80 border border-gray-100/80 overflow-hidden p-2"
                  >
                    {/* Header strip */}
                    <div className="bg-pink-500 rounded-[10px] px-4 py-3 mb-2">
                      <p className="text-white text-[11px] font-bold tracking-[0.18em] uppercase"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Our Services
                      </p>
                    </div>

                    {/* Service items */}
                    {serviceItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="dd-item group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-pink-50 transition-colors duration-150"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {/* Icon bubble */}
                        <div className="w-9 h-9 rounded-xl bg-pink-50 group-hover:bg-pink-100 text-pink-500 flex items-center justify-center shrink-0 transition-colors duration-150">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-pink-600 transition-colors duration-150"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {item.label}
                          </div>
                          <div
                            className="text-gray-400 text-xs mt-0.5 leading-snug truncate"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {item.tagline}
                          </div>
                        </div>
                        {/* Arrow */}
                        <svg
                          className="w-3.5 h-3.5 text-gray-300 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all duration-150 shrink-0"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ))}

                    {/* Footer link */}
                    <div className="border-t border-gray-100 mt-2 pt-2 px-3 pb-1">
                      <Link
                        href="/#service"
                        className="flex items-center justify-between text-xs text-pink-500 font-semibold hover:text-pink-600 transition-colors py-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        onClick={() => setDropdownOpen(false)}
                      >
                        Explore all services
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              // ── Regular link ─────────────────────────────────────────
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative px-3 py-1.5 text-white font-semibold text-[16px] tracking-wide group transition-colors duration-200 hover:text-white inline-block"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              </li>
            )
          )}

          
        </ul>

        {/* ── Call Button (Desktop) ──────────────────────────────────────────── */}
        <a
          href="tel:7008334010"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-white font-semibold text-[14px] border-2 border-white rounded-2xl hover:bg-white hover:text-pink-600 transition-all duration-300 ml-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +91 7008334010
        </a>

        {/* ── Hamburger ─────────────────────────────────────────────────── */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-50"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[78px] left-0 right-0 bg-pink-600/97 backdrop-blur-xl opacity-0 pointer-events-none border-t border-white/10 shadow-xl"
      >
        <ul className="flex flex-col px-4 py-3">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              // ── Services accordion ─────────────────────────────────
              <li key={link.label} className="mob-link">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-3.5 px-2 text-white font-medium text-base border-b border-white/10 hover:text-white/90 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="flex items-center gap-2">
                    {/* Services icon */}
                    <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {link.label}
                  </span>
                  <svg
                    className={`w-4 h-4 text-white/60 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion body */}
                <div
                  ref={mobileServicesRef}
                  className="overflow-hidden h-0 opacity-0"
                >
                  <div className="py-2 pl-2 pr-1 flex flex-col gap-1 border-b border-white/10">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                        className="mob-service-item group flex items-center gap-3 px-3 py-3 rounded-xl bg-white/8 hover:bg-white/15 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold text-sm"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {item.label}
                          </div>
                          <div className="text-white/55 text-xs mt-0.5"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {item.tagline}
                          </div>
                        </div>
                        <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors shrink-0"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              // ── Regular mobile link ──────────────────────────────────
              <li key={link.label} className="mob-link">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 py-3.5 px-2 text-white font-medium text-base border-b border-white/10 last:border-0 hover:text-white/90 hover:pl-4 transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>


        {/* ── Call Button (Mobile) ────────────────────────────────────────────── */}
        <div className="px-4 py-4 border-t border-white/10 mt-2">
          <a
            href="tel:7008334010"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 text-pink-600 font-semibold text-base bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 7008334010
          </a>
        </div>
      </div>
    </nav>
  );
}