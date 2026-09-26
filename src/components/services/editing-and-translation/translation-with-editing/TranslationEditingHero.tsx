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
      <section className="pt-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
              Comprehensive translation and high-quality editing by language experts
            </h2>

            <div className="flow-root">
              {/* Right Visual Column (Retaining exact rectangular aspect ratio, non-rounded design) */}
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center">
                  <div className="relative w-[90%] sm:w-[85%] md:w-[85%] lg:w-full aspect-[4/3] overflow-hidden z-10 mx-auto">
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

              <div className="space-y-5 text-slate-700">
                <p className="text-slate-600 text-base leading-relaxed">
                  Showcase your ideas by translating papers into your vernacular language with the help of Pubrica&apos;s translators, who will ensure your novel ideas are not lost in the process of translation. Communicate your book ideas with the help of precise translation in high-quality English and get ready to publish your papers. Our translators work on dissertations, cover pages, textbooks, proposals, artwork, videos, and scientific and academic documents across various subjects.
                </p>

                {/* Bullet Points */}
                <div className="pt-2 space-y-4">
                  <div className="space-y-4 pl-4">
                    <div className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">→</span>
                      <p className="text-base leading-relaxed font-medium text-slate-800">
                        Language Translations done by a bilingual{" "}
                        <a
                          href="/subject-matter-experts"
                          className="text-blue-600 font-medium no-underline hover:no-underline"
                        >
                          subject matter expert
                        </a>
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">→</span>
                      <p className="text-base leading-relaxed font-medium text-slate-800">
                        500+ experts with precise translation skills
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className="text-red-600 font-bold shrink-0">→</span>
                      <p className="text-base leading-relaxed font-medium text-slate-800">
                        A 4-step translation and review process to deliver perfection
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 mb-3">
                  <GetFreeQuoteButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
