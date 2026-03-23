"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0
      );

      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: "words,chars" });
        tl.fromTo(
          split.chars,
          { y: 55, opacity: 0, filter: "blur(5px)" },
          {
            y: 0, opacity: 1, filter: "blur(0px)",
            stagger: 0.022, duration: 0.7,
          },
          0.35
        );
      }

      tl.fromTo(
        subRef.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 },
        0.9
      );

      // Parallax
      gsap.to(imgRef.current, {
        y: -60, ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", end: "bottom top", scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] min-h-[360px] max-h-[560px] overflow-hidden flex items-end"
    >
      {/* Background */}
      <div ref={imgRef} className="absolute inset-0 scale-110 origin-center">
        <Image
          src="/contact-image.jpg"
          alt="Contact Amber Events"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.08) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-pink-700/25" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 pb-12">
        <nav
          className="flex items-center gap-2 text-white/50 text-xs mb-5 font-medium tracking-wide"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white/80">Contact</span>
        </nav>

        <h1
          ref={titleRef}
          className="text-[clamp(2.8rem,6vw,4.5rem)] font-bold text-white leading-tight tracking-tight mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact{" "}
          <span
            className="italic font-normal text-pink-200"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}
          >
            Us
          </span>
        </h1>

        <p
          ref={subRef}
          className="text-white/75 text-sm md:text-base max-w-xl leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Your wedding is more than a ceremony — it&apos;s a story of love and
          celebration. From stunning décor and flawless coordination to heartfelt
          hospitality, we craft every detail to make your special day truly
          timeless.
        </p>
      </div>
    </section>
  );
}
