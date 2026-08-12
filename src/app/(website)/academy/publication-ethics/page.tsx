'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface EthicsCard {
  date: string;
  image: string;
  title: string;
}

const allEthicsCards: EthicsCard[] = [
  // Page / Slide 1 (4 items)
  {
    date: "April 1, 2021",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
    title: "Use of ICMJE URM for ethical guidance",
  },
  {
    date: "April 1, 2021",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
    title: "Use of GPP3 for ethical guidance",
  },
  {
    date: "April 7, 2020",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
    title: "Surgical Management in Patients with Cardiovascular Complications: Exemplary Introduction section of your Literature Review.",
  },
  {
    date: "October 31, 2018",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
    title: "Pre-or post-publication Peer review of Scientific Manuscripts: Thoughts on Pros and Cons",
  },
  // Page / Slide 2 (4 items)
  {
    date: "October 1, 2018",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
    title: "The Process of a scientific manuscript evaluation in a high-impact Journal - What Matter's for Editors & Peer reviewers",
  },
  {
    date: "July 26, 2018",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
    title: "How to select the right journal for publication?",
  },
  {
    date: "November 3, 2018",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
    title: "Why Retractions Occurs",
  },
  {
    date: "November 3, 2018",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400",
    title: "Enhancing Journal Impact Factor Ethically",
  },
  // Page / Slide 3 (4 items)
  {
    date: "November 3, 2018",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
    title: "Misconduct in Research",
  },
  {
    date: "November 3, 2018",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    title: "Preventing Conflict of Interest during Peer Reviewing",
  },
  {
    date: "November 2, 2018",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400",
    title: "Skirting the Scope of Copyright Infringement",
  },
  {
    date: "November 2, 2018",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400",
    title: "Honorary and Ghost Authorship: Is it Ethical?",
  },
  // Page / Slide 4 (4 items)
  {
    date: "November 2, 2018",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    title: "Honorary and Ghost Authorship: Is it Ethical?",
  },
  {
    date: "November 2, 2018",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400",
    title: "Author and Co-Author: Are They One and the Same?",
  },
  {
    date: "November 2, 2018",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
    title: "Role of Ethics in Research",
  },
  {
    date: "November 2, 2018",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=400",
    title: "The murky side of publishing",
  },
];

export default function PublicationEthicsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(allEthicsCards.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentCards = allEthicsCards.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={handlePrev}
            className="p-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCards.map((card, index) => (
            <div key={index} className="bg-white border border-gray-200 flex flex-col justify-between p-4 shadow-sm">
              <div>
                <span className="text-xs text-gray-500 block mb-2">{card.date}</span>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 line-clamp-3">
                  {card.title}
                </h3>
              </div>
              <div>
                <button className="bg-gray-200 text-gray-700 text-xs font-medium py-1.5 px-4 hover:bg-gray-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <span>⊞</span> Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clickable Dots Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all cursor-pointer ${currentIndex === index
                  ? 'w-2.5 h-2.5 bg-teal-600'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}