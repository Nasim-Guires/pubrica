'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

const servicesData: ServiceItem[] = [
  {
    title: 'Learning Structure & Curriculum Design',
    description:
      'We improve the overall structure of Courses, Modules and Programs through aligning Learning Objectives, Instructional Content, and Assessments to produce a logical sequence of knowledge and skills. This helps in increasing student engagement and understanding. (BPC)',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Learning-Structure-Curriculum-Design.webp',
  },
  {
    title: 'Instructional Strategy Development',
    description:
      'The experts at Pubrica design instructional methods that accommodate different learning styles and incorporate methods such as active learning, problem-based learning, and scaffolded instruction into the lesson plan to increase student engagement and comprehension.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Instructional-Strategy-Development.webp',
  },
  {
    title: 'Assessment & Learning Outcome Alignment',
    description:
      'All assessment and evaluation methods are aligned with the Learning Outcomes as defined; thereby, providing a basis for building the rigour of academic programme delivery and assuring that graduates from these programmes have met the documented learning objectives.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Assessment-Learning-Outcome-Alignment.webp',
  },
  {
    title: 'Content Readability & Cognitive Load Optimization',
    description:
      'We create clear, paced content that has been broken down into sections to help learners avoid cognitive overload. Our approach to design helps learners easily understand, remember, and utilize the information presented to them.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Content-Readability-Cognitive-Load-Optimization.webp',
  },
  {
    title: 'Pedagogical Framework & Theory Integration',
    description:
      'Established pedagogical models and learning theories, including constructivism, experiential learning, and adult learning principles, are all incorporated into the design of course and content by the POD Team.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Pedagogical-Framework-Theory-Integration.webp',
  },
  {
    title: 'Digital, Blended & E-Learning Design',
    description:
      'We create the best learning experience possible through our process of optimising how content flows, the design of interactions with each other within the system and the degree to which learners he engaged with the material.',
    icon: '/images/education-editorial-service/learning-design-and-pedagogy/Digital-Blended-E-Learning-Design.webp',
  },
];

const LearningDesignPedagogyComprehensiveSection: NextPage = () => {
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
          href="/services/education-editorial-service/learning-design-and-pedagogy"
        />
      </Head>

      {/* FULL WIDTH HERO BANNER */}
      <HeroBanner
        title="Learning Design and Pedagogy"
        description="Our Learning & Pedagogical Design Foundation utilizes principles found in the science of Learning while maintaining emphasis on real-life applications through creating well-structured, learner-centered experiences that integrate goals, instructional material, student interactions and testing within a cohesive framework designed to foster engagement and enhance information retention for all students participating in an experience."
        headingAs="h1"
      />

      <div className="w-full bg-white text-gray-800 pb-7 px-4 md:px-8 space-y-16">

        {/* MAIN CONTENT SECTION WITH EMBEDDED FLOATING IMAGE ON THE RIGHT */}
        <section className="py-6 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3b2c] leading-tight">
              Design Learning. Strengthen Pedagogy. Elevate Educational Impact.
            </h2>

            <div className="flow-root">
              {/* Right-Floated Image */}
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
                <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/education-editorial-service/learning-design-and-pedagogy/Design-Learning.-Strengthen-Pedagogy.-Elevate-Educational-Impact.webp"
                    alt="Design Learning. Strengthen Pedagogy. Elevate Educational Impact"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 28rem"
                    priority
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  The education and training landscape continues to evolve. In today&apos;s rapidly changing world, effective learning design and sound pedagogy are essential for all stakeholders: universities, educators, researchers, and institutions. All learning materials must be instructionally sound, learner-centred, outcomes-driven, and aligned with educational best practices. At Pubrica, we connect the subject matter experts to the needs of their learners by creating impactful educational experiences.
                </p>

                <p>
                  Our Learning Design &amp; Pedagogy services focus on structuring educational content so that learners can comprehend it better, engage with it more fully, retain it for longer periods of time, and apply the knowledge to real life situations. We take care of all aspects of curriculum alignment, instructional sequencing, assessment design, and learning outcome mapping for you to be able to create effective, clear, coherent, inclusive, and pedagogically robust educational content.
                </p>

                <p>
                  We support academic course development, training module development, online program development, workshop development, or institutional curriculum development. Our expert guidance helps ensure that your learning materials meet educational standards, the needs of your learners, and your institutional educational goals.
                </p>

                <p className="font-bold text-gray-900 pt-2">
                  Pubrica&apos;s Learning Design and Pedagogy Services Ensure:
                </p>

                <ul className="space-y-3 pl-4 list-disc marker:text-red-600">
                  <li className="leading-relaxed">
                    Clearly defined learning objectives that are directly connected to outcomes.
                  </li>
                  <li className="leading-relaxed">
                    Pedagogically appropriate content structure and ordering.
                  </li>
                  <li className="leading-relaxed">
                    Instructional strategies that are based on learner-centred approaches.
                  </li>
                  <li className="leading-relaxed">
                    Theoretical frameworks that reflect Bloom&apos;s Taxonomy and various learning theories.
                  </li>
                  <li className="leading-relaxed">
                    Coherence between formative assessment/evaluation and instructional design.
                  </li>
                  <li className="leading-relaxed">
                    Inclusive/adaptive strategies for all learner populations.
                  </li>
                  <li className="leading-relaxed">
                    Flow and clarity of content is based on focus of learner engagement (motivation).
                  </li>
                  <li className="leading-relaxed">
                    Content developed in compliance with institutional, accreditation, and curriculum requirements.
                  </li>
                </ul>

                <div className="pt-2">
                  <GetFreeQuoteButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TYPES OF LEARNING DESIGN AND PEDAGOGY SERVICES WE OFFER */}
        <section className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b2c]">
              Types of Learning Design and Pedagogy Services We Offer
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pubrica realises that an educational system designed for optimal learning is of utmost importance. Our Learning Design & Pedagogy service provides you with the opportunity to design your Educational Materials in such a way as to best support the way in which your students learn. To accomplish this, we provide a full array of services that are customised to serve both Academic and Professional Learning:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-start space-x-4 min-h-[160px]"
              >
                <div className="w-12 h-12 relative flex-shrink-0 mt-0.5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default LearningDesignPedagogyComprehensiveSection;