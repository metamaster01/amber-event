"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import gsap from "gsap";

// ✅ Supabase client (no lib file)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ContactSection() {
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // 🎬 GSAP Animations
  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".image-anim", {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const { error } = await supabase
        .from("contact-amber-2") // your table
        .insert([formData]);

      if (error) throw error;

      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        date: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={formRef}
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gradient-to-br from-[#fffafa] via-[#fff5f7] to-[#ffeef2]"
    >
      {/* Left Image */}
      <div className="relative flex justify-end w-full h-[400px] md:h-auto py-16">
        <div className="relative w-[75%] h-full image-anim">
          <Image
            src="/contact1.png"
            alt="Contact Background"
            fill
            priority
            className="object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-6 md:px-16 py-16">
        <div className="w-full max-w-md backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-xl border border-[#f3c6d3]">
          
          {/* Heading */}
          <p className="fade-up uppercase text-[#c94f7c] tracking-widest font-medium text-sm">
            Contact Form
          </p>

          <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#c94f7c] mb-10">
            Get in Touch
          </h2>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="fade-up w-full border-b border-[#c94f7c]/50 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#c94f7c] focus:scale-[1.01] transition-all duration-300 placeholder:text-gray-500"
            />

            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="fade-up w-full border-b border-[#c94f7c]/50 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#c94f7c] focus:scale-[1.01] transition-all duration-300"
            />

            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="fade-up w-full border-b border-[#c94f7c]/50 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#c94f7c] focus:scale-[1.01] transition-all duration-300 placeholder:text-gray-500"
            />

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="fade-up w-full border-b border-[#c94f7c]/50 bg-transparent py-3 text-gray-800 focus:outline-none focus:border-[#c94f7c] focus:scale-[1.01] transition-all duration-300 resize-none placeholder:text-gray-500"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="fade-up w-full bg-[#c94f7c] text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.03] hover:bg-[#b63d6c] active:scale-95 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <p className="fade-up text-sm text-center text-[#c94f7c]">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}