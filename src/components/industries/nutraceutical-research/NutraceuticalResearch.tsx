import React from 'react';
import Image from 'next/image';
import HeroBanner from '@/components/common/HeroBanner';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Link from 'next/link';

export default function NutraceuticalResearch() {
  return (
    <div className="bg-white text-[#0f2824] w-full font-sans overflow-hidden">
      {/* Hero Banner Section */}
      <HeroBanner
        title="Nutraceuticals"
        description="From innovative formulations to regulatory compliance, we empower nutraceutical brands to deliver safe, effective, and high-quality products to the global market."
        headingAs="h1"
      />

      {/* Transforming Health Section */}
      <section className="py-7 px-6 max-w-6xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f2824] leading-snug">
            Transforming Health with Advanced Nutraceutical Solutions
          </h2>
          <p className="text-emerald-800 font-medium text-sm sm:text-base">
            Empowering wellness through science-backed nutraceutical innovations that enhance life, naturally.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed text-left">
            <p>
              In the dynamic sectors of food, beverages, and nutraceuticals, companies face significant challenges, including the need to innovate continuously while adhering to strict regulatory standards. The complexity of formulating products that not only meet health and safety regulations but also appeal to consumer preferences requires sophisticated research and precise communication strategies. Additionally, the rapid pace of scientific advancements and consumer trends demands agile responses and adaptive research methodologies.
            </p>
            <p>
              At Pubrica, we overcome these challenges through our team of experienced professionals who specialize in food science, nutrition, and regulatory compliance. Our experts bring a depth of knowledge that ensures high-quality outcomes, from <Link href="/services/research-services/product-development/" className='text-blue-600'>product development</Link> to market analysis. By integrating cutting-edge research with strategic insights, we enable our clients to navigate the complexities of the market effectively. Our commitment to excellence is reflected in the meticulousness of our work, enabling us to enhance product value and ensure that our clients’ offerings stand out in a competitive landscape. With Pubrica’s support, businesses in the food, beverages, and nutraceuticals sectors are equipped to overcome industry challenges and achieve sustained success.
            </p>
            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </div>

          <div className="w-full lg:w-[420px] flex-shrink-0 flex justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/industries/nutraceutical-research/Transforming-Health-with-Advanced-Nutraceutical-Solutions.webp"
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
      <section className="py-7 bg-gray-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Expertise in Nutraceutical Development
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Developing a nutraceutical product requires a meticulous blend of scientific research, formulation expertise, quality control, and regulatory compliance. At Pubrica, we offer end-to-end support for:
          </p>
        </div>

        {/* Central Graphic with Surrounding Cards Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column Cards */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">
                Clinical Evaluation &amp; Safety Assessment
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Safety and efficacy are paramount. Our nutraceutical solutions undergo rigorous preclinical and clinical testing, ensuring that every product is not only effective but also safe for consumers.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">
                Manufacturing &amp; Quality Assurance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We collaborate with cGMP-compliant manufacturers to ensure high-quality production. From raw material sourcing to packaging, quality assurance is integrated at every stage.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center my-6 md:my-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white shadow-md overflow-hidden">
              <Image
                src="/images/industries/nutraceutical-research/Our-Expertise-in-Nutraceutical-Development.webp"
                alt="Nutraceutical specialist writing formulation notes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
                priority
              />
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">
                Research &amp; Formulation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team of experts conducts in-depth scientific research to identify active ingredients, bioavailability, and efficacy. We focus on innovative, safe, and market-relevant formulations tailored to target health benefits.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">
                Regulatory Compliance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our experts ensure that your product complies with global regulatory standards, including FDA (US), EFSA (EU), FSSAI (India), and other regional authorities.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-base mb-1.5">
                Market Launch &amp; Commercialization Support
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We assist brands in product positioning, marketing strategies, labelling compliance, and post-market surveillance to ensure successful market entry and sustained growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Segments Of The Nutraceutical Industry Section */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            Key Segments Of The Nutraceutical Industry
          </h2>
          <p className="text-gray-700 max-w-5xl text-sm md:text-base leading-relaxed">
            At Pubrica, we understand the evolving nutraceutical landscape and its impact on health and wellness. The industry spans a variety of segments from vitamins and minerals to herbal extracts and functional foods; each is designed to support specific health goals and enhance overall well-being.
          </p>
        </div>

        {/* Grid Section - 3 Columns Horizontal Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/nutraceutical-research/Vitamins-and-Minerals.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Vitamins and Minerals
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                Vitamin and mineral supplements remain the largest category in the nutraceutical industry. Products like multivitamins, calcium, magnesium, and vitamin D are widely consumed for bone health, immunity, and overall wellness.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/nutraceutical-research/Herbal-and-Botanical-Nutraceuticals.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Herbal and Botanical Nutraceuticals
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                Herbal and botanical supplements use plant extracts to support health. Popular ingredients include ginseng, turmeric, ashwagandha, green tea, and echinacea. These products are often marketed for stress relief, cognitive support, and immune enhancement.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/nutraceutical-research/Functional-Foods-and-Beverages.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Functional Foods and Beverages
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                Functional foods are everyday consumables enhanced with bioactive compounds. Examples include probiotic yogurts, omega-3 fortified eggs, protein bars, and antioxidant-rich beverages. These products are designed to provide additional health benefits without changing the consumer’s diet.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/nutraceutical-research/Protein-and-Amino-Acid-Supplements.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Protein and Amino Acid Supplements
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                High-protein diets and sports nutrition are driving the demand for protein powders, amino acid supplements, and meal replacements. These nutraceuticals support muscle growth, recovery, and weight management.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/industries/nutraceutical-research/Probiotics-and-Prebiotics.webp"
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                Probiotics and Prebiotics
              </h4>
              <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                Gut health has become a major focus area in the nutraceutical sector. Probiotics and prebiotics aid digestion, boost immunity, and maintain a healthy microbiome. Products include fermented foods, capsules, and beverages containing beneficial bacteria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}