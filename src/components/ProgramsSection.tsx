import React from 'react';
import { Users, User, Calendar, BookOpen, Laptop, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/curriculumData';

interface ProgramsSectionProps {
  onOpenEnrolment: () => void;
  onExploreFees: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenEnrolment, onExploreFees }) => {
  return (
    <section id="programs" className="py-16 sm:py-20 bg-neutral-100/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-800 uppercase mb-2">
            Academic Offerings & Delivery Modes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mb-4" style={{ textWrap: 'balance' }}>
            Tutoring Programmes Designed for Measurable Progress
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal">
            Whether your learner requires intensive weekly reinforcement, one-on-one diagnostic interventions, or focused Matric past-paper masterclasses, we provide structured, curriculum-aligned academic support.
          </p>
        </div>

        {/* Feature Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Marquee Program: Small-Group Tutoring (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 mb-3">
                <span className="text-blue-900 font-bold uppercase tracking-wider">Programme 01 · Flagship Cohort</span>
                <span className="font-bold text-neutral-900">R600 – R1,000 / month</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Small-Group Mathematics & Science Cohorts
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                Our primary format limits groups to 6–8 learners per grade level. This ensures an optimal balance: tutors can dedicate individualized time to check each learner’s workings while students benefit from interactive peer discussions and collaborative problem-solving.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  '2 weekly 90-minute structured sessions',
                  'Dedicated Grade 8–12 cohorts',
                  'Individualized exercise tracking',
                  'Weekly homework diagnostic checks',
                  'Past Matric exam question sets',
                  'Monthly written parent report cards',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-neutral-500 font-medium">
                Ideal for ongoing term-long grade advancement.
              </span>
              <button
                onClick={onOpenEnrolment}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <span>Reserve Cohort Seat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Side Spotlight Image Card (col-span-5) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-sm border border-neutral-200 bg-neutral-900 min-h-[340px] flex flex-col justify-end p-6">
            <img
              src="/src/assets/images/stem_science_lab_1791141365224.jpg"
              alt="South African learners studying science problem sets"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-white space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Quantitative Rigor & Science Principles
              </div>
              <h4 className="text-xl font-bold leading-snug">
                Building Tomorrow’s Engineers, Accountants & Doctors
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                South Africa’s high-growth professions demand level 6 and 7 scores in pure Mathematics and Physical Science. We empower learners with the foundational understanding to cross those thresholds.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Additional Delivery Modes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Mode 2: 1-on-1 */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Programme 02 · 1-on-1
              </div>
              <h4 className="text-base font-bold text-neutral-950 mb-2">
                Individual Private Tutoring
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4 font-normal">
                Intensive one-on-one sessions dedicated completely to resolving specific academic stumbling blocks and filling foundational grade gaps.
              </p>
              <div className="text-xs text-neutral-500 font-semibold mb-4">
                Rate: R150 – R300 / hr
              </div>
            </div>
            <button
              onClick={onOpenEnrolment}
              className="text-xs font-semibold text-blue-800 hover:text-blue-950 flex items-center gap-1 pt-3 border-t border-neutral-100"
            >
              <span>Book private tutor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mode 3: NSC Matric Revision */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Programme 03 · Matric Prep
              </div>
              <h4 className="text-base font-bold text-neutral-950 mb-2">
                NSC Exam Preparation Series
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4 font-normal">
                Dedicated past examination paper drills, memo analysis, time-management pacing, and mock exam simulations for Grade 12 learners.
              </p>
              <div className="text-xs text-neutral-500 font-semibold mb-4">
                Rate: R500 – R1,500 / block
              </div>
            </div>
            <button
              onClick={onOpenEnrolment}
              className="text-xs font-semibold text-blue-800 hover:text-blue-950 flex items-center gap-1 pt-3 border-t border-neutral-100"
            >
              <span>View Matric series</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mode 4: Holiday Programme */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Programme 04 · Holiday Camp
              </div>
              <h4 className="text-base font-bold text-neutral-950 mb-2">
                School Holiday Bootcamps
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4 font-normal">
                Intensive 5–10 day camps during school vacations for term catch-up, revision of tricky geometry/calculus, and forward-learning modules.
              </p>
              <div className="text-xs text-neutral-500 font-semibold mb-4">
                Rate: R500 – R1,500 / camp
              </div>
            </div>
            <button
              onClick={onOpenEnrolment}
              className="text-xs font-semibold text-blue-800 hover:text-blue-950 flex items-center gap-1 pt-3 border-t border-neutral-100"
            >
              <span>Explore holiday camp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mode 5: Online Tutoring */}
          <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Programme 05 · Distance
              </div>
              <h4 className="text-base font-bold text-neutral-950 mb-2">
                Online Live Digital Tutoring
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4 font-normal">
                Interactive digital whiteboard sessions accessible across South Africa. Full access to lesson recordings and digital formula summaries.
              </p>
              <div className="text-xs text-neutral-500 font-semibold mb-4">
                Rate: R100 – R250 / hr
              </div>
            </div>
            <button
              onClick={onOpenEnrolment}
              className="text-xs font-semibold text-blue-800 hover:text-blue-950 flex items-center gap-1 pt-3 border-t border-neutral-100"
            >
              <span>Start online learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
