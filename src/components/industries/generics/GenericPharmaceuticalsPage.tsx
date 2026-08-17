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
  { title: 'Oral Solid Dosage Forms (OSD)',
    iconSrc: '/images/industries/generics/Oral-Solid-Dosage-Forms-OSD.webp', description: 'Tablets, capsules, and powders, supporting formulation, regulatory submissions, and...' },
  { title: 'Injectables & Parenterals',
    iconSrc: '/images/industries/generics/Injectables-Parenter-als.webp', description: 'Sterile products, including vials, ampoules, and pre-filled syringes, with guidance on...' },
  { title: 'Topical & Transdermal Formulations',
    iconSrc: '/images/industries/generics/Topical-Transdermal-Formulations.webp', description: 'Creams, gels, ointments, patches, covering quality control, clinical evaluation, and...' },
  { title: 'Respiratory & Inhalation Products',
    iconSrc: '/images/industries/generics/Respiratory-Inhalation-Products.webp', description: 'Metered-dose inhalers, nebulizers, and dry powder inhalers with regulatory strategy and...' },
  { title: 'Orphan & Niche Generics',
    iconSrc: '/images/industries/generics/Orphan-Niche-Generics.webp', description: 'Rare disease therapies or hard-to-manufacture generics, supported with tailored regulatory and...' },
  { title: 'Biologics & Biosimilars',
    iconSrc: '/images/industries/generics/Biologics-Biosi-milars.webp', description: 'Complex protein-based generics, with support for analytical characterization.' },
  { title: 'Over-the-Counter (OTC) Generics',
    iconSrc: '/images/industries/generics/Over-the-Counter-OTC-Generics.webp', description: 'Non-prescription drugs with assistance in labeling, safety data, and regulatory...' }
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
        <section className="bg-[#0f2824] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto border border-white/20 p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
            <p className="text-lg text-gray-200 leading-relaxed">{heroSubtitle}</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">{mainHeading}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{mainDescription}</p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              At Pubrica, we specialize in providing comprehensive support for generics pharmaceuticals, encompassing regulatory affairs, market access strategies, and scientific communication. Our team of experts collaborates closely with clients to navigate the complexities of the generics sector, ensuring compliance and facilitating market entry.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              Generics account for 90 percent of prescriptions dispensed in the U.S., but only 13.1 percent of the total drug costs. The thousands of generics available today are rigorously tested by the FDA and must demonstrate that they are the same medicine with the same active ingredients, strength, and dosage as their brand-name counterparts.
            </p>
           <GetFreeQuoteButton/>
          </div>
          <div className="relative w-full h-[350px] flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-xl">
              <Image 
                src="/images/industries/generics/Generic-drugs-are-just-as-safe-and-just-as-effective.webp" 
                alt="Medical professionals discussing generic drug regulatory compliance and market strategies"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* First Expertise Layout: Floating Cards & Central Doctor Image */}
        <section className="py-20 px-4 bg-white text-[#0f2824] overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {expertiseHeading}
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">
              {expertiseDescription}
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[750px] gap-8 lg:gap-0">
            
            {/* Left Column Cards */}
            <div className="flex flex-col gap-8 w-full lg:w-[380px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[1].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[1].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[3].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[3].description}</p>
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

            {/* Right Column Cards */}
            <div className="flex flex-col gap-8 w-full lg:w-[380px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[0].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[0].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[2].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[2].description}</p>
              </div>
            </div>
          </div>

          {/* Bottom Centered Card for 5th Service Item */}
          <div className="max-w-[450px] mx-auto mt-8 z-10 relative">
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 text-center">
              <h3 className="font-bold text-[#b91c1c] text-lg mb-2">{services[4].title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{services[4].description}</p>
            </div>
          </div>
        </section>

        {/* Generic Drug Segments We Serve Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto my-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Generic Drug Segments We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              At Pubrica, we provide specialized support across a broad spectrum of generic drug segments, helping manufacturers ensure regulatory compliance, market readiness, and product success. Our expertise spans the following categories:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {segment.iconSrc ? <div className="relative w-10 h-10 mb-3"><Image src={segment.iconSrc} alt="" fill className="object-contain" sizes="40px" /></div> : null}
                <h4 className="font-bold text-base text-[#0f2824] mb-2">{segment.title}</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}