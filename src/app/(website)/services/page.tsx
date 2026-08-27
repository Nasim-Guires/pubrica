import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/seo/Breadcrumb";
import Image from "next/image";

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

      {/* Hero Banner Section */}
      <section
        className="relative bg-gray-900 text-white py-24 bg-cover bg-center bg-no-repeat font-poppins"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80')`,
        }}
      >
        <Container className="max-w-7xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-poppins">
            Our Research Solutions
          </h1>
        </Container>
      </section>

      {/* Main Content & Services Section */}
      <section className="bg-white py-16 font-poppins">
        <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Introduction Header */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-[22px] sm:text-[24px] font-bold text-[#1f2937] font-poppins leading-tight">
              Gamut of services: writing, editing, publishing and more…
            </h2>
            <p className="text-[16px] text-[#4b5563] leading-relaxed font-poppins mt-4">
              We offer an array of services, including scientific and medical
              writing, editing, peer-reviewing, and data collection and analysis
              services that cover academic, scientific, regulatory business,
              medical, and technology.
            </p>
          </div>

          {/* Service Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {LOCAL_SERVICES_DATA.map((service, index) => (
              <Link
                key={`${service.slug}-${index}`}
                href={`/services/${service.slug}`}
                className="flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                {/* Visual Header Thumbnail */}
                <div className="h-56 w-full overflow-hidden bg-gray-100 relative">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={400}
                    height={224}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlapping White Content Card */}
                <div className="relative -mt-12 mx-3 bg-white rounded-t-lg pt-5 px-5 pb-6 flex-1 flex flex-col justify-between border-b-2 border-emerald-600 shadow-sm">
                  <div>
                    {/* Circle Icon and Title Row */}
                    <div className="flex items-center gap-2.5">
                      <div className="bg-[#1f4e5b] text-white p-0.5 rounded-full flex items-center justify-center shrink-0">
                        <Icons.ChevronRight className="h-4 w-4 stroke-[3]" />
                      </div>
                      <h3 className="text-[18px] font-bold text-[#1f4e5b] font-poppins tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Excerpt Copy (Explicitly set to 16px font size) */}
                    <p className="text-[16px] text-[#4b5563] leading-relaxed font-poppins mt-4">
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