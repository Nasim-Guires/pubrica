"use client";

import React, { useState } from "react";
import {
  Plus,
  Minus,
  Building2,
  Stethoscope,
  ShoppingBag,
  Factory,
  Gamepad2,
  Home,
  Compass,
  Megaphone,
} from "lucide-react";
import Image from "next/image";
import ApplicationsSection, { ApplicationItem } from "@/components/common/ApplicationsSection";

// Define the type to allow an optional icon property


export default function AugmentedRealityTrendsAndApps() {
  // State for collapsible "Future Trends in Augmented Reality (AR)" section
  const [isTrendsOpen, setIsTrendsOpen] = useState(false);

  // --- APPLICATIONS LIST WITH ICONS ---
  const applications: ApplicationItem[] = [
    {
      title: "Educational Institutions",
      desc: "(using interactive material and virtual laboratories)",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Educational-Institutions.webp",
      icon: Building2,
    },
    {
      title: "Healthcare Organisations",
      desc: "(surgical assistance and training for practitioners)",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Healthcare-Organisations.webp",
      icon: Stethoscope,
    },
    {
      title: "Retailers",
      desc: "(offering the ability to see how clothing will look if worn)",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Retailers.webp",
      icon: ShoppingBag,
    },
    {
      title: "Industrial Companies",
      desc: "(maintenance and/or training using AR)",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Industrial-Companies.webp",
      icon: Factory,
    },
    {
      title: "Gaming/Entertainment Companies",
      desc: "(having a virtual experience (gaming))",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Gaming_Entertainment-Companies.webp",
      icon: Gamepad2,
    },
    {
      title: "Architectural Firms or Real Estate",
      desc: "(to walk through a property without being physically present at that site)",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Architectural-Firms-or-Real-Estate.webp",
      icon: Home,
    },
    {
      title: "Tourism Industry",
      desc: "(navigating with AR through physical locations and visualising previous events)",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Tourism-Industry.webp",
      icon: Compass,
    },
    {
      title: "Marketing and Advertising",
      desc: "(the ability to interact with a company through various media types)",
      iconSrc:
        "/images/subject-matter-experts/augmented-reality/Marketing-and-Advertising.webp",
      icon: Megaphone,
    },
  ];


  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 bg-white font-sans text-gray-800 space-y-16">
      {/* SECTION 1: EMERGING TRENDS & COLLAPSIBLE FUTURE TRENDS */}
      <section className="space-y-8">
        {/* Section Header (Centered layout) */}
        <div className="space-y-4">
          {/* Main Heading & Line (Centered) */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3630]">
              Emerging Trends in Augmented Reality
            </h2>
            <div className="w-12 h-1 bg-[#0d3630] mt-2 rounded-full" />
          </div>

          {/* Subheading / Description (Centered) */}
          <p className="text-sm md:text-base text-gray-600 max-w-4xl text-center mx-auto leading-relaxed">
            The development of cutting edge AR technology will allow for
            advances of immersive technology and digital transformation in
            many ways. Some trends include the following:
          </p>
        </div>

        {/* Collapsible Accordion Box */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all">
          <button
            onClick={() => setIsTrendsOpen(!isTrendsOpen)}
            className="w-full flex items-center justify-between bg-[#0d3630] text-white py-4 px-6 text-left transition-colors hover:bg-[#0a2c27]"
          >
            <span className="text-sm md:text-base font-semibold tracking-wide">
              Future Trends In Augmented Reality (AR)
            </span>
            {isTrendsOpen ? (
              <Minus className="w-5 h-5 text-white shrink-0 ml-4" />
            ) : (
              <Plus className="w-5 h-5 text-white shrink-0 ml-4" />
            )}
          </button>

          {isTrendsOpen && (
            <div className="p-8 space-y-6 text-sm md:text-base text-gray-700 bg-gray-50/50">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5 leading-relaxed">
                <li>Markerless AR and advanced tracking.</li>
                <li>AR within the metaverse; virtual collaboration.</li>
                <li>AR systems will include AI integrative components.</li>
                <li>Browser-based experiences; WebAR.</li>
                <li>AR in healthcare; surgical assistance.</li>
                <li>Industrial AR; training and maintenance.</li>
                <li>AR cloud; shared experiences.</li>
                <li>Real-time 3D content delivered throughout the world.</li>
                <li className="md:col-span-2">IoT and smart device integration.</li>
              </ul>
              <p className="pt-4 border-t border-gray-200 text-gray-500 text-xs md:text-sm">
                Each of these trends represents a considerable change to the
                way in which we interact with digital content in the physical
                world.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: APPLICATIONS OF AUGMENTED REALITY */}
      <section className="pt-4">
        <ApplicationsSection
          title="Applications of Augmented Reality"
          description="AR is a combination of multiple fields through the ability to add digital elements to existing/in-use physical space. Augmented Reality has many possible applications, some of which include the areas of:"
          applications={applications}
          imageSrc="/images/subject-matter-experts/augmented-reality/Applications-of-Augmented-Reality.webp"
          imageAlt="Applications of Augmented Reality"
        />
      </section>
    </div>
  );
}