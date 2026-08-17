'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ServiceItem = {
  title: string;
  description: string;
  details: string[];
  icon: string;
};

const servicesData: ServiceItem[] = [
  {
    title: 'Learning Structure & Curriculum Design',
    description: 'We improve the overall structure of Courses, Modules and Programs through aligning Learning Objectives, content flow, and module sequencing to ensure a cohesive educational journey.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Learning-Structure-Curriculum-Design.webp',
    details: [
      'Comprehensive curriculum mapping and alignment',
      'Logical module sequencing and hierarchical structuring',
      'Integration of clear, outcome-driven learning objectives',
    ],
  },
  {
    title: 'Instructional Strategy Development',
    description: 'The experts at Pubrica design instructional methods that accommodate different learning styles and foster active student participation and engagement.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Instructional-Strategy-Development.webp',
    details: [
      'Tailored strategies for diverse learning modalities',
      'Interactive and learner-centric engagement models',
      'Practical frameworks bridging theory and application',
    ],
  },
  {
    title: 'Assessment & Learning Outcome Alignment',
    description: 'All assessment and evaluation methods are aligned with the Learning Outcomes as defined, ensuring valid measurement of student competencies and skill mastery.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Assessment-Learning-Outcome-Alignment.webp',
    details: [
      'Formative and summative assessment planning',
      'Rubric design tied directly to course objectives',
      'Data-driven evaluation metrics for feedback and improvement',
    ],
  },
  {
    title: 'Content Readability & Cognitive Load Optimization',
    description: 'We create clear, paced content that has been broken down into sections to help learners avoid cognitive overload while retaining critical information effectively.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Content-Readability-Cognitive-Load-Optimization.webp',
    details: [
      'Segmented information chunking and pacing',
      'Readability enhancement and linguistic clarity',
      'Visual hierarchy and cognitive load management',
    ],
  },
  {
    title: 'Pedagogical Framework & Theory Integration',
    description: 'Established pedagogical models and learning theories, including constructivism, experiential learning, and Bloom’s Taxonomy, are systematically integrated into your materials.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Pedagogical-Framework-Theory-Integration.webp',
    details: [
      'Application of Bloom’s Taxonomy for cognitive progression',
      'Integration of constructivist and experiential frameworks',
      'Evidence-based learning theory alignment',
    ],
  },
  {
    title: 'Digital, Blended & E-Learning Design',
    description: 'We create the best learning experience possible through our process of optimising how content flows, the design of multimedia interactions, and digital accessibility compliance.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Digital-Blended-E-Learning-Design.webp',
    details: [
      'Seamless digital and blended learning flows',
      'Multimedia interaction and engagement optimization',
      'Multi-device and accessibility standard compatibility',
    ],
  },
];

