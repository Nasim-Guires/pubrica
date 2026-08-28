import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { Metadata } from 'next';
import Image from 'next/image';
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

      <main className="min-h-screen bg-white text-gray-800">
        {/* Banner Section */}
        <section className="bg-slate-900 text-white py-6 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Customer Segmentation
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              Pubrica's customer segmentation research empowers companies to pinpoint priority segments for targeting, tailor optimal value propositions to diverse customer groups, and strategize on building and leveraging brand equity effectively.
            </p>
          </div>
        </section>

        {/* Tailored Insights Section */}
        <section className="max-w-6xl mx-auto py-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Tailored Insights for Targeted Research, Marketing, and Publication Strategies
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Pubrica's customer segmentation service is meticulously crafted to refine and optimize your market targeting strategies. Tailored for businesses seeking precision in identifying target segments, this service ensures alignment with industry standards and enhances effectiveness in reaching diverse customer groups.
            </p>

            <ul className="list-disc list-inside space-y-2 text-slate-800 font-medium mb-6">
              <li>Chi-squared automatic Interaction Detectors</li>
              <li>Medical device market segmentation</li>
              <li>Biotech, pharmaceutical, & hospitals market segmentation</li>
              <li className="text-sky-600 cursor-pointer hover:underline">
                Patient segmentation
              </li>
            </ul>

            <GetFreeQuoteButton/>
          </div>

          {/* Section Image using Next.js Image Tag */}
          <div className="relative w-full h-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/data-analytics-machine-learning/customer-segmentation/Tailored-Insights-for-Targeted-Research-Marketing-and-Publication-Strategies.webp"
              alt="Healthcare data analytics and dashboard report visualization"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Expertise & Approach Section */}
        <section className="max-w-6xl mx-auto py-6 px-6 border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Pubrica's Customer Segmentation Expertise
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Our team leverages advanced analytics, domain knowledge, and deep industry insights to design segmentation frameworks that align with your objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Approach Image using Next.js Image Tag */}
            <div className="relative w-full h-[320px] md:h-[380px] rounded-lg overflow-hidden shadow-md order-2 md:order-1">
              <Image
                src="/images/data-analytics-machine-learning/customer-segmentation/Pubricas-Customer-Segmentation-Expertise.webp"
                alt="Professional team performing audience clustering and market persona strategy"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Our Approach Includes:
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li>
                  <strong className="text-slate-900">Data Collection & Integration:</strong> Gathering data from academic databases, clinical trial repositories, and market research.
                </li>
                <li>
                  <strong className="text-slate-900">Segmentation Modeling:</strong> Applying statistical tools and AI-driven clustering techniques.
                </li>
                <li>
                  <strong className="text-slate-900">Persona Development:</strong> Creating detailed clinician and researcher personas for effective targeting.
                </li>
                <li>
                  <strong className="text-slate-900">Strategy Alignment:</strong> Mapping segmentation results to your research and publication goals.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}