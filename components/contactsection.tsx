"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from "@supabase/supabase-js";

gsap.registerPlugin(ScrollTrigger);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SERVICES = [
  "Wedding Events",
  "Corporate Events",
  "Jalwa Function",
  "Catering Service",
];

const BUDGETS = [
  "Under ₹1 Lakh",
  "₹1 – 3 Lakhs",
  "₹3 – 5 Lakhs",
  "₹5 – 10 Lakhs",
  "₹10 – 20 Lakhs",
  "Above ₹20 Lakhs",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

// ── Floating label input ──────────────────────────────────────────────────────
function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 font-medium
          ${lifted
            ? "top-2 text-[10px] tracking-widest uppercase text-pink-500"
            : "top-1/2 -translate-y-1/2 text-[15px] text-gray-400"
          }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
        {required && <span className="text-pink-400 ml-0.5">*</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ""}
        className={`w-full bg-white border-2 rounded-2xl px-4 pb-3 pt-6 text-gray-800 text-[15px]
          focus:outline-none transition-all duration-200
          ${focused ? "border-pink-400 shadow-md shadow-pink-100" : "border-gray-200 hover:border-gray-300"}
        `}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      />
    </div>
  );
}

// ── Floating label select ─────────────────────────────────────────────────────
function FloatingSelect({
  label,
  name,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 font-medium
          ${lifted
            ? "top-2 text-[10px] tracking-widest uppercase text-pink-500"
            : "top-1/2 -translate-y-1/2 text-[15px] text-gray-400"
          }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
        {required && <span className="text-pink-400 ml-0.5">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-white border-2 rounded-2xl px-4 pb-3 pt-6 text-gray-800 text-[15px]
          focus:outline-none appearance-none transition-all duration-200
          ${focused ? "border-pink-400 shadow-md shadow-pink-100" : "border-gray-200 hover:border-gray-300"}
          ${!value ? "text-gray-400" : "text-gray-800"}
        `}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {/* chevron */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

// ── Floating label textarea ───────────────────────────────────────────────────
function FloatingTextarea({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 font-medium
          ${lifted
            ? "top-2 text-[10px] tracking-widest uppercase text-pink-500"
            : "top-5 text-[15px] text-gray-400"
          }`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Special Message
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className={`w-full bg-white border-2 rounded-2xl px-4 pb-4 pt-8 text-gray-800 text-[15px]
          focus:outline-none resize-none transition-all duration-200
          ${focused ? "border-pink-400 shadow-md shadow-pink-100" : "border-gray-200 hover:border-gray-300"}
        `}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const infoItemsRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // ── Entrance animations ────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image
      gsap.fromTo(imgRef.current,
        { scale: 1.08, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        }
      );

      // Left panel slides in
      gsap.fromTo(leftRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        }
      );

      // Right form slides in
      gsap.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
          delay: 0.1,
        }
      );

      // Info items stagger
      if (infoItemsRef.current) {
        const items = infoItemsRef.current.querySelectorAll(".info-item");
        gsap.fromTo(items,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: infoItemsRef.current, start: "top 82%", once: true },
            delay: 0.3,
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Success pop animation ──────────────────────────────────────────────────
  useEffect(() => {
    if (status === "success" && successRef.current) {
      gsap.fromTo(successRef.current,
        { scale: 0.88, opacity: 0, y: 24 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(2.2)" }
      );
    }
  }, [status]);

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name || !form.email || !form.phone || !form.service) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const { error } = await supabase.from("contact_amber").insert([{
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        service: form.service,
        budget: form.budget || null,
        message: form.message.trim() || null,
      }]);

      if (error) throw error;
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setErrorMsg("Something went wrong. Please call or email us directly.");
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#F9F5F0] overflow-hidden py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:min-h-[90vh] items-stretch">

        {/* ══ LEFT PANEL ═══════════════════════════════════════════════════════ */}
        <div ref={leftRef} className="relative flex flex-col overflow-hidden md:rounded-none">

          {/* Background image */}
          <div ref={imgRef} className="absolute inset-0 z-0">
            <Image
              src="/contact1.png"
              alt="Amber Events contact"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Gradient overlay - darkens bottom for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-800/40 to-pink-600/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-transparent" />
          </div>

          {/* Content over image */}
          <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-12 pb-12 md:pb-16 pt-24 md:pt-0">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-[2px] bg-white/60 rounded-full" />
              <span className="text-white/70 text-[10px] font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Get In Touch
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold text-white leading-[1.0] tracking-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Have a question?
              <br />
              <span className="italic font-normal text-pink-200"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}>
                Ask us!
              </span>
            </h2>

            <p className="text-white/70 text-[15px] leading-relaxed mb-10 max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Have questions or service inquiries? We&apos;re here to listen and respond quickly. Your vision is our priority.
            </p>

            {/* Info items */}
            <div ref={infoItemsRef} className="flex flex-col gap-5">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  value: "Nagpur, Maharashtra",
                  href: null,
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 7008334010",
                  href: "tel:+917008334010",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "ambercaterer.isd@gmail.com",
                  href: "mailto:ambercaterer.isd@gmail.com",
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="info-item flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href}
                        className="text-white font-medium text-sm hover:text-pink-200 transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ RIGHT PANEL — Form ════════════════════════════════════════════════ */}
        <div
          ref={rightRef}
          className="bg-white flex items-center justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16"
        >
          <div className="w-full max-w-md">

            {status === "success" ? (
              /* ── Success state ─────────────────────────────────────── */
              <div ref={successRef} className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-pink-50 border-4 border-pink-200 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-9 h-9 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  We&apos;ve Got Your Message!
                </h3>
                <p className="text-gray-400 text-[15px] mb-8 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Thank you for reaching out to Amber Events. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-pink-500 font-semibold text-sm hover:text-pink-600 transition-colors underline underline-offset-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              /* ── Form ──────────────────────────────────────────────── */
              <>
                <div className="mb-8">
                  <p className="text-pink-500 text-[10px] font-bold tracking-[0.22em] uppercase mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Let&apos;s Plan Together
                  </p>
                  <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-gray-900 leading-tight tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Plan Your{" "}
                    <span className="italic font-normal text-pink-500"
                      style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.1em" }}>
                      Event
                    </span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                  {/* Name */}
                  <FloatingInput
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    required
                  />

                  {/* Email */}
                  <FloatingInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                  />

                  {/* Phone */}
                  <FloatingInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />

                  {/* Service + Budget side by side on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingSelect
                      label="Select Service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      options={SERVICES}
                      required
                    />
                    <FloatingSelect
                      label="Price Budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      options={BUDGETS}
                    />
                  </div>

                  {/* Message */}
                  <FloatingTextarea
                    label="Special Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-500 text-sm px-4 py-3 rounded-2xl"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative overflow-hidden w-full bg-pink-500 text-white font-semibold py-4 rounded-2xl text-[15px] tracking-wide shadow-lg shadow-pink-200/60 hover:shadow-pink-300/70 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {/* Hover fill layer */}
                    <span className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === "loading" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending your request…
                        </>
                      ) : (
                        <>
                          Submit Request
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                </form>

                {/* Trust note */}
                <p className="text-center text-gray-400 text-xs mt-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  🔒 Your information is safe with us. We never share your data.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}