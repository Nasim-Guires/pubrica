import React from 'react';
import Link from 'next/link';
import { Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO } from '@/lib/constants';
import Button from '../common/Button';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Category List Widget */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h4 className="text-gray-900 font-bold text-base mb-4 font-display">
          Our Services
        </h4>
        <div className="flex flex-col gap-1">
          {Object.values(SERVICES_DATA).map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="flex items-center justify-between text-sm py-2.5 px-3 rounded-md text-gray-600 hover:text-primary-800 hover:bg-primary-50/50 transition-colors group font-sans"
            >
              <span>{item.title}</span>
              <span className="text-gray-400 group-hover:text-primary-800 transition-colors font-medium">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Support Card Widget */}
      <div className="bg-primary-800 rounded-xl text-white p-6 shadow-md relative overflow-hidden select-none">
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
          <FileText className="h-44 w-44" />
        </div>
        <h4 className="text-lg font-bold font-display leading-tight mb-2">
          Need Scientific Writing Help?
        </h4>
        <p className="text-xs text-primary-100 leading-relaxed font-sans mb-6">
          Schedule a direct 1-on-1 session with our principal biostatisticians and medical writing specialists.
        </p>
        <ul className="space-y-2 mb-6 text-xs text-primary-50 font-sans">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-secondary-200" />
            <span>PhD / MD Subject-Expert Matching</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-secondary-200" />
            <span>Guaranteed Plagiarism Clearance</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-secondary-200" />
            <span>Iterative Peer Review Ready</span>
          </li>
        </ul>
        <Link href="/contact" className="block">
          <Button variant="accent" className="w-full text-xs font-semibold">
            Inquire Now
          </Button>
        </Link>
      </div>

      {/* Direct Contact Info Widget */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h4 className="text-gray-900 font-bold text-base mb-4 font-display">
          Direct Inquiries
        </h4>
        <div className="flex flex-col gap-4 text-sm font-sans">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-50 hover:border-primary-100 hover:bg-primary-50/20 transition-all text-gray-700"
          >
            <Phone className="h-5 w-5 text-accent-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-400 font-medium">Call Us (US)</p>
              <p className="font-semibold text-gray-800 mt-0.5">{CONTACT_INFO.phone}</p>
            </div>
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-50 hover:border-primary-100 hover:bg-primary-50/20 transition-all text-gray-700"
          >
            <Mail className="h-5 w-5 text-accent-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-400 font-medium">Email Support</p>
              <p className="font-semibold text-gray-800 mt-0.5">{CONTACT_INFO.email}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
