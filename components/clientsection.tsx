// "use client";

// import Image from "next/image";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Shalini Gupta",
//     event: "Birthday Event",
//     text: "From décor to coordination, everything was handled with care and style. My daughter's birthday party was colourful, vibrant, and so memorable. Thank you for making it special!",
//     image: "/client1.png",
//   },
//   {
//     name: "Sneha & Karan",
//     event: "Wedding Event",
//     text: "Planning a wedding can be overwhelming, but Amber Events took away all the stress. They listened to our ideas, added their creative touch, and gave us the most unforgettable celebration.",
//     image: "/client2.png",
//   },
// ];

// export default function ClientSection() {
//   return (
//     <section className="bg-[#f7ebcf] py-20 px-6 md:px-20 lg:px-32">
//       {/* Heading */}
//       <div className="mb-14">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#b3421c] leading-tight">
//           WHAT MY <br /> CLIENTS SAY
//         </h2>
//         <p className="uppercase text-[#b3421c] tracking-wide font-medium mt-2">
//           Worked with over 50 clients around the world
//         </p>
//       </div>

//       {/* Testimonials Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//         {testimonials.map((t, idx) => (
//           <div key={idx} className="flex flex-col">
//             {/* Top Section: Image + Heading */}
//             <div className="flex items-start gap-5">
//               <Image
//                 src={t.image}
//                 alt={t.name}
//                 width={90}
//                 height={90}
//                 className="rounded-md object-cover"
//               />
//               <div>
//                 <Quote className="text-[#b3421c] w-10 h-10" />
//                 <h3 className="text-xl font-semibold text-[#b3421c] mt-2 leading-snug">
//                   Captured Moments, <br /> Cherished Words.
//                 </h3>
//                 <p className="text-sm text-[#b3421c] mt-1">
//                   — {t.name} &nbsp;– {t.event}
//                 </p>
//               </div>
//             </div>

//             {/* Testimonial Text */}
//             <p className="text-gray-800 mt-5 leading-relaxed text-[15px]">
//               “{t.text}”
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Bride",
    event: "Wedding — February 2024",
    avatar: "/client1.png",
    rating: 5,
    text: "I'd been dreaming of my wedding since I was eight years old. Amber Events somehow understood that dream better than I did. Every flower, every light, every moment was exactly what I'd imagined — and then more. I didn't worry about a single thing on my wedding day. I just got to feel it all.",
  },
  {
    name: "Rahul Deshmukh",
    role: "CEO, TechVision",
    event: "Corporate Gala — August 2023",
    avatar: "/client2.png",
    rating: 5,
    text: "Our annual gala needed to reflect our brand — polished, forward-thinking, and genuinely impressive. Amber Events delivered all three and went beyond. The staging, the service, the timing — all flawless. Three months later our guests are still talking about that evening. That's a rare thing.",
  },
  {
    name: "Sneha & Vikram Joshi",
    role: "Couple",
    event: "Jalwa Function — November 2023",
    avatar: "/client1.png",
    rating: 5,
    text: "We didn't know a celebration could feel this alive. The colours, the energy, the performers — it was like stepping inside a dream. But what touched us most was how personal it felt. Amber Events remembered every little thing we mentioned and wove it into the celebration. Truly magical.",
  },
  {
    name: "Anita Sharma",
    role: "Mother of the Bride",
    event: "Wedding — December 2023",
    avatar: "/client2.png",
    rating: 5,
    text: "As the mother of the bride, I was terrified something would go wrong. It never did. The team was always ten steps ahead — calm, creative, and so warm. When I look at the photos now, I see joy in every frame. They didn't just coordinate an event; they held our family together through the most emotional days of our lives.",
  },
  {
    name: "Rohan Kulkarni",
    role: "Groom",
    event: "Wedding — January 2024",
    avatar: "/client1.png",
    rating: 5,
    text: "I'm not someone who cares much about decoration. My wife is. So I trusted Amber Events to make her vision real — and they exceeded even her expectations. Watching her face as she walked into the venue is a memory I'll carry forever. That's what Amber Events gave us.",
  },
  {
    name: "Meera Iyer",
    role: "Event Manager, Sunrise Group",
    event: "Product Launch — March 2024",
    avatar: "/client2.png",
    rating: 5,
    text: "We've worked with many event companies across India. Amber Events is in a different league. Their attention to brand alignment, their speed of execution, and the way their team communicates — it's genuinely professional. The launch was our best-reviewed event in six years. We'll be working with them again without question.",
  },
];

