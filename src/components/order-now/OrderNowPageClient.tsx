"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

export interface OrderFormData {
  name: string;
  country: string;
  mobileCode: string;
  mobileNumber: string;
  email: string;
  typeOfOrder: string;
  requirements: string;
  files: FileList | null;
}

export interface OrderNowFormProps {
  className?: string;
}

export default function OrderNowForm({ className = "" }: OrderNowFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    country: "",
    mobileCode: "+91",
    mobileNumber: "",
    email: "",
    typeOfOrder: "",
    requirements: "",
    files: null,
  });

  const [fileNameText, setFileNameText] = useState<string>("No files selected");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, files: e.target.files }));
      setFileNameText(
        e.target.files.length === 1
          ? e.target.files[0].name
          : `${e.target.files.length} files selected`
      );
    } else {
      setFormData((prev) => ({ ...prev, files: null }));
      setFileNameText("No files selected");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle submission logic
    console.log("Form Submitted:", formData);
  };

  return (
    <main className={`w-full bg-slate-50 min-h-screen font-sans ${className}`}>
      {/* Top Banner Section */}
      <header className="w-full bg-[#1b2b28] text-white py-6 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto border border-emerald-500/30 p-8 rounded-lg bg-emerald-950/20 shadow-sm">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
            Enquiry Now
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 font-medium max-w-2xl mx-auto">
            Unlock Your Research Potential – Order Now with Pubrica!
          </p>
        </div>
      </header>

      {/* Main Content Form Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-7">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Value Proposition & Contact Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#063326] via-[#094232] to-[#125844] p-8 sm:p-10 text-white flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-400/30">
                Fast Response Guaranteed
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                Get Customized Scientific Support for Your Project
              </h2>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Fill out the details to receive expert guidance, pricing estimates, and project roadmaps tailored to your research standards.
              </p>

              <div className="space-y-4 pt-4 border-t border-emerald-700/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-800/80 border border-emerald-600 flex items-center justify-center flex-shrink-0 text-emerald-300 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">500+ Medical Experts</h3>
                    <p className="text-[11px] text-emerald-200">Regulatory & research specialization across global markets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-800/80 border border-emerald-600 flex items-center justify-center flex-shrink-0 text-emerald-300 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Strict Confidentiality</h3>
                    <p className="text-[11px] text-emerald-200">Full NDA protection and HIPAA/GDPR data security.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Support Callout */}
            <div className="mt-8 pt-6 border-t border-emerald-700/50">
              <p className="text-[11px] text-emerald-200">Need immediate help?</p>
              <p className="text-xs font-semibold text-white">Email us: info@pubrica.com</p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-[#1b2b28] mb-6 border-b border-slate-100 pb-4">
              Fill Up Your Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  required
                />
              </div>

              {/* Country Field */}
              <div>
                <label htmlFor="country" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                >
                  <option value="">-Select Country-</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Mobile Number Field with Country Code Selection */}
              <div>
                <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="mobileCode"
                    value={formData.mobileCode}
                    onChange={handleChange}
                    className="w-24 px-2 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                  </select>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                  required
                />
              </div>

              {/* Type of Order Field */}
              <div>
                <label htmlFor="typeOfOrder" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Type of Order
                </label>
                <select
                  id="typeOfOrder"
                  name="typeOfOrder"
                  value={formData.typeOfOrder}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                >
                  <option value="">-Select Order Type-</option>
                  <option value="Product Development Services">Product Development Services</option>
                  <option value="Discovery & Intelligence Services">Discovery & Intelligence Services</option>
                  <option value="Medico-Legal Support Services">Medico-Legal Support Services</option>
                  <option value="Medical Writing & Publication">Medical Writing & Publication</option>
                  <option value="Other Research Support">Other Research Support</option>
                </select>
              </div>

              {/* Requirements Field */}
              <div>
                <label htmlFor="requirements" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe your project scope, timeline, or specific guidelines..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                />
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  File Upload
                </label>
                <div className="relative border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50/50 hover:bg-emerald-50/20 rounded-xl p-5 text-center transition-all cursor-pointer group">
                  <input
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-100/70 group-hover:bg-emerald-200/80 text-emerald-800 flex items-center justify-center text-lg transition-colors">
                      ↑
                    </div>
                    <p className="text-xs font-semibold text-slate-700 group-hover:text-emerald-900">
                      Click to upload or drag and drop files
                    </p>
                    <p className="text-[11px] text-slate-500">{fileNameText}</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#1b8c6e] hover:bg-[#146e56] text-white font-bold text-sm py-3.5 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}