import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Top Citation Styles: APA, AMA, MLA & Vancouver Explained",
  description: "Learn APA, AMA, MLA, and Vancouver citation styles for research papers in medicine, science, and humanities",
  keywords: ["citation"],
  slug: "/services/publication-support/journal-manuscript-formatting-services/citation-styles-apa-ama-mla-vancouver-guide",
});

export default function CitationStylesPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Hero Banner */}
            <div className="relative w-full h-48 md:h-64 bg-neutral-900 flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative z-10 text-2xl md:text-4xl font-bold text-center px-4">
                    Top Citation Styles for Research Papers: APA, AMA, MLA, and Vancouver
                </h1>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="bg-gray-100 border-b border-gray-200 text-xs md:text-sm py-2 px-4 md:px-12 text-gray-600">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 flex-wrap">
                    <Link href="/" className="text-blue-600 no-underline hover:no-underline">Home</Link>
                    <span>»</span>
                    <Link href="/insights" className="text-blue-600 no-underline hover:no-underline">Insights</Link>
                    <span>»</span>
                    <Link href="/academy/industry-news" className="text-blue-600 no-underline hover:no-underline">News</Link>
                    <span>»</span>
                    <span className="text-gray-500">Introducing the Journal of the Academy of Public Health & New Era in Scientific Publishing</span>
                </div>
            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Left Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">An Academy Guide</h3>
                        <ul className="space-y-2 text-xs md:text-sm text-blue-600">
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#what-is-a-high-impact-academic-journal" className="text-blue-600 no-underline hover:no-underline">» High-Impact Academic Journal</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#how-impact-factor-is-calculated-simplified-formula" className="text-blue-600 no-underline hover:no-underline">» Impact Factor Is Calculated</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#types-of-high-impact-academic-journals" className="text-blue-600 no-underline hover:no-underline">» Types of High Impact Academic Journals</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#high-impact-journals-by-discipline" className="text-blue-600 no-underline hover:no-underline">» High-Impact Journals by Discipline</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#how-to-publish-in-high-impact-journals" className="text-blue-600 no-underline hover:no-underline">» Publish in High-Impact Journals</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#benefits-of-publishing-in-high-impact-journals" className="text-blue-600 no-underline hover:no-underline">» Publishing in High-Impact Journals</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#top-indexing-databases" className="text-blue-600 no-underline hover:no-underline">» Top Indexing Databases</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#comparison-of-major-indexing-databases" className="text-blue-600 no-underline hover:no-underline">» Major Indexing Databases</Link></li>
                            <li><Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide#frequently-asked-questions-faqs" className="text-blue-600 no-underline hover:no-underline">» Frequently Asked Questions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Interesting topics</h3>
                        <ul className="space-y-2 text-xs md:text-sm text-blue-600">
                            <li><Link href="/services/medical-writing" className="text-blue-600 no-underline hover:no-underline">Medical writing</Link></li>
                            <li><Link href="/services/research-services/scientific-writing" className="text-blue-600 no-underline hover:no-underline">Scientific writing</Link></li>
                            <li><Link href="/services/research-services/systematic-review" className="text-blue-600 no-underline hover:no-underline">Systematic Review Writing</Link></li>
                            <li><Link href="/services/research-services/meta-analysis" className="text-blue-600 no-underline hover:no-underline">Meta-Analysis</Link></li>
                            <li><Link href="/services/physician-writing-services/original-research-article" className="text-blue-600 no-underline hover:no-underline">Original Research Article Writing Service</Link></li>
                            <li><Link href="/services/research-services/literature-review-and-gap" className="text-blue-600 no-underline hover:no-underline">Literature Review</Link></li>
                            <li><Link href="/services/research-services/grant-writing" className="text-blue-600 no-underline hover:no-underline">Grant Writing Services</Link></li>
                            <li><Link href="/services/research-services/biostatistics-and-statistical-programming-services" className="text-blue-600 no-underline hover:no-underline">Biostatistical Programming</Link></li>
                            <li><Link href="/services/research-services/experimental-design" className="text-blue-600 no-underline hover:no-underline">Experimental Design</Link></li>
                        </ul>
                    </div>

                    <div className="relative w-full h-48 rounded overflow-hidden shadow-sm">
                        <Image
                            src="https://pubrica.com/wp-content/uploads/2024/06/pubrica-service-and-sample-work-1024x644.webp"
                            alt="Interesting Topics"
                            fill
                            className="object-cover"
                        />
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="lg:col-span-9 space-y-8 text-sm md:text-base leading-relaxed text-gray-700">

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Top Citation Styles for Research Papers: APA, AMA, MLA, and Vancouver
                        </h2>
                        <p className="mb-4">
                            Citing sources is an important part of academic and <strong className="text-blue-600">scientific writing</strong>. It demonstrates intellectual honesty, supports your position, and gives readers a way to find the <strong className="text-blue-600">original research</strong>. Creating a citation style is a sticky point in academic writing and a very important point in the submission of manuscripts for journals or academic institutions.
                        </p>
                        <p>
                            The most widely accepted citation styles are APA, AMA, MLA, and Vancouver style citations. Each citation style has its <strong className="text-gray-900">unique rules</strong> (order of information), appearance (formatting), and areas in which it is used. Whether you are writing for <strong className="text-gray-900">medical research paper structure</strong>, <strong className="text-gray-900">scientific writing for physicians and surgeons</strong>, or focusing on <strong className="text-gray-900">scientific manuscript writing guide</strong> for your discipline, understanding these styles is essential.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">1. Overview of Major Citation Styles</h2>
                        <p className="mb-4">
                            Citation styles are standardized systems used to acknowledge sources in academic writing. They ensure consistency and clarity in presenting references, helping readers trace the origin of ideas and research.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-200 text-xs md:text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200 font-bold text-gray-800">
                                        <th className="p-3 border-r border-gray-200">Citation Style</th>
                                        <th className="p-3 border-r border-gray-200">Full Form</th>
                                        <th className="p-3 border-r border-gray-200">Commonly Used In</th>
                                        <th className="p-3">Citation Format</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium">APA</td>
                                        <td className="p-3 border-r border-gray-200">American Psychological Association</td>
                                        <td className="p-3 border-r border-gray-200">Social Sciences, Psychology, Education</td>
                                        <td className="p-3">Author-Date</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium">AMA</td>
                                        <td className="p-3 border-r border-gray-200">American Medical Association</td>
                                        <td className="p-3 border-r border-gray-200">Medicine, Clinical Research, Health Sciences</td>
                                        <td className="p-3">Numerical Superscript</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium">MLA</td>
                                        <td className="p-3 border-r border-gray-200">Modern Language Association</td>
                                        <td className="p-3 border-r border-gray-200">Humanities, Literature, Arts</td>
                                        <td className="p-3">Author-Page</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 font-medium">Vancouver</td>
                                        <td className="p-3 border-r border-gray-200">Vancouver Style Committee (ICMJE)</td>
                                        <td className="p-3 border-r border-gray-200">Biomedical Research, Life Sciences</td>
                                        <td className="p-3">Numerical Brackets</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4">
                            These formats also form part of the <strong className="text-gray-900">medical research paper checklist</strong> followed by academic and clinical researchers worldwide.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">2. APA (American Psychological Association)</h2>
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full border-collapse border border-gray-200 text-xs md:text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200 font-bold text-gray-800">
                                        <th className="p-3 border-r border-gray-200 w-1/4">In-Text Citation</th>
                                        <th className="p-3 border-r border-gray-200 w-1/2">Reference List Format</th>
                                        <th className="p-3 w-1/4">Key Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 align-top">(Villacampa, 2025)</td>
                                        <td className="p-3 border-r border-gray-200 align-top">
                                            Villacampa, G., Pascual, T., Tarantino, P., Cortés, J., Perez-García, J., Llombart-Cussac, A., Conte, P., Mancino, M., Guarneri, V., Dieci, M. V., Waks, A. G., Schettini, F., Brasó-Maristany, F., Griguolo, G., de Castro, B. A., Reboredo, C., Antolín, S., Bueno-Muiño, C., Echavarría, I., ... Tolaney, S. M. (2025). HER2DX and survival outcomes in early-stage HER2-positive breast cancer: an individual patient-level meta-analysis. <em>The Lancet Oncology</em>. <a href="https://doi.org/10.1016/S1470-2045(25)00276-1" className="text-blue-600 hover:underline break-all">https://doi.org/10.1016/S1470-2045(25)00276-1</a>
                                        </td>
                                        <td className="p-3 align-top space-y-2">
                                            <p>• Emphasizes date of publication</p>
                                            <p>• Common across behavioral sciences</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            For researchers using <strong className="text-gray-900">writing research papers for biomedical journals</strong>, APA is a common style in interdisciplinary studies involving social sciences and health outcomes.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">3. AMA (American Medical Association)</h2>
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full border-collapse border border-gray-200 text-xs md:text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200 font-bold text-gray-800">
                                        <th className="p-3 border-r border-gray-200 w-1/4">In-Text Citation</th>
                                        <th className="p-3 border-r border-gray-200 w-1/2">Reference List Format</th>
                                        <th className="p-3 w-1/4">Key Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 align-top">
                                            Climate change has significantly increased adverse effects on human health and economic growth<sup>1</sup>
                                        </td>
                                        <td className="p-3 border-r border-gray-200 align-top">
                                            Liao S, Pan W, Wen L, et al. Temperature-related hospitalization burden under climate change. <em>Nature</em>. Published online 2025. doi:10.1038/s41586-025-09352-w
                                        </td>
                                        <td className="p-3 align-top space-y-2">
                                            <p>• Numerical order as cited</p>
                                            <p>• Preferred in medical journals</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Widely used in <strong className="text-gray-900">medical writing for pharmaceutical companies</strong> and <strong className="text-gray-900">manuscript writing for pharma and biotech professionals</strong>, AMA format supports clarity and brevity in clinical documents.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">4. MLA (Modern Language Association)</h2>
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full border-collapse border border-gray-200 text-xs md:text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200 font-bold text-gray-800">
                                        <th className="p-3 border-r border-gray-200 w-1/4">In-Text Citation</th>
                                        <th className="p-3 border-r border-gray-200 w-1/2">Reference List Format</th>
                                        <th className="p-3 w-1/4">Keyword</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 align-top">(Yoshida, 2025)</td>
                                        <td className="p-3 border-r border-gray-200 align-top">
                                            Yoshida, Nagisa, et al. &quot;Interactions between Placental Hofbauer Cells and L. Monocytogenes Change throughout Gestation.&quot; <em>Science Immunology</em>, vol. 10, no. 109, 2025, p. eadq3066, doi:10.1126/sciimmunol.adq3066
                                        </td>
                                        <td className="p-3 align-top space-y-2">
                                            <p>• Common in liberal arts journals</p>
                                            <p>• Concentrates on the author and page number</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Often used alongside <strong className="text-gray-900">best practices for clinical manuscript writing</strong> in interdisciplinary humanities and health communication research.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">5. Vancouver Style</h2>
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full border-collapse border border-gray-200 text-xs md:text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200 font-bold text-gray-800">
                                        <th className="p-3 border-r border-gray-200 w-1/4">In-Text Citation</th>
                                        <th className="p-3 border-r border-gray-200 w-1/2">Reference List Format</th>
                                        <th className="p-3 w-1/4">Keyword</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border-r border-gray-200 align-top">(Mroz NM, P 2025)</td>
                                        <td className="p-3 border-r border-gray-200 align-top">
                                            Mroz NM, Chiaranunt P, Molofsky AV, Molofsky AB. Cross-regulation between the nervous system and type 2 immunity. <em>Sci Immunol</em> [Internet]. 2025;10(107):eadp6450. <a href="http://dx.doi.org/10.1126/sciimmunol.adp6450" className="text-blue-600 hover:underline break-all">http://dx.doi.org/10.1126/sciimmunol.adp6450</a>
                                        </td>
                                        <td className="p-3 align-top space-y-2">
                                            <p>• Followed by most biomedical journals</p>
                                            <p>• Developed by the International Committee of Medical Journal Editors (ICMJE)</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            The Vancouver style is critical for <strong className="text-gray-900">medical device research publication tips</strong> and clinical trial reports, aligning with <strong className="text-gray-900">life science manuscript submission guide</strong> recommendations.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">6. Best Practices for Using Citation Styles</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Always look at the journal&apos;s submission guidelines for styles they require.</li>
                            <li>Use citation management software like EndNote, Zotero, or Mendeley.</li>
                            <li>Cite consistently in both in-text citations and reference list.</li>
                            <li>If you use journals that cross-check citations, be sure to double-check your citations before you submit.</li>
                        </ul>
                        <p className="mt-4">
                            Researchers following <strong className="text-gray-900">journal writing tips for biotech researchers</strong> or working on <strong className="text-gray-900">research article sections and flow</strong> benefit from strict adherence to citation styles.
                        </p>
                    </section>

                    {/* Conclusion */}
                    <section>
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Conclusion</h2>
                        <p>
                            No matter whether you write in the field of psychology, medicine, humanities, or biomedical research, it is important that you not only know what the correct citation style is and use it consistently, for academic writing purposes. Recognizing the differences between APA, AMA, MLA, Vancouver, and others can help you to adhere to publication standards and uphold scholarly integrity.
                        </p>
                    </section>

                    {/* References */}
                    <section className="pt-6 border-t border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">References</h2>
                        <ol className="list-decimal pl-5 space-y-4 text-xs md:text-sm">
                            <li className="pl-1">
                                Villacampa, G., Pascual, T., Tarantino, P., Cortés, J., Perez-García, J., Llombart-Cussac, A., Conte, P., Mancino, M., Guarneri, V., Dieci, M. V., Waks, A. G., Schettini, F., Brasó-Maristany, F., Griguolo, G., de Castro, B. A., Reboredo, C., Antolín, S., Bueno-Muiño, C., Echavarría, I., ... Tolaney, S. M. (2025). HER2DX and survival outcomes in early-stage HER2-positive breast cancer: an individual patient-level meta-analysis. <em>The Lancet Oncology</em>. <a href="https://doi.org/10.1016/S1470-2045(25)00276-1" className="text-blue-600 hover:underline break-all">https://doi.org/10.1016/S1470-2045(25)00276-1</a>
                            </li>
                            <li className="pl-1">
                                Liao, S., Pan, W., Wen, L., Chen, R., Pan, D., Wang, R., Hu, C., Duan, H., Weng, H., Tian, C., Kong, W., Jinghan, R., Zhang, Y., Xi, M., Zhang, X., & Wang, X. (2025). Temperature-related hospitalization burden under climate change. <em>Nature</em>. <a href="https://doi.org/10.1038/s41586-025-09352-w" className="text-blue-600 hover:underline break-all">https://doi.org/10.1038/s41586-025-09352-w</a>
                            </li>
                            <li className="pl-1">
                                Yoshida, N., Appios, A., Li, Q., Hutton, J. P., Wood, G., Potts, M., Aleksandrowicz, J., Barrozo, E. R., Dover, F., Anderson, H., Stephens, K., Aye, I. L. M. H., Thomas, J. R., Schenk, H. C. M., Bourke, A. M., Aiken, C. E., Moffett, A., Sharkey, A., Protasio, A. V., ... McGovern, N. (2025). Interactions between placental Hofbauer cells and L. monocytogenes change throughout gestation. <em>Science Immunology</em>, 10(109), eadq3066. <a href="https://doi.org/10.1126/sciimmunol.adq3066" className="text-blue-600 hover:underline break-all">https://doi.org/10.1126/sciimmunol.adq3066</a>
                            </li>
                            <li className="pl-1">
                                Mroz, N. M., Chiaranunt, P., Molofsky, A. V., & Molofsky, A. B. (2025). Cross-regulation between the nervous system and type 2 immunity. <em>Science Immunology</em>, 10(107), eadp6450. <a href="https://doi.org/10.1126/sciimmunol.adp6450" className="text-blue-600 hover:underline break-all">https://doi.org/10.1126/sciimmunol.adp6450</a>
                            </li>
                        </ol>
                    </section>

                </main>
            </div>
        </div>
    );
}