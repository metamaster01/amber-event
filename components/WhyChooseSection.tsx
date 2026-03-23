"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Item = {
  id: string;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    id: "01",
    title: "Personalized Planning",
    desc: "Every event is tailored to reflect your style, culture, and preferences.",
  },
  {
    id: "02",
    title: "Creative Design & Decor",
    desc: "From vibrant floral themes to luxury setups, we design spaces that wow.",
  },
  {
    id: "03",
    title: "Trusted Vendor Network",
    desc: "Handpicked professionals ensure quality, reliability, and excellence.",
  },
  {
    id: "04",
    title: "End-to-End Support",
    desc: "We handle every detail — from the first consultation to the final goodbye.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Heading word-by-word reveal ─────────────────────────────────────
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words,chars" });
        gsap.fromTo(
          split.chars,
          { y: 80, opacity: 0, rotateX: -35 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.015,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // ── Vertical line draw ───────────────────────────────────────────────
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          delay: 0.3,
        }
      );

      // ── Each list item stagger ───────────────────────────────────────────
      itemRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
            delay: i * 0.08,
          }
        );

        // ── Divider line draw ───────────────────────────────────────────
        const divider = el.querySelector(".item-divider") as HTMLElement;
        if (divider) {
          gsap.fromTo(
            divider,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
              delay: i * 0.08 + 0.15,
            }
          );
        }
      });

      // ── Hover arrow animations ──────────────────────────────────────────
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const arrow = arrowRefs.current[i];
        if (!arrow) return;

        el.addEventListener("mouseenter", () => {
          gsap.to(arrow, { x: 6, opacity: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(el, { x: 6, duration: 0.3, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(arrow, { x: 0, opacity: 0.4, duration: 0.3, ease: "power2.in" });
          gsap.to(el, { x: 0, duration: 0.3, ease: "power2.in" });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative bg-[#F9F5F0] overflow-hidden py-28 md:py-36"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-pink-100/60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-pink-100/40" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-50/80 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

          {/* ── LEFT — Sticky heading ──────────────────────────────────── */}
          <div className="lg:sticky lg:top-32 self-start">

            {/* Label */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-pink-400 rounded-full" />
              <span
                className="text-pink-400 text-xs font-bold tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Why Us
              </span>
            </div>

            <h2
              ref={headingRef}
              className="text-[clamp(3.5rem,6.5vw,5.5rem)] font-bold leading-[1.0] tracking-tight text-gray-900 mb-8"
              style={{ fontFamily: "'Playfair Display', serif", perspective: "600px" }}
            >
              What Make
              {" "}Us{" "}
              <span
                className="italic font-normal text-pink-500 block"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.05em" }}
              >
                Different
              </span>
            </h2>

            {/* Vertical accent line */}
            <div
              ref={lineRef}
              className="w-[3px] h-24 bg-gradient-to-b from-pink-500 to-pink-100 rounded-full mb-8"
            />

            <p
              className="text-gray-400 text-base leading-relaxed max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We don&apos;t just plan events — we craft experiences that tell
              your unique story with heart and precision.
            </p>

            {/* Decorative script flourish */}
            <div
              className="mt-10 text-5xl text-pink-100 select-none"
              style={{ fontFamily: "'Great Vibes', cursive" }}
              aria-hidden
            >
              Amber
            </div>
          </div>

          {/* ── RIGHT — Items list ─────────────────────────────────────── */}
          <div className="flex flex-col pt-2">
            {items.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="group cursor-pointer"
              >
                {/* Top divider (first item only — acts as top border) */}
                {i === 0 && (
                  <div className="item-divider w-full h-px bg-gray-200 mb-8" />
                )}

                <div className="flex items-start justify-between gap-6 pb-8">
                  {/* Number */}
                  <div
                    className="text-[11px] font-bold text-pink-300 tracking-[0.2em] mt-1.5 shrink-0 w-8"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3
                        className="text-[1.35rem] md:text-[1.5rem] font-semibold text-gray-900 tracking-tight group-hover:text-pink-500 transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.title}
                      </h3>
                      {/* Arrow */}
                      <svg
                        ref={(el) => { arrowRefs.current[i] = el; }}
                        className="w-5 h-5 text-pink-400 opacity-40 shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <p
                      className="text-gray-400 text-[15px] leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom divider */}
                <div className="item-divider w-full h-px bg-gray-200 mb-8" />
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="flex items-center gap-5 mt-4">

              <Link href="/contact">
              <button
                className="group relative overflow-hidden bg-pink-500 text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-pink-200 hover:shadow-pink-300/60 hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                <span className="relative z-10 flex items-center gap-2">
                  Plan Your Event
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              </Link>
              <span
                className="text-sm text-gray-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                No commitment required
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}