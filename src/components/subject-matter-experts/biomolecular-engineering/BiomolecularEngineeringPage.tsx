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
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Section heading placed above everything like the reference image */}
                <div className="space-y-4 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight max-w-4xl">
                        Transforming molecules into real-world solutions through innovation, precision, and advanced biological engineering.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
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

                      <GetFreeQuoteButton/>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
                            <Image
                                src="/images/subject-matter-experts/biomolecular-engineering/Biomolecular-Engineering.webp"
                                alt="Biomolecular Engineering"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}