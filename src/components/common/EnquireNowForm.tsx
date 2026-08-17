"use client";

import React, { useState } from "react";

export interface EnquireFormData {
    name: string;
    phone: string;
    email: string;
    services: string;
    country: string;
}

interface EnquireNowFormProps {
    onSubmit?: (data: EnquireFormData) => void;
}

export const EnquireNowForm: React.FC<EnquireNowFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<EnquireFormData>({
        name: "",
        phone: "",
        email: "",
        services: "",
        country: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        } else {
            console.log("Form Submitted:", formData);
        }
    };

    return (
        <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-[#063934] p-5 text-white shadow-md">
            <h3 className="mb-4 text-xl font-bold text-center text-white">
                Celebrate Freedom, Save 25% Today!
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                    <label className="block mb-1 text-xs font-medium text-gray-200">
                        Name <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded px-3 py-2 text-sm text-gray-800 bg-white outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-xs font-medium text-gray-200">
                        Phone <span className="text-red-400">*</span>
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center rounded-l border border-r-0 border-gray-300 bg-gray-100 px-2.5 text-xs text-gray-700">
                            🇮🇳 +91
                        </span>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full rounded-r px-3 py-2 text-sm text-gray-800 bg-white outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-1 text-xs font-medium text-gray-200">
                        Email <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded px-3 py-2 text-sm text-gray-800 bg-white outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-xs font-medium text-gray-200">
                        Services
                    </label>
                    <select
                        name="services"
                        value={formData.services}
                        onChange={handleChange}
                        className="w-full rounded px-3 py-2 text-sm text-gray-800 bg-white outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                        <option value="">Services</option>
                        <option value="journal-submission">Journal Submission</option>
                        <option value="manuscript-editing">Manuscript Editing</option>
                        <option value="plagiarism-check">Plagiarism Check</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 text-xs font-medium text-gray-200">
                        Country
                    </label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded px-3 py-2 text-sm text-gray-800 bg-white outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                        <option value="">Country</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="india">India</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full rounded bg-[#10b981] py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};