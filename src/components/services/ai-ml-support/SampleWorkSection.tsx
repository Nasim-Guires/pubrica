"use client";

import React from "react";
import Image from "next/image";

export default function SampleWorkSection() {
  return (
    <section className="w-full bg-[#f8f9f9] py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-5xl mx-auto bg-[#f0fbf5] border border-emerald-100 rounded-xl p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image Card with Cyber Overlay */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs h-64 sm:h-72 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/ai-ml-support/Artificial-Intelligence-and-Machine-Learning-Services-Sample-Work.webp"
                alt="AI and Machine Learning Services Sample Work"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover"
              />
              {/* Futuristic Cyber Overlay Accent */}
              <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply" />
            </div>
          </div>

          {/* Right Column: Copy & Action Buttons */}
          <div className="md:col-span-7 space-y-6">
            {/* Top Block: Sample Work */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                Artificial Intelligence and Machine Learning Services Sample
                Work
              </h2>
              <button
                type="button"
                className="w-full sm:w-auto bg-black hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200"
              >
                Discover More
              </button>
            </div>

            {/* Bottom Block: Download Report */}
            <div className="pt-2 border-t border-emerald-200/60">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Explore our AI & ML modeling samples, created to demonstrate
                domain-focused algorithms, precise data handling, and adherence
                to scientific and regulatory standards, yielding impactful,
                publication-ready outcomes.
              </p>
              <button
                type="button"
                className="w-full sm:w-auto bg-black hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
