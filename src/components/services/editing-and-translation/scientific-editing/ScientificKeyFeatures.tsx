"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiUsers,
  FiFileText,
  FiShield,
  FiCheckCircle,
  FiRefreshCw,
  FiSend,
} from "react-icons/fi";
interface FeatureCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const featuresData: FeatureCard[] = [
  {
    id: "editor-system",
    title: "3 Editor System",
    icon: <FiUsers className="w-6 h-6 text-[#0c373b]" />,
    content: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        One scientific editor and two native English-speaking editors will edit
        your manuscript.
      </p>
    ),
  },
  {
    id: "scientific-report",
    title: "Top Impact Scientific Report",
    icon: <FiFileText className="w-6 h-6 text-[#0c373b]" />,
    content: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        A simulated peer review to pre-empt journal reviewer criticisms and fix
        potential problems.
      </p>
    ),
  },
  {
    id: "plagiarism-check",
    title: "Plagiarism Check",
    icon: <FiShield className="w-6 h-6 text-[#0c373b]" />,
    content: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Powered by iThenticate, it provides a detailed report to help you
        prevent unintentional{" "}
        <Link
          href="/services/publication-support/plagiarism-check"
          className="text-cyan-700 hover:underline"
        >
          plagiarism
        </Link>
        .
      </p>
    ),
  },
  {
    id: "qa-check",
    title: "Quality Assurance Check",
    icon: <FiCheckCircle className="w-6 h-6 text-[#0c373b]" />,
    content: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Additional review by another expert from high-impact-factor journals for
        further improvements.
      </p>
    ),
  },
  {
    id: "revision-support",
    title: "Journal Revision Support",
    icon: <FiRefreshCw className="w-6 h-6 text-[#0c373b]" />,
    content: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Get unlimited revision support during journal peer review up to 365 days
        after delivery.
      </p>
    ),
  },
  {
    id: "submission-support",
    title: "Submission-ready Support",
    icon: <FiSend className="w-6 h-6 text-[#0c373b]" />,
    content: (
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        <Link
          href="/services/publication-support/formatting"
          className="text-cyan-700 hover:underline"
        >
          Journal Formatting
        </Link>
        , Cover Letter, and Certificate of Editing to expedite your journal
        submission.
      </p>
    ),
  },
];

export default function ScientificKeyFeatures() {
  // Store array of open card IDs to allow individual open/close toggling
  const [openCards, setOpenCards] = useState<string[]>([
    "editor-system",
    "scientific-report",
    "plagiarism-check",
    "qa-check",
    "revision-support",
    "submission-support",
  ]);

  const toggleCard = (id: string) => {
    setOpenCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0c373b] text-center mb-10 tracking-tight">
        Key Features of Our Scientific Editing Service
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {featuresData.map((feature) => {
          const isOpen = openCards.includes(feature.id);

          return (
            <div
              key={feature.id}
              className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Card Header Banner */}
              <button
                onClick={() => toggleCard(feature.id)}
                className="w-full bg-[#f0fdf4] hover:bg-[#e6f7ec] px-5 py-4 flex items-center justify-between transition-colors duration-200 text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 bg-emerald-100/60 rounded-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0c373b]">
                    {feature.title}
                  </h3>
                </div>
                <span className="text-slate-600 font-bold text-lg ml-2">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="p-5 bg-white border-t border-slate-100 animate-fadeIn">
                  {feature.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
