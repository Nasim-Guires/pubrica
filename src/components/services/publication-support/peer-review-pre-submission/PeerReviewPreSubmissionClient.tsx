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
                      <span className="text-cyan-700 font-medium">
                        CONSORT, PRISMA, STROBE
                      </span>
                      )
                    </>
                  ) : item.includes("peer review") ? (
                    <>
                      Identify and resolve methodological or statistical flaws
                      before the journal’s{" "}
                      <span className="text-cyan-700 font-medium">
                        peer review
                      </span>
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
            <span className="text-cyan-700 font-medium">Peer Review</span>{" "}
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
            <span className="text-cyan-700 font-medium">
              pre-submission peer review
            </span>{" "}
            service includes language editing, formatting support, and
            assistance with journal-specific submission guidelines, but also
            ensures that your manuscript is both scientifically solid and
            professionally presented.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/get-quote"
              className="px-6 py-3 bg-[#b30000] hover:bg-[#8e0000] text-white font-semibold rounded-full text-sm transition-colors duration-200 shadow-md"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/brochure"
              className="px-6 py-3 bg-[#b30000] hover:bg-[#8e0000] text-white font-semibold rounded-full text-sm transition-colors duration-200 shadow-md"
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
                src="/images/peer-review-analysis.jpg"
                alt="Researchers conducting pre-submission peer review on scientific documents"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
