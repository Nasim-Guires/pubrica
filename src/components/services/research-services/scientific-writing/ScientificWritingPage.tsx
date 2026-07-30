import React from 'react';
import {
    CheckCircle2,
    Users2,
    ShieldCheck,
    GraduationCap,
    LucideIcon
} from 'lucide-react';

// --- Types ---
interface FeatureItem {
    id: number;
    icon: LucideIcon;
    title: string;
}

// --- Data ---
const WHY_CHOOSE_ITEMS: FeatureItem[] = [
    {
        id: 1,
        icon: CheckCircle2,
        title: '1000+ projects completed',
    },
    {
        id: 2,
        icon: Users2,
        title: 'Subject-matter experts across 40+ disciplines',
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: '100% confidentiality and originality',
    },
    {
        id: 4,
        icon: GraduationCap,
        title: 'University & journal-compliant writing',
    },
];

export const ScientificWritingPage: React.FC = () => {
    return (
        <div className="w-full bg-slate-50 min-h-screen py-10 font-sans text-slate-800">

            {/* ================= 1. HERO BANNER ================= */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-[#112a28] text-white py-12 px-6 sm:px-12 rounded-xs border border-teal-500/30 text-center shadow-md">
                    <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide mb-4">
                        Scientific & Academic Medical Writing
                    </h1>
                    <p className="max-w-3xl mx-auto text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                        The common reasons many manuscripts are rejected is due to poor structure or unclear writing. Our experts will convert your research into a clear, well-structured, publication-ready manuscript that meets the standards of a journal.
                    </p>
                </div>
            </section>

            {/* ================= 2. RECOMMENDATIONS CALLOUT BANNER ================= */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0b3b36]">
                    More than 1 Million Researchers are Already Using Pubrica’s Recommendations
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                    Our free Recommendations service uses machine learning and your online activity to suggest research tailored to your needs.
                </p>
                <div className="pt-2">
                    <button
                        type="button"
                        className="bg-[#c81e1e] hover:bg-[#a61717] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                    >
                        View Brochure
                    </button>
                </div>
            </section>

            {/* ================= 3. DETAILED CONTENT SECTION ================= */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0b3b36] leading-snug">
                    Scientific & Academic Medical Writing for Life Sciences, Pharma, and Research: Communicating Complex Research with Clarity and Precision
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    As an academic medical writing service and expert in scientific writing, we guarantee your research is written clearly, accurately, and in alignment with journal and ethical standards—an assurance of your value and credibility, and an increased likelihood of successful publication.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clear, concise, and consistent scientific writing helps you to achieve academic standards and then communicate your research to the intended audience for successful publication.
                </p>

                <div className="space-y-3 pt-2">
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                        With Pubrica&apos;s Scientific & Academic Medical Writing service, we can assist researchers, pharmaceutical companies, and medical device companies:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-4">
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-800 mt-1.5 shrink-0"></span>
                            <span>Communicate complex research in a clear, accurate and structured format</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-800 mt-1.5 shrink-0"></span>
                            <span>Understand and comply with international publication guidelines (e.g., ICMJE, CONSORT, GPP, COPE)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-800 mt-1.5 shrink-0"></span>
                            <span>Eliminate rejections due to language, formatting and scientific presentation issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-800 mt-1.5 shrink-0"></span>
                            <span>Produce manuscripts with solid impact adhering to specific journal guidelines.</span>
                        </li>
                    </ul>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Numerous researchers grapple with hurdles such as language variation, unclear structure, and unfamiliarity with journal requirements that cause unwanted delays and even rejections. Our team consists of scientific writers and editors with experience facing similar issues, and we know how to turn your research into a strong, publishable manuscript.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We will work with you closely so that your <span className="text-teal-600 font-medium">scientific writing</span>, medical, or health communication content is clear, concise, and ethically compliant. Our customized choice of writing solutions can help increase acceptance rates and ensure that you produce academic output to a high standard of quality that meets publication guidelines in a non-systematic way, whether it is original research articles, systematic reviews, or case reports.
                </p>

                <div className="pt-4">
                    <button
                        type="button"
                        className="bg-[#c81e1e] hover:bg-[#a61717] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                    >
                        Request Free Consultation
                    </button>
                </div>
            </section>

            {/* ================= 4. WHY CHOOSE PUBRICA ================= */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#0b3b36]">
                        Why Choose Pubrica
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                        We help you make the writing process easy, from journal selection to submission. Speed up your publication goals with experienced Medical and <span className="text-teal-600 font-medium">Scientific writing</span> assistance from Pubrica. We provide clarity, compliance and credibility in every manuscript.
                    </p>
                </div>

                {/* 4 Columns Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l border-r border-slate-200/80 bg-white">
                    {WHY_CHOOSE_ITEMS.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center p-6 border-b sm:border-b-0 border-r last:border-r-0 border-slate-200/80 space-y-4"
                            >
                                <div className="w-16 h-16 rounded-full border-2 border-slate-800 flex items-center justify-center p-2 text-slate-800">
                                    <IconComponent className="w-8 h-8 stroke-[1.5]" />
                                </div>
                                <p className="text-xs font-bold text-slate-800 leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
};

export default ScientificWritingPage;