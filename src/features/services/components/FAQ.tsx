import React from 'react';
import SharedFAQ from '@/components/shared/FAQ';

interface FAQProps {
  items: { question: string; answer: string }[];
}

export default function FAQ({ items }: FAQProps) {
  return <SharedFAQ items={items} />;
}
