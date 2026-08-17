"use client";

import Image from "next/image";
import {
  Cpu,
  CloudSun,
  Dna,
  Sprout,
  TrendingUp,
  Award,
  FileText,
} from "lucide-react";

export default function AgricultureContinuedSections() {
  // --- 1. EDITORS DATA ---
  const editors = [
    {
      name: "Dr. Arjun Rao",
      degree: "PhD in Agronomy",
      flag: "🇬🇧",
      avatar: "/images/subject-matter-experts/animal-science/warvien.png",
      experience: "18 years of experience",
      manuscripts: "200+ manuscripts edited",
    },
    {
      name: "Dr. Kavita Nair",
      degree: "PhD in Horticulture",
      flag: "🇺🇸",
      avatar: "/images/subject-matter-experts/agriculture/Dr.-Kavita-Nair.webp",
      experience: "14 years of experience",
      manuscripts: "130+ manuscripts edited",
    },
    {
      name: "Dr. Meera Iyer",
      degree: "PhD in Crop Science",
      flag: "🇺🇸",
      avatar: "/images/subject-matter-experts/agriculture/Dr.-Meera-Iyer.webp",
      experience: "12 years of experience",
      manuscripts: "150+ manuscripts edited",
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* SECTION 1: EMERGING TRENDS IN AGRICULTURE */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#0d3630]">
              Emerging Trends in Agriculture
            </h2>
            <p className="text-xs text-gray-600 max-w-3xl leading-relaxed">
              Agriculture is rapidly evolving with innovative technologies and sustainable practices reshaping the sector. At Pubrica, we stay aligned with these global advancements to support researchers in producing impactful studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* List */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Precision Agriculture:</span> Adoption of IoT, sensors, and GPS technologies to enhance productivity and resource efficiency.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CloudSun className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Climate-Smart Farming:</span> Integrating sustainable practices to mitigate climate change effects and ensure food security.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Dna className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Biotechnology and Genomics:</span> Advancing crop improvement, pest resistance, and nutritional value through genetic innovations.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Sprout className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Sustainable Resource Management:</span> Promoting soil health, water conservation, and eco-friendly farming inputs.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Agri-Business and Value Chain Innovation:</span> Strengthening market access, post-harvest technology, and rural entrepreneurship.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5 relative h-72 md:h-80 w-full rounded overflow-hidden shadow-sm border border-gray-200">
              <Image
                src="/images/subject-matter-experts/agriculture/Emerging-Trends-in-Agriculture.webp"
                alt="Emerging trends in agriculture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: WHERE OUR AUTHORS PUBLISH */}
        <section className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#0d3630]">
              Where Our Authors Publish
            </h2>
            <div className="w-10 h-0.5 bg-[#0d3630] mx-auto" />
            <p className="text-[11px] text-gray-600 pt-1 leading-relaxed">
              Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-6 shadow-sm text-left flex flex-col md:flex-row items-center gap-8 justify-center">
            {/* Journal Cover Box */}
            <div className="relative w-48 h-64 shadow-md shrink-0 border border-gray-100 bg-[#388e3c] flex flex-col justify-between overflow-hidden">
              <div className="p-3 text-white">
                <span className="text-[10px] font-bold block lowercase">agriculture</span>
                <p className="text-[8px] mt-1 leading-tight text-white/90">
                  A New Way to Stabilize Agricultural Supply Consumption, and General Prices
                </p>
              </div>
              <div className="relative h-28 w-full">
                <Image
                  src="/images/subject-matter-experts/agriculture/sample-works.webp"
                  alt="Farmer examining field"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Paper Details */}
            <div className="space-y-3.5 text-xs text-gray-700">
              <p>
                <span className="font-bold text-gray-900">Paper Title: </span>
                Optimising Long-Range Agricultural Land Use Under Climate Uncertainty
              </p>
              <p>
                <span className="font-bold text-gray-900">Author: </span>
                Schiller K, Montgomery J, Randall M, Lewis A, Alam MS.
              </p>
              <p>
                <span className="font-bold text-gray-900">Journal Name: </span>
                Agriculture
              </p>
              <p>
                <span className="font-bold text-gray-900">Publisher: </span>
                MDPI
              </p>
              <p>
                <span className="font-bold text-gray-900">Impact factor: </span>
                3.6
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR EXPERT AGRICULTURE EDITORS */}
        <section className="space-y-6 text-center">
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0d3630]">
              Our Expert Agriculture Editors
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {editors.map((editor, idx) => (
              <div
                key={idx}
                className="bg-[#d2e7e3] rounded-2xl p-4.5 border border-[#b8ded7] shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shrink-0">
                    <Image
                      src={editor.avatar}
                      alt={editor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[13px] font-bold text-gray-900 flex items-center gap-1.5">
                      {editor.name}
                      <span className="text-[10px]">{editor.flag}</span>
                    </h3>
                    <p className="text-[11px] text-gray-600 mt-0.5">{editor.degree}</p>
                  </div>
                </div>

                <div className="border-t border-[#aed7cf] pt-3 flex items-center justify-between text-[11px] text-gray-700 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#0d3630]" />
                    <span>{editor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#0d3630]" />
                    <span>{editor.manuscripts}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}