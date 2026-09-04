import ServiceBanner from '@/components/common/ServiceBanner';
import type { NextPage } from 'next';
import Head from 'next/head';

const LearningDesignBanner: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Design and Pedagogy Service at Pubrica</title>
        <meta
          name="description"
          content="By leveraging advanced learning design technology, a Learning Design and Pedagogy Service at Pubrica can develop scalable solutions to create measurable impacts on the learners and their outcomes."
        />
      </Head>

      {/* FULL WIDTH BANNER SECTION */}
      <ServiceBanner
        imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Learning Design and Pedagogy Service at Pubrica"
        description="By leveraging advanced learning design technology, a Learning Design and Pedagogy Service at Pubrica can develop scalable solutions to create measurable impacts on the learners and their outcomes."
      />
    </>
  );
};

export default LearningDesignBanner;