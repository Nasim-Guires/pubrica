"use client";

import React from "react";
import Image from "next/image";

export default function AuthorPublicationsAndEditors() {
  const editors = [
    {
      name: "Dr. Robert Klein",
      role: "PhD in Computer Vision",
      experience: "15 years of experience",
      manuscripts: "200+ manuscripts edited",
      avatar: "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp",
    },
    {
      name: "Dr. Ananya Iyer",
      role: "PhD in Human-Computer Interaction",
      experience: "12 years of experience",
      manuscripts: "160+ manuscripts edited",
      avatar: "/images/subject-matter-experts/algorithm/Dr.-Ananya-Iyer-1.webp",
    },
    {
      name: "Dr. David Chen",
      role: "PhD in AR Systems Engineering",
      experience: "11 years of experience",
      manuscripts: "150+ manuscripts edited",
      avatar: "/images/subject-matter-experts/algorithm/Dr.-David-Chen.webp",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-white font-sans text-gray-800 space-y-16">
      
      {/* WHERE OUR AUTHORS PUBLISH SECTION */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Where Our Authors Publish
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
          </p>
        </div>

        {/* Publication Card */}
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-40 h-52 shrink-0 border border-gray-200 shadow-sm rounded overflow-hidden bg-gray-50">
            <Image
              src="/images/subject-matter-experts/augmented-reality/sample-works-13-2.webp"
              alt="Journal Cover Sample"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-xs md:text-sm">
            <h3 className="font-bold text-[#0d3630] text-sm md:text-base">
              Paper Title: Advances in Augmented Reality Systems for Real-Time Applications
            </h3>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Author:</span> John R. Anderson
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Journal Name:</span> Computers & Graphics
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Publisher:</span> Elsevier
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Impact factor:</span> 3.8
            </p>
          </div>
        </div>
      </section>

      {/* OUR EXPERT AUGMENTED REALITY EDITORS SECTION */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Our Expert Augmented Reality Editors
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialisation, they ensure excellence in every project they undertake.
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