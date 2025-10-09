// components/PortfolioHero.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },

};

const cardHover: Variants = {
  rest: { y: 0, scale: 1, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" },
  hover: { y: -8, scale: 1.01, boxShadow: "0 18px 40px rgba(0,0,0,0.12)", transition: { type: "spring", stiffness: 300, damping: 18 } },
};

export default function PortfolioHero() {
  return (
    <section className="w-full bg-[#F2E8C6] px-6 md:px-24 py-12 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative flex justify-start">
          {/* Constrain width so the image never grows too large */}
          <div className="max-w-[1100px] w-full relative">
            {/* Main image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="rounded-sm overflow-hidden border border-[#B84C0E] bg-gray-100"
            >
              <Image
                src="/portfolio1.png"
                alt="Bride entrance with fireworks"
                width={1200}
                height={700}
                className="w-full h-auto object-cover block"
                priority
              />
            </motion.div>

            {/* Floating Card - absolute on lg+, static below image on small screens */}
            <motion.aside
              role="region"
              aria-label="Hero message"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              whileHover="hover"
              animate="rest"
              variants={cardHover}
              className={
                // On lg screens: absolute and overlapping to the right. On smaller screens: static below image and centered.
                "absolute right-[-160px] top-1/2 -translate-y-1/2 hidden lg:flex" +
                " bg-[#F3E7D0] border border-[#B84C0E] max-w-sm min-h-[360px] p-8 flex-col justify-center items-center text-center rounded-lg shadow-lg"
              }
            >
              <h2 className="text-[#B84C0E] text-2xl md:text-3xl lg:text-3xl font-bold leading-tight tracking-wide">
                MEMORABLE, <br /> JOYFUL, <br /> TIMELESS.
              </h2>
              <p className="text-[#8A3C0E] text-sm md:text-base mt-4 leading-relaxed">
                We believe in transforming your celebrations into unforgettable experiences, blending creativity, warmth, and detail to craft moments that
                live forever in hearts.
              </p>
            </motion.aside>

            {/* Mobile / Tablet variant of the card (visible on small screens) */}
            <motion.div
              role="region"
              aria-label="Hero message (mobile)"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:hidden mt-6 mx-auto max-w-md bg-[#F3E7D0] border border-[#B84C0E] p-6 rounded-lg text-center shadow-md"
            >
              <h2 className="text-[#B84C0E] text-xl font-bold leading-tight tracking-wide">
                MEMORABLE, <br /> JOYFUL, <br /> TIMELESS.
              </h2>
              <p className="text-[#8A3C0E] text-sm mt-3 leading-relaxed">
                We believe in transforming your celebrations into unforgettable experiences, blending creativity, warmth, and detail to craft moments that live forever in hearts.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Accessibility helper: ensure overlapping card is reachable on keyboard for large screens */}
      <style jsx>{`
        /* small visual tweak: make sure absolute card sits above the image */
        aside[role="region"] {
          z-index: 12;
          border-radius: 12px;
        }

        /* On very small screens ensure card width is comfortable */
        @media (max-width: 480px) {
          .mobile-card {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
