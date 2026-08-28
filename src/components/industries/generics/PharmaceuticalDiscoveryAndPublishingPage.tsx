import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface ServiceItem {
  title: string;
  description: string;
}

interface SegmentItem {
  title: string;
  description: string;
}

interface AuthorPublication {
  paperTitle: string;
  author: string;
  journalName: string;
  publisher: string;
  impactFactor: string;
}

interface EditorProfile {
  name: string;
  credential: string;
  experience: string;
  manuscripts: string;
  image: string;
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
  publication?: AuthorPublication;
  editors?: EditorProfile[];
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
  { title: 'Oral Solid Dosage Forms (OSD)', description: 'Tablets, capsules, and powders, supporting formulation, regulatory submissions, and...' },
  { title: 'Injectables & Parenterals', description: 'Sterile products, including vials, ampoules, and pre-filled syringes, with guidance on...' },
  { title: 'Topical & Transdermal Formulations', description: 'Creams, gels, ointments, patches, covering quality control, clinical evaluation, and...' },
  { title: 'Respiratory & Inhalation Products', description: 'Metered-dose inhalers, nebulizers, and dry powder inhalers with regulatory strategy and...' },
  { title: 'Orphan & Niche Generics', description: 'Rare disease therapies or hard-to-manufacture generics, supported with tailored regulatory and...' },
  { title: 'Biologics & Biosimilars', description: 'Complex protein-based generics, with support for analytical characterization.' },
  { title: 'Over-the-Counter (OTC) Generics', description: 'Non-prescription drugs with assistance in labeling, safety data, and regulatory...' }
];

const defaultPublication: AuthorPublication = {
  paperTitle: 'The bioequivalence and therapeutic efficacy of generic versus brand-name psychoactive drugs',
  author: 'Borgheini G',
  journalName: 'Clinical Therapeutics',
  publisher: 'Elsevier',
  impactFactor: '3.6'
};

