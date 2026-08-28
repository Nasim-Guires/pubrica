import React from "react";

export const EditingTranslationManuscriptEditingBanner: React.FC = () => {
  return (
    <section
      aria-label="Hero Banner"
      className="w-full bg-gradient-to-b from-gray-900 via-emerald-950 to-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto border border-white/80 rounded-lg p-8 sm:p-10 text-center backdrop-blur-sm bg-black/10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Manuscript Editing Services
        </h1>
        <p className="text-base sm:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Pubrica offers qualified academic and scientific manuscript editing
          services, guaranteeing manuscripts are fully designed for the very
          best international journals, are error-free and ready for publication,
          and meet high professional standards.
        </p>
      </div>
    </section>
  );
};
