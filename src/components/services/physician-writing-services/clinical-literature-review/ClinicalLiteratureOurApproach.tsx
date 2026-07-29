"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CategoryItem {
  id: string;
  title: string;
  items: string[];
}

const reviewCategories: CategoryItem[] = [
  {
    id: "diseases",
    title: "Diseases, Conditions & Populations",
    items: [
      "Specific medical conditions (e.g., oncology, cardiology, infectious diseases, rare diseases)",
      "Special populations (e.g., paediatric, geriatric, pregnant patients, immunocompromised)",
      "Comorbidities and risk stratification",
    ],
  },
  {
    id: "drugs",
    title: "Drugs, Ingredients & Biological Substances",
    items: [
      "Active pharmaceutical ingredients (APIs)",
      "Excipients and delivery system materials",
      "Biosimilars and biologics (e.g., monoclonal antibodies, vaccines)",
      "Natural compounds and traditional medicine ingredients (e.g., plant-based actives)",
      "Raw materials in drug development and manufacturing",
    ],
  },
  {
    id: "devices",
    title: "Medical Devices, Materials & Technologies",
    items: [
      "Diagnostic equipment components (e.g., MRI, CT, X-ray, ultrasound)",
      "Surgical and implantable materials (e.g., titanium, biodegradable polymers, ceramics)",
      "Dental materials and prosthetics",
      "Biocompatibility, durability, and performance evaluations",
      "Wearable devices and digital health technologies",
      "3D-printed biomedical devices and materials",
    ],
  },
  {
    id: "outcomes",
    title: "Clinical Interventions & Outcomes",
    items: [
      "Treatment efficacy and safety",
      "Comparative effectiveness",
      "Quality of life and patient-reported outcomes (PROs)",
      "Adherence and treatment burden",
    ],
  },
  {
    id: "economics",
    title: "Health Economics & Real-World Data",
    items: [
      "Cost-effectiveness and value assessments",
      "Budget impact analyses",
      "Real-world evidence (RWE) integration",
      "Post-marketing surveillance and pharmacovigilance data",
    ],
  },
  {
    id: "emerging",
    title: "Emerging Areas & Interdisciplinary Research",
    items: [
      "Artificial intelligence in healthcare",
      "Personalized and precision medicine",
      "Nanotechnology and bioengineering materials",
      "Telemedicine and virtual care models",
      "Sustainability in medical product design",
    ],
  },
];

export default function ClinicalReviewScopeAndApproach() {
  // Store open state as a Set or Record so each card toggles independently
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-12 text-slate-800">
      {/* 1. What We Review Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">What We Review</h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-5xl leading-relaxed">
            At Pubrica, we provide comprehensive review for EBM covering a broad
            range of topics to support pharmaceutical companies, medical device
            manufacturers, healthcare providers, and biomedical innovators. We
            conduct evidence synthesis across:
          </p>
        </div>

        {/* 3-Column Responsive Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {reviewCategories.map((cat) => {
            const isOpen = !!openCards[cat.id];

            return (
              <div
                key={cat.id}
                className="border border-emerald-800/30 rounded bg-[#f2faf5] overflow-hidden transition-all"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleCard(cat.id)}
                  className="w-full p-3 flex items-center justify-between text-left hover:bg-[#e4f5eb] transition"
                >
                  <span className="text-xs md:text-sm font-bold text-slate-900 leading-snug pr-2">
                    {cat.title}
                  </span>
                  <span className="text-slate-600 font-medium text-sm flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="p-4 pt-2 border-t border-emerald-800/10 bg-white">
                    <ul className="space-y-2 text-xs text-slate-700">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-slate-900 font-bold mt-0.5">•</span>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Our Approach Section */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">Our Approach</h2>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-5xl">
          Pubrica offers systematic, detailed, and methodologically sound
          clinical literature reviews to facilitate evidence-based
          decision-making in healthcare. Our services integrate{" "}
          <a href="#" className="text-sky-600 underline hover:text-sky-800">
            Systematic Review Support
          </a>{" "}
          to objectively appraise and synthesize the latest clinical evidence,
          enabling the client to incorporate vetted research findings into
          clinical, procedural, policy documents, grant proposals, and the
          development of medical products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          {/* Bulleted Points */}
          <div className="md:col-span-7 space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-slate-900">
              Our expert medical writers and domain specialists:
            </p>

            <ul className="space-y-3.5 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  Use databases, including PubMed, Embase, Cochrane Library,
                  Scopus, and CINAHL to conduct targeted, thorough, and
                  reproducible literature searches
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  Utilize evidence-based processes like{" "}
                  <a href="#" className="text-sky-600 underline">
                    PRISMA, MOOSE, and AMSTAR 2
                  </a>{" "}
                  processes for systematic and scoping reviews
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  Appraise the quality of evidence using GRADE, Jadad scale, or
                  Newcastle-Ottawa tools so that each study appraised and
                  graded is recorded transparently
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  Summarize using true qualitative, quantitative, or both
                  quantitative and qualitative methods, including
                  meta-analysis, narrative synthesis, or evidence mapping
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  Produce clinically-focused summaries and tables to PICOT
                  characteristics and clinical endpoints
                </span>
              </li>
            </ul>

            <p className="text-xs text-slate-600 pt-3">
              Our{" "}
              <a href="#" className="text-sky-600 underline">
                EBM literature review
              </a>{" "}
              is compliant with ICMJE, CONSORT, and EQUATOR standards, enhancing
              the credibility, reproducibility, and academic value of the
              research.
            </p>
          </div>

          {/* Right Composite Image Collage */}
          <div className="md:col-span-5 relative h-80 md:h-[380px]">
            {/* Top Image Card */}
            <div className="absolute top-0 right-4 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg border-2 border-white z-10">
              <Image
                src="https://pubrica.com/wp-content/uploads/2023/04/our-approach-researcher.jpg"
                alt="Researcher reading books"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Bottom Image Card */}
            <div className="absolute bottom-0 left-0 w-4/5 h-48 rounded-xl overflow-hidden shadow-xl border-2 border-white z-20">
              <Image
                src="https://pubrica.com/wp-content/uploads/2023/04/our-approach-analytics.jpg"
                alt="Data analytics and charts"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}