const AUTO_INTERVAL = 5000;

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimating = useRef(false);

  // ── Entrance ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 88%" },
        }
      );
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words,chars" });
        gsap.fromTo(split.chars,
          { y: 55, opacity: 0, rotateX: -28 },
          {
            y: 0, opacity: 1, rotateX: 0,
            stagger: 0.018, duration: 0.75, ease: "power4.out",
            scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Transition ────────────────────────────────────────────────────────────
  const goTo = useCallback((next: number, direction: 1 | -1 = 1) => {
    if (isAnimating.current || next === active) return;
    isAnimating.current = true;
    setDir(direction);
    setPrev(active);
    setActive(next);
    setTimeout(() => {
      setPrev(null);
      isAnimating.current = false;
    }, 600);
  }, [active]);

  const advance = useCallback(() => {
    goTo((active + 1) % testimonials.length, 1);
  }, [active, goTo]);

  const goBack = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length, -1);
  }, [active, goTo]);

  // ── Auto-advance ──────────────────────────────────────────────────────────
  useEffect(() => {
    timerRef.current = setInterval(advance, AUTO_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [advance]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, AUTO_INTERVAL);
  };

  const handleDotClick = (i: number) => {
    goTo(i, i > active ? 1 : -1);
    resetTimer();
  };

  const handleNext = () => { advance(); resetTimer(); };
  const handlePrev = () => { goBack(); resetTimer(); };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="bg-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div ref={labelRef} className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-pink-500 rounded-full" />
              <span className="text-pink-500 text-xs font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Kind Words
              </span>
            </div>
            <h2
              ref={headingRef}
              className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-bold leading-[0.95] text-gray-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", perspective: "800px" }}
            >
              What Our{" "}
              <span className="italic font-normal text-pink-500"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.08em" }}>
                Clients
              </span>
              <br />Say
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-pink-400 hover:text-pink-500 hover:bg-pink-50 transition-all duration-200"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-pink-400 hover:text-pink-500 hover:bg-pink-50 transition-all duration-200"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Testimonial stage ─────────────────────────────────────────── */}
        <div ref={trackRef} className="relative min-h-[320px] md:min-h-[280px]">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              t={t}
              isActive={i === active}
              isPrev={i === prev}
              dir={dir}
            />
          ))}
        </div>

        {/* ── Progress dots + count ─────────────────────────────────────── */}
        <div className="flex items-center gap-4 mt-12">
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`transition-all duration-400 rounded-full ${
                  i === active
                    ? "w-7 h-2 bg-pink-500"
                    : "w-2 h-2 bg-gray-200 hover:bg-pink-200"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-gray-300 text-sm ml-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}

// ── Individual testimonial card with GSAP-driven slide ───────────────────────
function TestimonialCard({
  t,
  isActive,
  isPrev,
  dir,
}: {
  t: (typeof testimonials)[0];
  isActive: boolean;
  isPrev: boolean;
  dir: 1 | -1;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (isActive) {
      gsap.fromTo(ref.current,
        { x: dir * 80, opacity: 0, filter: "blur(4px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.55, ease: "power3.out" }
      );
    } else if (isPrev) {
      gsap.to(ref.current, {
        x: dir * -80, opacity: 0, filter: "blur(4px)",
        duration: 0.45, ease: "power3.in",
      });
    } else {
      gsap.set(ref.current, { opacity: 0, x: 0 });
    }
  }, [isActive, isPrev, dir]);

  if (!isActive && !isPrev) return null;

  return (
    <div
      ref={ref}
      className="absolute inset-0 will-change-transform"
      style={{ opacity: 0 }}
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

        {/* Left: person info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-pink-100 shadow-md shrink-0">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
                sizes="56px"
                onError={(e) => {
                  // Fallback: show initials if image missing
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback initials */}
              <div className="absolute inset-0 bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.name.charAt(0)}
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-base leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.name}
              </div>
              <div className="text-gray-400 text-xs mt-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t.role}
              </div>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-pink-400 text-pink-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="text-xs text-gray-400 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t.event}
          </div>
        </div>

        {/* Right: quote */}
        <div className="relative">
          {/* Large quote mark */}
          <div
            className="absolute -top-6 -left-2 text-[5rem] leading-none text-pink-100 select-none pointer-events-none"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            aria-hidden
          >
            &ldquo;
          </div>
          <p
            className="relative z-10 text-gray-700 text-lg md:text-xl leading-relaxed font-medium pt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t.text}
          </p>
        </div>
      </div>
    </div>
  );
}
