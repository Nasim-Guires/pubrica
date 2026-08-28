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

const expertsData: ExpertItem[] = [
    {
        name: 'Dr. Arjun Mehta',
        qualification: 'PhD in Linguistics',
        university: 'Jawcharlal Nehru University, India',
        experience: '10+ Years of Experience',
        stats: '800+ Datasets & Manuscripts Prepared',
        image: '/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Arjun-Mehta.png',
    },
    {
        name: 'Dr. Priya Rao',
        qualification: 'PhD in Life Sciences',
        university: 'University of Delhi, India',
        experience: '8+ Years of Experience',
        stats: '400+ AI Ready Research Datasets',
        image: '/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Priya-Rao.png',
    },
    {
        name: 'Dr. Rohan Iyer',
        qualification: 'PhD in Biotechnology',
        university: 'Indian Institute of Technology, Bombay',
        experience: '9+ Years of Experience',
        stats: '800+ AI Optimized Scientific Datasets',
        image: '/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Rohan-Iyer.png',
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
            <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Meet Our AI and Data Preparation Experts
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {expertsData.map((expert, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image src={expert.image} alt={expert.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center space-x-1.5">
                                        <h3 className="font-bold text-gray-900 text-base">{expert.name}</h3>
                                        <Image
                                            src="/images/editing-and-translation/manuscript-editing/india.png"
                                            alt=""
                                            width={18}
                                            height={12}
                                            className="h-3 w-auto object-contain"
                                        />
                                    </div>
                                    <p className="text-xs font-semibold text-gray-700 mt-0.5">{expert.qualification}</p>
                                    <p className="text-[11px] text-gray-500">{expert.university}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 flex justify-between text-center">
                                <div>
                                    <p className="text-xs font-bold text-gray-900">{expert.experience}</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Experience</p>
                                </div>
                                <div className="border-r border-gray-100"></div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">{expert.stats}</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Prepared</p>
                                </div>
                            </div>

                            <Link href="/about-us/our-editors" className="w-full text-center py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-800 hover:bg-gray-50 transition-colors">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* AI AND DATA PREPARATION SERVICES SAMPLE WORK BANNER */}
            <section className="w-full bg-[#eaf4ef] py-7 px-4 md:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-md bg-white">
                        <Image
                            src="/images/education-editorial-service/ai-and-data-preparation-services/AI-and-Data-Preparation-Services-Sample-Work.webp"
                             alt="AI and Data Preparation Services Sample Work"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            AI and Data Preparation Services Sample Work
                        </h2>
                        <div>
                            <Link href="/insights/sample-work" className="inline-block bg-black text-white font-bold text-xs py-3 px-8 rounded-full hover:bg-gray-800 transition-colors shadow">
                                Discover More
                            </Link>
                        </div>

                        <div className="space-y-3 pt-2">
                            <h3 className="text-lg font-bold text-gray-900">
                                Download the Full Data Preparation Sample Now
                            </h3>
                            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                Discover our AI and Data Preparation Sample Work created by professionals to meet Research Standards, to fulfil AI Readiness Saved art, and to provide you with quality data that will yield consistent and meaningful results.
                            </p>
                            <div className="pt-2">
                                <Link href="/insights/sample-work" className="inline-block bg-black text-white font-bold text-xs py-3 px-8 rounded-full hover:bg-gray-800 transition-colors shadow">
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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