"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function PatientEducationContentFormatsAccordionSection() {
  // State to track open accordion sections (defaulting to the first item or multiple)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "disease-webpages": true,
    "treatment-webpages": false,
  });

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const accordionData: AccordionItem[] = [
    {
      id: "disease-webpages",
      title: "Disease-Specific Webpages",
      content: (
        <div className="space-y-3 pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            We create dedicated pages that explain specific conditions in a
            clear, empathetic, and accessible manner for your website or patient
            portal.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Condition overviews (e.g., diabetes, hypertension, asthma)</li>
            <li>Symptoms, risk factors, and diagnostic information</li>
            <li>Management tips and when to seek medical help</li>
            <li>Visuals, diagrams, and simplified medical terms</li>
          </ul>
        </div>
      ),
    },
    {
      id: "treatment-webpages",
      title: "Treatment-Specific Webpages",
      content: (
        <div className="space-y-3 pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Our content simplifies treatment options so patients can make
            informed decisions and better understand what to expect.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Descriptions of procedures and medications</li>
            <li>Benefits and potential risks explained in plain language</li>
            <li>Pre- and post-treatment care instructions</li>
            <li>FAQs on side effects, adherence, and lifestyle changes</li>
          </ul>
        </div>
      ),
    },
    {
      id: "fact-sheets",
      title: "Fact Sheets & Patient Brochures",
      content: (
        <div className="space-y-3 pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            We design printable, easy-to-scan materials ideal for clinics,
            hospitals, and community outreach.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>One-page condition summaries</li>
            <li>Quick-reference guides for home care</li>
            <li>Medication instruction sheets</li>
            <li>Visual brochures with diagrams and infographics</li>
            <li>Designed for print and digital distribution.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "blog-posts",
      title: "Blog Posts for Patient Awareness",
      content: (
        <div className="space-y-3 pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            We craft evidence-based, reader-friendly blog content to educate and
            inform patients on health topics, common conditions, and wellness
            strategies.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Preventive health tips</li>
            <li>Symptom awareness guides</li>
            <li>Seasonal health advice</li>
            <li>Patient FAQs and myth-busting posts</li>
          </ul>
        </div>
      ),
    },
    {
      id: "patient-info-materials",
      title: "Patient Information and Education Materials",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Comprehensive educational resources designed to simplify clinical
            guidelines and facilitate better communication between patients and
            care teams.
          </p>
        </div>
      ),
    },
    {
      id: "product-labels",
      title: "Product Labels",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Our team creates accurate and compliant product labels that include
            essential information to ensure safe and effective use of medical
            and health products.
          </p>
        </div>
      ),
    },
    {
      id: "brochures-booklets",
      title: "Brochures and Booklets",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            We develop brochures and booklets that give detailed medical
            education and awareness about diseases, treatments, and drugs,
            customized to the educational needs of patients and healthcare
            professionals.
          </p>
        </div>
      ),
    },
    {
      id: "product-descriptions",
      title: "Product Descriptions",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Our detailed product descriptions help patients and consumers
            understand the features, benefits, and uses of many health products
            and technologies.
          </p>
        </div>
      ),
    },
    {
      id: "e-detailing",
      title: "E-Detailing",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            We design interactive digital detailing tools that offer dynamic
            content delivery for enhanced patient engagement and education.
          </p>
        </div>
      ),
    },
    {
      id: "packaging-inserts",
      title: "Packaging Inserts",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Our team prepares informative inserts for product packaging that
            provide critical information on usage, dosage, and safety.
          </p>
        </div>
      ),
    },
    {
      id: "audiovisual-materials",
      title: "Audio-Visual Materials",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            We create engaging audio and video content that simplifies complex
            medical information, making it accessible and understandable for a
            wide audience.
          </p>
        </div>
      ),
    },
    {
      id: "detail-aids",
      title: "Detail Aids",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Pubrica develops detailed aids that assist healthcare providers in
            communicating key information about products effectively to
            patients.
          </p>
        </div>
      ),
    },
    {
      id: "healthclips",
      title: "HealthClips",
      content: (
        <div className="pt-2 pb-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Video-based patient education delivered online or via in-room
            television, guiding individuals through every stage of a condition
            or procedure—from diagnosis and treatment to discharge,
            rehabilitation, and recovery.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      aria-label="Pubrica Patient Education Content Formats"
      className="w-full bg-white text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a]">
            Pubrica Patient Education Content Format
          </h2>
          <p className="text-slate-700 text-base leading-relaxed max-w-5xl">
            At Pubrica, we recognize that effective communication with patients
            requires varied content in specific formats for different learning
            styles and modalities. Here’s how we can help you engage and educate
            patients across platforms:
          </p>
        </div>

        {/* Two-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Image, Target Industries, CTA */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            {/* Image Banner */}
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
              <Image
                src="/images/doctor-assisting-elderly-patient-tablet.jpg"
                alt="Female doctor helping an elderly patient view health information on a tablet"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Target Audience List */}
            <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              <span className="font-bold text-slate-900">
                These formats can be customized for:
              </span>{" "}
              Hospitals & clinics, Telehealth platforms, Patient support
              programs, Pharma & medical device companies, and Clinical research
              organizations.
            </div>

            {/* CTA Button */}
            <div>
             <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Column: Accordions List */}
          <div className="lg:col-span-7 border-t border-slate-300 divide-y divide-slate-300">
            {accordionData.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div key={item.id} className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0c2e3a] group-hover:text-[#0a66bc] transition-colors">
                      {isOpen ? "–" : "+"} &nbsp; {item.title}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pl-6 transition-all duration-200">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
