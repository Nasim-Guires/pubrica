import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';

interface ServiceItem {
  title: string;
  description: string;
}

interface SegmentItem {
  title: string;
  description: string;
  iconSrc?: string;
}

interface FeatureItem {
  text: string;
}

interface BiosimilarPageProps {
  pageTitle?: string;
  metaDescription?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  mainHeading?: string;
  mainDescription?: string;
  definitionHeading?: string;
  definitionText?: string;
  featuresHeading?: string;
  features?: FeatureItem[];
  expertiseHeading?: string;
  expertiseDescription?: string;
  services?: ServiceItem[];
  segmentsHeading?: string;
  segmentsDescription?: string;
  segments?: SegmentItem[];
  differenceHeading?: string;
  differenceText1?: string;
  differenceText2?: string;
}

const defaultFeatures: FeatureItem[] = [
  { text: 'Highly similar to reference biologics in structure and function' },
  { text: 'Comparable safety, quality, and efficacy' },
  { text: 'Cost-effective alternative to original biologics' },
  { text: 'Approved through rigorous regulatory evaluation' },
  { text: 'Tested for immunogenicity to ensure safety' },
  { text: 'Manufactured with advanced, consistent processes' }
];

const defaultServices: ServiceItem[] = [
  {
    title: 'Clinical Research Support',
    description: 'Designing and managing clinical trials for biosimilars, including PK/PD studies, immunogenicity assessments, and comparative efficacy trials.'
  },
  {
    title: 'Biosimilars Regulatory Services',
    description: 'Comprehensive guidance on global regulatory pathways, including FDA, EMA, and other emerging markets. We ensure your product meets all compliance requirements for approval and market entry.'
  },
  {
    title: 'Evidence Generation & Publications',
    description: 'Supporting real-world evidence studies, post-marketing surveillance, and peer-reviewed publications to demonstrate biosimilar safety and effectiveness.'
  },
  {
    title: 'Scientific Writing & Medical Communications',
    description: 'Preparation of high-quality regulatory documents, clinical study reports, and scientific publications tailored to biosimilars.'
  },
  {
    title: 'Regulatory Submission Support',
    description: 'End-to-end assistance in preparing INDs, BLAs, and marketing authorization applications for global submissions.'
  },
  {
    title: 'Market Access & Strategy Consulting',
    description: 'Guidance on pricing, reimbursement strategies, and market positioning to maximize biosimilar uptake.'
  }
];

const defaultSegments: SegmentItem[] = [
  {
    title: 'Monoclonal Antibodies (mAbs)',
    iconSrc: '/images/industries/biosimilar/Monoclonal-Antibodies-mAbs.webp',
    description: 'Assistance in development, analytical characterization, and regulatory submissions for complex biologics.'
  },
  {
    title: 'Insulins',
    iconSrc: '/images/industries/biosimilar/Insulins.webp',
    description: 'Support for biosimilar insulin development, clinical trials, and market entry strategies.'
  },
  {
    title: 'Growth Hormones',
    iconSrc: '/images/industries/biosimilar/Growth-Hormones.webp',
    description: 'Expertise in formulation, comparability studies, and documentation for growth hormone biosimilars.'
  },
  {
    title: 'Erythropoietins (EPOs)',
    iconSrc: '/images/industries/biosimilar/Erythropoietins-EPOs.webp',
    description: 'Guidance on analytical, preclinical, and clinical requirements for erythropoietin biosimilars.'
  },
  {
    title: 'Interferons',
    iconSrc: '/images/industries/biosimilar/Interferons.webp',
    description: 'End-to-end support for biosimilar interferons, including pharmacovigilance and post-market strategies.'
  },
  {
    title: 'Other Recombinant Proteins',
    iconSrc: '/images/industries/biosimilar/Other-Recombinant-Proteins.webp',
    description: 'Customized solutions for a variety of recombinant protein biosimilars, ensuring regulatory compliance and scientific rigor.'
  }
];

