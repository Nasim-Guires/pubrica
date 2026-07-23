"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMessageSquare, FiGitCommit, FiMusic } from "react-icons/fi";

// --- Types ---
interface ComplianceCard {
  title: string;
  logoSrc: string;
}

interface ComplianceData {
  journalGuidelines: ComplianceCard[];
  clinicalEthical: ComplianceCard[];
}

// --- Mock Data ---
const complianceData: ComplianceData = {
  journalGuidelines: [
    {
      title: "Elsevier",
      logoSrc: "/images/video-abstract/compliance/elsevier.png",
    },
    {
      title: "Springer",
      logoSrc: "/images/video-abstract/compliance/springer.png",
    },
    { title: "Wiley", logoSrc: "/images/video-abstract/compliance/wiley.png" },
    {
      title: "New England Journal of Medicine",
      logoSrc: "/images/video-abstract/compliance/nejm.png",
    },
  ],
  clinicalEthical: [
    {
      title: "Committee on Publication Ethics (COPE)",
      logoSrc: "/images/video-abstract/compliance/cope.png",
    },
    {
      title: "Consolidated Standards of Reporting Trials (CONSORT)",
      logoSrc: "/images/video-abstract/compliance/consort.png",
    },
    {
      title: "World Association of Medical Editors (WAME)",
      logoSrc: "/images/video-abstract/compliance/wame.png",
    },
    {
      title: "International Committee of Medical Journal Editors (ICMJE)",
      logoSrc: "/images/video-abstract/compliance/icmje.png",
    },
  ],
};

