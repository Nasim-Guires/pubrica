"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import WhoWeServeSection from "./WhoWeServeSection";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Who We Serve Data with Unsplash Image URLs
const whoWeServeData = [
    {
        title: "Pharmaceutical & Biotech Companies",
        bullets: [
            "Slide decks and training kits for medical liaisons and HCP engagement",
            "CME-ready content for physician education and post-marketing programs",
            "Research-focused content for publication and clinical trial education",
        ],
        imageUrl:
            "/images/physician-writing-services/physician-training/Pharmaceutical-Biotech-Companies-1.jpg",
    },
    {
        title: "Medical Device & Diagnostics Companies",
        bullets: [
            "Procedural guides and simulation training decks for new device adoption",
            "Diagnostic algorithms and clinical pathway content for specialists",
            "KOL training programs and medical affairs presentation decks",
        ],
        imageUrl:
            "/images/physician-writing-services/physician-training/Medical-Device-Diagnostics-Companies.jpg",
    },
    {
        title: "Hospitals, Health Systems & Medical Institutions",
        bullets: [
            "Standardized clinical training modules for medical residents and fellows",
            "Continuing medical education (CME) resources for hospital medical staff",
            "Institutional guidelines and protocol implementation materials",
        ],
        imageUrl:
            "/images/physician-writing-services/physician-training/Hospitals-Health-Systems-Medical-Institutions.jpg",
    },
    {
        title: "Academic & Research Institutions",
        bullets: [
            "Manuscript writing and publication process training decks",
            "Clinical research methodology and biostatistics workshop content",
            "Grant writing and evidence synthesis instructional resources",
        ],
        imageUrl:
            "/images/physician-writing-services/physician-training/Academic-Research-Institutions.jpg",
    },
    {
        title: "Healthcare Communication & CME Providers",
        bullets: [
            "Accreditation-aligned slide decks, post-test questions, and syllabus development",
            "Interactive case studies for online and in-person CME events",
            "End-to-end educational content for medical education agencies",
        ],
        imageUrl:
            "/images/physician-writing-services/physician-training/Healthcare-Communication-CME-Providers.jpg",
    },
    {
        title: "Nutraceutical & Life Sciences Companies",
        bullets: [
            "Evidence-based education on dietary supplements and nutraceuticals",
            "Mechanisms of action (MoA) visual decks for clinician education",
            "Safety and clinical study summary training materials",
        ],
        imageUrl:
            "/images/physician-writing-services/physician-training/Nutraceutical-Life-Sciences-Companies.jpg",
    },
];

