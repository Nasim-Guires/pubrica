import React from 'react';
import Image from 'next/image';
import { 
  ArrowRightCircle, 
  FileText, 
  BookOpen, 
  FileCode, 
  FileCheck, 
  Search 
} from 'lucide-react';

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
  { label: 'Dissertations', icon: FileText },
  { label: 'Book manuscripts', icon: BookOpen },
  { label: 'Scientific articles', icon: FileCode },
  { label: 'Abstracts', icon: Search },
  { label: 'Research proposals', icon: FileCheck },
];

const experts: Expert[] = [
  {
    id: '1',
    name: 'Dr. Arjun Mehta',
    title: 'PhD in Clinical Research',
    institution: 'All India Institute of Medical Sciences, India',
    experience: '5+ Years of Experience',
    papersEdited: '600+ Papers Edited',
    avatarUrl: '/images/experts/arjun-mehta.jpg',
    flagUrl: 'https://flagcdn.com/w40/in.png',
  },
  {
    id: '2',
    name: 'Dr. Kavita Reddy',
    title: 'PhD in Biomedical Sciences',
    institution: 'University of Cambridge, UK',
    experience: '6+ Years of Experience',
    papersEdited: '750+ Papers Edited',
    avatarUrl: '/images/experts/kavita-reddy.jpg',
    flagUrl: 'https://flagcdn.com/w40/gb.png',
  },
  {
    id: '3',
    name: 'Dr. Sarah Thompson',
    title: "Master's in Molecular Biology",
    institution: 'Harvard University, USA',
    experience: '4+ Years of Experience',
    papersEdited: '550+ Papers Edited',
    avatarUrl: '/images/experts/sarah-thompson.jpg',
    flagUrl: 'https://flagcdn.com/w40/us.png',
  },
];

export default function ThesisPhdEditingService() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans">
      
      {/* Header Section */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#003B46] mb-4 tracking-tight">
          Professional PhD Thesis Editing And Proofreading Services
        </h1>
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
                <button
                  type="button"
                  className="text-xs font-bold text-slate-800 hover:text-cyan-700 transition-colors"
                >
                  Read More
                </button>
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

          <div className="bg-white p-6 sm:p-10 rounded-b-lg shadow-sm max-w-4xl mx-auto relative border border-slate-200">
            {/* Header / Logo placeholder */}
            <div className="flex justify-end mb-6">
              <div className="bg-[#003B46] text-white px-3 py-1 font-extrabold text-sm rounded tracking-wide">
                PUBRICA
                <span className="block text-[8px] font-normal tracking-normal text-right">Knowledge Works</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-center underline mb-6 text-slate-900">
              Proof Reading
            </h3>

            {/* Proofread Sample Text */}
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-1">
              The light transmittance through tissue is dictated by two collective properties,; scattering and absorption. 
              In the visible to near-infrared spectrum, tissue&apos;s scattering{' '}
              <span className="line-through text-red-500">reduces</span>{' '}
              <span className="text-sky-600 font-semibold">decreases</span> as wavelength increases,{' '}
              <span className="line-through text-red-500">leading to; therefore,</span> greater line-of-sight penetration{' '}
              <span className="text-sky-600">at longer wavelength,</span>{' '}
              <span className="line-through text-amber-600">can be anticipated at greater wavelengths.</span> However, 
              absorption of light by tissue constituents, ({' '}
              <span className="line-through text-amber-600">ie.</span>{' '}
              <span className="text-sky-600 font-semibold">such as</span> water{' '}
              <span className="text-sky-600 font-semibold">and</span>, hemoglobin, has complex spectral profiles,{' '}
              <span className="line-through text-amber-600">in which</span>{' '}
              <span className="text-sky-600 font-semibold">with</span> increased absorption occurs as wavelength increases from visible to{' '}
              <span className="line-through text-amber-600">near-infrared</span>
              <span className="text-sky-600">near-infrared</span>. {' '}
              <span className="line-through text-amber-600">Identifying</span>{' '}
              <span className="text-sky-600 font-semibold">Finding</span> the wavelength{' '}
              <span className="text-sky-600">that provides</span>{' '}
              <span className="line-through text-amber-600">which renders</span> maximal target level transmission through deep tissue{' '}
              <span className="text-sky-600">at passage at</span> a tolerable surface dosage should be experimentally examined. 
              Such <span className="text-sky-600">an</span> examination requires dosimetry investigations relevant to the clinical setting.,{' '}
              <span className="line-through text-amber-600">because m</span>
              <span className="font-semibold">M</span>easurements of{' '}
              <span className="line-through text-amber-600">light</span> the transmission{' '}
              <span className="line-through text-amber-600">of light</span> from the skin to the spinal cord level conducted with small animals{' '}
              <span className="line-through text-amber-600">can hardly</span>
              <span className="text-sky-600 font-semibold">are not</span>{' '}
              <span className="line-through text-amber-600">be easily</span>{' '}
              <span className="text-sky-600 font-semibold">translatable</span>
              <span className="line-through text-amber-600">ed</span> to human use.{' '}
              <span className="text-sky-600">Therefore,</span> quantification of the intra-spinal irradiance should be conducted in an anatomic structure of an animal much closer in size to human. Towards{' '}
              <span className="line-through text-amber-600">such a</span>{' '}
              <span className="text-sky-600 font-semibold">the</span> goal of intra-spinal{' '}
              <span className="text-sky-600">target-level</span> dosimetry of PBMT for SCI, our group developed a flexible{' '}
              <span className="line-through text-amber-600">9</span>
              <span className="text-sky-600 font-semibold">nine</span>-channel photodetector probe [19],{' '}
              <span className="text-sky-600">x cm in length, designed for intra-spinal dosimetry.</span> Using this intra-spinal probe, we measured the transcutaneous transmission of 980nm PBMT light to the level of{' '}
              <span className="text-sky-600">the</span> spinal canal along the thoracic to lumbar segment{' '}
              <span className="line-through text-amber-600">of the interior spinal canal</span> in six cadaver dogs [20]. Our measurements indicated that non-contact transmission of 980nm with skin intact was as low as 12% of the non-contact transmission without skin.{' '}
              <span className="text-sky-600">Additionally, intact, and</span> contact application increased{' '}
              <span className="text-sky-600">the</span> transmission by{' '}
              <span className="line-through text-amber-600">a up to 67%</span>{' '}
              <span className="text-sky-600 font-semibold">maximum of 67%</span> compared to non-contact application. Under a maximal surface irradiance of 3.14 W/cm2,{' '}
              <span className="line-through text-amber-600">resulting</span>{' '}
              <span className="text-sky-600 font-semibold">resulted</span> from 10W of laser power{' '}
              <span className="text-sky-600">applied ying via a</span>{' '}
              <span className="text-sky-600 font-semibold">to a</span> conic treatment head, the mode of contact application transmitted a maximum irradiance of 85.4 ± 139.1 μW/cm2 to the spinal canal. Thise information{' '}
              <span className="text-sky-600">gathered</span> highlights the need to clinically consider the impact of skin transmission and contact application techniques when attempting to treat spinal cord disease with PBMT.
            </p>

            <div className="mt-8 text-center text-xs text-slate-400">
              Copyright © 2025 pubrica. No part of this document may be published without permission of the author
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}