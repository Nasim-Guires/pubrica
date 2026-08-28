import React from "react";
import Image from "next/image";
import { EnquireNowForm, EnquireFormData } from "./EnquireNowForm";

export interface BlogArticle {
    title: string;
    date?: string;
    commentsCount?: number;
    image?: string;
    link?: string;
}

export interface TableColumnData {
    title: string;
    items: string[];
}

export interface BlogPayload {
    title: string;
    bannerImage: string;
    bannerAlt?: string;
    introParagraphs: string[];
    sections: {
        id?: string;
        heading: string;
        paragraphs?: string[];
        bulletPoints?: string[];
        infographicImage?: string;
    }[];
    tableSection?: {
        heading: string;
        subtext?: string;
        columns: TableColumnData[];
    };
    conclusionParagraphs?: string[];
    callToAction?: string;
    references?: string[];
    interestingBlogs?: BlogArticle[];
}

interface BlogPostProps {
    payload: BlogPayload;
    onFormSubmit?: (formData: EnquireFormData) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ payload, onFormSubmit }) => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Banner Header */}
            <div className="relative h-64 md:h-80 w-full bg-gray-900">
                <Image
                    src={payload.bannerImage}
                    alt={payload.bannerAlt || payload.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h1 className="max-w-4xl text-center text-2xl md:text-4xl font-bold text-white leading-tight">
                        {payload.title}
                    </h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="mx-auto max-w-7xl px-4 py-8 md:py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main Article Content */}
                    <main className="lg:col-span-8 bg-white p-6 md:p-10 rounded-lg border border-gray-100 shadow-sm">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            {payload.title}
                        </h1>

                        {/* Intro Paragraphs */}
                        {payload.introParagraphs.map((paragraph, index) => (
                            <p key={index} className="mb-4 text-base leading-relaxed text-gray-700">
                                {paragraph}
                            </p>
                        ))}

                        {/* Content Sections */}
                        {payload.sections.map((section, idx) => (
                            <section key={idx} id={section.id} className="mt-8">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    {section.heading}
                                </h2>

                                {section.paragraphs?.map((p, pIdx) => (
                                    <p key={pIdx} className="mb-3 text-base leading-relaxed text-gray-700">
                                        {p}
                                    </p>
                                ))}

                                {section.bulletPoints && section.bulletPoints.length > 0 && (
                                    <ul className="mb-4 list-disc pl-6 space-y-2 text-gray-700">
                                        {section.bulletPoints.map((point, bpIdx) => (
                                            <li key={bpIdx}>{point}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.infographicImage && (
                                    <div className="my-6 relative w-full h-auto flex justify-center">
                                        <Image
                                            src={section.infographicImage}
                                            alt={section.heading}
                                            width={700}
                                            height={450}
                                            className="rounded-md object-contain border border-gray-100"
                                        />
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* Optional Structured Dynamic Table Section */}
                        {payload.tableSection && (
                            <section className="mt-10">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                    {payload.tableSection.heading}
                                </h2>
                                {payload.tableSection.subtext && (
                                    <p className="mb-4 text-gray-700">{payload.tableSection.subtext}</p>
                                )}

                                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 border-b border-gray-200">
                                                {payload.tableSection.columns.map((col, idx) => (
                                                    <th key={idx} className="p-3 font-semibold text-gray-900 text-sm border-r border-gray-200 last:border-r-0">
                                                        {col.title}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {payload.tableSection.columns.map((col, cIdx) => (
                                                    <td key={cIdx} className="p-3 align-top border-r border-gray-200 last:border-r-0 bg-white">
                                                        <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                                                            {col.items.map((item, itemIdx) => (
                                                                <li key={itemIdx}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        {/* Conclusion Section */}
                        {payload.conclusionParagraphs && payload.conclusionParagraphs.length > 0 && (
                            <section className="mt-10 border-t border-gray-100 pt-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-3">Conclusion</h2>
                                {payload.conclusionParagraphs.map((cPara, idx) => (
                                    <p key={idx} className="mb-4 text-base leading-relaxed text-gray-700">
                                        {cPara}
                                    </p>
                                ))}
                            </section>
                        )}

                        {payload.callToAction && (
                            <p className="italic font-medium text-gray-800 bg-gray-50 p-4 rounded border-l-4 border-[#063934] my-4">
                                {payload.callToAction}
                            </p>
                        )}

                        {/* References */}
                        {payload.references && payload.references.length > 0 && (
                            <section className="mt-8 border-t border-gray-200 pt-4">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">References</h3>
                                <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-2">
                                    {payload.references.map((ref, rIdx) => (
                                        <li key={rIdx}>{ref}</li>
                                    ))}
                                </ol>
                            </section>
                        )}
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 flex flex-col gap-8">
                        {/* Search Bar Widget */}
                        <div className="w-full bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center">
                            <span className="text-gray-400 mr-2">🔍</span>
                            <input
                                type="text"
                                placeholder="Enter your search"
                                className="w-full bg-transparent text-sm outline-none text-gray-700"
                            />
                        </div>

                        {/* Enquire Now Form Component */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Enquire Now</h4>
                            <EnquireNowForm onSubmit={onFormSubmit} />
                        </div>

                        {/* Interesting Blogs Widget */}
                        {payload.interestingBlogs && payload.interestingBlogs.length > 0 && (
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                                    Interesting Blogs
                                </h4>
                                <div className="flex flex-col gap-4">
                                    {payload.interestingBlogs.map((blog, idx) => (
                                        <div key={idx} className="flex gap-3 items-start">
                                            {blog.image && (
                                                <div className="relative w-16 h-16 flex-shrink-0">
                                                    <Image
                                                        src={blog.image}
                                                        alt={blog.title}
                                                        fill
                                                        className="object-cover rounded"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <a
                                                    href={blog.link || "#"}
                                                    className="text-sm font-semibold text-gray-800 hover:text-emerald-600 leading-snug line-clamp-2"
                                                >
                                                    {blog.title}
                                                </a>
                                                <div className="flex items-center text-xs text-gray-400 mt-1 gap-2">
                                                    {blog.date && <span>🕒 {blog.date}</span>}
                                                    {blog.commentsCount !== undefined && (
                                                        <span>💬 {blog.commentsCount}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>

                </div>
            </div>
        </div>
    );
};