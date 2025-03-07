"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/img133.JPG",
    heading: "Experience the Ancient Healing of Hijama!",
    paragraph: "If you think wellness is expensive, then how about illness?",
  },
  {
    image: "/banner1.jpeg",
    heading: "Experience the Ancient Healing of Hijama!",
    paragraph: "If you think wellness is expensive, then how about illness?",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "-100%", opacity: 0 }} // Start from above
          animate={{ y: "0%", opacity: 1 }} // Slide to position
          exit={{ y: "100%", opacity: 0 }} // Move down on exit
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slides[index].image}
            alt="Hero Image"
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0} // Prioritize the first image
          />
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-20">
        <h1 className="font-bold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6rem] leading-tight font-serif">
          {slides[index].heading}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.5rem] mb-8 max-w-5xl leading-relaxed">
          {slides[index].paragraph}
        </p>

        <Link href="/">
          <button className="bg-primary text-white px-6 py-3 rounded-full text-[clamp(1rem, 2vw, 1.5rem)] hover:bg-white hover:text-hovershed border border-hovershed hover:border-hovershed transition">
            Book Appointment
          </button>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between px-6 z-30">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="bg-primary hover:bg-hovershed text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <ArrowLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="bg-primary hover:bg-hovershed text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <ArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
