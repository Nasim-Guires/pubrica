import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ActionButton {
    label: string;
    url: string;
}

export interface TextLinkSegment {
    text: string;
    url?: string;
}

export interface ReportSection {
    heading: string;
    headingTag?: 'h2' | 'h3';
    descriptionSegments?: TextLinkSegment[];
    button: ActionButton;
}

export interface PubricaSampleWorkCardProps {
    bookCoverImage: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    sections: ReportSection[];
    footerDisclaimerSegments: TextLinkSegment[];
}

export const PubricaSampleWorkCard: React.FC<PubricaSampleWorkCardProps> = ({
    bookCoverImage,
    sections,
    footerDisclaimerSegments,
}) => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 font-poppins">
            <div className="max-w-6xl mx-auto bg-[#effcf4] border border-emerald-100/40 rounded-2xl p-6 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Left Cover Book Graphic */}
                    <div className="md:col-span-4 flex justify-center">
                        <div className="relative group w-full max-w-[240px] shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-md">
                            <Image
                                src={bookCoverImage.src}
                                alt={bookCoverImage.alt}
                                width={bookCoverImage.width}
                                height={bookCoverImage.height}
                                className="w-full h-auto object-cover transition duration-700"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Download Information */}
                    <div className="md:col-span-8 space-y-6">
                        {sections.map((section, idx) => (
                            <div key={idx} className={`${idx > 0 ? 'pt-2' : ''} flex flex-col items-center sm:items-start text-center sm:text-left`}>
                                <h3 className={`${idx === 0 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold font-poppins text-black tracking-tight ${section.descriptionSegments ? 'mb-3' : ''}`}>
                                    {section.heading}
                                </h3>

                                {section.descriptionSegments && (
                                    <p className="text-[#222222] font-poppins text-[16px] font-normal max-w-xl leading-[1.6]">
                                        {section.descriptionSegments.map((segment, sIdx) =>
                                            segment.url ? (
                                                <Link
                                                    key={sIdx}
                                                    href={segment.url}
                                                    className="text-[#64a2c7] font-normal cursor-pointer hover:underline"
                                                >
                                                    {segment.text}
                                                </Link>
                                            ) : (
                                                <span key={sIdx}>{segment.text}</span>
                                            )
                                        )}
                                    </p>
                                )}

                                <Link
                                    href={section.button.url}
                                    className={`${idx === 0 ? 'mt-4' : 'mt-5'} w-full sm:w-auto min-w-[320px] py-2 bg-black hover:bg-slate-900 active:scale-95 text-white font-medium text-[16px] font-poppins rounded-full transition-all inline-flex items-center justify-center text-center`}
                                >
                                    {section.button.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Quality Statement */}
                <p className="mt-10 pt-6 border-t border-emerald-200/40 font-poppins text-[16px] font-normal text-[#111111] leading-[1.7] text-center sm:text-left">
                    {footerDisclaimerSegments.map((segment, idx) =>
                        segment.url ? (
                            <Link
                                key={idx}
                                href={segment.url}
                                className="text-[#64a2c7] font-normal cursor-pointer hover:underline"
                            >
                                {segment.text}
                            </Link>
                        ) : (
                            <span key={idx}>{segment.text}</span>
                        )
                    )}
                </p>
            </div>
        </section>
    );
};