import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

interface NutraceuticalResearchProps {
  heroTitle?: string;
  heroSubtitle?: string;
  transformTitle?: string;
  transformSubtitle?: string;
  transformParagraphs?: string[];
  transformImage?: string;
  ctaText?: string;
  expertiseTitle?: string;
  expertiseSubtitle?: string;
  expertiseItems?: ExpertiseItem[];
  expertiseCenterImage?: string;
  segmentsTitle?: string;
  segmentsSubtitle?: string;
  segments?: SegmentItem[];
}

const defaultTransformParagraphs = [
  "In the dynamic sectors of food, beverages, and nutraceuticals, companies face significant challenges, including the need to innovate continuously while adhering to strict regulatory standards. The complexity of formulating products that not only meet health and safety regulations but also appeal to consumer preferences requires sophisticated research and precise communication strategies. Additionally, the rapid pace of scientific advancements and consumer trends demands agile responses and adaptive research methodologies.",
  "At Pubrica, we overcome these challenges through our team of experienced professionals who specialize in food science, nutrition, and regulatory compliance. Our experts bring a depth of knowledge that ensures high-quality outcomes, from product development to market analysis. By integrating cutting-edge research with strategic insights, we enable our clients to navigate the complexities of the market effectively. Our commitment to excellence is reflected in the meticulousness of our work, enabling us to enhance product value and ensure that our clients' offerings stand out in a competitive landscape. With Pubrica's support, businesses in the food, beverages, and nutraceuticals sectors are equipped to overcome industry challenges and achieve sustained success."
];

const defaultExpertiseItems: ExpertiseItem[] = [
  {
    title: "Research & Formulation",
    description: "Our team of experts conducts in-depth scientific research to identify active ingredients, bioavailability, and efficacy. We focus on innovative, safe, and market-relevant formulations tailored to target health benefits."
  },
  {
    title: "Regulatory Compliance",
    description: "Our experts ensure that your product complies with global regulatory standards, including FDA (US), EFSA (EU), FSSAI (India), and other regional authorities."
  },
  {
    title: "Market Launch & Commercialization Support",
    description: "We assist brands in product positioning, marketing strategies, labelling compliance, and post-market surveillance to ensure successful market entry and sustained growth."
  },
  {
    title: "Clinical Evaluation & Safety Assessment",
    description: "Safety and efficacy are paramount. Our nutraceutical solutions undergo rigorous preclinical and clinical testing, ensuring that every product is not only effective but also safe for consumers."
  },
  {
    title: "Manufacturing & Quality Assurance",
    description: "We collaborate with cGMP-compliant manufacturers to ensure high-quality production. From raw material sourcing to packaging, quality assurance is integrated at every stage."
  }
];

const defaultSegments: SegmentItem[] = [
  {
    title: "Vitamins and Minerals",
    iconSrc: "/images/industries/nutraceutical-research/Vitamins-and-Minerals.webp",
    description: "Vitamin and mineral supplements remain the largest category in the nutraceutical industry. Products like multivitamins, calcium, magnesium, and vitamin D are widely consumed for bone health, immunity, and overall wellness."
  },
  {
    title: "Herbal and Botanical Nutraceuticals",
    iconSrc: "/images/industries/nutraceutical-research/Herbal-and-Botanical-Nutraceuticals.webp",
    description: "Herbal and botanical supplements use plant extracts to support health. Popular ingredients include ginseng, turmeric, ashwagandha, green tea, and echinacea. These products are often marketed for stress relief, cognitive support, and immune enhancement."
  },
  {
    title: "Functional Foods and Beverages",
    iconSrc: "/images/industries/nutraceutical-research/Functional-Foods-and-Beverages.webp",
    description: "Functional foods are everyday consumables enhanced with bioactive compounds. Examples include probiotic yogurts, omega-3 fortified eggs, protein bars, and antioxidant-rich beverages. These products are designed to provide additional health benefits without changing the consumer’s diet."
  },
  {
    title: "Protein and Amino Acid Supplements",
    iconSrc: "/images/industries/nutraceutical-research/Protein-and-Amino-Acid-Supplements.webp",
    description: "High-protein diets and sports nutrition are driving the demand for protein powders, amino acid supplements, and meal replacements. These nutraceuticals support muscle growth, recovery, and weight management."
  },
  {
    title: "Probiotics and Prebiotics",
    iconSrc: "/images/industries/nutraceutical-research/Probiotics-and-Prebiotics.webp",
    description: "Gut health has become a major focus area in the nutraceutical sector. Probiotics and prebiotics aid digestion, boost immunity, and maintain a healthy microbiome. Products include fermented foods, capsules, and beverages containing beneficial bacteria."
  }
];

