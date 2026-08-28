import type { NextPage } from 'next';
import Head from 'next/head';

const DigitalProductionQABanner: NextPage = () => {
  return (
    <>
      <Head>
        <title>Digital Production QA Services at Pubrica</title>
        <meta 
          name="description" 
          content="Digital Production QA Services at Pubrica ensure accuracy, consistency, and compliance across every publishing stage." 
        />
      </Head>

      {/* EXACT FULL WIDTH BANNER MATCHING THE REFERENCE IMAGE */}
      <div className="w-full bg-[#0a2e22] text-white py-6 px-4 md:px-12 text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">
          Digital Production QA Services at Pubrica
        </h2>
        <p className="text-xs md:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Digital Production QA Services at Pubrica ensure accuracy, consistency, and compliance across every publishing stage.
        </p>
      </div>
    </>
  );
};

export default DigitalProductionQABanner;