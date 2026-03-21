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

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Entry animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, { y: -80, opacity: 0 });
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.querySelectorAll("li"),
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.5,
          }
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

  // Scroll glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20, pointerEvents: "none" },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", pointerEvents: "all" }
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("li"),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.06, duration: 0.35, ease: "power2.out", delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-pink-500/80 backdrop-blur-xl shadow-lg shadow-pink-900/20 py-1"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 lg:px-4 flex items-center justify-between h-[82px]">
        {/* Logo */}
        <div ref={logoRef} className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="Amber Events Logo"
              width={160}
              height={44}
              className="object-contain drop-shadow-md  h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul
          ref={linksRef}
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="relative px-3 py-1.5 text-white font-semibold text-[17px] tracking-wide group transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover underline */}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-50"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[72px] left-0 right-0 bg-pink-600/95 backdrop-blur-xl opacity-0 pointer-events-none"
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-2 text-white font-medium text-lg border-b border-white/10 last:border-0 hover:pl-4 transition-all duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}