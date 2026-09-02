"use client";

import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  coverImage: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Pubrica helped transform my raw data into a well-structured manuscript ready for submission. Their attention to detail and peer-review support made all the difference.",
    author: "DR. EMILY CARTER",
    role: "Academic Researcher – Oncology, UK",
    image: "/images/medical-writing/book-01.jpg",
  },
  {
    id: 2,
    quote:
      "We urgently needed CSR and CTD summaries. Pubrica delivered ICH-compliant documents on time with seamless coordination.",
    author: "JAMES MITCHELL",
    role: "Regulatory Affairs Manager – USA",
    image: "/images/medical-writing/scropt-2.jpg",
  },
  {
    id: 3,
    quote:
      "Pubrica delivered a compelling white paper and pitch deck that helped us secure funding.",
    author: "DR. ANNA MÜLLER",
    role: "Biotech Co-Founder – EU",
    image: "/images/medical-writing/book-01.jpg",
  },
];

export default function QualityAndTestimonials(): React.ReactElement {
  const [current, setCurrent] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = mobile
    ? testimonialsData.length - 1
    : testimonialsData.length - 2;

  return (
    <div className="w-full font-sans text-slate-800">
      <section className="bg-[#f0f9f6] py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 pr-0 md:pr-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-snug">
                Guaranteed Quality & Satisfaction
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We take pride in our work. If, exceptionally, you are not
                completely satisfied with your work product, we will revise as
                often as necessary until your requirements are satisfied. All of
                our work is subjected to complete quality control, scientific
                validation, and plagiarism checks to ensure we deliver the
                absolute best in medical writing.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-slate-100 flex flex-col justify-between">
              <h3 className="text-lg font-bold text-[#09322e] mb-3">
                Regulatory Compliance Across Global Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our content satisfies the requirements of the SFDA, FDA, EMA,
                MHRA, and TGA. We abide by the EU MDR/IVDR for medical device
                documentation, and similarly adhere to ICH-GCP, as well as the
                CONSORT, PRISMA, and STROBE reporting guidelines. Your documents
                are always submission-ready, anywhere in the world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#09322e] mb-3">
                  Native English-Speaking Medical Writers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our writers are native English speakers with advanced degrees
                  and subject-matter expertise, ensuring clarity without
                  compromising scientific precision.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#09322e] mb-3">
                  Dual-Layer Quality Control
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every deliverable is reviewed by a second specialist for
                  scientific accuracy, guideline compliance, and language
                  quality before delivery.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#09322e] mb-3">
                  Confidentiality & Data Security
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We operate under strict NDAs and secure data-handling
                  protocols so your unpublished research and proprietary
                  information remain protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <MovingTestimonials data={testimonialsData} />
    </div>
  );
}
