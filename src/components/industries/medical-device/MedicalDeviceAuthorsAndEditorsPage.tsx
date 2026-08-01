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
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const expertEditors = [
    {
      name: 'Dr. Ravi Kumar',
      qualification: 'PHD, FIAMS, DMRD, DMRE, DNB - Medical',
      experience: '20 years of experience',
      manuscripts: '100+ manuscripts edited',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Dr. Isaac Newton',
      qualification: 'MD - Medical',
      experience: '25 Years of Experience',
      manuscripts: '100+ manuscripts edited',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Dr. Krishna',
      qualification: 'MD - Medical',
      experience: '15 Years of Experience',
      manuscripts: '100+ manuscripts edited',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="w-full bg-white text-gray-800 py-16 px-4 md:px-8 space-y-20">
      
      {/* WHERE OUR AUTHORS PUBLISH SECTION */}
      <section className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32]">
            Where Our Authors Publish
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
          </p>
        </div>

        <div className="space-y-6">
          {authorPublications.map((pub, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-[240px] h-[300px] relative shrink-0 bg-gray-100 rounded border border-gray-200 overflow-hidden">
                <Image 
                  src={pub.image} 
                  alt={pub.title} 
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#d4af37] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  {pub.journal}
                </div>
              </div>

              <div className="space-y-4 flex-1 text-sm md:text-base text-gray-700">
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
                  <span className="text-[#1b3b32] font-semibold">{pub.journal}</span>
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

      {/* OUR EXPERT MEDICAL EDITORS SECTION */}
      <section className="max-w-6xl mx-auto space-y-10 pt-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32]">
            Our Expert Medical Editors
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pubrica&apos;s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAllEditors ? expertEditors : expertEditors.slice(0, 3)).map((editor, idx) => (
            <div key={idx} className="bg-[#e4ede8] border border-[#d2e2d8] rounded-2xl p-6 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 border-2 border-white shadow">
                    <Image 
                      src={editor.image} 
                      alt={editor.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{editor.name}</h3>
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <span>🇺🇸</span>
                      <span>Medical</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs font-medium text-gray-700 leading-tight">
                  {editor.qualification}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d2e2d8] flex justify-between text-xs font-semibold text-gray-800">
                <div>{editor.experience}</div>
                <div>{editor.manuscripts}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default WhereOurAuthorsPublishAndEditors;