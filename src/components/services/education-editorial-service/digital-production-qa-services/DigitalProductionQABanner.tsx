import ServiceBanner from '@/components/common/ServiceBanner';
import type { NextPage } from 'next';
import Head from 'next/head';

const DigitalProductionQABanner: NextPage = () => {
  return (
    <>
      <Head>
        <title>Digital Production QA Services at Pubrica</title>
        <meta
          name="description"
          content="Digital Production QA Services at Pubrica ensure accuracy, consistency, and compliance across every publishing stage."
        />
      </Head>

      {/* EXACT FULL WIDTH BANNER MATCHING THE REFERENCE IMAGE */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Digital Production QA Services at Pubrica"
        description="Digital Production QA Services at Pubrica ensure accuracy, consistency, and compliance across every publishing stage."
      />
    </>
  );
};

export default DigitalProductionQABanner;