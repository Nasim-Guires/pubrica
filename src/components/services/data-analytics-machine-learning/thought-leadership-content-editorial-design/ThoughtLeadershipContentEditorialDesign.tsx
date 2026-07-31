import React from 'react';

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
      icon: (
        <svg className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      numPosition: 'top', // circle 1 is above
    },
    {
      id: 2,
      title: 'Tailored Content Development',
      description: 'Develop engaging narratives and insightful content tailored to your objectives and industry dynamics.',
      icon: (
        <svg className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      numPosition: 'bottom', // circle 2 is below
    },
    {
      id: 3,
      title: 'Editorial & Visual Design',
      description: 'Design visually appealing layouts that enhance readability and reinforce your brand identity.',
      icon: (
        <svg className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      numPosition: 'top', // circle 3 is above
    },
    {
      id: 4,
      title: 'Review & Quality Assurance',
      description: 'Conduct meticulous reviews and refinements to ensure coherence, clarity, and alignment with strategic objectives before final dissemination.',
      icon: (
        <svg className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      numPosition: 'bottom', // circle 4 is below
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
                  
                  <div className="mb-3">
                    {step.icon}
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
          <div className="w-full h-80 bg-stone-200 rounded-lg border border-dashed border-gray-400 flex flex-col items-center justify-center p-4 text-center shadow-inner">
            <span className="text-lg font-bold text-gray-700">Image Section</span>
            <span className="text-xs text-gray-500 mt-1">[ Guidelines Binder / Document Representation ]</span>
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
          <div className="w-full h-80 bg-teal-100/70 rounded-lg border border-dashed border-teal-400 flex flex-col items-center justify-center p-4 text-center shadow-inner">
            <span className="text-lg font-bold text-teal-800">Image Section</span>
            <span className="text-xs text-teal-600 mt-1">[ Professional Reading / Sample Report Visual ]</span>
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
                <span className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-lg border border-blue-300">S</span>
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
                <span className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center text-lg border border-purple-300">P</span>
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
                <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-lg border border-amber-400">E</span>
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