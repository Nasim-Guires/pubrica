import React from 'react';
import Image from 'next/image';
import ServiceBanner from '@/components/common/ServiceBanner';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';

export const metadata = {
  title: 'Marketing Communication Content Development Process & Packages | Pubrica',
  description:
    'Speed up your journey of Marketing Communication with Pubrica. Discover our 7-step process, sample work, and tailored packages.',
};

const packagesData: PackageItem[] = [
  {
    icon: "/images/publication-support/responding-to-reviewers/standard-logo.png",
    title: "Standard",
    subtitle: "Essential Marketing Communication",
    idealFor:
      "Startups, SMEs, or organizations looking for essential brand communication materials.",
    includes: [
      "Company profile/brochure content",
      "Product or service descriptions",
      "Website copy (up to 5 pages)",
      "Social media post copy (up to 10 posts)",
    ],
    addOns: [
      "Graphic design for brochures/webpages",
      "SEO keyword optimization",
      "Additional social media creatives",
    ],
    turnaround: "7–10 business days",
    cardBgColor: "#dbe3e3",
    titleColor: "#1f2937",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
    title: "Professional",
    subtitle: "Growth-Focused Marketing Communication",
    idealFor:
      "Established businesses aiming to strengthen brand presence and customer engagement.",
    includes: [
      "Comprehensive website copy (up to 10 pages)",
      "Product/service whitepaper or case study (1–2)",
      "Blog articles (up to 4 per month)",
      "Social media campaign content (up to 20 posts)",
      "Newsletter content (2 editions)",
    ],
    addOns: [
      "Infographics and visual storytelling",
      "Video script development",
      "SEO strategy and implementation",
    ],
    turnaround: "12–15 business days",
    cardBgColor: "#e4d3e8",
    titleColor: "#581c87",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
    title: "Premium",
    subtitle: "End-to-End Marketing Communication",
    idealFor:
      "Enterprises, healthcare, and technology firms seeking thought leadership and end-to-end marketing communication.",
    includes: [
      "End-to-end website content (up to 20 pages)",
      "Whitepapers, research reports, or eBooks (2–3)",
      "Blog series (6–8 per month)",
      "Social media campaign center (up to 30 posts)",
      "Press releases (2–3 per month)",
      "Email marketing campaigns (2 per month)",
    ],
    addOns: [
      "Service storytelling workshops",
      "Video content development",
      "Market insights and competitor content benchmarking",
    ],
    turnaround: "20–25 business days",
    cardBgColor: "#e8daaa",
    titleColor: "#78350f",
  },
];

