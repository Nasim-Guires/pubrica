import React from 'react';
import Image from 'next/image';

interface ExpertiseItem {
  title: string;
  description: string;
}

interface SegmentItem {
  title: string;
  description: string;
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
    description: 'We support brands and researchers in developing innovative skincare solutions, dermatological formulations, and clinical trials.'
  },
  {
    title: 'Haircare & Scalp Treatments',
    description: 'From shampoos and conditioners to advanced scalp therapies, we help companies develop effective, nourishing hair products.'
  },
  {
    title: 'Makeup & Color Cosmetics',
    description: 'We help makeup and colour cosmetics brands launch high-quality, trend-forward products. Our expertise ensures vibrant formulations.'
  },
  {
    title: 'Personal Care & Hygiene',
    description: 'Pubrica supports the development of personal care essentials, including soaps, body washes, oral hygiene, and deodorants.'
  },
  {
    title: 'Natural, Organic & Sustainable Beauty',
    description: 'We guide brands in creating eco-friendly and sustainable beauty products. From sourcing clean ingredients to eco-packaging.'
  }
];

export default function CosmeticsIndustryPage({
  heroTitle = 'Cosmetics',
  heroSubtitle = 'At Pubrica, we empower cosmetic brands with end-to-end scientific, regulatory, and publication support. From skincare to personal care, our expert team ensures your products meet industry standards and gain global recognition.',
  transformTitle = 'Transforming Ideas into Market-Ready Cosmetic Innovations',
  transformParagraph1 = 'The cosmetic industry is a fast-evolving sector where science, technology, and consumer trends intersect. From skincare and haircare to personal care products and advanced cosmeceuticals, brands must balance innovation with safety, regulatory compliance, and effective product positioning. With rising consumer demand for sustainable, clinically proven, and regulatory-compliant products, companies need expert guidance to navigate research, development, and market launch.',
  transformParagraph2 = 'The cosmetic industry, also known as the cosmetics sector, encompasses all activities and companies involved in the research, development, production, and marketing of products for personal care and beautification. This dynamic and constantly evolving sector is made up of many segments, including skincare, hair care, makeup products, perfumes, and hygiene products.',
  transformParagraph3 = 'At Pubrica, we provide end-to-end services tailored to cosmetic brands, manufacturers, and research teams. Our expertise helps you streamline R&D, accelerate time-to-market, and ensure compliance with international cosmetic regulations.',
  transformImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  ctaText = 'Get a Free Quote',
  ctaLink = '#',
  expertiseTitle = 'Our Expertise in the Cosmetics Industry Includes',
  expertiseSubtitle = 'At Pubrica, we specialize in delivering end-to-end expertise in the cosmetics industry, helping brands innovate, comply, and connect with consumers effectively.',
  expertiseCenterImage = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  segmentsTitle = 'Cosmetic Segments We Serve',
  segmentsSubtitle = 'At Pubrica, we cater to a diverse range of segments within the cosmetics industry, offering specialized services tailored to each category. Our expertise spans the entire beauty and personal care spectrum, enabling brands to achieve regulatory compliance, market readiness, and consumer trust. Key segments we serve include:'
}: CosmeticsPageProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">
      
      {/* Hero Banner */}
      <section className="bg-[#0f2824] py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto border border-white/20 rounded-xl p-8 sm:p-12 shadow-sm bg-[#0f2824]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Transforming Ideas into Market-Ready Cosmetic Innovations */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2824] leading-snug">
              {transformTitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {transformParagraph1}
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {transformParagraph2}
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {transformParagraph3}
            </p>
            <div>
              <a 
                href={ctaLink} 
                className="inline-block bg-[#b91c1c] hover:bg-[#991b1b] text-white font-medium px-6 py-3 rounded-full text-sm shadow-md transition-colors"
              >
                {ctaText}
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="relative w-full h-[360px] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src={transformImage} 
                alt="Transforming cosmetic ideas" 
                fill 
                sizes="(max-width: 1024px) 100vw, 420px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise in the Cosmetics Industry Includes (Exact Radial/Orbit Layout matching reference) */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{expertiseTitle}</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-16 leading-relaxed">
          {expertiseSubtitle}
        </p>

        {/* Desktop Orbit Layout */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[600px] max-w-5xl mx-auto">
          {/* Center Circular Image */}
          <div className="absolute z-10 w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
            <Image 
              src={expertiseCenterImage} 
              alt="Cosmetic expert" 
              fill
              sizes="280px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Left Cards (3 cards stacked vertically) */}
          <div className="absolute left-0 flex flex-col justify-between h-[520px] w-[340px] z-20">
            {defaultExpertiseItems.slice(0, 3).map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-md text-left transition-transform hover:scale-105"
              >
                <h3 className="text-[#b91c1c] font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Cards (4 cards stacked vertically) */}
          <div className="absolute right-0 flex flex-col justify-between h-[640px] w-[340px] z-20">
            {defaultExpertiseItems.slice(3, 7).map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-md text-left transition-transform hover:scale-105"
              >
                <h3 className="text-[#b91c1c] font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Stacked Layout */}
        <div className="flex lg:hidden flex-col items-center gap-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image 
              src={expertiseCenterImage} 
              alt="Cosmetic expert" 
              fill
              sizes="192px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
            {defaultExpertiseItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-[#b91c1c] font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetic Segments We Serve */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{segmentsTitle}</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto mb-12 leading-relaxed">
          {segmentsSubtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {defaultSegmentsItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0f2824] flex items-center justify-center mb-4 font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-base text-[#0f2824] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}