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
    <div className="max-w-4xl mx-auto p-6 bg-white font-sans text-gray-800 space-y-10">
      {/* SECTION 1: EMERGING TRENDS & COLLAPSIBLE FUTURE TRENDS */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Emerging Trends in Augmented Reality
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            The development of cutting edge AR technology will allow for
            advances of immersive technology and digital transformation in
            many ways. Some trends include the following:
          </p>
        </div>

        {/* Collapsible Accordion Box */}
        <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => setIsTrendsOpen(!isTrendsOpen)}
            className="w-full flex items-center justify-between bg-[#0d3630] text-white py-3 px-4 text-left transition-colors hover:bg-[#0a2c27]"
          >
            <span className="text-xs md:text-sm font-semibold tracking-wide">
              Future Trends In Augmented Reality (AR)
            </span>
            {isTrendsOpen ? (
              <Minus className="w-4 h-4 text-white shrink-0" />
            ) : (
              <Plus className="w-4 h-4 text-white shrink-0" />
            )}
          </button>

          {isTrendsOpen && (
            <div className="p-5 space-y-3 text-xs md:text-sm text-gray-700 bg-white">
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                <li>Markerless AR and advanced tracking.</li>
                <li>AR within the metaverse; virtual collaboration.</li>
                <li>AR systems will include AI integrative components.</li>
                <li>Browser-based experiences; WebAR.</li>
                <li>AR in healthcare; surgical assistance.</li>
                <li>Industrial AR; training and maintenance.</li>
                <li>AR cloud; shared experiences.</li>
                <li>Real-time 3D content delivered throughout the world.</li>
                <li>IoT and smart device integration.</li>
              </ul>
              <p className="pt-2 text-gray-600 text-[11px] md:text-xs">
                Each of these trends represents a considerable change to the
                way in which we interact with digital content in the physical
                world.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: APPLICATIONS OF AUGMENTED REALITY */}
      <ApplicationsSection
        title="Applications of Augmented Reality"
        description="AR is a combination of multiple fields through the ability to add digital elements to existing/in-use physical space. Augmented Reality has many possible applications, some of which include the areas of:"
        applications={applications}
        imageSrc="/images/subject-matter-experts/augmented-reality/Applications-of-Augmented-Reality.webp"
        imageAlt="Applications of Augmented Reality"
      />
    </div>
  );
}