// Process Steps Data (Configured with alternating top/bottom positions)
const trainingProcessSteps = [
    {
        stepNumber: 1,
        title: "INITIAL CONSULTATION & NEEDS ASSESSMENT",
        description:
            "Our process starts with a comprehensive consultation to identify the clinical specialty, learning goals, learner demographics (e.g., residents, faculty, practicing physicians), and any regulatory/institutional requirements (e.g., CME credits, NABH compliance).",
        position: "bottom", // Card at bottom, badge at top
        iconSrc: "/icons/Initial-Consultation-Needs-Assessment.png", // Optional icon path
    },
    {
        stepNumber: 2,
        title: "CURRICULUM DESIGN & MODULE PLANNING",
        description:
            "Drawing on the defined scope, our medical education specialists and clinical specialists are developing structured learning modules based on international guidance (e.g., WHO, NICE, ESMO, AHA) that relate to your clinical context.",
        position: "top", // Card at top, badge at bottom
        iconSrc: "/images/icons/Curriculum-Design-Module-Planning.png",
    },
    {
        stepNumber: 3,
        title: "CONTENT DEVELOPMENT",
        description:
            "We create evidence-based training materials, including: Specialty-specific clinical modules, Case scenarios and simulations, CME-ready content and assessments, and Interactive or SCORM-compliant e-learning modules (optional).",
        position: "bottom",
        iconSrc: "/images/icons/Content-Development.png",
    },
    {
        stepNumber: 4,
        title: "REVIEW & VALIDATION",
        description:
            "All contents are reviewed in-house by senior clinicians and medical educators. We confirm accuracy, conformance to guidelines, and educational value before launching.",
        position: "top",
        iconSrc: "/images/icons/Review-Validation.png",
    },
    {
        stepNumber: 5,
        title: "DELIVERY & ACCESS",
        description:
            "Training is delivered in the selected format: Digital modules (PDF, LMS, SCORM), Instructor-led sessions (virtual/on-site), or Recorded webinars or simulation walkthroughs.",
        position: "bottom",
        iconSrc: "/images/icons/Delivery-Access.png",
    },
    {
        stepNumber: 6,
        title: "FEEDBACK, EVALUATION & CERTIFICATION",
        description:
            "We are collecting participant feedback, conducting post-training assessments (if applicable), and distributing participation or CME certificates. Optional outcome reports can also be produced to evaluate the training impact.",
        position: "top",
        iconSrc: "/images/icons/Feedback-Evaluation-Certification.png",
    },
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
            "Up-to-date references from peer-reviewed journals, systematic reviews, and clinical trial registries",
        ],
    },
    {
        id: "research",
        category: "Research & Methodology Compliance",
        items: [
            "PRISMA, CONSORT, STROBE, and SPIRIT - for content involving trial reporting, clinical research, and observational studies",
            "GRADE and CASP frameworks - For appraisal of evidence quality and guideline strength",
        ],
    },
    {
        id: "educational",
        category: "Educational & Accreditation Standards",
        items: [
            "CME/CPD Accreditation Alignment: We create content that meets the standards set by ACCME, EACCME, and national medical councils",
            "Bloom's Taxonomy & Adult Learning Principles: To ensure content is outcome-driven, engaging, and appropriate for professional learners",
            "SCORM/xAPI Compliance: For e-learning module compatibility with LMS systems",
        ],
    },
    {
        id: "ethics",
        category: "Ethics, Transparency & Publishing Standards",
        items: [
            "Good Publication Practice (GPP3)",
            "ICMJE and EQUATOR Network standards for authorship and reporting",
            "Data privacy and confidentiality compliance in line with HIPAA, GDPR, and institutional ethics guidelines",
        ],
    },
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
            <section className="py-12 md:py-16 px-4 md:px-8 bg-[#EAEAEA] w-full text-center font-sans overflow-hidden border-t border-gray-200">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B353D] mb-2">
                    How Our Physician Training Service Works
                </h2>

                <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
                    Our step-by-Step Process
                </h3>

                <p className="max-w-4xl mx-auto text-[#4B5563] text-xs md:text-sm leading-relaxed mb-12 md:mb-16">
                    With Pubrica&apos;s physician training service, our expert clinicians,
                    researchers, and academic trainers deliver specialty-focused,
                    evidence-based training modules that equip physicians with the skills
                    required for clinical research, scientific writing, and publication.
                </p>

                {/* ============================================================ */}
                {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
                {/* ============================================================ */}
                <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
                    {trainingProcessSteps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="relative flex items-center w-full min-h-[160px]"
                            >
                                {/* Connecting Vertical Line */}
                                {index !== trainingProcessSteps.length - 1 && (
                                    <div
                                        className={`absolute top-8 bottom-0 w-[2px] bg-[#0081A7] z-0 ${isEven ? "left-4" : "right-4"
                                            }`}
                                    />
                                )}

                                {/* Step Number Badge */}
                                <div
                                    className={`absolute z-10 w-9 h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${isEven ? "left-0" : "right-0"
                                        }`}
                                >
                                    {step.stepNumber}
                                </div>

                                {/* Step Card Container */}
                                <div
                                    className={`w-full flex ${isEven ? "pl-10 pr-2" : "pr-10 pl-2"
                                        }`}
                                >
                                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-sm shadow-xs p-4 flex flex-col items-center text-center w-full z-10">
                                        {step.iconSrc && (
                                            <div className="w-10 h-10 relative mb-3 flex items-center justify-center">
                                                <Image
                                                    src={step.iconSrc}
                                                    alt={step.title}
                                                    width={36}
                                                    height={36}
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}

                                        <h4 className="font-bold text-[#0F172A] text-xs mb-2 leading-snug">
                                            {step.title}
                                        </h4>

                                        <p className="text-[#64748B] text-[11px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ============================================================ */}
                {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout          */}
                {/* ============================================================ */}
                <div
                    className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
                    style={{
                        gridTemplateColumns: `repeat(${trainingProcessSteps.length}, minmax(0, 1fr))`,
                    }}
                >
                    {trainingProcessSteps.map((step, index) => {
                        const isTop = step.position === "top";

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
                            >
                                {/* UPPER SECTION */}
                                <div className="w-full flex flex-col items-center justify-end flex-1 pb-0">
                                    {!isTop ? (
                                        /* Card placed at Top */
                                        <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                                            {step.iconSrc && (
                                                <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                                                    <Image
                                                        src={step.iconSrc}
                                                        alt={step.title}
                                                        width={38}
                                                        height={38}
                                                        className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                    />
                                                </div>
                                            )}

                                            <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                                                {step.title}
                                            </h4>

                                            <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Badge + Vertical Connector Line */
                                        <div className="flex flex-col items-center justify-end w-full">
                                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-3">
                                                {step.stepNumber}
                                            </div>
                                            <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                                        </div>
                                    )}
                                </div>

                                {/* CENTER HORIZONTAL LINE SEGMENT */}
                                <div className="w-full h-[8px] relative my-0 shrink-0">
                                    <div
                                        className={`h-full bg-[#0081A7] w-full transition-colors duration-300 group-hover:bg-black ${index === 0
                                            ? "rounded-l-sm"
                                            : index === trainingProcessSteps.length - 1
                                                ? "rounded-r-sm"
                                                : ""
                                            }`}
                                    />
                                </div>

                                {/* LOWER SECTION */}
                                <div className="w-full flex flex-col items-center justify-start flex-1 pt-0">
                                    {isTop ? (
                                        /* Card placed at Bottom */
                                        <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                                            {step.iconSrc && (
                                                <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                                                    <Image
                                                        src={step.iconSrc}
                                                        alt={step.title}
                                                        width={38}
                                                        height={38}
                                                        className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                    />
                                                </div>
                                            )}

                                            <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                                                {step.title}
                                            </h4>

                                            <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Vertical Connector Line + Badge */
                                        <div className="flex flex-col items-center justify-start w-full">
                                            <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-3">
                                                {step.stepNumber}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. Satisfaction Banner */}
            <section className="bg-[#122826] text-white py-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center shrink-0 overflow-hidden">
                            <Image
                                src="/images/publication-support/journal-selection/Satisfaction_Guarantee.webp"
                                alt="100% Satisfaction Guarantee"
                                width={160}
                                height={160}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-1">
                                Enhance our specialized training, ensuring quicker delivery of
                                top-notch manuscripts.
                            </h3>

                            <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
                                Access clinical education specialists who provide
                                specialty-specific training modules, allowing you to stay
                                up-to-date on evidence-based guidelines and improve your clinical
                                performance in real-time.
                            </p>
                        </div>
                    </div>


                </div>
            </section>
            <GetFreeQuoteButton />
            {/* 4. Our Compliance and Guideline Standards (Closed Accordions by Default) */}
            <section className="py-7 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
                            Our Compliance and Guideline Standards
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            At Pubrica, we believe that every piece of physician training
                            content we create is based on scientific rigor, educational
                            integrity, and worldwide regulatory standards. Whether it is a
                            slide deck for clinical training, a CME module, or a workshop
                            guide, our materials are informed by the most respected standards
                            in medicine, research, and education.
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
                                            {isOpen ? (
                                                <Minus className="w-5 h-5" />
                                            ) : (
                                                <Plus className="w-5 h-5" />
                                            )}
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
                        By following these standards, we will ensure that your physician
                        training content is accurate, compliant, credible, and publishable,
                        and ready for real-world applications in clinics, academia, and
                        industry.
                    </p>
                </div>
            </section>
        </div>
    );
}