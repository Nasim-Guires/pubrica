"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  BookOpen,
  ClipboardList,
  GraduationCap,
  Award,
  FileSpreadsheet,
  Send,
  Presentation,
  Users,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface OfferCard {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const offerItems: OfferCard[] = [
  {
    id: 1,
    title: "Manuscript Development",
    description:
      "Original research articles, systematic reviews, case reports, and abstracts, structured to match clinical relevance and academic rigor.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Thesis and Dissertation Writing",
    description:
      "Support for physician-researchers pursuing advanced academic degrees (MD, DM, PhD, etc.), with content aligned to institutional and regulatory criteria.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Regulatory and Clinical Documents",
    description:
      "Clinical protocols, CSRs, and investigator brochures are developed with physician investigators in mind, ensuring regulatory compliance and scientific clarity.",
    icon: ClipboardList,
  },
  {
    id: 4,
    title: "Continuing Medical Education Content",
    description:
      "Evidence-based modules and training materials developed for physician education, certification, and knowledge advancement.",
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Grant Proposal Writing",
    description:
      "Strategically crafted funding proposals tailored to the needs of physician-scientists targeting national and international funding bodies.",
    icon: Award,
  },
  {
    id: 6,
    title: "Case Series and Clinical Insights Documentation",
    description:
      "Development of multi-case narratives, procedural overviews, and clinical technique reports that support knowledge sharing among peers and specialists.",
    icon: FileSpreadsheet,
  },
  {
    id: 7,
    title: "Journal Submission Support",
    description:
      "End-to-end assistance with cover letters, conflict of interest statements, author contributions, and handling revisions and reviewer comments, particularly useful for busy physicians.",
    icon: Send,
  },
  {
    id: 8,
    title: "Medical Conference Presentations",
    description:
      "Creation of slide decks, speaker notes, posters, and oral presentation scripts tailored to scientific or clinical meetings.",
    icon: Presentation,
  },
  {
    id: 9,
    title: "Patient Education Materials",
    description:
      "Though physician-facing, providing customized, evidence-based materials for patient communication supports physicians in improving patient engagement and understanding.",
    icon: Users,
  },
  {
    id: 10,
    title: "Publication Planning and Strategy",
    description:
      "Strategic support for physician-authors or medical KOLs with long-term publication goals across journals, meetings, and therapeutic areas.",
    icon: Calendar,
  },
  {
    id: 11,
    title: "Peer Review Response and Rebuttal Letter Writing",
    description:
      "Assistance with professionally crafted responses to reviewer comments improves the chances of manuscript acceptance.",
    icon: MessageSquare,
  },
  {
    id: 12,
    title: "Custom Content & Strategic Support",
    description:
      "Tailored medical writing to meet unique needs, hospital reports, white papers, medico-legal content, and institutional documentation publication planning, journal selection guidance, and editorial consulting.",
    icon: Sparkles,
  },
];

export default function CustomizedPhysicianMedicalWritingService() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      
      {/* 1. Full-Width Dark Banner matching exact site design */}
      <section className="w-full bg-gradient-to-b from-[#0e211e] via-[#122b27] to-[#0e211e] text-white py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto border border-slate-400/40 p-6 md:p-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Customized Medical Writing Service for Physicians
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Pubrica&apos;s customer medical writing service provides tailored solutions for physician researchers and academics, ensuring meticulously crafted scientific manuscripts that meet exacting global standards and exceed expectations across diverse academic fields.
          </p>
        </div>
      </section>

      {/* Main Page Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* 2. Overview Section with Image Block */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a2b49] leading-snug">
              Customized Medical Writing Services Exclusively for Physicians: Precision-Crafted Academic and Clinical Manuscripts Aligned with Physician Research and Practice Goals
            </h2>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              At Pubrica, we provide customized medical writing services tailored for physicians, clinicians, and educators to produce high-impact and publication-ready content. We develop academic and clinical manuscripts that are technically accurate and contextually appropriate, while also aligning with your career trajectory, research objectives, and patient care.
            </p>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              We prioritize physician-driven research, education about clinical standards and regulatory requirements, and we write customized documents that comply with journal mandates, institutional policies, and international publishing quality standards. We support each step of the physician&apos;s academic and clinical journey through our writing, from research manuscripts to CME.
            </p>

            {/* Key Features Bullet List */}
            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-bold text-slate-900">Key Features</h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Authored by domain-specific <span className="text-sky-700 font-medium">subject matter experts</span> with a clinical background
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Adheres to <span className="text-sky-700 font-medium">ICMJE</span>, GPP3, and target journal formatting standards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Includes technical editing, <span className="text-sky-700 font-medium">plagiarism</span> screening, and language refinement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Fully customizable to your clinical specialty, format, and level of detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Seamless integration with <span className="text-sky-700 font-medium">manuscript editing</span>, <span className="text-sky-700 font-medium">peer review</span>, and <span className="text-sky-700 font-medium">journal submission</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="bg-[#b80000] hover:bg-red-700 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow">
                Get a Free Quote
              </button>
            </div>
          </div>

          {/* Right Image Block with Offset Backdrop */}
          <div className="lg:col-span-5 relative pt-4">
            <div className="relative">
              {/* Dark Green Offset Backdrop */}
              <div className="absolute inset-0 bg-[#0e211e] rounded-xl transform translate-x-3 translate-y-3 -z-0"></div>
              
              {/* Foreground Image */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="https://pubrica.com/wp-content/uploads/2023/04/customized-writing-physicians.jpg"
                  alt="Physicians reviewing clinical documents"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. What We Offer Section */}
        <section className="space-y-6 pt-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2b49] mb-2">
              What We Offer
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-5xl">
              We provide customized <span className="text-sky-700 font-medium">medical writing</span> services tailored to the needs of physicians in clinical, academic, educational, and professional development settings. From publishing articles to grant applications, training programs, to clinical documentation, we provide accurate, publication-ready content that meets your needs.
            </p>
            <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">
              Our physician-oriented writing solutions are based on your specialty, institution, and goal.
            </p>
          </div>

          {/* 12-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offerItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white hover:bg-[#dbeafe] border border-slate-200/80 rounded-md p-5 transition-all duration-300 shadow-xs flex flex-col items-start space-y-3 cursor-pointer group"
                >
                  {/* Badge Icon Header */}
                  <div className="w-10 h-10 rounded-full bg-amber-100/80 border border-amber-300/60 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200/90 transition-colors">
                    <IconComponent className="w-5 h-5 text-amber-800" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[11px] text-slate-600 group-hover:text-slate-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}