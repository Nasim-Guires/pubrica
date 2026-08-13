import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';

export default function CaseReportSectionsPage() {
  const whatYouProvide: string[] = [
    'Patient demographics (age, sex, etc.)',
    'Medical history',
    'Details of investigations',
    'Procedure overview',
    'Treatment administered',
    'Resulting outcomes',
    'Study data and images (CT, X-ray, etc.)',
    'Initial draft of the case report',
    '1 or 2 pertinent papers for discussion',
    'Recommendation for a suitable journal',
  ];

  const whatWeProvide: string[] = [
    'Thorough literature review',
    'Introduction drafting',
    'Case report section revision',
    'Discussion composition',
    'Justification and recommendations',
    'Reference list creation',
    'Formatting to meet target journal guidelines (optional)',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12 space-y-16 max-w-5xl mx-auto">
      
      {/* Getting Started Section */}
      <section className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
          Getting Started With This Service is Easy!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What You Provide */}
          <div className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
            <div className="bg-slate-900 text-white font-bold py-3 px-6 text-center tracking-wide">
              What You Provide
            </div>
            <div className="p-6 space-y-3">
              {whatYouProvide.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                  <span className="bg-slate-900 text-white p-0.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What We Provide */}
          <div className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
            <div className="bg-slate-900 text-white font-bold py-3 px-6 text-center tracking-wide">
              What We Provide
            </div>
            <div className="p-6 space-y-3">
              {whatWeProvide.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                  <span className="bg-slate-900 text-white p-0.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Work Showcase Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Check out our Case Report Writing Samples</h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Pubrica’s Case Report Service guides you to find the perfect journal for your paper. Our tailored report considers scope, impact factor, and indexing, while prioritizing your preferences.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg bg-gray-50 p-6 shadow-sm max-w-4xl mx-auto">
          <div className="flex justify-between items-center bg-slate-900 text-white px-4 py-2 rounded-t text-sm font-medium">
            <span>Sample Work</span>
            <button className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-xs transition">
              <Download className="w-3.5 h-3.5" />
              <span>Download Now</span>
            </button>
          </div>
          <div className="border border-t-0 border-gray-300 bg-white p-4 rounded-b flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-2">1 / 4</div>
            <div className="relative w-full max-w-lg h-80 rounded overflow-hidden shadow-inner bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop"
                alt="Sample Case Report Document Cover on Nanotherapeutics in Oncology"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <span className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                  Design Considerations for Nanotherapeutics in Oncology
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Up / Guarantee Banner Section */}
      <section className="bg-slate-900 text-white rounded-lg p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-6">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop"
              alt="100% Satisfaction Guaranteed Seal"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold">Speed up your Case Report Writing with Pubrica</h3>
            <p className="text-gray-300 text-xs md:text-sm mt-1 leading-relaxed">
              Access your personal assistant specialized in case report writing through Pubrica, streamlining your submission process and shielding you from potential setbacks. Our service is designed to expedite publication, ensuring your case reports are crafted with precision and expertise for swift acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Service Section */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Why Choose Our Case report Service</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-gray-700">
            <p>
              <strong className="text-slate-900">Expertise:</strong> Our service provides highly skilled professionals proficient in literature review and citation formatting, guaranteeing accurate and compliant references tailored for case reports.
            </p>
            <p>
              <strong className="text-slate-900">Efficiency:</strong> Maximize productivity with our streamlined process, freeing you to concentrate on essential research objectives while we handle the meticulous details.
            </p>
            <p>
              <strong className="text-slate-900">Credibility:</strong> Enjoy the confidence of precise citations, elevating the professionalism and credibility of your case report publications.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop"
                alt="100% Satisfaction Guaranteed Badge"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scripting Success Stories Section */}
      <section className="space-y-6 pt-4 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">SCRIPTING SUCCESS STORIES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 bg-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-28 h-36 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=300&auto=format&fit=crop"
                alt="Clinical Problem-Solving Journal Book Cover"
                fill
                className="object-cover rounded border border-gray-700"
              />
            </div>
            <div className="space-y-2 text-xs md:text-sm">
              <p className="italic text-gray-300">
                &ldquo;You get the entire package at Scientific Writing &amp; Publishing. Regulatory writing, clinical report writing, journal writing, biostatistical reports, medical animation, and physician writing. They are easy to work with. What more do you want?&rdquo;
              </p>
              <div className="pt-2 flex justify-between font-semibold text-gray-200 border-t border-gray-800">
                <span>Jean-Claude Benaud</span>
                <span className="text-teal-400">Impact Factor: 4.236</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-28 h-36 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&auto=format&fit=crop"
                alt="Clinical Practice Journal Book Cover"
                fill
                className="object-cover rounded border border-gray-700"
              />
            </div>
            <div className="space-y-2 text-xs md:text-sm">
              <p className="italic text-gray-300">
                &ldquo;You get the entire package at Scientific Writing &amp; Publishing. Regulatory writing, clinical report writing, journal writing, biostatistical reports, medical animation, and physician writing. They are easy to work with. What more do you want?&rdquo;
              </p>
              <div className="pt-2 flex justify-between font-semibold text-gray-200 border-t border-gray-800">
                <span>Jean-Claude Benaud</span>
                <span className="text-teal-400">Impact Factor: 4.236</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}