export default function MarketingCommunicationProcessAndPackages() {
  const steps = [
    {
      id: 1,
      title: 'Consultation and Project Definition',
      description:
        'Begins with a collaborative consultation to define project scope and objectives, tailored to your target audience and marketing goals.',
    },
    {
      id: 2,
      title: 'Content Strategy Formulation',
      description:
        "Selecting effective content types aligned with the client's branding and marketing goals.",
    },
    {
      id: 3,
      title: 'Creation and Optimisation',
      description:
        'Craft high-quality, SEO-optimized content that engages and informs the target audience, driving maximum visibility.',
    },
    {
      id: 4,
      title: 'Review and Compliance Checks',
      description:
        'Ensuring accuracy, compliance with industry regulations, and alignment with ethical standards.',
    },
    {
      id: 5,
      title: 'Implementation and Distribution',
      description:
        'We format and distribute finalized content across digital and print platforms, including email campaigns.',
    },
    {
      id: 6,
      title: 'Monitoring & Reporting',
      description:
        'We track content performance through metrics like engagement, conversion, and reach.',
    },
    {
      id: 7,
      title: 'Continuous Improvements & Updates',
      description:
        'Continuously refining and updating content based on feedback and analytics.',
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- BANNER ------------------- */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Speed up your journey of Marketing Communication with Pubrica"
        description="Pubrica’s Marketing Communication Content Development services create engaging, brand-aligned content and campaigns that boost visibility, drive audience engagement, and deliver measurable business results."
      />

      {/* ------------------- STEP-BY-STEP PROCESS ------------------- */}
      <section className="py-6 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
        <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-1">
          How Do Marketing Communication Content Development Services Work at Pubrica?
        </h2>
        <h3 className="text-sm font-semibold text-gray-600 mb-4">
          Our-step-by-step Process
        </h3>
        <p className="max-w-4xl mx-auto text-xs md:text-sm text-gray-600 mb-12 leading-relaxed">
          At Pubrica, our Marketing Communication Content Development Services are crafted to effectively support pharmaceutical companies, medical device manufacturers, clinics, and other entities within the healthcare and life sciences sectors. Our methodical approach ensures that all content is insightful, compliant, and strategically aligned with your marketing goals. Here’s a detailed overview of how our services function:
        </p>

        {/* Workflow Diagram Grid */}
        <div className="flex flex-col items-center">
          {/* Row 1: Steps 1 -> 2 -> 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
            {steps.slice(0, 3).map((step, index) => (
              <div key={step.id} className="relative flex items-center w-full">
                <div className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] w-full transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center mb-4 text-sm group-hover:bg-[#0088cc] transition-colors">
                    {step.id}
                  </div>
                  <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:flex absolute -right-5 z-10 w-10 h-10 items-center justify-center text-gray-400 font-bold text-xl pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Vertical Arrow down from Step 3 (Right column of Row 1) to Step 4 (Right column of Row 2) */}
          <div className="w-full flex justify-end pr-[16%] hidden md:flex my-3">
            <div className="text-gray-400 font-bold text-xl">↓</div>
          </div>

          {/* Row 2: Steps 4, 5, 6 positioned as [Step 4 (Right), Step 5 (Middle), Step 6 (Left)] matching image layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
            {/* Step 4 (Right column) */}
            <div className="relative flex items-center w-full">
              <div className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] w-full transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center mb-4 text-sm group-hover:bg-[#0088cc] transition-colors">
                  {steps[3].id}
                </div>
                <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                  {steps[3].title}
                </h4>
                <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                  {steps[3].description}
                </p>
              </div>
            </div>

            {/* Step 5 (Middle column) */}
            <div className="relative flex items-center w-full">
              <div className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] w-full transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center mb-4 text-sm group-hover:bg-[#0088cc] transition-colors">
                  {steps[4].id}
                </div>
                <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                  {steps[4].title}
                </h4>
                <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                  {steps[4].description}
                </p>
              </div>
              {/* Arrow pointing left from Step 5 to Step 4 */}
              <div className="hidden md:flex absolute -left-5 z-10 w-10 h-10 items-center justify-center text-gray-400 font-bold text-xl pointer-events-none">
                ←
              </div>
            </div>

            {/* Step 6 (Left column) */}
            <div className="relative flex items-center w-full">
              <div className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] w-full transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center mb-4 text-sm group-hover:bg-[#0088cc] transition-colors">
                  {steps[5].id}
                </div>
                <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                  {steps[5].title}
                </h4>
                <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                  {steps[5].description}
                </p>
              </div>
              {/* Arrow pointing left from Step 6 to Step 5 */}
              <div className="hidden md:flex absolute -left-5 z-10 w-10 h-10 items-center justify-center text-gray-400 font-bold text-xl pointer-events-none">
                ←
              </div>
            </div>
          </div>

          {/* Vertical Arrow down from Step 6 (Left column of Row 2) to Step 7 (Left column of Row 3) */}
          <div className="w-full flex justify-start pl-[16%] hidden md:flex my-3">
            <div className="text-gray-400 font-bold text-xl">↓</div>
          </div>

          {/* Row 3: Step 7 (Placed on the left column under Step 6) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="w-full">
              <div className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] w-full transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center mb-4 text-sm group-hover:bg-[#0088cc] transition-colors">
                  {steps[6].id}
                </div>
                <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                  {steps[6].title}
                </h4>
                <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                  {steps[6].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- SAMPLE WORK SECTION ------------------- */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/marketing-communication-content-development-service/Marketing-Communication-Content-Development-Sample-Work.png",
          alt: "Marketing communication sample work",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading: "Marketing Communication Content Development Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our Marketing Communication Content samples, crafted to showcase strategic messaging, creative content development, and alignment with industry best practices and compliance standards, delivering impactful, engaging, and brand-consistent communication experiences for businesses and their audiences.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />

      {/* ------------------- OUR PACKAGES ------------------- */}
      <CommonPackages
        title="Marketing Communication Content Development Services – Our Packages"
        description="We offer comprehensive packages to meet diverse marketing communication needs. Each package is designed to enhance brand visibility, engage your audience, and deliver measurable results."
        packages={packagesData}
      />
    </article>
  );
}