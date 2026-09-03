'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

const servicesData: ServiceItem[] = [
  {
    title: 'Data Cleaning & Preprocessing',
    description: 'To enhance data quality, we eliminate errors, duplications, inconsistencies, and missing values. Thus, the datasets produced will be trustworthy and able to support future AI and analytical activities in related fields.',
    icon: '/images/education-editorial-service/ai-and-data-preparation-services/Data-Cleaning-Preprocessing.webp',
  },
  {
    title: 'Data Annotation & Labelling',
    description: 'We provide highly accurate annotations and label data (both structured as well as unstructured) at the level required for the development of supervised machine learning and Artificial Intelligence Applications.',
    icon: '/images/education-editorial-service/ai-and-data-preparation-services/Data-Annotation-Labelling.webp',
  },
  {
    title: 'Cultural Localisation',
    description: 'We tailor your content to the cultural context of the target audience. This includes adapting examples, idioms, references, measurement units, and communication styles to ensure your manuscript is relatable and compliant with regional norms.',
    icon: '/images/education-editorial-service/ai-and-data-preparation-services/Cultural-Localisation.webp',
  },
  {
    title: 'Data Structuring & Normalisation',
    description: 'We implement structured formats for unstructured data and raw data, making it easier to combine into standard forms in the workflows of Artificial Intelligence Pipelines or Analytics Workflows.',
    icon: '/images/education-editorial-service/ai-and-data-preparation-services/Data-Structuring-Normalisation.webp',
  },
  {
    title: 'Feature Preparation & Optimization',
    description: 'Our support will allow you to create valuable features based on variable transformation, scaling of data and optimisation of input values to improve your training and effectiveness of models.',
    icon: '/images/education-editorial-service/ai-and-data-preparation-services/Feature-Preparation-Optimization.webp',
  },
  {
    title: 'Compliance, Ethics & Data Governance',
    description: 'Our support will allow you to create valuable features based on variable transformation, scaling of data and optimisation of input values to improve your training and effectiveness of models.',
    icon: '/images/education-editorial-service/ai-and-data-preparation-services/Compliance-Ethics-Data-Governance.webp',
  },
];

const AIDataPreparationComprehensiveSection: NextPage = () => {
  return (
    <>
      <Head>
        <title>AI and Data Preparation Services | Pubrica</title>
        <meta
          name="description"
          content="Explore Pubrica's professional AI and Data Preparation services, including data cleaning, annotation, normalization, and feature optimization for robust machine learning models."
        />
        <link
          rel="canonical"
          href="/services/education-editorial-service/ai-and-data-preparation-services"
        />
      </Head>

      {/* HERO BANNER SECTION */}
      <div className="w-full bg-[#1b3b32] py-6 px-4 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-[#2b5447] bg-[#1b3b32] px-6 py-5 text-center text-white sm:px-12">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            AI and Data Preparation Services
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-gray-200 sm:text-sm">
            Our goal is to assure you that both the preparation and refinement of your data, as well as the optimization of your data, will allow AI to be successful.
          </p>
        </div>
      </div>

      <div className="w-full bg-white text-gray-800 py-8 md:py-7 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* MAIN HERO / OVERVIEW SECTION */}
        <section className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b3b2c] tracking-tight leading-snug">
            Prepare Data. Power AI. Elevate Research Intelligence.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
            In an environment of accelerated development in Artificial Intelligence based research and innovation, the quality of the preparation of high-quality data has become essential rather than optional for researchers, institutions, and organisations developing Artificial Intelligence (AI), Machine Learning (ML) and Advanced Analytics using datasets. Our goal at Pubrica is to connect the gap between the raw research data of our clients and AI-ready intelligence. Pubrica&apos;s AI & Data Preparation service takes the raw and unstructured data of our clients and creates a ready-to-use cleaned, pre-processed, and ready-to-use model dataset. Our services include data cleaning, data normalisation, data annotation, data labelling, and data feature engineering support to ensure your data is ready for the creation, validation, and deployment of robust AI models.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
            {/* Left Content Column */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5">
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Whether you are developing AI models, performing Data-Driven Research, creating Predictive Systems or preparing datasets to add to your research for publication or collaborative purposes, we will provide you with the most appropriate and thorough level of data preparation to meet all of your needs while providing the highest degree of accuracy, usability, reproducibility, and compliance across multiple platforms.
              </p>

              <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#0b3b2c] pt-2">
                Pubrica&apos;s AI and Data Preparation Services Ensure:
              </h2>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {[
                  'Datasets are clean, consistent, and well organised',
                  'High-quality data annotation and coding',
                  'Reduction in noise, bias, and inconsistency',
                  'Data structured for AI and machine learning',
                  'Data with standardised metadata and documentation',
                  'Data is handled ethically and responsibly',
                  'Data will improve the performance and reliability of models',
                  'Datasets are compliant with research, institutional, and specific project requirements',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#c5221f] text-xs leading-none mt-1 shrink-0">▪</span>
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex justify-start">
                <GetFreeQuoteButton />
              </div>
            </div>

            {/* Right Side Floating Image Block */}
            <div className="md:col-span-5 relative mt-6 md:mt-0 flex justify-center md:justify-end px-2 sm:px-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[16/10] sm:aspect-[16/9] md:h-[230px]">
                {/* Background Offset Block with responsive offsets to prevent horizontal scroll */}
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 w-full h-full bg-[#1b3b32] rounded-2xl -z-10" />

                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                  <Image
                    src="/images/education-editorial-service/ai-and-data-preparation-services/Prepare-Data.-Power-AI.-Elevate-Research-Intelligence.webp"
                    alt="Prepare Data. Power AI. Elevate Research Intelligence."
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES CARDS SECTION */}
        <section className="max-w-5xl mx-auto pt-6 md:pt-7 space-y-6 md:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0b3b2c]">
              Types of AI and Data Preparation Services We Offer
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-4xl">
              We at Pubrica realise that for AI to be successful we need high quality data. This is why we provide AI & Data Preparation Services to ensure that datasets used for research, analytics and as part of an AI System are both accurate, organised and appropriate for their intended purpose. Each of our services has been designed specifically to cater for the various types of data-driven requirements our clients require:
            </p>
          </div>

          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow flex items-start gap-3 sm:gap-4 relative overflow-hidden"
              >
                {/* Left Side Icon */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 relative shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 32px, 40px"
                  />
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0 space-y-1 pr-2 relative">
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right Accent Bar */}
                <div className="w-[2px] self-stretch bg-gray-800 rounded-full shrink-0 my-1" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDataPreparationComprehensiveSection;