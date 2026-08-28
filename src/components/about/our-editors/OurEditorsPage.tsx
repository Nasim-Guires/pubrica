"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface NavSubItem {
  id: string;
  label: string;
  href: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
  href?: string;
  subItems?: NavSubItem[];
}

export interface SocietyLogo {
  name: string;
  src: string;
}

export interface DoctorProfile {
  id: number;
  name: string;
  experience: string;
  location: string;
  image: string;
}

const doctorsList: DoctorProfile[] = [
  {
    id: 1,
    name: "Dr. Maria MD",
    experience: "10 Years Experience",
    location: "United States of America",
    image: "/images/academy/Maria-1.webp",
  },

  {
    id: 2,
    name: "  Dr. R. J MPharm MD",
    experience: "18Years Experience",
    location: " United States of America",
    image: "/images/academy/rah.webp",
  },


  {
    id: 3,
    name: " Dr. Michelle MD",
    experience: "16Years Experience",
    location: " United States of America",
    image: "/images/academy/Michelle.webp",
  },




  {
    id: 4,
    name: "  Dr. Ravi Kumar",
    experience: "20Years Experience ",
    location: "India",
    image: "/images/academy/ravikumar.webp",
  },



  {
    id: 5,
    name: " Dr. AJ MD",
    experience: "5Years Experience",
    location: " United States of America",
    image: "/images/academy/AJ.webp",
  },



  {
    id: 6,
    name: "Dr. Giles MD",
    experience: "20 Years Experience",
    location: "United States of America",
    image: "/images/academy/Giles.webp",
  },




  {
    id: 7,
    name: "  Dr. Isaac Newton",
    experience: "20Years Experience ",
    location: "India",
    image: "/images/academy/isac.webp",
  },


  {
    id: 8,
    name: "Dr. Jay MD",
    experience: "12Years Experience",
    location: " United States of America",
    image: "/images/academy/Jay.webp",
  },



  {
    id: 9,
    name: " Dr. Laurence MD ",
    experience: "7Years Experience ",
    location: " United States of America",
    image: "/images/academy/Laurence-rf2b3g6phrgj082al6gifqrvchf0qy7raorsobv1m0.webp",
  },


  {

    id: 10,
    name: "Dr. Julies MD",
    experience: "30Years Experience",
    location: " United States of America",
    image: "/images/academy/Julie.webp",
  },
];



