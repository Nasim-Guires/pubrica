"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function WhatWeDo() {
  // Active accordion tab state (defaults to first item)
  const [activeTab, setActiveTab] = useState<string>("engaging-content");

  const toggleTab = (id: string) => {
    setActiveTab(activeTab === id ? "" : id);
  };

  const features: FeatureItem[] = [
    {
      id: "engaging-content",
      title: "Engaging Content Creation",
      content: (
        <p>
          We take your published manuscript and turn it into a 2–3 minute video
          abstract that conveys the highlights of your study in an engaging way.
          This is in addition to the other support services we offer, including
          manuscript editing, case report writing, and post editing to clarify
          and ensure technical accuracy at each step. Our academic video
          abstract services for researchers are designed to meet journal
          submission standards and enhance research visibility.
        </p>
      ),
    },
    {
      id: "expert-team",
      title: "Expert Production Team",
      content: (
        <p>
          Our team of creative scientific specialists works with you to create a
          scientific video animation that will emphasize the key findings of
          your study, but also demonstrate the importance and impact of the
          findings. Our creative scientific experts can also help you with
          careful{" "}
          <Link href="#grant-writing" className="text-sky-600 hover:underline">
            grant writing
          </Link>
          ,{" "}
          <Link
            href="#experimental-design"
            className="text-sky-600 hover:underline"
          >
            experimental design
          </Link>
          , and{" "}
          <Link
            href="#systematic-review"
            className="text-sky-600 hover:underline"
          >
            systematic review
          </Link>
          , all aligned to your research story. We offer custom video abstract
          services for medical journals and visual scientific communication
          support for scholars.
        </p>
      ),
    },
    {
      id: "audience-reach",
      title: "Wide Audience Reach",
      content: (
        <p>
          Video abstracts are an excellent way of reaching a wider audience and
          increasing the accessibility and understanding of your research. This
          format is ideal for sharing on social networks, academic sites, and at
          conferences. Our research paper video abstract with voiceover ensures
          your findings are accessible to global viewers.
        </p>
      ),
    },
    {
      id: "enhanced-visibility",
      title: "Enhanced Research Visibility",
      content: (
        <p>
          Providing information through video is likely to create more interest
          from other researchers, potential collaborators, and sponsors/funders,
          giving you more chances for citations and support. The combination of{" "}
          <Link
            href="#manuscript-editing"
            className="text-sky-600 hover:underline"
          >
            manuscript editing
          </Link>{" "}
          and{" "}
          <Link href="#grant-writing" className="text-sky-600 hover:underline">
            grant writing
          </Link>{" "}
          will enhance the overall academic value.
        </p>
      ),
    },
    {
      id: "custom-solutions",
      title: "Customized Visual Solutions",
      content: (
        <p>
          Every video is tailored to reflect the key messages of your research
          while sufficiently meeting your requirements and the audience&apos;s
          expectations. Whether it&apos;s for a PhD thesis video abstract
          support or a short, animated summary for a journal article, we deliver
          precise scholarly video presentation tools for your success.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f2f4f4] py-12 md:py-16 px-4 md:px-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
          What We do
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl mb-10">
          Utilizing Pubrica&apos;s{" "}
          <Link href="#services" className="text-sky-600 hover:underline">
            video abstract services
          </Link>{" "}
          will increase the visibility and the impact of your research. Our
          expert team will create compelling video abstracts, summarized in
          high-quality video content, showing your research findings and
          differentiating you from other similar publications.
        </p>

        {/* Main Content Grid: Overlapping Images + Interactive Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Left Column: Overlapping Visual Images */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[320px] md:min-h-[380px]">
            {/* Background Light Circle Graphic */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/60 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0" />

            {/* Top Left Image Card (Videographer) */}
            <div className="absolute top-0 left-4 md:left-8 w-44 sm:w-52 md:w-56 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md z-10">
              <Image
                src="/images/what-we-do-cameraman.jpg"
                alt="Videographer recording research pitch"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Image Card (Video Editor Workspace) */}
            <div className="absolute bottom-0 right-4 md:right-8 w-48 sm:w-56 md:w-60 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-2 border-white z-20">
              <Image
                src="/images/what-we-do-editor.jpg"
                alt="Video editor working on scientific animation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-300 rounded-sm divide-y divide-slate-300 shadow-sm">
              {features.map((item) => {
                const isOpen = activeTab === item.id;

                return (
                  <div key={item.id} className="transition-colors">
                    {/* Header Button */}
                    <button
                      onClick={() => toggleTab(item.id)}
                      className="w-full flex items-center justify-between p-4 md:p-4 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-800 text-sm md:text-base">
                        {isOpen ? `–   ${item.title}` : `+   ${item.title}`}
                      </span>
                    </button>

                    {/* Content Panel */}
                    {isOpen && (
                      <div className="px-6 py-4 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Summary Statement */}
        <p className="text-xs md:text-sm text-slate-700 leading-relaxed pt-2 font-medium">
          Choose Pubrica&apos;s research video development to transform your
          research into a compelling story that resonates with viewers and
          maximizes your academic outreach. Contact us today to see how we can
          help make your research more visible and impactful.
        </p>
      </div>
    </section>
  );
}
