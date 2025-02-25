"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonialsData";

export default function Testimonial() {
    const [index, setIndex] = useState(0);

    const nextTestimonial = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-primary py-20 text-center text-white">
            <h3 className="text-2xl font-serif font-semibold">TESTIMONIAL</h3>
            <h2 className="text-6xl font-serif text-black font-bold mt-2">What Clients are Say</h2>
            <div className="flex items-center justify-evenly mt-6 gap-6">
                <button onClick={prevTestimonial} className="bg-white p-3 rounded-full text-green-500 shadow-lg">
                    <FaArrowLeft />
                </button>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-2/3 max-w-xl"
                >
                    <Image src={testimonials[index].image} alt="User" width={100} height={100} className="w-50 h-25 rounded-full mx-auto mt-12 border-4 border-white" />
                    <p className="mt-4 text-lg font-light">{testimonials[index].text}</p>
                    <h4 className="mt-4 font-semibold">{testimonials[index].name}</h4>
                    <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-red-400" />
                        ))}
                    </div>
                </motion.div>
                <button onClick={nextTestimonial} className="bg-white p-3 rounded-full text-green-500 shadow-lg">
                    <FaArrowRight />
                </button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-red-500" : "bg-gray-300"}`}
                    />
                ))}
            </div>

        </div>
        
    );
}