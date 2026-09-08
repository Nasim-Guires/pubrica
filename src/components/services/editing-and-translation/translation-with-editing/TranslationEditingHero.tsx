"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import React from "react";

export default function TranslationEditingHero() {
  return (
    <section className="w-full bg-white font-sans text-slate-800">
      {/* Top Dark Banner Header */}
      <HeroBanner
        title="Translation with Editing Service"
        description="Our experts help you overcome any language barriers. Translate your manuscript into English from Spanish, Japanese, Chinese, or Vice versa"
        headingAs="h1"
      />

      {/* Main Content & Visual Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 lg:py-7">
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
                    href="/subject-matter-experts"
                    className="text-blue-600 no-underline hover:no-underline"
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
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Right Visual Column (Overlapping Images) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center">
              {/* Image Container with natural aspect ratio and zero margin spacing */}
              <div className="relative w-[90%] sm:w-[85%] md:w-[85%] aspect-[4/3] overflow-hidden z-10 mx-auto">
                <Image
                  src="/images/editing-and-translation/translation-with-editing/Comprehensive-translation-and-high-quality-editing-by-language-experts.webp"
                  alt="Comprehensive translation and high-quality editing by language experts"
                  fill
                  sizes="(max-width: 640px) 90vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
