import type { NextPage } from 'next';
import Head from 'next/head';

const AIDataPreparationBanner: NextPage = () => {
  return (
    <>
      <Head>
        <title>AI and Data Preparation Service at Pubrica</title>
        <meta 
          name="description" 
          content="AI and Data Preparation Service at Pubrica delivers clean, structured, AI-ready data. We help businesses build accurate models and faster insights." 
        />
      </Head>

      {/* EXACT FULL WIDTH BANNER MATCHING THE REFERENCE IMAGE */}
      <div className="w-full bg-[#0a2e22] text-white py-6 px-4 md:px-12 text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">
          AI and Data Preparation Service at Pubrica
        </h2>
        <p className="text-xs md:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
          AI and Data Preparation Service at Pubrica delivers clean, structured, AI-ready data.<br />
          We help businesses build accurate models and faster insights.
        </p>
      </div>
    </>
  );
};

export default AIDataPreparationBanner;