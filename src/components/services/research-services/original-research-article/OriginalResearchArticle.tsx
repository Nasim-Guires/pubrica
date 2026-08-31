import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";

export default function OriginalResearchArticle() {
  return (
    <section className="w-full font-sans text-slate-800 bg-slate-100">
      {/* --- Top Dark Banner --- */}
    
        <HeroBanner
          title="Publish with Precision: Expert Original Research Article Writing"
          description="From clinical trials to epidemiological studies, Pubrica develops high-impact manuscripts that are ready for journal submission. We develop sound methodologies, validated surveys, and statistically rigorous results – all following ICMJE, GCP, and journal guidelines. We are trusted by researchers across medicine, pharma, and life sciences."
          headingAs="h1"
        />

      {/* --- Main Content Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Text & Features */}
          <article className="lg:col-span-7 space-y-6">
            <header className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Original Research Article Writing Service: Data-Driven
                Manuscripts Aligned with Your Study Goals and Journal Standards
              </h2>
              <h3 className="text-lg font-medium text-slate-600">
                Publication-Ready Manuscripts for Physicians, Surgeons &amp;
                Medical Specialists
              </h3>
            </header>

            <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                <Link
                  href="/academy/original-research-article/tidier-sr-reporting-research/"
                  className="text-blue-600 "
                >
                  Original research articles
                </Link>{" "}
                are essential to the advancement of clinical practice. At
                Pubrica, we provide a research manuscript writing service that
                helps physicians, surgeons, and specialized researchers convert
                clinical, experimental, or observational study data into
                meaningful, peer-reviewed journal manuscripts. Using our
                expertise in medical manuscript writing service and scientific
                writing, we ensure that your findings adhere to the highest
                standards of scientific and regulatory integrity. Whether
                completing randomized controlled trials, surgical outcomes
                studies, or epidemiology investigations, our services create
                publication-ready manuscripts aligned with journal requirements.
              </p>
            </div>

            {/* Key Features List */}
            <div className="pt-2">
              <h4 className="text-base font-bold text-slate-900 mb-3">
                Key Features:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>
                  Domain-specific medical writers (surgeons, physicians,
                  specialists)
                </li>
                <li>
                  Compliance with{" "}
                  <a
                    href="https://www.icmje.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    ICMJE
                  </a>
                  ,{" "}
                  <a
                    href="https://www.consort-statement.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    CONSORT
                  </a>
                  , and GCP guidelines
                </li>
                <li>
                  Use of industry-standard tools (SPSS, Python, R, SAS, STATA,
                  NVivo &amp; more)
                </li>
                <li>
                  <Link
                    href="/services/publication-support/plagiarism-services"
                    className="text-blue-600"
                  >
                    Plagiarism-free
                  </Link>{" "}
                  and peer-reviewed article writing service
                </li>
                <li>Support for both academic and regulatory submissions</li>
                <li>Customized formatting for high-impact journals</li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <GetFreeQuoteButton />
            </div>
          </article>

          {/* Right Column: Infographic Image with Frame Background */}
          <aside className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg  rounded-2xl p-4 sm:p-6 ">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/physician-writing-services/original-research-article/original-research-article-writing-services.webp"
                  alt="Original Research Article Writing workflow diagram covering Abstract, Keywords, Introduction, Methods, Results, Discussion, Conclusion, and References"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
