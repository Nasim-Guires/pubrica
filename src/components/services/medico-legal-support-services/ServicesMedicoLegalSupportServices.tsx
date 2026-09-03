"use client";

import React, { useState } from "react";
import Link from "next/link";
import CommonUploadButton from "@/components/common/CommonUploadButton";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";

export default function ServicesMedicoLegalSupportServices() {
  // State to handle accordion toggles (null means none are open by default)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Evidence-Based Case Reviews",
      content: (
        <>
          All analyses are grounded in globally recognized clinical practice guidelines, including those from{" "}
          <a href="https://www.nice.org.uk/process/pmg6/resources/the-guidelines-manual-pdf-2007970804933" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            NICE
          </a>
          ,{" "}
          <a href="https://www.ahrq.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            AHRQ
          </a>
          , and{" "}
          <a href="https://www.icmr.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            ICMR
          </a>
          , and supported by Level A evidence such as randomized controlled trials and{" "}
          <Link href="/services/research-services/systematic-review/" className="text-blue-600">
            systematic reviews
          </Link>
          .
        </>
      ),
    },
    {
      title: "Compliance with Legal and Regulatory Standards",
      content:
        "Our reports adhere to national medical council policies, legal frameworks, and global health regulations such as those from the WHO, ensuring full regulatory alignment.",
    },
    {
      title: "Full-Spectrum Medico-Legal Support",
      content:
        "Through comprehensive medico legal case screening services, malpractice evaluation, and insurance dispute consultation, we deliver an integrated service model.",
    },
    {
      title: "Court-Ready Reports and Litigation Support",
      content: (
        <>
          Each report is structured for legal admissibility and supported by professional{" "}
          <Link href="/" className="text-blue-600">
            litigation support services
          </Link>
          , offering precise and defensible conclusions for attorneys, insurers, forensic teams, and judicial bodies.
        </>
      ),
    },
  ];

  return (
    <main className="w-full text-slate-800 bg-white font-sans leading-relaxed">
      {/* Hero Banner Section */}
      <HeroBanner
        title="Medico-Legal Support Services"
        description="Pubrica offers comprehensive Medico-Legal Support Services, providing expert analysis and consultation to ensure accurate and ethical resolution of medical-legal matters."
        headingAs="h1"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-6 md:py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2b28] mb-4">
              Medico-Legal Services: Bridging Medicine and Law with Expertise and Precision
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Provide expert, evidence-based{" "}
              <Link href="/academy/medico-legal/medico-legal-services-in-ensuring-justice/" className="text-blue-600">
                medico legal support services
              </Link>{" "}
              to establish the precise, credible, and legal aspects of medical negligence cases. Our team of medical and legal experts offers reliable assistance with complex medical malpractice, personal injury claims, and insurance disputes. Through professional medico legal consulting services, we assist legal professionals, insurers, and healthcare professionals in understanding the intersection of medicine and law in a clear, professional, and precise manner.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <GetFreeQuoteButton />
              <CommonUploadButton
                href="/uploads/Medico-Legal-Support-Services_compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Brochure
              </CommonUploadButton>
            </div>
          </div>

          {/* Image Section Placeholder */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md h-64 sm:h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/medico-legal-support-services/Medico-Legal-Services-Bridging-Medicine-and-Law-with-Expertise-and-Precision.webp"
                alt="Medico-legal services bridging medicine and law"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 28rem"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Accordion Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-7">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b2b28] mb-3">
            Expert Medico-Legal Services for Medical Negligence & Insurance Dispute Claims
          </h2>
          <h3 className="text-base sm:text-lg font-semibold text-[#1b2b28] mb-4">
            Evidence-Based Expert Medical Negligence Legal Case Analysis and Expert Representation to Uphold Patient Rights
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-gray-700">
            <p>
              Pubrica provides specialised{" "}
              <Link href="/services/medico-legal-support-services/medico-legal-support-services-healthcare/" className="text-blue-600">
                medico legal support services
              </Link>{" "}
              in medical negligence, malpractice, and insurance claims disputes. Our expert medical and legal professionals offer sound assessments based on evidence to support legal proceedings and protect patient rights. Whether the situation involves a clinical negligence claim, litigation readiness, or a dispute regarding insurance coverage denial, we can help you determine if the standard of care was breached and assess the resulting harm.
            </p>

            <p>
              Consult with Pubrica’s medico-legal experts for a complete, evidence-backed case review. We analyse medical records, treatment protocols, and clinical timelines through professional{" "}
              <Link href="/academy/medico-legal-support-service/how-to-become-a-medical-legal-expert-witness/" className="text-blue-600 ">
                medical record review services
              </Link>{" "}
              to assess liability, breach of duty, and causation, ensuring your medical negligence litigation is supported by clear, objective, and court-defensible findings.
            </p>

            <p>
              Our team is committed to aligning every opinion with the highest standards of legal and clinical practice, providing unmatched clarity in civil, criminal, and insurance-related medico-legal cases. Organizations that{" "}
              <Link href="/academy/medico-legal/medico-legal-services-in-ensuring-justice/" className="text-blue-600 ">
                outsource medico legal services
              </Link>{" "}
              to Pubrica gain access to specialized expertise, structured case analysis, and reliable medico-legal documentation.
            </p>
          </div>
        </div>

        {/* Dynamic Split Layout: Left Images & Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          {/* Left Side: Dual Image Placeholder */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative w-full h-44 rounded-lg overflow-hidden">
              <Image
                src="/images/medico-legal-support-services/Medico-legal-consulting-services-providing-expert-medical-opinions.webp"
                alt="Medico-legal consulting services providing expert medical opinions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="w-full h-44 rounded-lg hidden" aria-hidden="true" />
          </div>

          {/* Right Side: Interactive Accordion List (All Closed by Default) */}
          <div className="lg:col-span-7 border-t border-b border-gray-200 divide-y divide-gray-200">
            {accordionItems.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-black">
                      <span className="mr-2 text-gray-500 font-normal">
                        {isOpen ? "-" : "+"}
                      </span>
                      {item.title}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-gray-600 pl-4 border-l-2 border-gray-300">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note positioned to the side/floated matching the reference layout style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          <div className="lg:col-span-5"></div>
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-gray-600 text-left">
              At Pubrica, we empower legal teams, healthcare professionals, and insurers with medico legal services that are authoritative, evidence-based, and aligned with best clinical practices. Let our experts help you build a strong, defensible case with confidence and clarity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}