import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

interface ServiceItem {
  title: string;
  description: string;
}

interface BiotechSegment {
  title: string;
  description: string;
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
    title: 'Scientific Communication & Publication Support',
    description: 'High-quality scientific writing, manuscript development, and regulatory communication tailored to complex biotech innovations.'
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

const defaultBiotechTypes: BiotechTypeItem[] = [
  { color: 'Red', label: 'Medical and Pharmaceutical' },
  { color: 'Yellow', label: 'Food biotechnology' },
  { color: 'Blue', label: 'Aquaculture marine biotech' },
  { color: 'Green', label: 'Agriculture (biofuel, biofertilizers)' },
  { color: 'Brown', label: 'Arid zone and desert biotechnology' },
  { color: 'Black', label: 'Bioterrorism, Biowarfare' },
  { color: 'Purple', label: 'Patents, Publications, Inventions' },
  { color: 'White', label: 'Gene-bases bioindustries' },
  { color: 'Gold', label: 'Bioinformatics nanobiotechnology' },
  { color: 'Grey', label: 'Fermentation and bioprocess technology' },
  { color: 'Orange', label: 'Attract future scientists' }
];

const defaultSegments: BiotechSegment[] = [
  {
    title: 'Medical Biotechnology',
    description: 'We support companies involved in the development of novel therapeutics, vaccines, and diagnostics.'
  },
  {
    title: 'Agricultural Biotechnology',
    description: 'Our expertise extends to plant genetics, crop improvement, and sustainable farming.'
  },
  {
    title: 'Industrial Biotechnology',
    description: 'We work with organizations leveraging microorganisms, enzymes, and bio-based processes for industrial.'
  },
  {
    title: 'Environmental Biotechnology',
    description: 'Our team aids companies focused on waste management, bioremediation, and.'
  },
  {
    title: 'Pharmaceutical Biotechnology',
    description: 'We cater to biotech firms developing biologics, biosimilars, and advanced therapeutics. Services.'
  },
  {
    title: 'Nutraceuticals & Functional Foods',
    description: 'We assist companies in developing health-promoting products derived from biological sources. Our.'
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
  statsText = 'Currently, there are more than 250 biotechnology healthcare products and vaccines available to patients, many of which treat previously untreatable diseases. More than 13.3 million farmers around the world use agricultural biotechnology to increase yields, prevent damage from insects and pests, and reduce farming\'s impact on the environment.',
  expertiseHeading = 'Our Expertise in Biotechnology Includes',
  expertiseDescription = 'We provide end-to-end support for biotechnology companies, helping them accelerate research, ensure regulatory compliance, and bring breakthrough products to market efficiently. Our expertise spans multiple domains:',
  services = defaultServices,
  typesHeading = 'Types Of Biotechnology We Offer',
  typesDescription = 'Biotechnology is a broad field that applies biological systems, organisms, or derivatives to develop products and technologies for various industries. It can be classified into several types based on applications, techniques, and the focus area. Here\'s a clear breakdown:',
  biotechTypes = defaultBiotechTypes,
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
        <section className="bg-[#0f2824] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto border border-white/25 p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
            <p className="text-lg text-gray-200 leading-relaxed">{heroSubtitle}</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">{mainHeading}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{mainDescription}</p>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{subDescription}</p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">{statsText}</p>

           <GetFreeQuoteButton/>
          </div>

          <div className="relative w-full h-[450px] flex justify-center items-center">
            <div className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden shadow-xl bg-gray-100 border-[10px] border-white">
              <Image 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" 
                alt="Scientist looking through microscope in a biotechnology laboratory"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Our Expertise in Biotechnology Includes (Surrounding Circular Layout) */}
        <section className="py-20 px-4 bg-gray-50 text-[#0f2824] overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{expertiseHeading}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">{expertiseDescription}</p>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[750px] gap-8 lg:gap-0">
            {/* Left Column Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-[350px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[2].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[2].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[4].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[4].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[5].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[5].description}</p>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:mx-[-20px] z-0 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" 
                  alt="Biotechnology research laboratory setup with scientific equipment"
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-[350px] z-10">
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[0].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[0].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[1].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[1].description}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <h3 className="font-bold text-[#b91c1c] text-base mb-2">{services[3].title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{services[3].description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types Of Biotechnology We Offer */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{typesHeading}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">{typesDescription}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {biotechTypes.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white mb-3 shadow-sm text-xs uppercase"
                     style={{
                       backgroundColor: 
                         item.color === 'Red' ? '#ef4444' :
                         item.color === 'Yellow' ? '#eab308' :
                         item.color === 'Blue' ? '#3b82f6' :
                         item.color === 'Green' ? '#22c55e' :
                         item.color === 'Brown' ? '#a0522d' :
                         item.color === 'Black' ? '#1f2937' :
                         item.color === 'Purple' ? '#8b5cf6' :
                         item.color === 'White' ? '#6b7280' :
                         item.color === 'Gold' ? '#d97706' :
                         item.color === 'Grey' ? '#4b5563' : '#f97316'
                     }}>
                  {item.color}
                </div>
                <h3 className="font-bold text-sm text-[#0f2824]">{item.label}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Biotechnology Segments We Serve */}
        <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{segmentsHeading}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">{segmentsDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {segments.map((seg, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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