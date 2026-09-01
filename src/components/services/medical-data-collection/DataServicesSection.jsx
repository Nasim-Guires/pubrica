"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const bulletList = "list-disc pl-5 space-y-1.5 marker:text-emerald-700";
const nestedBulletList = "list-disc pl-5 mt-1.5 space-y-1";

// Data structure for accordion services
const servicesData = [
  {
    id: "primary-data",
    title: "Primary Data Collection Services",
    content: (
      <ul className={bulletList}>
        <li>
          Human Data Collection: Our primary data collection services usually
          involve ethically collecting patient data, including blood
          pressure, height, weight, and blood samples. Data collection
          fundamentally involves a variety of clinical data management,
          health monitoring, and medical research-specific extraction of
          data.
        </li>
        <li>
          Surveys, Focus Groups, and Interviews: We offer structured tools
          and techniques for collecting qualitative and quantitative patient
          data. These include:
          <ul className={nestedBulletList}>
            <li>Interviews (online and in-person): Tailored to gain in-depth qualitative insights for healthcare data research.</li>
            <li>Focus Group Discussions: Exploring varied perspectives across life science and medical topics.</li>
            <li>Surveys and Questionnaires: Effective tools for gathering real-world evidence data.</li>
            <li>Observations and Fieldwork: Authentic real-world healthcare data collection in natural settings.</li>
            <li>Experiments and Case Studies: Controlled environments and focused subjects for clinical research.</li>
            <li>Diaries, Journals, Tests, and Assessments: Collecting behavioural and physiological data.</li>
            <li>Photography, Videography, and Sensor Data: Capturing visual and biometric evidence using advanced healthcare data collection technology.</li>
            <li>Online Analytics and Monitoring: Real-time web-based data collection and analysis.</li>
            <li>Data Synthesis &amp; Meta-Analyses: Combining multi-source medical and life science data for unified insight.</li>
          </ul>
        </li>
        <li>
          Observational Studies: Our team conducts observational studies to
          collect data on health outcomes, behaviours, and environmental
          factors in natural settings, providing valuable insights into
          real-world applications.
        </li>
      </ul>
    ),
  },
  {
    id: "secondary-data",
    title: "Secondary Data Extraction",
    content: (
      <>
        <ul className={bulletList}>
          <li>Web Mining: We use sophisticated methods to extract relevant information from the web, including public health data, published clinical research, and healthcare-related information.</li>
          <li>Textual Records Extraction: Extraction of information from electronic health records (EHRs), clinical trial reports, and other medical documentation supports life science data analytics.</li>
          <li>Image, Voice, and Video Data: We handle medical imaging (MRI, CT scans), patient interviews, and procedural videos to support multimodal data analysis in healthcare research.</li>
          <li>Personal Documents and Artifacts: Collecting existing documents and items for analysis, including artifacts, audio recordings, and visual observations.</li>
          <li>Content Analysis: Systematic analysis of text, media, and documents.</li>
          <li>Audio Recordings: Capturing sound data for detailed auditory analysis.</li>
          <li>Visual Observations: Detailed scrutiny of visual elements.</li>
          <li>Physical Measurements: Direct measurements of physical properties.</li>
          <li>Data Screening, Extraction &amp; Data Synthesis: Techniques to refine, compile, and synthesize raw data.</li>
        </ul>
        <p className="mt-2">At Pubrica, we also support the collection and integration of:</p>
        <ul className={bulletList}>
          <li>Claims and administrative data for healthcare utilization analysis</li>
          <li>Disease registry data to support epidemiology and long-term tracking</li>
          <li>Genomic and omics datasets for life science and personalized medicine research</li>
          <li>Mobile health (mHealth) data from apps, remote sensors, and telehealth platforms</li>
          <li>Social determinants of health (SDoH) to contextualize clinical outcomes</li>
          <li>Geospatial and environmental data to inform public health interventions</li>
          <li>Laboratory and biomarker data integrated with clinical findings for holistic analysis</li>
        </ul>
      </>
    ),
  },
  {
    id: "advanced-analytics",
    title: "Advanced Data Handling and Analytics",
    content: (
      <>
        <p>
          Benefit from our extensive experience in data analytics for
          scientific publications. Our team conducts thorough analyses,
          employing sophisticated techniques across both primary and
          secondary data. This includes statistical analyses, machine
          learning models, and bioinformatics approaches that transform raw
          data into clear, actionable insights such as disease trends,
          patient health profiles, and epidemiological patterns.
        </p>
        <p className="mt-2">
          Pubrica ensures that your research is supported by accurately
          collected and expertly managed data, significantly enhancing the
          depth and breadth of healthcare, medical, and life science
          research. This comprehensive approach ensures robust data
          foundations for generating impactful scientific conclusions and
          advancing clinical practices.
        </p>
      </>
    ),
  },
];

