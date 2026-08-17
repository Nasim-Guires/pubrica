import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

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
    description: 'End-to-end support for biosimilar interferons, including pharmacovigilance and safety monitoring.' 
  },
  { 
    title: 'Other Recombinant Proteins',
    iconSrc: '/images/industries/biosimilar/Other-Recombinant-Proteins.webp', 
    description: 'Customized solutions for a variety of recombinant protein biosimilars, ensuring regulatory compliance and quality.' 
  }
];

export default function BiosimilarIndustryPage({
  pageTitle = 'Biosimilars Industry Support Services | Pubrica',
  metaDescription = 'Ensure your biosimilar meets regulatory standards with our expert regulatory and scientific support services, from data collection to evidence evaluation.',
  heroTitle = 'Biosimilars',
  heroSubtitle = 'Ensure your biosimilar meets regulatory standards with our expert regulatory and scientific support services. We provide end-to-end assistance from data collection to evidence evaluation, helping you achieve approval and compliance efficiently.',
  mainHeading = 'Advancing Compliance and Market Access for Biosimilars Through Expert Regulatory, Scientific, and Evidence Support Services',
  mainDescription = 'Biosimilars are a crucial component of today’s pharmaceutical landscape, providing more affordable alternatives to innovative biologic therapies without compromising safety or efficacy. As the demand for high-quality, cost-effective biologics grows, the biosimilars industry requires meticulous scientific, regulatory, and operational support to navigate complex development pathways and global regulatory standards.',
  definitionText = 'A biosimilar is a biologic product that is approved based on the demonstration that it is highly similar to an FDA-approved biologic product, known as a reference product, and has no clinically meaningful differences in terms of safety and effectiveness from the reference product. Only minor differences in clinically inactive components are allowable in biosimilar products.',
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
        <section className="bg-[#0f2824] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto border border-white/25 p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
            <p className="text-lg text-gray-200 leading-relaxed">{heroSubtitle}</p>
          </div>
        </section>

        {/* Introduction & Features Section */}
        <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">{mainHeading}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{mainDescription}</p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{definitionText}</p>
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

           <GetFreeQuoteButton/>
          </div>

          <div className="relative w-full h-[450px] flex justify-center items-center">
            <div className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden shadow-xl bg-gray-100 border-[10px] border-white">
              <Image 
                src="/images/industries/biosimilar/Advancing-Compliance-and-Market-Access-for-Biosimilars.webp" 
                alt="Scientists working in a laboratory conducting biosimilar research and analysis"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Our Expertise in Biosimilars Includes */}
        <section className="py-20 px-4 bg-gray-50 text-[#0f2824] overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{expertiseHeading}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">{expertiseDescription}</p>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[700px] gap-8 lg:gap-0">
            {/* Left Column Cards */}
            <div className="flex flex-col gap-8 w-full lg:w-[360px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[0].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[0].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[2].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[2].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[5].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[5].description}</p>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:mx-[-30px] z-0 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/industries/biosimilar/Our-Expertise-in-Biosimilars-Includes.webp" 
                  alt="Researchers collaborating on biosimilar regulatory and scientific evidence"
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column Cards */}
            <div className="flex flex-col gap-8 w-full lg:w-[360px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[1].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[1].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[3].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[3].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[4].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[4].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Biosimilar Drug Segments We Serve */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{segmentsHeading}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">{segmentsDescription}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((seg, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {seg.iconSrc ? <div className="relative w-10 h-10 mb-3"><Image src={seg.iconSrc} alt="" fill className="object-contain" sizes="40px" /></div> : null}
                <h3 className="font-bold text-lg text-[#0f2824] mb-3">{seg.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{seg.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Are Biosimilars Different From Generic Medicines? */}
        <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{differenceHeading}</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">{differenceText1}</p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{differenceText2}</p>
          </div>
        </section>
      </main>
    </>
  );
}