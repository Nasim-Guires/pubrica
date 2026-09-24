import React from "react";

export default function Loading() {
    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans pb-10 animate-pulse">
            {/* Header Banner Skeleton */}
            <section className="bg-[#0b2825] py-6 px-4 text-center">
                <div className="h-8 w-64 bg-slate-700 mx-auto rounded mb-3" />
                <div className="h-4 max-w-lg bg-slate-700/60 mx-auto rounded" />
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar Skeleton */}
                <aside className="lg:col-span-3 flex flex-col gap-6">
                    <div className="bg-white p-5 rounded-md border border-gray-200/80 shadow-xs">
                        <div className="h-4 w-28 bg-slate-200 rounded mb-4" />
                        <div className="flex flex-col gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-6 bg-slate-100 rounded w-full" />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-md border border-gray-200/80 shadow-xs">
                        <div className="h-4 w-32 bg-slate-200 rounded mb-4" />
                        <div className="flex flex-col gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="h-5 bg-slate-100 rounded w-3/4" />
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Q&A Cards Skeleton */}
                <main className="lg:col-span-9 flex flex-col gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-white p-5 rounded-md border border-gray-200/80 shadow-xs flex flex-col gap-2"
                        >
                            <div className="h-4 w-24 bg-emerald-100 rounded-full mb-1" />
                            <div className="h-5 w-3/4 bg-slate-200 rounded" />
                            <div className="h-3 w-32 bg-slate-100 rounded" />
                            <div className="h-4 w-full bg-slate-100 rounded mt-1" />
                            <div className="h-4 w-5/6 bg-slate-100 rounded" />
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}