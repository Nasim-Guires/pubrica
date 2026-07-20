"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { SERVICES_CATEGORIES } from "@/lib/data-whatwedo";

export default function WhatWeDo() {
  // Defaulting to 'physician-writing' to mirror your screenshot state
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof SERVICES_CATEGORIES>("physician-writing");

  const selectedCategoryData = SERVICES_CATEGORIES[activeCategory];

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top Header Information Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1a4d4a] font-display whitespace-nowrap">
              What We Do
            </h2>
            <div className="hidden md:block h-[1.5px] bg-gray-800 w-full mt-2" />
          </div>

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-sans">
            <p>
              We provide a complete range of services that cover all aspects of
              research and publication. The services include scientific and
              medical writing, editing, peer review, data extraction, and
              analysis. We provide our services for the academic, publishing,
              and clinical research sectors.
            </p>
            <p>
              We engage in a full-scale commitment to your research, developing
              a thesis from the beginning to the end. Having a dedicated team of
              editors, subject matter experts, and statisticians, we deliver
              highly professional results. We also offer support midway through
              projects, helping you complete your abandoned studies.
            </p>
          </div>
        </div>

        {/* Master Container Grid Box */}
        <div className="max-w-7xl mx-auto border border-gray-200 rounded-tl-3xl rounded-tr-xl overflow-hidden shadow-sm flex flex-col lg:flex-row min-h-[600px]">
          {/* LEFT COLUMN: Sidebar Navigation Panel */}
          <div className="w-full lg:w-[320px] bg-[#1a4d4a] flex flex-col shrink-0">
            {/* Header Badge */}
            <div className="p-5 border-b border-[#245d5a]">
              <h3 className="text-white text-lg font-semibold tracking-wide">
                Select Your Need
              </h3>
            </div>

            {/* Navigation Tabs List */}
            <nav className="flex flex-col flex-grow">
              {Object.entries(SERVICES_CATEGORIES).map(([key, category]) => {
                const isActive = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key as any)}
                    className={`w-full text-left px-5 py-4 text-sm font-medium border-b border-[#245d5a] transition-all duration-150 ${
                      isActive
                        ? "bg-white text-gray-900 border-r-0 font-semibold"
                        : "text-gray-100 hover:bg-[#153e3b]"
                    }`}
                  >
                    {category.title}
                  </button>
                );
              })}
              {/* Dark Spacer Box matching structural height from layout */}
              <div className="flex-grow bg-[#1a4d4a] min-h-[100px]" />
            </nav>
          </div>

          {/* RIGHT COLUMN: Filterable Data Grid Wrapper */}
          <div className="flex-grow bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Dynamic Inner Description Header */}
              <div className="border-b border-gray-200 pb-4 mb-8">
                <p className="text-sm font-medium text-gray-800">
                  Choose Our Services to meet your Publication Goals
                </p>
              </div>

              {/* Dynamic Service Grid Cards */}
              {selectedCategoryData?.subServices &&
              selectedCategoryData.subServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedCategoryData.subServices.map((sub, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between bg-white hover:border-slate-300 transition-colors"
                    >
                      <div>
                        <span className="text-xs text-gray-400 block mb-1 font-sans">
                          {sub.tag}
                        </span>
                        <h4 className="text-lg font-bold text-slate-700 font-display mb-3">
                          {sub.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                          {sub.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4">
                        <Link
                          href={`/enquire?service=${sub.slug}`}
                          className="text-gray-900 font-medium text-xs underline underline-offset-4 decoration-gray-400 hover:text-[#1a4d4a] transition-colors inline-block"
                        >
                          Enquire Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 text-gray-400 text-sm italic">
                  No services listed under this tab yet.
                </div>
              )}
            </div>

            {/* Read More Section Action Trigger */}
            <div className="mt-12 text-left">
              <Link href="/services">
                <Button className="font-bold text-xs uppercase bg-[#0b2927] hover:bg-[#123633] text-white rounded-full px-8 py-3 tracking-wider">
                  READ MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
