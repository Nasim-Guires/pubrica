import React from 'react';
import { Service } from '@/lib/data-service';
import HeroBanner from '@/components/common/HeroBanner';

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <HeroBanner
      title={service.title}
      description={service.heroDescription}
      headingAs="h1"
    />
  );
}