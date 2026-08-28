import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  boldTitle: string;
  description: string;
}

export default function CaseReportWritingPage() {
  const serviceItems: ServiceItem[] = [
    {
      boldTitle: 'Develop an informative title',
      description: 'that attract reader interest following nominal and compound. Titles in general follow JCCA instructions with a keyword from a standard list such as MeSH (medical subject headings)',
    },
    {
      boldTitle: 'Abstract:',
      description: 'We clearly summarize the paper into a story which flows logically. We follow one of two styles, narrative or structure. We adhere to JCAA recommendation for case studies such as structured abstract that consists of Introduction, case presentation, management and outcome, and discussion.',
    },
    {
      boldTitle: 'Introduction:',
      description: 'A brief introduction and our objective is to have the reader understand clearly, but in general sense.',
    },
    {
      boldTitle: 'Case presentation:',
      description: 'emphasize on raw data such as complaint that brought the patient in a narrative format, summarize the results of questioning, describe the results of clinical examination.',
    },
    {
      boldTitle: 'Management and outcome:',
      description: 'finally, plan for case as well as the care which was actually provided and the outcome',
    },
    {
      boldTitle: 'Discussion:',
      description: 'Identify any questions that the case raises along with summarize the lessons learned from this case.',
    },
    {
      boldTitle: 'Acknowledgement and references:',
      description: 'highlight assistance with the preparation, and references that actually used to support the case study.',
    },
    {
      boldTitle: 'Legends, Tables, figures and permissions',
      description: 'will be also being included as part of the case study.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Hero Banner Section */}
        <section className="bg-slate-900 text-white py-7 text-center">
          <div className="max-w-4xl mx-auto border-2 border-slate-700 py-8 px-6 bg-slate-800/50 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Clinical Case Report writing</h1>
            <p className="text-gray-300 text-sm md:text-base mt-2">
              Obtain the most relevant references to enrich your Clinical Case Report
            </p>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="max-w-5xl mx-auto px-6 py-6 space-y-12">
          
          {/* Introduction Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
              Clinical Case Report Writing
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto">
              At Pubrica, our Case Report Service is meticulously designed to support researchers and healthcare professionals in documenting and publishing their clinical findings. We understand the critical role case reports play in medical literature by highlighting unique cases, novel treatments, rare diseases, and unexpected outcomes. Our comprehensive service ensures your case report meets the highest standards of scientific accuracy and clarity, making a significant contribution to medical knowledge.
            </p>
          </section>

          {/* Services List and Pricing Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Services Included */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b pb-2">
                Our case report writing services includes
              </h3>

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
                <h4 className="text-xl font-bold text-slate-900">Case Report</h4>
                <div className="text-3xl font-extrabold text-slate-900">$950</div>
                
                <div className="bg-black text-white text-xs font-bold py-2 px-4 rounded tracking-wider">
                  7 Days
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
              Case reports are defined as the <span className="text-teal-600 font-medium">scientific documentation</span> of a single clinical observation and have a time-honored and rich tradition in medicine and <span className="text-teal-600 font-medium">scientific publication</span>. Pubrica has an extensive experience in developing a detailed clinical case report that highlights the symptoms, signs, diagnosis, treatment and follow-up of an individual patient.
            </p>
            <p>
              Case reports represent a relevant, timely, and important study design in advancing medical scientific knowledge especially of rare diseases. Case studies give an indication of the decision-making process, so that other <span className="text-teal-600 font-medium">physicians</span> can apply lateral thinking to their own cases. Case Studies should act as instructive examples to people who might encounter similar problems. Ideally, in medicine, Case Studies should detail a particular <span className="text-teal-600 font-medium">medical case</span>, describing the background of the patient and any clues the physician picked up (or should have, with hindsight). They should discuss investigations undertaken in order to determine a diagnosis or differentiate between possible diagnoses and should indicate the course of treatment the patient underwent as a result. As a whole, then, case Studies should be an informative and useful part of every physician&apos;s medical education, both during training and on a continuing basis. Another important general rule for writing case studies is to stick to the facts. A case study should be a fairly modest description of what actually happened. Speculation about underlying mechanisms of the disease process or treatment should be restrained.
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