import ServiceBanner from '@/components/common/ServiceBanner';
import type { NextPage } from 'next';
import Head from 'next/head';

const AccessibilityComplianceBannerPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Accessibility Compliance at Pubrica</title>
        <meta
          name="description"
          content="With Pubrica’s accessibility compliance services, your manuscript is structured and styled to be fully accessible and publication ready."
        />
        <link
          rel="canonical"
          href="/services/education-editorial-service/accessibility-compliance"
        />
      </Head>

      <div className="w-full bg-white">
        {/* Banner Section */}
        <ServiceBanner
          imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
          imageAlt="100% Satisfaction Guarantee"
          heading="Accessibility Compliance at Pubrica"
          description="With Pubrica’s accessibility compliance services, your manuscript is structured and styled to be fully accessible and publication ready. We ensure compatibility with assistive technologies while meeting global publisher and accessibility standards."
        />
      </div>
    </>
  );
};

export default AccessibilityComplianceBannerPage;