export default function NutraceuticalResearch({
  heroTitle = "Nutraceuticals",
  heroSubtitle = "From innovative formulations to regulatory compliance, we empower nutraceutical brands to deliver safe, effective, and high-quality products to the global market.",
  transformTitle = "Transforming Health with Advanced Nutraceutical Solutions",
  transformSubtitle = "Empowering wellness through science-backed nutraceutical innovations that enhance life, naturally.",
  transformParagraphs = defaultTransformParagraphs,
  transformImage = "/images/industries/nutraceutical-research/Transforming-Health-with-Advanced-Nutraceutical-Solutions.webp",
  ctaText = "Get a Free Quote",
  expertiseTitle = "Our Expertise in Nutraceutical Development",
  expertiseSubtitle = "Developing a nutraceutical product requires a meticulous blend of scientific research, formulation expertise, quality control, and regulatory compliance. At Pubrica, we offer end-to-end support for:",
  expertiseItems = defaultExpertiseItems,
  expertiseCenterImage = "/images/industries/nutraceutical-research/Our-Expertise-in-Nutraceutical-Development.webp",
  segmentsTitle = "Key Segments Of The Nutraceutical Industry",
  segmentsSubtitle = "At Pubrica, we understand the evolving nutraceutical landscape and its impact on health and wellness. The industry spans a variety of segments from vitamins and minerals to herbal extracts and functional foods; each is designed to support specific health goals and enhance overall well-being.",
  segments = defaultSegments
}: NutraceuticalResearchProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">

      {/* Hero Banner Section */}
      <HeroBanner
        title={heroTitle}
        description={heroSubtitle}
        headingAs="h1"
      />

      {/* Transforming Health Section */}
      <section className="py-7 px-6 max-w-6xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f2824] leading-snug">
            {transformTitle}
          </h2>
          <p className="text-emerald-800 font-medium text-sm sm:text-base">
            {transformSubtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-left">
            {transformParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </div>

          <div className="w-full lg:w-[420px] flex-shrink-0 flex justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={transformImage}
                alt="Nutraceutical research lab technician"
                fill
                sizes="(max-width: 768px) 340px, 400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Expertise in Nutraceutical Development Section */}
      <section className="bg-gray-50/50 py-6 px-6 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-left mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f2824]">{expertiseTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            {expertiseSubtitle}
          </p>
        </div>

        {/* Circular / Grid Expertise Layout with reduced gaps and spacing */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
          {/* Left Column Expertise (2 items) */}
          <div className="space-y-4">
            {expertiseItems.slice(3, 5).map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left">
                <h3 className="font-bold text-base text-[#cc0000] mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center my-4 md:my-0">
            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={expertiseCenterImage}
                alt="Nutraceutical specialist writing formulation notes"
                fill
                sizes="300px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Column Expertise (3 items) */}
          <div className="space-y-4">
            {expertiseItems.slice(0, 3).map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left">
                <h3 className="font-bold text-base text-[#cc0000] mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Segments Of The Nutraceutical Industry Section */}
      <section className="max-w-6xl mx-auto py-6 px-6 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f2824]">{segmentsTitle}</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          {segmentsSubtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
              {segment.iconSrc ? <div className="relative w-10 h-10 mb-3"><Image src={segment.iconSrc} alt="" fill className="object-contain" sizes="40px" /></div> : null}
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1.5">{segment.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{segment.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}