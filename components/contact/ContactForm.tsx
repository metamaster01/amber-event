"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from "@supabase/supabase-js";

gsap.registerPlugin(ScrollTrigger);

// ── Supabase client (reads from .env) ─────────────────────────────────────────
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

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  // ── Entrance animations ────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          delay: 0.1,
        }
      );

      // Info item stagger
      const items = leftRef.current?.querySelectorAll(".info-item");
      if (items) {
        gsap.fromTo(items,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            delay: 0.3,
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Success animation ─────────────────────────────────────────────────────
  useEffect(() => {
    if (status === "success" && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(2)" }
      );
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.service) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    try {
      const { error } = await supabase.from("contact_amber").insert([
        {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim(),
          service: form.service,
          budget: form.budget || null,
          message: form.message.trim() || null,
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setForm(INITIAL);
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again or call us directly.");
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Info panel ───────────────────────────────────────── */}
          <div ref={leftRef}>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 leading-tight tracking-tight mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Have a question?
              <br />
              <span className="text-pink-500">Ask us!</span>
            </h2>
            <p
              className="text-gray-400 text-sm leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Have questions, feedback, or service inquiries? We&apos;re here to
              listen and respond quickly. Your input is important to us, and we
              look forward to connecting with you!
            </p>

            <div className="flex flex-col gap-8">
              {/* Address */}
              <div className="info-item flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Address
                  </div>
                  <div
                    className="text-gray-700 font-medium text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Nagpur, Maharashtra
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="info-item flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Phone Number
                  </div>
                  <a
                    href="tel:+917008334010"
                    className="text-gray-700 font-medium text-sm hover:text-pink-500 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +91 7008334010
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="info-item flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:amber@gmail.com"
                    className="text-gray-700 font-medium text-sm hover:text-pink-500 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    amber@gmail.com
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="info-item flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Socials
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { label: "Instagram", href: "https://instagram.com" },
                      { label: "Twitter", href: "https://twitter.com" },
                      { label: "Facebook", href: "https://facebook.com" },
                    ].map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-pink-500 transition-colors font-medium"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ───────────────────────────────────────────── */}
          <div ref={rightRef}>
            {status === "success" ? (
              <div
                ref={successRef}
                className="rounded-[24px] bg-pink-50 border border-pink-100 p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Request Submitted!
                </h3>
                <p
                  className="text-gray-500 text-sm mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-pink-500 font-semibold text-sm hover:text-pink-600 transition-colors underline underline-offset-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                {/* Name */}
                <FormField label="Name" required>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rida Sharma"
                    className={inputClass}
                    style={inputStyle}
                  />
                </FormField>

                {/* Email */}
                <FormField label="Email" required>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="rida@gmail.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </FormField>

                {/* Phone */}
                <FormField label="Phone Number" required>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                    style={inputStyle}
                  />
                </FormField>

                {/* Service */}
                <FormField label="Select Service" required>
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10 ${!form.service ? "text-gray-400" : "text-gray-800"}`}
                      style={inputStyle}
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </FormField>

                {/* Budget */}
                <FormField label="Price Budget">
                  <div className="relative">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10 ${!form.budget ? "text-gray-400" : "text-gray-800"}`}
                      style={inputStyle}
                    >
                      <option value="">Select Price Budget</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </FormField>

                {/* Message */}
                <FormField label="Special Message">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision, date, guest count..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </FormField>

                {/* Error */}
                {status === "error" && (
                  <div
                    className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-500 text-sm px-4 py-3 rounded-xl"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative overflow-hidden mt-2 w-full bg-pink-500 text-white font-semibold py-4 rounded-full text-[15px] tracking-wide shadow-lg shadow-pink-200/60 hover:shadow-pink-300/70 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs font-semibold text-gray-500 uppercase tracking-widest"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
        {required && <span className="text-pink-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-[#F9F5F0] border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-200";

const inputStyle = { fontFamily: "'DM Sans', sans-serif" };
