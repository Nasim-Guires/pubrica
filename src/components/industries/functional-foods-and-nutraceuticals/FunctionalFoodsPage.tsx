"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';

interface SegmentItem {
  title: string;
  description: string;
  iconSrc?: string;
}

interface ExpertiseItem {
  title: string;
  description: string;
}

interface FunctionalFoodsPageProps {
  heroTitle?: string;
  heroSubtitle?: string;
  introTitle?: string;
  introParagraph1?: string;
  introParagraph2?: string;
  introParagraph3?: string;
  labelReviewTitle?: string;
  labelReviewDescription?: string;
  labelReviewItems?: string[];
  expertiseTitle?: string;
  expertiseSubtitle?: string;
  expertiseItems?: ExpertiseItem[];
  segmentsTitle?: string;
  segmentsSubtitle?: string;
  segmentsItems?: SegmentItem[];
}

const defaultLabelReviewItems: string[] = [
  'Allergy compliance',
  'Descriptive claims',
  'Health and nutrient content claims',
  'GMO / GE and "free-from" labelling requirements',
  'Identity statement',
  'Label layout',
  'Net quantitative content statement',
  'Nutrition Analysis',
  'Nutrition facts panel',
  'Place and name of the business'
];

const defaultExpertiseItems: ExpertiseItem[] = [
  {
    title: 'Product Development Support',
    description: 'Formulation advice for functional foods, dietary supplements, and nutraceutical products tailored to target health benefits such as immunity, cognitive function, gut health, and cardiovascular support.'
  },
  {
    title: 'Regulatory & Compliance Support',
    description: 'Ensuring your products meet local and international standards, including labelling, safety, and claim substantiation.'
  },
  {
    title: 'Clinical & Scientific Validation',
    description: 'Design and management of clinical trials, safety assessments, and efficacy studies to substantiate health claims.'
  },
  {
    title: 'Quality & Safety Assurance',
    description: 'Support in Good Manufacturing Practices (GMP), quality control, and stability studies for functional foods and nutraceuticals.'
  },
  {
    title: 'Market Research & Positioning',
    description: 'Insights into emerging trends, consumer preferences, and competitive landscapes to help you position your products successfully.'
  }
];

const defaultSegmentsItems: SegmentItem[] = [
  {
    title: 'Dietary Supplements',
    iconSrc: '/images/industries/foods-nutraceuticals/Dietary-Supplements.webp',
    description: 'Comprehensive support in formulation, regulatory compliance, and scientific documentation for vitamins, minerals, and herbal supplements.'
  },
  {
    title: 'Functional Beverages',
    iconSrc: '/images/industries/foods-nutraceuticals/Functional-Beverages.webp',
    description: 'Expert guidance in the development and positioning of health-oriented drinks, including energy, immunity, and wellness formulations.'
  },
  {
    title: 'Fortified Foods & Snacks',
    iconSrc: '/images/industries/foods-nutraceuticals/Fortified-Foods-Snacks.webp',
    description: 'Support for food products enriched with nutrients or bioactive compounds, including cereals, bars, functional bakery, and confectionery.'
  },
  {
    title: 'Sports Nutrition Products',
    iconSrc: '/images/industries/foods-nutraceuticals/Sports-Nutrition-Products.webp',
    description: 'End-to-end assistance in sports nutrition, from protein powders and amino acids to recovery supplements and pre-workout formulas.'
  },
  {
    title: 'Herbal & Traditional Health Products',
    iconSrc: '/images/industries/foods-nutraceuticals/Herbal-Traditional-Health-Products.webp',
    description: 'Guidance in the research, documentation, and regulatory approval of herbal extracts, traditional formulations, and botanical products.'
  }
];

