import ServiceBanner from '@/components/common/ServiceBanner';
import type { NextPage } from 'next';
import Head from 'next/head';

const AIDataPreparationBanner: NextPage = () => {
  return (
    <>
      <Head>
        <title>AI and Data Preparation Service at Pubrica</title>
        <meta
          name="description"
          content="AI and Data Preparation Service at Pubrica delivers clean, structured, AI-ready data. We help businesses build accurate models and faster insights."
        />
      </Head>

      {/* EXACT FULL WIDTH BANNER MATCHING THE REFERENCE IMAGE */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="AI and Data Preparation Service at Pubrica"
        description={
          <>
            AI and Data Preparation Service at Pubrica delivers clean, structured,
            AI-ready data.
            <br />
            We help businesses build accurate models and faster insights.
          </>
        }
      />
    </>
  );
};

export default AIDataPreparationBanner;