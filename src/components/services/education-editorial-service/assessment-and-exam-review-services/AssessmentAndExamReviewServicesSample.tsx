import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const AssessmentAndExamReviewServicesSample: NextPage = () => {
  return (
    <section className="w-full bg-[#f2f7f5] py-7 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white border border-[#d5e4de] rounded-3xl p-6 md:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="md:col-span-5 relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-md">
            <Image 
              src="/images/education-editorial-service/assessment-and-exam-review-services/Assessment-and-Exam-Review-Services-Sample-Work.webp" 
              alt="Assessment and Exam Review Services Sample Work" 
              fill 
              className="object-cover"
            />
          </div>

          {/* RIGHT COLUMN: CONTENT & BUTTONS */}
          <div className="md:col-span-7 space-y-6">
            
            {/* FIRST BLOCK */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                Assessment and Exam Review Services Sample Work
              </h3>
              <div className="pt-1">
                <Link 
                  href="/insights/sample-work" 
                  className="inline-block bg-black text-white font-medium text-sm py-3 px-8 rounded-full hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Discover More
                </Link>
              </div>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* SECOND BLOCK */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                This includes all the support materials you require to facilitate your examination of the TCA. The review process has been conducted within strict guidelines to ensure the highest possible standard of exam preparation, both for you and for your students, and to increase fairness, clarity and academic integrity.
              </p>
              <div className="pt-2">
                <Link 
                  href="/insights/sample-work" 
                  className="inline-block bg-black text-white font-medium text-sm py-3 px-8 rounded-full hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Discover More
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AssessmentAndExamReviewServicesSample;