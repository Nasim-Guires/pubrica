"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

const IMG = "/images/editing-and-translation/scientific-editing";

// --- Types ---
interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

// --- Animated Counter Custom Hook ---
function useAnimatedCounter(
  target: number,
  duration: number = 2000,
  start: boolean = false,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth slowing down at the end (easeOutQuad)
      const easeProgress = 1 - (1 - progress) * (1 - progress);

      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, start]);

  return count;
}

// --- Counter Card Component ---
function CounterCard({
  item,
  isVisible,
}: {
  item: StatItem;
  isVisible: boolean;
}) {
  const count = useAnimatedCounter(item.target, 2200, isVisible);

  return (
    <div className="bg-[#0c373b] text-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center min-h-[140px]">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
        {count.toLocaleString()}
        {item.suffix}
      </h3>
      <p className="text-xs sm:text-sm font-medium text-emerald-100/90 tracking-wide">
        {item.label}
      </p>
    </div>
  );
}

// --- Main Consolidated Component ---
export default function ScientificEditingPage() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  // Trigger counters when scrolled into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const statsData: StatItem[] = [
    { id: "papers", target: 850000, suffix: "+", label: "Papers Edited" },
    { id: "authors", target: 260000, suffix: "+", label: "Authors Served" },
    { id: "subjects", target: 1200, suffix: "+", label: "Subjects Covered" },
    { id: "experts", target: 2000, suffix: "+", label: "Experts" },
    { id: "experience", target: 20, suffix: "+", label: "Years of Experience" },
  ];

  return (
    <main className="w-full font-sans text-slate-800 bg-white">
      {/* ==================== 1. HEADER BANNER ==================== */}
      <section className="w-full bg-[#032b21] text-white py-10 px-4 md:px-8 text-center border-b border-emerald-900/30">
        <div className="max-w-4xl mx-auto border border-slate-300/40 p-6 rounded-sm">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 tracking-wide">
            Scientific Editing Services
          </h1>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-light">
            Improve Your Chances of Publication with our Pubrica’s Scientific
            Editing Service
          </p>
        </div>
      </section>

      {/* ==================== 2. HERO & KEY HIGHLIGHTS ==================== */}
      <section className="max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] leading-tight">
              Boost Your Manuscript’s Impact with Expert Scientific Editing
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Gain publication success with customized editing by subject matter
              experts with leading journal experience.
            </p>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Tailored for submission to high-impact-factor journals, Top Impact
              Scientific Editing Service employs three PhD/Master’s editors for
              in-depth editing to maximize your chances for high-impact
              publication.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                <span className="text-red-500 font-bold mr-2 text-base">•</span>
                <span>
                  <Link
                    href="/services/editing-and-translation/scientific-editing/scientific-developmental-editing-high-impact-journals"
                    className="text-cyan-700 hover:underline font-medium"
                  >
                    Scientific developmental editing
                  </Link>{" "}
                  by an editor who has edited/reviewed for journals like{" "}
                  <em>Nature</em>,{" "}
                  <em>The New England Journal of Medicine (NEJM)</em>, and{" "}
                  <em>The Lancet</em>.
                </span>
              </li>
              <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                <span className="text-red-500 font-bold mr-2 text-base">•</span>
                <span>
                  In-depth technical review of your manuscript by editors with
                  20+ years of experience.
                </span>
              </li>
              <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                <span className="text-red-500 font-bold mr-2 text-base">•</span>
                <span>
                  A simulated{" "}
                  <Link
                    href="/services/publication-support/peer-review-pre-submission"
                    className="text-cyan-700 hover:underline font-medium"
                  >
                    peer review
                  </Link>{" "}
                  to help you improve your manuscript.
                </span>
              </li>
              <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                <span className="text-red-500 font-bold mr-2 text-base">•</span>
                <span>
                  Submission-ready:{" "}
                  <Link
                    href="/services/publication-support/plagiarism-services"
                    className="text-cyan-700 hover:underline font-medium"
                  >
                    Plagiarism
                  </Link>{" "}
                  Check, Journal Formatting, & Cover Letter.
                </span>
              </li>
              <li className="flex items-start text-xs md:text-sm text-slate-700 leading-relaxed">
                <span className="text-red-500 font-bold mr-2 text-base">•</span>
                <span>
                  365-Day journal revision support to help you sail through peer
                  review.
                </span>
              </li>
            </ul>

            <div className="pt-4">
             <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] h-[280px] sm:h-[320px]">
              {/* Offset Dark Green Frame Backdrop */}
              <div className="absolute inset-0 bg-[#0c373b] rounded-2xl transform -translate-x-3 translate-y-3 -z-10" />

              {/* Main Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src={`${IMG}/Scientific-Editing.webp`}
                  alt="Scientific Editing Microscope Analysis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. OVERVIEW & SERVICE CARDS GRID ==================== */}
      <section className="bg-slate-50/60 py-12 md:py-16 px-4 md:px-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
              Scientific Editing Services for Advanced Scholarly Publications
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
              Pubrica provides{" "}
              <Link
                href="/insights/skeletal-muscle-mass-index-versus-bioelectrical-impedance-analysis"
                className="text-cyan-700 hover:underline font-medium"
              >
                scientific editing services
              </Link>{" "}
              for a wide range of academic and professional documents, including
              manuscripts, dissertations, academic books, regulatory documents,
              communications, and patient education materials related to
              evidence-based medicine. Our experienced editors are skilled in
              both full language editing and critical review of the scientific
              content.
            </p>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
              We also integrate{" "}
              <Link
                href="/services/publication-support"
                className="text-cyan-700 hover:underline font-medium"
              >
                translation and publication support
              </Link>{" "}
              to help authors overcome language barriers and ensure that their
              work meets international journal standards.
            </p>
            <p className="text-xs md:text-sm font-semibold text-slate-700">
              Here is the overview of our expert services:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-100 rounded-lg text-[#0c373b] group-hover:bg-[#0c373b] group-hover:text-white transition-colors duration-300">
                  <Image
                    src={`${IMG}/Advanced-Data-Management.png`}
                    alt="Advanced Data Management"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="pr-2">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">
                    Advanced Data Management
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our team specializes in organizing and structuring large,
                    complex datasets, ensuring that they are...
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#0c373b] rounded-l-md" />
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-100 rounded-lg text-[#0c373b] group-hover:bg-[#0c373b] group-hover:text-white transition-colors duration-300">
                  <Image
                    src={`${IMG}/Customized-Editing-Strategies.png`}
                    alt="Customized Editing Strategies"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="pr-2">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">
                    Customized Editing Strategies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We tailor our editing techniques to meet the specific needs
                    of your research, considering both...
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#0c373b] rounded-l-md" />
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-100 rounded-lg text-[#0c373b] group-hover:bg-[#0c373b] group-hover:text-white transition-colors duration-300">
                  <Image
                    src={`${IMG}/In-depth-Scientific-Assessment.png`}
                    alt="In-depth Scientific Assessment"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="pr-2">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">
                    In-depth Scientific Assessment
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Beyond basic editing, we delve into fundamental aspects of
                    your research, such as{" "}
                    <span className="text-cyan-700 font-medium">
                      experimental
                    </span>{" "}
                    design...
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#0c373b] rounded-l-md" />
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-100 rounded-lg text-[#0c373b] group-hover:bg-[#0c373b] group-hover:text-white transition-colors duration-300">
                  <Image
                    src={`${IMG}/Comprehensive-Statistical-Analysis.png`}
                    alt="Comprehensive Statistical Analysis"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="pr-2">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">
                    Comprehensive Statistical Analysis
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our experts leverage both traditional and innovative machine
                    learning algorithms to conduct...
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#0c373b] rounded-l-md" />
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-100 rounded-lg text-[#0c373b] group-hover:bg-[#0c373b] group-hover:text-white transition-colors duration-300">
                  <Image
                    src={`${IMG}/Publication-Support.png`}
                    alt="Publication Support"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="pr-2">
                  <h3 className="font-bold text-sm text-slate-900 mb-2">
                    Publication Support
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    With Pubrica, you gain a partner that supports you through
                    all phases of the publication process. From...
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#0c373b] rounded-l-md" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. STATS COUNTER CARDS ==================== */}
      <section className="max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-8 space-y-10">
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-left max-w-5xl">
          Pubrica’s commitment to providing high-quality{" "}
          <Link
            href="/insights/phenotypic-variations-of-atopic-dermatitis-a-systemic-review-of-dupilumab-efficacy-and-safety"
            className="text-cyan-700 hover:underline font-medium"
          >
            research paper editing services
          </Link>{" "}
          ensures that your research documents are not only well-prepared for
          submission but also stand a higher chance of being published. Our
          strategic, insightful edits and robust data handling significantly
          contribute to advancing scientific knowledge within the medical, life
          science, and healthcare communities.
        </p>

        {/* Dynamic Increasing Counter Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {statsData.map((item) => (
            <CounterCard key={item.id} item={item} isVisible={hasAnimated} />
          ))}
        </div>
      </section>
    </main>
  );
}
