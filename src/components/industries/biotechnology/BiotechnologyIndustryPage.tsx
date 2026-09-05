import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';

interface ServiceItem {
  title: React.ReactNode;
  description: React.ReactNode;
}

interface BiotechSegment {
  title: string;
  description: string;
  iconSrc?: string;
}

interface BiotechTypeItem {
  color: string;
  label: string;
  sublabel?: string;
}

interface BiotechnologyPageProps {
  pageTitle?: string;
  metaDescription?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  mainHeading?: string;
  mainDescription?: string;
  subDescription?: string;
  statsText?: string;
  expertiseHeading?: string;
  expertiseDescription?: string;
  services?: ServiceItem[];
  typesHeading?: string;
  typesDescription?: string;
  biotechTypes?: BiotechTypeItem[];
  segmentsHeading?: string;
  segmentsDescription?: string;
  segments?: BiotechSegment[];
}

const defaultServices: ServiceItem[] = [
  {
    title: 'Biopharmaceutical Development',
    description: 'Guidance and support in biologics, biosimilars, vaccines, and therapeutic proteins, ensuring compliance with global regulatory standards.'
  },
  {
    title: 'Regulatory Affairs & Compliance',
    description: 'Comprehensive regulatory strategy, submissions, and documentation for biotechnology products across multiple markets.'
  },
  {
    title: 'Molecular and Cellular Research',
    description: 'Assistance with genetic engineering, cell therapy, gene editing, and molecular diagnostics, from preclinical studies to clinical translation.'
  },
  {
    title: (
      <>
        Scientific Communication & Publication Support
      </>
    ),
    description: (
      <>
        High-quality{' '}
        <Link href="/services/research-services/scientific-writing/" className="text-blue-600">
          scientific writing
        </Link>
        , manuscript development, and regulatory communication tailored to complex biotech innovations.
      </>
    )
  },
  {
    title: 'Clinical Research & Trials',
    description: 'End-to-end clinical trial design, protocol development, and study management tailored to biotech therapeutics.'
  },
  {
    title: 'Market Access & Commercialization Support',
    description: 'Strategic guidance for market entry, health economics, and reimbursement planning for biotech products.'
  }
];

const defaultSegments: BiotechSegment[] = [
  {
    title: 'Medical Biotechnology',
    iconSrc: '/images/industries/biotechnology/Medical-Biotechnology.webp',
    description: 'We support companies involved in the development of novel therapeutics, vaccines, and diagnostic tools. Our services encompass clinical trial support, regulatory documentation, and scientific communication to ensure innovative medical solutions reach the market efficiently.'
  },
  {
    title: 'Agricultural Biotechnology',
    iconSrc: '/images/industries/biotechnology/Agricultural-Biotechnology.webp',
    description: 'Our expertise extends to plant genetics, crop improvement, and sustainable farming technologies. We assist Agri-biotech firms in research documentation, regulatory compliance, and product development strategies.'
  },
  {
    title: 'Industrial Biotechnology',
    iconSrc: '/images/industries/biotechnology/Industrial-Biotechnology.webp',
    description: 'We work with organizations leveraging microorganisms, enzymes, and bio-based processes for industrial applications. From biofuels to biodegradable materials, we provide guidance on process optimization, quality standards, and regulatory requirements.'
  },
  {
    title: 'Environmental Biotechnology',
    iconSrc: '/images/industries/biotechnology/Environmental-Biotechnology.webp',
    description: 'Our team aids companies focused on waste management, bioremediation, and environmental sustainability. We deliver research support, impact assessments, and regulatory documentation to advance eco-friendly biotech solutions.'
  },
  {
    title: 'Pharmaceutical Biotechnology',
    iconSrc: '/images/industries/biotechnology/Pharmaceutical-Biotechnology.webp',
    description: 'We cater to biotech firms developing biologics, biosimilars, and advanced therapeutics. Services include scientific writing, regulatory submissions, clinical data analysis, and publication support to accelerate market entry.'
  },
  {
    title: 'Nutraceuticals & Functional Foods',
    iconSrc: '/images/industries/biotechnology/Nutraceuticals-Functional-Foods.webp',
    description: 'We assist companies in developing health-promoting products derived from biological sources. Our services cover research validation, regulatory compliance, and market-ready product documentation.'
  }
];

