"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function EducationalContentDevelopmentPage() {
  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans min-h-screen">
      {/* ==========================================
          1. HERO HEADER BANNER
      ========================================== */}
      <section className="bg-[#0b2427] text-white py-6 px-4 sm:px-6 lg:px-8 border-b-2 border-[#163a3f]">
        <div className="max-w-5xl mx-auto border border-gray-400/40 p-8 text-center rounded-sm bg-[#0b2427]/80 shadow-inner">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Educational Content Development
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Pubrica offers comprehensive Educational Content Development
            services, crafting engaging and informative materials tailored to
            diverse learning needs.
          </p>
        </div>
      </section>

      {/* ==========================================
          2. MAIN CONTENT SECTION
      ========================================== */}
      <main className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-4">
          Educational Content Development Services – Engaging Learning,
          Empowering Knowledge
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
          {/* LEFT COLUMN: Narrative & Key Features */}
          <div className="lg:col-span-7 space-y-6">
            {/* Sub-heading */}
            <h3 className="text-base sm:text-lg font-semibold text-gray-600">
              Transforming Ideas into{" "}
              <span className="text-slate-700">
                Impactful Learning Experiences
              </span>
            </h3>

            {/* Intro Paragraph */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              At Pubrica, we empower educators, institutions, and healthcare
              professionals with high-quality, evidence-based educational
              content designed to enhance learning, engagement, and knowledge
              retention. Our team of{" "}
              <Link
                href="/subject-matter-experts"
                className="text-sky-600 hover:underline"
              >
                subject matter experts
              </Link>
              , instructional designers, and content specialists works
              collaboratively to deliver content that is accurate, impactful,
              and aligned with your learning objectives.
            </p>

            {/* Section Highlight Subheading */}
            <h4 className="text-xs sm:text-sm font-bold text-[#0d3b44] pt-2">
              Pubrica Offers Educational Content Development Services for
              Education Providers, Software Developers, and Leaders Worldwide.
            </h4>

            {/* Bulleted List */}
            <ul className="space-y-3 text-xs sm:text-sm text-gray-700 list-none">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2 text-base leading-none">
                  •
                </span>
                <span>
                  Our subject content specialists, systems design (ISD)
                  specialists, content editors &amp; testers prepare all the
                  required knowledge and information for content development
                  based on the need analysis, target audience, and task and
                  topic analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2 text-base leading-none">
                  •
                </span>
                <span>
                  We have expertise across the globe that works closely with our
                  clients
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2 text-base leading-none">
                  •
                </span>
                <span>
                  Offer different e-learning (LMS) solutions such as
                  gamification /serious game, personalised learning, adaptive
                  learning, video-based learning, bite-sized learning, or
                  peer-to-peer learning
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2 text-base leading-none">
                  •
                </span>
                <span>
                  We develop the bespoke solution as per the project scope.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2 text-base leading-none">
                  •
                </span>
                <span>
                  A stringent but interactive process follows that involves
                  regular feedback.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2 text-base leading-none">
                  •
                </span>
                <span>
                  We offer educational content for various subjects like
                  Science, History, Maths, Health, Law, Sociology, Political
                  Science, etc
                </span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <GetFreeQuoteButton />
              <Link
                href="/uploads/educational-content-development/Educational-Content-Development.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none"              >
                View Brochure
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Framed Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-md">
              {/* Dark offset background backdrop */}
              <div className="absolute inset-0  rounded-2xl transform -translate-x-3 translate-y-3" />

              {/* Image Container */}
              <div className="relative z-10  overflow-hidden">
                <Image
                  src="/images/educational-content-development/poster-presentation.webp"
                  alt="Educational content development"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
