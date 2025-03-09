"use client";

import { motion } from "framer-motion";
import React from "react";

const LadiesHijama = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center"
        >
          Best Hijama Centre for Ladies in Hyderabad – i-Revive
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl sm:text-xl text-gray-700 leading-relaxed"
        >
          Looking for the best Hijama centre for ladies in Hyderabad? At
          i-Revive, we provide professional cupping therapy designed exclusively
          for women, ensuring a safe, relaxing, and rejuvenating experience. Our
          expert practitioners follow Islamic Hijama principles and use sterile,
          high-quality equipment to promote natural healing and detoxification.
        </motion.p>

        {/* Why Choose i-Revive */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6"
        >
          <h2 className="text-3xl sm:text-2xl font-bold text-gray-800 mb-4">
            Why Choose i-Revive?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4 text-2xl sm:text-xl">
            <li>
              ✅{" "}
              <span className="font-semibold">
                Best Hijama Centre for Ladies Near Me –
              </span>{" "}
              Trusted by women for a comfortable and private experience.
            </li>
            <li>
              ✅ <span className="font-semibold">Expert Practitioners –</span>{" "}
              Certified professionals ensuring safe and effective therapy.
            </li>
            <li>
              ✅ <span className="font-semibold">Holistic Healing –</span> Helps
              with migraines, joint pain, stress relief, and overall well-being.
            </li>
            <li>
              ✅{" "}
              <span className="font-semibold">
                Affordable Cupping Centre Near Me –
              </span>{" "}
              High-quality Hijama therapy at competitive prices At i-Revive, we
              believe in natural healing through authentic Hijama therapy,
              helping women restore balance, relieve pain, and boost immunity.
              If you’re searching for the best Hijama centre for ladies near me
              or an affordable cupping centre near me, we are here to serve you.
            </li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 bg-blue-100 p-8 rounded-xl shadow-md text-center"
        >
          <p className="text-3xl sm:text-2xl font-semibold text-gray-800">
            📍 Visit us today!
          </p>
          <p className="text-3xl sm:text-2xl font-semibold text-gray-800">
            📍 Book your appointment online:{" "}
            <a
              href="https://www.i-revive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline hover:text-blue-800 transition-all"
            >
              www.i-revive.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LadiesHijama;
