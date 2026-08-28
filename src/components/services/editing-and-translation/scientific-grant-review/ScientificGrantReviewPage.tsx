import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  boldTitle: string;
  description: string;
}

export default function ScientificGrantReviewPage() {
  const serviceItems: ServiceItem[] = [
    {
      boldTitle: 'Expert Grant Consultation:',
      description: 'Our experienced grant consultants provide strategic advice to conceptualize novel ideas and secure necessary funding, allowing you to concentrate on your primary research activities.',
    },
    {
      boldTitle: 'Dedicated Writing Support:',
      description: 'Our team of skilled grant writers prepares compelling proposals by conducting thorough research and gathering information from a variety of sources. We ensure that every proposal is articulate and well-structured to meet the criteria of funding agencies.',
    },
    {
      boldTitle: 'Timely Submission:',
      description: 'We are committed to completing and submitting your grant proposals on time. Our process includes meticulous planning and efficient execution to meet all deadlines, ensuring your application is considered in each funding cycle.',
    },
    {
      boldTitle: 'Funding Strategy Development:',
      description: 'We work closely with your team to identify suitable funding avenues. Our services include planning, training, aims evaluation, proposal development, submission, and follow-up.',
    },
    {
      boldTitle: 'Understanding of Review Processes:',
      description: 'Our scientific researchers have a deep understanding of the grant review process, which allows us to tailor proposals that align with the expectations and priorities of grant reviewers.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Hero Banner Section */}
        <section className="bg-slate-900 text-white py-7 text-center">
          <div className="max-w-4xl mx-auto border-2 border-slate-700 py-8 px-6 bg-slate-800/50 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Grant Review Editing Services</h1>
            <p className="text-gray-300 text-sm md:text-base mt-2 italic">
              &ldquo;Pubrica delivers Grant Review Editing Services, refining your submissions with precision and expertise for maximum impact and success.&rdquo;
            </p>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="max-w-5xl mx-auto px-6 py-6 space-y-12">

          {/* Introduction Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
              Grant Review Editing Services at Pubrica
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto">
              Secure your research funding with Pubrica&apos;s professional Grant Review Editing Services. We specialize in assisting universities and scientific researchers with the comprehensive development and submission of grant proposals.
            </p>
          </section>

          {/* Services List and Pricing Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Left Column: Services Included */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                {serviceItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm md:text-base text-gray-700">
                    <span className="bg-slate-900 text-white p-1 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <p>
                      <strong className="text-slate-900">{item.boldTitle}</strong> {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing Sticky Card */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <div className="border-2 border-gray-200 rounded-lg p-6 bg-white shadow-md text-center space-y-4">
                <h4 className="text-xl font-bold text-slate-900">Grant Review Editing</h4>
                <div className="text-3xl font-extrabold text-slate-900">$149</div>

                <div className="bg-black text-white text-xs font-bold py-2 px-4 rounded tracking-wider">
                  5 Days
                </div>

                <Link
                  href="/order-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded transition shadow"
                >
                  Get Started
                </Link>

                <div className="text-xs text-gray-600 pt-2 border-t">
                  <span className="font-semibold">Also Available in:</span> <br />
                  <span className="text-teal-700 font-medium">Platinum Pack</span> | <span className="text-teal-700 font-medium">Golden Pack</span> | <span className="text-teal-700 font-medium">Silver Pack</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Informational Paragraphs */}
          <section className="space-y-4 pt-6 border-t border-gray-200 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Choose Pubrica for strategic and professional grant review editing services that enhance your chances of securing funding. With our expert guidance and support, your research initiatives are one step closer to receiving the funding they deserve. Reach out to Pubrica today to learn more about how we can assist you in achieving your funding goals.
            </p>
          </section>

        </main>
      </div>

      {/* Bottom Footer Spacing */}
      <footer className="bg-slate-900 text-white py-8 text-center text-xs text-gray-400 mt-16">
        <p>© {new Date().getFullYear()} Pubrica. All rights reserved.</p>
      </footer>
    </div>
  );
}