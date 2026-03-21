// "use client";
// import { FC } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Wedding Planning",
//     quote: "Crafting your happily ever after",
//     description:
//       "Your wedding is more than just a day—it's a lifetime memory. From venue selection and décor to entertainment and guest management, we take care of every detail so you can focus on love and laughter.",
//     icon: "/service1.png",
//   },
//   {
//     title: "Destination Weddings",
//     quote: "Love beyond borders",
//     description:
//       "Dreaming of saying “I do” at a beach, palace, or hilltop resort? We specialize in creating magical destination weddings with flawless execution, ensuring a stress-free celebration no matter where you are.",
//     icon: "/service2.png",
//   },
//   {
//     title: "Corporate Events",
//     quote: "Where business meets celebration",
//     description:
//       "From product launches and conferences to gala dinners, we design corporate events that are polished, impactful, and memorable. Our professional touch ensures your brand shines through every detail.",
//     icon: "/service1.png",
//   },
//   {
//     title: "Social Celebrations",
//     quote: "Every milestone, a masterpiece",
//     description:
//       "Life’s milestones deserve to be celebrated in style. Whether it’s a birthday, anniversary, or cultural festivity, we bring vibrant décor, seamless planning, and joyful energy to make it unforgettable.",
//     icon: "/service2.png",
//   },
// ];

// const ServiceSection: FC = () => {
//   return (
//     <section className="bg-[#F2E8C6] py-12 px-6 md:px-12 lg:px-20">
//       {/* Section Header */}
//       <div className="mb-10 text-left max-w-5xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#C14600] tracking-wide">
//           SERVICE
//         </h2>
//         <p className="text-lg text-[#C14600] mt-2 tracking-widest">
//           WHAT I OFFER
//         </p>
//       </div>

//       {/* Service Grid */}
//       <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
//         {services.map((service, index) => (
//           <motion.div
//             key={service.title}
//             className="bg-[#C14600] text-white p-3 md:p-4 shadow-md flex flex-col items-center justify-center aspect-square gap-y-3 text-center rounded-xl"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             {/* Icon */}
//             <Image
//               src={service.icon}
//               alt={service.title + " icon"}
//               width={44}
//               height={44}
//               className="object-contain"
//             />

//             {/* Content */}
//             <h3 className="text-base md:text-lg font-bold">
//               {service.title}
//             </h3>
//             <p className="italic text-sm md:text-base">
//               “{service.quote}”
//             </p>
//             <p className="text-sm md:text-base leading-snug line-clamp-4">
//               {service.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;





