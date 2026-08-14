"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import WhoWeServeSection from './WhoWeServeSection';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

// Who We Serve Data with Unsplash Image URLs
const whoWeServeData = [
    {
        title: "Pharmaceutical & Biotech Companies",
        bullets: [
            "Slide decks and training kits for medical liaisons and HCP engagement",
            "CME-ready content for physician education and post-marketing programs",
            "Research-focused content for publication and clinical trial education"
        ],
        imageUrl: "/images/physician-writing-services/physician-training/Pharmaceutical-Biotech-Companies-1.jpg"
    },
    {
        title: "Medical Device & Diagnostics Companies",
        bullets: [
            "Procedural guides and simulation training decks for new device adoption",
            "Diagnostic algorithms and clinical pathway content for specialists",
            "KOL training programs and medical affairs presentation decks"
        ],
        imageUrl: "/images/physician-writing-services/physician-training/Medical-Device-Diagnostics-Companies.jpg"
    },
    {
        title: "Hospitals, Health Systems & Medical Institutions",
        bullets: [
            "Standardized clinical training modules for medical residents and fellows",
            "Continuing medical education (CME) resources for hospital medical staff",
            "Institutional guidelines and protocol implementation materials"
        ],
        imageUrl: "/images/physician-writing-services/physician-training/Hospitals-Health-Systems-Medical-Institutions.jpg"
    },
    {
        title: "Academic & Research Institutions",
        bullets: [
            "Manuscript writing and publication process training decks",
            "Clinical research methodology and biostatistics workshop content",
            "Grant writing and evidence synthesis instructional resources"
        ],
        imageUrl: "/images/physician-writing-services/physician-training/Academic-Research-Institutions.jpg"
    },
    {
        title: "Healthcare Communication & CME Providers",
        bullets: [
            "Accreditation-aligned slide decks, post-test questions, and syllabus development",
            "Interactive case studies for online and in-person CME events",
            "End-to-end educational content for medical education agencies"
        ],
        imageUrl: "/images/physician-writing-services/physician-training/Healthcare-Communication-CME-Providers.jpg"
    },
    {
        title: "Nutraceutical & Life Sciences Companies",
        bullets: [
            "Evidence-based education on dietary supplements and nutraceuticals",
            "Mechanisms of action (MoA) visual decks for clinician education",
            "Safety and clinical study summary training materials"
        ],
        imageUrl: "/images/physician-writing-services/physician-training/Nutraceutical-Life-Sciences-Companies.jpg"
    }
];

// Process Steps Data
const trainingProcessSteps = [
    {
        step: 1,
        title: "INITIAL CONSULTATION & NEEDS ASSESSMENT",
        description: "Our process starts with a comprehensive consultation to identify the clinical specialty, learning goals, learner demographics (e.g., residents, faculty, practicing physicians), and any regulatory/institutional requirements (e.g., CME credits, NABH compliance)."
    },
    {
        step: 2,
        title: "CURRICULUM DESIGN & MODULE PLANNING",
        description: "Drawing on the defined scope, our medical education specialists and clinical specialists are developing structured learning modules based on international guidance (e.g., WHO, NICE, ESMO, AHA) that relate to your clinical context."
    },
    {
        step: 3,
        title: "CONTENT DEVELOPMENT",
        description: "We create evidence-based training materials, including: Specialty-specific clinical modules, Case scenarios and simulations, CME-ready content and assessments, and Interactive or SCORM-compliant e-learning modules (optional)."
    },
    {
        step: 4,
        title: "REVIEW & VALIDATION",
        description: "All contents are reviewed in-house by senior clinicians and medical educators. We confirm accuracy, conformance to guidelines, and educational value before launching."
    },
    {
        step: 5,
        title: "DELIVERY & ACCESS",
        description: "Training is delivered in the selected format: Digital modules (PDF, LMS, SCORM), Instructor-led sessions (virtual/on-site), or Recorded webinars or simulation walkthroughs."
    },
    {
        step: 6,
        title: "FEEDBACK, EVALUATION & CERTIFICATION",
        description: "We are collecting participant feedback, conducting post-training assessments (if applicable), and distributing participation or CME certificates. Optional outcome reports can also be produced to evaluate the training impact."
    }
];

