"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="bg-[#fcf7ee] text-[#B84C0E] min-h-screen flex flex-col">
      {/* 🖼 Hero Section */}
      {/* <section className="relative w-full flex justify-start pl-[80px]">
        <div className="max-w-5xl w-full relative">
          <Image
            src="/portfolio1.png"
            alt="Bride entrance with fireworks"
            width={1200}
            height={700}
            className="object-cover border border-[#B84C0E] w-full rounded-none"
            priority
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 right-[-160px] -translate-y-1/2 bg-[#F3E7D0] p-8 border border-[#B84C0E] max-w-sm min-h-[380px] flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h2 className="text-2xl font-bold leading-tight">
              MEMORABLE, <br /> JOYFUL, <br /> TIMELESS.
            </h2>
            <p className="text-base mt-4 text-[#8A3C0E]">
              We believe in transforming your celebrations into unforgettable
              experiences, blending creativity, warmth, and detail to craft
              moments that live forever in hearts.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* 🏆 Portfolio Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          PORTFOLIO
        </motion.h2>
        <p className="uppercase tracking-wide text-sm mt-2">Featured Story</p>

        {/* Grid with text + images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 items-stretch">
          {/* Story Text Card - left aligned content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-[#B84C0E] p-8 flex flex-col justify-center items-start text-left h-full"
          >
            <h3 className="text-4xl font-bold">01</h3>
            <h4 className="text-3xl font-semibold mt-4">Rahul & Priya</h4>
            <p className="text-base md:text-lg text-[#8A3C0E] mt-4 leading-relaxed max-w-[90%]">
              A royal-themed celebration with elegant décor, floral extravagance,
              and soulful music.
            </p>
          </motion.div>

          {/* Story Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-lg border border-[#B84C0E] h-full"
          >
            <Image
              src="/portfolio2.png"
              alt="Wedding closeup"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden shadow-lg border border-[#B84C0E] h-full"
          >
            <Image
              src="/portfolio3.png"
              alt="Wedding couple under petals"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Button */}
        <div className="mt-10 text-right">
          <Button>View Gallery</Button>
        </div>
      </section>
    </div>
  );
}
