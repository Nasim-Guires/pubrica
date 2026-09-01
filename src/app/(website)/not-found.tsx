import React from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center py-10 bg-gray-50 select-none">
      <Container className="max-w-md text-center flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 mb-6 border border-red-100 animate-pulse-subtle">
          <AlertCircle className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 font-display">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed font-sans mt-3">
          We apologize, but the research resource, publication service details, or article you requested could not be located on our server.
        </p>
        <Link href="/" className="mt-8 text-blue-600 no-underline hover:no-underline">
          <Button leftIcon={<ArrowLeft className="h-4 w-4" />} className="font-semibold">
            Return to Homepage
          </Button>
        </Link>
      </Container>
    </div>
  );
}
