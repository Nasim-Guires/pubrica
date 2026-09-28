import React from "react";

export interface OrderNowFormProps {
  className?: string;
}

export default function OrderNowForm({ className = "" }: OrderNowFormProps) {
  return (
    <main className={`w-full bg-slate-50 min-h-screen font-sans ${className}`}>
      {/* Top Banner Section */}
      <header className="w-full bg-[#1b2b28] text-white py-6 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto border border-emerald-500/30 p-8 rounded-lg bg-emerald-950/20 shadow-sm">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
            Enquiry Now
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 font-medium max-w-2xl mx-auto">
            Unlock Your Research Potential – Order Now with Pubrica!
          </p>
        </div>
      </header>

      {/* Main Content Form Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Value Proposition & Contact Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#063326] via-[#094232] to-[#125844] p-8 sm:p-10 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-400/30">
                Fast Response Guaranteed
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                Get Customized Scientific Support for Your Project
              </h2>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Fill out the details to receive expert guidance, pricing estimates, and project roadmaps tailored to your research standards.
              </p>

              <div className="space-y-4 pt-4 border-t border-emerald-700/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-800/80 border border-emerald-600 flex items-center justify-center flex-shrink-0 text-emerald-300 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">500+ Medical Experts</h3>
                    <p className="text-[11px] text-emerald-200">Regulatory & research specialization across global markets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-800/80 border border-emerald-600 flex items-center justify-center flex-shrink-0 text-emerald-300 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Strict Confidentiality</h3>
                    <p className="text-[11px] text-emerald-200">Full NDA protection and HIPAA/GDPR data security.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Support Callout */}
            <div className="mt-8 pt-6 border-t border-emerald-700/50">
              <p className="text-[11px] text-emerald-200">Need immediate help?</p>
              <p className="text-xs font-semibold text-white">Email us: info@pubrica.com</p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-[#1b2b28] mb-6 border-b border-slate-100 pb-4">
              Fill Up Your Details
            </h2>

            <div className="rounded-lg border border-slate-200 overflow-hidden">
              <iframe
                aria-label="Enquiry Form - Demo"
                title="Enquiry Form"
                style={{ height: "900px", width: "100%", border: "none" }}
                src="https://forms.zohopublic.com/guiressolutions1/form/EnquiryFormDEmo/formperma/sxl0PUWrTwnhRz86AlGjU56-537hZBZPknxGbS7oHnw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}