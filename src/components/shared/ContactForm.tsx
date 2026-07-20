'use client';

import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phonePrefix: '+91',
    mobileNumber: '',
    email: '',
    orderType: '',
    requirements: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Form Data:', formData, 'File:', selectedFile);
  };

  return (
    <div className="bg-white p-2 sm:p-4 text-slate-800 font-sans">
      <form onSubmit={handleSubmit} className="space-y-7">
        
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-[13px] font-bold text-slate-900 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border-b border-slate-300 py-2 text-sm focus:border-slate-600 focus:outline-none transition-colors"
          />
        </div>

        {/* Country Field */}
        <div className="flex flex-col">
          <label htmlFor="country" className="text-[13px] font-bold text-slate-900 mb-1">
            Country
          </label>
          <div className="relative">
            <select
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full appearance-none bg-transparent border-b border-slate-300 py-2 text-sm text-slate-400 focus:border-slate-600 focus:outline-none transition-colors pr-8 cursor-pointer"
            >
              <option value="">-Select-</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-slate-500">
              <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>

        {/* Mobile Number Field with Country Prefix Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="mobileNumber" className="text-[13px] font-bold text-slate-900 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-end border-b border-slate-300">
            <div className="relative flex items-center bg-slate-50 border border-slate-200 px-2 py-1 mb-1.5 rounded text-xs gap-1 cursor-pointer">
              <span className="text-sm">🇮🇳</span>
              <select
                id="phonePrefix"
                value={formData.phonePrefix}
                onChange={handleInputChange}
                className="bg-transparent appearance-none font-medium text-slate-700 focus:outline-none pr-3 cursor-pointer"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <span className="absolute right-1.5 text-[7px] text-slate-500 pointer-events-none">▼</span>
            </div>
            <input
              type="tel"
              id="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full bg-transparent py-2 pl-3 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[13px] font-bold text-slate-900 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border-b border-slate-300 py-2 text-sm focus:border-slate-600 focus:outline-none transition-colors"
          />
        </div>

        {/* Type of Order Field */}
        <div className="flex flex-col">
          <label htmlFor="orderType" className="text-[13px] font-bold text-slate-900 mb-1">
            Type of Order
          </label>
          <div className="relative">
            <select
              id="orderType"
              value={formData.orderType}
              onChange={handleInputChange}
              className="w-full appearance-none bg-transparent border-b border-slate-300 py-2 text-sm text-slate-400 focus:border-slate-600 focus:outline-none transition-colors pr-8 cursor-pointer"
            >
              <option value="">-Select-</option>
              <option value="writing">Medical Writing</option>
              <option value="editing">Editing & Translation</option>
              <option value="biostatistics">Biostatistics</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-slate-500">
              <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>

        {/* Requirements Textarea */}
        <div className="flex flex-col">
          <label htmlFor="requirements" className="text-[13px] font-bold text-slate-900 mb-1">
            Requirements
          </label>
          <textarea
            id="requirements"
            rows={3}
            value={formData.requirements}
            onChange={handleInputChange}
            className="w-full border-b border-slate-300 py-2 text-sm focus:border-slate-600 focus:outline-none transition-colors resize-y min-h-[60px]"
          />
        </div>

        {/* File Upload Box */}
        <div className="flex flex-col space-y-2">
          <span className="text-[13px] font-bold text-slate-900">
            File Upload
          </span>
          <div 
            onClick={triggerFileInput}
            className="border border-dashed border-slate-300 rounded p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors bg-white"
          >
            <span className="text-xs text-slate-500 font-medium">
              {selectedFile ? selectedFile.name : 'Choose File(s)'}
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200">
              <Upload className="w-4 h-4" />
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden" 
            />
          </div>
        </div>

        {/* Centered Submit Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="bg-[#26a69a] hover:bg-[#239689] text-white px-9 py-2 rounded text-sm font-semibold tracking-wide transition-colors shadow-sm focus:outline-none"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}