"use client";
import Image from "next/image";
const AboutUs = () => {
    return (
        <section className="py-12 md:py-16 px-6 md:px-20 bg-white">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2">
                <Image
                src="/about1.avif"
                alt="About Us"
                width={600} // Adjust width as needed
                height={400} // Adjust height as needed
                className="w-full rounded-lg shadow-lg"
            />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-snug font-serif text-left">
                        About <span className="text-primary">Us</span>
                    </h2>
                    <h2 className="mt-6 text-2xl md:text-3xl lg:text-5xl text-gray-800 leading-loose text-left">
                       Best Hijama Centre in Hyderabad
                    </h2>
                    <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-loose text-left">      
                    Welcome to i-Revive. At i-Revive, we offer a targeted range of Hijama Cupping-based wellness plans coupled with the indispensable goodness of Gliding Cupping & Deep Tissue Stroking under the most hygienic setups while fully honouring the individual&apos;s privacy. 
                    </p>
                    <div className="mt-8 flex justify-start">
                        <button className="bg-primary text-white text-xl font-semibold py-4 px-8 rounded-full hover:bg-white border hover:border-hovershed hover:text-hovershed transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
