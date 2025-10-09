"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Shalini Gupta",
    event: "Birthday Event",
    text: "From décor to coordination, everything was handled with care and style. My daughter's birthday party was colourful, vibrant, and so memorable. Thank you for making it special!",
    image: "/client1.png",
  },
  {
    name: "Sneha & Karan",
    event: "Wedding Event",
    text: "Planning a wedding can be overwhelming, but Amber Events took away all the stress. They listened to our ideas, added their creative touch, and gave us the most unforgettable celebration.",
    image: "/client2.png",
  },
];

export default function ClientSection() {
  return (
    <section className="bg-[#f7ebcf] py-20 px-6 md:px-20 lg:px-32">
      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#b3421c] leading-tight">
          WHAT MY <br /> CLIENTS SAY
        </h2>
        <p className="uppercase text-[#b3421c] tracking-wide font-medium mt-2">
          Worked with over 50 clients around the world
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Top Section: Image + Heading */}
            <div className="flex items-start gap-5">
              <Image
                src={t.image}
                alt={t.name}
                width={90}
                height={90}
                className="rounded-md object-cover"
              />
              <div>
                <Quote className="text-[#b3421c] w-10 h-10" />
                <h3 className="text-xl font-semibold text-[#b3421c] mt-2 leading-snug">
                  Captured Moments, <br /> Cherished Words.
                </h3>
                <p className="text-sm text-[#b3421c] mt-1">
                  — {t.name} &nbsp;– {t.event}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-800 mt-5 leading-relaxed text-[15px]">
              “{t.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
