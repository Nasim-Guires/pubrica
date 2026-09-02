"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  id: string;
  title: string;
  items: string[];
}

interface WhoWeServeCard {
  title: string;
  bullets: string[];
  imageUrl: string;
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

const whoWeServeData: WhoWeServeCard[] = [
  {
    title: "Pharmaceutical and Biotech Companies",
    bullets: [
      "For drug development documentation, mechanism-of-action reviews, safety/efficacy evaluations",
      "Literature support for regulatory dossiers (e.g., IND, NDA, CTD)",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Pharmaceutical-and-Biotech-Companies.jpg",
  },
  {
    title: "Medical Device and Diagnostic Firms",
    bullets: [
      "To support clinical evaluation reports (CER) (CE marking, 510(k), PMA)",
      "White papers and technical documentation for regulatory approvals (e.g., EU MDR, FDA)",
    ],
    imageUrl:
      "/images/publication-support/plagiarism-services/Academic-Researchers-and-Scientists.jpg",
  },
  {
    title: "Healthcare Providers and Clinical Practitioners",
    bullets: [
      "To support diagnostic decisions, treatment planning, CME",
      "Practice guideline development through structured synthesis of recent clinical evidence",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Healthcare-Providers-and-Clinical-Practitioners.jpg",
  },
  {
    title: "Academic and Research Institutions",
    bullets: [
      "For dissertation development, thesis writing, academic literature review, topic mapping, gap analysis",
      "Peer-reviewed journal publications, requiring methodologically sound and publication-ready literature review",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Academic-and-Research-Institutions.jpg",
  },
  {
    title: "Regulatory & Government Agencies",
    bullets: [
      "Evidence gathering for public health programs",
      "Data reviews for health policy decisions",
      "Technical documentation for compliance and surveillance",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Regulatory-Government-Agencies.jpg",
  },
  {
    title: "Hospitals and Medical Research Units",
    bullets: [
      "To facilitate clinical audits, protocol development, institutional ethics committee submissions",
      "Internal training material based on updated clinical findings",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Hospitals-and-Medical-Research-Units.jpg",
  },
  {
    title: "Biomedical & Material Science Companies",
    bullets: [
      "Literature on biomaterials, polymers, nanomaterials, and coatings",
      "Technical and safety reviews for medical-grade raw materials",
      "Device-material interaction and biocompatibility studies",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Biomedical-Material-Science-Companies.jpg",
  },
  {
    title: "Contract Research Organizations (CROs)",
    bullets: [
      "To aid in clinical trial documentation",
      "Literature-based justification of endpoints",
      "Background sections for study protocols or investigator brochures",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Contract-Research-Organizations-1.jpg",
  },
  {
    title: "Health Technology Assessment (HTA) & Market Access Teams",
    bullets: [
      "Cost-effectiveness and value demonstration",
      "Comparative effectiveness and outcomes evidence",
      "Support for payer submissions and value dossiers",
    ],
    imageUrl:
      "/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/Health-Technology-Assessment-HTA-Market-Access-Teams.jpg",
  },
];

export default function ClinicalReviewScopeAndApproach() {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-5 space-y-12 text-slate-800">
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
          <Link href="/academy/systematic-review/ai-systematic-review-services-pubrica/" className="text-blue-600 no-underline hover:no-underline">
            Systematic Review Support
          </Link>{" "}
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

              import Link from 'next/link';

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>
                  Utilize evidence-based processes like{" "}
                  <Link
                    href="https://static1.squarespace.com/static/65b880e13b6ca75573dfe217/t/67ad313f1c80aa5235fce0d0/1739403584136/PRISMA_2020_checklist.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    PRISMA
                  </Link>
                  ,{" "}
                  <Link
                    href="https://legacyfileshare.elsevier.com/promis_misc/ISSM_MOOSE_Checklist.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    MOOSE
                  </Link>
                  , and{" "}
                  <Link
                    href="https://www.bmj.com/content/bmj/suppl/2017/09/21/bmj.j4008.DC1/sheb036104.wf1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    AMSTAR 2
                  </Link>{" "}
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
              <Link href="/insights/sample-work/effect-of-educational-intervention-on-operating-theatre-nurses/" className="text-blue-600 no-underline hover:no-underline">
                EBM literature review
              </Link>{" "}
              is compliant with{" "}
              <Link
                href="https://www.icmje.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                ICMJE
              </Link>
              ,{" "}
              <Link
                href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                CONSORT
              </Link>
              , and EQUATOR standards, enhancing the credibility, reproducibility, and
              academic value of the research.
            </p>
          </div>

          {/* Right Composite Image Collage with Link */}
          <div className="md:col-span-5 relative h-80 md:h-[380px]">
            <Link
              href="/insights/patient-safety-culture-among-operating-theatre-nurses-in-operating-room/"
              className="absolute top-0 right-4 w-3/4 h-52 rounded-xl overflow-hidden shadow-lg border-2 border-white z-10 block group text-blue-600 no-underline hover:no-underline"
            >
              <Image
                src="/images/physician-writing-services/clinical-literature-review-for-an-evidence-based-medicine/our-approch-.webp"
                alt="Researcher reading books"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Who We Serve Section */}
      <div className="space-y-6 pt-6 border-t border-slate-100">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            At Pubrica, we provide expert-driven{" "}
            <Link
              href="/services/research-services/"
              className="text-blue-600"
            >
              research writing support
            </Link>{" "}
            designed for stakeholders in medical research, health care decision-making, and regulating agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServeData.map((card, index) => {
            const isActive = activeCardIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="group relative h-64 sm:h-72 rounded-sm overflow-hidden bg-black cursor-pointer shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 z-0 ${isActive ? "opacity-0" : "group-hover:opacity-0"
                    }`}
                >
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Default */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 flex items-end ${isActive ? "opacity-0" : "group-hover:opacity-0"
                    }`}
                >
                  <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Hover / Active */}
                <div
                  className={`absolute inset-0 bg-black p-5 sm:p-6 text-white transition-opacity duration-300 z-20 flex flex-col ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                >
                  <h3 className="font-bold text-sm sm:text-base border-b border-gray-700 pb-2">
                    {card.title}
                  </h3>

                  <ul className="mt-3 space-y-2 text-xs text-gray-300 leading-relaxed">
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span>•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}