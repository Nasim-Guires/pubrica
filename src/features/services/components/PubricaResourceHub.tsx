"use client"


import React, { useState } from "react";
import { Plus, Minus, Download, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DynamicInsightsSection from "@/components/services/DynamicInsightsSection";

export default function PubricaResourceHub() {

  // --- TESTIMONIALS DATA ---
  const testimonials = [
    {
      id: 1,
      quote:
        "I was overwhelmed with reviewer comments, but Pubrica's scientific experts helped draft precise, evidence-backed responses that led to final acceptance.",
      author: "DR. R. PATEL",
      role: "Postdoctoral Fellow, Pharmacology",
      journalName: "CLINICAL PROBLEM-SOLVING",
      journalSub: "The New England Journal of Medicine",
      image:
        "/images/publication-support/scropt-2.jpg",
    },
    {
      id: 2,
      quote:
        "From the login to uploading a file and entering metadata, Pubrica handled the submission process seamlessly. Their support was timely and accurate.",
      author: "DR. M. THOMAS",
      role: "Research Scientist, Public Health",
      journalName: "CLINICAL PRACTICE",
      journalSub: "The New England Journal of Medicine",
      image:
        "/images/publication-support/book-01.jpg",
    },
    {
      id: 3,
      quote:
        "Pubrica helped me shortlist the most suitable journals aligned with my manuscript's scope. Their detailed recommendations saved me weeks of research.",
      author: "DR. ANANYA RAO",
      role: "Assistant Professor, Life Sciences",
      journalName: "JOURNAL SELECTION",
      journalSub: "Pubrica Publication Support",
      image:
        "/images/publication-support/book-01.jpg",
    },
  ];

  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  const testimonialSlides = [
    testimonials.slice(0, 2),
    testimonials.slice(2, 3),
  ];
  // --- FAQ DATA ---
  const initialFaqs = [
    {
      id: 1,
      question:
        "How can I increase the chances of getting my research paper published in a high-impact journal?",
      answer:
        "Improve your chances of getting published by selecting an appropriate journal, complying with authors’ requirements, having robust methodologies, offering clear results, and revising your paper through thorough editing.",
      isOpen: true,
    },
    {
      id: 2,
      question: "Why do research papers get rejected by journals?",
      answer:
        "Research papers face high chances of rejection if there is poor study design, a lack of originality, poor methodology, ambiguity, mismatch with journal scope, or failure to comply with author guidelines.",
      isOpen: false,
    },
    {
      id: 3,
      question:
        "How can I avoid submitting my manuscript to predatory journals?",
      answer:
        "To avoid predatory journals, researchers can use tools such as indexing databases (Scopus, Web of Science, etc.), evaluating the publisher’s legitimacy, reviewing editorial boards, peer review processes, and consulting reputable sources or experts.",
      isOpen: false,
    },
    {
      id: 4,
      question:
        "How long does the academic journal publication process take?",
      answer:
        "The process of publishing a research paper in academic journals takes approximately 3 to 12 months, depending upon various factors such as peer review, revisions, etc.",
      isOpen: true,
    },
    {
      id: 5,
      question:
        "How can research teams improve publication success across multiple projects?",
      answer:
        "Researchers can increase their publication success rate by standardizing the publication process, conducting robust research design, fostering effective collaboration, delivering quality writing, and planning for journal targeting early in the research process.",
      isOpen: true,
    },
    {
      id: 6,
      question:
        "What are the benefits of using professional publication support services?",
      answer:
        "Professional publication support services help improve the quality, clarity, and structure of manuscripts. It also helps with journal guideline adherence and submission readiness",
      isOpen: false,
    },
    {
      id: 7,
      question:
        ". What are the key factors journals consider before accepting a manuscript?",
      answer:
        "The journal checks the originality of the research, its relevance to the journal’s scope, methodology, clarity of the writing, significance of the research findings, ethical issues, and adherence to journal submission guidelines.",
      isOpen: false,
    },
    {
      id: 8,
      question:
        ".What are the best strategies to publish research in indexed journals?",
      answer:
        "Publish in indexed journals by selecting the right journal for your work, following author guidelines, using robust methodology, providing clear results, writing well, and revising your work based on feedback from peers.",
      isOpen: false,
    },
  ];

  const [faqs, setFaqs] = useState(initialFaqs);

  const toggleFaq = (id: number) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq,
      ),
    );
  };

  return (
    <div className="bg-slate-50 text-[#1e293b] font-sans antialiased">
      {/* ================= SECTION 1: SAMPLE WORK BANNER ================= */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-[#effcf4] border border-emerald-100 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Cover Book Graphic */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group w-full max-w-[240px] shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-md">
                <Image
                  src="/images/publication-support/W-2-The-Role-of-the-Corresponding-Author-in-Research-Publication-1-723x1024.jpg"
                  alt="The Role of the Corresponding Author in Research Publication"
                  width={723}
                  height={1024}
                  className="w-full h-auto object-cover transition duration-700"
                  priority
                />
              </div>
            </div>
            {/* Right Download Information */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f60]">
                  Publication Support Sample Work
                </h3>
                <Link
                  href="/insights/sample-work"
                  className="mt-3 inline-block px-8 py-2.5 bg-black hover:bg-slate-900 active:scale-95 text-white font-bold text-xs tracking-wider uppercase rounded-full transition-all"
                >
                  Discover More
                </Link>
              </div>

              <div className="border-t border-emerald-200/60 pt-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d4f60] mb-2">
                  Download the full Report Now
                </h3>
                <p className="text-slate-600 text-sm max-w-xl leading-relaxed">
                  Explore our{" "}
                  <Link
                    href="/services/publication-support/journal-selection/journal-selection-alcoholic-liver-disease/"
                    className="text-sky-600 font-semibold cursor-pointer hover:text-sky-700"
                  >
                    Publication Support
                  </Link>
                  Services sample work tailored to your manuscript's scope,
                  indexing requirements, and impact factor goals.
                </p>
                <Link
                  href="/insights/sample-work"
                  className="mt-4 px-8 py-2.5 bg-black hover:bg-slate-900 active:scale-95 text-white font-bold text-xs tracking-wider uppercase rounded-full inline-flex items-center gap-2 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Discover More
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Quality Statement */}
          <p className="mt-8 pt-6 border-t border-emerald-200/60 text-xs sm:text-sm text-slate-600 leading-relaxed text-center sm:text-left">
            Pubrica meets crest standards and protocols of journal publishing
            ethics in every single phase of services and processes. Pubrica
            adheres to authorship guidelines drafted by the International
            Council of Medical Journal Editors (ICMJE), and the scope for
            services will be routinely updated as per the Committee on
            Publication Ethics (COPE) and International Society of Medical
            Publication Professionals guidelines (ISMPP).
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: TESTIMONIALS & FAQ ================= */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* TESTIMONIALS SUBSECTION */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f60] mb-8 text-center sm:text-left">
              Testimonials
            </h2>

            {/* Horizontal slider container */}
            <div className="relative">
              {/* Testimonial Slides */}

              <div className="overflow-hidden">
                {testimonialSlides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${testimonialSlide === slideIndex
                      ? "block"
                      : "hidden"
                      }`}
                  >
                    {slide.map((test) => (
                      <div
                        key={test.id}
                        className="bg-[#0f443b] text-white rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl"
                      >
                        <div className="flex min-h-[140px]">
                          {/* Testimonial Content */}
                          <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between min-w-0">
                            <div className="relative">
                              <Quote className="absolute top-0 right-0 w-8 h-8 text-[#115e51] opacity-50" />

                              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic pr-6">
                                "{test.quote}"
                              </p>
                            </div>

                            <div className="mt-4">
                              <h4 className="font-bold tracking-wide text-[#10b981] text-xs sm:text-sm">
                                {test.author}
                              </h4>

                              <p className="text-[10px] sm:text-xs text-slate-300 italic mt-1">
                                {test.role}
                              </p>
                            </div>
                          </div>

                          {/* Journal / Book Image */}
                          <div className="w-[105px] sm:w-[120px] shrink-0 bg-white flex items-center justify-center p-2">
                            <div className="w-[105px] sm:w-[120px] shrink-0 bg-white flex items-center justify-center p-2">
                              <Image
                                src={test.image}
                                alt={test.author}
                                width={120}
                                height={150}
                                className="w-full h-auto max-h-[125px] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {testimonialSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTestimonialSlide(index)}
                    aria-label={`Show testimonial slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full ${testimonialSlide === index
                      ? "w-2.5 h-2.5 bg-emerald-600"
                      : "w-2.5 h-2.5 bg-slate-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FAQ SUBSECTION */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f60] mb-8 text-center sm:text-left">
              Frequently Asked Questions – Publication Support Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {/* Column 1 */}
              <div className="space-y-4">
                {faqs
                  .filter((f) => f.id <= 4)
                  .map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left font-bold text-sm sm:text-base text-[#0d4f60] hover:bg-slate-100/50 transition-colors"
                      >
                        <span>
                          {faq.id}. {faq.question}
                        </span>
                        {faq.isOpen ? (
                          <Minus className="w-4 h-4 shrink-0 ml-2" />
                        ) : (
                          <Plus className="w-4 h-4 shrink-0 ml-2" />
                        )}
                      </button>
                      {faq.isOpen && (
                        <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {faqs
                  .filter((f) => f.id > 4)
                  .map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left font-bold text-sm sm:text-base text-[#0d4f60] hover:bg-slate-100/50 transition-colors"
                      >
                        <span>
                          {faq.id}. {faq.question}
                        </span>
                        {faq.isOpen ? (
                          <Minus className="w-4 h-4 shrink-0 ml-2" />
                        ) : (
                          <Plus className="w-4 h-4 shrink-0 ml-2" />
                        )}
                      </button>
                      {faq.isOpen && (
                        <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: INSIGHTS SECTION (live from Academy) ================= */}
      <DynamicInsightsSection
        categorySlug="publication-support"
        limit={6}
        className="py-7 px-4 sm:px-6 lg:px-8 bg-slate-50"
      />
    </div>
  );
}
