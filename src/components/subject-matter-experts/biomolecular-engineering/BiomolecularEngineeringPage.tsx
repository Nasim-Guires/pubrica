import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";

export default function BiomolecularEngineeringPage() {
    return (
        <section>

            {/* Hero Banner */}
            <HeroBanner
                title="Biomolecular Engineering"
                description="Comprehensive research, publication, and editing support for biomolecular engineering scholars, researchers, and industry experts, advancing innovation in molecular design, biotechnology, and engineered biological systems."
                headingAs="h1"
            />



            {/* Main Content */}
            <div className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Section heading placed above everything like the reference image */}
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming molecules into real-world solutions through innovation, precision, and advanced biological engineering.
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/biomolecular-engineering/Biomolecular-Engineering.webp"
                                        alt="Biomolecular Engineering"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5 text-base leading-relaxed">
                                    <p>
                                        Biomolecular Engineering is a rapidly evolving field that integrates molecular biology,{' '}
                                        <Link href="/subject-matter-experts/biotechnology/" className="text-blue-600">
                                            biotechnology
                                        </Link>
                                        , chemistry, and engineering principles to design, analyze, and manipulate biological molecules for practical applications. As modern science increasingly shifts toward precision medicine, sustainable energy, and advanced bioprocessing, biomolecular engineering has emerged as a foundational discipline driving transformative innovations. At Pubrica, we offer biomolecular engineering services,{' '}
                                        <Link href="/services/research-services/" className="text-blue-600">
                                            biomolecular engineering research support
                                        </Link>
                                        , and comprehensive academic solutions for scholars, scientists, and industry professionals engaged in this multidisciplinary domain. Our services are designed to enhance the quality, accuracy, and impact of research deliverables across all areas of biomolecular engineering.
                                    </p>

                                    <p>
                                        Biomolecular Engineering focuses on the study and manipulation of biological systems at the molecular level. It applies engineering strategies to understand the structure, function, and interactions of biomolecules such as DNA, RNA, proteins, enzymes, and metabolic pathways. Through computational design, synthetic biology tools, gene regulation techniques, and advanced bioprocessing methods, biomolecular engineers develop solutions for complex biological challenges.
                                    </p>

                                    <p>
                                        With our computational biomolecular engineering support, researchers gain deeper insights into molecular behavior using advanced predictive tools.
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <GetFreeQuoteButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}