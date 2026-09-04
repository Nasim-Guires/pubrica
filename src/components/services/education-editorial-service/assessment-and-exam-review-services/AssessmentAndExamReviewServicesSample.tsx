import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const AssessmentAndExamReviewServicesSample: NextPage = () => {
  return (
    <PubricaSampleWorkCard
      bookCoverImage={{
        src: "/images/education-editorial-service/assessment-and-exam-review-services/Assessment-and-Exam-Review-Services-Sample-Work.webp",
        alt: "Assessment and Exam Review Services Sample Work",
        width: 600,
        height: 450,
      }}
      sections={[
        {
          heading: "Assessment and Exam Review Services Sample Work",
          button: {
            label: "Discover More",
            url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
          },
        },
        {
          heading: "Download the full Report Now",
          descriptionSegments: [
            {
              text: "This includes all the support materials you require to facilitate your examination of the TCA. The review process has been conducted within strict guidelines to ensure the highest possible standard of exam preparation, both for you and for your students, and to increase fairness, clarity and academic integrity.",
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
  );
};

export default AssessmentAndExamReviewServicesSample;