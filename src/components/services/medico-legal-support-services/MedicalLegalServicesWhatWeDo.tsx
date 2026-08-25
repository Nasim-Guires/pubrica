"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  linkText?: string;
  linkHref?: string;
}

export interface ServicesWhatWeDoProps {
  className?: string;
}

export default function MedicalLegalServicesWhatWeDo({
  className = "",
}: ServicesWhatWeDoProps) {
  const servicesList: ServiceCardItem[] = [
    {
      id: "case-screening",
      title: "Case Screening & Legal Viability Assessment",
      description:
        "We quickly assess the merit and viability of medical cases, including malpractice claims, personal injury, and insurance disputes, through structured medico legal case screening services, helping legal teams determine the potential for success and allocate resources effectively.",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-support-services-for-healthcare-and-legal-professionals.webp",
    },
    {
      id: "record-review",
      title: "Medical Record Review & Interpretation",
      description:
        "Our specialists provide professional medical record review services, analysing and organising complex medical records, interpreting illegible handwriting, clarifying medical abbreviations, identifying missing or tampered records, and compiling comprehensive chronologies.",
      iconSrc: "/images/medico-legal-support-services/Medical-record-summary-services-simplifying-complex-patient-records.webp",
    },
    {
      id: "strategy-dev",
      title: "Case Strategy Development",
      description:
        "Working closely with legal teams, we help develop a solid medico-legal strategy by identifying the most persuasive medical facts and aligning them with legal standards through structured litigation support services.",
      iconSrc: "/images/medico-legal-support-services/Professional-litigation-support-services-for-complex-medical-cases.webp",
    },
    {
      id: "malpractice-eval",
      title: "Medical Malpractice Evaluation",
      description:
        "Our experts evaluate whether healthcare providers breached the duty of care and whether that breach resulted in patient harm. We assist in building strong cases for medical negligence litigation and malpractice insurance claims.",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-case-screening-services-for-early-legal-assessment.webp",
    },
    {
      id: "injury-assessment",
      title: "Personal Injury Assessment",
      description:
        "We provide detailed medical assessments in personal injury and trauma cases, analyzing injury severity, long-term impact, disability levels, and recovery timelines. These assessments strengthen legal compensation claims and insurance settlements.",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-consulting-services-supporting-healthcare-litigation-cases.webp",
    },
    {
      id: "forensic-cases",
      title: "Forensic Medicine and Criminal Cases",
      description:
        "Our forensic medicine specialists assist in criminal cases involving suspicious deaths, assaults, and bodily harm. We offer autopsy reviews, cause-of-death analysis, and other medico legal case screening services for law enforcement and legal teams.",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-support-services-for-medical-malpractice-cases.webp",
    },
    {
      id: "disability-claims",
      title: "Disability & Insurance Compensation Claims",
      description:
        "We perform independent medical evaluations (IMEs) for disability benefits, workers' compensation, and insurance dispute resolution, providing objective impairment ratings.",
      iconSrc: "/images/medico-legal-support-services/Outsource-medico-legal-services-for-law-firms-and-attorneys.webp",
    },
    {
      id: "compliance-support",
      title: "Regulatory Compliance Support",
      description:
        "We assess whether healthcare practices comply with applicable medical laws, clinical standards, and regulatory guidelines. Our reports help during investigations and can substantiate claims or defend providers in healthcare litigation.",
      iconSrc: "/images/medico-legal-support-services/Medical-record-review-services-for-insurance-and-legal-disputes.webp",
    },
    {
      id: "ethical-consultation",
      title: "Ethical & Legal Medical Consultation",
      description:
        "Through expert medico legal consulting services, we advise on complex ethical and legal issues such as informed consent, end-of-life care, patient confidentiality, and medical ethics in malpractice cases.",
      iconSrc: "/images/medico-legal-support-services/Detailed-medical-record-summary-services-for-court-proceedings.webp",
    },
    {
      id: "expert-opinion",
      title: "Medical Expert Consultation & Opinion",
      description:
        "Our consultants offer independent expert opinions, re-examine clinical findings, and revalidate scientific conclusions. This ensures alignment with evidence-based medical literature and legal relevance.",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-support-services-helping-attorneys-analyze-medical-records.webp",
    },
    {
      id: "injury-reports",
      title: "Injury Evaluation & Personal Injury Reports",
      description:
        "We assess physical trauma, long-term impact, and medical prognosis in cases involving road accidents, industrial injuries, disability claims, or workers’ compensation.",
      iconSrc: "/images/medico-legal-support-services/Medical-record-summary-services-for-legal-case-documentation.webp",
    },
    {
      id: "literature-review",
      title: "Medical Research & Literature Review",
      description:
        "Our experts conduct in-depth research across medical databases to support case arguments with clinical trial data, systematic reviews, and recognized Level A evidence.",
      iconSrc: "/images/medico-legal-support-services/Professional-medical-record-review-services-for-legal-teams.webp",
    },
    {
      id: "protocol-identification",
      title: "Standard Protocol Identification",
      description:
        "We determine if medical professionals adhered to accepted standards of care, and where care was substandard, we highlight safer or more effective alternatives.",
      iconSrc: "/images/medico-legal-support-services/Expert-medico-legal-support-services-for-healthcare-litigation-analysis.webp",
    },
    {
      id: "strength-analysis",
      title: "Case Strength Analysis",
      description:
        "We help legal professionals assess the strengths and vulnerabilities of each case, offering insights to guide settlement strategy or trial preparation.",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-case-screening-services-by-clinical-experts.webp",
    },
    {
      id: "medical-summaries",
      title: "Preparation of Medical Summaries",
      description:
        "Our specialists produce detailed medical record summary services, including injury-based case summaries, diagnostic details, historical medical data, and treatment timelines.",
      iconSrc: "/images/medico-legal-support-services/Litigation-support-services-with-expert-medico-legal-documentation.webp",
    },
    {
      id: "medico-drafting",
      title: "Comprehensive Medico-Legal Drafting",
      description:
        "Our team produces clear, accurate, and court-ready documentation, including reports, chronologies, and summaries. We merge complex medical content with legal language to ensure admissibility and comprehension.",
      iconSrc: "/images/medico-legal-support-services/Medical-record-summary-services-for-legal-documentation.webp",
    },
  ];

  return (
    <section className={`w-full bg-slate-50 py-16 text-slate-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b2b28] mb-6">
            What We Do
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-gray-700 max-w-5xl leading-relaxed">
            <p>
              At Pubrica, we provide a complete expert{" "}
              <Link href="/services/medico-legal-support-services" className="text-sky-600 underline font-medium">
                medico legal consulting services
              </Link>{" "}
              framework for law firms, insurers, healthcare professional teams, and legal professionals involved in disputes requiring expert medical opinions. We focus on medico-legal cases in the areas of medical negligence, personal injury assessment, insurance claims disputes, and forensic medical analysis.
            </p>
            <p>
              Our approach involves methodical medical case analysis,{" "}
              <Link href="/services/medico-legal-support-services" className="text-sky-600 underline font-medium">
                medical record summary services
              </Link>
              , record evaluation, standards-of-care comparison, and regulatory consultation, ensuring that each case is handled with diligence, accuracy, and legal credibility. We draw upon clinical guidelines, standard protocols, and graded levels of evidence to build robust legal strategies and defensible reports.
            </p>
          </div>
        </header>

        {/* 4-Column Grid for Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-lg p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image / Icon Section Div Placeholder */}
                <div className="relative w-12 h-12 mb-4">
                  <Image src={service.iconSrc} alt="" fill className="object-contain" sizes="48px" />
                </div>

                <h3 className="text-base font-bold text-[#1b2b28] mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner Section */}
        <div className="mt-16 bg-[#1b2b28] text-white rounded-md py-8 px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Trusted Medico-Legal Expertise for Every Case
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 max-w-4xl mx-auto">
            From medical negligence analysis to expert witness reporting, Pubrica delivers dependable medico-legal solutions across civil, criminal, and insurance law contexts. Contact us today for accurate, defensible, and timely medico legal support.
          </p>
        </div>
      </div>
    </section>
  );
}