import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceBanner from '@/components/common/ServiceBanner';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';

export const metadata = {
  title: 'Thought Leadership Content & Editorial Design | Pubrica',
  description: 'Pubrica excels in developing insightful thought leadership content and innovative editorial designs, creating engaging narratives and visually striking layouts.',
};

export default function ThoughtLeadershipContentEditorialDesign() {
  const steps: WorkflowStep[] = [
    {
      stepNumber: 1,
      title: "IDEATION & STRATEGIC TOPIC PLANNING",
      description:
        "Collaborate to brainstorm thought-provoking topics aligned with your brand and audience.",
      iconSrc:
        "/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Ideation-Strategic-Topic-Planning.png",
      position: "top",
    },
    {
      stepNumber: 2,
      title: "TAILORED CONTENT DEVELOPMENT",
      description:
        "Develop engaging narratives and insightful content tailored to your objectives and industry dynamics.",
      iconSrc:
        "/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Tailored-Content-Development.png",
      position: "bottom",
    },
    {
      stepNumber: 3,
      title: "EDITORIAL & VISUAL DESIGN",
      description:
        "Design visually appealing layouts that enhance readability and reinforce your brand identity.",
      iconSrc:
        "/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Editorial-Visual-Design.png",
      position: "top",
    },
    {
      stepNumber: 4,
      title: "REVIEW & QUALITY ASSURANCE",
      description:
        "Conduct meticulous reviews and refinements to ensure coherence, clarity, and alignment with strategic objectives before final dissemination.",
      iconSrc:
        "/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Review-Quality-Assurance.png",
      position: "bottom",
    },
  ];

  const packagesData: PackageItem[] = [
    {
      icon:
        "/images/publication-support/responding-to-reviewers/standard-logo.png",
      title: "Starter",
      subtitle: "Essential Thought Leadership Support",
      idealFor:
        "Small businesses or first-time thought leadership initiatives",
      includes: [
        "1 Executive Report or White Paper",
        "2 Blog Posts or Articles",
        "Basic editorial design and layout",
        "1 Revision cycle",
      ],
      turnaround: "2–3 weeks",
      cardBgColor: "#dbe3e3",
      titleColor: "#111827",
    },
    {
      icon:
        "/images/editing-and-translation/translation-with-editing/pro.webp",
      title: "Professional",
      subtitle: "Advanced Thought Leadership & Editorial Design",
      idealFor:
        "Growing organizations aiming to establish authority in their domain",
      includes: [
        "2–3 Executive Reports or White Papers",
        "4–5 Blogs or Authored Articles",
        "Advanced editorial design with visuals, Infographics, and branding elements",
        "2 Revision cycles",
        "Content strategy consultation",
      ],
      turnaround: "4–6 weeks",
      cardBgColor: "#e4d3e8",
      titleColor: "#581c87",
    },
    {
      icon:
        "/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/E-pa-icons.png",
      title: "Enterprise",
      subtitle: "Comprehensive Thought Leadership Presence",
      idealFor:
        "Large enterprises or global brands seeking a comprehensive thought leadership presence",
      includes: [
        "5+ Executive Reports, Strategic Reports, or White Papers",
        "8–10 Blogs, Articles, or ghost writing pieces",
        "Premium editorial design with data visualization, infographics, and interactive layouts",
        "Unlimited revision cycles",
        "Dedicated content strategist and editorial support",
      ],
      turnaround: "8–10 weeks",
      cardBgColor: "#e8daaa",
      titleColor: "#78350f",
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER ------------------- */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Thought Leadership Content & Editorial Design"
        description="Pubrica excels in developing insightful thought leadership content and innovative editorial designs, creating engaging narratives and visually striking layouts that amplify your brand and resonate with your audience."
      />

      {/* ------------------- SECTION 1: HOW IT WORKS ------------------- */}
      <EditorialWorkflowSection
        heading="How Our Thought Leadership Content & Editorial Design Service Works"
        subheading="Our-Step-by Step-Process"
        description="At Pubrica, our structured workflow ensures that your thought leadership content is meticulously researched, strategically crafted, and visually compelling, delivering maximum impact to your target audience."
        steps={steps}
      />

      {/* ------------------- SECTION 2: COMPLIANCE STANDARDS ------------------- */}
      <section className="py-6 px-4 max-w-6xl mx-auto" aria-labelledby="compliance-heading">
        <h2 id="compliance-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
          Our Compliance and Guideline Standards
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mb-8 leading-relaxed max-w-5xl">
          At Pubrica, we ensure that all thought leadership content and editorial designs adhere to the highest standards of accuracy, ethics, and professionalism. Our compliance framework guarantees that every piece of content aligns with industry regulations, organizational policies, and global best practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section Placeholder */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden bg-white/50 border border-gray-200">
            <Image
              src="/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Ethical-Guidelines.png"
              alt="Ethical guidelines"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Key Standards List */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Key Standards We Follow:</h3>
            <ul className="space-y-3 text-xs md:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Accuracy & Evidence-Based Content:</strong> All insights, data, and claims are meticulously verified to ensure credibility and reliability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Ethical Guidelines:</strong> We maintain transparency and integrity in content creation, avoiding conflicts of interest and bias.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Regulatory Compliance:</strong> All materials comply with applicable legal, industry, and corporate regulations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Intellectual Property Respect:</strong> Proper attribution is ensured for all third-party content, images, and references.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Brand Alignment:</strong> Content reflects your organization's voice, vision, and strategic objectives consistently.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-gray-900 min-w-[6px]">•</span>
                <span><strong className="text-gray-900">Confidentiality & Data Security:</strong> Sensitive information is handled securely to protect proprietary and client data.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------- SECTION 3: SAMPLE WORK / REPORT ------------------- */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Thought-Leadership-Content-Editorial-Design-Sample-Work.png",
          alt: "Thought leadership sample work",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading:
              "Thought Leadership Content & Editorial Design Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our Thought Leadership Content & Editorial Design samples, crafted to highlight strategic narratives, impactful storytelling, and visually compelling designs, ensuring alignment with brand objectives and industry standards while delivering engaging, decision-ready insights for publications and stakeholder communication.",
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

      {/* ------------------- SECTION 4: PACKAGES ------------------- */}
      <CommonPackages
        title="Thought Leadership Content & Editorial Design – Our Packages"
        description="Pubrica delivers bespoke thought leadership content and editorial design services to help organizations communicate their expertise, influence industry conversations, and strengthen their brand presence. Our packages are designed to cater to diverse business needs—from executive decision-making support to audience engagement through high-quality content."
        packages={packagesData}
      />
    </article>
  );
}