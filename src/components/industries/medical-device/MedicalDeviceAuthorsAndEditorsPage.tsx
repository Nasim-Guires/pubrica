"use client"

import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const WhereOurAuthorsPublishAndEditors: NextPage = () => {
  const [showAllEditors, setShowAllEditors] = useState(false);

  const authorPublications = [
    {
      title: 'Novel Approaches to Combat Medical Device-Associated Biofilms',
      author: 'Xin Li, Luyao Sun, Peng Zhang, and Yang Wang',
      journal: 'Coatings',
      publisher: 'MDPI',
      impactFactor: '2.8',
      image: '/images/industries/medical-device/sample-works.png'
    }
  ];

  const expertEditors = [
    {
      name: 'Dr. Ravi Kumar',
      qualification: 'PHD, FIAMS, DMRD, DMRE, DNB - Medical',
      experience: '20 years of experience',
      manuscripts: '100+ manuscripts edited',
      image: '/images/industries/medical-device/DR-RAVIKUMAR.png'
    },
    {
      name: 'Dr. Isaac Newton',
      qualification: 'MD - Medical',
      experience: '25 Years of Experience',
      manuscripts: '100+ manuscripts edited',
      image: '/images/industries/medical-device/DR-ISACC-NEWTON.png'
    },
    {
      name: 'Dr. Krishna',
      qualification: 'MD - Medical',
      experience: '15 Years of Experience',
      manuscripts: '100+ manuscripts edited',
      image: '/images/industries/medical-device/DR-KRISHNA.png'
    }
  ];

  return (
    <div className="w-full bg-white text-gray-800 py-7 px-4 md:px-8 space-y-10">

      {/* WHERE OUR AUTHORS PUBLISH SECTION */}
      ```tsx
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            Where Our Authors Publish
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our authors share Pubrica&apos;s expert content in top-tier journals,
            conferences, and platforms, maximizing and amplifying its recognition and
            reach. Our placement will enhance our visibility and elevate our standing
            in an authoritative capacity.
          </p>
        </div>

        <div className="space-y-6">
          {authorPublications.map((pub, idx) => (
            <div
              key={idx}
              className="bg-[#fafcfa] border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center"
            >
              <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-inner flex items-center justify-center p-2">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="space-y-3 text-sm md:text-base text-gray-700">
                <div>
                  <span className="font-bold text-gray-900">Paper Title: </span>
                  <span className="text-gray-800">{pub.title}</span>
                </div>

                <div>
                  <span className="font-bold text-gray-900">Author: </span>
                  <span>{pub.author}</span>
                </div>

                <div>
                  <span className="font-bold text-gray-900">Journal Name: </span>
                  <span className="text-[#1b3b32] font-semibold">
                    {pub.journal}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-gray-900">Publisher: </span>
                  <span>{pub.publisher}</span>
                </div>

                <div>
                  <span className="font-bold text-gray-900">Impact factor: </span>
                  <span>{pub.impactFactor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      ```


      {/* OUR EXPERT MEDICAL EDITORS SECTION */}
    
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            Our Expert Medical Editors
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Pubrica&apos;s team of industry specialists offers unrivalled expertise
            and perspectives to provide complete solutions with precision and
            originality. Through a mix of both experience and specialization, they
            strive for excellence in everything they do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAllEditors ? expertEditors : expertEditors.slice(0, 3)).map(
            (editor, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200/60 rounded-xl p-6 flex flex-col items-start shadow-sm hover:border-gray-300 transition-all"
              >
                <div className="flex items-center space-x-4 mb-4 w-full">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                    <Image
                      src={editor.image}
                      alt={editor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-base">
                      {editor.name}
                    </h3>

                    <p className="text-xs text-[#1b3b32] font-semibold">
                      Medical
                    </p>
                  </div>
                </div>

                <div className="w-full space-y-1.5 text-xs text-gray-600 pt-3 border-t border-gray-100">
                  <p>{editor.experience}</p>
                  <p>{editor.manuscripts}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    


    </div>
  );
};

export default WhereOurAuthorsPublishAndEditors;