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
  // Use an array to allow multiple accordion items to be open at once,
  // mimicking the behavior seen in the screenshots.
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
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
          <Link href="#case-report" className="text-sky-600 hover:underline">
            case report
          </Link>
          , or{" "}
          <Link
            href="#original-research"
            className="text-sky-600 hover:underline"
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
              href="#systematic-review"
              className="text-sky-600 hover:underline"
            >
              systematic review
            </Link>
            ,{" "}
            <Link
              href="#meta-analysis"
              className="text-sky-600 hover:underline"
            >
              meta-analysis
            </Link>
            , or complex{" "}
            <Link
              href="#medical-writing"
              className="text-sky-600 hover:underline"
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
            href="#systematic-review"
            className="text-sky-600 hover:underline"
          >
            systematic review
          </Link>
          ,{" "}
          <Link href="#meta-analysis" className="text-sky-600 hover:underline">
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
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8 font-sans">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-4">
          What We do
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-12 max-w-5xl">
          Pubrica&apos;s services for detecting{" "}
          <Link href="#plagiarism" className="text-sky-600 hover:underline">
            plagiarism
          </Link>{" "}
          and assessing AI-generated content are vital to assuring the
          originality and integrity of your manuscript. We use a combination of
          manual and electronic checks in order to detect potential plagiarism
          and prevent copyright infringements before submission.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start mb-12">
          {/* Left Side: Image Collage */}
          <div className="relative w-full h-[350px] sm:h-[400px] flex items-center justify-center">
            {/* Light gray circular/blob background accent */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-slate-100 rounded-full -z-10 left-10 top-10" />

            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-3/5 h-[220px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/publication-support/plagiarism-services/Plagiarism-Check-Service-what-we-do.png"
                alt="Expert presenting data"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-10 w-3/5 h-[220px] rounded-lg overflow-hidden shadow-lg border-4 border-white z-10">
              <Image
                src="/images/publication-support/plagiarism-services/Plagiarism-Check-Service-what-we-do.png"
                alt="Reviewing physical documents"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full space-y-0 pt-4">
            {accordionData.map((item) => {
              const isOpen = openItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="border-t-[1.5px] border-[#133735]"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
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
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[500px] opacity-100 pb-5"
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
            {/* Final bottom border for the last item to enclose the accordion */}
            <div className="border-t-[1.5px] border-[#133735]" />
          </div>
        </div>

        {/* Footer Paragraph */}
        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl">
          Choose Pubrica&apos;s{" "}
          <Link
            href="#plagiarism-detection"
            className="text-sky-600 hover:underline"
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
