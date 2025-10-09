// components/AboutComponent.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

type Item = { title: string; desc: string };

export default function AboutComponent() {
  const router = useRouter();

  // refs with proper typing
  const topLeftRef = useRef<HTMLDivElement | null>(null);
  const topRightRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const animTopLeft = useAnimation();
  const animTopRight = useAnimation();
  const animImages = useAnimation();
  const animList = useAnimation();

  const topLeftInView = useInView(topLeftRef, { once: true, margin: "-80px" });
  const topRightInView = useInView(topRightRef, { once: true, margin: "-80px" });
  const imagesInView = useInView(imagesRef, { once: true, margin: "-100px" });
  const listInView = useInView(listRef, { once: true, margin: "-120px" });

  useEffect(() => {
    if (topLeftInView) animTopLeft.start("visible");
  }, [topLeftInView, animTopLeft]);
  useEffect(() => {
    if (topRightInView) animTopRight.start("visible");
  }, [topRightInView, animTopRight]);
  useEffect(() => {
    if (imagesInView) animImages.start("visible");
  }, [imagesInView, animImages]);
  useEffect(() => {
    if (listInView) animList.start("visible");
  }, [listInView, animList]);

  // Variants typed correctly
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageStack: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const bounceBtn: Variants = {
    rest: { y: 0, scale: 1 },
    hover: { y: -6, scale: 1.03, transition: { type: "spring", stiffness: 420, damping: 12 } },
    tap: { scale: 0.98 },
  };

  const items: Item[] = [
    {
      title: "PERSONALIZED PLANNING",
      desc: "Every event is tailored to reflect your style, culture, and preferences.",
    },
    {
      title: "CREATIVE DESIGN & DECOR",
      desc: "From vibrant floral themes to luxury setups, we design spaces that work.",
    },
    {
      title: "TRUSTED VENDOR NETWORK",
      desc: "Handpicked professionals ensure quality, reliability, and excellence.",
    },
    {
      title: "END-TO-END SUPPORT",
      desc: "We handle every detail—from the first consultation to the final goodbye.",
    },
  ];

  return (
    <section className="bg-[#F2E8C6] text-[#6e2f14] min-h-screen py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top contact area */}
        <div className="flex items-start justify-between gap-6 mb-12">
          <motion.div
            ref={topLeftRef}
            initial="hidden"
            animate={animTopLeft}
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <div className="rounded-lg overflow-hidden w-20 h-20 shadow-md">
              <Image src="/about1.png" alt="Event Planner" width={80} height={80} className="object-cover" />
            </div>

            <div>
              <p className="text-sm">Hi, I&apos;m</p>
              <p className="font-semibold text-xl">Event Planner</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/contact")}
              aria-label="Contact Me"
              className="ml-6 bg-[#C14600] text-white w-24 h-24 rounded-full flex items-center justify-center text-sm font-semibold shadow-lg"
            >
              CONTACT
            </motion.button>
          </motion.div>

          <motion.div
            ref={topRightRef}
            initial="hidden"
            animate={animTopRight}
            variants={fadeUp}
            className="hidden md:block"
          >
            <Image src="/about4.png" alt="Event Support" width={140} height={140} className="object-cover rounded-md shadow" />
          </motion.div>
        </div>

        {/* ABOUT US header */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-[#C14600] mb-12"
        >
          ABOUT US
        </motion.h2>

        {/* Two column about section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Images stack: positioned to match the design with a pleasing gap */}
          <motion.div
            ref={imagesRef}
            initial="hidden"
            animate={animImages}
            variants={imageStack}
            className="relative w-[320px] md:w-[420px] lg:w-[480px]"
          >
            {/* Primary rounded image (about2.png) */}
            <div className="rounded-2xl overflow-hidden w-full h-[320px] md:h-[380px] shadow-xl">
              <Image src="/about2.png" alt="Happy Man" width={800} height={800} className="object-cover w-full h-full" />
            </div>

            {/* Overlapping secondary image (about3.png) — arranged like original design */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -3, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-8 md:-left-10 bottom-[-48px] md:bottom-[-60px] w-[220px] md:w-[260px] h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-lg border-[6px] border-white"
            >
              <Image src="/about3.png" alt="Floral Decor" width={560} height={560} className="object-cover w-full h-full" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div ref={topRightRef} initial="hidden" animate={animTopRight} variants={fadeUp} className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">EVERY EVENT IS A STORY, AND WE&apos;RE HERE TO TELL YOURS.</h3>
            <p className="text-base md:text-lg mb-6 leading-relaxed text-[#8a3b1a]">
              At Amber Events, we believe every celebration should be as unique as the people behind it. No two stories are the same, and neither should be the way they are celebrated. That’s why we focus on capturing your personality, style, and vision to create events that truly reflect who you are.
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed text-[#8a3b1a]">
              From intimate weddings to grand corporate events, our team blends creativity, precision, and passion to deliver seamless experiences. Every detail is thoughtfully designed, ensuring that your special moments don’t just happen—they linger in the hearts of your guests long after the event ends.
            </p>

            <motion.button
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={bounceBtn}
              onClick={() => router.push("/about")}
              className="mt-4 self-start bg-[#C14600] text-white w-36 h-12 rounded-full flex items-center justify-center font-semibold shadow-lg"
              aria-label="Know more about us"
            >
              KNOW MORE
            </motion.button>
          </motion.div>
        </div>

        {/* What makes us different */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div ref={listRef} initial="hidden" animate={animList} variants={fadeUp} className="">
            <h4 className="text-4xl md:text-5xl font-bold leading-tight text-[#C14600]">WHAT MAKES US</h4>
            <h4 className="text-3xl md:text-4xl font-bold leading-tight mt-2">DIFFERENT</h4>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate={animList}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-8"
          >
            {items.map((it) => (
              <motion.li key={it.title} variants={fadeUp}>
                <div className="flex items-start gap-6">
                  <div className="w-3 h-3 mt-3 rounded-full bg-[#C14600]" />
                  <div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {}}
                        className="group relative inline-flex items-center gap-3 text-lg md:text-xl font-semibold focus:outline-none"
                        aria-label={`Expand ${it.title}`}
                      >
                        <span className="relative z-10">{it.title}</span>
                        {/* underline that grows only on hover/focus for the bold title */}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full group-focus:w-full transition-all duration-300 bg-[#C14600]" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm md:text-base text-[#6e2f14]">{it.desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Full width banner image */}
        {/* <motion.div
          className="mt-16 w-full overflow-hidden rounded-xl shadow-inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image src="/about5.png" alt="Decorated Venue" width={1920} height={600} className="w-full h-auto object-cover rounded-xl" />
        </motion.div> */}
      </div>
    </section>
  );
}
