
"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface SocietyLogo {
  name: string;
  src: string;
}

export default function OurEditorsPage() {
  const [activeSidebar, setActiveSidebar] = useState("experts");

  const sidebarLinks: NavLinkItem[] = [
    { id: "experts", label: "MEET THE EXPERTS", href: "/about-us/our-editors" },
    { id: "subject", label: "SUBJECT AREA", href: "/about-us/subject-area" },
    { id: "therapeutic", label: "THERAPEUTIC EXPERTISE", href: "/about-us/therapeutic-expertise" },
    { id: "membership", label: "GLOBAL PARTNERS AND MEMBERSHIP", href: "/about-us/global-partners" },
    { id: "contact", label: "CONTACT US", href: "/contact" },
    { id: "careers", label: "CAREERS", href: "/careers" },
  ];

  // Publisher Logos
  const publisherLogos: SocietyLogo[] = [
    {
      name: "Elsevier",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Elsevier_logo.svg/512px-Elsevier_logo.svg.png",
    },
    {
      name: "Lund University",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Lund_University_seal.svg/512px-Lund_University_seal.svg.png",
    },
    {
      name: "McGraw Hill",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McGraw-Hill_Education_Logo.svg/512px-McGraw-Hill_Education_Logo.svg.png",
    },
    {
      name: "Northwestern University",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Northwestern_University_seal.svg/512px-Northwestern_University_seal.svg.png",
    },
    {
      name: "Oxford University Press",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Oxford_University_Press_logo.svg/512px-Oxford_University_Press_logo.svg.png",
    },
  ];

  return (
    <main className="w-full bg-[#fcfcfd] font-sans text-slate-800 min-h-screen">
      {/* 1. Header Banner */}
      <section className="w-full bg-[#1b2b28] text-white py-14 px-4 text-center">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
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

              <nav className="space-y-1.5 pt-2">
                {sidebarLinks.map((item) => {
                  const isActive = activeSidebar === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setActiveSidebar(item.id)}
                      className={`flex items-center gap-2 text-xs font-bold p-2.5 rounded-lg transition-colors group ${
                        isActive
                          ? "bg-emerald-50 text-emerald-900 border-l-4 border-[#1b8c6e]"
                          : "text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/70"
                      }`}
                    >
                      <span className="w-5 h-5 bg-slate-200 group-hover:bg-emerald-700 group-hover:text-white text-slate-600 rounded flex items-center justify-center text-[10px] font-bold transition-colors">
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

              {/* Publisher Logos Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                {publisherLogos.map((logo) => (
                  <div key={logo.name} className="relative w-28 h-14 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Profile Showcase */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 text-center max-w-md mx-auto shadow-sm space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-slate-100 border-2 border-emerald-600">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300"
                  alt="Dr. Giles MD"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1b2b28]">Dr. Giles MD</h4>
                <p className="text-xs text-slate-500 font-medium">
                  20 Years Experience • United States of America
                </p>
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
    </main>
  );
}