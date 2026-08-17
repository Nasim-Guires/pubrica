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

      <section className="w-full bg-[#f4faf7] py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white border border-[#d2e8de] rounded-2xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Image Column */}
          <div className="w-full md:w-1/2 relative h-[260px] md:h-[300px] rounded-xl overflow-hidden shadow-inner bg-gray-100 flex-shrink-0">
            <Image 
              src="/images/education-editorial-service/learning-design-and-pedagogy/Learning-Design-and-Pedagogy-Services-Sample-Work.webp" 
              alt="Learning Design and Pedagogy Services Sample Work" 
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content Column */}
          <div className="w-full md:w-1/2 space-y-6 text-left">
            
            {/* Block 1 */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c]">
                Learning Design and Pedagogy Services Sample Work
              </h2>
              <div>
                <Link 
                  href="#" 
                  className="inline-block bg-black text-white text-xs md:text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-gray-800 transition-colors shadow"
                >
                  Discover More
                </Link>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Block 2 */}
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-[#0b3b2c]">
                Download the Full Learning Design Sample Now
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Explore our Learning Design and Pedagogy sample work, developed to meet academic standards, instructional best practices, and learner engagement benchmarks, ensuring impactful and effective learning experiences.
              </p>
              <div>
                <Link 
                  href="#" 
                  className="inline-block bg-black text-white text-xs md:text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-gray-800 transition-colors shadow"
                >
                  Discover More
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default LearningDesignSampleSection;