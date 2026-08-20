import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Thought Leadership Content & Editorial Design | Pubrica',
  description: 'Pubrica excels in developing insightful thought leadership content and innovative editorial designs, creating engaging narratives and visually striking layouts.',
};

export default function ThoughtLeadershipContentEditorialDesign() {
  const steps = [
    {
      id: 1,
      title: 'Ideation & Strategic Topic Planning',
      description: 'Collaborate to brainstorm thought-provoking topics aligned with your brand and audience.',
      iconSrc: '/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Ideation-Strategic-Topic-Planning.png',
      numPosition: 'top',
    },
    {
      id: 2,
      title: 'Tailored Content Development',
      description: 'Develop engaging narratives and insightful content tailored to your objectives and industry dynamics.',
      iconSrc: '/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Tailored-Content-Development.png',
      numPosition: 'bottom',
    },
    {
      id: 3,
      title: 'Editorial & Visual Design',
      description: 'Design visually appealing layouts that enhance readability and reinforce your brand identity.',
      iconSrc: '/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Editorial-Visual-Design.png',
      numPosition: 'top',
    },
    {
      id: 4,
      title: 'Review & Quality Assurance',
      description: 'Conduct meticulous reviews and refinements to ensure coherence, clarity, and alignment with strategic objectives before final dissemination.',
      iconSrc: '/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Review-Quality-Assurance.png',
      numPosition: 'bottom',
    },
  ];

  return (
    <article className="w-full bg-white text-gray-800 font-sans">
      {/* ------------------- HERO BANNER ------------------- */}
      <header className="bg-[#0b3b2c] text-white py-12 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
            Thought Leadership Content & Editorial Design
          </h1>
          <p className="text-sm md:text-base max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Pubrica excels in developing insightful thought leadership content and innovative editorial designs, creating engaging narratives and visually striking layouts that amplify your brand and resonate with your audience.
          </p>
        </div>
      </header>

      {/* ------------------- SECTION 1: HOW IT WORKS ------------------- */}
      <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
        <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-1">
          How Our Thought Leadership Content & Editorial Design Service Works
        </h2>
        <h3 className="text-base font-semibold text-gray-600 mb-4">
          Our-Step-by Step-Process
        </h3>
        <p className="max-w-3xl mx-auto text-xs md:text-sm text-gray-600 mb-16 leading-relaxed">
          At Pubrica, our structured workflow ensures that your thought leadership content is meticulously researched, strategically crafted, and visually compelling, delivering maximum impact to your target audience.
        </p>

        {/* Alternating Step Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center relative">
          {steps.map((step) => {
            const isTop = step.numPosition === 'top';
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center ${isTop ? 'md:pt-12' : 'md:pb-12'}`}
              >
                {/* TOP CIRCLE NUMBER */}
                {isTop && (
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0088cc] text-white font-bold flex items-center justify-center shadow-md text-sm">
                      {step.id}
                    </div>
                    <div className="w-0.5 h-6 bg-[#0088cc] mt-1"></div>
                  </div>
                )}

                {/* CARD - Pure White by Default, Dark Charcoal ONLY on Hover */}
                <div className="group w-full bg-white border border-gray-200 rounded-sm p-6 text-left flex flex-col justify-start min-h-[220px] transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-2xl cursor-pointer relative">
                  {/* Decorative Teal Top Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0088cc] group-hover:bg-[#0088cc]" />

                  <div className="relative mb-3 w-10 h-10">
                    <Image src={step.iconSrc} alt="" fill className="object-contain" sizes="40px" />
                  </div>
                  <h4 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* BOTTOM CIRCLE NUMBER */}
                {!isTop && (
                  <div className="flex flex-col items-center mt-4">
                    <div className="w-0.5 h-6 bg-[#0088cc] mb-1"></div>
                    <div className="w-10 h-10 rounded-full bg-[#0088cc] text-white font-bold flex items-center justify-center shadow-md text-sm">
                      {step.id}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------- SECTION 2: COMPLIANCE STANDARDS ------------------- */}
      <section className="py-12 px-4 max-w-6xl mx-auto" aria-labelledby="compliance-heading">
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
      <section className="bg-emerald-50/50 py-12 px-4 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section Placeholder */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden bg-white/50 border border-gray-200">
            <Image
              src="/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/Thought-Leadership-Content-Editorial-Design-Sample-Work.png"
              alt="Thought leadership sample work"
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              Thought Leadership Content & Editorial Design Sample Work
            </h2>
            <button className="bg-black hover:bg-gray-800 text-white font-medium text-xs px-6 py-2.5 rounded-full transition-colors">
              Discover More
            </button>
            <h3 className="text-base font-bold text-[#0b3b2c] pt-2">
              Download the full Report Now
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Explore our Thought Leadership Content & Editorial Design samples, crafted to highlight strategic narratives, impactful storytelling, and visually compelling designs, ensuring alignment with brand objectives and industry standards while delivering engaging, decision-ready insights for publications and stakeholder communication.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------- SECTION 4: PACKAGES ------------------- */}
      <section className="py-12 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
        <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
          Thought Leadership Content & Editorial Design – Our Packages
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mb-10 leading-relaxed max-w-5xl">
          Pubrica delivers bespoke thought leadership content and editorial design services to help organizations communicate their expertise, influence industry conversations, and strengthen their brand presence. Our packages are designed to cater to diverse business needs—from executive decision-making support to audience engagement through high-quality content.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter Package */}
          <div className="bg-[#dbe3e3] rounded-lg p-6 flex flex-col justify-between border border-gray-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative w-9 h-9">
                  <Image src="/images/publication-support/responding-to-reviewers/standard-logo.png" alt="Starter" fill className="object-contain" sizes="36px" />
                </span>
                <h3 className="text-base font-bold text-gray-900">Starter</h3>
              </div>
              <ul className="space-y-3 text-xs text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <span><strong>Ideal For:</strong> Small businesses or first-time thought leadership initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Includes:</strong>
                    <ul className="mt-1 space-y-1 list-disc list-inside text-gray-700">
                      <li>1 Executive Report or White Paper</li>
                      <li>2 Blog Posts or Articles</li>
                      <li>Basic editorial design and layout</li>
                      <li>1 Revision cycle</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-400/30 text-xs font-bold text-gray-900 flex items-center gap-2">
              <span>➔</span> Turnaround Time: 2–3 weeks
            </div>
          </div>

          {/* Professional Package */}
          <div className="bg-[#e4d3e8] rounded-lg p-6 flex flex-col justify-between border border-purple-200">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative w-9 h-9">
                  <Image src="/images/editing-and-translation/translation-with-editing/pro.webp" alt="Professional" fill className="object-contain" sizes="36px" />
                </span>
                <h3 className="text-base font-bold text-purple-900">Professional</h3>
              </div>
              <ul className="space-y-3 text-xs text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <span><strong>Ideal For:</strong> Growing organizations aiming to establish authority in their domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Includes:</strong>
                    <ul className="mt-1 space-y-1 list-disc list-inside text-gray-700">
                      <li>2–3 Executive Reports or White Papers</li>
                      <li>4–5 Blogs or Authored Articles</li>
                      <li>Advanced editorial design with visuals, Infographics, and branding elements</li>
                      <li>2 Revision cycles</li>
                      <li>Content strategy consultation</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-300/40 text-xs font-bold text-gray-900 flex items-center gap-2">
              <span>➔</span> Turnaround Time: 4–6 weeks
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-[#e8daaa] rounded-lg p-6 flex flex-col justify-between border border-amber-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative w-9 h-9">
                  <Image src="/images/data-analytics-machine-learning/thought-leadership-content-editorial-design/E-pa-icons.png" alt="Enterprise" fill className="object-contain" sizes="36px" />
                </span>
                <h3 className="text-base font-bold text-amber-950">Enterprise</h3>
              </div>
              <ul className="space-y-3 text-xs text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <span><strong>Ideal For:</strong> Large enterprises or global brands seeking a comprehensive thought leadership presence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Includes:</strong>
                    <ul className="mt-1 space-y-1 list-disc list-inside text-gray-700">
                      <li>5+ Executive Reports, Strategic Reports, or White Papers</li>
                      <li>8–10 Blogs, Articles, or ghost writing pieces</li>
                      <li>Premium editorial design with data visualization, infographics, and interactive layouts</li>
                      <li>Unlimited revision cycles</li>
                      <li>Dedicated content strategist and editorial support</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-400/40 text-xs font-bold text-gray-900 flex items-center gap-2">
              <span>➔</span> Turnaround Time: 8–10 weeks
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}