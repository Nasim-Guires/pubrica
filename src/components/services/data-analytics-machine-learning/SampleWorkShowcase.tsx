import React from "react";

export const SampleWorkShowcase: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="bg-[#f2faf7] border border-emerald-100/50 rounded-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
        {/* Visual Asset Container Left */}
        <div className="col-span-1 md:col-span-5 w-full aspect-[4/5] bg-white rounded border border-gray-200/80 shadow-sm overflow-hidden relative flex items-center justify-center text-zinc-400 font-mono text-[11px] tracking-widest font-bold">
          [ANALYTIC VISUAL ASSET]
        </div>

        {/* Action Callouts Right */}
        <div className="col-span-1 md:col-span-7 space-y-8">
          <div className="space-y-3">
            <h3 className="text-gray-900 font-extrabold text-lg md:text-xl tracking-tight leading-snug">
              Data Analytics and Machine Learning Services Sample Work
            </h3>
            <button className="w-full sm:w-auto bg-black text-white text-xs font-bold tracking-wider px-8 py-2.5 rounded hover:bg-neutral-800 transition-colors uppercase">
              Discover More
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-gray-900 font-extrabold text-lg md:text-xl tracking-tight mb-2">
                Download the full Report Now
              </h3>
              <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed text-justify font-normal">
                Explore our machine learning and data analytics sample work,
                designed to meet rigorous methodological standards,
                journal-specific formatting requirements, and project deadlines.
                We deliver precise, valid, and publication-ready results that
                strengthen academic, clinical, and business research outcomes.
              </p>
            </div>
            <button className="w-full sm:w-auto bg-black text-white text-xs font-bold tracking-wider px-8 py-2.5 rounded hover:bg-neutral-800 transition-colors uppercase">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
