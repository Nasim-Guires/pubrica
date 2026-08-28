"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  coverImage: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      '"Pubrica helped transform my raw data into a well-structured manuscript ready for submission. Their attention to detail and peer-review support made all the difference."',
    author: "DR. EMILY CARTER",
    role: "Academic Researcher – Oncology, UK",
    coverImage: "/images/medical-writing/book-01.jpg",
  },
  {
    id: 2,
    quote:
      '"We urgently needed CSR and CTD summaries. Pubrica delivered ICH-compliant documents on time with seamless coordination."',
    author: "JAMES MITCHELL",
    role: "Regulatory Affairs Manager – USA",
    coverImage: "/images/medical-writing/scropt-2.jpg",
  },
  {
    id: 3,
    quote:
      '"Pubrica delivered a compelling white paper and pitch deck that helped us secure funding."',
    author: "DR. ANNA MÜLLER",
    role: "Biotech Co-Founder – EU",
    coverImage: "/images/medical-writing/book-01.jpg",
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

      <section className="bg-white py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] text-center">
            Testimonials
          </h2>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * (mobile ? 100 : 50)}%)`,
              }}
            >
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-3"
                >
                  <div className="bg-[#244b41] text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-start justify-between gap-6 h-full">
                    <div className="flex-1 space-y-6 flex flex-col justify-between h-full">
                      <p className="text-xs sm:text-sm italic leading-relaxed text-slate-100">
                        {item.quote}
                      </p>
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-white">
                          {item.author}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-300 italic">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0 w-24 sm:w-28 h-36 shadow-md rounded overflow-hidden border border-emerald-900/50">
                      <Image
                        src={item.coverImage}
                        alt={item.author}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrent(Math.min(dot, maxSlide))}
                aria-label={`Slide ${dot + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === dot || (dot === 2 && current === maxSlide && !mobile)
                    ? "bg-[#09322e]"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
