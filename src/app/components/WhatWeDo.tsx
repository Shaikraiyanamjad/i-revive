"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const services = [
    {
      title: "Sunnah Basic",
      description:
        "Starter plan that covers the basic Sunnah Cupping sites which help in general body maintenance and overall well-being...",
      image: "/treat1.webp",
    },
    {
      title: "Sunnah Plus",
      description:
        "More extensive plan that covers 9 (10 with 2nd Kahil) points including the basic Sunnah sites, promoting deeper healing and detoxification...",
      image: "/treat2.jpeg",
    },
    {
      title: "Vital Organ Cleanse",
      description:
        "Body maintenance plan that targets all vital bodily systems including the liver, kidneys, and digestive tract, enhancing your body's natural detox pathways...",
      image: "/treat3.jpeg",
    },
    {
      title: "Head Cupping",
      description:
        "Very beneficial and can treat an array of ailments related to the head such as headaches, sinus congestion, and stress relief...",
      image: "/treat4.jpeg",
    },
    {
      title: "Full Body Detox",
      description:
        "A deep cleansing therapy to remove toxins from the body, improving circulation and energy levels...",
      image: "/treat5.jpeg",
    },
    {
      title: "Sports Cupping",
      description:
        "Optimized for athletes, enhancing muscle recovery, reducing fatigue, and improving flexibility...",
      image: "/treat6.jpeg",
    },
    {
      title: "Migraine Relief",
      description:
        "Targeted cupping to reduce migraines and tension headaches, providing long-lasting relief...",
      image: "/treat7.jpeg",
    },
    {
      title: "Back Pain Therapy",
      description:
        "Effective relief for chronic back pain, muscle stiffness, and tension buildup...",
      image: "/treat8.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-16 px-6 md:px-20 bg-white"
    >
      <div className="flex justify-center items-center text-green-700 text-sm font-semibold tracking-wide">
        <span className="w-16 h-0.5 bg-blue-400 mr-4"></span>
        <span className="text-primary text-lg font-bold">WHAT WE DO</span>
        <span className="w-16 h-0.5 bg-blue-400 ml-4"></span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2] md:leading-[1.3] font-serif"
      >
        Healing Through Hijama – <br className="hidden md:block" />
        Natural Wellness for Your Body
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
      >
        Hijama (Cupping Therapy) is a natural healing practice that detoxifies,
        improves circulation, and relieves pain. Our expert practitioners
        provide a safe, hygienic, and relaxing experience tailored to your
        wellness needs for a healthier life.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-500 dark:text-black"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="relative bg-white p-6 overflow-hidden min-h-[220px] flex flex-col justify-between">
              <div className="text-black">
                <h3 className="text-2xl text-left font-semibold font-serif">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-left">
                  {service.description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-primary text-white py-3 px-5 rounded-full hover:bg-white hover:text-hovershed border hover:border-hovershed transition"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-white border hover:border-hovershed hover:text-hovershed transition"
        >
          More Services
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default WhatWeDo;
