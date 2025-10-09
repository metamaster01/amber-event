"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#F2E8C6]">
      {/* Left Side: Image with reduced width and right shift */}
      <div className="relative flex justify-end w-full h-[400px] md:h-auto py-16">
        <div className="relative w-[75%] h-full ">
          <Image
            src="/contact1.png"
            alt="Contact Background"
            fill
            priority
            className="object-cover rounded-lg shadow-lg"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex items-center justify-center px-6 md:px-16 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <p className="uppercase text-[#b3421c] tracking-widest font-medium">
            Contact Form
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#b3421c] mb-10">
            Get in Touch
          </h2>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-[#b3421c] text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-[#b3421c] bg-transparent focus:outline-none py-2 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-[#b3421c] text-sm font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border-b border-[#b3421c] bg-transparent focus:outline-none py-2 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-[#b3421c] text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border-b border-[#b3421c] bg-transparent focus:outline-none py-2 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-[#b3421c] text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message"
                className="w-full border-b border-[#b3421c] bg-transparent focus:outline-none py-2 text-gray-700 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#b3421c] text-white px-6 py-2 font-medium hover:bg-[#962f13] transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
