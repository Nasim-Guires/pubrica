import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Marketing Communication Content Development Process & Packages | Pubrica',
  description:
    'Speed up your journey of Marketing Communication with Pubrica. Discover our 7-step process, sample work, and tailored packages.',
};

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
        'Selecting effective content types aligned with the client\'s branding and marketing goals.',
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
      <header className="bg-[#0b3b2c] text-white py-10 px-4 text-center">
        <div className="max-w-5xl mx-auto border border-gray-400/40 p-6 rounded-sm bg-[#0b3b2c]/80">
          <h1 className="text-xl md:text-2xl font-bold mb-3 tracking-wide text-white">
            Speed up your journey of Marketing Communication with Pubrica
          </h1>
          <p className="text-xs md:text-sm max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Pubrica’s Marketing Communication Content Development services create engaging, brand-aligned content and campaigns that boost visibility, drive audience engagement, and deliver measurable business results.
          </p>
        </div>
      </header>

      {/* ------------------- STEP-BY-STEP PROCESS ------------------- */}
      <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
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
        <div className="flex flex-col items-center space-y-6">
          {/* Row 1: Steps 1 -> 2 -> 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
            {steps.slice(0, 3).map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer relative">
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
              </React.Fragment>
            ))}
          </div>

          {/* Vertical Arrow down from Step 3 to Step 4 */}
          <div className="text-gray-400 font-bold text-lg hidden md:block">↓</div>

          {/* Row 2: Steps 6 <- 5 <- 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
            {[steps[3], steps[4], steps[5]].map((step) => (
              <div
                key={step.id}
                className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer relative"
              >
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
            ))}
          </div>

          {/* Vertical Arrow down from Step 6 to Step 7 */}
          <div className="text-gray-400 font-bold text-lg hidden md:block">↓</div>

          {/* Row 3: Step 7 */}
          <div className="w-full md:w-1/3">
            <div className="group bg-white border border-gray-300 rounded-lg p-6 text-center flex flex-col items-center justify-start min-h-[200px] transition-all duration-300 hover:bg-[#3d3d3d] hover:text-white shadow-sm hover:shadow-xl cursor-pointer relative">
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
      </section>

      {/* ------------------- SAMPLE WORK SECTION ------------------- */}
      <section className="bg-emerald-50/50 py-12 px-4 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Placeholder */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden border border-teal-200 shadow-inner">
            <Image
              src="/images/marketing-communication-content-development-service/Marketing-Communication-Content-Development-Sample-Work.png"
              alt="Marketing Communication Content Development sample work"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              Marketing Communication Content Development Sample Work
            </h2>
            <button className="bg-black hover:bg-gray-800 text-white font-medium text-xs px-6 py-2.5 rounded-full transition-colors">
              Discover More
            </button>
            <h3 className="text-base font-bold text-[#0b3b2c] pt-2">
              Download the full Report Now
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Explore our Marketing Communication Content samples, crafted to showcase strategic messaging, creative content development, and alignment with industry best practices and compliance standards, delivering impactful, engaging, and brand-consistent communication experiences for businesses and their audiences.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white font-medium text-xs px-6 py-2.5 rounded-full transition-colors">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* ------------------- OUR PACKAGES ------------------- */}
      <section className="py-12 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
        <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
          Marketing Communication Content Development Services – Our Packages
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mb-10 leading-relaxed max-w-5xl">
          We offer comprehensive packages to meet diverse marketing communication needs. Each package is designed to enhance brand visibility, engage your audience, and deliver measurable results.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Standard Package */}
          <div className="bg-[#dbe3e3] rounded-lg p-6 flex flex-col justify-between border border-gray-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative w-9 h-9">
                  <Image src="/images/publication-support/poster-preparation/S.png" alt="Standard package" fill className="object-contain" />
                </span>
                <h3 className="text-base font-bold text-gray-900">Standard</h3>
              </div>
              <ul className="space-y-4 text-xs text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <span><strong>Ideal For:</strong> Startups, SMEs, or organizations looking for essential brand communication materials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Includes:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Company profile/brochure content</li>
                      <li>Product or service descriptions</li>
                      <li>Website copy (up to 5 pages)</li>
                      <li>Social media post copy (up to 10 posts)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Optional Add-ons:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Graphic design for brochures/webpages</li>
                      <li>SEO keyword optimization</li>
                      <li>Additional social media creatives</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-400/30 text-xs font-bold text-gray-900 flex items-center gap-2">
              <span>➔</span> Turnaround Time: 7–10 business days
            </div>
          </div>

          {/* Professional Package */}
          <div className="bg-[#e4d3e8] rounded-lg p-6 flex flex-col justify-between border border-purple-200">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative w-9 h-9">
                  <Image src="/images/editing-and-translation/pro.webp" alt="Professional package" fill className="object-contain" />
                </span>
                <h3 className="text-base font-bold text-purple-900">Professional</h3>
              </div>
              <ul className="space-y-4 text-xs text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <span><strong>Ideal For:</strong> Established businesses aiming to strengthen brand presence and customer engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Includes:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Comprehensive website copy (up to 10 pages)</li>
                      <li>Product/service whitepaper or case study (1–2)</li>
                      <li>Blog articles (up to 4 per month)</li>
                      <li>Social media campaign content (up to 20 posts)</li>
                      <li>Newsletter content (2 editions)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Optional Add-ons:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Infographics and visual storytelling</li>
                      <li>Video script development</li>
                      <li>SEO strategy and implementation</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-300/40 text-xs font-bold text-gray-900 flex items-center gap-2">
              <span>➔</span> Turnaround Time: 12–15 business days
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-[#e8daaa] rounded-lg p-6 flex flex-col justify-between border border-amber-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative w-9 h-9">
                  <Image src="/images/editing-and-translation/pro.webp" alt="Premium package" fill className="object-contain" />
                </span>
                <h3 className="text-base font-bold text-amber-950">Premium</h3>
              </div>
              <ul className="space-y-4 text-xs text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <span><strong>Ideal For:</strong> Enterprises, healthcare, and technology firms seeking thought leadership and end-to-end marketing communication.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Includes:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>End-to-end website content (up to 20 pages)</li>
                      <li>Whitepapers, research reports, or eBooks (2–3)</li>
                      <li>Blog series (6–8 per month)</li>
                      <li>Social media campaign calendar (up to 30 posts)</li>
                      <li>Press releases (2–3 per month)</li>
                      <li>Email marketing campaigns (2 per month)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">➔</span>
                  <div>
                    <strong>Optional Add-ons:</strong>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>Brand storytelling workshops</li>
                      <li>Video content development</li>
                      <li>Market insights and competitor content benchmarking</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-400/40 text-xs font-bold text-gray-900 flex items-center gap-2">
              <span>➔</span> Turnaround Time: 20–25 business days
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}