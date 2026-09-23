import React from 'react';
import Image from 'next/image';
import HeroBanner from '@/components/common/HeroBanner';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

interface ExpertiseItem {
  title: string;
  description: string;
}

interface SegmentItem {
  title: string;
  description: string;
  iconSrc?: string;
}

interface CosmeticsPageProps {
  heroTitle?: string;
  heroSubtitle?: string;
  transformTitle?: string;
  transformParagraph1?: string;
  transformParagraph2?: string;
  transformParagraph3?: string;
  transformImage?: string;
  ctaText?: string;
  ctaLink?: string;
  expertiseTitle?: string;
  expertiseSubtitle?: string;
  expertiseItems?: ExpertiseItem[];
  expertiseCenterImage?: string;
  segmentsTitle?: string;
  segmentsSubtitle?: string;
  segmentsItems?: SegmentItem[];
}

const defaultExpertiseItems: ExpertiseItem[] = [
  {
    title: 'Quality Assurance & Compliance',
    description: 'Ensuring all products meet international safety standards and regulatory requirements.'
  },
  {
    title: 'Research & Innovation',
    description: 'Staying ahead with the latest cosmetic technologies, natural ingredients, and sustainable practices.'
  },
  {
    title: 'Distribution & Retail Partnerships',
    description: 'Strategically placing products in retail, e-commerce, and global markets.'
  },
  {
    title: 'Product Development & Formulation',
    description: 'Creating innovative skincare, haircare, and makeup products tailored to market trends and consumer needs.'
  },
  {
    title: 'Brand Strategy & Marketing',
    description: 'Developing compelling brand identities, packaging designs, and marketing campaigns that resonate with target audiences.'
  },
  {
    title: 'Manufacturing & Supply Chain Management',
    description: 'Efficient, scalable production with high-quality control and timely delivery.'
  },
  {
    title: 'Consumer Insights & Trend Analysis',
    description: 'Understanding evolving beauty trends and consumer preferences to guide product innovation.'
  }
];

const defaultSegmentsItems: SegmentItem[] = [
  {
    title: 'Skincare & Dermatology',
    iconSrc: '/images/industries/cosmetics/Skincare-Dermatology.webp',
    description: 'We support brands and researchers in developing innovative skincare solutions, dermatological treatments, and cosmeceuticals that prioritize skin health, efficacy, and safety. Our expertise spans product formulation, clinical research, regulatory compliance, and market positioning.'
  },
  {
    title: 'Haircare & Scalp Treatments',
    iconSrc: '/images/industries/cosmetics/Haircare-Scalp-Treatments.webp',
    description: 'From shampoos and conditioners to advanced scalp therapies, we help companies develop effective haircare products. Our services cover everything from ingredient research and clinical testing to regulatory approvals and product claims validation.'
  },
  {
    title: 'Makeup & Color Cosmetics',
    iconSrc: '/images/industries/cosmetics/Makeup-Color-Cosmetics.webp',
    description: 'We help makeup and colour cosmetics brands launch high-quality, trend-forward products. Our expertise includes formulation guidance, safety assessments, regulatory compliance, and packaging optimization for various markets.'
  },
  {
    title: 'Personal Care & Hygiene',
    iconSrc: '/images/industries/cosmetics/Personal-Care-Hygiene.webp',
    description: 'Pubrica supports the development of personal care essentials, including soaps, body washes, oral care, and hygiene products. We ensure these products meet stringent safety, quality, and regulatory standards while aligning with consumer needs.'
  },
  {
    title: 'Natural, Organic & Sustainable Beauty',
    iconSrc: '/images/industries/cosmetics/Natural-Organic-Sustainable-Beauty.webp',
    description: 'We guide brands in creating eco-friendly and sustainable beauty products. From sourcing natural ingredients to achieving certifications, we help companies develop responsible and innovative products that resonate with conscious consumers.'
  }
];

