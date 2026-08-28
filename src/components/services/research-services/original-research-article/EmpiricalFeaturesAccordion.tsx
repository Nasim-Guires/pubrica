"use client";

import { useState } from "react";

export default function EmpiricalFeaturesAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      aria-labelledby="empirical-features-heading"
      className="w-full bg-slate-50 py-6 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Section Header */}
        <header className="space-y-3">
          <h2
            id="empirical-features-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900"
          >
            Features of Empirical Research Papers
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-5xl">
            While writing an empirical research paper, several key features need
            to be considered regarding the research support services offered by
            us. Let&apos;s consider the following:
          </p>
        </header>

        {/* Collapsible Card */}
        <div className="border border-slate-300 rounded-lg overflow-hidden bg-slate-50 shadow-sm">
          {/* Dark Accordion Header */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="w-full bg-[#0d3b38] hover:bg-[#092a28] text-white px-6 py-4 flex items-center justify-between transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <span className="text-base sm:text-lg font-bold tracking-wide">
              Features of Empirical Research Papers
            </span>
            <span className="text-2xl font-bold select-none leading-none">
              {isOpen ? "−" : "+"}
            </span>
          </button>

          {/* Accordion Body */}
          {isOpen && (
            <div className="p-6 sm:p-8 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50/50">
              <ol className="space-y-4 list-none pl-0">
                <li>
                  <strong className="font-bold text-slate-900">
                    1. Clear Research Question:
                  </strong>{" "}
                  Clearly define the specific, measurable, and researchable
                  question that drives the study. It helps to facilitate the
                  entire research process and forms the foundation for
                  quantitative research article development services when
                  required.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    2. Literature Review:
                  </strong>{" "}
                  Conduct a thorough literature review to find research gaps.
                  This will help you justify the rationale for your study and
                  situate your research in the wider academic landscape.
                </li>

                <li className="space-y-2">
                  <strong className="font-bold text-slate-900 block">
                    3. Methodology
                  </strong>
                  <ul className="space-y-2 pl-4 border-l-2 border-slate-300 ml-1">
                    <li>
                      <strong className="font-medium text-slate-900">
                        Design:
                      </strong>{" "}
                      The research design can be qualitative, quantitative, or
                      mixed methods. For example, randomized controlled trial
                      (RCT) writing support may be necessary in clinical or
                      experimental studies.
                    </li>
                    <li>
                      <strong className="font-medium text-slate-900">
                        Participants/Sample:
                      </strong>{" "}
                      Provide a detailed description of the participant
                      selection criteria, sample size, and any pertinent
                      demographic data.
                    </li>
                    <li>
                      <strong className="font-medium text-slate-900">
                        Data Collection:
                      </strong>{" "}
                      Explain the data collection methods, including surveys,
                      experiments, and interviews, and any instruments or tools
                      used, especially when supported by SAS programming for
                      clinical data studies or SPSS analysis for research
                      articles.
                    </li>
                    <li>
                      <strong className="font-medium text-slate-900">
                        Data Analysis:
                      </strong>{" "}
                      Outline the statistical or qualitative analysis techniques
                      to be used during the interpretation of the data.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    4. Ethical Consideration:
                  </strong>{" "}
                  Discuss any ethical considerations that may have been involved
                  in the study, including informed consent, confidentiality, and
                  the approval granted by ethics committees or ethical review
                  boards.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    5. Results:
                  </strong>{" "}
                  Findings should be presented clearly and logically using
                  tables, figures, and charts without interpreting the data.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    6. Discussion:
                  </strong>{" "}
                  Interpret the findings obtained in light of the research
                  question and from the literature. Discuss the implications of
                  these findings in light of their limitations and possible
                  avenues for further research.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    7. Conclusion:
                  </strong>{" "}
                  Summarize key findings, their importance, and some possible
                  applications. Further, state how the research contributes to
                  the field.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    8. References:
                  </strong>{" "}
                  List all the sources cited in the paper, in a detailed and
                  proper list, in any specific style of citation.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    9. Formatting and Structure:
                  </strong>{" "}
                  Adhere strictly to the criteria of formatting (margins, font
                  size) and use headings to maintain professionalism and
                  consistency throughout the paper.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    10. Clarity and Precision:
                  </strong>{" "}
                  Use clear and specific language to effectively communicate
                  ideas. Avoid jargon as much as possible and ensure that the
                  material applied in the paper is accessible to its intended
                  audience.
                </li>

                <li>
                  <strong className="font-bold text-slate-900">
                    11. Publication Standards:
                  </strong>{" "}
                  Ensure that the paper submitted is of the standards required
                  by the target journals or conferences, and ensure adherence to
                  specific submission guidelines.
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}