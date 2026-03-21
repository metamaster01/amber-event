"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { Service } from "@/context/service-data";

gsap.registerPlugin(SplitText);

type Props = { service: Service };

export default function ServiceHero({ service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image zoom in from slightly bigger
      tl.fromTo(
        imgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0
      );

      // Overlay fade in
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        0
      );

      // Title chars
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: "words,chars" });
        tl.fromTo(
          split.chars,
          { y: 60, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.022,
            duration: 0.75,
            ease: "power3.out",
          },
          0.4
        );
      }

      // Subtitle
      tl.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.85
      );

      // Subtle parallax on scroll
      gsap.to(imgRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] min-h-[520px] max-h-[880px] overflow-hidden flex items-end"
    >
      {/* Background image */}
      <div ref={imgRef} className="absolute inset-0 scale-110 origin-center">
        <Image
          src={service.heroImage}
          alt={`${service.title} ${service.scriptTitle}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Subtle pink tint at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 pb-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/50 text-xs mb-5 font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/#service" className="hover:text-white transition-colors">Services</a>
          <span>/</span>
          <span className="text-white/80">{service.title} {service.scriptTitle}</span>
        </nav>

        <h1
          ref={titleRef}
          className="text-[clamp(2.8rem,6vw,5rem)] font-bold text-white leading-[1.0] mb-5 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {service.title}{" "}
          <span
            className="italic font-normal text-pink-300"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}
          >
            {service.scriptTitle}
          </span>
        </h1>

        <p
          ref={subRef}
          className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {service.shortDesc}
        </p>
      </div>
    </section>
  );
}