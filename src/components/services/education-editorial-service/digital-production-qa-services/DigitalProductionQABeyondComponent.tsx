
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AccordionItem {
  title: string;
  content: string;
}

export default function DigitalProductionQABeyondComponent() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const accordionData: AccordionItem[] = [
    {
      title: "Publishing & Production Expertise",
      content: "QA specialists at our facility have many years of experience with the processes involved in publishing both scientific and academic works."
    },
    {
      title: "End-to-End QA Coverage",
      content: "Complete Digital Production Lifecycle – we account for the publishing process through to post-publication audits in the Total Digital Production Lifecycle."
    },
    {
      title: "Time-Efficient & Reliable",
      content: "By maintaining a proactive and detailed QA process, we cut down on both the standard cycle of revisions and delays in publishing."
    },
    {
      title: "Global Publishing Standards",
      content: "We provide QA checks to help you ensure the quality of your publishing materials and to help you comply with industry standards."
    },
    {
      title: "Tailored QA Solutions",
      content: "All of our services have been tailored to fit the needs and requirements of the specific journals, publishers and institutions that we serve."
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 font-sans">
      {/* Top Section: Why Choose Pubrica for Digital Production QA */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Column: Images */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/education-editorial-service/digital-production-qa-services/Why-Choose-Pubrica-for-Digital-Production-QA.webp"
              alt="Why Choose Pubrica for Digital Production QA"
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,40vw"
            />
          </div>
        </div>

        {/* Right Column: Content & Accordion */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why Choose Pubrica for Digital Production QA
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            The quality assurance of all our services, including the digital production quality assurance service, will have been supported by empirical evidence and undergo strict verification through testing before publication. Our Digital Production QA Services are used by publishers around the world and by many universities and research academic organizations because they are accurate and reliable.
          </p>

          {/* Accordion / Dropdown List */}
          <div className="space-y-3 pt-4">
            {accordionData.map((item, index) => {
              const isOpen = openAccordion === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-gray-200 pb-3"
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                    className="flex items-center justify-between w-full py-2 text-left text-gray-800 font-semibold focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-gray-500 font-bold">{isOpen ? "−" : "+"}</span>
                      {item.title}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pl-6 pt-2 pb-3 text-gray-600 text-sm leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section: Sample Work & Full Report Download */}
      <div className="max-w-7xl mx-auto bg-[#f4fbf7] rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Sample Work Image */}
        <div className="lg:col-span-5 relative h-[350px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/education-editorial-service/digital-production-qa-services/Digital-Production-QA-Services-Sample-Work.webp"
            alt="Digital Production QA Services Sample Work"
            fill
            className="object-cover"
            sizes="(max-width:1024px)100vw,40vw"
          />
        </div>

        {/* Right Column: Sample Work Content */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Digital Production QA Services Sample Work
          </h3>
          <div>
            <Link
              href="/insights/individual-patient-data-from-randomized-trials"
              className="inline-block bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 shadow-md"
            >
              Discover More
            </Link>
          </div>

          <div className="pt-4 space-y-3">
            <h4 className="text-xl font-bold text-gray-900">
              Download the Full Report Now
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              Our Digital Production QA Example represents an extremely thorough Quality Assurance process for checking all components, including layouts, XML, Metadata and Final Output files. The QA process is designed to confirm that all content is accurate and consistent and is compliant. The finished product is ready for publication and meets the highest possible quality standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}