
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    subtitle: "YOUR CREATIVE SPACE",
    title: "Find Your Perfect Space to Create Something Amazing.",
    description:
      "Discover photography studios, podcast rooms, music suites and creative workspaces. Book your perfect space and bring your ideas to life.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2000&q=90",
  },
  {
    subtitle: "CREATE WITHOUT LIMITS",
    title: "Create. Record. Inspire.",
    description:
      "Explore professional recording and podcast studios designed for creators, artists and storytellers.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=2000&q=90",
  },
  {
    subtitle: "YOUR SPACE. YOUR CREATIVITY.",
    title: "Turn Your Creative Ideas Into Reality.",
    description:
      "Find inspiring workspaces with professional equipment and everything you need to create something extraordinary.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2000&q=90",
  },
];

export default function Banner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="studio-banner overflow-hidden rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex min-h-[480px] items-center bg-cover bg-center px-6 py-16 sm:px-12 lg:px-16"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#080d25] via-[#10132bd9] to-[#10132b55]" />

              <div className="relative z-10 max-w-2xl text-white">
                <span className="mb-5 inline-block rounded-full border border-purple-400/50 bg-purple-500/20 px-4 py-2 text-sm font-semibold tracking-widest text-purple-300">
                  {slide.subtitle}
                </span>

                <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/studios"
                    className="rounded-lg bg-purple-600 px-7 py-3.5 font-semibold text-white transition hover:bg-purple-700"
                  >
                    Explore Studios →
                  </Link>

                  <Link
                    href="/studios"
                    className="rounded-lg border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-gray-900"
                  >
                    Host Your Space
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .studio-banner .swiper-button-next,
        .studio-banner .swiper-button-prev {
          color: white;
        }

        .studio-banner .swiper-pagination-bullet-active {
          background: #a855f7;
        }
      `}</style>
    </section>
  );
}
