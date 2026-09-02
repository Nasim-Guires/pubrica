import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

// SEO Metadata for Next.js App Router
export const metadata: Metadata = {
  title: 'Healthcare Customer & Patient Segmentation | Data Analytics',
  description:
    'Tailored customer segmentation insights for targeted research, medical device, biotech, and pharmaceutical marketing strategies.',
  keywords: [
    'Healthcare Customer Segmentation',
    'Patient Segmentation',
    'Biotech Market Segmentation',
    'Persona Development',
    'Clustering Techniques',
  ],
  openGraph: {
    title: 'Healthcare Customer & Patient Segmentation | Data Analytics',
    description:
      'Pinpoint priority healthcare segments, optimize resource allocation, and tailor value propositions using advanced data analytics.',
    type: 'website',
  },
};

export default function CustomerSegmentationPage() {
  // Structured Data (JSON-LD) for Schema Markup SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Customer Segmentation Services',
    provider: {
      '@type': 'Organization',
      name: 'Pubrica',
      url: 'https://pubrica.com',
    },
    serviceType: 'Data Analytics & Machine Learning',
    description:
      'Customer segmentation research empowering companies to pinpoint priority segments, tailor optimal value propositions, and strategize brand equity.',
    areaServed: 'Global',
  };

  return (
    <>
      {/* Schema Markup for Search Engines */}
      <Script
        id="customer-segmentation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-10">
        {/* Banner Section */}
        <HeroBanner
          title="Customer Segmentation"
          description="Pubrica's customer segmentation research empowers companies to pinpoint priority segments for targeting, tailor optimal value propositions to diverse customer groups, and strategize on building and leveraging brand equity effectively."
          headingAs="h1"
        />

        {/* Tailored Insights Section */}
        <section className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26] mb-4">
            Tailored Insights for Targeted Research, Marketing, and Publication Strategies
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-4">
            {/* Left Column: Text + Bullet Points */}
            <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Pubrica's customer segmentation service is meticulously crafted to refine and optimize your market targeting strategies. Tailored for businesses seeking precision in identifying target segments, this service ensures alignment with industry standards and enhances effectiveness in reaching diverse customer groups. Ideal for companies aiming to maximize their market potential and achieve sustainable growth.
              </p>
              <p>
                Our healthcare customer segmentation research allows companies to identify priority segments to target, determine the optimal value proposition for different customers, and understand how to build and leverage brand equity. Our support includes:
              </p>

              {/* Placed bullet list directly inside left column to eliminate top gap */}
              <ul className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                  <span>Chi-squared automatic Interaction Detectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                  <span>Medical device market segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                  <span>Biotech, pharmaceutical, & hospitals market segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2 text-base leading-none">•</span>
                  <Link
                    className="text-blue-600 hover:underline"
                    href="/services/data-analytics-machine-learning/customer-segmentation/patient-segmentation-in-healthcare/"
                  >
                    Patient segmentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-60 sm:h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/data-analytics-machine-learning/customer-segmentation/Tailored-Insights-for-Targeted-Research-Marketing-and-Publication-Strategies.webp"
                  alt="Healthcare data analytics and dashboard report visualization"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Paragraph below the image grid */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            At Pubrica, we understand that one-size-fits-all approaches rarely deliver maximum impact. Customer segmentation is the cornerstone of personalized engagement, enabling organizations, whether in healthcare, life sciences, or academic publishing, to categorize their audiences into distinct groups based on behavior, demographics, psychographics, and research interests. By identifying these unique clusters, researchers and businesses can improve outreach, optimize resource allocation, and drive greater visibility for their work.
          </p>

          <GetFreeQuoteButton />
        </section>

        {/* Expertise & Approach Section */}
        <section className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26] mb-2">
            Pubrica’s Customer Segmentation Expertise
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
            Our team leverages advanced analytics, domain knowledge, and deep industry insights to design segmentation frameworks that align with your objectives. We combine quantitative and qualitative research methodologies to ensure actionable outcomes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Approach Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md h-60 sm:h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/data-analytics-machine-learning/customer-segmentation/Pubricas-Customer-Segmentation-Expertise.webp"
                  alt="Professional team performing audience clustering and market persona strategy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <h3 className="text-lg font-bold text-[#0b2b26]">
                Our Approach Includes:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start">
                  <span className="text-[#0b2b26] font-bold mr-2 text-base leading-none">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">Data Collection & Integration:</strong> Gathering data from multiple sources: academic databases, clinical trial repositories, market research, surveys, and digital platforms.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0b2b26] font-bold mr-2 text-base leading-none">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">Segmentation Modeling:</strong> Applying statistical tools, AI-driven clustering techniques, and psychographic profiling to classify audiences.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0b2b26] font-bold mr-2 text-base leading-none">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">Persona Development:</strong> Creating detailed researcher or clinician personas for effective targeting.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0b2b26] font-bold mr-2 text-base leading-none">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">Strategy Alignment:</strong> Mapping segmentation results to your research, marketing, or publication goals.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0b2b26] font-bold mr-2 text-base leading-none">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">Actionable Recommendations:</strong> Insights to guide journal selection, grant targeting, content dissemination, and patient engagement strategies.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}