"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import HeroStats from "../hero-stats-card";

gsap.registerPlugin(ScrollTrigger, SplitText);

const storyParas = [
  "At Amber Events, we believe every celebration deserves to be as unique as the people behind it. From intimate gatherings to grand destination weddings, we design experiences that go beyond décor — weaving emotion, detail, and artistry into every moment.",
  "Founded with a passion for perfection, our journey began with a simple vision: to transform events into unforgettable stories. Today, Amber Events stands for elegance, creativity, and heartfelt execution — curating occasions that speak your style and spirit.",
  "Whether it's a lavish wedding, a stylish corporate affair, or a family milestone, our team brings together seamless planning, bespoke design, and flawless coordination to make your day truly special.",
  "With each event, we strive to create more than just memories — we create moments that linger in hearts long after the lights fade.",
];

const values = [
  {
    icon: "✦",
    title: "Creativity First",
    desc: "Every event is a blank canvas — we bring artistic vision and original thinking to every detail.",
  },
  {
    icon: "◈",
    title: "Flawless Execution",
    desc: "From first consultation to final farewell, our coordination is seamless and stress-free.",
  },
  {
    icon: "❋",
    title: "Heartfelt Service",
    desc: "We treat every client like family, listening deeply and delivering beyond expectations.",
  },
  {
    icon: "◉",
    title: "Bespoke Design",
    desc: "No two events look alike. Every design is tailored exclusively to your personality and vision.",
  },
];

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const philosophyHeadRef = useRef<HTMLHeadingElement>(null);
  const philosophyBodyRef = useRef<HTMLParagraphElement>(null);
  const promiseImgRef = useRef<HTMLDivElement>(null);
  const promiseSectionRef = useRef<HTMLDivElement>(null);
  const valueCardsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Quote reveal ─────────────────────────────────────────────────────
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
            scrollTrigger: { trigger: quoteRef.current, start: "top 85%" },
          },
        );
      }

      // ── Divider line draw ────────────────────────────────────────────────
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 88%" },
        },
      );

      // ── Image clip-path wipe ─────────────────────────────────────────────
      gsap.fromTo(
        imgRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 85%" },
        },
      );

      // ── Parallax on story image ──────────────────────────────────────────
      gsap.to(imgRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ── Text block paragraphs ────────────────────────────────────────────
      if (textBlockRef.current) {
        const paras = textBlockRef.current.querySelectorAll("p");
        gsap.fromTo(
          paras,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: textBlockRef.current, start: "top 85%" },
          },
        );
      }

      // ── Philosophy heading ───────────────────────────────────────────────
      if (philosophyHeadRef.current) {
        const split2 = new SplitText(philosophyHeadRef.current, {
          type: "words",
        });
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
              trigger: philosophyHeadRef.current,
              start: "top 85%",
            },
          },
        );
      }

      gsap.fromTo(
        philosophyBodyRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: philosophyBodyRef.current,
            start: "top 88%",
          },
          delay: 0.15,
        },
      );

      // ── Value cards ──────────────────────────────────────────────────────
      if (valueCardsRef.current) {
        const cards = valueCardsRef.current.querySelectorAll(".value-card");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: { trigger: valueCardsRef.current, start: "top 85%" },
          },
        );
        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -6, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.in" });
          });
        });
      }

      // ── Promise image parallax ───────────────────────────────────────────
      gsap.to(promiseImgRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: promiseSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ── Promise text ─────────────────────────────────────────────────────
      if (promiseSectionRef.current) {
        const els = promiseSectionRef.current.querySelectorAll(".promise-text");
        gsap.fromTo(
          els,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: promiseSectionRef.current,
              start: "top 80%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">
      {/* ── 1. QUOTE + IMAGE + TEXT ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-20 md:pt-28 pb-16 md:pb-24">
        <h2
          ref={quoteRef}
          className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-semibold text-gray-800 leading-snug mb-10 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          &ldquo;Turning moments into lifelong memories.&rdquo;
        </h2>

        <div ref={dividerRef} className="w-full h-px bg-gray-100 mb-14" />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div
            ref={imgRef}
            className="relative rounded-[20px] overflow-hidden shadow-xl shadow-gray-200/80"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/about-6.png"
              alt="Amber Events beautifully decorated venue"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-600/10 to-transparent" />
          </div>

          {/* Text */}
          <div ref={textBlockRef} className="flex flex-col gap-5 pt-2">
            {storyParas.map((p, i) => (
              <p
                key={i}
                className="text-gray-500 text-[15px] md:text-base leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. PHILOSOPHY ────────────────────────────────────────────────── */}
      <div className="bg-[#F9F5F0] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <div>
              <h2
                ref={philosophyHeadRef}
                className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-bold leading-[1.0] text-gray-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our{" "}
                <span
                  className="italic font-normal text-pink-500 block"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "1.1em",
                  }}
                >
                  Philosophy
                </span>
              </h2>
            </div>

            <div>
              <p
                ref={philosophyBodyRef}
                className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We Don&apos;t Just Plan Events — We Craft Emotions. Every
                Detail, From The Color Palette To The Lighting, Tells A Story
                That&apos;s Distinctly Yours.
              </p>
            </div>
          </div>

          {/* Value cards */}
          <div
            ref={valueCardsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm cursor-default"
              >
                <div className="text-pink-400 text-2xl mb-4">{v.icon}</div>
                <h4
                  className="font-bold text-gray-900 text-base mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {v.title}
                </h4>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. FULL BLEED IMAGE + PROMISE ────────────────────────────────── */}
      <div ref={promiseSectionRef}>

        {/* Full bleed image */}
        {/* <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" /> */}
        <div className="relative h-[75vw] max-h-[600px] min-h-[320px] overflow-hidden">
          {/* <div ref={promiseImgRef} className="absolute inset-0 scale-110 origin-center">
            <Image
              src="/about-promise.png"
              alt="Beautiful floral arrangement at Amber Events"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div> */}

          <HeroStats />
          {/* Bottom fade into white */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Promise text */}
        <div className="bg-white px-6 lg:px-12 py-20 md:py-28 max-w-5xl mx-auto">
          <h3
            className="promise-text text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.0] text-gray-900 tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span
              className="italic font-normal text-pink-500"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.1em",
              }}
            >
              Promise
            </span>
          </h3>
          <p
            className="promise-text text-gray-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stress-Free Planning. Impeccable Execution. And Celebrations That
            Reflect Your Dreams, Beautifully.
          </p>

          {/* Stats row */}
          <div className="promise-text flex flex-wrap gap-10 mt-12 pt-10 border-t border-gray-100">
            {[
              { num: "500+", label: "Events Delivered" },
              { num: "8+", label: "Years of Excellence" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "50+", label: "Expert Team Members" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  className="text-4xl font-bold text-pink-500"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {num}
                </div>
                <div
                  className="text-xs text-gray-400 font-semibold mt-1 uppercase tracking-widest"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
