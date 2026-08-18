"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sprout,
  Cpu,
  CloudSun,
  BarChart3,
  Zap,
} from "lucide-react";

export default function AgrotechnologyCompleteSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Artificial Intelligence (AI) in Agriculture",
      heading: "Artificial Intelligence (AI) in Agriculture",
      content:
        "AI-powered tools analyze crop and soil data, predict yields, and optimize farm management practices. AI is also being used in autonomous machinery for seeding, weeding, and harvesting.",
    },
    {
      title: "Robotics and Automation",
      heading: "Robotics and Automation",
      content:
        "Advanced robots perform tasks like harvesting fruits and vegetables, planting seeds, and managing weeds, reducing labour dependency and increasing operational efficiency.",
    },
    {
      title: "Climate-Smart Agriculture",
      heading: "Climate-Smart Agriculture",
      content:
        "Practices and technologies designed to help farmers adapt to climate change, improve resilience, and reduce greenhouse gas emissions while sustaining productivity.",
    },
    {
      title: "Big Data Analytics",
      heading: "Big Data Analytics",
      content:
        "Aggregating large datasets from weather patterns, soil sensors, and historical yields to provide actionable insights for precision farming.",
    },
    {
      title: "Renewable Energy Integration",
      heading: "Renewable Energy Integration",
      content:
        "Utilizing solar, wind, and biomass energy sources to power agricultural machinery, irrigation pumps, and farm facilities sustainably.",
    },
  ];

  const applications = [
    {
      title: "Crop Production:",
      desc: "Enhanced seed varieties, precision farming tools, and smart irrigation systems increase yield, improve crop quality, and reduce losses.",
    },
    {
      title: "Livestock Management:",
      desc: "Automated feeding systems, health monitoring devices, and genetic selection improve animal health, reproduction rates, and overall productivity.",
    },
    {
      title: "Pest and Disease Control:",
      desc: "Integrated pest management systems, biological control agents, and disease-resistant crops reduce reliance on chemical pesticides.",
    },
    {
      title: "Post-Harvest Management:",
      desc: "Storage technologies, cold chains, and automated processing equipment help minimize post-harvest losses and maintain product quality.",
    },
    {
      title: "Agro-Energy Solutions:",
      desc: "Biofuels, solar-powered irrigation, and waste-to-energy systems contribute to sustainable energy use in agriculture.",
    },
  ];

  const editors = [
    {
      name: "Dr. Anjali Verma",
      role: "Ph.D. in Plant Biotechnology",
      experience: "9 years of experience",
      manuscripts: "90+ manuscripts edited",
      avatar: "/images/subject-matter-experts/agriculture/Dr.-Neha-Verma.webp",
    },
    {
      name: "Dr. Kavita Reddy",
      role: "Ph.D. in Agricultural Engineering",
      experience: "10 years of experience",
      manuscripts: "100+ manuscripts edited",
      avatar: "/images/subject-matter-experts/agrotechnology/Dr.-Kavita-Reddy.webp",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Ph.D. in Crop Science",
      experience: "8 years of experience",
      manuscripts: "85+ manuscripts edited",
      avatar: "/images/subject-matter-experts/agrotechnology/Dr.-Priya-Sharma.webp",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-white font-sans text-gray-800 space-y-16">

      {/* SECTION 1: EMERGING TRENDS IN AGROTECHNOLOGY */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Emerging Trends in Agrotechnology
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            The agricultural sector is witnessing rapid technological evolution. Some emerging trends include:
          </p>
        </div>

        {/* Exact Tab Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-gray-300 bg-[#f8f9fa] rounded-t-sm overflow-hidden text-center">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`py-3 px-3 text-[11px] md:text-xs font-bold transition-all border-r border-b lg:border-b-0 border-gray-300 last:border-r-0 flex items-center justify-center leading-snug ${isActive
                  ? "bg-[#0d3630] text-white border-b-2 border-b-[#0d3630]"
                  : "bg-[#f8f9fa] text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="border border-gray-300 border-t-0 rounded-b-sm p-6 bg-white shadow-sm space-y-3">
          <h3 className="text-sm md:text-base font-bold text-[#0d3630]">
            {tabs[activeTab].heading}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            {tabs[activeTab].content}
          </p>
        </div>
      </section>

      {/* SECTION 2: APPLICATIONS OF AGROTECHNOLOGY */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Applications of Agrotechnology
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Agrotechnology has a wide range of practical applications across crop cultivation, livestock management, and post-harvest processes:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            {applications.map((app, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:border-[#0d3630]/40 transition-colors"
              >
                <div className="p-2 bg-[#0d3630]/10 rounded-sm text-[#0d3630] shrink-0 mt-0.5">
                  <Sprout className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0d3630]">
                    {app.title}{" "}
                  </span>
                  <span className="text-xs text-gray-600 leading-relaxed">
                    {app.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/images/subject-matter-experts/agrotechnology/Applications-of-Agrotechnology.webp"
                alt="Hand writing on paper workspace"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHERE OUR AUTHORS PUBLISH */}
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
              src="/images/subject-matter-experts/agrotechnology/sample-works-2.webp"
              alt="Agronomy Journal Cover"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
          <div className="space-y-2 text-xs md:text-sm">
            <h3 className="font-bold text-[#0d3630] text-sm md:text-base">
              Paper Title: Prohexadione-Calcium Mitigates the Overgrowth of Corn Seedlings
            </h3>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Author:</span> Duong MV, Chung J-W, Ha VG, Moon H, Yu J-K, So Y-S
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Journal Name:</span> Agronomy
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Publisher:</span> MDPI
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Impact factor:</span> 3.4
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR EXPERT AGROTECHNOLOGY EDITORS */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0d3630]">
            Our Expert Agrotechnology Editors
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