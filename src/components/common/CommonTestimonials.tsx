"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Testimonial {
  image: string;
  quote: string;
  name: string;
  designation: string;
  organization: string;
  flag?: string;
}

interface TestimonialsProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export default function CommonTestimonial({
  title,
  description,
  testimonials,
}: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total slides / max index configuration
  // Mobile: 1 item per view -> max index is testimonials.length - 1 (5 dots for 5 items)
  // Desktop: 2 items per view -> exactly 3 dots (indices 0, 1, 2 representing groupings)
  const maxSlide = mobile ? testimonials.length - 1 : Math.max(0, testimonials.length - 2);

  const next = () => {
    setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  // Autoplay functionality: moves automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [maxSlide]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 min-w-0 w-full overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b2c]">{title}</h2>

      <p className="mt-3 text-sm md:text-base text-gray-700 max-w-5xl leading-relaxed">
        {description}
      </p>

      <div className="relative mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (mobile ? 100 : 50)}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-3"
            >
              <div className="border border-gray-400 rounded-xl bg-white p-5 shadow-sm min-h-[300px] flex flex-col justify-between">
                {/* Upper Gray Box */}
                <div className="bg-[#dcdcdc] rounded-lg p-5 flex flex-col sm:flex-row gap-5 items-center">
                  <div className="relative w-36 h-28 shrink-0 bg-white p-1 rounded border border-gray-300">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="144px"
                    />
                  </div>

                  <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-normal">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* Bottom Details Row */}
                <div className="flex justify-between items-end pt-4 px-1">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 uppercase tracking-wide">
                      — {item.name}
                    </h3>

                    <p className="italic text-xs md:text-sm text-gray-600 mt-0.5">
                      {item.designation}, {item.organization}
                    </p>
                  </div>

                  {item.flag && (
                    <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-gray-200">
                      <Image
                        src={item.flag}
                        alt="country flag"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 shadow border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white text-gray-700 z-10"
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 shadow border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white text-gray-700 z-10"
        >
          &#8250;
        </button>
      </div>

      {/* Pagination Squares / Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: mobile ? testimonials.length : 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 border border-[#0b3b2c] transition-all ${
              current === index ? "bg-[#0b3b2c]" : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}