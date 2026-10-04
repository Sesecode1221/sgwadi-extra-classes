import React from 'react';
import { ArrowUp, Heart, MessageCircle, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/curriculumData';

interface FooterProps {
  onOpenEnrolment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnrolment }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-neutral-950 font-bold text-sm">
                Σ
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                SIGWADI MATHS & SCIENCE TUTORIAL
              </span>
            </div>
            
            <p className="text-neutral-400 leading-relaxed font-normal max-w-sm">
              “Building Strong Foundations for Academic Excellence.” High-quality supplementary Mathematics and Physical Sciences education for South African high school learners (Grades 8–12).
            </p>

            <div className="text-neutral-400 space-y-1 text-[11px]">
              <div>Director: <strong className="text-neutral-200">{BUSINESS_INFO.director}</strong></div>
              <div>Qualification: {BUSINESS_INFO.qualification}</div>
              <div>Institution: {BUSINESS_INFO.institution}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Curriculum & Grades
            </div>
            <ul className="space-y-2">
              <li><a href="#curriculum" className="hover:text-white transition-colors">Pure Mathematics (Paper 1 & 2)</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Physical Sciences (Physics & Chem)</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Grade 8 & 9 Senior Phase</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Grade 10 & 11 FET Phase</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Grade 12 NSC Matric Preparation</a></li>
            </ul>
          </div>

          {/* Program Formats */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Tutoring Formats
            </div>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-white transition-colors">Small-Group Cohorts (Max 8)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">1-on-1 Individual Tutoring</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Intensive Holiday Bootcamps</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">NSC Past Paper Masterclasses</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Tuition Fee Calculator</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Get in Touch
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>Call: {BUSINESS_INFO.phone}</li>
              <li>WhatsApp: {BUSINESS_INFO.phone}</li>
              <li>Email: {BUSINESS_INFO.email}</li>
              <li>Region: Eastern Cape, South Africa</li>
              <li className="pt-2">
                <button
                  onClick={onOpenEnrolment}
                  className="px-3 py-1.5 rounded-md bg-white text-neutral-950 font-bold hover:bg-neutral-200 transition-colors"
                >
                  Register Now
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} SIGWADI MATHS AND SCIENCE TUTORIAL. All rights reserved. Registered education and academic support service provider.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
