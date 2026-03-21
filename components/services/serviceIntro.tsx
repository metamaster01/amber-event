"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { Service } from "@/context/service-data";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = { service: Service };

export default function ServiceIntro({ service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const approachLabelRef = useRef<HTMLHeadingElement>(null);
  const approachParaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Quote split text
      if (quoteRef.current) {
        const split = new SplitText(quoteRef.current, { type: "words" });
        gsap.fromTo(
          split.words,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Decorative line
      gsap.fromTo(
        decorLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: decorLineRef.current,
            start: "top 88%",
          },
        }
      );

      // Image clip reveal
      gsap.fromTo(
        imgRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
          },
        }
      );

      // Right text block
      gsap.fromTo(
        textRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
          delay: 0.15,
        }
      );

      // Approach section
      if (approachLabelRef.current) {
        const split2 = new SplitText(approachLabelRef.current, { type: "words" });
        gsap.fromTo(
          split2.words,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: approachLabelRef.current,
              start: "top 85%",
            },
          }
        );
      }

      gsap.fromTo(
        approachParaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: approachParaRef.current,
            start: "top 87%",
          },
        }
      );

      // Feature cards stagger
      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll(".feature-card");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 85%",
            },
          }
        );

        // Hover for each card
        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -6, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.in" });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* ── Quote ───────────────────────────────────────────────────── */}
        <h2
          ref={quoteRef}
          className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-gray-800 leading-snug mb-12 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {service.quote}
        </h2>

        <div ref={decorLineRef} className="w-full h-px bg-gray-100 mb-14" />

        {/* ── Two column: image + text ─────────────────────────────── */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start mb-20">

          {/* Image */}
          <div
            ref={imgRef}
            className="relative rounded-[20px] overflow-hidden shadow-xl shadow-gray-200/80 aspect-[4/3]"
          >
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent" />
          </div>

          {/* Text */}
          <div ref={textRef} className="flex flex-col justify-center">
            <p
              className="text-gray-500 text-base md:text-[17px] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {service.detailIntro}
            </p>
          </div>
        </div>

        {/* ── Approach ───────────────────────────────────────────────── */}
        <div className="mb-20">
          <h3
            ref={approachLabelRef}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-gray-900 mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span
              className="italic font-normal text-pink-500"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}
            >
              Approach
            </span>
          </h3>

          <div
            ref={approachParaRef}
            className="max-w-2xl space-y-5"
          >
            <p
              className="text-gray-500 text-base md:text-[17px] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {service.approachPara1}
            </p>
            <p
              className="text-gray-500 text-base md:text-[17px] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {service.approachPara2}
            </p>
          </div>
        </div>

        {/* ── Features grid ──────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-pink-400 rounded-full" />
            <span
              className="text-pink-500 text-xs font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What&apos;s Included
            </span>
          </div>

          <div
            ref={featuresRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="feature-card bg-[#F9F5F0] rounded-[18px] p-6 border border-gray-100 cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                </div>
                <h4
                  className="font-bold text-gray-900 text-base mb-2 leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feat.title}
                </h4>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}