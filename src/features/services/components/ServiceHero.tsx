import React from 'react';
import Container from '@/components/common/Container';
import { Service } from '@/lib/data-service';

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-r from-[#3a4a49] via-[#5a6f6e] to-[#3a4a49] text-white py-8 sm:py-12 select-none">
      <Container className="max-w-5xl px-4">
        <div className="border border-white/50 px-6 py-6 sm:py-8 text-center max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-white">
            {service.title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-200 mt-2.5 max-w-3xl mx-auto leading-relaxed">
            {service.heroDescription}
          </p>
        </div>
      </Container>
    </section>
  );
}