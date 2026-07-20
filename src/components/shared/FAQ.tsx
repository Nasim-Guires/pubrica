import React from 'react';
import Container from '@/components/common/Container';
import Accordion, { AccordionItem } from '@/components/common/Accordion';
import { GENERAL_FAQS } from '@/lib/constants';

interface FAQProps {
  title?: string;
  description?: string;
  items?: { question: string; answer: string }[];
}

export default function FAQ({
  title = 'Frequently Asked Questions',
  description = 'Everything you need to know about our scientific writing, literature extraction, and journal submission processes.',
  items = GENERAL_FAQS,
}: FAQProps) {
  // Convert standard key-value to AccordionItem array format
  const accordionItems: AccordionItem[] = items.map((item, idx) => ({
    id: `faq-${idx}`,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <Container className="max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-display">
            {title}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-sans max-w-xl mx-auto mt-3">
            {description}
          </p>
        </div>

        <Accordion items={accordionItems} />
      </Container>
    </section>
  );
}
