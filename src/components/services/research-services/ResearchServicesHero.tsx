import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonUploadButton from '@/components/common/CommonUploadButton';
import HeroBanner from '@/components/common/HeroBanner';

interface FeatureItem {
  text: React.ReactNode;
  highlightWords?: string[]; // Optional words to color blue or bold
}

interface ResearchHeroProps {
  bannerTitle?: string;
  bannerSubtitle?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: React.ReactNode[];
  imageUrl?: string;
  features?: FeatureItem[];
  brochureUrl?: string;
}

export const ResearchServicesHero: React.FC<ResearchHeroProps> = ({
  bannerTitle = "Research Service",
  bannerSubtitle = "Pubrica offers a comprehensive range of research services, including manuscript writing, editing, and publication support, to ensure impactful research outcomes.",
  title = "Research Services: Integrating Scientific Rigor and Innovation with Precision and Insight",
  subtitle = "Delivering end-to-end scientific research support solutions that combine methodological excellence, domain expertise, and global compliance standards to drive impactful, high-quality outcomes.",
  paragraphs = [
    <>
      Selecting the proper <Link href="/academy/research-services/different-types-of-scientific-research-guide" className="text-blue-600 no-underline hover:no-underline">research</Link> partner establishes whether your work meets publication standards, regulatory compliance, and global credibility. At Pubrica, we combine scientific rigor, methodological integrity, and domain expertise to deliver outputs that are accurate, reproducible, and impactful.
    </>,
    <>
      Our team of PhD-qualified medical writers, biostatisticians, data scientists, and subject matter experts, every project will utilize either PRISMA, Cochrane, PROSPERO, JBI, or any other globally recognized framework. We have extensive experience from academic research, <Link href="/academy/research-services/pilot-study-guide" className="text-blue-600 no-underline hover:no-underline">clinical trials</Link>, bioinformatics, healthcare, pharma, and biotech, ensuring we can help you go from concept to published with confidence.
    </>
  ],
  imageUrl = "/images/research-services/Research-Services.webp",
  features = [
    { text: "15+ years of global experience in delivering high-quality academic, clinical, and healthcare research solutions." },
    {
      text: <>5,000+ completed projects including <Link href="/academy/research-services/gramms-guidelines-reporting-mixed-methods-research" className="text-blue-600 no-underline hover:no-underline">systematic reviews</Link>, meta-analyses, bioinformatics studies, and clinical trial analyses.</>
    },
    {
      text: <>Team of 30+ PhD-qualified experts in <Link href="/services/research-services/medical-writing/" className="text-blue-600 no-underline hover:no-underline">medical writing</Link>, <Link href="/academy/research-services/role-of-biostatistics-in-clinical-research-programs/" className="text-blue-600 no-underline hover:no-underline">biostatistics</Link>, AI & ML research, epidemiology, and clinical sciences.</>
    },
    { text: "Proven track record in working with top universities, global CROs, pharma, biotech, and medical device companies." },
    {
      text: <>End-to-end support from novelty & gap identification to data sourcing, protocol development, manuscript writing, peer review, and <Link href="/services/publication-support/journal-submission" className="text-blue-600 no-underline hover:no-underline">journal submission</Link>.</>
    },
    { text: "Advanced capabilities in statistical programming (SAS, R, SPSS), AI-driven data analysis, and bioinformatics for proteomics and genomics research." },
    { text: "Publication success assistance in high-impact factor journals, ensuring methodological accuracy, compliance, and transparency." },
    { text: "Dedicated project coordinators for personalized support and seamless communication throughout the project." },
    {
      text: <>Commitment to originality with <Link href="/services/publication-support/plagiarism-services" className="text-blue-600 no-underline hover:no-underline">plagiarism</Link> and AI-content checks, ensuring authenticity and academic integrity.</>
    }
  ],
  brochureUrl = "/uploads/research-services/03-03-2026-RESEARCH-SERVICES-1.pdf"
}) => {

  const renderFeatureText = (item: FeatureItem) => {
    return <span className="text-gray-700 text-[15px] leading-relaxed">{item.text}</span>;
  };

  return (
    <div className="w-full">
      {/* Top Hero Banner */}
      <HeroBanner
        title={bannerTitle}
        description={bannerSubtitle}
        headingAs="h1"
      />

      {/* Main Content Section */}
      <section className="w-full bg-[#f4f9fc] py-6 px-6 md:px-12 lg:px-24 font-sans selection:bg-blue-100">
        <div className="max-w-7xl mx-auto">

          {/* Headings */}
          <header className="mb-8">
            <h2 className="text-[#083c4c] text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-snug">
              {title}
            </h2>
            <p className="text-[#2c5c6c] text-base md:text-lg font-medium max-w-5xl leading-relaxed">
              {subtitle}
            </p>
          </header>

          {/* Content Body & Image Column split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">

            {/* Text Paragraphs */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 text-[15px] leading-relaxed">
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Decorative Image Container */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
              <div className="relative">
                {/* Dark Green Background Card Frame */}
                <div className="absolute inset-0 rounded-xl transform translate-x-4 translate-y-4 w-[320px] h-[220px] md:w-[380px] md:h-[260px]" />

                {/* Actual Image foreground */}
                <div className="relative p-2 rounded-xl  w-[320px] h-[220px] md:w-[380px] md:h-[260px] overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt="Scientist analyzing samples using a laboratory microscope"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 320px, 380px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature List Section */}
          <div className="mt-10 mb-8 max-w-5xl">
            <ul className="space-y-3.5">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  {/* Square Red Bullet Point */}
                  <span className="inline-block w-1.5 h-1.5 bg-[#b00000] rounded-sm mt-2 flex-shrink-0" />
                  {renderFeatureText(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <CommonUploadButton
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Brochure
            </CommonUploadButton>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ResearchServicesHero;