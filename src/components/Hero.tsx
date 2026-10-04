import React from 'react';
import { ArrowRight, Sparkles, Calculator, FileSpreadsheet, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenEnrolment: () => void;
  onExploreFees: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrolment, onExploreFees }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-100/70 via-white to-neutral-50 pt-10 pb-14 lg:pt-14 lg:pb-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed Metadata Trust Line (Zero-Pill discipline) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600 mb-6">
          <span className="text-blue-900 tracking-wide">
            BUSINESS PLAN PORTFOLIO & CAPS/NSC LMS PLATFORM
          </span>
          <span aria-hidden="true" className="text-neutral-300">
            ·
          </span>
          <span>GRADES 8 TO 12</span>
          <span aria-hidden="true" className="text-neutral-300">
            ·
          </span>
          <span>LIVE GEMINI AI MARKETING INTELLIGENCE</span>
          <span aria-hidden="true" className="text-neutral-300">
            ·
          </span>
          <span className="text-neutral-800">
            DIRECTED BY AVUMA SIGWADI (BCOM ACCOUNTING, NMU)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-neutral-950 leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Building Strong Foundations for Academic Excellence & Scalable STEM Growth.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
              Welcome to the executive Business Plan Portfolio and Interactive Learning Management System (LMS) for <strong>Sigwadi Maths and Science Tutorial</strong>. Directed by <strong>Mr Avuma Sigwadi</strong> (BCom Accounting, Nelson Mandela University), our platform pairs high-impact Grade 8–12 tutoring with live Gemini AI marketing intelligence to accelerate learner acquisition across South Africa.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#acquisition-ai"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Gemini Marketing AI Studio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#business-plan"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-lg border border-neutral-300 transition-colors duration-150 whitespace-nowrap"
              >
                <FileSpreadsheet className="w-4 h-4 text-neutral-700" />
                <span>Explore Business Plan & Financials</span>
              </a>

              <button
                onClick={onOpenEnrolment}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
              >
                <span>Register Learner</span>
              </button>
            </div>

            {/* Adjacent Quantitative Proof Strip */}
            <div className="pt-6 border-t border-neutral-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-neutral-950 font-mono tabular-nums">
                  R600–R1,000
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Monthly Cohort Tuition (Max 8)
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-neutral-950 font-mono tabular-nums">
                  6.8 : 1
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Target Learner LTV : CAC Ratio
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-emerald-700 font-mono tabular-nums">
                  +24% to +38%
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Avg 2-Term CAPS Mark Lift
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-neutral-950 font-mono tabular-nums">
                  100% CAPS
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  DBE & NSC Paper 1 & 2 Aligned
                </div>
              </div>
            </div>
          </div>

          {/* Focal Image Container with Resilient Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 bg-neutral-900 aspect-[16/11]">
              <img
                src="/src/assets/images/hero_maths_science_class_1791141341702.jpg"
                alt="South African high school students engaged in an inspiring Mathematics and Science tutorial classroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Subtle scrim & editorial caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1">
                  <span>HYBRID COHORT + DIGITAL LMS</span>
                  <span>·</span>
                  <span>THE SIGWADI METHOD</span>
                </div>
                <p className="text-sm font-medium text-neutral-200 leading-snug">
                  Combining small-group quantitative instruction (max 8 learners) with AI-driven diagnostic assessments and monthly parent audits.
                </p>
              </div>
            </div>

            {/* Quick Director Governance Card */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-neutral-200/90 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-300">
                  <img
                    src="/src/assets/images/director_avuma_sigwadi_1791141355077.jpg"
                    alt="Mr Avuma Sigwadi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-xs leading-relaxed">
                  <div className="font-bold text-neutral-950">
                    Mr Avuma Sigwadi — Academy Director
                  </div>
                  <div className="text-neutral-500">
                    BCom Accounting (Nelson Mandela University)
                  </div>
                  <div className="text-blue-800 font-semibold mt-0.5">
                    “Quantitative discipline in both the classroom and the business plan.”
                  </div>
                </div>
              </div>
              <button
                onClick={onExploreFees}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Fee Calculator</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
