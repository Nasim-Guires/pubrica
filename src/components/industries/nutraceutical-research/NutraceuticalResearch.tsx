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
    description: "Vitamin and mineral supplements remain the largest category in the..."
  },
  {
    title: "Herbal and Botanical Nutraceuticals",
    description: "Herbal and botanical supplements use plant extracts to support health..."
  },
  {
    title: "Functional Foods and Beverages",
    description: "Functional foods are everyday consumables enhanced with bioactive..."
  },
  {
    title: "Protein and Amino Acid Supplements",
    description: "High-protein diets and sports nutrition are driving the demand for protein..."
  },
  {
    title: "Probiotics and Prebiotics",
    description: "Gut health has become a major focus area in the nutraceutical sector..."
  }
];

export default function NutraceuticalResearch({
  heroTitle = "Nutraceuticals",
  heroSubtitle = "From innovative formulations to regulatory compliance, we empower nutraceutical brands to deliver safe, effective, and high-quality products to the global market.",
  transformTitle = "Transforming Health with Advanced Nutraceutical Solutions",
  transformSubtitle = "Empowering wellness through science-backed nutraceutical innovations that enhance life, naturally.",
  transformParagraphs = defaultTransformParagraphs,
  transformImage = "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
  ctaText = "Get a Free Quote",
  expertiseTitle = "Our Expertise in Nutraceutical Development",
  expertiseSubtitle = "Developing a nutraceutical product requires a meticulous blend of scientific research, formulation expertise, quality control, and regulatory compliance. At Pubrica, we offer end-to-end support for:",
  expertiseItems = defaultExpertiseItems,
  expertiseCenterImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  segmentsTitle = "Key Segments Of The Nutraceutical Industry",
  segmentsSubtitle = "At Pubrica, we understand the evolving nutraceutical landscape and its impact on health and wellness. The industry spans a variety of segments from vitamins and minerals to herbal extracts and functional foods; each is designed to support specific health goals and enhance overall well-being.",
  segments = defaultSegments
}: NutraceuticalResearchProps) {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">
      
      {/* Hero Banner Section */}
      <section className="bg-[#0f2824] py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto border border-emerald-800/60 rounded-xl p-8 sm:p-12 shadow-inner">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">{heroTitle}</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Transforming Health Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#0f2824]">
            {transformTitle}
          </h2>
          <p className="text-emerald-800 font-medium text-sm sm:text-base">
            {transformSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            {transformParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <button className="bg-[#cc0000] hover:bg-[#b30000] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors text-sm sm:text-base">
                {ctaText}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-gray-50">
              <Image 
                src={transformImage} 
                alt="Nutraceutical research lab technician" 
                fill 
                sizes="(max-width: 768px) 320px, 400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise in Nutraceutical Development Section */}
      <section className="bg-gray-50/50 py-20 px-6 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{expertiseTitle}</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            {expertiseSubtitle}
          </p>
        </div>

        {/* Circular / Grid Expertise Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column Expertise (2 items) */}
          <div className="space-y-6">
            {expertiseItems.slice(3, 5).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left">
                <h3 className="font-bold text-base text-[#cc0000] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center my-6 md:my-0">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={expertiseCenterImage} 
                alt="Nutraceutical specialist writing formulation notes" 
                fill 
                sizes="340px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Column Expertise (3 items) */}
          <div className="space-y-6">
            {expertiseItems.slice(0, 3).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-left">
                <h3 className="font-bold text-base text-[#cc0000] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Segments Of The Nutraceutical Industry Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2824]">{segmentsTitle}</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed mb-14">
          {segmentsSubtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 font-bold text-lg border border-emerald-100">
                0{index + 1}
              </div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{segment.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{segment.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}