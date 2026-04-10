// "use client"

// import * as React from "react"
// import { cn } from "@/lib/utils"
// import Image from "next/image" // add Image import for background hero

// type Props = {
//   target?: number
//   targetHref?: string
//   backgroundSrc?: string
//   className?: string
// }

// function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
//   const ref = React.useRef<T | null>(null)
//   const [inView, setInView] = React.useState(false)

//   React.useEffect(() => {
//     if (!ref.current) return
//     const observer = new IntersectionObserver(
//       (entries) => {
//         for (const e of entries) {
//           if (e.isIntersecting) {
//             setInView(true)
//           }
//         }
//       },
//       { threshold: 0.25, root: null, rootMargin: "0px", ...(options || {}) },
//     )
//     observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [options])

//   return { ref, inView } as const
// }

// export default function HeroStatsCard({
//   target = 50,
//   targetHref = "#testimonial",
//   backgroundSrc = "/background.jpg",
//   className,
// }: Props) {
//   const { ref, inView } = useInView<HTMLDivElement>()
//   const [count, setCount] = React.useState(0)
//   const animatedOnceRef = React.useRef(false)

//   // Count-up animation when card first comes into view
//   React.useEffect(() => {
//     if (!inView || animatedOnceRef.current) return
//     animatedOnceRef.current = true

//     const duration = 1000 // ms
//     const start = performance.now()
//     function tick(now: number) {
//       const progress = Math.min((now - start) / duration, 1)
//       const value = Math.floor(progress * target)
//       setCount(value)
//       if (progress < 1) requestAnimationFrame(tick)
//       else setCount(target)
//     }
//     requestAnimationFrame(tick)
//   }, [inView, target])

//   return (
//     <section
//       className={cn(
//         "relative isolate h-[380px] md:h-[460px] rounded-2xl overflow-hidden",
//         "ring-1 ring-black/10",
//         className,
//       )}
//       aria-label="Hero section with success highlight"
//     >
//       {/* Background image */}
//       <Image
//         src={backgroundSrc || "/placeholder.svg"}
//         alt=""
//         fill
//         priority
//         className="object-cover"
//         aria-hidden="true"
//       />
//       {/* subtle overlay for legibility */}
//       <div className="pointer-events-none absolute inset-0 bg-black/10" />

//       {/* Card + arrow button, positioned to the right center */}
//       <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
//         <div
//           ref={ref}
//           className={cn(
//             "group relative isolate",
//             // presentation animation when in view
//             inView ? "animate-in fade-in slide-in-from-right-6 duration-700" : "opacity-0 translate-x-6",
//           )}
//         >
//           {/* Card */}
//           <div
//             className={cn(
//               "relative z-10 w-[300px] md:w-[360px]",
//               "rounded-3xl bg-[var(--color-brand)] text-[var(--color-brand-foreground)]",
//               "shadow-lg ring-1 ring-black/10",
//               "p-4 md:p-6",
//               "transition-all duration-300",
//               "hover:translate-y-[-4px] hover:shadow-xl",
//               "focus-within:translate-y-[-4px] focus-within:shadow-xl",
//             )}
//             aria-label="Successful events highlight"
//           >
//             {/* Avatars trail (single image) */}
//             <div className="flex items-center gap-3">
//               <img
//                 src="/icon-row.png"
//                 alt="Happy clients"
//                 className="h-10 w-auto shrink-0 rounded-full"
//                 loading="eager"
//                 width={80}
//                 height={40}
//               />
//             </div>

//             {/* Main text with count-up */}
//             <div className="mt-3 md:mt-4">
//               <p className="text-pretty text-2xl font-bold leading-tight md:text-3xl">
//                 <span className="align-baseline">{count}</span>
//                 <span className="align-baseline">+</span>{" "}
//                 <span className="sr-only">Successful events and counting</span>
//                 <span aria-hidden="true">Successful events and counting</span>
//               </p>
//               <p className="mt-1 text-sm/relaxed text-white/85">See what clients says</p>
//             </div>
//           </div>

//           {/* Floating circular arrow button that overlaps the card edge */}
//           <a
//             href={targetHref}
//             aria-label="Jump to testimonials"
//             className={cn(
//               "absolute right-[-18px] top-1/2 z-20 -translate-y-1/2",
//               "rounded-full bg-[var(--color-brand)] p-2 ring-1 ring-black/10",
//               "transition-transform duration-300",
//               "hover:scale-105 focus-visible:scale-105",
//             )}
//           >
//             <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-brand)] text-[var(--color-brand-foreground)]">
//               <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-5 w-5">
//                 <path
//                   d="M7.5 16.5l8.5-8.5M9 7h8v8"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   fill="none"
//                 />
//               </svg>
//             </span>
//           </a>
//         </div>
//       </div>

//       {/* Decorative rounded corner like the reference (bottom-right) */}
//       <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 rounded-tl-2xl bg-white/0" />
//     </section>
//   )
// }


"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Props = {
  // Section link for the small round arrow button
  targetHref?: string
  // Optional ARIA label for the button
  ctaLabel?: string
}

export default function HeroStats({ targetHref = "#testimonial", ctaLabel = "See testimonials" }: Props) {
  const rootRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)
  const targetCount = 50

  useEffect(() => {
    if (!rootRef.current) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.35 },
    )
    io.observe(rootRef.current)
    return () => io.disconnect()
  }, [])

  // Count-up animation fired once
  useEffect(() => {
    if (!visible) return
    let raf = 0
    const duration = 1500 // ms
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setCount(Math.round(eased * targetCount))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible])

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden"
      aria-label="Hero"
      style={{
        minHeight: "90vh",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/video-1.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* Orange stats card */}
      <div
        className={[
          "absolute right-4 bottom-6 md:right-10 md:bottom-10",
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
      >
        <div
          className={[
            "relative rounded-[28px] bg-[#b74b0e] text-white",
            "shadow-xl w-[310px] md:w-[380px] p-5 md:p-6",
            "hover:shadow-2xl hover:scale-[1.02] transition-transform",
          ].join(" ")}
        >
          {/* Floating round arrow button */}
          <a
            href={targetHref}
            aria-label={ctaLabel}
            className={[
              "absolute -top-5 -right-5 w-12 h-12 rounded-full",
              "bg-[#a3440d] shadow-lg grid place-items-center",
              "hover:bg-[#933e0c] transition-colors",
            ].join(" ")}
          >
            <ArrowUpRight className="w-6 h-6 text-white" />
          </a>

          {/* Avatars trail image */}
          <div className="mb-3">
            <Image src="/icon-row.png" alt="Client avatars" width={88} height={32} className="h-8 w-auto" />
          </div>

          {/* Main copy wrapped by orange card (this whole card is the orange wrapper) */}
          <div className="space-y-1.5">
            <p className="text-xl md:text-2xl font-semibold">
              <span className="font-extrabold">{count}+</span> Successful events and counting
            </p>
            <p className="text-white/85 text-sm md:text-[15px]">See what clients says</p>
          </div>
        </div>
      </div>

      {/* Decorative corner rounding (as seen in reference, optional) */}
      <div className="hidden md:block absolute bottom-0 right-0 w-6 h-6 bg-transparent" aria-hidden="true" />
    </section>
  )
}
