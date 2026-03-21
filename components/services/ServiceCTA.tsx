"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { Service } from "@/context/service-data";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = { service: Service };

export default function ServiceCTA({ service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Parallax image
      gsap.to(imgRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Heading
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words,chars" });
        gsap.fromTo(
          split.chars,
          { y: 60, opacity: 0, rotateX: -30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.018,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Subtext
      gsap.fromTo(
        subRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 88%",
          },
          delay: 0.2,
        }
      );

      // Button
      gsap.fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.55,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 90%",
          },
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[480px] flex items-center justify-center"
    >
      {/* Background */}
      <div ref={imgRef} className="absolute inset-0 scale-110 origin-center">
        <Image
          src={service.heroImage}
          alt="CTA background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-pink-600/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-12 py-24 max-w-3xl mx-auto">

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-white/50" />
          <span
            className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to Begin?
          </span>
          <div className="w-8 h-[1px] bg-white/50" />
        </div>

        <h2
          ref={headingRef}
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-5 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", perspective: "600px" }}
        >
          {service.ctaHeading}
        </h2>

        <p
          ref={subRef}
          className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {service.ctaSubtext}
        </p>

        <button
          ref={btnRef}
          className="group relative overflow-hidden bg-white text-pink-600 font-semibold px-9 py-4 rounded-full text-[15px] tracking-wide shadow-xl shadow-pink-900/30 hover:shadow-pink-900/50 hover:scale-105 transition-all duration-300 active:scale-100"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <span className="absolute inset-0 bg-pink-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          <span className="relative z-10 flex items-center gap-2">
            Plan Your{" "}
            {service.title === "Catering" ? "Menu" : "Event"}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>

        {/* Decorative rings */}
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
      </div>
    </section>
  );
}