const LearningDesignPedagogyComprehensiveSection: NextPage = () => {
  const [openServiceIndices, setOpenServiceIndices] = useState<{ [key: number]: boolean }>({});

  const toggleServiceAccordion = (index: number) => {
    setOpenServiceIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Head>
        <title>Learning Design and Pedagogy Services | Pubrica</title>
        <meta 
          name="description" 
          content="Explore Pubrica's professional Learning Design and Pedagogy services, including curriculum structuring, instructional strategy development, and cognitive load optimization." 
        />
        <link 
          rel="canonical" 
          href="https://pubrica.com/services/education-editorial-service/learning-design-and-pedagogy/" 
        />
      </Head>

      {/* FULL WIDTH HERO BANNER */}
      <div className="w-full bg-[#1b3b32] text-white py-16 px-4 md:px-12 mb-12 border-y border-[#274d42]">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Learning Design and Pedagogy
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-5xl mx-auto leading-relaxed">
            Our Learning & Pedagogical Design Foundation utilizes principles found in the science of Learning while maintaining emphasis on real-life applications through creating well-structured, learner-centered experiences that integrate goals, instructional material, student interactions and testing within a cohesive framework designed to foster engagement and enhance information retention for all students participating in an experience.
          </p>
        </div>
      </div>

      <div className="w-full bg-white text-gray-800 pb-16 px-4 md:px-8 space-y-20">
        
        {/* MAIN CONTENT SECTION WITH EMBEDDED FLOATING IMAGE ON THE RIGHT */}
        <section className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c]">
              Design Learning. Strengthen Pedagogy. Elevate Educational Impact.
            </h2>
          </div>

          <div className="clearfix space-y-6">
            {/* FLOATING IMAGE CONTAINER MATCHING THE EXACT REFERENCE DESIGN */}
            <div className="float-right ml-8 mb-6 w-full md:w-[380px] lg:w-[420px] bg-[#1b3b32] p-2.5 rounded-2xl shadow-lg">
              <div className="relative w-full h-[240px] md:h-[260px] rounded-xl overflow-hidden bg-gray-100">
                <Image 
                  src="/images/education-editorial-service/learning-design-and-pedagogy/Design-Learning.-Strengthen-Pedagogy.-Elevate-Educational-Impact.webp" 
                  alt="Design Learning. Strengthen Pedagogy. Elevate Educational Impact" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              The education and training landscape continues to evolve. In today&apos;s rapidly changing world, effective learning design and sound pedagogy are essential for all stakeholders: universities, educators, researchers, and institutions. All learning materials must be instructionally sound, learner-centred, outcomes-driven, and aligned with educational best practices. At Pubrica, we connect the subject matter experts to the needs of their learners by creating impactful educational experiences.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our Learning Design & Pedagogy services focus on structuring educational content so that learners can comprehend it better, engage with it more fully, retain it for longer periods of time, and apply the knowledge to real life situations. We take care of all aspects of curriculum alignment, instructional sequencing, assessment design, and learning outcome mapping for you to be able to create effective, clear, coherent, inclusive, and pedagogically robust educational content.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We support academic course development, training module development, online program development, workshop development, or institutional curriculum development. Our expert guidance helps ensure that your learning materials meet educational standards, the needs of your learners, and your institutional educational goals.
            </p>
          </div>
        </section>

        {/* SERVICES ENSURE BULLET POINTS SECTION */}
        <section className="max-w-4xl mx-auto bg-[#f0f7f4] border border-[#d2e8de] rounded-2xl p-6 md:p-8 space-y-6 shadow-sm clear-both">
          <h3 className="text-xl md:text-2xl font-bold text-[#0b3b2c]">
            Pubrica&apos;s Learning Design and Pedagogy Services Ensure:
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Clearly defined learning objectives</strong> that are directly connected to outcomes.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Pedagogically appropriate content structure</strong> and ordering.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Instructional strategies</strong> that are based on learner-centred approaches.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Theoretical frameworks</strong> that reflect Bloom&apos;s Taxonomy and various learning theories.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Coherence</strong> between formative assessment/evaluation and instructional design.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Inclusive/adaptive strategies</strong> for all learner populations.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Flow and clarity of content</strong> is based on focus of learner engagement (motivation).</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#c5221f] font-bold mt-0.5">▪</span>
              <span><strong>Content developed</strong> in compliance with institutional, accreditation, and curriculum requirements.</span>
            </li>
          </ul>

          <div className="pt-4 text-left">
          <GetFreeQuoteButton/>
          </div>
        </section>

        {/* TYPES OF LEARNING DESIGN AND PEDAGOGY SERVICES WE OFFER (INTERACTIVE CARDS) */}
        <section className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c]">
              Types of Learning Design and Pedagogy Services We Offer
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Pubrica realises that an educational system designed for optimal learning is of utmost importance. Our Learning & Pedagogy service provides you with the opportunity to design your Educational Materials in such a way as to best support the way in which your students learn. To accomplish this, we provide a full array of services that are customised to serve both Academic and Professional Learning:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => {
              const isOpen = !!openServiceIndices[idx];
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between transition-all h-fit hover:shadow-md">
                  <div>
                    <div className="w-12 h-12 relative mb-4">
                      <Image src={service.icon} alt={service.title} fill className="object-contain" sizes="48px" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">{service.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    
                    {isOpen && (
                      <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
                        <p className="text-xs font-semibold text-[#0b3b2c] uppercase tracking-wider">Key Focus Areas:</p>
                        <ul className="space-y-1 text-xs text-gray-700 list-disc pl-4">
                          {service.details.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <button 
                      onClick={() => toggleServiceAccordion(idx)}
                      className="w-full py-2 px-4 rounded bg-[#f0f7f4] text-[#0b3b2c] font-bold text-xs hover:bg-[#0b3b2c] hover:text-white transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>{isOpen ? 'Show Less' : 'Explore Service'}</span>
                      <span className="font-mono text-base">{isOpen ? '−' : '+'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
};

export default LearningDesignPedagogyComprehensiveSection;