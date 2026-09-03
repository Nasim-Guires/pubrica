'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';

// --- Data Objects ---
interface DesignOption {
  id: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
  includedPackage: string[];
  price: string;
  bgColor: string;
  borderColor: string;
  buttonBg: string;
}

const designOptionsData: DesignOption[] = [
  {
    id: '2d-abstract',
    badge: '⭐',
    title: '2D Graphical Abstract',
    description:
      'A concise, visual summary of the key findings of your manuscript using high-quality, two-dimensional graphics suitable for journal submission and popular among researchers.',
    points: [
      'Ideal for a wide array of journals and highly favoured by researchers.',
      'Clear and comprehensible, facilitating swift understanding of your research essence by readers.',
      'Suitable for illustrating relationships, processes, or data that lend themselves well to flat graphical representation.',
      'Retain full copyright of the completed graphic, allowing unrestricted usage and sharing without the need for additional permissions.',
      'Optimized for editorial submission platforms such as Elsevier, Wiley, Springer.',
      'Suitable for bioRxiv, medRxiv, and other preprint repositories.',
    ],
    includedPackage: [
      '2D graphical abstract file',
      'Accompanying letter from our research communication expert for further explanation',
    ],
    price: '$150',
    bgColor: 'bg-emerald-50/40',
    borderColor: 'border-emerald-200',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    id: '3d-abstract',
    badge: '💎',
    title: '3D Graphical Abstract',
    description:
      'One-of-a-kind custom 3D graphics ensure the most realistic and accurate representation of your research paper, creating visual impact in conferences and on social media too.',
    points: [
      'Ideal for showcasing intricate anatomical and molecular structures, as well as spatial relationships.',
      'Retain ownership of both individual vector elements and the final 3D image.',
    ],
    includedPackage: [
      '3D graphical abstract file',
      'Accompanying letter from our research communication expert',
      'Comprehensive step-by-step development materials, including rough sketches and initial drafts',
    ],
    price: '$250',
    bgColor: 'bg-indigo-50/40',
    borderColor: 'border-indigo-200',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
  },
];

const publishersData = [
  {
    name: 'Wiley',
    logoUrl: '/images/publication-support/art-work-preparation/Wiley.png',
  },
  {
    name: 'Sage Publishing',
    logoUrl: '/images/research-impact/graphical-abstract/Sage-Publishing.png',
  },
  {
    name: 'BMJ',
    logoUrl: '/images/research-impact/graphical-abstract/bmj-.png',
  },
  {
    name: 'Elsevier',
    logoUrl: '/images/research-impact/graphical-abstract/Elsevier-.png',
  },
  {
    name: 'Hindawi',
    logoUrl: '/images/research-impact/graphical-abstract/Hindawi.png',
  },
];

const whyChoosePoints = [
  'Proficient in scientific illustration with specialized expertise.',
  'Customized graphical abstracts to the requirements of your selected journal.',
  'Formats are available in JPG, PDF, PNG, and TIFF.',
  'Ensured customer satisfaction with our guarantee.',
  'Studies show that research papers featuring graphical abstracts get 3x more downloads and 8x more social media shares, driving higher citation rates and better academic recognition.',
  'With 8,000 research papers published every day, graphical abstracts help you stand out and make your research understandable to a global interdisciplinary audience.',
];

export default function GraphicalAbstractDesignOptions() {
  return (
    <section className="w-full bg-white text-slate-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-16">

      {/* 1. Choose Design Options Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0a231c] mb-10">
          Choose From One of Our Graphical Abstract Design Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {designOptionsData.map((option) => (
            <div
              key={option.id}
              className={`p-6 sm:p-8 rounded-xl border ${option.borderColor} ${option.bgColor} flex flex-col justify-between shadow-sm`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{option.badge}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a231c]">
                    {option.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {option.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {option.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200/60">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Included in your package:
                  </h4>
                  <ul className="space-y-1.5">
                    {option.includedPackage.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="text-slate-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 space-y-4">
                <div className="text-2xl font-bold text-[#0a231c]">
                  {option.price}
                </div>
                <Link
                  href="/order-now"
                  className={`inline-block w-32 text-center py-2.5 px-4 text-sm font-semibold text-white rounded-md transition-colors ${option.buttonBg}`}
                >
                  Place Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Top Publishers Banner */}
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0a231c]">
          We Have Developed A Graphical Abstract For These Top Publishers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {publishersData.map((pub, idx) => (
            <div
              key={idx}
              className="p-4 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Section Container */}
              <div className="relative w-full h-16 bg-slate-50 rounded flex items-center justify-center overflow-hidden">
                <Image
                  src={pub.logoUrl}
                  alt={`${pub.name} Logo`}
                  fill
                  sizes="150px"
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs font-semibold text-slate-700">{pub.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* 3. Why Choose Our Services */}
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0a231c]">
          Why Choose Our Graphical Abstract Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {whyChoosePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Graphic Illustration Image Section */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-72 bg-indigo-50/50 border border-indigo-100 rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
              <Image
                src="/images/research-impact/graphical-abstract/Why-Choose-Our-Graphical-Abstract-Services.png"
                alt="Graphical abstract impact illustration"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Sample Work & Download Report CTA */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/research-impact/graphical-abstract/Graphical-Abstract-Service-Sample-Work.png",
          alt: "Graphical Abstract Service Sample Work",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading: "Graphical Abstract Service Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/anesthetic-management-in-pregnant-woman/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              { text: "Explore our " },
              {
                text: "graphical abstract samples",
                url: "/insights/sample-work/placebo-challenges-investigator/",
              },
              {
                text: ", professionally designed to align with your target journal's formatting guidelines, scientific accuracy standards, and visual impact expectations.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />

    </section>
  );
}