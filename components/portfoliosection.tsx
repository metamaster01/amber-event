// "use client";

// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// export default function PortfolioPage() {
//   return (
//     <div className="bg-[#fcf7ee] text-[#B84C0E] min-h-screen flex flex-col">
//       {/* 🖼 Hero Section */}
//       {/* <section className="relative w-full flex justify-start pl-[80px]">
//         <div className="max-w-5xl w-full relative">
//           <Image
//             src="/portfolio1.png"
//             alt="Bride entrance with fireworks"
//             width={1200}
//             height={700}
//             className="object-cover border border-[#B84C0E] w-full rounded-none"
//             priority
//           />
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="absolute top-1/2 right-[-160px] -translate-y-1/2 bg-[#F3E7D0] p-8 border border-[#B84C0E] max-w-sm min-h-[380px] flex flex-col justify-center items-center text-center shadow-lg"
//           >
//             <h2 className="text-2xl font-bold leading-tight">
//               MEMORABLE, <br /> JOYFUL, <br /> TIMELESS.
//             </h2>
//             <p className="text-base mt-4 text-[#8A3C0E]">
//               We believe in transforming your celebrations into unforgettable
//               experiences, blending creativity, warmth, and detail to craft
//               moments that live forever in hearts.
//             </p>
//           </motion.div>
//         </div>
//       </section> */}

//       {/* 🏆 Portfolio Section */}
//       <section className="max-w-6xl mx-auto px-6 py-12">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold"
//         >
//           PORTFOLIO
//         </motion.h2>
//         <p className="uppercase tracking-wide text-sm mt-2">Featured Story</p>

//         {/* Grid with text + images */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 items-stretch">
//           {/* Story Text Card - left aligned content */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="border border-[#B84C0E] p-8 flex flex-col justify-center items-start text-left h-full"
//           >
//             <h3 className="text-4xl font-bold">01</h3>
//             <h4 className="text-3xl font-semibold mt-4">Rahul & Priya</h4>
//             <p className="text-base md:text-lg text-[#8A3C0E] mt-4 leading-relaxed max-w-[90%]">
//               A royal-themed celebration with elegant décor, floral extravagance,
//               and soulful music.
//             </p>
//           </motion.div>

//           {/* Story Images */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="overflow-hidden shadow-lg border border-[#B84C0E] h-full"
//           >
//             <Image
//               src="/portfolio2.png"
//               alt="Wedding closeup"
//               width={600}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="overflow-hidden shadow-lg border border-[#B84C0E] h-full"
//           >
//             <Image
//               src="/portfolio3.png"
//               alt="Wedding couple under petals"
//               width={600}
//               height={800}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         </div>

//         {/* Button */}
//         <div className="mt-10 text-right">
//           <Button>View Gallery</Button>
//         </div>
//       </section>
//     </div>
//   );
// }





