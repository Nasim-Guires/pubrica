import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Our Guarantee - Pubrica",
  description:
    "Our GuaranteePubrica team of experts has immense knowledge in the field of study and understand the importance of publications. The vast experience of our",
  slug: "/our-guarantee",
});

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Header Section */}
      <div className="w-full bg-gradient-to-b from-[#113832] to-[#1a4d43] py-7 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto border-2 border-white/40 p-8 sm:p-12 rounded-lg backdrop-blur-xs">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wide mb-4">
            Our Guarantee
          </h1>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our team possesses extensive knowledge in fields of study and
            understands the importance of publications. The vast experience of
            our expert team helps us provide the best customer services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
          Our services are all supported by our quality guarantee:
        </h2>

        {/* English Editing */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#0e3b32]">
            English Editing
          </h3>

          <p className="text-gray-700 text-base leading-relaxed">
            You receive the completed manuscript from our editing services,
            which is covered by the Editing Guarantee. We assure you that we
            will re-edit the work once again for free if you are unsatisfied
            with the manuscript. Standardized and advanced editing required
            for your paper may not be included in the guarantee. For that
            reason, attach the final draft of your work to us when you make a
            new order. Suppose you need to include content or make any other
            substantial changes to the manuscript after receiving comments
            from our journal editors or quality checkers.
          </p>
        </div>

        {/* Premium and Publication Ready Editing */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#0e3b32]">
            Premium and Publication Ready Editing
          </h3>

          <p className="text-gray-700 text-base leading-relaxed">
            Our Premium and Publication Ready Editing services provide
            reliable editing support designed to help customers achieve the
            highest degree of assistance for their manuscripts. The workflow
            continues with re-editing the document for free until it gets
            published in the journal. Please let us know if the manuscript
            needs to be reworked. Make sure to include the journal&apos;s
            comments to ensure greater reliability and accuracy than in the
            previous version. The solution for the re-edit will be updated
            within one business day.
          </p>
        </div>

        {/* Translation */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#0e3b32]">
            Translation
          </h3>

          <p className="text-gray-700 text-base leading-relaxed">
            Every complete manuscript submitted for translation support
            service is eligible for Editing Service support. Translation
            services offer unlimited free re-editing of your English text.
            One additional option for free translation is available for up to
            1,500 words. If you are unsatisfied with the translated
            manuscript, our experts will notify you about the areas that need
            improvement. The team will provide complete support and re-edit
            the document before it gets published.
          </p>
        </div>

        {/* Manuscript Formatting */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#0e3b32]">
            Manuscript Formatting
          </h3>

          <p className="text-gray-700 text-base leading-relaxed">
            Every journal follows specific guidelines and protocols for
            manuscripts. Our expert team will format your manuscript according
            to the specified journal guidelines. The team will also alert you
            if the manuscript requires any additional elements. If the editor
            requests changes to the format of your manuscript, our team will
            assist you in reformatting it. Please let us know about any issues
            in the manuscript along with the comments.
          </p>
        </div>

        {/* Figures */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-[#0e3b32]">
            Figures
          </h3>

          <p className="text-gray-700 text-base leading-relaxed">
            The team will ensure that the formatted tables and figures meet
            the specified journal requirements. If the journal identifies any
            challenges with formatting tables and figures, our team will
            resolve the issues free of charge. Our Graphic Services provide
            innovative graphs, charts, and tables based on your requirements.
            If the journal requests changes to your charts, graphs, or tables,
            please send us the document with the comments and feedback. The
            team will assist you with further development and modifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;