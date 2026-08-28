import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';

// Exportable SEO Metadata for Next.js App Router (page.tsx)
export const metadata: Metadata = {
  title: 'Conference Presentation & Scientific Poster Preparation Service | Pubrica',
  description:
    'Pubrica provides professional design and content development for academic and scientific posters to maximize the impact of your presentation with scientific precision.',
  keywords: [
    'Poster Preparation Services',
    'Scientific Poster Design',
    'Academic Poster',
    'Conference Presentation',
    'Data Visualization',
  ],
  openGraph: {
    title: 'Conference Presentation & Scientific Poster Preparation Service',
    description:
      'Transform your research into a visually compelling, presentation-ready academic poster.',
    type: 'website',
  },
};

export default function PosterPreparationPage() {
  return (
    <main className="w-full font-sans text-gray-800 bg-white">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO BANNER SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <HeroBanner
        title="Conference Presentation & Scientific Poster Preparation Service"
        description="Pubrica's poster preparation service provides professional design and content development for academic and scientific posters to maximize the impact of your presentation."
        headingAs="h1"
      />

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN CONTENT SECTION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-6 leading-snug">
          Professional Scientific and Academic Poster Presentation Service: Visually Communicate Your
          High-Impact Research Presentation with Scientific Precision
        </h2>

        <p className="text-gray-700 font-semibold mb-4">
          Make a high Impact at your next academic event with an eye-catching, ready-to-print poster
          that showcases your work.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Presenting at a scientific or academic conference? A well-developed scientific research
          poster can greatly enhance your research visibility, boost your academic profile, and
          engagement with stakeholders. However, producing a poster that complies with submission
          requirements and communicates even relatively complex data effectively requires time,
          commitment, and design skills.
        </p>

        {/* Content & Visual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Column: Bullet List */}
          <div className="lg:col-span-7 text-gray-700 space-y-4">
            <p className="leading-relaxed">
              At Pubrica, our{' '}
              <a
                href="https://pubrica.com/insights/sample-work/maternal-gdm-infant-gut-microbiome-vertical-transmission/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 "
              >
                poster preparation services
              </a>{' '}
              can help researchers transform manuscript findings or current research into a
              scientifically valid, visually structured, presentation-ready academic poster. We
              take care of everything required for a print-ready or digital poster, customized to
              your conference needs, including the layout, data visualizations, and design
              compliance. Our Service Includes:
            </p>

            <ul className="space-y-3 pl-5 list-disc marker:text-red-600 text-gray-700">
              <li>
                <span className="font-semibold">Extracting key content</span> from your manuscript,
                thesis, or research brief (Objectives, Methods, Results, Conclusion)
              </li>
              <li>
                <span className="font-semibold">Structuring poster layout</span> according to conference
                guidelines (e.g.,{' '}
                <a href="https://www.aacr.org/wp-content/uploads/2021/09/AACR22_Abstract-Guidelines.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 ">AACR</a>,{' '}
                <Link href="/services/publication-support/poster-preparation/european-society-for-medical-oncology" className="text-blue-600 ">ESMO</Link>,{' '}
                <a href="https://www.asco.org/annual-meeting/abstracts-presentations/poster-presenter-guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 ">ASCO</a>,{' '}
                <a href="https://www.isscr.org/guidelines" target="_blank" rel="noopener noreferrer">ISSCR</a>)
              </li>
              <li>
                <Link href="/services/publication-support/poster-preparation/why-scientific-design-and-visualization-matter-in-poster-preparation/" className="text-blue-600 hover:underline font-semibold">
                  Scientific design &amp; visualization
                </Link>{' '}
                with infographics, graphs, charts, and visuals appropriate to your area of research
              </li>
              <li>
                <span className="font-semibold">Poster formatting</span> based on submission
                requirements (poster size, resolution, orientation, colour code, font hierarchy)
              </li>
              <li>
                <span className="font-semibold">Text Optimization</span> Clear, jargon-free, and
                field-appropriate language for comprehension by multidisciplinary audiences.
              </li>
              <li>
                <span className="font-semibold">
                  Manuscript Refinement (Scientific Editing &amp; Language Polishing)
                </span>{' '}
                Based on your feedback, we will take you step by step through your revisions,
                making scientific and structural edits, refining the research relevance, and
                correcting language issues.
              </li>
            </ul>
          </div>

          {/* Right Column: Next.js Optimized Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-3 rounded-2xl max-w-md w-full">
              <div className="rounded-xl overflow-hidden p-2 relative">
                <Image
                  src="/images/publication-support/poster-preparation/poster-presentation-PUB-min.webp"
                  alt="Scientific poster design preview on a laptop"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Closing */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Pubrica provides researchers with the ability to create conference-ready posters without the
          hassle of design problems, formatting issues, or compliance gaps. From conceptualization
          to final delivery, we become your{" "}
          <Link href="/services/publication-support/poster-preparation/how-to-design-a-research-poster/" className="text-blue-600 hover:underline font-medium">
            scientific design
          </Link>{" "}
          partner, delivering a poster that represents the quality of your research and its clarity.
        </p>
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-8 mt-6 mb-10">
          <GetFreeQuoteButton />
          <a
            href="/uploads/Poster-Preparation-Services-_compressed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none"
          >
            View Brochure
          </a>
        </div>


      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. "WHAT WE DO" FEATURE CARDS SECTION                         */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#dcf4e6] py-7 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Intro Card */}
            <div className="bg-transparent p-6 rounded-2xl flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-[#0c3830] mb-4">What We do</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Pubrica&apos;s life science and scientific poster design and creation services are
                designed to visually convey your research outcomes efficiently at academic and
                scientific conferences. Our team of experts creates an effective poster that
                highlights the purpose of your research in a format that is more eye-catching
                than traditional presentations.
              </p>
            </div>

            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-start">
              <h3 className="text-lg font-bold text-[#0c3830] mb-3">
                Expert Design and Layout
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our visual artists will carefully manage the layout, pagination, and graphics for
                your poster to effectively represent the contents of your research, be it based
                on{' '}
                <Link href="/services/research-services/scientific-writing" className="text-blue-500 ">scientific writing</Link>,{' '}
                <Link href="/services/research-services/meta-analysis" className="text-blue-500 ">meta-analysis</Link>, or
                experimental studies, clearly and engagingly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-start">
              <h3 className="text-lg font-bold text-[#0c3830] mb-3">
                Customizable Design Options
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer lots of design templates, layouts, fonts, and colour themes to
                consider, and you can create a poster that exhibits your style or your
                institution&apos;s style. The templates are easily adaptable for your poster,{' '}
                <Link href="/services/research-impact/graphical-abstract" className="text-blue-500 ">graphical abstract</Link>,{' '}
                <Link href="/services/patient-education-content" className="text-blue-500 ">patient education material</Link>,
                or scientific conference poster.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-start">
              <h3 className="text-lg font-bold text-[#0c3830] mb-3">
                Concise Content Presentation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating an academic poster is the process of synthesizing substantive research,
                which can include a clinical trial,{' '}
                <Link href="/services/research-services/meta-analysis" className="text-blue-500 ">meta-analysis</Link>, or large
                data set, into a format that is easy to consume. Our team works with you to
                highlight key points and data, making your poster both informative and engaging.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-start">
              <h3 className="text-lg font-bold text-[#0c3830] mb-3">
                High-Quality Production
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We guarantee that your poster is ready for printing in electronic formats that
                will meet the precise specifications of the conference or event, including
                dimensions, resolution.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-start">
              <h3 className="text-lg font-bold text-[#0c3830] mb-3">
                Enhanced Engagement
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlike verbal presentations, posters allow for prolonged engagement and exposure
                and can captivate viewers during an event, providing much more flexibility in
                information consumption and engagement.
              </p>
            </div>

          </div>

          {/* Footer CTA Text */}
          <div className="pt-4">
            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              Choose Pubrica&apos;s{' '}
              <a
                href="https://pubrica.com/insights/sample-work/microbiota-supportive-diet-lipid-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Poster Preparation Services
              </a>{' '}
              to turn your research into a professionally designed poster that conveys your study
              findings and increases your evidence at conferences! Contact us to discover how
              our tailored solutions can help you make a lasting impact.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}