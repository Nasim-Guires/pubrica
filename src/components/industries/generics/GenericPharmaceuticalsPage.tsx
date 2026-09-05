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

interface PharmaceuticalDiscoveryAndPublishingPageProps {
  pageTitle?: string;
  metaDescription?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  mainHeading?: string;
  mainDescription?: string;
  expertiseHeading?: string;
  expertiseDescription?: string;
  services?: ServiceItem[];
  additionalServices?: ServiceItem[];
  segments?: SegmentItem[];
}

const defaultServices: ServiceItem[] = [
  {
    title: 'Regulatory Dossier Preparation',
    description: 'We prepare comprehensive generics regulatory submissions, including ANDAs (Abbreviated New Drug Applications) and DMFs (Drug Master Files), ensuring full compliance with global regulatory standards. Our team meticulously compiles clinical, preclinical, and manufacturing data to accelerate approvals and minimize delays.'
  },
  {
    title: 'Bioequivalence and Clinical Study Support',
    description: 'We provide end-to-end support for bioequivalence studies, including protocol development, study monitoring, data analysis, and report writing. Our experts ensure that your generic products demonstrate therapeutic equivalence to reference drugs efficiently and accurately.'
  },
  {
    title: 'Quality and Manufacturing Compliance',
    description: 'Our specialists assist with GMP (Good Manufacturing Practice) compliance, process validation, stability studies, and quality documentation, helping you maintain product integrity and meet regulatory expectations across global markets.'
  },
  {
    title: 'Pharmacovigilance & Safety Monitoring',
    description: 'We offer comprehensive post-marketing surveillance and pharmacovigilance services, including adverse event reporting, signal detection, and risk management, ensuring ongoing safety and regulatory compliance of your generics.'
  },
  {
    title: 'Scientific & Medical Writing',
    description: 'Our experienced medical writers create precise, high-quality documents, including clinical study reports, regulatory submissions, and scientific publications, making sure your data communicates the required information clearly and effectively.'
  },
  {
    title: 'Market Access & Strategy Support',
    description: 'We assist with market intelligence, competitive analysis, and pricing strategies to help your generic products gain faster market acceptance and maximize commercial success. Our comprehensive approach includes identifying key market trends, analyzing competitor landscapes.'
  }
];

const defaultAdditionalServices: ServiceItem[] = [
  {
    title: 'Pharmacovigilance & Safety Monitoring',
    description: 'We offer comprehensive post-marketing surveillance and pharmacovigilance services, including adverse event reporting, signal detection, and risk management, ensuring ongoing safety and regulatory compliance of your generics.'
  },
  {
    title: 'Scientific & Medical Writing',
    description: 'Our experienced medical writers create precise, high-quality documents, including clinical study reports, regulatory submissions, and scientific publications, making sure your data communicates the required information clearly and effectively.'
  },
  {
    title: 'Market Access & Strategy Support',
    description: 'We assist with market intelligence, competitive analysis, and pricing strategies to help your generic products gain faster market acceptance and maximize commercial success. Our comprehensive approach includes identifying key market trends, analyzing competitor landscapes.'
  }
];

const defaultSegments: SegmentItem[] = [
  {
    title: 'Oral Solid Dosage Forms (OSD)',
    iconSrc: '/images/industries/generics/Oral-Solid-Dosage-Forms-OSD.webp', description: 'Tablets, capsules, and powders, supporting formulation, regulatory submissions, and bioequivalence documentation.'
  },
  {
    title: 'Injectables & Parenterals',
    iconSrc: '/images/industries/generics/Injectables-Parenter-als.webp', description: 'Sterile products, including vials, ampoules, and pre-filled syringes, with guidance on stability, sterility assurance, and regulatory dossiers.'
  },
  {
    title: 'Topical & Transdermal Formulations',
    iconSrc: '/images/industries/generics/Topical-Transdermal-Formulations.webp', description: 'Creams, gels, ointments, patches, covering quality control, clinical evaluation, and regulatory compliance.'
  },
  {
    title: 'Respiratory & Inhalation Products',
    iconSrc: '/images/industries/generics/Respiratory-Inhalation-Products.webp', description: 'Metered-dose inhalers, nebulizers, and dry powder inhalers with regulatory strategy and bioequivalence support.'
  },
  {
    title: 'Orphan & Niche Generics',
    iconSrc: '/images/industries/generics/Orphan-Niche-Generics.webp', description: 'Rare disease therapies or hard-to-manufacture generics, supported with tailored regulatory and clinical guidance.'
  },
  {
    title: 'Biologics & Biosimilars',
    iconSrc: '/images/industries/generics/Biologics-Biosi-milars.webp', description: 'Complex protein-based generics, with support for analytical characterization, comparability studies, and regulatory submissions.'
  },
  {
    title: 'Over-the-Counter (OTC) Generics',
    iconSrc: '/images/industries/generics/Over-the-Counter-OTC-Generics.webp', description: 'Non-prescription drugs with assistance in labelling, safety data, and regulatory compliance for global markets.'
  }
];

