"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLHeadingElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading large split text reveal ──────────────────────────────────
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.fromTo(
          split.words,
          { y: 60, opacity: 0, rotateX: -25 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // ── Tagline clip reveal ───────────────────────────────────────────────
      gsap.fromTo(
        taglineRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: taglineRef.current,
            start: "top 88%",
          },
        }
      );

      // ── Subheading ────────────────────────────────────────────────────────
      if (subheadRef.current) {
        const split2 = new SplitText(subheadRef.current, { type: "lines" });
        gsap.fromTo(
          split2.lines,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subheadRef.current,
              start: "top 88%",
            },
          }
        );
      }

      // ── Paragraphs ────────────────────────────────────────────────────────
      [para1Ref, para2Ref].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
            },
            delay: i * 0.15,
          }
        );
      });

      // ── Button ────────────────────────────────────────────────────────────
      gsap.fromTo(
        btnRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 90%",
          },
        }
      );

      // ── Image 1 — main ────────────────────────────────────────────────────
      gsap.fromTo(
        img1Ref.current,
        { x: -60, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img1Ref.current,
            start: "top 85%",
          },
        }
      );

      // ── Image 2 — overlapping small ──────────────────────────────────────
      gsap.fromTo(
        img2Ref.current,
        { x: -30, y: 30, opacity: 0, rotate: -4 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img1Ref.current,
            start: "top 80%",
          },
          delay: 0.2,
        }
      );

      // ── Image 3 — top right decorative ───────────────────────────────────
      gsap.fromTo(
        img3Ref.current,
        { y: -30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img1Ref.current,
            start: "top 85%",
          },
          delay: 0.1,
        }
      );

      // ── Badge ─────────────────────────────────────────────────────────────
      gsap.fromTo(
        badgeRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.55)",
          scrollTrigger: {
            trigger: img1Ref.current,
            start: "top 75%",
          },
          delay: 0.3,
        }
      );

      // ── Stats counter ─────────────────────────────────────────────────────
      gsap.fromTo(
        statsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 88%",
          },
        }
      );

      // ── Parallax on the main image ────────────────────────────────────────
      gsap.to(img1Ref.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ── Floating badge loop ───────────────────────────────────────────────
      gsap.to(badgeRef.current, {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white overflow-hidden py-24 md:py-32"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-50 rounded-full blur-[100px] opacity-40 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── SECTION LABEL ─────────────────────────────────────────────── */}
        <div ref={taglineRef} className="flex items-center gap-3 mb-8">
          <div className="w-10 h-[2px] bg-pink-500 rounded-full" />
          <span
            className="text-pink-500 text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our Story
          </span>
        </div>

        {/* ── HEADING ───────────────────────────────────────────────────── */}
        <h2
          ref={headingRef}
          className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-gray-900 mb-6"
          style={{ fontFamily: "'Playfair Display', serif", perspective: "800px" }}
        >
          About{" "}
          <span
            className="italic font-normal text-pink-500"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}
          >
            Us
          </span>
        </h2>

        {/* ── MAIN GRID ─────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT — Images collage */}
          <div className="relative h-[520px] md:h-[600px]">

            {/* Main portrait image */}
            <div
              ref={img1Ref}
              className="absolute top-0 left-0 w-[68%] h-[80%] rounded-[24px] overflow-hidden shadow-2xl shadow-pink-200/60"
            >
              <Image
                src="/background.jpg"
                alt="Amber Events couple"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 35vw"
              />
              {/* Pink overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent" />
            </div>

            {/* Overlapping landscape image */}
            <div
              ref={img2Ref}
              className="absolute bottom-0 left-[10%] w-[55%] h-[44%] rounded-[20px] overflow-hidden shadow-xl border-4 border-white z-10"
            >
              <Image
                src="/about3.png"
                alt="Floral decor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 28vw"
              />
            </div>

            {/* Top right decorative image */}
            <div
              ref={img3Ref}
              className="absolute top-[5%] right-0 w-[36%] h-[42%] rounded-[20px] overflow-hidden shadow-lg border-4 border-white z-10"
            >
              <Image
                src="/about-6.png"
                alt="Event detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 30vw, 20vw"
              />
            </div>

            {/* Floating badge */}
            <div
              ref={badgeRef}
              className="absolute top-[42%] right-[-16px] z-20 bg-pink-500 text-white rounded-2xl px-5 py-4 shadow-xl shadow-pink-400/40"
            >
              <div
                className="text-3xl font-bold leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                8+
              </div>
              <div
                className="text-xs font-medium mt-1 opacity-90 whitespace-nowrap"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Years Experience
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-pink-200/60 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full border border-pink-300/40 pointer-events-none" />
          </div>

          {/* RIGHT — Text */}
          <div className="flex flex-col justify-center">
            <h3
              ref={subheadRef}
              className="text-2xl md:text-[2.5rem] font-bold text-gray-900 leading-snug mb-6 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every event is a story,<br />
              and we&apos;re here to tell{" "}
              <span className="text-pink-500 italic" style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.3.5em" }}>
                yours.
              </span>
            </h3>

            <p
              ref={para1Ref}
              className="text-gray-500 text-base md:text-[17px] leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              At Amber Events, we believe every celebration should be as unique as
              the people behind it. No two stories are the same, and neither should
              be the way they are celebrated. We capture your personality, style,
              and vision to create events that truly reflect who you are.
            </p>

            <p
              ref={para2Ref}
              className="text-gray-500 text-base md:text-[17px] leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              From intimate weddings to grand corporate events, our team blends
              creativity, precision, and passion to deliver seamless experiences —
              ensuring your special moments linger in the hearts of your guests
              long after the event ends.
            </p>

            {/* Stats row */}
            <div
              ref={statsRef}
              className="flex items-center gap-8 mb-10 pb-10 border-b border-gray-100"
            >
              {[
                { num: "500+", label: "Events Planned" },
                { num: "98%", label: "Happy Clients" },
                { num: "50+", label: "Expert Team" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="text-3xl font-bold text-pink-500"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-xs text-gray-400 font-medium mt-0.5 uppercase tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">

              <Link href="/about">
                <button
                  ref={btnRef}
                  className="group relative overflow-hidden bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-[15px] tracking-wide shadow-lg shadow-pink-300/50 hover:shadow-pink-400/60 hover:scale-105 transition-all duration-300 active:scale-100"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                <span className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                <span className="relative z-10 flex items-center gap-2">
                  Know More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>

              <div
                className="flex items-center gap-2 text-sm text-gray-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Image src="/about1.png" alt="Planner" width={36} height={36} className="rounded-full object-cover border-2 border-pink-200" />
                <span>Meet our team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}