const defaultEditors: EditorProfile[] = [
  {
    name: 'Dr. Laurence',
    credential: 'PHD - Generics',
    experience: '7 years of experience',
    manuscripts: '100+ manuscripts edited',
    image: '/images/industries/generics/Dr.-Laurence.webp'
  },
  {
    name: 'Dr. AJ',
    credential: 'PHD - Generics',
    experience: '5 Years of Experience',
    manuscripts: '100+ manuscripts edited',
    image: '/images/industries/generics/Dr.-AJ.webp'
  },
  {
    name: 'Dr. Jay',
    credential: 'PHD, FIAMS, DMRD, DMRE, DNB - Medical',
    experience: '15 Years of Experience',
    manuscripts: '100+ manuscripts edited',
    image: '/images/industries/nutraceutical-research/Dr.-Rohit-Kapoor.webp'
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
  segments = defaultSegments,
  publication = defaultPublication,
  editors = defaultEditors
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

        {/* Are Generic Drugs As Good As Brand Names Section */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Are Generic Drugs As Good As Brand Names?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Generic pharmaceutical manufacturers must prove to the FDA that their version of a drug:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center flex flex-col items-center gap-3">
              <div className="relative h-12 w-12">
                <Image src="/images/industries/generics/same-active-ingredient-.webp" alt="Icon representing same active ingredient in pharmaceutical product" fill className="object-contain" sizes="48px" />
              </div>
              <p className="text-gray-800 font-medium text-sm">Contains the same active ingredient</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center flex flex-col items-center gap-3">
              <div className="relative h-12 w-12">
                <Image src="/images/industries/generics/identical-in-strength-dosage-form-.webp" alt="Icon representing identical strength dosage form and route of administration" fill className="object-contain" sizes="48px" />
              </div>
              <p className="text-gray-800 font-medium text-sm">Is identical in strength, dosage form, and route of administration</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center flex flex-col items-center gap-3">
              <div className="relative h-12 w-12">
                <Image src="/images/industries/generics/indication-dosing-and-lablelling.webp" alt="Icon representing same indications dosing and labeling in pharmaceutical product" fill className="object-contain" sizes="48px" />
              </div>
              <p className="text-gray-800 font-medium text-sm">Has the same indications, dosing, and labelling</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center flex flex-col items-center gap-3">
              <div className="relative h-12 w-12">
                <Image src="/images/industries/generics/efficacy-and-safety-bioequivalent-.webp" alt="Icon representing bioequivalence with same efficacy and safety profile" fill className="object-contain" sizes="48px" />
              </div>
              <p className="text-gray-800 font-medium text-sm">Provides the same efficacy and safety profile to patients (&quot;bioequivalent&quot;)</p>
            </div>
          </div>

          {/* Why the Generics Sector Matters */}
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Why the Generics Sector Matters</h3>
            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-[#b91c1c] font-bold">•</span>
                <span>Generic medicines play a critical role in global healthcare by making essential therapies more affordable while maintaining safety, efficacy, and quality.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b91c1c] font-bold">•</span>
                <span>With patent expirations creating opportunities, competition from generics helps reduce overall healthcare costs and expand access.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b91c1c] font-bold">•</span>
                <span>However, the generics landscape is complex; manufacturers face regulatory, scientific, and market challenges in bringing generics to market and sustaining competitiveness.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Generic Drugs Must Meet the Same High Standards Section */}
        <section className="py-7 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] flex justify-center items-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/industries/generics/Generic-Drugs-Must-Meet-the-Same-High-Standards.webp" 
                alt="Scientific visual representation of generic medicine standards and FDA approval"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
              Generic Drugs Must Meet the Same High Standards as Brand-Name Drugs to Receive FDA Approval
            </h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
              The FDA requires drug companies to demonstrate that the generic medicine can be effectively substituted and provide the same clinical benefit as the brand-name medicine. Generic drug applicants must show that the generic medicine is the same as the brand-name in the following ways:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#0f2824] font-bold">•</span>
                <span>The active ingredient in the generic medicine is the same as in the brand-name drug/innovator drug.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f2824] font-bold">•</span>
                <span>The generic medicine has the same strength, dosage form (such as a tablet or an injectable), and route of administration (such as oral or topical).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f2824] font-bold">•</span>
                <span>The generic medicine is manufactured under the same strict standards as the brand-name drug.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f2824] font-bold">•</span>
                <span>The label is the same as the brand-name medicine&apos;s label (with certain exceptions).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f2824] font-bold">•</span>
                <span>The generic medicine is bioequivalent to the brand-name drug.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Where Our Authors Publish Section */}
        <section className="py-7 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where Our Authors Publish</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
            <div className="relative w-full md:w-[220px] h-[280px] flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <Image 
                src="/images/industries/generics/sample-works-2.webp" 
                alt="Clinical Therapeutics Journal Cover"
                fill
                sizes="220px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="flex flex-col justify-center space-y-3 w-full">
              <h3 className="text-xl font-bold text-[#0f2824]">
                Paper Title: <span className="font-normal text-gray-700">{publication.paperTitle}</span>
              </h3>
              <p className="text-gray-700 text-sm"><strong>Author:</strong> {publication.author}</p>
              <p className="text-gray-700 text-sm"><strong>Journal Name:</strong> {publication.journalName}</p>
              <p className="text-gray-700 text-sm"><strong>Publisher:</strong> {publication.publisher}</p>
              <p className="text-gray-700 text-sm"><strong>Impact factor:</strong> {publication.impactFactor}</p>
            </div>
          </div>
        </section>

        {/* Our Expert Medical Editors Section */}
        <section className="py-7 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expert Medical Editors</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              Pubrica&apos;s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {editors.map((editor, index) => (
              <div key={index} className="bg-[#e6f0ed] p-6 rounded-2xl shadow-sm border border-[#d1e2dc] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                      <Image 
                        src={editor.image} 
                        alt={editor.name}
                        fill
                        sizes="56px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#0f2824]">{editor.name}</h4>
                      <p className="text-xs text-gray-600 font-medium">{editor.credential}</p>
                    </div>
                  </div>
                  <hr className="border-gray-300 mb-4" />
                </div>
                <div className="flex justify-between items-center text-xs text-gray-700 font-semibold pt-2">
                  <span>{editor.experience}</span>
                  <span>{editor.manuscripts}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}