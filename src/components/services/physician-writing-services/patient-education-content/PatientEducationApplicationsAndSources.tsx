"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      image:
        "/images/physician-writing-services/patient-education-content/hospital-discharge-instruction-.png",
    },
    {
      id: 2,
      title: "Chronic disease management guides",
      image:
        "/images/physician-writing-services/patient-education-content/Chronic-disease-management-guides.jpg",
    },
    {
      id: 3,
      title: "Medication adherence tools",
      image:
        "/images/physician-writing-services/patient-education-content/Medication-adherence-tools.jpg",
    },
    {
      id: 4,
      title: "Pre- and post-operative patient materials",
      image:
        "/images/physician-writing-services/patient-education-content/Pre-and-post-operative-patient-materials.jpg",
    },
    {
      id: 5,
      title: "Clinical trial patient information sheets",
      image:
        "/images/physician-writing-services/patient-education-content/Clinical-trial-patient-information-sheets.jpg",
    },
    {
      id: 6,
      title: "Medical device usage tutorials",
      image:
        "/images/physician-writing-services/patient-education-content/Medical-device-usage-tutorials.jpg",
    },
  ];

  const therapeuticAreas = [
    {
      name: "Radiology",
      icon: "/images/icons/radiology.png",
      href: "/subject-matter-experts/radiology/",
    },
    {
      name: "Nuclear Medicine",
      icon: "/images/icons/nuclear-medicine.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Emergency medicine",
      icon: "/images/icons/emergency-medicine.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Internal medicine",
      icon: "/images/icons/internal-medicine.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Oncology",
      icon: "/images/icons/Oncology-1-1.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Cardiology",
      icon: "/images/icons/Cardiology-1.png",
      href: "/subject-matter-experts/cardiology/",
    },
    {
      name: "Neurology",
      icon: "/images/icons/Neurology-1.png",
      href: "/subject-matter-experts//neurology",
    },
    {
      name: "Otolaryngology",
      icon: "/images/icons/otolaryngology.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Obstetrics & Gynaecology",
      icon: "/images/icons/Obstetrics-Gynaecology-1.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Orthopaedics",
      icon: "/images/icons/Orthopaedics-1.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Gastroenterology",
      icon: "/images/icons/gastroenterology.png",
      href: "/subject-matter-experts",
    },
    {
      name: "Paediatrics",
      icon: "/images/icons/Paediatrics-1.png",
      href: "/subject-matter-experts",
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
              <Link
                key={idx}
                href={area.href}
                className="group flex flex-col items-center text-center space-y-4 focus:outline-none"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#0c2e3a] flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105 group-hover:bg-slate-50">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <Image
                      src={area.icon}
                      alt={`${area.name} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight group-hover:text-[#0c2e3a] transition-colors">
                  {area.name}
                </h3>
              </Link>
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