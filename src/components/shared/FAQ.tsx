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
    <section className="bg-white py-8 border-t border-gray-100 font-poppins">
      <Container className="max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-poppins break-words">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-poppins max-w-xl mx-auto mt-3 break-words">
            {description}
          </p>
        </div>

        <div className="w-full overflow-hidden break-words font-poppins">
          <Accordion items={accordionItems} />
        </div>
      </Container>
    </section>
  );
}