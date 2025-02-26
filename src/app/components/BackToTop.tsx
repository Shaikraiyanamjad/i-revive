"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the page is scrolled down
  const checkScroll = () => {
    setIsVisible(window.scrollY > 300); // Show button if scrolled down more than 300px
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-4 bg-primary hover:bg-primary/80 z-50 text-white rounded-full shadow-lg transform transition-all ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Back to Top"
    >
      <FaArrowUpLong size={20} className="animate-bounce duration-2000"/> 
    </button>
  );
};

export default BackToTop;