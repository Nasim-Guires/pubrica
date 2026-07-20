import React from "react";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Check,
  ShieldCheck,
  FileText,
  Users,
  Zap,
  Globe,
} from "lucide-react";

export default function PublicationServices() {
  const complianceFrameworks = [
    {
      name: "ICMJE Recommendations",
      desc: "International Committee of Medical Journal Editors",
    },
    { name: "COPE Guidelines", desc: "Committee on Publication Ethics" },
    {
      name: "Good Publication Practice (GPP) Guidelines",
      desc: "Standardizing publication plans",
    },
    { name: "GDPR", desc: "General Data Protection Regulation compliant" },
    {
      name: "HIPAA",
      desc: "Health Insurance Portability and Accountability Act",
    },
    {
      name: "World Association of Medical Editors (WAME) Policies",
      desc: "Ethical medical editing",
    },
  ];

  const packages = [
    {
      name: "Standard",
      letter: "S",
      colorClass: "from-slate-100 to-slate-200 border-slate-300 text-slate-700",
      badgeBg: "bg-slate-200 text-slate-800",
      accentBorder: "border-t-slate-400",
      iconColor: "text-slate-600",
      bgColor: "bg-[#e2ebea]", // Matching the muted grey-teal background
      idealFor:
        "Early-career researchers, postgraduate students, or first-time authors needing baseline support for journal submission.",
      includes: [
        "Journal recommendation assessing scope, indexing, and impact.",
        "Formatting manuscript as per the target journal's requirements.",
        "In-text citation and references styling and conventions (APA, AMA, Vancouver, etc.).",
        "Plagiarism check and summary report.",
        "Draft cover letter as per the journal editor's requirements.",
      ],
      addons: [
        "Journal submission support (single submission)",
        "Draft the response to reviewer comments (one response cycle)",
        "Language editing (basic grammar and clarity)",
        "Establishment of ORCID iD and author profile.",
      ],
      turnaround: "7 - 10 business days.",
    },
    {
      name: "Advanced",
      letter: "A",
      colorClass:
        "from-purple-100 to-purple-200 border-purple-300 text-purple-700",
      badgeBg: "bg-purple-200 text-purple-800",
      accentBorder: "border-t-purple-400",
      iconColor: "text-purple-600",
      bgColor: "bg-[#dfd1e3]", // Matching the muted lavender background
      idealFor:
        "Researchers targeting Scopus or PubMed-indexed journals with a moderate level of editorial and submission support.",
      includes: [
        "All features of the Standard Package.",
        "Full journal submission support (one journal).",
        "Technical editing from subject-matter experts (SMEs).",
        "Comprehensive plagiarism review and limited rewriting, Peer-review readiness assessment (scope match, coherence, scientific merit).",
        "Formatting of figures and tables (up to 3 items).",
      ],
      addons: [
        "Reviewer comment drafting (up to 2 response cycles).",
        "Minor manuscript revisions and updates.",
        "Submission to an alternative journal after rejection.",
        "Pre-submission inquiry to journal editor.",
      ],
      turnaround: "10 - 15 business days.",
    },
    {
      name: "Elite",
      letter: "E",
      colorClass: "from-amber-100 to-amber-200 border-amber-300 text-amber-700",
      badgeBg: "bg-amber-200 text-amber-800",
      accentBorder: "border-t-amber-400",
      iconColor: "text-amber-700",
      bgColor: "bg-[#d4c097]", // Matching the muted gold/tan background
      popular: true,
      idealFor:
        "Researching for SCI, SCIE, or Q1 journals seeking comprehensive end-to-end publishing support.",
      includes: [
        "All features of the Advanced Package.",
        "Complete manuscript rewriting and enhancement.",
        "Drafting of reviewer responses and complete revision support (up to 2 cycles).",
        "Post-submission tracking and follow-up with the journal.",
        "Submission to two journals in the event of rejection from the first journal.",
        "Advanced figure and table design/redesign (up to 6 visuals).",
        "Compliance review with COPE, ICMJE, and journal-specific policies.",
        "Complete journal submission package.",
      ],
      addons: [
        "End-to-end support until full acceptance.",
        "Scientific editing with a senior PhD expert consultation.",
        "Outreach material: press release or plain-language summary.",
        "Journal cover page design recommendations and artwork.",
      ],
      turnaround: "15 - 20 business days.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* ================= COMPLIANCE SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d4f60] leading-tight">
              Certified Excellence. Global Compliance. Trusted Integrity
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              At Pubrica, we provide{" "}
              <span className="text-sky-600 font-semibold underline cursor-pointer hover:text-sky-700">
                best publication support services
              </span>{" "}
              that meet the highest international standards of scientific
              writing, manuscript preparation, and editorial assistance. Our
              professional team and stringent processes comply with
              international ethical codes and regulatory procedures, which
              allows your research manuscripts to be accurate, compliant, and
              publication-ready in reputable journals worldwide.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-[#0d4f60] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#10b981]" />
                Regulatory frameworks we comply with
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {complianceFrameworks.map((framework, index) => (
                  <li key={index} className="flex items-start gap-2.5 group">
                    <span className="text-[#e11d48] mt-1 shrink-0">●</span>
                    <div>
                      <span className="font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                        {framework.name.split(" (")[0]}
                      </span>
                      {framework.name.includes("(") && (
                        <span className="text-slate-500 text-sm">
                          {" (" + framework.name.split(" (")[1]}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/80 to-slate-900/40 z-10 flex flex-col justify-end p-6 text-white">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 backdrop-blur-md flex items-center justify-center border border-cyan-300/40 mb-3 animate-pulse">
                  <ShieldCheck className="w-6 h-6 text-cyan-300" />
                </div>
                <h4 className="font-bold text-lg">
                  Verified Compliance Standard
                </h4>
                <p className="text-xs text-slate-200">
                  Global scientific board certified process flow.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Scientists and data analysts collaborating over scientific compliance checklists"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* ================= PRICING & PACKAGES SECTION ================= */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0d4f60] mt-3">
            Our Packages
          </h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">
            Tailored editorial programs engineered to guide your work from raw
            draft to final published journal index.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-2xl overflow-hidden shadow-lg border-t-8 ${pkg.accentBorder} ${pkg.bgColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Card Header Banner */}
              <div className="p-6 bg-white flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xl border shadow-inner">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 font-black">
                      {pkg.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl text-slate-800">
                      {pkg.name}
                    </h3>
                    {pkg.popular && (
                      <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full mt-0.5">
                        <Sparkles className="w-3 h-3 text-amber-600 fill-amber-500" />{" "}
                        Best Value
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Package Details Area */}
              <div className="p-6 flex-1 flex flex-col space-y-6">
                {/* Section: Ideal For */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-700 flex items-center gap-1.5 mb-2">
                    <Users className="w-4 h-4 opacity-75" /> Ideal for:
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium bg-white/40 p-3 rounded-lg border border-white/50">
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Section: Includes */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-700 flex items-center gap-1.5 mb-3">
                    <CheckCircle className="w-4 h-4 opacity-75" /> Includes:
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed"
                      >
                        <ArrowRight className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: Add-ons */}
                <div className="pt-2 border-t border-slate-600/10 mt-auto">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-700 flex items-center gap-1.5 mb-3">
                    <Zap className="w-4 h-4 opacity-75" /> Optional Add-ons:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.addons.map((addon, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-600 text-sm"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{addon}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Package Footer details */}
              <div className="p-6 bg-black/5 border-t border-black/5 flex flex-col justify-between items-center sm:flex-row gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-slate-500 block uppercase tracking-wide">
                    Turnaround
                  </span>
                  <span className="text-sm font-black text-slate-800">
                    {pkg.turnaround}
                  </span>
                </div>
                <button className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 active:scale-95 transition-all shadow-md">
                  Select {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= GLOBAL CALL TO ACTION ================= */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-[#b30000] text-white hover:bg-[#900000] active:scale-98 transition px-12 py-4 rounded-full font-bold text-lg shadow-xl tracking-wider uppercase">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-slate-400 mt-3">
            No obligation. Confidentiality agreements (NDAs) signed instantly
            prior to file uploads.
          </p>
        </div>
      </div>
    </section>
  );
}
