"use client";

import { useState } from "react";
import Image from "next/image";
import { mainServicesData } from "@/lib/services/editing-and-translation";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-6 bg-white px-6 max-w-7xl mx-auto font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#0A4D4A] mb-3">Our Services</h2>

        <p className="text-[14px] text-slate-600 max-w-5xl mb-12 leading-relaxed">
          At Pubrica, we provide end-to-end{" "}
          <a href="/services/editing-and-translation" className="text-blue-600 font-normal no-underline hover:no-underline">
            Editing and Translation Services
          </a>{" "}
          designed to refine, enhance, and globalize your content. From
          manuscripts and theses to books and multilingual translations, our
          expert team ensures clarity, precision, and publication-ready quality.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Images */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[360px] pt-4 select-none">
            {/* Background Circle */}
            <div className="absolute w-64 h-64 bg-slate-100 rounded-full left-12 top-12 -z-10 opacity-70" />

            {/* Top Image */}
            <div className="absolute top-0 left-4 w-60 z-10 -rotate-3">
              <div className="relative w-full h-44 rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
                  alt="Working on laptop"
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-4 right-4 w-64 z-20 rotate-2">
              <div className="relative w-full h-48 rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400"
                  alt="Editing paper"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 border-t border-[#0A4D4A] divide-y divide-slate-200">
            {mainServicesData.map((service, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index}>
                  <button
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    className="w-full py-3.5 flex items-center gap-4 text-left transition"
                  >
                    <span className="text-[#0A4D4A] text-sm font-medium w-3 flex justify-center">
                      {isOpen ? "−" : "+"}
                    </span>

                    <span
                      className={`text-[15px] font-semibold tracking-wide transition ${
                        isOpen
                          ? "text-[#0A4D4A]"
                          : "text-slate-800 hover:text-[#0A4D4A]"
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-7 pb-5 pr-4 space-y-3">
                      <p className="text-[13.5px] text-slate-700 leading-relaxed">
                        {service.description}
                      </p>

                      {service.subtext && (
                        <p className="text-[13px] italic text-slate-500">
                          {service.subtext}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
