"use client";

import React, { useState } from "react";

// --- Testimonial Data Type ---
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
    coverImage:
      "https://placehold.co/120x150/09322e/ffffff?text=CLINICAL+PRACTICE",
  },
  {
    id: 2,
    quote:
      '"We urgently needed CSR and CTD summaries. Pubrica delivered ICH-compliant documents on time with seamless coordination."',
    author: "JAMES MITCHELL",
    role: "Regulatory Affairs Manager – USA",
    coverImage:
      "https://placehold.co/120x150/09322e/ffffff?text=PROBLEM+SOLVING",
  },
];

export default function QualityAndTestimonials(): React.ReactElement {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <div className="w-full font-sans text-slate-800">
      {/* ---------------- SECTION 1: GUARANTEED QUALITY & VALUE PROPS ---------------- */}
      <section className="bg-[#f0f9f6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Top Row: Unboxed Intro (Left) & Boxed Feature (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Header / Intro (No White Box) */}
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

            {/* Right Feature Card (White Boxed) */}
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

          {/* Bottom Row: 3 Equal Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#09322e] mb-3">
                  Information Security & Confidentiality
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your data is protected using strict NDAs, encrypted and
                  access-controlled systems, and ISO-certified information
                  security protocols.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#09322e] mb-3">
                  Subject Matter Experts & Internal Training
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your content is produced by PhD- or MD-level experts with
                  experience in oncology, cardiology, rare diseases, digital
                  health, medical devices, and biotech. Our team is undergoing
                  continuous training on changing GCP, MDR, FDA and Scientific
                  Writing Standards.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#09322e] mb-3">
                  Fast Turnaround Without Compromising Quality
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We hit deadlines accurately. With the support of a talented
                  team of project managers, our processes guarantee
                  communication, accountability, and delivery, on time—without
                  compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: TESTIMONIALS ---------------- */}
      <section className="bg-[#f4f5f5] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e]">
            Testimonials
          </h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-[#244b41] text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-start justify-between gap-6 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Left Side Text Content */}
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

                {/* Right Side Journal / Book Thumbnail */}
                <div className="flex-shrink-0 w-24 sm:w-28 shadow-md rounded overflow-hidden border border-emerald-900/50">
                  <img
                    src={item.coverImage}
                    alt={item.author}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveSlide(0)}
              aria-label="Slide 1"
              className={`w-3 h-3 rounded-full transition-colors ${
                activeSlide === 0
                  ? "bg-[#09322e]"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
            <button
              onClick={() => setActiveSlide(1)}
              aria-label="Slide 2"
              className={`w-3 h-3 rounded-full transition-colors ${
                activeSlide === 1
                  ? "bg-[#09322e]"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
