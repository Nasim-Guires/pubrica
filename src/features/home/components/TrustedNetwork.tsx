import React from 'react';
import Container from '@/components/common/Container';

export default function TrustedNetwork() {
  const groups = [
    {
      title: '40+ Journals & Publishers',
      logos: [
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'IET' },
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'Universitas Airlangga' },
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'Future Medicine' },
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'Korea University' },
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'Sungkyunkwan University' },
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'Nagoya University' },
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'KFUPM' },
        { src: '/images/WhoWeWorkFor/image-1.webp', alt: 'Yonsei University' },
      ],
    },
    {
      title: '500+ Universities',
      logos: [
        { src: '/images/logos/korea-uni.png', alt: 'Korea University' },
        { src: '/images/logos/iet.png', alt: 'IET' },
        { src: '/images/logos/yonsei.png', alt: 'Yonsei University' },
        { src: '/images/logos/skku.png', alt: 'Sungkyunkwan University' },
        { src: '/images/logos/airlangga.png', alt: 'Universitas Airlangga' },
        { src: '/images/logos/kfupm.png', alt: 'KFUPM' },
        { src: '/images/logos/future-medicine.png', alt: 'Future Medicine' },
        { src: '/images/logos/nagoya.png', alt: 'Nagoya University' },
      ],
    },
    {
      title: '1,100+ Societies',
      logos: [
        { src: '/images/logos/rsc.png', alt: 'Royal Society of Chemistry' },
        { src: '/images/logos/iop.png', alt: 'IOP Institute of Physics' },
        { src: '/images/logos/kamje.png', alt: 'KAMJE' },
        { src: '/images/logos/cope.png', alt: 'COPE' },
        { src: '/images/logos/science.png', alt: 'Science' },
        { src: '/images/logos/atlas-korea.png', alt: 'Atlas Korea' },
        { src: '/images/logos/seg.png', alt: 'SEG' },
        { src: '/images/logos/optica.png', alt: 'Optica' },
      ],
    },
  ];

  return (
    <section className="bg-white py-20 relative select-none overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full font-sans">
          {groups.map((group, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center px-6 ${
                idx !== groups.length - 1 ? 'md:border-r border-gray-200' : ''
              }`}
            >
              {/* Internal Category Stats Label */}
              <h3 className="text-emerald-950 font-bold text-sm md:text-base tracking-wide text-center font-display mb-8">
                {group.title}
              </h3>

              {/* Logo Grid Sub-Panel */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full items-center justify-items-center max-w-[280px]">
                {group.logos.map((logo, lIdx) => (
                  <div key={lIdx} className="h-12 w-full flex items-center justify-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}