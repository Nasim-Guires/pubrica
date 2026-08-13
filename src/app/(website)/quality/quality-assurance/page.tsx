import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function QualityAssurancePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Header / Hero Title Section */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="max-w-4xl mx-auto border-2 border-slate-700 py-8 px-6 bg-slate-800/50 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Quality Assurance</h1>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
          
          {/* ISO Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">ISO</h2>
            
            <div className="flex items-center space-x-2 text-red-600 font-semibold text-sm">
              <Lock className="w-4 h-4" />
              <span>Robust data security</span>
              <span className="text-gray-500 font-normal">128 bit - SSL encryption</span>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Pubrica is certified for information security (ISO/IEC 27001:2013 Information Security Management System) as well as for quality management (ISO 9001:2015 Quality Management System). We consider both aspects, viz. quality and Information Security, as most critical and important for our clients.
            </p>

            {/* ISO Certificates Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border border-gray-200 p-4 rounded bg-gray-50 flex flex-col items-center text-center shadow-sm">
                <div className="relative w-36 h-48 mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
                    alt="Quality Management System ISO 9001:2015 Certificate"
                    fill
                    className="object-cover rounded border"
                  />
                </div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Quality Management System</span>
                <span className="text-xs text-teal-700 font-semibold mt-1">ISO 9001:2015 certified</span>
              </div>

              <div className="border border-gray-200 p-4 rounded bg-gray-50 flex flex-col items-center text-center shadow-sm">
                <div className="relative w-36 h-48 mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
                    alt="Information Security Management System ISO/IEC 27001:2013 Certificate"
                    fill
                    className="object-cover rounded border"
                  />
                </div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Information Security Management System</span>
                <span className="text-xs text-teal-700 font-semibold mt-1">ISO/IEC 27001:2013 certified</span>
              </div>
            </div>
          </section>

          {/* Quick Nav Tabs */}
          <div className="flex flex-wrap gap-4 border-t border-b border-gray-200 py-4">
            <span className="bg-slate-900 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded">
              Information Security Management System ISO/IEC 27001:2013 &gt;&gt;
            </span>
            <span className="bg-gray-100 text-slate-800 text-xs md:text-sm font-semibold px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
              Quality Management System ISO 9001:2015 &gt;&gt;
            </span>
          </div>

          {/* ISMS Detailed Section */}
          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              ISO/IEC 27001:2013 Information Security Management System (ISMS)
            </h3>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We have achieved the ISO/IEC 27001:2013 milestone for establishing robust Information Security Management System (ISMS). We adhere to the highest standards of information security, client confidentiality, and trust. <strong>Your manuscript is your most important asset and we will always treat it with the greatest integrity.</strong>
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 border rounded-lg">
              <div className="relative w-48 h-36 flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop"
                  alt="Information Security Management System ISO 27001 Certified Badge"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                ISO/IEC 27001:2013 includes management of information security in processes related to Information Technology, Client Servicing, Operations, Human Resources, and Administration. Our ISMS follows the approach of &ldquo;develop, establish, implement, operate, monitor, review, maintain, and improve&rdquo;.
              </p>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We are already an ISO 9001:2015 certified organization, and the current ISO/IEC 27001:2013 certification has further reinstated the fact that we continuously strive to ensure customer satisfaction and enhance customer experience by delivering high-quality, innovative services.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900">
              How do our clients benefit from ISO/IEC 27001:2013 certification?
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
              <li>We have secure operations and strict compliance policies ensuring that your manuscripts are 100% safe with us.</li>
              <li>Our business continuity planning ensures there are no disruptions and that your documents are delivered on time, every time.</li>
              <li>We have a world-class information technology system in place to ensure superior quality and higher security.</li>
              <li>Our trust and confidentiality commitment aims to serve you better and longer.</li>
              <li>We have globally recognized and acknowledged security processes/protocols for ensuring zero security breaches.</li>
            </ul>
          </section>

          {/* Significance Diagram Section */}
          <section className="space-y-6 pt-4 text-center">
            <h4 className="text-lg font-bold text-slate-900">
              Significance of ISO/IEC 27001:2013 certification
            </h4>
            <div className="relative w-full max-w-lg mx-auto h-96">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                alt="ISMS Security Mindmap Diagram representing data security elements"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* CEO Quote Box */}
          <blockquote className="border-l-4 border-slate-900 bg-gray-50 p-6 italic text-gray-700 text-sm md:text-base shadow-sm relative">
            <p>&ldquo;Our clients trust is most important to us, and our confidentiality commitment is most important to our clients. This is why we have further invested in our information security system. With our ISO/IEC 27001:2013 Certification, we intend to offer highest information security standards to our global clients and business partners.&rdquo;</p>
            <footer className="mt-4 text-right not-italic font-bold text-slate-900 text-xs md:text-sm">
              Ganesan, CEO
            </footer>
          </blockquote>

          <p className="text-xs md:text-sm text-gray-600 text-center">
            For an accurate pricing and delivery time for your manuscript, please fill out the quotation form below and we shall get back to you within 1 hour.
          </p>
        </main>
      </div>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-900 text-white py-12 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Pubrica experts are with you at every stage...</h3>
            <p className="text-gray-300 text-xs md:text-sm mt-1">Click on the button and fill up the form; a project coordinator will contact you within an hour&apos;s time.</p>
          </div>
          <Link
            href="/order-now"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded shadow transition whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}