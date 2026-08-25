import React from 'react';
import { notFound } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { unslugify } from '@/lib/helpers';

interface JournalSlugProps {
  params: Promise<{ slug: string }>;
}

export default async function JournalSlugPage({ params }: JournalSlugProps) {
  const { slug } = await params;
  const journalTitle = unslugify(slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'industries', href: '/Industries' },
          { label: journalTitle, href: `/Industries/${slug}` },
        ]}
      />
      <div className="bg-white py-20 text-center font-sans">
        <Container className="max-w-xl">
          <BookOpen className="h-16 w-16 text-primary-800 mx-auto mb-6" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-display">
            {journalTitle}
          </h1>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Detailed criteria, author instructions, formatting compliance guides, and review times for this journal are being updated. Check back shortly.
          </p>
        </Container>
      </div>
    </>
  );
}
