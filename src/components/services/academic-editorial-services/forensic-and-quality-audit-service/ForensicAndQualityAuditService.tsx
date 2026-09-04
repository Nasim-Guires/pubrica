'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Forensic & Quality Audit Services | Pubrica',
  description:
    'Pubrica provides meticulous forensic and quality audits designed to detect inconsistencies, ensure transparency, and uphold the highest ethical and technical standards in scholarly publishing.',
};

export default function ForensicAndQualityAuditService() {
  const auditFunctions = [
    {
      title: 'Forensic Audit:',
      description: 'Focused on uncovering fraud, financial misstatements, data manipulation, or non-compliance with laws and internal policies.',
    },
    {
      title: 'Quality Audit:',
      description: 'Evaluates the consistency, reliability, and effectiveness of processes, operations, and quality management systems against internal benchmarks and industry standards.',
    },
  ];

  const auditTypes = [
    {
      title: 'Data Integrity Audit',
      description: 'We verify the consistency, completeness, and authenticity of research data. This includes identifying anomalies, validating raw datasets, checking statistical procedures, and ensuring ethical data handling. Our audits detect potential manipulation, inconsistencies, or mismatches between described methods and data outcomes.',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Data-Integrity-Audit.png',
    },
    {
      title: 'Image Forensics and Authenticity Check',
      description: 'Our image experts conduct a thorough forensic review of scientific visuals, including microscopy images, graphs, medical scans, flow cytometry plots, and gel electrophoresis images. We identify duplications, splicing, contrast manipulation, resizing issues, and inconsistencies.',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Image-Forensics-and-Authenticity-Check.png',
    },
    {
      title: 'Manuscript Quality and Structural Audit',
      description: 'We evaluate the manuscript’s technical, scientific, and structural integrity, ensuring alignment with journal expectations. This includes checks for methodology clarity, reproducibility, ethical statements, reference accuracy, figure-table alignment, reporting compliance, and consistency across sections.',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Manuscript-Quality-and-Structural-Audit.png',
    },
    {
      title: 'Plagiarism and Authorship Verification',
      description: 'Using advanced tools and manual scrutiny, we assess text originality, citation accuracy, reference patterns, paraphrasing quality, and authorship validity. We detect self-plagiarism, mosaic plagiarism, improper attribution, and suspicious writing patterns.',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Plagiarism-and-Authorship-Verification.png',
    },
    {
      title: 'Methodology and Statistical Quality Check',
      description: 'Our statisticians and subject experts examine the adequacy, transparency, and reproducibility of statistical methods. We check sample sizes, hypotheses, tests applied, confidence intervals, p-values, effect sizes, and result interpretations.',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Methodology-and-Statistical-Quality-Check.png',
    },
    {
      title: 'Compliance and Regulatory Audit',
      description: 'We audit your research content for adherence to global scientific and ethical guidelines:',
      points: [
        'COPE (Publication Ethics)',
        'ICMJE (Authorship & Manuscript Requirements)',
        'CONSORT (Clinical Trials Reporting)',
        'PRISMA (Systematic Reviews)',
        'ARRIVE (Animal Research)',
        'GCP, GLP, and IRB requirements',
      ],
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Compliance-and-Regulatory-Audit.png',
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER SECTION ------------------- */}
      <HeroBanner
        title="Forensic & Quality Audit Services"
        description="At Pubrica, we provide meticulous forensic and quality audits designed to detect inconsistencies, ensure transparency, and uphold the highest ethical and technical standards in scholarly publishing."
        headingAs="h1"
      />

      {/* ------------------- INTRODUCTION & AUDIT FUNCTIONS SECTION ------------------- */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-[#0e2a22] mb-5 leading-tight">
          Strengthen Integrity. Ensure Compliance. Safeguard Research Credibility.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side Content & Bullet Points */}
          <div className="lg:col-span-7 text-xs md:text-sm text-gray-700 space-y-4 leading-relaxed">
            <p>
              In today’s evolving research and publication landscape, maintaining the accuracy, integrity, and authenticity of scholarly content is more important than ever. Academic institutions, researchers, publishers, and corporate organisations face increasing scrutiny related to data validity, scientific misconduct, plagiarism, duplication, authorship issues, reporting transparency, and compliance with global publishing standards. Even unintentional errors can undermine the reliability of research, damage reputations, and hinder publication success.
            </p>

            <p>
              Pubrica’s{' '}
              <Link
                href="/services/academic-editorial-services/forensic-and-quality-audit-service/forensic-audit-complete-guide/"
                className="text-blue-600"
              >
                Forensic and Quality Audit Service
              </Link>{' '}
              is crafted to ensure that your manuscript, dataset, visuals, or documentation meets the highest benchmarks of academic integrity and quality control. Our expert team performs deep-level examinations, evaluating data accuracy, image authenticity, methodology reporting, compliance with journal guidelines, and alignment with industry standards such as COPE, ICMJE, CONSORT, PRISMA, GCP, GLP, and ISO-based frameworks.
            </p>

            <p className="font-bold text-black pt-2">
              Our service integrates two powerful audit functions:
            </p>

            <ul className="space-y-3 pt-1 text-gray-700">
              {auditFunctions.map((fn, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold select-none">•</span>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {fn.title.replace(/:$/, '')}: {fn.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Right Side Image Container with Offset Dark Green Layer */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative w-full aspect-[4/3] max-w-[440px] mx-auto">
              {/* Offset Dark Green Frame Layer */}
              <div className="absolute inset-0 rounded-2xl transform -translate-x-5 translate-y-5"></div>

              {/* Main Image Overlay */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/academic-editorial-services/forensic-and-quality-audit-service/Forensic-Quality-Audit-Services.webp"
                  alt="Forensic and Quality Audit Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>  
      {/* ------------------- TYPES OF FORENSIC AND QUALITY AUDIT SERVICES WE OFFER ------------------- */}
      <section className="py-6 px-4 bg-[#f8faf9] border-y border-gray-100" aria-labelledby="types-heading">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 id="types-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
              Types of Forensic and Quality Audit Services We Offer
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              At Pubrica, we provide a comprehensive suite of Forensic and Quality Audit Services designed to identify risks, detect irregularities, strengthen internal controls, and ensure process integrity across your research, organisational, or operational workflows. Our specialised audit frameworks combine analytical rigor, investigative expertise, and industry best practices to deliver transparent, actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {auditTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between relative">
                <div className="absolute top-6 right-6 w-10 h-10">
                  <Image src={type.iconSrc} alt="" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 pr-8">{type.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{type.description}</p>
                  {type.points && (
                    <ul className="mt-2 space-y-1">
                      {type.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <span className="text-[#0b3b2c] font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}