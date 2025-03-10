"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatWeDoData } from "../data/whatWeDoData";

const WhatWeDo = () => {
  return (
    <section className="text-center py-6 lg:py-16 px-6 md:px-20 bg-white">
      <div className="flex justify-center items-center text-green-700 text-sm font-semibold tracking-wide">
        <span className="w-16 h-0.5 bg-blue-400 mr-4"></span>
        <span className="text-primary text-lg font-bold">WHAT WE DO</span>
        <span className="w-16 h-0.5 bg-blue-400 ml-4"></span>
      </div>

      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2] md:leading-[1.3] font-serif">
        Healing Through Hijama – <br className="hidden md:block" />
        Natural Wellness for Your Body
      </h2>

      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Hijama (Cupping Therapy) is a natural healing practice that detoxifies,
        improves circulation, and relieves pain. Our expert practitioners
        provide a safe, hygienic, and relaxing experience tailored to your
        wellness needs for a healthier life.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {whatWeDoData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
            className="relative flex flex-col group cursor-pointer rounded-lg overflow-hidden shadow-custom-shadow transition-all duration-500 dark:text-black border-b-8 border-primary card-container"
          >
            {/* Pseudo-elements for sliding overlays */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="overlay-top"></div>
              <div className="overlay-bottom"></div>
            </div>

            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="relative bg-white text-black p-6 overflow-hidden flex flex-col flex-1 justify-between">
              <h3 className="text-xl text-left font-semibold font-serif relative z-10 transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-base text-left flex-1 relative z-10 group-hover:text-white">
                {service.description}
              </p>
              <button className="mt-4 bg-primary text-white py-3 px-5 rounded-full hover:bg-white hover:text-hovershed border hover:border-hovershed transition relative z-10 hover:text-primary">
                Read More
              </button>
            </div>
          </motion.div>



        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-white border hover:border-hovershed hover:text-hovershed transition">
          More Services
        </button>
      </div>
    </section>
  );
};

export default WhatWeDo;