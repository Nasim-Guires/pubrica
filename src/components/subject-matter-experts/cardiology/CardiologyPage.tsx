"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Zap,
    HeartPulse,
    Scissors,
    Baby,
    Stethoscope,
    FileText,
    CheckCircle,
    Image as ImageIcon,
    UserCheck,
    Send,
    BookOpen,
    MessageSquare,
    PenTool,
    Search,
    ChevronDown,
    ArrowRight
} from 'lucide-react';

export default function CardiologyPage() {
    const disciplines = [
        {
            title: "Interventional Cardiology",
            description: "Focused on catheter-based treatments for heart diseases, including angioplasty and stenting, our team provides detailed editorial and research support for studies on minimally invasive procedures and emerging technologies.",
            icon: HeartPulse
        },
        {
            title: "Electrophysiology",
            description: "From arrhythmia management to advanced cardiac pacing techniques, we support research in heart rhythm disorders, device therapies, and diagnostic innovations.",
            icon: Zap
        },
        {
            title: "Heart Failure and Transplantation",
            description: "Our specialists assist in research on acute and chronic heart failure, ventricular assist devices, and cardiac transplantation, ensuring clarity and scientific rigor in manuscripts and grant proposals.",
            icon: Activity
        },
        {
            title: "Cardiac Surgery",
            description: "We assist researchers in cardiac surgical techniques, postoperative outcomes, and innovative surgical interventions, ensuring manuscripts meet international publication standards.",
            icon: Scissors
        },
        {
            title: "Paediatric Cardiology",
            description: "Research involving congenital heart defects, paediatric heart surgery, and childhood cardiovascular disorders receives specialized attention to maintain accuracy and readability for diverse audiences.",
            icon: Baby
        },
        {
            title: "Cardiovascular Imaging",
            description: "Our team aids in studies using echocardiography, MRI, CT, and nuclear imaging to advance non-invasive diagnostic techniques, providing precise scientific editing for high-impact publications.",
            icon: Stethoscope
        }
    ];

    const services = [
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: FileText
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            icon: CheckCircle
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
            icon: ImageIcon
        },
        {
            title: "Peer-Review",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=600&q=80",
            icon: UserCheck
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
            icon: Send
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
            icon: BookOpen
        },
        {
            title: "Responding to Reviewers",
            description: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
            icon: MessageSquare
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            icon: PenTool
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
            icon: Search
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Cardiology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editing support for cardiology scholars, researchers, and healthcare professionals, advancing cardiovascular science and patient care.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Research Excellence in Cardiology through Expert Guidance
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cardiology is the study of the cardiovascular system, and it is also called the circulatory system or vascular system. It is a specialized branch of medicine focused on the diagnosis, treatment, and prevention of diseases and conditions related to the heart and blood vessels. The human heart is a vital organ responsible for pumping blood throughout the body, supplying oxygen and nutrients to tissues, and maintaining overall physiological balance. Due to the critical role of the cardiovascular system, any disruption in heart function can have serious health consequences, ranging from mild fatigue to life-threatening conditions such as heart attacks or heart failure.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cardiology plays a crucial role in modern medicine, given that cardiovascular diseases (CVDs) remain one of the leading causes of morbidity and mortality worldwide. According to the World Health Organization (WHO), an estimated 17.9 million people die each year from CVDs, accounting for 32% of global deaths. Conditions such as coronary artery disease, arrhythmias, valvular heart disease, and congenital heart defects require specialized medical attention. Cardiologists not only treat these conditions but also emphasize preventive care, helping patients reduce risk factors such as hypertension, high cholesterol, smoking, obesity, and sedentary lifestyles.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/order-now"
                                className="inline-block bg-[#C4161C] hover:bg-[#a31217] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                                alt="Cardiology medical research anatomical heart model"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 320px, 380px"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Cardiology
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide comprehensive support in the field of cardiology, assisting researchers, clinicians, and industry professionals in advancing cardiovascular science. Our expertise spans multiple core disciplines in cardiology, ensuring comprehensive care and research excellence:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {disciplines.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <article
                                    key={index}
                                    className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-base font-bold text-[#9E1B1E] group-hover:text-[#7d1417] transition-colors pr-2">
                                                {item.title}
                                            </h3>
                                            <div className="p-2 bg-gray-50 rounded-lg shrink-0 text-[#0e3b32]">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Why Choose Pubrica for Cardiology Research and Publishing?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we empower cardiology researchers, clinicians, and industry professionals to achieve excellence in scientific research and publication. Our specialized services are designed to support every stage of your research journey, from conceptualization to publication.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <article
                                key={index}
                                className="relative h-[260px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group cursor-pointer"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Bottom White Overlay Card */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description */}
                                    <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}