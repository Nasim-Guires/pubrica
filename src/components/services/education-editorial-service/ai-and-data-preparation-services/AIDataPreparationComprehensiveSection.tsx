'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type ServiceItem = {
  title: string;
  description: string;
};

const servicesData: ServiceItem[] = [
  {
    title: 'Data Cleaning & Preprocessing',
    description: 'To enhance data quality, we eliminate errors, duplications, inconsistencies, and missing values. Thus, the datasets are refined for optimal AI utilization.',
  },
  {
    title: 'Data Annotation & Labelling',
    description: 'We provide highly accurate annotations and label data (both structured as well as unstructured) at the required level of granularity for computer vision and NLP models.',
  },
  {
    title: 'Cultural Localisation',
    description: 'We tailor your content to the cultural context of the target audience. This includes adapting examples, idioms, and context for global AI deployment.',
  },
  {
    title: 'Data Structuring & Normalisation',
    description: 'We implement structured formats for unstructured data and raw data, making it easier to combine into cohesive pipelines for predictive analytics.',
  },
  {
    title: 'Feature Preparation & Optimization',
    description: 'Our support will allow you to create valuable features based on variable transformation, scaling, and dimensionality reduction for enhanced model accuracy.',
  },
  {
    title: 'Compliance, Ethics & Data Governance',
    description: 'We ensure your data pipelines adhere to strict regulatory frameworks, protecting privacy and mitigating bias across all AI implementations.',
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
          href="https://pubrica.com/services/education-editorial-service/ai-and-data-preparation-services/" 
        />
      </Head>

      {/* EXACT BANNER CONTAINER WITH BORDER FRAME AS SEEN IN IMAGE */}
      <div className="w-full bg-[#1b3b32] py-16 px-4 md:px-12 flex justify-center mb-12">
        <div className="w-full max-w-5xl border border-[#2b5447] bg-[#1b3b32] text-white py-10 px-6 md:px-16 text-center space-y-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            AI and Data Preparation Services
          </h1>
          <p className="text-xs md:text-sm text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Our goal is to assure you that both the preparation and refinement of your data, as well as the optimization of your data, will allow AI to be successful.
          </p>
        </div>
      </div>

      <div className="w-full bg-white text-gray-800 pb-16 px-4 md:px-8 space-y-16">
        
        {/* MAIN CONTENT SECTION WITH EXACT IMAGE POSITIONING MATCHING SCREENSHOT */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c]">
              Prepare Data. Power AI. Elevate Research Intelligence.
            </h2>
          </div>

          <div className="clearfix text-gray-700 text-sm md:text-base leading-relaxed space-y-6">
            {/* FLOATING IMAGE CONTAINER WITH EXACT DARK GREEN BACKDROP SHAPE */}
            <div className="float-right ml-8 mb-6 w-full md:w-[380px] lg:w-[420px] bg-[#1b3b32] p-3 rounded-2xl shadow-lg">
              <div className="relative w-full h-[220px] md:h-[240px] rounded-xl overflow-hidden bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="AI and Data Preparation analytics interface" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p>
              In an environment of accelerated development in Artificial Intelligence based research and innovation, the quality of the preparation of high-quality data has become essential rather than optional for researchers, institutions, and organisations developing Artificial Intelligence (AI), Machine Learning (ML) and Advanced Analytics using datasets. Our goal at Pubrica is to connect the gap between the raw research data of our clients and AI-ready intelligence. Pubrica&apos;s AI & Data Preparation service takes the raw and unstructured data of our clients and creates a ready-to-use cleaned, pre-processed, and ready-to-use model dataset. Our services include data cleaning, data normalisation, data annotation, data labelling, and data feature engineering support to ensure your data is ready for the creation, validation, and deployment of robust AI models.
            </p>
            <p>
              Whether you are developing AI models, performing Data-Driven Research, creating Predictive Systems or preparing datasets to add to your research for publication or collaborative purposes, we will provide you with the most appropriate and thorough level of data preparation to meet all of your needs while providing the highest degree of accuracy, usability, reproducibility, and compliance across multiple platforms.
            </p>
          </div>

          {/* PUBRICA'S SERVICES ENSURE SECTION (PLACED DIRECTLY UNDER PARAGRAPHS AS SEEN IN IMAGE) */}
          <div className="clear-both pt-4">
            <div className="bg-[#f2f7f5] border border-[#d5e4de] rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-[#0b3b2c]">
                Pubrica&apos;s AI and Data Preparation Services Ensure:
              </h3>
              
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>Datasets are clean, consistent, and well organised</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>High-quality data annotation and coding</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>Reduction in noise, bias, and inconsistency</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>Data structured for AI and machine learning</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>Data with standardised metadata and documentation</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>Data is handled ethically and responsibly</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>Data will improve the performance and reliability of models</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#c5221f] font-bold text-sm mt-0.5">▪</span>
                  <span><strong>Datasets are compliant with research, institutional, and specific project requirements</strong></span>
                </li>
              </ul>

              <div className="pt-2 text-left">
                <GetFreeQuoteButton/>
              </div>
            </div>
          </div>
        </section>

        {/* TYPES OF AI AND DATA PREPARATION SERVICES WE OFFER */}
        <section className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c]">
              Types of AI and Data Preparation Services We Offer
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
              We at Pubrica realise that for AI to be successful we need high quality data. This is why we provide AI & Data Preparation Services to ensure that datasets used for research, analytics and as part of an AI System are both accurate, organised and appropriate for their intended purpose. Each of our services has been designed specifically to cater for the various types of data-driven requirements our clients require:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0b3b2c]/10 flex items-center justify-center text-[#0b3b2c] font-bold text-lg mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{service.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default AIDataPreparationComprehensiveSection;