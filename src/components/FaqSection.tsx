import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { FREQUENTLY_ASKED_QUESTIONS, BUSINESS_INFO } from '../data/curriculumData';

interface FaqSectionProps {
  onOpenEnrolment: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnrolment }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold tracking-wider text-blue-800 uppercase mb-2">
              Common Parent & Learner Inquiries
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {FREQUENTLY_ASKED_QUESTIONS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-neutral-200/90 rounded-xl bg-white overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-sm font-bold text-neutral-900 leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-700' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs text-neutral-600 leading-relaxed font-normal border-t border-neutral-100 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* School Partnership & Contact Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-5">
              <div>
                <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
                  Section 6.1 Outreach & Partnerships
                </div>
                <h3 className="text-xl font-bold text-neutral-950">
                  School & Community Collaborations
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2 font-normal">
                  Are you a high school principal, mathematics department head, or community organization seeking weekend revision workshops or after-school intervention sessions? We collaborate directly with educational leaders.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-neutral-100 text-xs">
                <div className="flex items-center gap-3 text-neutral-700">
                  <Phone className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Director Direct Line: {BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp Business: {BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>Official Inquiries: {BUSINESS_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>Eastern Cape & Nationwide Online, South Africa</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnrolment}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors shadow-sm"
                >
                  Schedule a School Consultation
                </button>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-neutral-900 text-white rounded-2xl p-6 border border-neutral-800 text-xs space-y-2">
              <div className="text-blue-400 font-bold uppercase tracking-wider text-[11px]">
                Tutorial Operating Hours
              </div>
              <p className="text-neutral-300 leading-relaxed font-normal">
                {BUSINESS_INFO.operatingHours}
              </p>
              <div className="text-[11px] text-neutral-400 pt-1">
                Both weekday afternoon classes and dedicated Saturday revision slots are scheduled around school terms.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
