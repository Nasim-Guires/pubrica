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

  const maxSlide = mobile ? testimonials.length - 1 : testimonials.length - 2;

  const next = () => {
    if (current >= maxSlide) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current === 0) {
      setCurrent(maxSlide);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0b3a57]">{title}</h2>

      <p className="mt-3 text-base md:text-lg max-w-4xl leading-7">
        {description}
      </p>

      <div className="relative mt-10 overflow-hidden">
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
              <div className="border border-[#0b3a57] rounded-xl shadow-md overflow-hidden bg-white">
                <div className="bg-gray-200 p-4 flex flex-col sm:flex-row gap-4">
                  <div className="relative w-28 h-32 mx-auto sm:mx-0 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                      sizes="112px"
                    />
                  </div>

                  <p className="text-sm md:text-base leading-7 text-gray-700">
                    "{item.quote}"
                  </p>
                </div>

                <div className="relative p-5 min-h-[120px]">
                  <h3 className="text-lg md:text-xl uppercase font-semibold">
                    {item.name}
                  </h3>

                  <p className="italic text-gray-600 text-sm md:text-base mt-2">
                    {item.designation}, {item.organization}
                  </p>

                  {item.flag ? (
                    <Image
                      src={item.flag}
                      alt=""
                      width={40}
                      height={28}
                      className="w-10 h-auto absolute right-5 bottom-5"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous */}

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
        >
          &#8249;
        </button>

        {/* Next */}

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
        >
          &#8250;
        </button>
      </div>

      {/* Dots */}

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index ? "bg-[#0b3a57]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
