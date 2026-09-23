import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

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

const expertEditors: ExpertEditorItem[] = [
  {
    name: "Dr. Laurence",
    degree: "PHD - Generics",
    experience: "7 years of experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/generics/Dr.-Laurence.webp",
    flag: "/images/country/gb.png",
  },
  {
    name: "Dr. AJ",
    degree: "PHD - Generics",
    experience: "5 Years of Experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/generics/Dr.-AJ.webp",
    flag: "/images/country/us.png",
  },
  {
    name: "Dr. Jay",
    degree: "PHD, FIAMS, DMRD, DMRE, DNB - Medical",
    experience: "15 Years of Experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/nutraceutical-research/Dr.-Rohit-Kapoor.webp",
    flag: "/images/country/us.png",
  },
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
}: PharmaceuticalDiscoveryAndPublishingPageProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://pubrica.com/industries/generics/" />
      </Head>

      <main className="min-h-screen bg-white text-[#0f2824] space-y-3">

        {/* Are Generic Drugs As Good As Brand Names Section */}
        <section className="py-3 px-6 max-w-7xl mx-auto">
          <div className="text-start mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-1.5">
              Are Generic Drugs As Good As Brand Names?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Generic pharmaceutical manufacturers must prove to the FDA that their version of a drug:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
            <div className="bg-[#e8f4f8] border border-[#c5e1eb] p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left flex flex-col items-start gap-2.5">
              <div className="relative h-9 w-9 bg-white rounded-lg p-1.5 shadow-sm border border-[#c5e1eb] flex items-center justify-center">
                <Image src="/images/industries/generics/same-active-ingredient-.webp" alt="Icon representing same active ingredient in pharmaceutical product" fill className="object-contain p-1" sizes="36px" />
              </div>
              <p className="text-gray-800 font-semibold text-sm leading-snug">Contains the same active ingredient</p>
            </div>

            <div className="bg-[#e8f4f8] border border-[#c5e1eb] p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left flex flex-col items-start gap-2.5">
              <div className="relative h-9 w-9 bg-white rounded-lg p-1.5 shadow-sm border border-[#c5e1eb] flex items-center justify-center">
                <Image src="/images/industries/generics/identical-in-strength-dosage-form-.webp" alt="Icon representing identical strength dosage form and route of administration" fill className="object-contain p-1" sizes="36px" />
              </div>
              <p className="text-gray-800 font-semibold text-sm leading-snug">Is identical in strength, dosage form, and route of administration</p>
            </div>

            <div className="bg-[#e8f4f8] border border-[#c5e1eb] p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left flex flex-col items-start gap-2.5">
              <div className="relative h-9 w-9 bg-white rounded-lg p-1.5 shadow-sm border border-[#c5e1eb] flex items-center justify-center">
                <Image src="/images/industries/generics/indication-dosing-and-lablelling.webp" alt="Icon representing same indications dosing and labeling in pharmaceutical product" fill className="object-contain p-1" sizes="36px" />
              </div>
              <p className="text-gray-800 font-semibold text-sm leading-snug">Has the same indications, dosing, and labelling</p>
            </div>

            <div className="bg-[#e8f4f8] border border-[#c5e1eb] p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left flex flex-col items-start gap-2.5">
              <div className="relative h-9 w-9 bg-white rounded-lg p-1.5 shadow-sm border border-[#c5e1eb] flex items-center justify-center">
                <Image src="/images/industries/generics/efficacy-and-safety-bioequivalent-.webp" alt="Icon representing bioequivalence with same efficacy and safety profile" fill className="object-contain p-1" sizes="36px" />
              </div>
              <p className="text-gray-800 font-semibold text-sm leading-snug">Provides the same efficacy and safety profile to patients (&quot;bioequivalent&quot;)</p>
            </div>
          </div>

          {/* Why the Generics Sector Matters - Clean non-card section */}
          <div className="bg-white border-y border-[#c5e1eb] py-4 px-5 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-[#1b3b32] mb-3">Why the Generics Sector Matters</h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#1b3b32] font-bold mt-0.5">•</span>
                <span>Generic medicines play a critical role in global healthcare by making essential therapies more affordable while maintaining safety, efficacy, and quality.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1b3b32] font-bold mt-0.5">•</span>
                <span>With patent expirations creating opportunities, competition from generics helps reduce overall healthcare costs and expand access.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#1b3b32] font-bold mt-0.5">•</span>
                <span>However, the generics landscape is complex manufacturers face regulatory, scientific, and market challenges in bringing generics to market and sustaining competitiveness.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Generic Drugs Must Meet the Same High Standards Section */}
        <section className="py-3 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="relative w-full h-[280px] md:h-[340px] flex justify-center items-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Generic Drugs Must Meet the Same High Standards as Brand-Name Drugs to Receive FDA Approval
            </h2>
            <p className="text-gray-700 mb-2.5 text-sm md:text-base leading-relaxed">
              The FDA requires drug companies to demonstrate that the generic medicine can be effectively substituted and provide the same clinical benefit as the brand-name medicine. Generic drug applicants must show that the generic medicine is the same as the brand-name in the following ways:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
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
                <span>The generic medicine is manufactured under the same strict standards as the brand-name medicine.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f2824] font-bold">•</span>
                <span>The label is the same as the brand-name medicine&apos;s label (with certain exceptions).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f2824] font-bold">•</span>
                <span>The generic medicine is bioequivalent to the brand-name medicine.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Where Our Authors Publish Section */}
        <section className="py-2 max-w-5xl mx-auto px-4">
          <div className="space-y-2">
            <WhereAuthorsPublish
              title="Where Our Authors Publish"
              description="Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
              publication={{
                imageSrc:
                  "/images/industries/generics/sample-works-2.webp",
                imageAlt: "Clinical Therapeutics Journal Cover",
                paperTitle:
                  "The bioequivalence and therapeutic efficacy of generic versus brand-name psychoactive drugs",
                author: "Borgheini G",
                journalName: "Clinical Therapeutics",
                publisher: "Elsevier",
                impactFactor: "3.6",
              }}
            />
          </div>
        </section>

        {/* Our Expert Medical Editors Section */}
        <section className="py-2 max-w-6xl mx-auto px-4">
          <ExpertEditorsSection
            title="Our Expert Medical Editors"
            description="Pubrica's team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do."
            editors={expertEditors}
          />
        </section>

      </main>
    </>
  );
}