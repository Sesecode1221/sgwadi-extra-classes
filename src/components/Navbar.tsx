import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/curriculumData';

interface NavbarProps {
  onOpenEnrolment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrolment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Business Plan', href: '#business-plan' },
    { label: 'Marketing AI', href: '#acquisition-ai' },
    { label: 'LMS Platform', href: '#lms-platform' },
    { label: 'Tuition Calculator', href: '#calculator' },
    { label: 'Leadership', href: '#director' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-extrabold tracking-tight text-neutral-950 hover:text-blue-800 transition-colors whitespace-nowrap"
        >
          SIGWADI MATHS & SCIENCE
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 hover:underline underline-offset-4 transition-colors py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#acquisition-ai"
            className="px-3.5 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap"
          >
            AI Growth Studio
          </a>
          <button
            onClick={onOpenEnrolment}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Enrol Learner
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenEnrolment}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 rounded-md whitespace-nowrap"
          >
            Enrol
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-5 space-y-2">
          <div className="text-xs text-neutral-500 py-1 border-b border-neutral-100 flex items-center justify-between">
            <span>Director: {BUSINESS_INFO.director}</span>
            <span>Eastern Cape, ZA</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-700 hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Mr Avuma Sigwadi, I would like to inquire about Sigwadi Maths and Science Tutorial & LMS.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
            >
              <span>WhatsApp: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrolment();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-lg"
            >
              Start Learner Enrolment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
