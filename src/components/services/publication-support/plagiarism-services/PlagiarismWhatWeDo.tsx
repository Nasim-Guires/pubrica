"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  id: number;
  title: string;
  content: React.ReactNode;
}

export default function PlagiarismWhatWeDo() {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title:
        "Thoroughly detecting plagiarism and assessing AI-generated content",
      content: (
        <p>
          We use advanced in-house software tools and thoughtfully evaluate your
          manuscript,{" "}
          <Link href="/services/physician-writing-services/case-report" className="text-blue-600 no-underline hover:no-underline">
            case report
          </Link>
          , or{" "}
          <Link
            href="/services/physician-writing-services/original-research-article"
            className="text-blue-600 no-underline hover:no-underline"
          >
            original research article
          </Link>{" "}
          to identify sections of potential plagiarism concerns and ensure your
          content will be original and suitable for academic publishing. This
          will ensure authorship authenticity and textual originality.
        </p>
      ),
    },
    {
      id: 2,
      title: "Expert Review and Guidance",
      content: (
        <div className="space-y-4">
          <p>
            Our Pubrica editors, who also act as peer reviewers for various
            journals, have the expertise you need to revise your plagiarized
            material. Whether it is a{" "}
            <Link
              href="/services/research-services/systematic-review"
              className="text-blue-600 no-underline hover:no-underline"
            >
              systematic review
            </Link>
            ,{" "}
            <Link
              href="/services/research-services/meta-analysis"
              className="text-blue-600 no-underline hover:no-underline"
            >
              meta-analysis
            </Link>
            , or complex{" "}
            <Link
              href="/services/research-services/medical-writing"
              className="text-blue-600 no-underline hover:no-underline"
            >
              medical writing
            </Link>
            , we can direct you with the changes needed to maintain integrity in
            your manuscript.
          </p>
          <p>
            Ideal for research paper plagiarism checking across journals in life
            sciences, clinical medicine, and pharma.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Detailed Revision Support",
      content: (
        <p>
          Along with identifying areas of concern, we provide a detailed report
          of the revisions needed, allowing you to make informed adjustments to
          your manuscript.
        </p>
      ),
    },
    {
      id: 4,
      title: "Enhanced Manuscript Integrity",
      content: (
        <p>
          By ensuring your{" "}
          <Link
            href="/services/research-services/systematic-review"
            className="text-blue-600 no-underline hover:no-underline"
          >
            systematic review
          </Link>
          ,{" "}
          <Link href="/services/research-services/meta-analysis" className="text-blue-600 no-underline hover:no-underline">
            meta-analysis
          </Link>{" "}
          are completely free from plagiarism, we protect your academic
          integrity and greatly enhance your chances for acceptance in
          publication.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-4 md:py-8 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-2">
          What We do
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 max-w-5xl">
          Pubrica&apos;s services for detecting{" "}
          <Link href="/academy/plagiarism-service/academic-paraphrasing-and-plagiarism-prevention" className="text-blue-600 no-underline hover:no-underline">
            plagiarism
          </Link>{" "}
          and assessing AI-generated content are vital to assuring the
          originality and integrity of your manuscript. We use a combination of
          manual and electronic checks in order to detect potential plagiarism
          and prevent copyright infringements before submission.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
          {/* Left Side: Image Collage */}
          <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
            {/* Light gray circular/blob background accent */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-slate-100 rounded-full -z-10 left-6 top-4" />

            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-3/5 h-[200px] sm:h-[240px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/publication-support/plagiarism-services/Plagiarism-Check-Service-what-we-do.png"
                alt="Expert presenting data"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full space-y-0">
            {accordionData.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div
                  key={item.id}
                  className="border-t-[1.5px] border-[#133735]"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left py-3 flex items-start gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="text-xl font-medium text-[#133735] leading-none mt-0.5 shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                    <span className="text-base md:text-lg font-semibold text-[#133735]">
                      {item.title}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                      ? "max-h-[500px] opacity-100 pb-4"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="pl-8 text-sm md:text-base text-slate-700 leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t-[1.5px] border-[#133735]" />
          </div>
        </div>

        {/* Footer Paragraph */}
        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl">
          Choose Pubrica&apos;s{" "}
          <Link
            href="/services/publication-support/plagiarism-services/modern-plagiarism-detection"
            className="text-blue-600 no-underline hover:no-underline"
          >
            Plagiarism detection
          </Link>{" "}
          and AI analysis services to secure the originality of your academic
          content with comprehensive, reliable plagiarism detection. Contact us
          today to prepare your document for submission with confidence.
        </p>
      </div>
    </section>
  );
}