import type { NextPage } from 'next';
import Head from 'next/head';

const LearningDesignBanner: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Design and Pedagogy Service at Pubrica</title>
        <meta 
          name="description" 
          content="By leveraging advanced learning design technology, a Learning Design and Pedagogy Service at Pubrica can develop scalable solutions to create measurable impacts on the learners and their outcomes." 
        />
      </Head>

      {/* FULL WIDTH BANNER SECTION */}
      <div className="w-full bg-[#0b3b2c] text-white py-16 px-4 md:px-12 border-y border-[#164e3d]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Learning Design and Pedagogy Service at Pubrica
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            By leveraging advanced learning design technology, a Learning Design and Pedagogy Service at Pubrica can develop scalable solutions to create measurable impacts on the learners and their outcomes.
          </p>
        </div>
      </div>
    </>
  );
};

export default LearningDesignBanner;