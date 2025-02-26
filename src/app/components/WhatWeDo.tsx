"use client";

import Image from "next/image";

const WhatWeDo = () => {
    const services = [
        {
            title: "Sunnah Basic",
            description: "Starter plan that covers the basic Sunnah Cupping sites which help in general body maintenance and overall well-being...",
            image: "/treat1.webp",
        },
        {
            title: "Sunnah Plus",
            description: "More extensive plan that covers 9 (10 with 2nd Kahil) points including the basic Sunnah sites, promoting deeper healing and detoxification...",
            image: "/treat2.jpeg",
        },
        {
            title: "Vital Organ Cleanse",
            description: "Body maintenance plan that targets all vital bodily systems including the liver, kidneys, and digestive tract, enhancing your body's natural detox pathways...",
            image: "/treat3.jpeg",
        },
        {
            title: "Head Cupping",
            description: "Very beneficial and can treat an array of ailments related to the head such as headaches, sinus congestion, and stress relief...",
            image: "/treat4.jpeg",
        },
        {
            title: "Full Body Detox",
            description: "A deep cleansing therapy to remove toxins from the body, improving circulation and energy levels...",
            image: "/treat5.jpeg",
        },
        {
            title: "Sports Cupping",
            description: "Optimized for athletes, enhancing muscle recovery, reducing fatigue, and improving flexibility...",
            image: "/treat6.jpeg",
        },
        {
            title: "Migraine Relief",
            description: "Targeted cupping to reduce migraines and tension headaches, providing long-lasting relief...",
            image: "/treat7.jpeg",
        },
        {
            title: "Back Pain Therapy",
            description: "Effective relief for chronic back pain, muscle stiffness, and tension buildup...",
            image: "/treat8.png",
        },
    ];

    return (
        <section className="text-center py-16 px-6 md:px-20 bg-white">
            {/* Small Title with Styled Lines */}
            <div className="flex justify-center items-center text-green-700 text-sm font-semibold tracking-wide">
                <span className="w-16 h-0.5 bg-blue-400 mr-4"></span>
                <span className="text-primary text-lg font-bold">WHAT WE DO</span>
                <span className="w-16 h-0.5 bg-blue-400 ml-4"></span>
            </div>

            {/* Main Title */}
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2] md:leading-[1.3] font-serif">
                Healing Through Hijama – <br className="hidden md:block" />
                Natural Wellness for Your Body
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Hijama (Cupping Therapy) is a natural healing practice that detoxifies, improves circulation, and relieves pain.
                Our expert practitioners provide a safe, hygienic, and relaxing experience tailored to your wellness needs for a healthier life.
            </p>

            {/* Grid Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-500">
                        {/* Image Section with Hover Zoom */}
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                            />
                            {/* Top-to-bottom overlay */}
                            <div className="absolute inset-0 bg-gridimg opacity-0 group-hover:opacity-40 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500 pointer-events-none"></div>
                        </div>

                        {/* Text Section - No Fixed Height */}
                        <div className="relative bg-white p-6 overflow-hidden min-h-[220px] flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl text-left font-semibold font-serif">{service.title}</h3>
                                <p className="mt-3 text-base text-left">{service.description}</p>
                            </div>
                            <button className="mt-4 bg-primary text-white py-3 px-5 rounded-full hover:bg-white hover:text-hovershed border hover:border-hovershed transition">
                                Read More
                            </button>

                            {/* Bottom-to-top overlay (Always covers full height) */}
                            <div className="absolute inset-0 bg-gridinfo opacity-0 group-hover:opacity-40 translate-y-full group-hover:translate-y-0 transition-all duration-500 pointer-events-none"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Services Button */}
            <div className="mt-12 flex justify-center">
                <button className="bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-white border hover:border-hovershed hover:text-hovershed transition">
                    More Services
                </button>
            </div>
        </section>
    );
};

export default WhatWeDo;