export default function BiotechnologyIndustryPage({
  pageTitle = 'Biotechnology Industry Support Services | Pubrica',
  metaDescription = 'Explore end-to-end solutions for biotechnology research, development, and commercialization with Pubrica expert teams.',
  heroTitle = 'Biotechnology',
  heroSubtitle = 'At Pubrica, we provide end-to-end solutions for biotechnology research, development, and commercialization. Our expert teams help biotech companies navigate regulatory landscapes, optimize clinical strategies, and accelerate innovation with precision and compliance.',
  mainHeading = 'Empowering Biotechnology Innovation Through Expert Scientific and Regulatory Support',
  mainDescription = 'The biotechnology industry is at the forefront of scientific innovation, combining biology, technology, and data science to develop groundbreaking solutions for healthcare, agriculture, industrial processes, and environmental sustainability. From genomics and molecular diagnostics to regenerative medicine and biopharmaceuticals, biotechnology drives the development of therapies, vaccines, and technologies that improve lives globally.',
  subDescription = 'With rapid scientific advancements, stringent regulatory requirements, and complex clinical pipelines, biotechnology organizations require expert guidance to navigate research, regulatory compliance, and commercialization. Pubrica specializes in supporting biotechnology companies across all stages of development, ensuring scientific integrity, regulatory compliance, and operational excellence.',
  statsText = "Currently, there are more than 250 biotechnology healthcare products and vaccines available to patients, many of which treat previously untreatable diseases. More than 13.3 million farmers around the world use agricultural biotechnology to increase yields, prevent damage from insects and pests, and reduce farming's impact on the environment.",
  expertiseHeading = 'Our Expertise in Biotechnology Includes',
  expertiseDescription = 'We provide end-to-end support for biotechnology companies, helping them accelerate research, ensure regulatory compliance, and bring breakthrough products to market efficiently. Our expertise spans multiple domains:',
  services = defaultServices,
  typesHeading = 'Types Of Biotechnology We Offer',
  typesDescription = "Biotechnology is a broad field that applies biological systems, organisms, or derivatives to develop products and technologies for various industries. It can be classified into several types based on applications, techniques, and the focus area. Here's a clear breakdown:",
  segmentsHeading = 'Biotechnology Segments We Serve',
  segmentsDescription = 'At Pubrica, we provide specialized scientific, regulatory, and publishing support across diverse segments of the biotechnology industry. Our services are tailored to meet the unique needs of each segment, enabling innovation, compliance, and high-quality dissemination of research. Key segments we serve include:',
  segments = defaultSegments
}: BiotechnologyPageProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pubrica.com/industries/biotechnology/" />
      </Head>

      <main className="min-h-screen bg-white text-[#0f2824]">
        {/* Hero Banner Section */}
        <HeroBanner
          title={heroTitle}
          description={heroSubtitle}
          headingAs="h1"
        />

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-8 px-6 bg-gray-50/50">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug text-[#0f2824]">{mainHeading}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-3 leading-relaxed text-sm md:text-base">
                The biotechnology industry is at the forefront of scientific innovation, combining biology, technology, and data science to develop groundbreaking solutions for healthcare,{' '}
                <Link href="/subject-matter-experts/agriculture/" className="text-blue-600">
                  agriculture
                </Link>
                , industrial processes, and environmental sustainability. From genomics and molecular diagnostics to regenerative medicine and biopharmaceuticals,{' '}
                <Link href="/subject-matter-experts/biotechnology/" className="text-blue-600">
                  biopharmaceuticals
                </Link>
                {' '}drives the development of therapies, vaccines, and technologies that improve lives globally.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed text-sm md:text-base">{subDescription}</p>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{statsText}</p>

              <GetFreeQuoteButton />
            </div>

            <div className="relative w-full h-[450px] flex justify-center items-center">
              <div className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden shadow-xl bg-gray-100 border-[10px] border-white">
                <Image
                  src="/images/industries/biotechnology/Empowering-Biotechnology-Innovation.webp"
                  alt="Scientist looking through microscope in a biotechnology laboratory"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise in Biotechnology Includes (Surrounding Circular Layout) */}
        <section className="py-6 px-4 bg-gray-50 text-[#0f2824] overflow-hidden">
          <div className="max-w-7xl mx-auto text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{expertiseHeading}</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed text-sm md:text-base">{expertiseDescription}</p>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[620px] gap-6 lg:gap-0">
            {/* Left Column Cards */}
            <div className="flex flex-col gap-4 w-full lg:w-[350px] z-10">
              <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-1.5">{services[2].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[2].description}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-1.5">{services[4].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[4].description}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-1.5">{services[5].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[5].description}</p>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:mx-[-20px] z-0 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/industries/biotechnology/Our-Expertise-in-Biotechnology-Includes.webp"
                  alt="Biotechnology research laboratory setup with scientific equipment"
                  fill
                  sizes="(max-width: 768px) 280px, 360px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column Cards */}
            <div className="flex flex-col gap-4 w-full lg:w-[350px] z-10">
              <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-1.5">{services[0].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[0].description}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-1.5">{services[1].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[1].description}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-1.5">{services[3].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[3].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types Of Biotechnology We Offer */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">{typesHeading}</h2>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">{typesDescription}</p>
          </div>

          <div className="relative w-full max-w-4xl aspect-[765/246]">
            <Image
              src="/images/industries/biotechnology/dafregdvg.webp"
              alt="Types of Biotechnology We Offer"
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 100vw, 765px"
            />
          </div>
        </section>

        {/* Biotechnology Segments We Serve */}
        <section className="py-5 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold mb-3">{segmentsHeading}</h2>
              <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">{segmentsDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {segments.map((seg, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  {seg.iconSrc ? <div className="relative w-10 h-10 mb-3"><Image src={seg.iconSrc} alt="" fill className="object-contain" sizes="40px" /></div> : null}
                  <h3 className="font-bold text-lg text-[#0f2824] mb-3">{seg.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{seg.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}