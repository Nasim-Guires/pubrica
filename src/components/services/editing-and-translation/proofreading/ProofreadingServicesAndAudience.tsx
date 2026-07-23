"use client";

import React, { useState } from "react";
import {
  Microscope,
  FileText,
  BookOpen,
  Edit3,
  GraduationCap,
  Languages,
  Briefcase,
  UserCheck,
} from "lucide-react";

// ==========================================
// 1. DATA TYPES & DATA FOR "OUR SERVICES"
// ==========================================
interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  highlightText?: string;
  afterHighlight?: string;
}

const servicesData: ServiceCard[] = [
  {
    id: "scientific-editing",
    icon: <Microscope className="w-6 h-6 text-teal-700" />,
    title: "Scientific Editing",
    description:
      "Enhance your academic documents with our journal manuscript proofreading and editing expertise,",
  },
  {
    id: "manuscript-editing",
    icon: <FileText className="w-6 h-6 text-teal-700" />,
    title: "Manuscript Editing",
    description: "Enhance your academic and ",
    highlightText: "manuscripts",
    afterHighlight: " with Pubrica's professional Editing",
  },
  {
    id: "book-editing",
    icon: <BookOpen className="w-6 h-6 text-teal-700" />,
    title: "Book Editing",
    description:
      "Perfect your academic or professional book manuscript with Pubrica's ",
    highlightText: "Book Editing",
    afterHighlight: " Service,",
  },
  {
    id: "post-editing",
    icon: <Edit3 className="w-6 h-6 text-teal-700" />,
    title: "Post Editing",
    description:
      "Refine and polish machine-translated documents with Pubrica's ",
    highlightText: "Post-Editing",
    afterHighlight: " Service, ensuring fluency,",
  },
  {
    id: "thesis-editing",
    icon: <GraduationCap className="w-6 h-6 text-teal-700" />,
    title: "Thesis Editing",
    description: "Specialised ",
    highlightText: "thesis proofreading service",
    afterHighlight: " to meet academic excellence and global standards.",
  },
  {
    id: "translation-editing",
    icon: <Languages className="w-6 h-6 text-teal-700" />,
    title: "Translation with Editing",
    description:
      "Achieve accurate, culturally adapted translations with Pubrica's ",
    highlightText: "Translation + Editing Services",
    afterHighlight: ", where",
  },
  {
    id: "grant-business-editing",
    icon: <Briefcase className="w-6 h-6 text-teal-700" />,
    title: "Grant & Business Document Editing",
    description:
      "Clear and persuasive communication using professional proofreading services.",
  },
  {
    id: "resume-cv-editing",
    icon: <UserCheck className="w-6 h-6 text-teal-700" />,
    title: "Resume/CV & Application Editing",
    description:
      "Tailoring and polishing CVs, resumes, and application letters to make a strong professional",
  },
];

// ==========================================
// 2. DATA TYPES & DATA FOR "WHO WE SERVE"
// ==========================================
interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const audienceData: AudienceCard[] = [
  {
    id: "researchers",
    title: "Researchers & Academics",
    description:
      "Experts in research paper proofreading and journal article proofreading service.",
    imageSrc:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "healthcare",
    title: "Professionals in Healthcare & Life Sciences",
    description:
      "Accurate medical proofreading services and medical manuscript proofreading service.",
    imageSrc:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "organizations",
    title: "Organisations, Businesses, & Corporations",
    description:
      "Perfect reports, presentations, and corporate communications across cultures.",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "publishers",
    title: "Publishing Houses & Writers",
    description:
      "Submit manuscripts for publication that are free from errors.",
    imageSrc:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "students",
    title: "Students & Educational Institutions",
    description:
      "Polish theses, essays, dissertations, and other academic writings.",
    imageSrc:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "government",
    title: "Governments & NGOs",
    description:
      "Clear, accurate, and culturally appropriate documentation for government bodies.",
    imageSrc:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function PubricaServicesAndAudience() {
  // Active hovered card index for "Who We Serve"
  const [activeAudienceId, setActiveAudienceId] =
    useState<string>("researchers");

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">
      {/* SECTION 1: OUR SERVICES */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            At Pubrica, we offer comprehensive Manuscript Proofreading Services
            that can help you polish your writing from start to finish. Our
            experts will make sure your writing is clear, consistent, and ready
            for publication.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-md p-5 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 bg-slate-100/80 rounded-md flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {service.title}
                </h3>

                {/* Description with Vertical Accent Line */}
                <div className="relative pl-3 border-l-2 border-slate-800 text-xs text-slate-600 leading-relaxed min-h-[60px]">
                  <span>{service.description}</span>
                  {service.highlightText && (
                    <span className="text-sky-600 font-medium hover:underline cursor-pointer">
                      {" "}
                      {service.highlightText}
                    </span>
                  )}
                  {service.afterHighlight && (
                    <span>{service.afterHighlight}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: WHO WE SERVE */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            Who We Serve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our Proofreading Services are aimed at a wide array of clients
            looking for perfection in their texts.
          </p>
        </div>

        {/* 3x2 Interactive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item) => {
            const isActive = activeAudienceId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveAudienceId(item.id)}
                className="relative h-64 rounded-xs overflow-hidden shadow-md cursor-pointer transition-all duration-300 group border border-slate-200"
              >
                {/* Condition A: Active State (Black Solid Background with Text) */}
                {isActive ? (
                  <div className="absolute inset-0 bg-black text-white p-6 flex flex-col justify-start space-y-4 transition-opacity duration-300">
                    <h3 className="font-bold text-base sm:text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  /* Condition B: Default State (Full Image with Bottom Gradient Overlay) */
                  <div className="relative w-full h-full">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark gradient overlay for bottom text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                      <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