export default function BiosimilarIndustryPage({
  pageTitle = 'Biosimilars Industry Support Services | Pubrica',
  metaDescription = 'Ensure your biosimilar meets regulatory standards with our expert regulatory and scientific support services, from data collection to evidence evaluation.',
  heroTitle = 'Biosimilars',
  heroSubtitle = 'Ensure your biosimilar meets regulatory standards with our expert regulatory and scientific support services. We provide end-to-end assistance from data collection to evidence evaluation, helping you achieve approval and compliance efficiently.',
  mainHeading = 'Advancing Compliance and Market Access for Biosimilars Through Expert Regulatory, Scientific, and Evidence Support Services',
  mainDescription = 'Biosimilars are a crucial component of today’s pharmaceutical landscape, providing more affordable alternatives to innovative biologic therapies without compromising safety or efficacy. As the demand for high-quality, cost-effective biologics grows, the biosimilars industry requires meticulous scientific, regulatory, and operational support to navigate complex development pathways and global regulatory standards.',
  definitionText = 'A biosimilar is a biologic product that is approved based on the demonstration that it is highly similar to an FDA‐approved biologic product, known as a reference product, and has no clinically meaningful differences in terms of safety and effectiveness from the reference product. Only minor differences in clinically inactive components are allowable in biosimilar products.',
  featuresHeading = 'Key Features of Biosimilars',
  features = defaultFeatures,
  expertiseHeading = 'Our Expertise in Biosimilars Includes',
  expertiseDescription = 'We support biosimilar developers at every stage with specialized services designed for regulatory compliance, scientific rigor, and operational efficiency:',
  services = defaultServices,
  segmentsHeading = 'Biosimilar Drug Segments We Serve',
  segmentsDescription = 'We provide comprehensive support across a wide range of biosimilar drug segments, helping manufacturers navigate development, regulatory, and commercialization challenges:',
  segments = defaultSegments,
  differenceHeading = 'How Are Biosimilars Different From Generic Medicines?',
  differenceText1 = 'While identical generic versions of small molecules can typically be chemically synthesized, it is not possible to create identical versions of reference biologic medicines due to their complexity. Therefore, the processes used to develop generic medicines cannot be applied to the development of biosimilar medicines.',
  differenceText2 = 'Biologics are produced from living organisms, whereas chemical drugs are synthesized using chemical processes. Because living organisms are inherently variable, the active substance of a biologic is complex and heterogeneous, meaning minor variations can occur naturally during manufacturing.'
}: BiosimilarPageProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pubrica.com/industries/biosimilar/" />
      </Head>

      <main className="min-h-screen bg-white text-[#0f2824]">
        {/* Hero Banner Section */}
        <HeroBanner
          title={heroTitle}
          description={heroSubtitle}
          headingAs="h1"
        />

        {/* Introduction & Features Section */}
        <section className="max-w-7xl mx-auto py-7 px-6">
          <div className="space-y-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] tracking-tight leading-snug">
              {mainHeading}
            </h2>
          </div>

          <div className="clearfix">
            {/* CIRCULAR FLOATING IMAGE CONTAINER */}
            <div className="flex justify-center md:block md:float-right md:ml-8 mb-6">
              <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-xl bg-gray-100 border-[10px] border-white p-1 flex items-center justify-center relative">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/industries/biosimilar/Advancing-Compliance-and-Market-Access-for-Biosimilars.webp"
                    alt="Scientists working in a laboratory conducting biosimilar research and analysis"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
              {mainDescription}
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
              {definitionText}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              At Pubrica, we offer comprehensive end-to-end services to support biosimilar manufacturers&apos; success, from preclinical development to market authorization. Our expertise ensures your biosimilar products meet stringent quality, safety, and efficacy requirements while accelerating time-to-market.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#0f2824]">{featuresHeading}</h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-[#b91c1c] font-bold mt-0.5">➔</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="clear-both pt-2">
            <GetFreeQuoteButton />
          </div>
        </section>

        {/* Our Expertise in Biosimilars Includes */}
        <section className="py-7 bg-gray-50 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {expertiseHeading}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
              {expertiseDescription}
            </p>
          </div>

          {/* Central Graphic with Surrounding Cards Layout */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Column Cards (3 items: 0, 2, 5) */}
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{services[0].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{services[0].description}</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{services[2].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{services[2].description}</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{services[5].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{services[5].description}</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center my-6 md:my-0">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image
                  src="/images/industries/biosimilar/Our-Expertise-in-Biosimilars-Includes.webp"
                  alt="Researchers collaborating on biosimilar regulatory and scientific evidence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                />
              </div>
            </div>

            {/* Right Column Cards (3 items: 1, 3, 4) */}
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{services[1].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{services[1].description}</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{services[3].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{services[3].description}</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700 text-base mb-1.5">{services[4].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{services[4].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Biosimilar Drug Segments We Serve */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
              {segmentsHeading}
            </h2>
            <p className="text-gray-700 max-w-5xl text-sm md:text-base leading-relaxed">
              {segmentsDescription}
            </p>
          </div>

          {/* Grid Section - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map((seg, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-row items-start space-x-3 min-h-[140px]"
              >
                {seg.iconSrc && (
                  <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
                    <Image
                      src={seg.iconSrc}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h4 className="font-bold text-sm md:text-base text-[#1b3b32] mb-1.5 leading-snug">
                    {seg.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-xs leading-relaxed">
                    {seg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Are Biosimilars Different From Generic Medicines? */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
              {differenceHeading}
            </h2>
            <p className="text-gray-700 max-w-5xl text-sm md:text-base leading-relaxed mb-3">
              {differenceText1}
            </p>
              {/* <p className="text-gray-700 max-w-5xl text-sm md:text-base leading-relaxed">
                {differenceText2}
              </p> */}
          </div>
        </section>
      </main>
    </>
  );
}