"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, X } from "lucide-react";
import { motion, Variants } from "framer-motion";

type NavItem = { label: string; href?: string };

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function FooterSection() {
  const company: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const explore: NavItem[] = [
    { label: "Service", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Testimonials", href: "#" },
  ];

  const legal: NavItem[] = [
    { label: "Terms of use", href: "#" },
    { label: "Privacy policy", href: "#" },
  ];

  return (
    <footer className="bg-[#FFF3EC] text-[#C64E2C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12">
        {/* Top area: logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10">
          {/* Logo & Follow (col-span 4 on md) */}
          <motion.div
            className="md:col-span-3 col-span-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-col items-start gap-4">
              <div className="w-[170px]">
                <Image src="/logo.png" alt="Amber Logo" width={170} height={56} priority className="object-contain" />
              </div>

              <p className="text-sm text-[#9b3b1f] max-w-[220px] leading-snug">
                Crafting unforgettable weddings, social gatherings, and corporate events with creativity and passion.
              </p>

              <div className="mt-2">
                <h4 className="text-base font-semibold mb-3 text-[#C64E2C]">Follow Us</h4>
                <div className="flex gap-3">
                  {/* Circular icon buttons */}
                  <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
                    <Facebook size={14} />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
                    <Instagram size={14} />
                  </a>
                  <a href="#" aria-label="X" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
                    <X size={14} />
                  </a>
                  <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-full border border-[#C64E2C] flex items-center justify-center text-[#C64E2C] hover:bg-[#C64E2C] hover:text-white transition-colors">
                    <Youtube size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company column */}
          <motion.div
            className="md:col-span-2 col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-3 text-sm">
              {company.map((item) => (
                <Link key={item.label} href={item.href ?? "#"} className="group inline-block">
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Explore column */}
          <motion.div
            className="md:col-span-2 col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <nav className="flex flex-col gap-3 text-sm">
              {explore.map((item) => (
                <Link key={item.label} href={item.href ?? "#"} className="group inline-block">
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact info column */}
          <motion.div
            className="md:col-span-3 col-span-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-semibold mb-4">Contact info</h4>

            <div className="text-sm text-[#7a2f19] space-y-3">
              <a href="mailto:info@amber.com" className="block group">
                <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
                  info@amber.com
                </span>
              </a>
              <a href="tel:+91***********" className="block">
                +91***********
              </a>
            </div>
          </motion.div>

          {/* Legal column */}
          <motion.div
            className="md:col-span-2 col-span-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-3 text-sm">
              {legal.map((item) => (
                <Link key={item.label} href={item.href ?? "#"} className="group inline-block">
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C64E2C] after:transition-all after:duration-300 group-hover:after:w-full">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F2D8CB] mt-2"></div>

        {/* Bottom row: copyright left, support right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <p className="text-sm text-[#9b3b1f]">amber @ 2025. All rights Reserved.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <a href="mailto:support@amber.com" className="text-sm text-[#C64E2C] hover:underline">
              support@amber.com
            </a>
          </motion.div>
        </div>

        {/* Footer banner / decorative image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4 pb-8 flex justify-center"
        >
          <div className="w-full max-w-[1100px]">
            <Image src="/footer1.png" alt="Footer Banner" width={1100} height={140} className="w-full h-auto object-cover rounded-md" priority />
          </div>
        </motion.div> */}
      </div>
    </footer>
  );
}