export default function FunctionalFoodsPage({
  heroTitle = 'Functional Foods and Nutraceuticals',
  heroSubtitle = 'From concept to clinical validation, we help researchers, healthcare professionals, and industries develop safe, effective, and evidence-based functional foods and nutraceuticals.',
  introTitle = 'Transforming Health Through Functional Foods & Nutraceutical Innovation',
  introParagraph1 = 'Functional foods and nutraceuticals are rapidly transforming the way consumers approach health, wellness, and disease prevention. With increasing global demand for foods that provide additional health benefits beyond basic nutrition, companies face the challenge of developing safe, effective, and regulatory-compliant products. At Pubrica, we combine scientific expertise, regulatory knowledge, and clinical insight to help you bring innovative functional foods and nutraceuticals to the market.',
  introParagraph2 = 'We offer a wide range of research services for nutraceutical ingredients, supplements, pharmacologic, and functional foods for branded and private label supplements. Our service excellence, critical to client stories, is the result of 10+ years of experience in Nutraceuticals. Evidence-based Ingredient Selection (Product development): Based on your health goals for your nutraceutical supplement product, we will scrutinize the scientific database for the best natural ingredients.',
  introParagraph3 = 'Selection of the ingredients is based on strong evidence-based research that demonstrates efficacy and safety to support a broad range of health needs, including immune, skin, respiratory, joint, and muscle. We identify all that is known, as well as find key knowledge gaps. Both a single ingredient and a combination of ingredients are obtained to have synergistic health benefits. Ingredients were also selected because they already have the desired level of regulatory approval.',
  labelReviewTitle = 'Food Label Review',
  labelReviewDescription = 'Our food label review ensures that labels comply with national and international regulations that include:',
  labelReviewItems = defaultLabelReviewItems,
  expertiseTitle = 'Our Expertise in Functional Foods & Nutraceuticals Includes',
  expertiseSubtitle = 'At Pubrica, our expertise in Functional Foods & Nutraceuticals spans scientific research, regulatory compliance, and product innovation, helping researchers, brands, and healthcare companies transform ideas into evidence-based, market-ready solutions.',
  expertiseItems = defaultExpertiseItems,
  segmentsTitle = 'Foods & Nutraceuticals Segments We Serve',
  segmentsSubtitle = 'At Pubrica, we provide specialized expertise across a wide spectrum of functional foods and nutraceutical segments, helping brands bring scientifically backed, innovative products to market. Our services cater to:',
  segmentsItems = defaultSegmentsItems
}: FunctionalFoodsPageProps) {
  // Accordion state for segments (opens only one card at a time, defaults to all closed)
  const [openSegmentIndex, setOpenSegmentIndex] = useState<number | null>(null);

  const toggleSegmentAccordion = (index: number) => {
    setOpenSegmentIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">

      {/* Hero Section */}
      <HeroBanner
        title={heroTitle}
        description={heroSubtitle}
        headingAs="h1"
      />

      {/* Intro & Transformation Section */}
      <section className="py-7 px-6 max-w-6xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2824] leading-snug">
            {introTitle}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6 text-left">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {introParagraph1}
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We offer a wide range of <a href="/services/research-services/" className="text-blue-600">research services</a> for nutraceutical ingredients, supplements, pharmacologic, and functional foods for branded and private label supplements. Our service excellence, critical to client stories, is the result of 10+ years of experience in Nutraceuticals. Evidence-based Ingredient Selection (<a href="/services/research-services/product-development/" className="text-blue-600">Product development</a>): Based on your health goals for your nutraceutical supplement product, we will scrutinize the scientific database for the best natural ingredients.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {introParagraph3}
            </p>
            <div className="pt-2">
              <GetFreeQuoteButton />
            </div>
          </div>

          <div className="w-full lg:w-[420px] flex-shrink-0 flex justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/industries/foods-nutraceuticals/Functional-Foods-Nutraceutical-Innovation.webp"
                alt="Laboratory research"
                fill
                sizes="400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Label Review Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto border-t border-gray-100">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2824]">{labelReviewTitle}</h2>
          <div className="w-12 h-1 bg-[#0f2824] mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-left">
            {labelReviewDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {labelReviewItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-white border border-gray-200/80 rounded-xl p-4 shadow-sm hover:border-gray-300 transition-colors">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#0f2824] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[#0f2824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-800 text-sm sm:text-base font-medium leading-normal">{item}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Our Expertise in Functional Foods & Nutraceuticals Includes (Exact Orbit / Around Central Image Layout matching the reference screenshot) */}
      <section className="py-8 px-6 max-w-7xl mx-auto border-t border-gray-100 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{expertiseTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {expertiseSubtitle}
          </p>
        </div>

        {/* Desktop Absolute/Grid Hybrid Layout matching the exact orbiting card design from screenshot */}
        <div className="relative max-w-5xl mx-auto min-h-[650px] flex items-center justify-center">

          {/* Central Circular Image */}
          <div className="absolute z-10 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
            <Image
              src="/images/industries/foods-nutraceuticals/Our-Expertise-in-Functional-Foods-Nutraceuticals-Includes.webp"
              alt="Microscope research"
              fill
              sizes="340px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Surrounding Cards Grid for responsiveness & Absolute placements for Desktop exact match */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-[380px] gap-x-8 z-20">

            {/* Top Left Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md md:absolute md:left-0 md:top-0 md:w-[320px]">
              <h3 className="text-base font-bold text-[#c8102e] mb-2">{expertiseItems[1].title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{expertiseItems[1].description}</p>
            </div>

            {/* Top Right Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md md:absolute md:right-0 md:top-0 md:w-[320px]">
              <h3 className="text-base font-bold text-[#c8102e] mb-2">{expertiseItems[0].title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{expertiseItems[0].description}</p>
            </div>

            {/* Bottom Left Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md md:absolute md:left-0 md:bottom-0 md:w-[320px]">
              <h3 className="text-base font-bold text-[#c8102e] mb-2">{expertiseItems[3].title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{expertiseItems[3].description}</p>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md md:absolute md:right-0 md:bottom-0 md:w-[320px]">
              <h3 className="text-base font-bold text-[#c8102e] mb-2">{expertiseItems[4].title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{expertiseItems[4].description}</p>
            </div>

          </div>
        </div>

        {/* Centered Fifth Item placed nicely underneath the orbit section */}
        <div className="max-w-md mx-auto mt-16 md:mt-24 z-20 relative">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md text-center">
            <h3 className="text-base font-bold text-[#c8102e] mb-2">{expertiseItems[2].title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{expertiseItems[2].description}</p>
          </div>
        </div>

      </section>

      {/* Foods & Nutraceuticals Segments We Serve (Accordion style with individual control) */}
      <section className="py-7 px-6 max-w-6xl mx-auto border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{segmentsTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {segmentsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {segmentsItems.map((item, index) => {
            const isOpen = openSegmentIndex === index;
            const isCenteredBottomRow = index >= 3;

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all flex flex-col ${isCenteredBottomRow ? 'lg:col-span-1 lg:mx-auto lg:w-full max-w-md' : ''
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleSegmentAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      {item.iconSrc ? <Image src={item.iconSrc} alt="" fill className="object-contain" sizes="32px" /> : null}
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#0f2824] leading-snug">{item.title}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-xs sm:text-sm border-t border-gray-100 bg-gray-50/30 leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}