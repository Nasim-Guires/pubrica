"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

export default function TranslationEditingHero() {
  return (
    <section className="w-full bg-white font-sans text-slate-800">
      {/* Top Dark Banner Header */}
      <div className="w-full bg-[#182528] py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto border border-white/80 py-8 px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
            Translation with Editing Service
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Our experts help you overcome any language barriers. Translate your
            manuscript into English from Spanish, Japanese, Chinese, or Vice
            versa
          </p>
        </div>
      </div>

      {/* Main Content & Visual Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] leading-snug">
              Comprehensive translation and high-quality editing by language
              experts
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Showcase your ideas by translating papers into your vernacular
              language with the help of Pubrica&apos;s translators, who will
              ensure your novel ideas are not lost in the process of
              translation. Communicate your book ideas with the help of precise
              translation in high-quality English and get ready to publish your
              papers. Our translators work on dissertations, cover pages,
              textbooks, proposals, artwork, videos, and scientific and academic
              documents across various subjects.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-start text-xs sm:text-sm text-slate-800 font-medium">
                <span className="h-2 w-2 rounded-full bg-[#C00000] mt-1.5 mr-3 shrink-0" />
                <span>
                  Language Translations done by a bilingual{" "}
                  <a
                    href="#"
                    className="text-[#0056B3] hover:underline font-semibold"
                  >
                    subject matter expert
                  </a>
                </span>
              </li>

              <li className="flex items-start text-xs sm:text-sm text-slate-800 font-medium">
                <span className="h-2 w-2 rounded-full bg-[#C00000] mt-1.5 mr-3 shrink-0" />
                <span>500+ experts with precise translation skills</span>
              </li>

              <li className="flex items-start text-xs sm:text-sm text-slate-800 font-medium">
                <span className="h-2 w-2 rounded-full bg-[#C00000] mt-1.5 mr-3 shrink-0" />
                <span>
                  A 4-step translation and review process to deliver perfection
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
             <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Visual Column (Overlapping Images) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-sm sm:max-w-md h-[320px] sm:h-[360px]">
              {/* Top/Back Image (Book with pen) */}
              <div className="absolute top-0 left-0 w-[65%] h-[200px] sm:h-[220px] rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-100 z-10">
                <img
                  src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
                  alt="Open book with pen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom/Front Image (Hands writing/reviewing document) */}
              <div className="absolute bottom-0 right-0 w-[70%] h-[210px] sm:h-[230px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 z-20">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
                  alt="Reviewing academic documents"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Light Subtle Background Accent Shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-slate-100 rounded-full -z-0 opacity-60 filter blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