"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { portfolioStories } from "@/context/portfolio-data";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AUTO_INTERVAL = 4000;

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  const story = portfolioStories[activeIndex];

  // ── Entrance animations ───────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 88%" },
        }
      );

      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words,chars" });
        gsap.fromTo(
          split.chars,
          { y: 60, opacity: 0, rotateX: -30 },
          {
            y: 0, opacity: 1, rotateX: 0,
            stagger: 0.018, duration: 0.75, ease: "power4.out",
            scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
          }
        );
      }

      if (gridRef.current) {
        const cols = gridRef.current.querySelectorAll<HTMLElement>(".grid-col");
        gsap.fromTo(
          cols,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Story transition (images + text card flip) ────────────────────────────
  const transitionTo = useCallback(
    (next: number) => {
      if (isTransitioning || next === activeIndex) return;
      setIsTransitioning(true);

      const tl = gsap.timeline({
        onComplete: () => {
          setActiveIndex(next);
          setIsTransitioning(false);
        },
      });

      // Phase 1: flip text card out
      tl.to(textCardRef.current, {
        rotateY: 90,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      // Phase 2: images wipe out
      tl.to(
        [img1Ref.current, img2Ref.current],
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.35,
          ease: "power3.in",
          stagger: 0.06,
        },
        "<0.05"
      );

      // Phase 3: flip text card in (triggered by onComplete above setting index)
      tl.set(textCardRef.current, { rotateY: -90 });
      tl.to(textCardRef.current, {
        rotateY: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        delay: 0.05,
      });

      // Phase 4: images wipe in
      tl.fromTo(
        [img1Ref.current, img2Ref.current],
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.08,
        },
        "<0.05"
      );
    },
    [activeIndex, isTransitioning]
  );

  // ── Auto-advance ──────────────────────────────────────────────────────────
  const advance = useCallback(() => {
    const next = (activeIndex + 1) % portfolioStories.length;
    transitionTo(next);
  }, [activeIndex, transitionTo]);

  useEffect(() => {
    timerRef.current = setInterval(advance, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance]);

  const handleDotClick = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    transitionTo(i);
    timerRef.current = setInterval(advance, AUTO_INTERVAL);
  };

  // ── Image hover zoom ──────────────────────────────────────────────────────
  const addImgHover = (el: HTMLDivElement | null) => {
    if (!el) return;
    const img = el.querySelector("img");
    if (!img) return;
    el.addEventListener("mouseenter", () =>
      gsap.to(img, { scale: 1.06, duration: 0.6, ease: "power2.out" })
    );
    el.addEventListener("mouseleave", () =>
      gsap.to(img, { scale: 1, duration: 0.55, ease: "power2.inOut" })
    );
  };

  useEffect(() => {
    addImgHover(img1Ref.current);
    addImgHover(img2Ref.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="bg-[#F9F5F0] py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div ref={labelRef} className="mb-2 flex items-center gap-3">
          <div className="w-8 h-[2px] bg-pink-500 rounded-full" />
          <span
            className="text-pink-500 text-xs font-bold tracking-[0.22em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Featured Story
          </span>
        </div>

        <div className="flex items-end justify-between gap-4 mb-10">
          <h2
            ref={headingRef}
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] text-gray-900 tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              perspective: "800px",
            }}
          >
            Portfolio{" "}
            <span
              className="italic font-normal text-pink-500"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.1em",
              }}
            >
              Stories
            </span>
          </h2>

          {/* Story counter */}
          <div
            className="hidden md:flex items-center gap-1 pb-2 text-gray-400 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="text-pink-500 font-bold text-base">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-1">/</span>
            <span>{String(portfolioStories.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* ── 3-col Grid — exact original layout ──────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-pink-200/60 rounded-[4px] overflow-hidden shadow-lg shadow-pink-100/40"
          style={{ minHeight: "460px" }}
        >
          {/* ── Col 1: Text / Story card ──────────────────────────────── */}
          <div
            className="grid-col bg-pink-500 p-8 md:p-10 flex flex-col justify-between"
            style={{ perspective: "800px" }}
          >
            <div
              ref={textCardRef}
              className="flex flex-col justify-between h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                {/* Number */}
                <span
                  className="text-[5rem] font-bold leading-none text-white/20 select-none block mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                {/* Category badge */}
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3 py-1.5 rounded-full mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {story.category}
                </span>

                {/* Couple name */}
                <h3
                  className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white leading-tight mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {story.couple}
                </h3>

                {/* Location + date */}
                <p
                  className="text-white/60 text-xs mb-5 font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {story.date} · {story.location}
                </p>

                {/* Short desc */}
                <p
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {story.shortDesc}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={`/portfolio/${story.slug}`}
                  className="group inline-flex items-center gap-2 bg-white text-pink-600 font-semibold text-sm px-6 py-3 rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-300 shadow-md shadow-pink-900/20"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  View Story
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Col 2: Image 1 ────────────────────────────────────────── */}
          <div
            ref={img1Ref}
            className="grid-col relative overflow-hidden border-l border-pink-200/40"
            style={{ minHeight: "420px", clipPath: "inset(0 0% 0 0)" }}
          >
            <Image
              src={story.coverImage}
              alt={story.couple}
              fill
              className="object-cover transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent pointer-events-none" />
          </div>

          {/* ── Col 3: Image 2 (uses galleryImages[0] as secondary) ─── */}
          <div
            ref={img2Ref}
            className="grid-col relative overflow-hidden border-l border-pink-200/40"
            style={{ minHeight: "420px", clipPath: "inset(0 0% 0 0)" }}
          >
            <Image
              src={
                story.galleryImages[1]?.src ?? story.coverImage
              }
              alt={`${story.couple} detail`}
              fill
              className="object-cover transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* ── Bottom row: dots + View all ──────────────────────────────── */}
        <div className="flex items-center justify-between mt-8">
          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {portfolioStories.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                disabled={isTransitioning}
                aria-label={`Go to story ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-7 h-2 bg-pink-500"
                    : "w-2 h-2 bg-pink-200 hover:bg-pink-300"
                }`}
              />
            ))}
          </div>

          {/* View all */}
          <Link
            href="#portfolio"
            className="group flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-pink-500 transition-colors duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View all stories
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}