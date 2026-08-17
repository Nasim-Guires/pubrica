import Image from "next/image";

export default function BiomolecularEngineeringPage() {
    return (
        <section>

            {/* Hero Banner */}
            <div className="bg-[#062526] py-10">
                <div className="max-w-5xl mx-auto border border-white/40 px-6 py-8 text-center">

                    <h1 className="text-white text-4xl font-bold mb-4">
                        Biomolecular Engineering
                    </h1>

                    <p className="text-white text-lg leading-relaxed">
                        Comprehensive research, publication, and editing support for biomolecular engineering scholars,
                        researchers, and industry experts, advancing innovation in molecular design, biotechnology,
                        and engineered biological systems.
                    </p>

                </div>
            </div>



            {/* Main Content */}
            <div className="bg-[#f8f8f8] py-16">

                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


                    {/* Left Content */}
                    <div>

                        <h2 className="text-[#073540] text-3xl font-bold leading-snug mb-6">
                            Transforming molecules into real-world solutions through innovation,
                            precision, and advanced biological engineering.
                        </h2>


                        <p className="text-gray-700 leading-7 mb-5">
                            Biomolecular Engineering is a rapidly evolving field that integrates molecular biology,
                            biotechnology, chemistry, and engineering principles to design, analyze, and manipulate
                            biological molecules for practical applications. As modern science increasingly shifts
                            toward precision medicine, sustainable energy, and advanced bioprocessing, biomolecular
                            engineering has emerged as a foundational discipline driving transformative innovations.
                            At Pubrica, we offer biomolecular engineering services, biomolecular engineering research
                            support, and comprehensive academic solutions for scholars, scientists, and industry
                            professionals engaged in this multidisciplinary domain. Our services are designed to
                            enhance the quality, accuracy, and impact of research deliverables across all areas of
                            biomolecular engineering.
                        </p>


                        <p className="text-gray-700 leading-7 mb-5">
                            Biomolecular Engineering focuses on the study and manipulation of biological systems at
                            the molecular level. It applies engineering strategies to understand the structure,
                            function, and interactions of biomolecules such as DNA, RNA, proteins, enzymes, and
                            metabolic pathways. Through computational design, synthetic biology tools, gene
                            regulation techniques, and advanced bioprocessing methods, biomolecular engineers
                            develop solutions for complex biological challenges.
                        </p>


                        <p className="text-gray-700 leading-7 mb-6">
                            With our computational biomolecular engineering support, researchers gain deeper insights
                            into molecular behavior using advanced predictive tools.
                        </p>


                        <button
                            className="
                            bg-red-600 
                            hover:bg-red-700 
                            text-white 
                            px-8 
                            py-3 
                            rounded-full 
                            font-semibold
                            transition
                            "
                        >
                            Get a Free Quote
                        </button>


                    </div>



                    {/* Right Image */}
                    <div className="flex justify-center">

                        <div className="
                            w-[320px]
                            h-[320px]
                            rounded-full
                            overflow-hidden
                        ">

                            <Image
                                src="/images/subject-matter-experts/biomolecular-engineering/Biomolecular-Engineering.webp"
                                alt="Biomolecular Engineering"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </div>


                </div>

            </div>

        </section>
    );
}