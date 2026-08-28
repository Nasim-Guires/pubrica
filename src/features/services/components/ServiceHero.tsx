import React from 'react';
import Container from '@/components/common/Container';
import { Service } from '@/lib/data-service';

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-r from-zinc-900 via-slate-800 to-zinc-900 text-white py-8 sm:py-6 select-none">
      <Container className="max-w-5xl px-4">
        <div className="border border-white/60 px-6 py-6 sm:py-8 text-center max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
            {service.title}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 max-w-3xl mx-auto leading-relaxed">
            {service.heroDescription}
          </p>
        </div>
      </Container>
    </section>
  );
}