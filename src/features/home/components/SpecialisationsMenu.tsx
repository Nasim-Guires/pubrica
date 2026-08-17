import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Container from '@/components/common/Container';

export default function SpecialisationsMenu() {
  const categories = [
    { label: 'Medical Device', href: '#medical-device' },
    { label: 'Pharmaceutical', href: '#pharmaceutical' },
    { label: 'Generics', href: '#generics' },
    { label: 'Genomics', href: '#genomics' },
    { label: 'View All', href: '#all-services' },
  ];

  return (
    <div className="w-full bg-white select-none">
      
      {/* Featured Services banner */}
      <section className="relative w-full py-20 overflow-hidden">
        <Image
          src="/images/home/bg-5.jpg"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <Container className="relative z-10 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display leading-tight">
            Our Featured Services
          </h2>
          
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans max-w-2xl mt-4">
            We also possess a range of specialisations in which we demonstrate exceptional proficiency.
          </p>

          {/* Categories Grid */}
          <div className="w-full max-w-4xl mt-10 font-sans flex flex-col items-center gap-4">
            {/* Top Row: 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {categories.slice(0, 3).map((cat, idx) => (
                <a
                  key={idx}
                  href={cat.href}
                  className="bg-white text-gray-900 font-medium text-xs md:text-sm py-4 px-6 flex items-center justify-center gap-2 rounded shadow-sm hover:bg-gray-50 hover:shadow transition-all duration-300 group"
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-800 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ChevronRight className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="group-hover:text-emerald-900 transition-colors">
                    {cat.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Row: 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              {categories.slice(3).map((cat, idx) => (
                <a
                  key={idx}
                  href={cat.href}
                  className="bg-white text-gray-900 font-medium text-xs md:text-sm py-4 px-6 flex items-center justify-center gap-2 rounded shadow-sm hover:bg-gray-50 hover:shadow transition-all duration-300 group"
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-800 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ChevronRight className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="group-hover:text-emerald-900 transition-colors">
                    {cat.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. BOTTOM PORTION: Exact Layout & Styling Match to Image */}
      <section className="py-20 bg-white">
        <Container className="w-full max-w-6xl text-left font-sans">
          
          {/* Header Area with Flat Accent Rule */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <h3 className="text-3xl font-bold tracking-tight text-emerald-950 font-display whitespace-nowrap">
              Why Choose Pubrica?
            </h3>
            <div className="hidden md:block w-full h-[1.5px] bg-emerald-950/80 mt-2" />
          </div>
          
          {/* Paragraph Context */}
          <p className="text-sm text-gray-700 leading-relaxed mt-6 max-w-5xl font-medium">
            Pubrica has seen the depths of research and publishing. We affirm that our expertise has explored every aspect of research and scholarly contribution. Therefore, we proudly guarantee that we will help you achieve scholarly heights.
          </p>

          {/* Core Feature List Block */}
          <ul className="mt-8 space-y-6 text-sm text-gray-700 list-none pl-0 max-w-5xl">
            <li className="leading-relaxed flex items-start gap-3">
              <span className="text-emerald-950 font-black mt-0.5 flex-shrink-0 select-none text-base">•</span>
              <div>
                <strong className="text-gray-900 font-bold font-display">Expert Guidance:</strong> Our teams are composed of experienced individuals with diverse backgrounds. Their commitment to excellence and teamwork enables us to deliver innovative results each time. With our experts, we deliver unparalleled results.
              </div>
            </li>
            
            <li className="leading-relaxed flex items-start gap-3">
              <span className="text-emerald-950 font-black mt-0.5 flex-shrink-0 select-none text-base">•</span>
              <div>
                <strong className="text-gray-900 font-bold font-display">Highly Secure Environment:</strong> Pubrica’s security protocols ensure your privacy and confidentiality as a top priority. We utilise advanced security measures to guarantee that your sensitive information remains fully protected.
              </div>
            </li>
            
            <li className="leading-relaxed flex items-start gap-3">
              <span className="text-emerald-950 font-black mt-0.5 flex-shrink-0 select-none text-base">•</span>
              <div>
                <strong className="text-gray-900 font-bold font-display">Customer Support:</strong> We are open to hearing you out at any time, as we offer uninterrupted 24/7 support. With our knowledgeable virtual assistants, we ensure your queries are resolved efficiently and effectively, ensuring your complete satisfaction.
              </div>
            </li>
          </ul>

        </Container>
      </section>

    </div>
  );
}