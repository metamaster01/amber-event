"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { PortfolioStory } from "@/data/portfolio-data";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function PortfolioDetail({ story }: { story: PortfolioStory }) {
  const heroRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLBlockquoteElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero image zoom
      tl.fromTo(heroImgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 1.8, ease: "power2.out" },
        0
      );

      // Title
      if (heroTitleRef.current) {
        const split = new SplitText(heroTitleRef.current, { type: "words,chars" });
        tl.fromTo(split.chars,
          { y: 60, opacity: 0, filter: "blur(5px)" },
          {
            y: 0, opacity: 1, filter: "blur(0px)",
            stagger: 0.022, duration: 0.75,
          }, 0.4
        );
      }

      tl.fromTo(heroSubRef.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.9
      );

      // Parallax
      gsap.to(heroImgRef.current, {
        y: -70, ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top", end: "bottom top", scrub: 1.5,
        },
      });

      // Story paragraphs
      if (storyRef.current) {
        const paras = storyRef.current.querySelectorAll("p");
        gsap.fromTo(paras,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 85%" },
          }
        );
      }

      // Quote
      if (quoteRef.current) {
        const split2 = new SplitText(quoteRef.current, { type: "words" });
        gsap.fromTo(split2.words,
          { y: 35, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.045, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: quoteRef.current, start: "top 85%" },
          }
        );
      }

      // Stats counter entrance
      if (statsRef.current) {
        const items = statsRef.current.querySelectorAll(".stat-item");
        gsap.fromTo(items,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            stagger: 0.1, duration: 0.6, ease: "back.out(1.8)",
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          }
        );
      }

      // Services list
      if (servicesRef.current) {
        const items = servicesRef.current.querySelectorAll(".service-tag");
        gsap.fromTo(items,
          { x: -20, opacity: 0 },
          {
            x: 0, opacity: 1,
            stagger: 0.08, duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: servicesRef.current, start: "top 87%" },
          }
        );
      }

      // Gallery images
      if (galleryRef.current) {
        const imgs = galleryRef.current.querySelectorAll(".gallery-img");
        gsap.fromTo(imgs,
          { y: 40, opacity: 0, scale: 0.97 },
          {
            y: 0, opacity: 1, scale: 1,
            stagger: 0.1, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: galleryRef.current, start: "top 85%" },
          }
        );
        // Hover effect
        imgs.forEach((img) => {
          img.addEventListener("mouseenter", () => gsap.to(img, { scale: 1.03, duration: 0.4, ease: "power2.out" }));
          img.addEventListener("mouseleave", () => gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.inOut" }));
        });
      }

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[78vh] min-h-[520px] max-h-[820px] overflow-hidden flex items-end"
      >
        <div ref={heroImgRef} className="absolute inset-0 scale-110 origin-center">
          <Image
            src={story.heroImage}
            alt={story.couple}
            fill priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent" />
        <div className="absolute inset-0 bg-pink-900/15" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 pb-14">
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-5 font-medium tracking-wide"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-white/80">{story.couple}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <span className="bg-pink-500/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {story.category}
            </span>
            <span className="text-white/50 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {story.date} · {story.location}
            </span>
          </div>

          <h1
            ref={heroTitleRef}
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {story.couple}
          </h1>

          <p
            ref={heroSubRef}
            className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {story.tagline}
          </p>
        </div>
      </section>

      {/* ── STORY INTRO ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">

          {/* Intro paragraph */}
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-pink-400 rounded-full" />
              <span className="text-pink-500 text-xs font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                The Story
              </span>
            </div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {story.storyIntro}
            </p>
          </div>

          {/* Story body + services side panel */}
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20">
            <div ref={storyRef} className="flex flex-col gap-5">
              {story.storyBody.map((para, i) => (
                <p key={i} className="text-gray-500 text-[15px] md:text-base leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-10">
              {/* Services */}
              <div ref={servicesRef}>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Services Provided
                </h4>
                <div className="flex flex-wrap gap-2">
                  {story.services.map((s) => (
                    <span key={s}
                      className="service-tag bg-pink-50 border border-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-4">
                {story.stats.map((stat) => (
                  <div key={stat.label}
                    className="stat-item bg-[#F9F5F0] rounded-[16px] p-5">
                    <div className="text-3xl font-bold text-pink-500 leading-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 font-semibold mt-1.5 uppercase tracking-widest"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────────────────────── */}
      <section className="bg-pink-500 py-20 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full border border-white/10 translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="text-6xl text-white/20 mb-4 leading-none select-none"
            style={{ fontFamily: "'Great Vibes', cursive" }}>&ldquo;</div>
          <blockquote
            ref={quoteRef}
            className="text-[clamp(1.3rem,3vw,2.2rem)] font-semibold text-white leading-snug tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {story.quote}
          </blockquote>
          <p className="text-white/70 text-sm mt-6 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            — {story.quoteAuthor}
          </p>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F9F5F0] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[2px] bg-pink-400 rounded-full" />
            <span className="text-pink-500 text-xs font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Gallery
            </span>
          </div>

          <div
            ref={galleryRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]"
          >
            {story.galleryImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-img relative rounded-[16px] overflow-hidden cursor-pointer
                  ${img.span === "wide" ? "col-span-2" : ""}
                  ${img.span === "tall" ? "row-span-2" : ""}
                `}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE STORIES CTA ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Explore More{" "}
            <span className="italic font-normal text-pink-500"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}>
              Stories
            </span>
          </h3>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Every event we create has its own story. Explore the full portfolio and find the celebration that inspires yours.
          </p>
          <Link href="/portfolio"
            className="group inline-flex items-center gap-2 bg-pink-500 text-white font-semibold px-8 py-4 rounded-full text-[15px] tracking-wide shadow-lg shadow-pink-200/60 hover:shadow-pink-300/60 hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            View All Stories
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
