import ExpertsSection, { Expert } from '@/components/common/ExpertsSection';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type DocumentItem = {
    title: string;
};

type ExpertItem = {
    name: string;
    qualification: string;
    university: string;
    experience: string;
    stats: string;
    image: string;
};

type FeatureItem = {
    title: string;
    description: string;
    borderColor: string;
};

const documentsData: DocumentItem[] = [
    { title: 'Research manuscripts' },
    { title: 'Abstracts' },
    { title: 'Case studies' },
    { title: 'Conference papers' },
    { title: 'Academic & Research Content' },
    { title: 'Medical & Healthcare Records' },
    { title: 'Clinical research documents' },
    { title: 'Theses and dissertations' },
    { title: 'Forms & Surveys' },
    { title: 'Grant proposals' },
];
const experts: Expert[] = [
    {
        id: "arjun-mehta",
        name: "Dr. Arjun Mehta",
        title: "PhD in Linguistics",
        institution: "Jawcharlal Nehru University, India",
        experience: "10+ Years of Experience",
        papersEdited: "800+ Datasets & Manuscripts Prepared",
        avatarUrl:
            "/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Arjun-Mehta.png",
        flagUrl:
            "/images/editing-and-translation/manuscript-editing/india.png",
        bio: "Dr. Mehta specializes in language-focused AI data preparation, including scientific text normalization, multilingual localization, and dataset refinement for NLP and LLM training. He ensures linguistic accuracy, cultural relevance, and compliance with global standards.",
        expertise:
            "AI Data Expertise: Text annotation, NLP datasets, multilingual corpus preparation. Domain Expertise: Biomedical sciences, clinical research, pharmaceutical studies",
        journals: "The Lancet, BMJ, Elsevier",
    },
    {
        id: "priya-rao",
        name: "Dr. Priya Rao",
        title: "PhD in Life Sciences",
        institution: "University of Delhi, India",
        experience: "8+ Years of Experience",
        papersEdited: "400+ AI Ready Research Datasets",
        avatarUrl:
            "/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Priya-Rao.png",
        flagUrl:
            "/images/editing-and-translation/manuscript-editing/india.png",
        bio: "Dr. Rao focuses on precision data refinement and annotation for life-science AI models. Her work ensures structured, high-quality datasets that meet international research and AI training requirements.",
        expertise:
            "AI Data Expertise: Data labeling, structured dataset creation, quality validation. Domain Expertise: Genetics, molecular biology, pharmacology",
        journals: "Nature Communications, PLOS ONE, Springer",
    },
    {
        id: "rohan-iyer",
        name: "Dr. Rohan Iyer",
        title: "PhD in Biotechnology",
        institution: "Indian Institute of Technology, Bombay",
        experience: "9+ Years of Experience",
        papersEdited: "800+ AI Optimized Scientific Datasets",
        avatarUrl:
            "/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Rohan-Iyer.png",
        flagUrl:
            "/images/editing-and-translation/manuscript-editing/india.png",
        bio: "Dr. Iyer ensures scientific accuracy and data integrity while preparing complex research content for AI model training, analytics, and automation workflows.",
        expertise:
            "AI Data Expertise: Scientific data curation, classification, validation. Domain Expertise: Biochemistry, molecular diagnostics, translational research",
        journals: "Cell, Scientific Reports, Wiley",
    },
];

const featuresData: FeatureItem[] = [
    {
        title: 'Domain-Expert Professionals',
        description: 'Our subject matter experts (SME) hold PhD\'s in their domains and specialize in providing scientifically accurate datasets that respect the unique context of each field; this is especially critical in the fields of Healthcare, Life Sciences, Research AI.',
        borderColor: 'border-l-4 border-amber-400',
    },
    {
        title: 'Data Preparation for High Quality and AI',
        description: 'Our Data Preparation process encompasses every aspect of data preparation including Data Cleaning, Data Normalization, Data Annotation and Data Structuring so that prepared datasets are fully optimized for ML, NLP and LLM training.',
        borderColor: 'border-l-4 border-teal-500',
    },
    {
        title: 'Multilingual Global Data Support',
        description: 'The preparation of multilingual data including localizing the language enables AI models to work effectively in many different cultural and regional contexts.',
        borderColor: 'border-l-4 border-purple-400',
    },
];

const AIDataPreparationSections: NextPage = () => {
    return (
        <div className="w-full bg-white text-gray-800 space-y-20 pb-7">

            {/* TYPES OF DOCUMENTS WE SUPPORT */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Types Of Documents We Support
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {documentsData.map((doc, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                            <span className="w-6 h-6 rounded-full bg-[#0b3b2c]/10 text-[#0b3b2c] flex items-center justify-center text-xs font-bold shrink-0">
                                ➔
                            </span>
                            <span className="text-sm font-medium text-gray-800">{doc.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* MEET OUR AI AND DATA PREPARATION EXPERTS */}
            <ExpertsSection
                heading="Meet Our AI Data Preparation Experts"
                subheading="Our experienced experts prepare, refine, and validate high-quality scientific datasets for AI model training, analytics, and research workflows."
                experts={experts}
            />

            {/* AI AND DATA PREPARATION SERVICES SAMPLE WORK BANNER */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/education-editorial-service/ai-and-data-preparation-services/AI-and-Data-Preparation-Services-Sample-Work.webp",
                    alt: "AI and Data Preparation Services Sample Work",
                    width: 600,
                    height: 450,
                }}
                sections={[
                    {
                        heading: "AI and Data Preparation Services Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
                        },
                    },
                    {
                        heading: "Download the Full Data Preparation Sample Now",
                        descriptionSegments: [
                            {
                                text: "Discover our AI and Data Preparation Sample Work created by professionals to meet Research Standards, to fulfil AI Readiness Saved art, and to provide you with quality data that will yield consistent and meaningful results.",
                            },
                        ],
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work",
                        },
                    },
                ]}
                footerDisclaimerSegments={[]}
            />
            {/* WHY CHOOSE PUBRICA FOR AI AND DATA PREPARATION? */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Why Choose Pubrica for AI and Data Preparation?
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
                        Pubrica is trusted globally for its scientific expertise, editorial precision, and commitment to research integrity. Our services stand out because we provide:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuresData.map((feature, idx) => (
                        <div key={idx} className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3 ${feature.borderColor}`}>
                            <h3 className="font-bold text-gray-900 text-base">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default AIDataPreparationSections;