interface ComplianceItem {
    id: string;
    category: string;
    items: string[];
}
// Compliance & Guidelines Accordion Data
const complianceData: ComplianceItem[] = [
    {
        id: "clinical",
        category: "Clinical & Scientific Guidelines We Follow",
        items: [
            "Evidence-Based Medicine Standards (e.g., EBM Pyramid, Oxford CEBM)",
            "Clinical Guidelines from AHA, ADA, ESMO, WHO, NICE, CDC, IDSA, and others",
            "Up-to-date references from peer-reviewed journals, systematic reviews, and clinical trial registries"
        ]
    },
    {
        id: "research",
        category: "Research & Methodology Compliance",
        items: [
            "PRISMA, CONSORT, STROBE, and SPIRIT - for content involving trial reporting, clinical research, and observational studies",
            "GRADE and CASP frameworks - For appraisal of evidence quality and guideline strength"
        ]
    },
    {
        id: "educational",
        category: "Educational & Accreditation Standards",
        items: [
            "CME/CPD Accreditation Alignment: We create content that meets the standards set by ACCME, EACCME, and national medical councils",
            "Bloom's Taxonomy & Adult Learning Principles: To ensure content is outcome-driven, engaging, and appropriate for professional learners",
            "SCORM/xAPI Compliance: For e-learning module compatibility with LMS systems"
        ]
    },
    {
        id: "ethics",
        category: "Ethics, Transparency & Publishing Standards",
        items: [
            "Good Publication Practice (GPP3)",
            "ICMJE and EQUATOR Network standards for authorship and reporting",
            "Data privacy and confidentiality compliance in line with HIPAA, GDPR, and institutional ethics guidelines"
        ]
    }
];

export default function PhysicianTrainingWorkflowSection() {
    // Accordion state initialized to null so all accordions start CLOSED by default
  const [openCompliance, setOpenCompliance] = useState<string | null>(null);

const toggleCompliance = (id: string) => {
    setOpenCompliance(openCompliance === id ? null : id);
};
    return (
        <div className="w-full bg-white text-slate-800">

            {/* 1. Who We Serve Section */}
            <WhoWeServeSection />

            {/* 2. How Our Physician Training Service Works Section */}
            <section className="py-16 bg-[#f7f9fa] border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-2">
                            How Our Physician Training Service Works
                        </h2>
                        <h3 className="text-base font-semibold text-gray-700 mb-3">
                            Our step-by-Step Process
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            With Pubrica's physician training service, our expert clinicians, researchers, and academic trainers deliver specialty-focused, evidence-based training modules that equip physicians with the skills required for clinical research, scientific writing, and publication.
                        </p>
                    </div>

                    {/* Process Step Cards (White default, black on hover) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 pt-4">
                        {trainingProcessSteps.map((stepItem) => (
                            <div
                                key={stepItem.step}
                                className="relative bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:bg-[#2c2c2c] hover:text-white group cursor-pointer shadow-sm hover:shadow-xl"
                            >
                                {/* Step Circle Marker */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0083a8] text-white font-bold text-xs flex items-center justify-center border-2 border-white shadow">
                                    {stepItem.step}
                                </div>

                                <div className="pt-3 flex flex-col items-center text-center">
                                    <h4 className="font-bold text-xs uppercase tracking-wide mb-3 text-gray-800 group-hover:text-white transition-colors">
                                        {stepItem.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                                        {stepItem.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Satisfaction Banner */}
            <section className="bg-[#122826] text-white py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-300 flex items-center justify-center p-2 text-center text-[10px] font-bold uppercase text-amber-200 shrink-0 leading-tight">
                            100% Satisfaction Guarantee
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">
                                Enhance our specialized training, ensuring quicker delivery of top-notch manuscripts.
                            </h3>
                            <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
                                Access clinical education specialists who provide specialty-specific training modules, allowing you to stay up-to-date on evidence-based guidelines and improve your clinical performance in real-time.
                            </p>
                        </div>
                    </div>
                   <GetFreeQuoteButton/>
                </div>
            </section>

            {/* 4. Our Compliance and Guideline Standards (Closed Accordions by Default) */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
                            Our Compliance and Guideline Standards
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            At Pubrica, we believe that every piece of physician training content we create is based on scientific rigor, educational integrity, and worldwide regulatory standards. Whether it is a slide deck for clinical training, a CME module, or a workshop guide, our materials are informed by the most respected standards in medicine, research, and education.
                        </p>
                    </div>

                    {/* Accordion Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {complianceData.map((item) => {
                            const isOpen = openCompliance === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className="bg-[#f7f9fa] border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm"
                                >
                                    <button
                                        onClick={() => toggleCompliance(item.id)}
                                        className="w-full p-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <h3 className="font-bold text-sm text-[#1a3832]">
                                            {item.category}
                                        </h3>
                                        <div className="text-[#0083a8] shrink-0">
                                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>

                                    {/* Expandable Content (Hidden by default) */}
                                    {isOpen && (
                                        <div className="p-5 pt-2 border-t border-gray-100 text-xs sm:text-sm text-gray-700">
                                            <ul className="space-y-2 list-disc pl-4">
                                                {item.items.map((line, lIdx) => (
                                                    <li key={lIdx} className="leading-relaxed">
                                                        {line}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-center text-xs sm:text-sm text-gray-600 mt-10">
                        By following these standards, we will ensure that your physician training content is accurate, compliant, credible, and publishable, and ready for real-world applications in clinics, academia, and industry.          </p>
                </div>
            </section>

        </div>
    );
}