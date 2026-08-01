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
          href="https://pubrica.com/services/education-editorial-service/accessibility-compliance/" 
        />
      </Head>

      <div className="w-full bg-white">
        {/* Banner Section */}
        <section className="w-full bg-[#0b3b2c] py-12 px-4 md:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
              Accessibility Compliance at Pubrica
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
              With Pubrica’s accessibility compliance services, your manuscript is structured and styled to be fully accessible and publication ready. We ensure compatibility with assistive technologies while meeting global publisher and accessibility standards.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityComplianceBannerPage;