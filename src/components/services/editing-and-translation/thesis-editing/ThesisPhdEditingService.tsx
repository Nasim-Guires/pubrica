import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  title: string;
  institution: string;
  experience: string;
  papersEdited: string;
  avatarUrl: string;
  flagUrl: string;
}

interface ServiceCard {
  title: string;
  description: string;
  accentColor: string; // Tailwind border accent class
}

const services: ServiceCard[] = [
  {
    title: 'Thesis',
    description:
      'Our Thesis Editing service provides a well-written manuscript that meets global publication standards.',
    accentColor: 'border-l-amber-400',
  },
  {
    title: 'Dissertation',
    description:
      'Our editors ensure that your dissertation meets all the academic requirements, is well-written, and has no typos or grammatical errors.',
    accentColor: 'border-l-indigo-400',
  },
  {
    title: 'Proposals',
    description:
      'Your proposal is matched with editors who specialize in the same subject area, so they are fluent, not only in English but also in the terminology and conventions used in your field.',
    accentColor: 'border-l-rose-400',
  },
];

const documentTypes = [
  { label: 'Dissertations' },
  { label: 'Book manuscripts' },
  { label: 'Scientific articles' },
  { label: 'Abstracts' },
  { label: 'Research proposals' },
];

const experts: Expert[] = [
  {
    id: '1',
    name: 'Dr. Arjun Mehta',
    title: 'PhD in Clinical Research',
    institution: 'All India Institute of Medical Sciences, India',
    experience: '5+ Years of Experience',
    papersEdited: '600+ Papers Edited',
    avatarUrl: '/images/editing-and-translation/thesis-editing/dr-arjun-mehta-.png',
    flagUrl: '/images/editing-and-translation/thesis-editing/india.png',
  },
  {
    id: '2',
    name: 'Dr. Kavita Reddy',
    title: 'PhD in Biomedical Sciences',
    institution: 'University of Cambridge, UK',
    experience: '6+ Years of Experience',
    papersEdited: '750+ Papers Edited',
    avatarUrl: '/images/editing-and-translation/thesis-editing/kavita-reddy-1-1.png',
    flagUrl: '/images/editing-and-translation/thesis-editing/uk-flag-.png',
  },
  {
    id: '3',
    name: 'Dr. Sarah Thompson',
    title: "Master's in Molecular Biology",
    institution: 'Harvard University, USA',
    experience: '4+ Years of Experience',
    papersEdited: '550+ Papers Edited',
    avatarUrl: '/images/editing-and-translation/thesis-editing/Dr.-Sarah-Thompson-1.png',
    flagUrl: '/images/editing-and-translation/thesis-editing/usa-.png',
  },
];

export default function ThesisPhdEditingService() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans">
      
      {/* Header Section */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003B46] mb-4 tracking-tight">
          Professional PhD Thesis Editing And Proofreading Services
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
          Pubrica thesis editing experts understand your particular requirements as a student. 
          Your thesis will be carefully proofread, and we will correct all errors in grammar, 
          spelling, punctuation, and typography. In addition, your document will be edited to 
          improve the style, sentence structure, clarity, and coherence. Our thesis editors 
          will also provide you with detailed feedback to help further refine your thesis.
        </p>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 bg-white rounded-lg border border-slate-100 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 ${service.accentColor}`}
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-4">
          Who Should Opt For Our PhD Thesis Editing Services?
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          Our PhD thesis editing services are designed especially for academic and scientific authors 
          and early career researchers aiming to improve the clarity, structure, and flow of their 
          thesis manuscripts. This service gives you access to the largest global team of native 
          English editors, many of whom are published in top journals. Researchers on a tight 
          schedule can trust that our expert PhD thesis editors will not only correct language 
          errors, but also adhere to your university&apos;s formatting guidelines and address 
          content-level issues that can dilute the impact of your research.
        </p>
      </section>

      {/* Types Of Documents Section */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-6">
          Types Of Documents You Can Use For The Thesis Editing Service
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {documentTypes.map((doc, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-3 rounded-md">
              <ArrowRightCircle className="w-6 h-6 text-slate-900 shrink-0" />
              <span className="text-base font-semibold text-slate-800">{doc.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experts Section */}
      <section className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-3">
            Meet Our Thesis Editing Experts
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We will match you with the best thesis editing expert to meet your needs based on your 
            field of study, selected service, and preferences. The expert will edit your thesis and 
            return the proofread thesis, ready for submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col justify-between"
            >
              <div>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={expert.avatarUrl}
                    alt={expert.name}
                    fill
                    sizes="80px"
                    className="rounded-full object-cover border-2 border-slate-100"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-4 overflow-hidden rounded shadow-sm">
                    <Image
                      src={expert.flagUrl}
                      alt="Country Flag"
                      width={24}
                      height={16}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{expert.name}</h3>
                <p className="text-xs font-semibold text-slate-600 mt-1">{expert.title}</p>
                <p className="text-xs text-slate-500 mt-1">{expert.institution}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-600 font-medium flex justify-around mb-4">
                  <span>{expert.experience}</span>
                  <span className="text-slate-300">|</span>
                  <span>{expert.papersEdited}</span>
                </div>
                <Link
                  href="/about-us/our-editors"
                  className="text-xs font-bold text-slate-800 hover:text-cyan-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Work / Preview Section */}
      <section className="mb-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-3">
            Thesis Editing Services Sample Work
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Refine your thesis to perfection with Pubrica&apos;s meticulous editing services. 
            Elevate your research with expert guidance and precise academic polish.
          </p>
        </div>

        {/* Mock Editor Document Viewport */}
        <div className="bg-slate-100 rounded-xl p-4 sm:p-6 border border-slate-200 shadow-inner">
          <div className="bg-slate-200 text-center py-3 text-slate-700 font-bold text-base sm:text-lg rounded-t-lg mb-6">
            Checkout Our Sample Work of the Thesis Editing service
          </div>

          <div className="relative w-full aspect-[1379/576] bg-white rounded-b-lg overflow-hidden border border-slate-200">
            <Image
              src="/images/editing-and-translation/thesis-editing/Graphical-Abstract-Sample-Work.png"
              alt="Thesis editing services sample work"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

    </div>
  );
}