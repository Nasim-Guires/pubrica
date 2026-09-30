import Link from 'next/link';

interface StudyGuideItem {
    id: number;
    title: string;
    href: string; // Leave space for your internal link
}

const studyGuideItems: StudyGuideItem[] = [
    { id: 1, title: "Strategies for Clinical Data Integration in Medical Data Collection", href: "/insights/study-guide/strategies-for-clinical-data-integration-in-medical-data-collection/" },
    { id: 2, title: "What type of patient data is Collected in an EHR?", href: "/insights/study-guide/what-type-of-patient-data-is-collected-in-an-ehr/" },
    { id: 3, title: "A step-by-step guide to the process of publishing a research paper", href: "/insights/study-guide/step-by-step-guide-to-the-process-of-publishing-a-research-paper/" },
    { id: 4, title: "What are the guidelines for ICMJE reviewers?", href: "/insights/study-guide/what-are-the-guidelines-for-icmje-reviewers/" },
    { id: 5, title: "What is a statistical review in the publication process?", href: "/insights/study-guide/what-is-a-statistical-review-in-the-publication-process/" },
    { id: 6, title: "What is Epidemiological study design in meta-analysis research?", href: "/insights/study-guide/what-is-epidemiological-study-design-in-meta-analysis-research/" },
    { id: 7, title: "How important is scientific editing for research?", href: "/insights/study-guide/how-important-is-scientific-editing-for-research/" },
    { id: 8, title: "What Is the Purpose and Importance of Literature Reviews in Research?", href: "/insights/study-guide/what-is-the-purpose-and-importance-of-literature-reviews-in-research/" },
    { id: 9, title: "What are the most prevalent clinical examination methods in case reports?", href: "/insights/study-guide/the-most-prevalent-clinical-examination-methods-in-case-report/" },
    { id: 10, title: "How should a case presentation be structured?", href: "/insights/study-guide/how-should-a-case-presentation-be-structured/" },
    { id: 11, title: "What are the research applications of predictive analysis?", href: "/insights/study-guide/what-is-epidemiological-study-design-in-meta-analysis-research/" },
    { id: 12, title: "What is the significance of clinical research in biostatistics?", href: "/insights/study-guide/what-are-the-research-applications-of-predictive-analysis/" },
    { id: 13, title: "What Are The Principles Of Experimental Design For Research", href: "/insights/study-guide/the-principles-of-experimental-design-for-research/" },
    { id: 14, title: "A Step-by-Step Guide to develop an effective research proposal", href: "/insights/study-guide/guide-to-develop-an-effective-research-proposal/" },
    { id: 15, title: "What are the methods and techniques of data collection in health care research?", href: "/insights/study-guide/techniques-of-data-collection-in-health-care-research/" },
    { id: 16, title: "How to Choose the Best Title for Your Medical Research Paper", href: "/insights/study-guide/best-title-for-your-medical-research-paper/" },
    { id: 17, title: "How to assess publication bias in clinical research", href: "/insights/research-services/publication-bias-in-clinical-research/" },
    { id: 18, title: "How to conduct clinical trials?", href: "/insights/study-guide/how-to-conduct-clinical-trails/" },
    { id: 19, title: "What Qualifies as an Original Research Article in the looks of Reviewers?", href: "/insights/study-guide/what-qualifies-as-an-original-research-article-in-the-looks-of-reviewers/" },
    { id: 20, title: "What are examples of medical survey data collection?", href: "/insights/study-guide/what-are-examples-of-medical-survey-data-collection/" },
    { id: 21, title: "How to do a meta-analysis for a manuscript?", href: "/insights/study-guide/how-to-do-a-meta-analysis-for-a-manuscript/" },
    { id: 22, title: "How to Write a Systematic Review Manuscript?", href: "/insights/study-guide/how-to-write-a-systematic-review-manuscript/" },
    { id: 23, title: "How to Edit a Manuscript?", href: "/insights/study-guide/how-to-edit-a-manuscript/" },
    { id: 24, title: "What are the Guidelines for Writing a Case Report?", href: "/insights/study-guide/what-are-the-guidelines-for-writing-a-case-report/" },
    { id: 25, title: "How do you respond to the reviewers of your manuscript?", href: "/insights/study-guide/how-do-you-respond-to-the-reviewers-of-your-manuscript/" },
    { id: 26, title: "What are the different sorts of scientific communication in research methodology? ", href: "/insights/study-guide/different-sorts-of-scientific-communication-in-research-methodology/" },
    { id: 27, title: "How to Critically Peer Review a Systematic Review Manuscript?", href: "insights/study-guide/how-to-critically-peer-review-a-systematic-review-manuscript/" },
    { id: 28, title: "What Are The Process Involved In Journal Submission?", href: "/insights/study-guide/what-are-the-process-involved-in-journal-submission/" },
    { id: 29, title: "How should a Data-Analysis Write-Up For a Manuscript be Formatted?", href: "/insights/study-guide/how-should-a-data-analysis-write-up-for-a-manuscript-be-formatted/" },
    { id: 30, title: "What steps are involved in proofreading a manuscript?", href: "/insights/study-guide/what-steps-are-involved-in-proofreading-a-manuscript/" },
    { id: 31, title: "How to assess publication bias in clinical research", href: "/insights/research-services/publication-bias-in-clinical-research/" },
    { id: 32, title: "From Lab Notebook to Published Paper : A Beginner’s Journey into Scientific Writing", href: "/insights/study-guide/scientific-writing-journey/" },


];

export default function StudyGuidePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Banner Header */}
            <section className="bg-[#4D7C70] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-white/80 p-8 sm:p-12 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-wide">
                        Study Guide
                    </h1>
                    <p className="text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">
                        Pubrica’s Study Guide is a meticulously curated reservoir of knowledge, meticulously crafted to illuminate your
                        academic journey with clarity and precision. Empowering you to embark on a voyage of learning and discovery
                        with unwavering confidence and assurance.
                    </p>
                </div>
            </section>

            {/* Subtitle Section */}
            <section className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Your comprehensive companion for academic excellence, blending expertise with accessible insights, ensuring your journey through
                    research and study is guided with precision and clarity
                </p>
            </section>

            {/* Hyperlinked Cards List */}
            <section className="max-w-4xl mx-auto px-4 pb-20">
                <div className="flex flex-col gap-4">
                    {studyGuideItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href} // Add your internal link here later
                            className="block bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 text-[#1D82F5] hover:text-blue-700 font-medium text-sm sm:text-base"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}