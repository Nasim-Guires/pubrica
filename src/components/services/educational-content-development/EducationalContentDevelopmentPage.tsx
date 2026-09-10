"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommonUploadButton from "@/components/common/CommonUploadButton";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";

export default function EducationalContentDevelopmentPage() {
  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans min-h-screen">
      {/* ==========================================
          1. HERO HEADER BANNER
      ========================================== */}
      <HeroBanner
        title="Educational Content Development"
        description="Pubrica offers comprehensive Educational Content Development services, crafting engaging and informative materials tailored to diverse learning needs."
        headingAs="h1"
      />

      {/* ==========================================
          2. MAIN CONTENT SECTION
      ========================================== */}
      <main className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Main Section Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b44] leading-tight">
            Educational Content Development Services – Engaging Learning,
            Empowering Knowledge
          </h2>

          <div className="flow-root">
            {/* Right-Floated Image */}
            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
              <div className="relative w-full max-w-md">
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

            {/* Narrative & Key Features */}
            <div className="space-y-5">
              {/* Sub-heading */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-600">
                Transforming Ideas into{" "}
                <span className="text-slate-700">
                  Impactful Learning Experiences
                </span>
              </h3>

              {/* Intro Paragraph */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                At Pubrica, we empower educators, institutions, and healthcare
                professionals with high-quality, evidence-based educational content
                designed to enhance learning, engagement, and knowledge retention.
                Our team of{" "}
                <Link
                  href="/subject-matter-experts"
                  className="text-blue-600 no-underline hover:no-underline"
                >
                  subject matter experts
                </Link>
                , instructional designers, and content specialists works
                collaboratively to deliver content that is accurate, impactful, and
                aligned with your learning objectives.
              </p>

              {/* Section Highlight Subheading */}
              <h4 className="text-sm sm:text-base font-bold text-[#0d3b44] pt-2">
                Pubrica Offers Educational Content Development Services for Education
                Providers, Software Developers, and Leaders Worldwide.
              </h4>

              {/* Bulleted List */}
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 list-disc pl-4 marker:text-red-600">
                <li>
                  Our subject content specialists, systems design (ISD) specialists,
                  content editors &amp; testers prepare all the required knowledge and
                  information for content development based on the need analysis,
                  target audience, and task and topic analysis
                </li>

                <li>
                  We have expertise across the globe that works closely with our
                  clients
                </li>

                <li>
                  Offer different e-learning (LMS) solutions such as gamification
                  /serious game, personalised learning, adaptive learning,
                  video-based learning, bite-sized learning, or peer-to-peer learning
                </li>

                <li>
                  We develop the bespoke solution as per the project scope.
                </li>

                <li>
                  A stringent but interactive process follows that involves regular
                  feedback.
                </li>

                <li>
                  We offer educational content for various subjects like Science,
                  History, Maths, Health, Law, Sociology, Political Science, etc
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-8 pt-2">
                <GetFreeQuoteButton />

                <Link
                  href="/uploads/educational-content-development/Educational-Content-Development.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white text-sm font-bold px-6 py-2 rounded hover:bg-white hover:text-black transition-colors"
                >
                  View Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
