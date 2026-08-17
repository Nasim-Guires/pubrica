'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
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
      description: 'We verify the consistency, completeness, and authenticity of research data. This includes identifying...',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Data-Integrity-Audit.png',
    },
    {
      title: 'Image Forensics and Authenticity Check',
      description: 'Our image experts conduct a thorough forensic review of scientific visuals, including microscopy images, graphs...',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Image-Forensics-and-Authenticity-Check.png',
    },
    {
      title: 'Manuscript Quality and Structural Audit',
      description: 'We evaluate the manuscript’s technical, scientific, and structural integrity, ensuring alignment with journal...',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Manuscript-Quality-and-Structural-Audit.png',
    },
    {
      title: 'Plagiarism and Authorship Verification',
      description: 'Using advanced tools and manual scrutiny, we assess text originality, citation accuracy, reference patterns...',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Plagiarism-and-Authorship-Verification.png',
    },
    {
      title: 'Methodology and Statistical Quality Check',
      description: 'Our statisticians and subject experts examine the adequacy, transparency, and reproducibility at statistical...',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Methodology-and-Statistical-Quality-Check.png',
    },
    {
      title: 'Compliance and Regulatory Audit',
      description: 'We audit your research content for adherence to global scientific and ethical guidelines...',
      iconSrc: '/images/academic-editorial-services/forensic-and-quality-audit-service/Compliance-and-Regulatory-Audit.png',
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER SECTION ------------------- */}
      <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
            Forensic & Quality Audit Services
          </h1>
          <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            At Pubrica, we provide meticulous forensic and quality audits designed to detect inconsistencies, ensure transparency, and uphold the highest ethical and technical standards in scholarly publishing.
          </p>
        </div>
      </section>

      {/* ------------------- INTRODUCTION & AUDIT FUNCTIONS SECTION ------------------- */}
      <section className="py-14 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-4">
            Strengthen Integrity. Ensure Compliance. Safeguard Research Credibility.
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left mb-4">
            In today’s evolving research and publication landscape, maintaining the accuracy, integrity, and authenticity of scholarly content is more important than ever. Academic institutions, researchers, publishers, and corporate organisations face increasing scrutiny related to data validity, scientific misconduct, plagiarism, duplication, authorship issues, reporting transparency, and compliance with global publishing standards. Even unintentional errors can undermine the reliability of research, damage reputations, and hinder publication success.
          </p>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left mb-6">
            Pubrica’s Forensic and Quality Audit Service is crafted to ensure that your manuscript, dataset, visuals, or documentation meets the highest benchmarks of academic integrity and quality control. Our expert team performs deep-level examinations, evaluating data accuracy, image authenticity, methodology reporting, compliance with journal guidelines, and alignment with industry standards such as COPE, ICMJE, CONSORT, PRISMA, GCP, GLP, and ISO-based frameworks.
          </p>
        </div>

        {/* Content Layout with List and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Our service integrates two powerful audit functions:
            </h3>
            <ul className="space-y-4 mb-8">
              {auditFunctions.map((fn, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-0.5">▪</span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{fn.title}</strong> {fn.description}
                  </p>
                </li>
              ))}
            </ul>

            <div>
              <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Side Image Box Mockup container */}
          <div className="bg-[#0b3b2c] p-4 rounded-xl shadow-lg flex justify-center items-center relative min-h-[280px] overflow-hidden">
            <Image
              src="/images/academic-editorial-services/forensic-and-quality-audit-service/Forensic-Quality-Audit-Services.webp"
              alt="Forensic and Quality Audit Services"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ------------------- TYPES OF FORENSIC AND QUALITY AUDIT SERVICES WE OFFER ------------------- */}
      <section className="py-14 px-4 bg-[#f8faf9] border-y border-gray-100" aria-labelledby="types-heading">
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
                  <p className="text-xs text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}