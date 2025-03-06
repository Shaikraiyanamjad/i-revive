"use client";

import React, { useEffect } from "react";
import { blogPosts } from "../data/ourBlogData";
import Image from "next/image";
import { FaRegCalendarAlt, FaRegComment } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const OurBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="px-6 md:px-16 py-16 bg-white text-center">
      <h2 className="text-primary text-2xl font-serif font-bold">OUR BLOG</h2>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 font-serif">
        Excellent Facility and High <br />
        Quality Therapy
      </h1>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Stay informed and inspired with our blog, where we share expert
        insights, wellness tips, and the latest trends in Hijama therapy.
        Explore topics to support your journey toward better health and
        well-being.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            data-aos="fade-up"
            data-aos-delay={post.id * 200}
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-hovershed"
          >
            <Image
              src={post.image}
              width={400}
              height={250}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-primary text-sm flex justify-between">
                <span className="flex items-center">
                  <FaRegCalendarAlt className="mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <FaRegComment className="mr-1" /> {post.comments} Comments
                </span>
              </p>
              <h3 className="text-3xl font-serif  text-gray-900 mt-4 text-left">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-6 text-lg text-left">
                {post.description}
              </p>
              <button className="mt-4 bg-primary text-white text-left px-4 py-2 rounded-full shadow-md hover:bg-hovershed transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