export default function CosmeticsIndustryPage({
  heroTitle = 'Cosmetics',
  heroSubtitle = 'At Pubrica, we empower cosmetic brands with end-to-end scientific, regulatory, and publication support. From skincare to personal care, our expert team ensures your products meet industry standards and gain global recognition.',
  transformTitle = 'Transforming Ideas into Market-Ready Cosmetic Innovations',
  transformParagraph1 = 'The cosmetic industry is a fast-evolving sector where science, technology, and consumer trends intersect. From skincare and haircare to personal care products and advanced cosmeceuticals, brands must balance innovation with safety, regulatory compliance, and effective product positioning. With rising consumer demand for sustainable, clinically proven, and regulatory-compliant products, companies need expert guidance to navigate research, development, and market launch.',
  transformParagraph2 = 'The cosmetic industry, also known as the cosmetics sector, encompasses all activities and companies involved in the research, development, production, and marketing of products for personal care and beautification. This dynamic and constantly evolving sector is made up of many segments, including skincare, hair care, makeup products, perfumes, and hygiene products.',
  transformParagraph3 = 'At Pubrica, we provide end-to-end services tailored to cosmetic brands, manufacturers, and research teams. Our expertise helps you streamline R&D, accelerate time-to-market, and ensure compliance with international cosmetic regulations.',
  transformImage = '/images/industries/cosmetics/Transforming-Ideas-into-Market-Ready-Cosmetic-Innovations.webp',
  ctaText = 'Get a Free Quote',
  ctaLink = '#',
  expertiseTitle = 'Our Expertise in the Cosmetics Industry Includes',
  expertiseSubtitle = 'At Pubrica, we specialize in delivering end-to-end expertise in the cosmetics industry, helping brands innovate, comply, and connect with consumers effectively.',
  expertiseCenterImage = '/images/industries/cosmetics/Our-Expertise-in-the-Cosmetics-Industry-Includes.webp',
  segmentsTitle = 'Cosmetic Segments We Serve',
  segmentsSubtitle = 'At Pubrica, we cater to a diverse range of segments within the cosmetics industry, offering specialized services tailored to each category. Our expertise spans the entire beauty and personal care spectrum, enabling brands to achieve regulatory compliance, market readiness, and consumer trust. Key segments we serve include:'
}: CosmeticsPageProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">

      {/* Hero Banner */}
      <HeroBanner
        title={heroTitle}
        description={heroSubtitle}
        headingAs="h1"
      />
      {/* Transforming Ideas into Market-Ready Cosmetic Innovations */}
      <section className="pt-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-5">
              <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                {transformTitle}
              </h2>
            </div>

            <div className="flow-root">
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                  <Image
                    src={transformImage}
                    alt="Transforming cosmetic ideas"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 380px"
                  />
                </div>
              </div>

              <div className="space-y-5 text-slate-700">
                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    {transformParagraph1}
                  </p>

                  <p className="text-base leading-relaxed">
                    {transformParagraph2}
                  </p>

                  <p className="text-base leading-relaxed">
                    {transformParagraph3}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <GetFreeQuoteButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Expertise in the Cosmetics Industry Includes (Exact Radial/Orbit Layout matching reference) */}
      <section className="py-7 bg-gray-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {expertiseTitle}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
            {expertiseSubtitle}
          </p>
        </div>

        {/* Central Graphic with Surrounding Cards Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column Cards (First 3 items) */}
          <div className="space-y-6">
            {defaultExpertiseItems.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center my-6 md:my-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white shadow-md overflow-hidden">
              <Image
                src={expertiseCenterImage}
                alt="Cosmetic expert"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
                priority
              />
            </div>
          </div>

          {/* Right Column Cards (Remaining 4 items) */}
          <div className="space-y-6">
            {defaultExpertiseItems.slice(3, 7).map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetic Segments We Serve */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            {segmentsTitle}
          </h2>
          <p className="text-gray-700 max-w-5xl text-sm md:text-base leading-relaxed">
            {segmentsSubtitle}
          </p>
        </div>

        {/* Grid Section - 3 Columns Horizontal Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {defaultSegmentsItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]"
            >
              {item.iconSrc ? (
                <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
              ) : null}

              <div className="flex-1">
                <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}