import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTA({
  title = 'Ready to Accelerate Your Research Impact?',
  description = 'Join thousands of clinicians, professors, and pharmaceutical companies who rely on Pubrica to compile clinical reports, systematic reviews, and publication-ready research.',
}: CTAProps) {
  return (
    <section className="bg-primary-950 text-white py-8 relative overflow-hidden select-none">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800/20 rounded-full blur-3xl translate-x-12 -translate-y-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -translate-x-12 translate-y-12 pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white max-w-3xl leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-primary-200 leading-relaxed font-sans max-w-2xl mt-4">
          {description}
        </p>

        {/* Benefits Quick Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-sm text-primary-100 font-sans">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-secondary-500" />
            <span>24-Hour Custom Proposal</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-secondary-500" />
            <span>Free Journal Formatting Audit</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-secondary-500" />
            <span>100% Confidentiality Assured</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Link href="/contact">
            <Button
              variant="accent"
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              className="font-bold shadow-lg"
            >
              Get Free Consultation
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-800 hover:bg-primary-900/60 text-white font-bold"
            >
              Request Pricing Quote
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
