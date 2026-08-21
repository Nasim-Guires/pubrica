import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";

export default function PeerReviewPreSubmissionClient() {
  return (
    <main className="w-full bg-white text-[#1a202c] font-sans antialiased">
      {/* Hero Section */}
      <section className="w-full bg-[#0d1e1c] text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-teal-800">
        <div className="max-w-5xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Pre-Submission Peer Review Service for Research Manuscript
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-teal-100 font-medium max-w-3xl mx-auto leading-relaxed">
            Receive Expert Feedback from Domain-Specific Reviewers Before
            Journal Submission: Constructive Feedback from the Subject-Specific
            Experts
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Intro Header & Paragraphs */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] leading-tight">
            Research Manuscript Improvement and Pre-Submission Peer Review
            Services for Life Sciences, Pharma, and Research: Enhance Your
            Manuscripts Before Journal Submission
          </h2>

          <p className="text-base text-gray-700 leading-relaxed">
            Our pre-submission peer review services by our experts will help to
            improve your manuscript before submitting it to a journal. At
            Pubrica, our expert-led pre-submission peer review services ensure
            your manuscript is (a) scientifically valid, (b) publication-ready,
            and (c) aligned with your target journal’s submission requirements.
            We can assist in resolving issues that will help to prevent delays
            and reduce the risk of rejection.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            In today’s competitive publishing environment, researchers, authors,
            professors, academicians, pharmaceutical teams, and medical device
            manufacturers must:
          </p>

          {/* First Bullet List */}
          <ul className="space-y-3 pl-2">
            {[
              "Provide scientific rigor and technical accuracy across all parts of the manuscript",
              "Identify and resolve methodological or statistical flaws before the journal’s peer review",
              "Follow ethical and reporting requirements (CONSORT, PRISMA, STROBE)",
              "Anticipate and address common peer reviewer concerns proactively",
              "Strengthen scientific rationale, data interpretation, and manuscript relevancy from the reviewers’ and editors’ perspective",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-3 text-base text-gray-700"
              >
                <span className="h-2 w-2 rounded-full bg-red-600 mt-2 shrink-0" />
                <span>
                  {item.includes("CONSORT") ? (
                    <>
                      Follow ethical and reporting requirements (
                      <Link
                        href="https://www.consort-spirit.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 font-medium no-underline hover:text-cyan-800"
                      >
                        CONSORT
                      </Link>
                      {", "}
                      <Link
                        href="https://static1.squarespace.com/static/65b880e13b6ca75573dfe217/t/67ad313f1c80aa5235fce0d0/1739403584136/PRISMA_2020_checklist.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 font-medium no-underline hover:text-cyan-800"
                      >
                        PRISMA
                      </Link>
                      {", "}
                      <Link
                        href="https://www.equator-network.org/wp-content/uploads/2015/10/STROBE_checklist_v4_combined.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 font-medium no-underline hover:text-cyan-800"
                      >
                        STROBE
                      </Link>
                      )
                    </>
                  ) : item.includes("methodological or statistical flaws") ? (
                    <>
                      Identify and resolve methodological or statistical flaws
                      before the journal’s{" "}
                      <Link
                        href="/academy/peer-review/peer-review-week-2025-ai-era"
                        className="text-cyan-700 font-medium no-underline hover:text-cyan-800"
                      >
                        peer review
                      </Link>
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transition Paragraph & Second Bullet List */}
        <div className="space-y-6 pt-2">
          <p className="text-base text-gray-700 leading-relaxed">
            However, many authors are challenged by planning for reviewer
            expectations or understanding complex journal criteria. Pubrica’s
            Pre-Submission{" "}
            <Link
              href="/academy/peer-review/journal-peer-review-process-after-submission"
              className="text-cyan-700 font-medium no-underline hover:text-cyan-800"
            >
              Peer Review
            </Link>{" "}
            Service offers:
          </p>

          <ul className="space-y-3 pl-2">
            {[
              "Unbiased manuscript review by field-specific experts",
              "Expert feedback on structure, content, ethics, methods, and statistics",
              "Detailed recommendations to improve clarity, credibility, and compliance",
              "Support to maximise your manuscript’s chance of acceptance and potential impact",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-3 text-base text-gray-700"
              >
                <span className="h-2 w-2 rounded-full bg-red-600 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-base text-gray-700 leading-relaxed pt-2">
            Our{" "}
            <Link
              href="/academy/peer-review/how-publishers-balance-authors-and-reviewers"
              className="text-cyan-700 font-medium no-underline hover:text-cyan-800"
            >
              pre-submission peer review
            </Link>{" "}
            service includes language editing, formatting support, and
            assistance with journal-specific submission guidelines, but also
            ensures that your manuscript is both scientifically solid and
            professionally presented.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <GetFreeQuoteButton />
            <Link
              href="/brochure"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#b30000] hover:bg-[#8e0000] text-white font-semibold rounded-md text-sm transition-colors duration-200 shadow-sm h-[42px]"
            >
              View Brochure
            </Link>
          </div>
        </div>

        {/* Peer Review Scope & Image Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Scope List */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-[#0c3547]">
                What Is Typically Peer Reviewed Before Submission
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Research Articles",
                    desc: "Original studies or experiments.",
                  },
                  {
                    title: "Review Articles",
                    desc: "Summaries and analyses of existing research.",
                  },
                  {
                    title: "Case Studies",
                    desc: "Detailed reports of a specific instance or event.",
                  },
                  { title: "Systematic Reviews & Meta-Analyses", desc: "" },
                  { title: "Conference Papers", desc: "" },
                  {
                    title: "Grant Proposals",
                    desc: "For funding bodies (peer-reviewed by committees).",
                  },
                  {
                    title: "Theses and Dissertations",
                    desc: "(sometimes informally peer-reviewed).",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3 text-base text-gray-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-700 text-white font-bold text-xs shrink-0 mt-0.5">
                      &#8226;
                    </span>
                    <span>
                      <strong className="text-gray-900 font-semibold">
                        {item.title}
                      </strong>
                      {item.desc && ` – ${item.desc}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Next.js Optimized Image */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/publication-support/peer-review-pre-submission/Regulatory-frameworks-we-comply-With.webp"
                alt="Researchers conducting pre-submission peer review on scientific documents"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* What We Peer Review Section */}
        <div className="pt-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547]">
            What We Peer Review
          </h2>

          <p className="text-base text-gray-700 leading-relaxed max-w-5xl">
            At Pubrica, we appreciate that obtaining meaningful feedback before
            submitting your manuscript is essential. Our{" "}
            <Link
              href="/academy/peer-review/ai-and-peer-review-collaborative-intelligence"
              className="text-cyan-700 font-medium no-underline hover:text-cyan-800"
            >
              peer review
            </Link>{" "}
            pre-submission service provides impartial, comprehensive, and
            structured evaluation by experts in your discipline. Regardless of
            whether your discipline is medical sciences, engineering, life
            sciences, or social sciences, we provide meaningful recommendations
            with actionable improvements based on current peer review standards
            of{" "}
            <span className="">high-impact</span>{" "}
            journals.
          </p>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  1. Scientific/Technical Quality
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Are the methods sound and appropriate?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Is the data accurate and reproducible?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  2. Originality and Novelty
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Is this a new contribution to the field?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Does it address an important research gap?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  3. Clarity and Organization
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Logical, and well-structured?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>
                      Are figures and tables informative and accurate?
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  4. Relevance and Significance
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>
                      Is the topic important and relevant to the journal or
                      audience?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>
                      Does it contribute to advancing knowledge?
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  5. References and Citations
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Are sources current and appropriate?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Is the literature review complete?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  6. Ethical and Legal Aspects
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>
                      Were ethical standards followed (e.g., in clinical trials
                      or human/animal research)?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 font-bold">&#8226;</span>
                    <span>Any plagiarism or data manipulation?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}