export default function OurEditorsPage() {
  const [activeSidebar, setActiveSidebar] = useState("our-editors");
  // Manage open accordions (MEET THE EXPERTS & SUBJECT AREA open by default)
  const [openAccordions, setOpenAccordions] = useState<string[]>([
    "experts",
    "subject",
  ]);

  // Active doctor carousel state
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  // Switch to next doctor
  const handleNextDoctor = () => {
    setCurrentDoctorIndex((prev) => (prev + 1) % doctorsList.length);
  };

  // Switch to previous doctor
  const handlePrevDoctor = () => {
    setCurrentDoctorIndex((prev) => (prev - 1 + doctorsList.length) % doctorsList.length);
  };

  // Auto-switch doctor every 2 minutes (120,000 ms)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextDoctor();
    }, 120000);

    return () => clearInterval(timer);
  }, [currentDoctorIndex]);

  const currentDoctor = doctorsList[currentDoctorIndex];

  const sidebarLinks: NavLinkItem[] = [
    {
      id: "experts",
      label: "MEET THE EXPERTS",
      subItems: [
        { id: "our-editors", label: "OUR EDITORS", href: "/about-us/our-editors" },
        { id: "editor-profile", label: "EDITOR PROFILE", href: "/scientific-editor-profile" },
        { id: "editor-speak", label: "EDITOR SPEAK", href: "/editor-speak" },
      ],
    },
    {
      id: "subject",
      label: "SUBJECT AREA",
      subItems: [
        { id: "medicine", label: "MEDICINE", href: "/about-us/medicine" },
        { id: "life-science", label: "LIFE SCIENCE", href: "/about-us/life-sciences" },
        { id: "physical-sciences", label: "PHYSICAL SCIENCES AND ENGINEERING", href: "/about-us/physical-sciences-engineering" },
      ],
    },
    {
      id: "therapeutic",
      label: "THERAPEUTIC EXPERTISE",
      href: "/therapeutic-expertise",
    },
    {
      id: "membership",
      label: "GLOBAL PARTNERS AND MEMBERSHIP",
      href: "/strategic-partnerships-memberships",
    },
    {
      id: "contact",
      label: "CONTACT US",
      href: "/contact",
    },
    {
      id: "careers",
      label: "CAREERS",
      href: "/careers",
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Publisher Logos
  const publisherLogos: SocietyLogo[] = [
    {
      name: "Cambridge logo",
      src: "/images/academy/cambridge-logo.webp",
    },
    {
      name: "Elsevier",
      src: "/images/academy/elsevier-logo.webp",
    },
    {
      name: "Lund",
      src: "/images/academy/lund-logo.webp",
    },
    {
      name: "McGraw",
      src: "/images/academy/mcgrow-logo.webp",
    },
    {
      name: "Northwestern",
      src: "/images/academy/northwestern-logo.webp",
    },
    {
      name: "Oxford University Press",
      src: "/images/academy/oxford-logo.webp",
    },
  ];

  // Doubled logos array to ensure continuous seamless infinite looping
  const carouselLogos = [...publisherLogos, ...publisherLogos];

  return (
    <main className="w-full bg-[#fcfcfd] font-sans text-slate-800 min-h-screen">
      {/* 1. Header Banner */}
      <section className="w-full bg-[#1b2b28] text-white py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-[#2d4842] p-8 sm:p-10 rounded-sm bg-[#162422]/60 shadow-inner">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Our Editors
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 font-medium">
            Across all disciplines
          </p>
        </div>
      </section>

      {/* 2. Main Layout Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-[#1b2b28]">
                <span className="text-emerald-700 font-bold">★</span>
                <h2 className="text-sm font-bold tracking-wide uppercase">
                  About Us
                </h2>
              </div>

              <nav className="space-y-1 pt-2">
                {sidebarLinks.map((item) => {
                  const hasSubItems = item.subItems && item.subItems.length > 0;
                  const isOpen = openAccordions.includes(item.id);

                  if (hasSubItems) {
                    return (
                      <div key={item.id} className="space-y-1">
                        {/* Parent Accordion Button */}
                        <button
                          type="button"
                          onClick={() => toggleAccordion(item.id)}
                          className="w-full flex items-center gap-2.5 text-xs font-bold p-2 rounded transition-colors text-left text-slate-800 hover:bg-slate-50"
                        >
                          <span
                            className={`w-5 h-5 flex items-center justify-center text-xs font-bold text-white transition-colors ${isOpen ? "bg-amber-500" : "bg-slate-500"
                              }`}
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                          <span className="leading-tight">{item.label}</span>
                        </button>

                        {/* Nested Sub-items */}
                        {isOpen && (
                          <div className="pl-8 space-y-1.5 py-1">
                            {item.subItems?.map((sub) => {
                              const isSubActive = activeSidebar === sub.id;
                              return (
                                <Link
                                  key={sub.id}
                                  href={sub.href}
                                  onClick={() => setActiveSidebar(sub.id)}
                                  className={`block text-[11px] font-bold leading-snug transition-colors ${isSubActive
                                      ? "text-blue-600 underline font-extrabold"
                                      : "text-blue-600 hover:underline"
                                    }`}
                                >
                                  • {sub.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  /* Standard Direct Nav Links */
                  return (
                    <Link
                      key={item.id}
                      href={item.href || "#"}
                      onClick={() => setActiveSidebar(item.id)}
                      className="flex items-center gap-2.5 text-xs font-bold p-2 rounded transition-colors text-slate-800 hover:bg-slate-50"
                    >
                      <span className="w-5 h-5 bg-slate-500 text-white flex items-center justify-center text-xs font-bold">
                        +
                      </span>
                      <span className="leading-tight">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="lg:col-span-9 space-y-10">
            {/* Title & Introduction */}
            <header className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28]">
                Our Subject-Matter Experts (SMEs)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Native English language editors in your field of specialization. Pubrica Scientific Writing & Publishing writers work across various subjects; they work as scientists, professors, publishers, doctors, medical writers, and therapeutic experts. This ensures high-quality standards across various journals, guidelines, and best practices.
              </p>
            </header>

            {/* Why Pubrica Writers Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#1b2b28] border-b border-slate-200 pb-2">
                Why are Pubrica writers the best in the industry?
              </h3>

              <div className="space-y-5">
                <article className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#146e56]">
                    1. Professional writers only
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pubrica selects experienced professionals—all our writers and editors hold PhD/Master's degrees from leading global universities alongside native language expertise. They undergo stringent testing and quality checks at every publication stage.
                  </p>
                </article>

                <article className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#146e56]">
                    2. Native language experts
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We hire native English editors from Canada, Australia, the UK, and the US to guarantee complete clarity, coherence, and precision for high-tier academic journals.
                  </p>
                </article>

                <article className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#146e56]">
                    3. Vast publishing expertise
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our editorial team averages over two decades of experience working as peer reviewers and certified writers across leading international publications.
                  </p>
                </article>
              </div>
            </div>

            {/* Patrons of Elite Societies & Logos */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <h3 className="text-base font-bold text-[#1b2b28]">
                Patrons of elite societies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our editors maintain active memberships across well-known editorial institutions such as EMWA, AMWA, BELS, EASE, and CSE.
              </p>

              {/* Publisher Logos Continuous Smooth Carousel (Shows 5 at a time) */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="w-full overflow-hidden">
                  <div className="flex items-center animate-logo-slide space-x-8">
                    {carouselLogos.map((logo, index) => (
                      <div
                        key={`${logo.name}-${index}`}
                        className="relative flex-shrink-0 w-1/5 h-20 flex items-center justify-center p-2"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            sizes="(max-width: 768px) 33vw, 20vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Expert Profile Showcase Carousel */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 text-center max-w-md mx-auto shadow-sm space-y-4 relative group">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={handlePrevDoctor}
                aria-label="Previous Doctor"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={handleNextDoctor}
                aria-label="Next Doctor"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Active Doctor Image */}
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-slate-100 border-2 border-emerald-600 relative shadow-inner">
                <Image
                  src={currentDoctor.image}
                  alt={currentDoctor.name}
                  fill
                  sizes="80px"
                  className="object-cover transition-all duration-300"
                />
              </div>

              {/* Active Doctor Information */}
              <div className="space-y-1 px-6">
                <h4 className="text-sm font-bold text-[#1b2b28]">
                  {currentDoctor.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {currentDoctor.experience} • {currentDoctor.location}
                </p>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                {doctorsList.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentDoctorIndex(idx)}
                    aria-label={`Go to profile ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${idx === currentDoctorIndex
                        ? "w-5 bg-emerald-600"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Call to Action Banner */}
            <div className="bg-[#f0f7f4] border border-emerald-200/80 rounded-2xl p-8 sm:p-10 text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1b2b28]">
                Pubrica experts are with you at every stage...
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Click on the button and fill up the form; a project coordinator will contact you within an hour's time.
              </p>
              <div>
                <Link
                  className="inline-block bg-[#0b3328] hover:bg-[#06241c] text-white text-xs sm:text-sm font-bold px-8 py-3 rounded-md transition-colors shadow-sm"
                  href="/contact"
                >
                  Get a Quote →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Style Definition for Smooth Infinite Logo Sliding Animation */}
      <style jsx global>{`
        @keyframes logoSlide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logo-slide {
          display: flex;
          width: 200%;
          animation: logoSlide 30s linear infinite;
        }
        .animate-logo-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}