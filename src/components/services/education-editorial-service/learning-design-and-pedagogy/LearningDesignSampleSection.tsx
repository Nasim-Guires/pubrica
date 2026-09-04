import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const LearningDesignSampleSection: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Design and Pedagogy Services Sample Work | Pubrica</title>
        <meta
          name="description"
          content="Explore Pubrica's Learning Design and Pedagogy sample work, developed to meet academic standards, instructional best practices, and learner engagement benchmarks."
        />
      </Head>

      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/education-editorial-service/learning-design-and-pedagogy/Learning-Design-and-Pedagogy-Services-Sample-Work.webp",
          alt: "Learning Design and Pedagogy Services Sample Work",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading: "Learning Design and Pedagogy Services Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
            },
          },
          {
            heading: "Download the Full Learning Design Sample Now",
            descriptionSegments: [
              {
                text: "Explore our Learning Design and Pedagogy sample work, developed to meet academic standards, instructional best practices, and learner engagement benchmarks, ensuring impactful and effective learning experiences.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />
    </>
  );
};

export default LearningDesignSampleSection;