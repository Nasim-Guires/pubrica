"use client";

import React, { useState } from "react";
import Image from "next/image";

// --- Types ---
interface AccordionItem {
  id: string;
  title: string;
  items: string[];
}

export default function PatientEducationApplicationsAndSources() {
  // Accordion State Management
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "clinical-practice": true, // Default open based on typical UX
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // --- Data Arrays ---
  const applications = [
    {
      id: 1,
      title: "Hospital discharge instructions",
      image: "/images/hospital-discharge.jpg",
    },
    {
      id: 2,
      title: "Chronic disease management guides",
      image: "/images/chronic-disease-management.jpg",
    },
    {
      id: 3,
      title: "Medication adherence tools",
      image: "/images/medication-adherence.jpg",
    },
    {
      id: 4,
      title: "Pre- and post-operative patient materials",
      image: "/images/post-operative-materials.jpg",
    },
    {
      id: 5,
      title: "Clinical trial patient information sheets",
      image: "/images/clinical-trial-info.jpg",
    },
    {
      id: 6,
      title: "Medical device usage tutorials",
      image: "/images/medical-device-tutorials.jpg",
    },
  ];

  const therapeuticAreas = [
    {
      name: "Radiology",
      iconPath:
        "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z",
    },
    {
      name: "Nuclear Medicine",
      iconPath:
        "M7 3h10v3H7zM5 8h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 13h6M12 10v6",
    },
    {
      name: "Emergency medicine",
      iconPath:
        "M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4zM11 11h2v3h3v2h-3v3h-2v-3H8v-2h3z",
    },
    {
      name: "Internal medicine",
      iconPath: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-7 16a7 7 0 0 1 14 0H5z",
    },
    {
      name: "Oncology",
      iconPath:
        "M12 22s-7-5.5-7-10a7 7 0 0 1 14 0c0 4.5-7 10-7 10zm-2-10h4m-2-2v4",
    },
    {
      name: "Cardiology",
      iconPath:
        "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    },
    {
      name: "Neurology",
      iconPath:
        "M12 2a9 9 0 0 0-9 9c0 3.32 1.8 6.22 4.5 7.82V22h9v-3.18C19.2 17.22 21 14.32 21 11a9 9 0 0 0-9-9zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7z M12 6c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z",
    },
    {
      name: "Otolaryngology",
      iconPath:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
    },
    {
      name: "Obstetrics & Gynaecology",
      iconPath:
        "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-11a3 3 0 1 0-3 3v2h2v-2a3 3 0 0 0 1-3z",
    },
    {
      name: "Orthopaedics",
      iconPath: "M7 4v2h10V4h2v16h-2v-2H7v2H5V4z M7 8v8h10V8H7z",
    },
    {
      name: "Gastroenterology",
      iconPath:
        "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14h-2v-4h2zm4 0h-2V8h2zm-4-6h-2V8h2z",
    },
    {
      name: "Paediatrics",
      iconPath:
        "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    },
  ];

  const publicationSources: AccordionItem[] = [
    {
      id: "clinical-practice",
      title: "Clinical Practice Guidelines & Medical Associations",
      items: [
        "World Health Organization (WHO)",
        "Centers for Disease Control and Prevention (CDC)",
        "National Institute for Health and Care Excellence (NICE)",
        "U.S. Preventive Services Task Force",
        "American College of Physicians",
        "American Medical Association",
        "American College of Obstetricians and Gynecologists",
        "Society for Maternal-Fetal Medicine",
        "American Academy of Pediatrics",
        "American College of Cardiology",
        "American Diabetes Association",
        "American Cancer Society",
      ],
    },
    {
      id: "specialty-societies",
      title: "Specialty Societies & Professional Organizations",
      items: [
        "American Academy of Dermatology",
        "American Psychiatric Association",
        "American Academy of Orthopaedic Surgeons",
        "American Society of Clinical Oncology",
        "American Society of Anesthesiologists",
        "American Society for Gastrointestinal Endoscopy",
        "American Academy of Sleep Medicine",
        "American Association of Neurological Surgeons",
        "American Society for Metabolic and Bariatric Surgery",
        "North American Menopause Society",
        "Society of Critical Care Medicine",
        "Endocrine Society",
      ],
    },
    {
      id: "global-agencies",
      title: "Global & Governmental Health Agencies",
      items: [
        "U.S. Food and Drug Administration (FDA)",
        "National Institutes of Health (NIH)",
        "U.S. Department of Health and Human Services (HHS)",
        "European Medicines Agency (EMA)",
        "Health Canada",
        "U.S. Department of Veterans Affairs (VA)",
        "U.S. Environmental Protection Agency (EPA)",
        "Substance Abuse and Mental Health Services Administration (SAMHSA)",
      ],
    },
    {
      id: "peer-reviewed",
      title: "Peer-Reviewed Journals & Clinical Databases",
      items: [
        "PubMed",
        "Cochrane Library",
        "Journal of the American Medical Association (JAMA)",
        "The Lancet",
        "BMJ (British Medical Journal)",
        "New England Journal of Medicine (NEJM)",
        "ClinicalKey",
        "UpToDate",
      ],
    },
    {
      id: "specialized-associations",
      title: "Specialized Associations by Field (Selected Examples)",
      items: [
        "American Heart Association (Cardiology)",
        "Alzheimer’s Association (Neurology)",
        "American Society of Hematology (Oncology)",
        "American Speech-Language-Hearing Association (Communication Disorders)",
        "American Association of Diabetes Educators (Endocrinology)",
        "American Academy of Allergy, Asthma & Immunology",
        "Asthma and Allergy Foundation of America",
      ],
    },
  ];

  return (
    <div className="w-full font-sans text-slate-800">
      {/* --- Section 1: Applications --- */}
      <section
        aria-label="Applications"
        className="bg-[#f8fcfb] py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a] mb-6">
            Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-start overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-48 bg-slate-100">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 w-full text-center min-h-[80px] flex items-center justify-center">
                  <h3 className="text-[#0c2e3a] font-bold text-sm sm:text-base leading-snug">
                    {app.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: Therapeutic Areas --- */}
      <section
        aria-label="Our Therapeutic Areas"
        className="bg-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a] mb-8">
            Our Therapeutic Areas: We Cover
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
            {therapeuticAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Simulated Icon Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#0c2e3a] flex items-center justify-center p-3 text-[#0c2e3a]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <path d={area.iconPath} />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                  {area.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Publications Regularly Reviewed --- */}
      <section
        aria-label="Publications for Content Development"
        className="bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a]">
            Publications Regularly Reviewed for Content Development
          </h2>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              To ensure the medical accuracy, consistency, and credibility of
              our patient education resources, Pubrica regularly reviews and
              integrates current guidance from trusted medical and scientific
              sources.
            </p>
            <p>
              The Pubrica team routinely reviews a wide range of publications,
              including clinical practice guidelines, peer-reviewed journal
              articles, government health organizations, medical associations,
              and summary research articles. We use all types of materials
              across specialties to provide evidence-based, current, and
              regulatory-compliant educational content for patient and provider
              education. Below is a representative (but not exhaustive) list of
              the major sources we use, grouped by type:
            </p>
          </div>

          {/* Accordion List container */}
          <div className="pt-4 space-y-[2px]">
            {publicationSources.map((section) => {
              const isOpen = !!openSections[section.id];
              return (
                <div key={section.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full bg-[#0d211d] text-white flex justify-between items-center px-4 py-3 text-left font-semibold hover:bg-[#15342e] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">
                      {section.title}
                    </span>
                    <span className="text-xl font-light ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="bg-white border-x border-b border-slate-200 px-6 py-5">
                      <ul className="list-disc pl-4 space-y-1.5 marker:text-slate-800">
                        {section.items.map((item, index) => (
                          <li
                            key={index}
                            className="text-slate-800 text-sm sm:text-base"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
