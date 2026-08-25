import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You - Pubrica',
  description: 'We have received your query successfully. Our expert will revert within the next 30 minutes.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <CheckCircle2 className="h-14 w-14 text-[#004d40] mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You</h1>
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          We have received your query successfully. Our expert will analyse and revert within the next 30 minutes.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#004d40] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#00332a] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
