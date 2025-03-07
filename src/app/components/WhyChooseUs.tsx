"use client";
import { motion } from "framer-motion"; // Ensure motion is correctly imported
import { FaUserMd, FaBriefcaseMedical, FaHeartbeat, FaUsers } from "react-icons/fa"; // Ensure icons are imported correctly


const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-6 lg:py-12 px-6 md:px-20 bg-white text-center"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary tracking-widest uppercase">
          Why Choose Us
        </h3>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug mt-2 font-serif">
          Why Choose Us? Reclaim Your <br className="hidden md:block" /> Health
          and Vitality.
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Choose i-revive for expert care, a safe environment, and personalized
          Hijama sessions that promote natural healing and balance. Your
          wellness is our priority.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {[
          {
            icon: (
              <FaUserMd className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110" />
            ),
            title: "Licensed Therapist",
            description:
              "Our licensed therapists are expertly trained in Hijama, ensuring safe, effective treatments tailored to your wellness needs.",
          },
          {
            icon: (
              <FaBriefcaseMedical className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110" />
            ),
            title: "Personalized Treatment",
            description:
              "We offer personalized Hijama treatments tailored to your specific wellness needs, ensuring the best results for your health and comfort.",
          },
          {
            icon: (
              <FaHeartbeat className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110" />
            ),
            title: "Therapy Goals",
            description:
              "Our therapy goals are to promote natural healing, relieve pain, improve circulation, and restore balance to enhance your overall wellness.",
          },
          {
            icon: (
              <FaUsers className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110" />
            ),
            title: "Experienced Staff",
            description:
              "Our experienced staff is skilled in Hijama therapy, committed to delivering safe, effective treatments tailored to your individual needs for optimal health and well-being.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden border border-green-400 rounded-xl p-8 flex flex-col items-center text-left shadow-sm transition group"
          >
            {/* Background overlay animation */}
            <div className="absolute inset-0 bg-green-400/20 w-0 h-full left-0 top-0 transition-all duration-500 ease-in-out group-hover:w-full"></div>

            {/* Content stays on top */}
            <div className="relative z-10">
              {feature.icon}
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900 transition-colors duration-500">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed mt-3 transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
