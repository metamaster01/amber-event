"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Label
      tl.fromTo(
        labelRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        0.2
      );

      // Title chars
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: "words,chars" });
        tl.fromTo(
          split.chars,
          { y: 60, opacity: 0, rotateX: -35, filter: "blur(4px)" },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            stagger: 0.02,
            duration: 0.7,
          },
          0.3
        );
      }

      // Para
      tl.fromTo(
        paraRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.85
      );

      // Decorative blobs float
      gsap.to(".about-blob-1", {
        y: -14,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
      gsap.to(".about-blob-2", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[340px] flex items-center"
      style={{
        background: "linear-gradient(135deg, #FF2D78 0%, #FF5CA0 55%, #FF2D78 100%)",
      }}
    >
      {/* Decorative rings */}
      <div className="about-blob-1 absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
      <div className="about-blob-2 absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute top-8 right-24 w-5 h-5 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute bottom-12 left-1/3 w-3 h-3 rounded-full bg-white/15 pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-20 md:py-28 w-full">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-white/50 text-xs mb-6 font-medium tracking-wide"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <span>/</span>
          <span className="text-white/80">About</span>
        </nav>

        <div ref={labelRef}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-white/60 rounded-full" />
            <span
              className="text-white/70 text-xs font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Story
            </span>
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] text-white tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif", perspective: "800px" }}
        >
          About{" "}
          <span
            className="italic font-normal text-white/90"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}
          >
            Amber
          </span>
        </h1>

        <p
          ref={paraRef}
          className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          At Amber Events, we believe that every celebration is more than an
          occasion — it&apos;s a reflection of love, joy, and togetherness. With
          a passion for detail and a flair for design, we transform your dreams
          into unforgettable experiences that linger long after the lights dim.
        </p>
      </div>
    </section>
  );
}
