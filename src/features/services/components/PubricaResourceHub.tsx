"use client";

import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  BookOpen,
  ArrowRight,
  Download,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CommonFAQ from "@/components/common/FAQ";

export default function PubricaResourceHub() {
  // --- TESTIMONIALS DATA ---
  const testimonials = [
    {
      id: 1,
      quote:
        "I was overwhelmed with reviewer comments, but Pubrica's scientific experts helped draft precise, evidence-backed responses that led to final acceptance.",
      author: "DR. R. PATEL",
      role: "Postdoctoral Fellow, Pharmacology",
      image: "/images/publication-support/scropt-2.jpg",
    },
    {
      id: 2,
      quote:
        "From the login to uploading a file and entering metadata, Pubrica handled the submission process seamlessly. Their support was timely and accurate.",
      author: "DR. M. THOMAS",
      role: "Research Scientist, Public Health",
      image: "/images/publication-support/book-01.jpg",
    },
    {
      id: 3,
      quote:
        "Pubrica helped me shortlist the most suitable journals aligned with my manuscript's scope. Their detailed recommendations saved me weeks of research.",
      author: "DR. ANANYA RAO",
      role: "Assistant Professor, Life Sciences",
      image: "/images/publication-support/book-01.jpg",
    },
  ];

  const [mobileSlide, setMobileSlide] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);

  const desktopSlides = [
    [testimonials[0], testimonials[1]],
    [testimonials[1], testimonials[2]],
  ];

  // Independent automatic interval ensuring mobile loops through all 3 items, and desktop loops through 2 pairs
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % testimonials.length); // Loops 0 -> 1 -> 2 -> 0
      setDesktopSlide((prev) => (prev + 1) % desktopSlides.length); // Loops 0 -> 1 -> 0
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, desktopSlides.length]);

  // --- FAQ DATA ---
  const faqData = [
    {
      question:
        "How can I increase the chances of getting my research paper published in a high-impact journal?",
      answer:
        "Improve your chances of getting published by selecting an appropriate journal, complying with authors’ requirements, having robust methodologies, offering clear results, and revising your paper through thorough editing.",
    },
    {
      question: "Why do research papers get rejected by journals?",
      answer:
        "Research papers face high chances of rejection if there is poor study design, a lack of originality, poor methodology, ambiguity, mismatch with journal scope, or failure to comply with author guidelines.",
    },
    {
      question:
        "How can I avoid submitting my manuscript to predatory journals?",
      answer:
        "To avoid predatory journals, researchers can use tools such as indexing databases (Scopus, Web of Science, etc.), evaluating the publisher’s legitimacy, reviewing editorial boards, peer review processes, and consulting reputable sources or experts.",
    },
    {
      question:
        "How long does the academic journal publication process take?",
      answer:
        "The process of publishing a research paper in academic journals takes approximately 3 to 12 months, depending upon various factors such as peer review, revisions, etc.",
    },
    {
      question:
        "How can research teams improve publication success across multiple projects?",
      answer:
        "Researchers can increase their publication success rate by standardizing the publication process, conducting robust research design, fostering effective collaboration, delivering quality writing, and planning for journal targeting early in the research process.",
    },
    {
      question:
        "What are the benefits of using professional publication support services?",
      answer:
        "Professional publication support services help improve the quality, clarity, and structure of manuscripts. It also helps with journal guideline adherence and submission readiness.",
    },
    {
      question:
        "What are the key factors journals consider before accepting a manuscript?",
      answer:
        "The journal checks the originality of the research, its relevance to the journal’s scope, methodology, clarity of the writing, significance of the research findings, ethical issues, and adherence to journal submission guidelines.",
    },
    {
      question:
        "What are the best strategies to publish research in indexed journals?",
      answer:
        "Publish in indexed journals by selecting the right journal for your work, following author guidelines, using robust methodology, providing clear results, writing well, and revising your work based on feedback from peers.",
    },
  ];

  // --- INSIGHTS DATA ---
  const categories = ["Article", "How to Article", "News"];
  const [selectedCategory, setSelectedCategory] = useState("Article");

  const insights = [
    {
      title: "Examples of Search Terms from Published Studies",
      category: "Article",
      snippet:
        "In brief A search word (or search query) has a simple definition. A search term is a single word or phrase used to retrieve relevant information.",
      image:
        "/images/publication-support/Examples-of-Search-Terms-from-Published-Studies.webp",
    },
    {
      title: "How to Combine Search Terms for Research paper publication?",
      category: "Article",
      snippet:
        "In brief Quick searches with only one search term sometimes provide many irrelevant results. Combining terms improves accuracy.",
      image:
        "/images/publication-support/How-to-Combine-Search-Terms-for-Research-paper-publication.webp",
    },
    {
      title: "How to Develop a search strategy for a systematic review",
      category: "Article",
      snippet:
        "In brief A search strategy is a structured set of keywords used to search databases efficiently during systematic reviews.",
      image:
        "/images/publication-support/How-to-Develop-a-search-strategy-for-a-systematic-review.webp",
    },
    {
      title: "The Leading Journals Shaping Medical Understanding",
      category: "How to Article",
      snippet:
        "The Leading Journals Shaping Medical Understanding Home Blog High Impact Medical Journals Contact Us…",
      image:
        "/images/publication-support/Journal-Shaping-Medical-Understanding-768x478.webp",
    },
    {
      title: "Examples of Search Terms from Published Studies",
      category: "News",
      snippet:
        "In brief A search word (or search query) has a simple definition. A search term is a single word or phrase used to retrieve relevant information.",
      image:
        "/images/publication-support/Examples-of-Search-Terms-from-Published-Studies.webp",
    },
    {
      title: "How to Combine Search Terms for Research paper publication?",
      category: "News",
      snippet:
        "In brief Quick searches with only one search term sometimes provide many irrelevant results. Combining terms improves accuracy.",
      image:
        "/images/publication-support/How-to-Combine-Search-Terms-for-Research-paper-publication.webp",
    },
    {
      title: "How to Develop a search strategy for a systematic review",
      category: "News",
      snippet:
        "In brief A search strategy is a structured set of keywords used to search databases efficiently during systematic reviews.",
      image:
        "/images/publication-support/How-to-Develop-a-search-strategy-for-a-systematic-review.webp",
    },
  ];

  const filteredInsights = insights.filter(
    (item): item is NonNullable<typeof item> =>
      item !== undefined && item.category === selectedCategory,
  );

  return (
    <div className="bg-slate-50 text-[#1e293b] font-poppins antialiased text-[16px]">
      {/* ================= SECTION 1: SAMPLE WORK BANNER ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 font-poppins">
        <div className="max-w-6xl mx-auto bg-[#effcf4] border border-emerald-100/40 rounded-2xl p-6 sm:p-10 shadow-sm">
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
              <div className="flex flex-col items-start text-left">
                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-black tracking-tight">
                  Publication Support Sample Work
                </h3>
                <Link
                  href="/insights/sample-work/the-impact-of-drinking-water-sources-on-gut-microbial-diversity-in-canines-peer-review/"
                  className="mt-4 w-full sm:w-auto min-w-[320px] py-2 bg-black hover:bg-slate-900 active:scale-95 text-white font-medium text-[16px] font-poppins rounded-full transition-all inline-flex items-center justify-center text-center"
                >
                  Discover More
                </Link>
              </div>

              <div className="pt-2 flex flex-col items-start text-left">
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-black tracking-tight mb-3">
                  Download the full Report Now
                </h3>
                <p className="text-[#222222] font-poppins text-[16px] font-normal max-w-xl leading-[1.6]">
                  Explore our{" "}
                  <Link
                    href="/services/publication-support/journal-selection/journal-selection-alcoholic-liver-disease/"
                    className="text-[#64a2c7] font-normal cursor-pointer hover:underline"
                  >
                    Publication Support
                  </Link>{" "}
                  Services sample work tailored to your manuscript's scope,
                  indexing requirements, and impact factor goals.
                </p>
                <Link
                  href="/insights/sample-work/"
                  className="mt-5 w-full sm:w-auto min-w-[320px] py-2 bg-black hover:bg-slate-900 active:scale-95 text-white font-medium text-[16px] font-poppins rounded-full inline-flex items-center justify-center text-center transition-all"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Quality Statement */}
          <p className="mt-10 pt-6 border-t border-emerald-200/40 font-poppins text-[16px] font-normal text-[#111111] leading-[1.7] text-left">
            Pubrica meets crest standards and protocols of journal publishing
            ethics in every single phase of services and processes. Pubrica
            adheres to authorship guidelines drafted by the International
            Council of Medical{" "}
            <Link
              href="/services/publication-support/journal-selection/journal-citation-reports-impact-metrics-guide/"
              className="text-[#64a2c7] font-normal cursor-pointer hover:underline"
            >
              Journal
            </Link>{" "}
            Editors (ICMJE), and the scope for services will be routinely
            updated as per the Committee on Publication Ethics (COPE) and
            International Society of Medical Publication Professionals guidelines
            (ISMPP).
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: TESTIMONIALS & FAQ ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100 font-poppins">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* TESTIMONIALS SUBSECTION */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d4f60] mb-8 text-center sm:text-left font-poppins">
              Testimonials
            </h2>

            {/* Horizontal slider container */}
            <div className="relative">
              {/* Testimonial Slides */}
              <div className="max-w-6xl mx-auto px-4 py-8 overflow-hidden">
                {/* MOBILE VIEW: 3 slides sliding track (3 dots) */}
                <div
                  className="flex transition-transform duration-700 ease-in-out md:hidden"
                  style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
                >
                  {testimonials.map((test) => (
                    <div key={test.id} className="w-full shrink-0 px-1">
                      <div className="bg-[#185348] text-white rounded-lg shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[170px]">
                        <div className="flex h-full">
                          <div className="flex-1 p-6 flex flex-col justify-between z-10">
                            <p className="text-slate-100 text-[14px] leading-relaxed font-normal">
                              &quot;{test.quote}&quot;
                            </p>
                            <div className="mt-4">
                              <h4 className="font-bold tracking-wider text-white text-[13px] uppercase">
                                {test.author}
                              </h4>
                              <p className="text-[12px] text-slate-300 italic mt-0.5">
                                {test.role}
                              </p>
                            </div>
                          </div>
                          <div className="w-[140px] shrink-0 relative flex items-center justify-center p-2">
                            <Image
                              src={test.image}
                              alt={test.author}
                              width={160}
                              height={190}
                              className="object-contain max-h-[150px] drop-shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DESKTOP VIEW: 2 paired slides shifting incrementally (2 dots) */}
                <div
                  className="hidden md:flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${desktopSlide * (100 / 2)}%)`,
                  }}
                >
                  {desktopSlides.map((slidePair, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="w-full shrink-0 grid grid-cols-2 gap-6 px-1"
                    >
                      {slidePair.map((test, idx) => (
                        <div
                          key={`${slideIndex}-${test.id}-${idx}`}
                          className="bg-[#185348] text-white rounded-lg shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[170px]"
                        >
                          <div className="flex h-full">
                            <div className="flex-1 p-6 flex flex-col justify-between z-10">
                              <p className="text-slate-100 text-[14px] leading-relaxed font-normal">
                                &quot;{test.quote}&quot;
                              </p>
                              <div className="mt-4">
                                <h4 className="font-bold tracking-wider text-white text-[13px] uppercase">
                                  {test.author}
                                </h4>
                                <p className="text-[12px] text-slate-300 italic mt-0.5">
                                  {test.role}
                                </p>
                              </div>
                            </div>
                            <div className="w-[160px] shrink-0 relative flex items-center justify-center p-2">
                              <Image
                                src={test.image}
                                alt={test.author}
                                width={160}
                                height={190}
                                className="object-contain max-h-[150px] drop-shadow-md"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Navigation Indicators - Responsive dot counts */}
                <div className="flex justify-center items-center gap-2 mt-6">
                  {/* Mobile Dots (3 dots) */}
                  <div className="flex md:hidden gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={`mob-${index}`}
                        onClick={() => setMobileSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 transition-all duration-300 rounded-full ${
                          mobileSlide === index
                            ? "bg-[#185348] border-2 border-[#185348]"
                            : "bg-white border-2 border-slate-400"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Desktop Dots (2 dots) */}
                  <div className="hidden md:flex gap-2">
                    {desktopSlides.map((_, index) => (
                      <button
                        key={`desk-${index}`}
                        onClick={() => setDesktopSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 transition-all duration-300 rounded-full ${
                          desktopSlide === index
                            ? "bg-[#185348] border-2 border-[#185348]"
                            : "bg-white border-2 border-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ SUBSECTION - MOBILE FRIENDLY & POPPINS AT 16PX */}
          <div className="w-full overflow-hidden break-words font-poppins text-[16px]">
            <CommonFAQ
              title="Frequently Asked Questions"
              faqs={faqData}
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: INSIGHTS SECTION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 font-poppins text-[16px]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0d4f60] mb-2 text-center sm:text-left font-poppins">
              Insights
            </h2>
            <div className="h-1 w-12 bg-emerald-500 rounded mx-auto sm:mx-0" />
          </div>

          {/* Interactive Navigation Filter Tab Bar */}
          <div className="bg-[#0e4b4d] rounded-full p-1.5 max-w-lg mx-auto sm:mx-0 flex items-center justify-between shadow-inner">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`flex-1 text-center py-2 px-4 rounded-full text-[16px] font-bold tracking-wide font-poppins transition-all duration-300 ${
                  selectedCategory === tab
                    ? "bg-[#10b981] text-white shadow-md scale-105"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Dynamic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredInsights.map((card, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group font-poppins"
              >
                <div>
                  {/* Card Cover Image */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#0e4b4d] text-white text-[16px] font-bold px-2.5 py-1 rounded-full font-poppins">
                      {card.category}
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-extrabold text-slate-800 group-hover:text-sky-600 transition-colors text-[16px] leading-snug font-poppins">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-[16px] leading-relaxed line-clamp-3 font-poppins">
                      {card.snippet}
                    </p>
                  </div>
                </div>

                {/* Bottom link element */}
                <div className="p-5 pt-0 flex justify-end">
                  <span className="p-1.5 rounded-full bg-slate-100 group-hover:bg-sky-50 group-hover:text-sky-600 text-slate-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}