export default function PharmaceuticalDiscoveryAndPublishingPage({
  pageTitle = 'Generic Drugs & Pharmaceutical Industry Support Services | Pubrica',
  metaDescription = 'Achieve seamless regulatory compliance for your generic products with our end-to-end support including bioequivalence studies, documentation, and submissions.',
  heroTitle = 'Generic Drugs',
  heroSubtitle = 'Achieve seamless regulatory compliance for your generic products with our end to end support. We handle bioequivalence studies, documentation, and submissions, enabling you to bring high-quality generics to market efficiently.',
  mainHeading = 'Generic drugs are just as safe and just as effective as their brand-name counterparts, and they are a cost-effective way of achieving substantial savings',
  mainDescription = 'In today’s pharmaceutical landscape, generics industry services are critical to providing affordable access to medicines worldwide. However, delivering high quality generics requires rigorous scientific, regulatory, and operational support, not just cost efficiency. That’s where Pubrica steps in. We offer end-to-end capabilities tailored for generics manufacturers, helping you navigate regulatory complexity, ensure quality and compliance, and streamline market entry.',
  expertiseHeading = 'Our Expertise for the Generics Industry Includes',
  expertiseDescription = 'At Pubrica, we specialize in supporting generic pharmaceutical companies across every stage of the product lifecycle. Our deep understanding of regulatory requirements, scientific rigor, and market dynamics enables us to help you bring safe, effective, and compliant generic drugs to patients worldwide. Our expertise spans the following areas:',
  services = defaultServices,
  additionalServices = defaultAdditionalServices,
  segments = defaultSegments
}: PharmaceuticalDiscoveryAndPublishingPageProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pubrica.com/industries/generics/" />
      </Head>

      <main className="min-h-screen bg-white text-[#0f2824]">
        {/* Hero Banner Section */}
        <HeroBanner
          title={heroTitle}
          description={heroSubtitle}
          headingAs="h1"
        />

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-7 px-6">
          <div className="space-y-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] tracking-tight leading-snug">
              {mainHeading}
            </h2>
          </div>

          <div className="clearfix">
            {/* CIRCULAR FLOATING IMAGE CONTAINER */}
            <div className="flex justify-center md:block md:float-right md:ml-8 mb-6">
              <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-md bg-[#eaf4ef] p-3 flex items-center justify-center relative">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/industries/generics/Generic-drugs-are-just-as-safe-and-just-as-effective.webp"
                    alt="Medical professionals discussing generic drug regulatory compliance and market strategies"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
              {mainDescription}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              At Pubrica, we specialize in providing comprehensive support for generics pharmaceuticals, encompassing regulatory affairs, market access strategies, and <a href="/services/scientific-communication/" className="text-blue-600">scientific communication</a>. Our team of experts collaborates closely with clients to navigate the complexities of the generics sector, ensuring compliance and facilitating market entry.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              Generics account for 90 percent of prescriptions dispensed in the U.S., but only 13.1 percent of the total drug costs. The thousands of generics available today are rigorously tested by the FDA and must demonstrate that they are the same medicine with the same active ingredients, strength, and dosage as their brand-name counterparts.
            </p>
          </div>

          <div className="flex justify-center">
            <GetFreeQuoteButton />
          </div>
        </section>
        {/* Expertise Section with 3 Cards on Left & 3 Cards on Right around Central Image */}
        <section className="py-4 px-4 bg-white text-[#0f2824] overflow-hidden">
          <div className="max-w-7xl mx-auto text-start mb-1 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {expertiseHeading}
            </h2>
            <p className="text-gray-600 max-w-4xl text-start leading-relaxed text-sm md:text-base">
              {expertiseDescription}
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[850px] gap-8 lg:gap-0">

            {/* Left Column Cards (3 items) */}
            <div className="flex flex-col gap-8 w-full lg:w-[380px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[1].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[1].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[3].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[3].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[5].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[5].description}</p>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:mx-[-40px] z-0 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/industries/generics/Our-Expertise-for-the-Generics-Industry-Includes.webp"
                  alt="Medical professional reviewing data for generic pharmaceuticals"
                  fill
                  sizes="(max-width: 768px) 320px, 420px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
              </div>
            </div>

            {/* Right Column Cards (3 items) */}
            <div className="flex flex-col gap-8 w-full lg:w-[380px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[0].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[0].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[2].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[2].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[4].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[4].description}</p>
              </div>
            </div>

          </div>
        </section>

        {/* Generic Drug Segments We Serve Section */}
        <section className="py-6 px-6 max-w-7xl mx-auto -mt-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
              Generic Drug Segments We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              At Pubrica, we provide specialized support across a broad spectrum of generic drug segments, helping manufacturers ensure regulatory compliance, market readiness, and product success. Our expertise spans the following categories:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-[#fafcfa] border border-gray-100 p-5 rounded-xl shadow-sm hover:border-gray-200 hover:shadow-md transition-all flex flex-col items-start"
              >
                {segment.iconSrc && (
                  <div className="relative w-9 h-9 mb-3 bg-white rounded-lg p-1.5 shadow-sm border border-gray-100 flex items-center justify-center">
                    <Image src={segment.iconSrc} alt="" fill className="object-contain p-1" sizes="36px" />
                  </div>
                )}
                <h4 className="font-bold text-base text-[#1b3b32] mb-2">{segment.title}</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}