// Data structure for "Who We Serve" cards
const clientsData = [
  {
    title: "Contract Research Organizations (CROs)",
    description:
      "Supporting clinical trials with reliable and protocol-compliant data collection across phases and therapeutic areas.",
    image:
      "/images/medical-writing/Contract-Research-Organizations-CROs-1.webp",
    alt: "Researcher reviewing paper clinical data and documents",
  },
  {
    title: "Pharmaceutical & Biotech Companies",
    description:
      "Assisting in data-driven research for drug development, post-marketing surveillance, and real-world evidence studies.",
    image:
      "/images/medical-writing/Pharmaceutical-Biotech-Companies.webp",
    alt: "Laboratory scientist conducting biotech research",
  },
  {
    title: "Academic and Research Institutions",
    description:
      "Providing structured data collection for investigator-initiated studies, epidemiological research, and clinical audits.",
    image:
      "/images/medical-writing/Academic-and-Research-Institutions-1.webp",
    alt: "Academic research library with books and literature databases",
  },
  {
    title: "Healthcare Providers & Hospitals",
    description:
      "Offering patient data collection, chart reviews, and retrospective data abstraction for clinical research and quality improvement studies.",
    image:
      "/images/medical-writing/Healthcare-Providers-Hospitals.webp",
    alt: "Healthcare providers and medical staff collaborating in a hospital",
  },
  {
    title: "Medical Device Companies",
    description:
      "Collecting regulatory-compliant data for device trials, usability studies, and post-market surveillance.",
    image:
      "/images/medical-writing/Medical-Device-Companies-1.webp",
    alt: "Medical device testing and clinical trial equipment",
  },
  {
    title: "Public Health Organizations & NGOs",
    description:
      "Enabling field data collection for public health research, health impact assessments, and population-based studies.",
    image:
      "/images/medical-writing/Public-Health-Organizations-NGOs.webp",
    alt: "Clipboard with NGO public health planning documents",
  },
  {
    title: "Independent Researchers & Consultants",
    description:
      "Facilitating tailored data collection support for customized studies and consultancy projects.",
    image:
      "/images/medical-writing/Independent-Researchers-Consultants.webp",
    alt: "Independent consultant conducting research on a digital tablet",
  },
];

export default function DataServicesSection() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <main className="w-full bg-white text-slate-800 py-6 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto font-sans">
      {/* Semantic Header Section */}
      <header className="mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#082e2b] mb-4 tracking-tight leading-snug">
          Comprehensive Data Collection and Extraction Services for Healthcare,
          Medical, and Life Science Research by Pubrica
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl">
          Pubrica’s team of experts excels in the systematic collection and
          extraction of diverse data types for healthcare, medical, and life
          science research. Our services are meticulously designed to handle
          both primary and secondary data sources, ensuring comprehensive
          support for data-intensive studies across various domains.
        </p>
      </header>

      {/* Semantic Section for Accordion Services */}
      <section aria-label="Core Services" className="space-y-3 mb-16">
        {servicesData.map((item) => {
          const isOpen = openAccordion === item.id;
          return (
            <article
              key={item.id}
              className="rounded-sm overflow-hidden shadow-sm"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${item.id}`}
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-start gap-4 px-6 py-3.5 bg-[#082e2b] hover:bg-[#0f3835] text-white font-semibold text-sm sm:text-base transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <span
                    className="text-lg font-bold leading-none select-none"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                  <span>{item.title}</span>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={`accordion-body-${item.id}`}
                  className="p-5 bg-emerald-50/50 border-x border-b border-emerald-100 text-gray-700 text-sm leading-relaxed space-y-2"
                >
                  {item.content}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* Semantic Section for Target Audiences */}
      <section aria-labelledby="who-we-serve-heading">
        <header className="mb-8">
          <h2
            id="who-we-serve-heading"
            className="text-2xl sm:text-3xl font-bold text-[#082e2b] mb-4"
          >
            Who We Serve
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            At Pubrica, our medical{" "}
            <Link
              href="/services/medical-data-collection"
              title="Learn more about Pubrica medical data collection services"
              className="text-blue-600 font-medium decoration-cyan-700 no-underline hover:no-underline"
            >
              data collection services
            </Link>{" "}
            cater to a wide spectrum of stakeholders in the clinical and
            healthcare research ecosystem, including:
          </p>
        </header>

        {/* Semantic Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientsData.map((card, index) => (
            <article
              key={index}
              className="group relative h-64 sm:h-72 w-full overflow-hidden rounded-md shadow-md cursor-pointer bg-black"
            >
              {/* Next.js Optimized Image Component */}
              <div className="relative h-full w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-30 opacity-80"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              {/* Default State: Dark Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0"
                aria-hidden="true"
              />

              {/* Default Title View */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 group-hover:translate-y-full">
                <h3 className="text-white font-bold text-base sm:text-lg leading-snug drop-shadow-md">
                  {card.title}
                </h3>
              </div>

              {/* Hover State View */}
              <div className="absolute inset-0 bg-[#082e2b]/95 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 border-b border-emerald-500/30 pb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
