"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Tractor,
  Stethoscope,
  Trees,
  Factory,
  BookOpen,
  ChevronRight,
  Award,
  FileText,
} from "lucide-react";

export default function AnimalScienceContinuedSections() {
  // --- 1. EMERGING TRENDS DATA ---
  const emergingTrends = [
    {
      id: "plf",
      title: "Precision Livestock Farming (PLF)",
      description:
        "Utilizing sensors, AI, and data analytics to monitor animal health, behavior, and environmental conditions in real-time, enabling predictive management decisions.",
    },
    {
      id: "nutrigenomics",
      title: "Nutrigenomics",
      description:
        "Exploring the relationship between nutrition and gene expression to tailor diets for improved health and productivity.",
    },
    {
      id: "eco-friendly",
      title: "Sustainable and Eco-Friendly Practices",
      description:
        "Development of feed alternatives, waste-to-energy solutions, and carbon footprint reduction strategies in livestock systems.",
    },
    {
      id: "vaccines",
      title: "Vaccines and Biotherapeutics",
      description:
        "Advances in immunology and biotechnology support the development of next-generation vaccines and therapeutics for disease prevention.",
    },
    {
      id: "welfare",
      title: "Animal Welfare Regulations and Certification",
      description:
        "Global demand for ethically produced animal products drives compliance with welfare standards and certification programs.",
    },
  ];

  const [activeTrend, setActiveTrend] = useState(emergingTrends[0]); // Default: PLF

  // --- 2. AREAS OF STUDY DATA ---
  const areasOfStudy = [
    "Poultry Science",
    "Food Processing",
    "Food Science",
    "Cloning",
    "Animal Nutrition",
    "Dairy Science",
    "Farm Animal Breeding",
    "Embryo Technology",
    "Fermentation",
    "Animal Health Sciences",
    "Reproductive Management",
    "Genetics and Animal Breeding",
  ];

  // --- 3. EDITORS DATA ---
  const editors = [
    {
      name: "Warvien",
      degree: "PhD in Animal Science",
      flag: "🇬🇧",
      avatar:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200",
      experience: "14 years of experience",
      manuscripts: "100+ manuscripts edited",
    },
    {
      name: "Victor",
      degree: "Masters in Animal Nutrition",
      flag: "🇺🇸",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
      experience: "8 years of experience",
      manuscripts: "70+ manuscripts edited",
    },
    {
      name: "Karrel",
      degree: "PhD in Animal Science",
      flag: "🇺🇸",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      experience: "5 years of experience",
      manuscripts: "55+ manuscripts edited",
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* SECTION 1: EMERGING TRENDS */}
        <section className="max-w-5xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1e2e2b]">
              Emerging Trends in Animal Science
            </h2>
            <p className="text-xs text-gray-600">
              The field of animal science is rapidly evolving due to technological innovations and global challenges:
            </p>
          </div>

          <div className="bg-[#f8f9f9] p-4 md:p-6 rounded border border-gray-200">
            {/* Tabs Row */}
            <div className="flex flex-wrap gap-2">
              {emergingTrends.map((trend) => {
                const isActive = activeTrend.id === trend.id;
                return (
                  <button
                    key={trend.id}
                    onClick={() => setActiveTrend(trend)}
                    className={`py-3 px-4 text-center text-[11px] font-semibold transition-colors duration-150 border flex-1 min-w-[140px] ${
                      isActive
                        ? "bg-[#12433e] text-white border-[#12433e]"
                        : "bg-[#edf0f0] text-gray-700 border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {trend.title}
                  </button>
                );
              })}
            </div>

            {/* Active Content Box */}
            <div className="mt-3 bg-white p-5 border border-gray-200 rounded-sm text-left shadow-sm">
              <h3 className="text-xs font-bold text-gray-900 mb-1.5">
                {activeTrend.title}
              </h3>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                {activeTrend.description}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: APPLICATIONS OF ANIMAL SCIENCE */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1e2e2b]">
              Applications of Animal Science
            </h2>
            <p className="text-xs text-gray-600">
              Animal Science is applied in diverse sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* List */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-start gap-3">
                <Tractor className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Agriculture & Livestock Management:</span> Enhancing productivity and sustainability in dairy, poultry, and meat industries.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Veterinary Medicine:</span> Informing disease prevention, treatment, and diagnostics.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Trees className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Wildlife Conservation:</span> Protecting endangered species through research on reproduction, genetics, and behavior.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Factory className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Pharmaceutical and Biotech Industries:</span> Developing vaccines, therapeutics, and animal models for research.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 leading-snug">
                  <span className="font-bold text-gray-900">Education & Research:</span> Training the next generation of scientists, veterinarians, and animal welfare specialists.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5 relative h-72 md:h-80 w-full rounded overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1629853921132-4752c0022f1c?auto=format&fit=crop&q=80&w=800"
                alt="Veterinarian examining a rabbit with a stethoscope"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: AREAS OF STUDY (FULL WIDTH BANNER) */}
      <section className="w-full bg-[#0d3630] mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
          {/* Left Side: Image with Text Overlay */}
          <div className="md:w-5/12 relative min-h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1574621100236-d2506b3e34b9?auto=format&fit=crop&q=80&w=800"
              alt="Laboratory research with rabbit"
              fill
              className="object-cover"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d3630]/90 to-[#0d3630]/60 p-8 flex items-center">
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-sm font-medium">
                Pubrica's team of experts is equipped with the knowledge and experience to assist you in all aspects of animal science research, ensuring your work is accurately represented and reaches the right audience effectively.
              </p>
            </div>
          </div>

          {/* Right Side: Grid of Areas */}
          <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-8 text-center md:text-left relative inline-block">
              Areas of <span className="underline decoration-2 underline-offset-4 decoration-white">Study</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {areasOfStudy.map((area, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-sm py-2 px-3 flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-[#0d3630] rounded-full p-0.5 flex-shrink-0">
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 truncate">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* SECTION 4: WHERE OUR AUTHORS PUBLISH */}
        <section className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1e2e2b]">
              Where Our Authors Publish
            </h2>
            <div className="w-10 h-0.5 bg-[#12433e] mx-auto" />
            <p className="text-[11px] text-gray-600 pt-1 leading-relaxed">
              Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-6 shadow-sm text-left flex flex-col md:flex-row items-center gap-8 justify-center">
            {/* Journal Cover Placeholder */}
            <div className="relative w-48 h-64 shadow-md shrink-0 border border-gray-100 bg-[#8bc34a] flex flex-col items-center justify-between p-4">
               {/* Recreating a CSS approximation of the cover in the screenshot */}
               <div className="text-center w-full text-white">
                 <p className="text-[8px] uppercase tracking-widest font-semibold">Journal of</p>
                 <p className="text-[10px] uppercase font-bold">Animal Science</p>
               </div>
               <h1 className="text-5xl font-black text-white/90">JAS</h1>
               <div className="w-full relative h-20">
                 {/* Geometric Cow Image Approximation */}
                 <Image 
                   src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=400" 
                   alt="Cow abstract" 
                   fill 
                   className="object-cover mix-blend-overlay opacity-50"
                 />
               </div>
            </div>

            {/* Paper Info */}
            <div className="space-y-3.5 text-xs text-gray-700">
              <p>
                <span className="font-bold text-gray-900">Paper Title: </span>
                A primer on sequencing and genotype imputation in cattle
              </p>
              <p>
                <span className="font-bold text-gray-900">Author: </span>
                Troy N Rowan
              </p>
              <p>
                <span className="font-bold text-gray-900">Journal Name: </span>
                Journal of Animal Science
              </p>
              <p>
                <span className="font-bold text-gray-900">Publisher: </span>
                American Society of Animal Science
              </p>
              <p>
                <span className="font-bold text-gray-900">Impact factor: </span>
                2.9
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR EXPERT ANIMAL SCIENCE EDITORS */}
        <section className="space-y-6 text-center">
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e2e2b]">
              Our Expert Animal Science Editors
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
                    <Award className="w-3.5 h-3.5 text-[#12433e]" />
                    <span>{editor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#12433e]" />
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