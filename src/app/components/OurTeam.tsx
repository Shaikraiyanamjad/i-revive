'use client';

import Image from 'next/image';
import { teamMembers } from '../data/teamData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function OurTeam() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 font-serif text-primary">Meet Our Team</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1300: { slidesPerView: 3},
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-10"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mt-4">{member.name}</h3>
                <p className="text-md md:text-lg text-gray-600">{member.role}</p>

                {/* New Occupation Field */}
                {member.occupation && (
                  <p className="text-md text-gray-500">{member.occupation}</p>
                )}

                {/* <p className="text-sm md:text-base text-gray-500 mt-2">{member.description}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