"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { services } from "@/context/service-data";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── HEADING split text ───────────────────────────────────────────────
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
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
            },
          }
        );
      }

      // ── Label slide in ───────────────────────────────────────────────────
      gsap.fromTo(
        labelRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 90%",
          },
        }
      );

      // ── DESKTOP: pinned horizontal scroll ────────────────────────────────
      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const pinWrap = pinWrapRef.current;
        if (!track || !pinWrap) return;

        ScrollTrigger.refresh();

        const getScrollAmount = () =>
          -(track.scrollWidth - window.innerWidth + 96);

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: pinWrap,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // ── Cards stagger in when section first enters viewport ──────────
        // KEY FIX: target cards directly from track, no opacity:0 inline style
        const cards = track.querySelectorAll<HTMLElement>(".service-card");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: pinWrap,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="service" className="bg-[#F9F5F0]">

      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <div className="px-6 lg:px-12 pt-24 pb-10 max-w-7xl mx-auto">
        <div ref={labelRef} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-pink-500 rounded-full" />
          <span
            className="text-pink-500 text-xs font-bold tracking-[0.22em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            What We Do
          </span>
        </div>

        <h2
          ref={headingRef}
          className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[0.95] text-gray-900 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", perspective: "800px" }}
        >
          Our Services{" "}
          <span
            className="italic font-normal text-pink-500"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}
          >
            Offered
          </span>
        </h2>

        {/* Desktop scroll hint */}
        <div className="hidden md:flex items-center gap-3 mt-6 text-gray-400">
          <span
            className="text-sm tracking-wide"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Scroll to explore
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-pink-300 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <svg
            className="w-4 h-4 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* ── DESKTOP: Pinned horizontal scroll track ─────────────────────── */}
      <div ref={pinWrapRef} className="hidden md:block">
        <div
          ref={trackRef}
          className="flex gap-6 px-12 pb-20 pt-6 will-change-transform"
          style={{ width: "max-content" }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
          {/* Breathing space at the end */}
          <div className="w-24 shrink-0" aria-hidden />
        </div>
      </div>

      {/* ── MOBILE: Vertical stack ──────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-6 px-5 pb-16 pt-4">
        {services.map((service, i) => (
          <MobileServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Desktop Card
// NOTE: No style={{ opacity: 0 }} — parent GSAP handles the entrance animation
// ─────────────────────────────────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const imgWrap = imgWrapRef.current;
    const arrow = arrowRef.current;
    if (!card || !imgWrap || !arrow) return;

    const onEnter = () => {
      gsap.to(imgWrap, { scale: 1.06, duration: 0.6, ease: "power2.out" });
      gsap.to(arrow, {
        x: 5,
        backgroundColor: "rgba(255,255,255,0.30)",
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.to(card, { y: -5, duration: 0.3, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(imgWrap, { scale: 1, duration: 0.5, ease: "power2.inOut" });
      gsap.to(arrow, {
        x: 0,
        backgroundColor: "rgba(255,255,255,0.15)",
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.in" });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Link href={`/services/${service.slug}`}>
      <div
        ref={cardRef}
        // ✅ service-card class targeted by parent GSAP fromTo — NO inline opacity
        className="service-card relative flex-shrink-0 w-[400px] rounded-[28px] overflow-hidden bg-pink-500 text-white cursor-pointer shadow-xl shadow-pink-300/30"
      >
        {/* Text block */}
        <div className="p-8 pb-5">
          <div
            className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3
            className="text-[1.65rem] font-bold leading-tight mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.title}{" "}
            <span
              className="italic font-normal"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.15em",
              }}
            >
              {service.scriptTitle}
            </span>
          </h3>

          <p
            className="text-white/75 text-xs font-semibold tracking-wide mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {service.tagline}
          </p>

          <p
            className="text-white/85 text-sm leading-relaxed line-clamp-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {service.shortDesc}
          </p>
        </div>

        {/* Image */}
        <div ref={imgWrapRef} className="relative h-[260px] overflow-hidden">
          <Image
            src={service.cardImage}
            alt={`${service.title} ${service.scriptTitle}`}
            fill
            className="object-cover"
            sizes="400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-700/40 to-transparent" />
        </div>

        {/* Arrow badge */}
        <span
          ref={arrowRef}
          className="absolute top-7 right-7 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-white"
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
        </span>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile Card
// ─────────────────────────────────────────────────────────────────────────────
function MobileServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
        delay: index * 0.08,
      }
    );
  }, [index]);

  return (
    <Link href={`/services/${service.slug}`}>
      <div
        ref={ref}
        className="relative rounded-[24px] overflow-hidden bg-pink-500 text-white shadow-lg shadow-pink-200/50"
      >
        <div className="p-6 pb-4">
          <div
            className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <h3
            className="text-2xl font-bold leading-tight mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.title}{" "}
            <span
              className="italic font-normal"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.1em",
              }}
            >
              {service.scriptTitle}
            </span>
          </h3>

          <p
            className="text-white/75 text-xs font-semibold tracking-wide mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {service.tagline}
          </p>

          <p
            className="text-white/85 text-sm leading-relaxed line-clamp-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {service.shortDesc}
          </p>

          <div
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/90"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Explore
            <svg
              className="w-4 h-4"
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
          </div>
        </div>

        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={service.cardImage}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-700/40 to-transparent" />
        </div>
      </div>
    </Link>
  );
}