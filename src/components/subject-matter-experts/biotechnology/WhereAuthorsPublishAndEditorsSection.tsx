"use client";

import React from "react";
import Image from "next/image";

export default function WhereAuthorsPublishAndEditorsSection() {
  const editors = [
    {
      name: "Dr. Ananya Verma",
      role: "PhD in Biotechnology",
      experience: "12 years of experience",
      manuscripts: "100+ manuscripts edited",
      avatar: "/images/subject-matter-experts/biotechnology/Dr.-Ananya-Singh.webp",
    },
    {
      name: "Dr. Michael Thompson",
      role: "PhD in Molecular Biotechnology",
      experience: "16 years of experience",
      manuscripts: "130+ manuscripts edited",
      avatar: "/images/subject-matter-experts/animal-science/victor.png",
    },
    {
      name: "Dr. Sofia Martinez",
      role: "PhD in Industrial Biotechnology",
      experience: "14 years of experience",
      manuscripts: "110+ manuscripts edited",
      avatar: "/images/subject-matter-experts/biotechnology/Dr.-Sofia-Martinez.webp",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-white font-sans text-gray-800 space-y-16">

      {/* SECTION 1: WHERE OUR AUTHORS PUBLISH */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Where Our Authors Publish
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-40 h-52 shrink-0 border border-gray-200 shadow-sm rounded overflow-hidden bg-gray-50">
            <Image
              src="/images/subject-matter-experts/biotechnology/sample-works-1-1.webp"
              alt="Biotechnology Advances Journal Cover"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
          <div className="space-y-2 text-xs md:text-sm">
            <h3 className="font-bold text-[#0d3630] text-sm md:text-base">
              Paper Title: Advances on the biosynthesis of ergothioneine using microbial chassis
            </h3>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Author:</span> Kang, X., Wu, P., Han, Z., & Luo, W.
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Journal Name:</span> Biotechnology Advances
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Publisher:</span> Elsevier
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Impact factor:</span> 12.5
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR EXPERT BIOTECHNOLOGY EDITORS */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Our Expert Biotechnology Editors
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editors.map((editor, idx) => (
            <div
              key={idx}
              className="bg-[#eaf1ee] border border-[#d3e2de] rounded-lg p-5 text-center space-y-4 shadow-sm"
            >
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src={editor.avatar}
                  alt={editor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#0d3630]">
                  {editor.name}
                </h3>
                <p className="text-xs text-gray-600 font-medium">
                  {editor.role}
                </p>
              </div>
              <div className="pt-2 border-t border-gray-300/60 flex justify-around text-xs text-gray-700 font-medium">
                <span>{editor.experience}</span>
                <span>•</span>
                <span>{editor.manuscripts}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}