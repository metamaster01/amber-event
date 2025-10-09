"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Planning",
    quote: "Crafting your happily ever after",
    description:
      "Your wedding is more than just a day—it's a lifetime memory. From venue selection and décor to entertainment and guest management, we take care of every detail so you can focus on love and laughter.",
    icon: "/service1.png",
  },
  {
    title: "Destination Weddings",
    quote: "Love beyond borders",
    description:
      "Dreaming of saying “I do” at a beach, palace, or hilltop resort? We specialize in creating magical destination weddings with flawless execution, ensuring a stress-free celebration no matter where you are.",
    icon: "/service2.png",
  },
  {
    title: "Corporate Events",
    quote: "Where business meets celebration",
    description:
      "From product launches and conferences to gala dinners, we design corporate events that are polished, impactful, and memorable. Our professional touch ensures your brand shines through every detail.",
    icon: "/service1.png",
  },
  {
    title: "Social Celebrations",
    quote: "Every milestone, a masterpiece",
    description:
      "Life’s milestones deserve to be celebrated in style. Whether it’s a birthday, anniversary, or cultural festivity, we bring vibrant décor, seamless planning, and joyful energy to make it unforgettable.",
    icon: "/service2.png",
  },
];

const ServiceSection: FC = () => {
  return (
    <section className="bg-[#F2E8C6] py-12 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="mb-10 text-left max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C14600] tracking-wide">
          SERVICE
        </h2>
        <p className="text-lg text-[#C14600] mt-2 tracking-widest">
          WHAT I OFFER
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-[#C14600] text-white p-3 md:p-4 shadow-md flex flex-col items-center justify-center aspect-square gap-y-3 text-center rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <Image
              src={service.icon}
              alt={service.title + " icon"}
              width={44}
              height={44}
              className="object-contain"
            />

            {/* Content */}
            <h3 className="text-base md:text-lg font-bold">
              {service.title}
            </h3>
            <p className="italic text-sm md:text-base">
              “{service.quote}”
            </p>
            <p className="text-sm md:text-base leading-snug line-clamp-4">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
