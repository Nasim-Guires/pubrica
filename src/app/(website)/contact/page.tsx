import React from 'react';
import { Phone, Mail, Clock, MapPin, Search } from 'lucide-react';
import Container from '@/components/common/Container';
import ContactForm from '@/components/shared/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import { constructMetadata } from '@/lib/metadata';
import HeroBanner from '@/components/common/HeroBanner';

export const metadata = constructMetadata({
  title: 'contact us - Pubrica',
  description: 'Experts are ready to collaborate with you.',
  slug: '/contact',
});

export default function ContactPage() {
  return (
    <div
      className="bg-white min-h-screen text-slate-800"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >

      {/* 1. HERO TITLE BANNER */}
      <HeroBanner
        title="Contact Us"
        description="Experts are ready to collaborate with you."
        headingAs="h1"
      />

      {/* 2. SUB-HEADER */}
      <section className="text-center pt-7 pb-8 space-y-2">
        <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-wider">

          SAVE TIME AND MONEY
        </h2>
        <p className="text-slate-500 text-base font-medium">
          Touch base with us now....
        </p>
      </section>

      {/* 3. FORM & ADDRESS CONTENT GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Form Wrapper */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Need more information about our services?
              </h3>
              <p className="text-base font-bold text-slate-900 mt-0.5">
                Write to us to receive a prompt response.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Country Locations Panel */}
          <div className="lg:col-span-5 h-[620px] overflow-y-auto pr-2 space-y-6 border-l border-slate-200 pl-6 style-scrollbar">

            {/* UK Address Card */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#004d40]">
              <h4 className="font-extrabold text-slate-900 tracking-wide text-lg">UK</h4>
              <div className="w-full h-[1px] bg-slate-200"></div>
              <p className="text-base text-slate-700 font-semibold leading-relaxed">
                MIIC Unit 52-56,<br />
                Greenheys Business Centre,<br />
                Pencroft Way, Manchester,<br />
                England, M15 6JJ, UK.
              </p>
              <div className="text-base space-y-1 font-semibold text-slate-800">
                <p>📞 +44 161 394 0786</p>
                <p className="pt-2 text-slate-500 font-medium">For partnership inquiry:</p>
                <a href="mailto:ganesh@guires.uk" className="text-cyan-600 hover:underline block">
                  ganesh@guires.uk
                </a>
              </div>
            </div>

            {/* US Address Card */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#004d40]">
              <h4 className="font-extrabold text-slate-900 tracking-wide text-lg">US</h4>
              <div className="w-full h-[1px] bg-slate-200"></div>
              <p className="text-base text-slate-700 font-semibold leading-relaxed">
                1341 W Mockingbird Lane,<br />
                Suite 600W, Dallas,<br />
                Texas, 75247.
              </p>
              <div className="text-base font-semibold text-slate-800">
                <p>📞 +1-972-502-9262</p>
              </div>
            </div>

            {/* India Address Card */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#004d40]">
              <h4 className="font-extrabold text-slate-900 tracking-wide text-lg">INDIA</h4>
              <div className="w-full h-[1px] bg-slate-200"></div>
              <p className="text-base text-slate-700 font-semibold leading-relaxed">
                10, Kutty Street,<br />
                Nungambakkam,<br />
                Chennai – 600 034
              </p>
              <div className="text-base space-y-1 font-semibold text-slate-800">
                <p>📞 +91 9884350006</p>
                <p>📞 +044-48596768</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}