export default function VideoAbstractOverview() {
  const [activeTab, setActiveTab] = useState<"journal" | "clinical">("journal");

  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* ==================== 1. DARK BANNER ==================== */}
      <section className="w-full bg-[#032b21] text-white py-10 px-4 md:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">
            Focus on Your Research — We’ll Present It Visually
          </h2>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed max-w-4xl mx-auto">
            With Pubrica, get expertly crafted, journal-aligned video summaries
            of your published work, designed to boost visibility, engagement,
            and scholarly impact—without the hassle.
          </p>
        </div>
      </section>

      {/* ==================== 2. WHO USES & SERVICES OFFERED ==================== */}
      <section className="max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Who uses video abstracts */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0c373b] mb-4">
                Who uses video abstracts?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                  <span className="text-red-500 font-bold mr-2 text-base">
                    •
                  </span>
                  <span>
                    <strong>Authors and editors</strong> aiming to publicize
                    their published work to a wide audience for high impact.
                  </span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                  <span className="text-red-500 font-bold mr-2 text-base">
                    •
                  </span>
                  <span>
                    <strong>Corporations</strong> seeking interesting ways to
                    explain the features and benefits of a new product and/or
                    service, e.g., a pharma company launching a new drug or a
                    device maker launching a new device.
                  </span>
                </li>
              </ul>
            </div>

            {/* Services you receive */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0c373b] mb-4">
                Services you receive
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                  <span className="text-red-500 font-bold mr-2 text-base">
                    •
                  </span>
                  <span>A presentation in MS PowerPoint format</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                  <span className="text-red-500 font-bold mr-2 text-base">
                    •
                  </span>
                  <span>A separate voiceover audio file</span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                  <span className="text-red-500 font-bold mr-2 text-base">
                    •
                  </span>
                  <span>
                    An embedded code (for sharing on social media platforms such
                    as YouTube)
                  </span>
                </li>
                <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                  <span className="text-red-500 font-bold mr-2 text-base">
                    •
                  </span>
                  <span>
                    A high-quality animated video (3–5 minutes), including
                    English voiceover (in your choice of accent), English
                    subtitles, and background music, in your preferred file
                    format (MP4, AVI, WAV, etc.)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Overlapping Image Collage */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[380px] h-[320px] sm:h-[380px]">
              {/* Back Soft Background Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/60 rounded-full blur-xl -z-10" />

              {/* Top Left Image */}
              <div className="absolute top-0 left-0 w-56 h-48 sm:w-64 sm:h-52 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/video-abstract/overview/editor-working.jpg"
                  alt="Video Abstract Editing"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Right Overlapping Image */}
              <div className="absolute bottom-2 right-0 w-56 h-48 sm:w-64 sm:h-52 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/video-abstract/overview/video-production.jpg"
                  alt="Video Abstract Production"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. KEY FEATURES ==================== */}
      <section className="max-w-6xl mx-auto py-8 px-4 md:px-8">
        <h3 className="text-xl md:text-2xl font-bold text-[#0c373b] mb-6">
          Key Features of Video Abstract Service
        </h3>

        <div className="bg-[#f0faf5] p-4 md:p-6 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="bg-white border border-[#008099] p-6 text-center rounded-sm flex flex-col items-center">
              <div className="mb-4 text-[#0c373b]">
                <FiMessageSquare className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h4 className="font-bold text-[#0c373b] text-sm md:text-base mb-3">
                HD animations and subtitles
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High definition animations and subtitles demonstrate each
                procedure, statistical findings, and research results in an
                influential and logical way.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-[#008099] p-6 text-center rounded-sm flex flex-col items-center">
              <div className="mb-4 text-[#0c373b]">
                <FiGitCommit className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h4 className="font-bold text-[#0c373b] text-sm md:text-base mb-3">
                5-Step Process Model
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Developed using a 5-Step Process Model with a team of PhD
                subject matter experts, professional animators, voice recorders,
                and video editors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-[#008099] p-6 text-center rounded-sm flex flex-col items-center">
              <div className="mb-4 text-[#0c373b]">
                <FiMusic className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h4 className="font-bold text-[#0c373b] text-sm md:text-base mb-3">
                Soundtrack
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We add suitable background music and a voiceover that contains a
                brief explanation of the video content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. COMPLIANCE & STANDARDS ==================== */}
      <section className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h3 className="text-xl md:text-2xl font-bold text-[#0c373b] mb-2">
          Our Compliance and Guideline Standards
        </h3>
        <p className="text-xs md:text-sm text-slate-600 mb-6">
          At Pubrica, every video abstract is guaranteed to follow academic
          publishing protocols and journal-specific guidelines.
        </p>

        {/* Tab Switcher Bar */}
        <div className="w-full bg-[#135a5a] rounded-full p-1 max-w-4xl mx-auto mb-10 flex items-center">
          <button
            onClick={() => setActiveTab("journal")}
            className={`flex-1 py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
              activeTab === "journal"
                ? "bg-[#0b3c3d] text-white shadow-md"
                : "text-slate-200 hover:text-white"
            }`}
          >
            Journal-specific Guideline
          </button>
          <button
            onClick={() => setActiveTab("clinical")}
            className={`flex-1 py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
              activeTab === "clinical"
                ? "bg-[#0b3c3d] text-white shadow-md"
                : "text-slate-200 hover:text-white"
            }`}
          >
            Clinical and Ethical Compliance
          </button>
        </div>

        {/* Compliance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {(activeTab === "journal"
            ? complianceData.journalGuidelines
            : complianceData.clinicalEthical
          ).map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-sm p-6 bg-white flex flex-col items-center justify-between h-[200px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-24 flex items-center justify-center">
                <Image
                  src={item.logoSrc}
                  alt={item.title}
                  width={140}
                  height={60}
                  className="object-contain max-h-20"
                />
              </div>
              <h4 className="text-center font-bold text-xs text-slate-800 leading-snug mt-2">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 5. SAMPLE WORK CALLOUT ==================== */}
      <section className="max-w-6xl mx-auto pb-16 px-4 md:px-8">
        <div className="bg-[#f0faf5] rounded-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column Image */}
          <div className="md:col-span-5 relative h-64 md:h-80 rounded-sm overflow-hidden shadow-sm">
            <Image
              src="/images/video-abstract/overview/sample-work-editor.jpg"
              alt="Video Abstract Sample Work"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column Details */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#0c373b] mb-3">
                Video Abstract Sample Work
              </h4>
              <button className="bg-black hover:bg-slate-800 text-white font-medium text-xs md:text-sm px-8 py-2.5 rounded-full transition-colors duration-300">
                Discover More
              </button>
            </div>

            <div className="pt-2">
              <h4 className="text-lg md:text-xl font-bold text-[#0c373b] mb-2">
                Download the full Report Now
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4 max-w-xl">
                Check out our video abstract samples, expertly produced to meet
                your journal’s submission guidelines, visual quality
                requirements, and publication timeframes.
              </p>
              <button className="bg-black hover:bg-slate-800 text-white font-medium text-xs md:text-sm px-8 py-2.5 rounded-full transition-colors duration-300">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
