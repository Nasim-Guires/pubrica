import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SegmentItem {
  title: string;
  description: string;
}

interface ExpertiseItem {
  title: string;
  description: string;
  iconSrc?: string;
}

interface CosmeceuticalResearchProps {
  heroTitle?: string;
  heroSubtitle?: string;
  transformTitle?: string;
  transformParagraphs?: string[];
  transformImage?: string;
  ctaText?: string;
  segmentsTitle?: string;
  segmentsSubtitle?: string;
  segments?: SegmentItem[];
  segmentsCenterImage?: string;
  expertiseTitle?: string;
  expertiseSubtitle?: string;
  expertiseItems?: ExpertiseItem[];
}

const defaultTransformParagraphs = [
  "The cosmeceutical industry sits at the intersection of cosmetics and pharmaceuticals, offering products that not only enhance beauty but also provide therapeutic benefits to the skin, hair, and overall appearance. From advanced skincare formulations to innovative anti-aging solutions, cosmeceuticals demand a precise balance of science, safety, efficacy, and regulatory compliance.",
  "Navigating the complexities of cosmeceutical development from groundbreaking active ingredient discovery to advanced clinical research and strategic dissemination of findings presents unique challenges. These challenges involve integrating complex scientific data into actionable insights, adhering to rigorous regulatory standards, and effectively communicating results to influence the appropriate audiences.",
  "At Pubrica, we help cosmeceutical brands accelerate product development, navigate complex regulatory frameworks, and ensure scientifically-backed formulations reach the market efficiently. Our expertise bridges research, development, and compliance, enabling your products to stand out in a competitive and rapidly evolving industry."
];

const defaultSegments: SegmentItem[] = [
  {
    title: "Skin Brightening & Pigmentation Care",
    description: "Products aimed at reducing hyperpigmentation, dark spots, and uneven skin tone with advanced actives like niacinamide, vitamin C, and botanical extracts."
  },
  {
    title: "Acne & Blemish Control",
    description: "Therapeutic cosmeceuticals designed for oily and acne-prone skin, integrating salicylic acid, retinoids, and natural anti-inflammatory agents."
  },
  {
    title: "Body & Specialty Care",
    description: "Targeted treatments for cellulite, stretch marks, sensitive skin, and other specific skin concerns."
  },
  {
    title: "Anti-Aging Products",
    description: "Formulations targeting wrinkles, fine lines, and loss of skin elasticity, incorporating peptides, antioxidants, and growth factors."
  },
  {
    title: "Hair Care & Scalp Treatments",
    description: "Cosmeceuticals for hair strengthening, hair loss prevention, and scalp health, including serums, shampoos, and topical treatments."
  },
  {
    title: "Sun Protection & Photoprotection",
    description: "Advanced sunscreens, after-sun care, and antioxidant-enriched formulations to protect against UV damage and photoaging."
  }
];

const defaultExpertiseItems: ExpertiseItem[] = [
  {
    title: "Product Development & Formulation",
    iconSrc: "/images/industries/cosmeceutical-research/Product-Development-Formulation.webp",
    description: "We assist in designing innovative cosmeceutical formulations, leveraging the latest scientific research"
  },
  {
    title: "Regulatory Compliance & Documentation",
    iconSrc: "/images/industries/cosmeceutical-research/Regulatory-Compliance-Documentation.webp",
    description: "Our experts guide you through global regulatory frameworks, including FDA, EU, ASEAN, and other"
  },
  {
    title: "Clinical Evaluation & Efficacy Studies",
    iconSrc: "/images/industries/cosmeceutical-research/Clinical-Evaluation-Efficacy-Studies.webp",
    description: "Pubrica provides support in conducting clinical trials, safety assessments, and efficacy studies to"
  },
  {
    title: "Quality Assurance & Safety Testing",
    iconSrc: "/images/industries/cosmeceutical-research/Quality-Assurance-Safety-Testing.webp",
    description: "We help implement robust quality control measures, including stability studies, microbiological testing, and"
  },
  {
    title: "Market & Trend Analysis",
    iconSrc: "/images/industries/cosmeceutical-research/Market-Trend-Analysis.webp",
    description: "We provide insights into global trends, consumer behavior, and competitive landscapes to help you"
  }
];

export default function CosmeceuticalResearch({
  heroTitle = "Cosmeceutical",
  heroSubtitle = "From concept to market-ready solutions, we help brands in the cosmeceutical industry navigate research, development, and regulatory compliance with precision and expertise.",
  transformTitle = "Transforming Ideas into Market-Ready Cosmeceutical Innovations",
  transformParagraphs = defaultTransformParagraphs,
  transformImage = "/images/industries/cosmeceutical-research/Transforming-Ideas-into-Market-Ready-Cosmeceutical-Innovations.webp",
  ctaText = "Get a Free Quote",
  segmentsTitle = "Cosmeceutical Segments We Serve",
  segmentsSubtitle = "At Pubrica, we cater to a wide spectrum of cosmeceutical products and services, helping brands bring safe, effective, and innovative solutions to the market. Our expertise spans the following segments:",
  segments = defaultSegments,
  segmentsCenterImage = "/images/industries/cosmeceutical-research/Cosmeceutical-Segments-We-Serve.webp",
  expertiseTitle = "Our Expertise In Cosmeceuticals Includes",
  expertiseSubtitle = "At Pubrica, we combine scientific rigor, regulatory knowledge, and clinical insight to help companies develop innovative cosmeceutical products that are safe, effective, and market-ready. Our comprehensive expertise covers the entire product lifecycle, from concept development to post-market support.",
  expertiseItems = defaultExpertiseItems
}: CosmeceuticalResearchProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">
      
      {/* Hero Banner Section */}
      <section className="bg-[#0f2824] py-7 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto border border-emerald-800/60 rounded-xl p-8 sm:p-12 shadow-inner">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">{heroTitle}</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Transforming Ideas Section */}
      <section className="max-w-6xl mx-auto py-7 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#0f2824]">
          {transformTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            {transformParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <Link
                href="/order-now"
                className="inline-block bg-[#cc0000] hover:bg-[#b30000] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors text-sm sm:text-base"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-gray-50">
              <Image 
                src={transformImage} 
                alt="Cosmeceutical research laboratory" 
                fill 
                sizes="(max-width: 768px) 320px, 400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Segments We Serve Section */}
      <section className="bg-gray-50/50 py-8 px-6 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{segmentsTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            {segmentsSubtitle}
          </p>
        </div>

        {/* Circular / Grid Segments Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column Segments */}
          <div className="space-y-6">
            {segments.slice(0, 3).map((segment, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left">
                <h3 className="font-bold text-base text-[#cc0000] mb-2">{segment.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center my-6 md:my-0">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={segmentsCenterImage} 
                alt="Cosmeceutical clinical treatment" 
                fill 
                sizes="340px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Column Segments */}
          <div className="space-y-6">
            {segments.slice(3, 6).map((segment, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left">
                <h3 className="font-bold text-base text-[#cc0000] mb-2">{segment.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-6xl mx-auto py-8 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{expertiseTitle}</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed mb-14">
          {expertiseSubtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
              {item.iconSrc ? <div className="relative w-12 h-12 mb-4"><Image src={item.iconSrc} alt="" fill className="object-contain" sizes="48px" /></div> : null}
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}