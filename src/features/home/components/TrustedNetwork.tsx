import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';

export default function TrustedNetwork() {
  const groups = [
    {
      title: '40+ Journals & Publishers',
      image: '/images/home/universities.jpg',
      alt: 'Journals and Publishers Logos',
    },
    {
      title: '500+ Universities',
      image: '/images/Home/university.webp',
      alt: 'Universities Logos',
    },
    {
      title: '1,100+ Societies',
      image: '/images/home/Socities.jpg',
      alt: 'Societies Logos',
    },
  ];

  return (
    <section className="bg-white py-10 relative select-none overflow-hidden">
      <Container className="flex flex-col items-center">
        
        {/* Centralized Global Header Blocks */}
        <div className="text-center max-w-4xl mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-emerald-950 font-display leading-tight">
            Trusted by 1600+ Journals, Universities, and Associations
          </h2>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-sans mt-4 max-w-3xl mx-auto">
            Research is growing exponentially amid intense competition for industrial breakthroughs, yet our expertise continues to set new standards through an unwavering commitment to excellence.
          </p>
        </div>

        {/* 3-Column Split Category Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full font-sans max-w-6xl">
          {groups.map((group, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center px-4 md:px-8 ${
                idx !== groups.length - 1 ? 'md:border-r border-gray-200' : ''
              }`}
            >
              {/* Internal Category Stats Label */}
              <h3 className="text-emerald-950 font-bold text-sm md:text-base tracking-wide text-center font-display mb-6">
                {group.title}
              </h3>

              {/* Single Image Card Box Container (Color filter removed) */}
              <div className="relative w-full bg-white border border-gray-100 shadow-sm rounded-lg p-6 min-h-[260px]">
                <Image
                  src={group.image}
                  alt={group.alt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}