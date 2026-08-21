import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/seo/Breadcrumb";
import CTA from "@/components/shared/CTA";
import FAQ from "@/components/shared/FAQ";
import Image from "next/image";

// Corrected services array mapping cleanly to `/services/{slug}`
const LOCAL_SERVICES_DATA = [
  {
    title: "Editing Service",
    slug: "editing-and-translation",
    shortDescription:
      "Substantive, medium, and low—these are the various levels of copyediting we offer. Our in-house translators will do the translation.",
    imageUrl: "/images/services/Editing-Service.jpg",
  },
  {
    title: "Publication Support",
    slug: "publication-support",
    shortDescription:
      "At Pubrica we translate your writing to incisive reports. We guide you through the entire lifecycle for academic, scientific, and medical content.",
    imageUrl: "/images/services/Publication-Support.jpg",
  },
  {
    title: "Research Service",
    slug: "research-services",
    shortDescription:
      "Systematic review, meta-analyses, clinical literature review, evidence based literature review, case study analysis, experimental methodology.",
    imageUrl: "/images/services/Research-Service-1.jpg",
  },
  {
    title: "Physician Writing",
    slug: "physician-writing-services",
    shortDescription:
      "Need to do a literature search and present findings, but lack time? You’ve reached the right place; we coordinate with authors, respond to comments, and manage revisions.",
    imageUrl: "/images/services/Physician-Writing.jpg",
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-ml-support",
    shortDescription:
      "Pubrica provides Artificial intelligence that allows a machine to simulate human behaviour, although machine learning is a form of AI that allows a machine.",
    imageUrl: "/images/services/AI-Machine-Learning.jpg",
  },
  {
    title: "Bioinformatics Service",
    slug: "bioinformatics",
    shortDescription:
      "Pubrica’s Bioinformatics team can offer complete Bioinformatics services for proteomic and genomic data. Also, we can help you model.",
    imageUrl: "/images/services/Bioinformatics-Service.jpg",
  },
  {
    title: "Statistics Service",
    slug: "data-analytics-machine-learning",
    shortDescription:
      "Pubrica statisticians have decades of expertise in the sector, delivering timely and reliable reports, statistical summaries, and efficacy and safety studies.",
    imageUrl: "/images/services/Statistics-Service.jpg",
  },
  {
    title: "Scientific Communication",
    slug: "scientific-communication",
    shortDescription:
      "Effective and intelligible communication of your scientific works across the population by the experts in the field from Pubrica scientific communication service.",
    imageUrl: "/images/services/Scientific-Communication.jpg",
  },
  {
    title: "Medical Data Collection",
    slug: "medical-data-collection",
    shortDescription:
      "At Pubrica, we collect data from a wide range of sources and perform semantic annotation based on the research questions that you wanted to solve.",
    imageUrl: "/images/services/Medical-Data-Collection.jpg",
  },
  {
    title: "Research Impact",
    slug: "research-impact",
    shortDescription:
      "Pubrica aids global research impact through tailored educational content for providers, developers, and leaders.",
    imageUrl: "/images/services/research-impactgraphical-abstract.webp",
  },
  {
    title: "Education Content",
    slug: "educational-content-development",
    shortDescription:
      "Pubrica offers Educational Content development services for education providers, software developers and leaders worldwide.",
    imageUrl: "/images/services/Education-Content-1.jpg",
  },
  {
    title: "Translation Service",
    slug: "editing-and-translation",
    shortDescription:
      "Pubrica has a qualified translator with subject-matter experience produces a precise translation. The translation and editing steps include a peer-review procedure.",
    imageUrl: "/images/services/Translation-Service.webp",
  },
];

export const metadata = constructMetadata({
  title: "Scientific Research & Medical Writing Services | Pubrica",
  description:
    "Explore our full suite of research support: clinical writing, systematic reviews, statistical meta-analyses, and journal formatting audits.",
  slug: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/services" }]} />

      {/* Hero Banner Section */}
      <section
        className="relative bg-gray-900 text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80')`,
        }}
      >
        <Container className="max-w-7xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-white font-display">
            Our Research Solutions
          </h1>
        </Container>
      </section>

      {/* Main Content & Services Section */}
      <section className="bg-[#fcfcfc] py-16">
        <Container>
          {/* Section Introduction Header */}
          <div className="max-w-5xl mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 font-display">
              Gamut of services: writing, editing, publishing and more…
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mt-4 max-w-5xl">
              We offer an array of services, including scientific and medical
              writing, editing, peer-reviewing, and data collection and analysis
              services that cover academic, scientific, regulatory business,
              medical, and technology.
            </p>
          </div>

          {/* Overlapping Content Box Cards Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-8">
            {LOCAL_SERVICES_DATA.map((service, index) => (
              <Link
                key={`${service.slug}-${index}`}
                href={`/services/${service.slug}`}
                className="flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden border-b-4 border-b-emerald-600 hover:shadow-md transition-all duration-300 group"
              >
                {/* Visual Header Thumbnail */}
                <div className="h-44 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={400}
                    height={176}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlapping White Label Card */}
                <div className="relative -mt-6 mx-4 bg-white rounded-t-xl pt-5 px-4 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Circle Icon and Title Row */}
                    <div className="flex items-center gap-2 text-[#1a4f6e] group-hover:text-emerald-700 transition-colors duration-200">
                      <div className="bg-[#1a4f6e] group-hover:bg-emerald-700 p-0.5 rounded-full flex items-center justify-center transition-colors duration-200">
                        <Icons.ChevronRight className="h-3 w-3 text-white stroke-[3]" />
                      </div>
                      <h3 className="text-sm font-bold tracking-tight font-display">
                        {service.title}
                      </h3>
                    </div>

                    {/* Excerpt Copy */}
                    <p className="text-xs text-gray-500 leading-relaxed font-sans mt-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}