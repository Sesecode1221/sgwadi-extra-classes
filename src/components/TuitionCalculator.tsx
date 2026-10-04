import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Tag, Info } from 'lucide-react';
import { PRICING_PLANS } from '../data/curriculumData';

interface TuitionCalculatorProps {
  onSelectPlan: (planDetails: string) => void;
}

export const TuitionCalculator: React.FC<TuitionCalculatorProps> = ({ onSelectPlan }) => {
  const [selectedFormat, setSelectedFormat] = useState<'group' | 'individual' | 'online' | 'holiday'>('group');
  const [gradeLevel, setGradeLevel] = useState<'8-9' | '10-11' | '12'>('10-11');
  const [subjectsCount, setSubjectsCount] = useState<1 | 2>(2); // 1 = Maths or Science, 2 = Both
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(3); // for 1-on-1 or online
  const [hasSibling, setHasSibling] = useState<boolean>(false);
  const [isEarlyBird, setIsEarlyBird] = useState<boolean>(true);

  // Pricing calculations based on Business Plan Section 10.2
  const calculateTotal = () => {
    let baseMonthly = 0;
    let label = '';

    if (selectedFormat === 'group') {
      // Grade 8-9: R700 per subject/mo, Grade 10-11: R850, Grade 12: R950
      const subjectBase = gradeLevel === '8-9' ? 700 : gradeLevel === '10-11' ? 850 : 950;
      baseMonthly = subjectsCount === 2 ? Math.round(subjectBase * 1.75) : subjectBase; // bundle discount for 2 subjects
      label = subjectsCount === 2 ? 'Both Maths & Physical Science (Cohort)' : 'Single Subject (Cohort)';
    } else if (selectedFormat === 'individual') {
      // R220/hr average
      const hourlyRate = gradeLevel === '12' ? 260 : 200;
      baseMonthly = hourlyRate * hoursPerWeek * 4;
      label = `1-on-1 Tutoring (${hoursPerWeek} hrs/week)`;
    } else if (selectedFormat === 'online') {
      // R180/hr average
      const hourlyRate = gradeLevel === '12' ? 200 : 160;
      baseMonthly = hourlyRate * hoursPerWeek * 4;
      label = `Online Tutoring (${hoursPerWeek} hrs/week)`;
    } else {
      // Holiday bootcamp
      baseMonthly = gradeLevel === '12' ? 1200 : 900;
      label = 'Full Holiday Intensive Bootcamp';
    }

    // Discounts
    let discount = 0;
    if (hasSibling) discount += Math.round(baseMonthly * 0.10);
    if (isEarlyBird) discount += 50;

    const finalAmount = Math.max(0, baseMonthly - discount);

    return {
      baseMonthly,
      discount,
      finalAmount,
      label,
    };
  };

  const calculation = calculateTotal();

  const handleApplyToEnrolment = () => {
    const summary = `${selectedFormat.toUpperCase()} | Grade ${gradeLevel === '8-9' ? '8 or 9' : gradeLevel} | ${subjectsCount === 2 ? 'Both Maths & Science' : 'Single Subject'} | Estimated: R${calculation.finalAmount}/mo`;
    onSelectPlan(summary);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-800 uppercase mb-2">
            Affordable & Transparent Tuition Rates
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mb-4" style={{ textWrap: 'balance' }}>
            Interactive Tuition Fee Calculator
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal">
            Aligned with Section 10.2 of our business plan, we provide structured, high-value academic support at accessible rates for South African families. Calculate your learner’s estimated monthly tuition below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-50/70 rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-6">
            
            {/* 1. Format Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                1. Select Tutoring Format
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'group', name: 'Small-Group', note: 'Max 8 learners' },
                  { id: 'individual', name: '1-on-1 Private', note: 'Dedicated tutor' },
                  { id: 'online', name: 'Online Live', note: 'Remote interactive' },
                  { id: 'holiday', name: 'Holiday Camp', note: 'Intensive block' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFormat(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedFormat === item.id
                        ? 'border-neutral-900 bg-white text-neutral-950 shadow-sm ring-1 ring-neutral-900'
                        : 'border-neutral-200 bg-white/70 text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    <div className="text-xs font-bold whitespace-nowrap">{item.name}</div>
                    <div className="text-[10px] text-neutral-500">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Grade Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                2. Learner Grade Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '8-9', label: 'Senior Phase (Grade 8 & 9)' },
                  { id: '10-11', label: 'FET Phase (Grade 10 & 11)' },
                  { id: '12', label: 'Matric / NSC (Grade 12)' },
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGradeLevel(g.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      gradeLevel === g.id
                        ? 'border-blue-700 bg-blue-50/60 text-blue-950 font-semibold ring-1 ring-blue-700'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    <div className="text-xs font-semibold">{g.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Subjects or Hours Slider */}
            {selectedFormat === 'group' ? (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  3. Subject Selection
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSubjectsCount(1)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      subjectsCount === 1
                        ? 'border-neutral-900 bg-white text-neutral-950 font-semibold ring-1 ring-neutral-900'
                        : 'border-neutral-200 bg-white text-neutral-600'
                    }`}
                  >
                    <div className="text-xs font-semibold">Single Subject Only</div>
                    <div className="text-[10px] text-neutral-500">Pure Maths OR Physical Science</div>
                  </button>
                  <button
                    onClick={() => setSubjectsCount(2)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      subjectsCount === 2
                        ? 'border-neutral-900 bg-white text-neutral-950 font-semibold ring-1 ring-neutral-900'
                        : 'border-neutral-200 bg-white text-neutral-600'
                    }`}
                  >
                    <div className="text-xs font-semibold flex items-center justify-between">
                      <span>Dual Subject Bundle</span>
                      <span className="text-[10px] text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded font-bold">Save 25%</span>
                    </div>
                    <div className="text-[10px] text-neutral-500">Pure Maths AND Physical Science</div>
                  </button>
                </div>
              </div>
            ) : selectedFormat !== 'holiday' ? (
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  <span>3. Dedicated Tutoring Hours Per Week:</span>
                  <span className="text-blue-900 tabular-nums font-extrabold text-sm">{hoursPerWeek} Hours / Week</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={6}
                  step={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-blue-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>1 hr/wk (Focused gap)</span>
                  <span>3 hrs/wk (Standard)</span>
                  <span>6 hrs/wk (Intensive)</span>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-blue-950 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Holiday bootcamps include 15 to 20 hours of intensive workshop instruction, complete printed study booklets, and past paper drills.</span>
              </div>
            )}

            {/* 4. Promotional Discounts Checklist (Section 6.4 of Business Plan) */}
            <div className="pt-2 border-t border-neutral-200">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                4. Applicable Discounts & Concessions
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer p-2 rounded-lg bg-white border border-neutral-200/80">
                  <input
                    type="checkbox"
                    checked={hasSibling}
                    onChange={(e) => setHasSibling(e.target.checked)}
                    className="w-4 h-4 text-blue-700 rounded border-neutral-300 focus:ring-blue-600"
                  />
                  <span>Family / Sibling Discount (10% off for 2nd or 3rd enrolled child)</span>
                </label>
                <label className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer p-2 rounded-lg bg-white border border-neutral-200/80">
                  <input
                    type="checkbox"
                    checked={isEarlyBird}
                    onChange={(e) => setIsEarlyBird(e.target.checked)}
                    className="w-4 h-4 text-blue-700 rounded border-neutral-300 focus:ring-blue-600"
                  />
                  <span>Early Registration Incentive (R50 registration credit)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Fee Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-6">
            
            <div className="border-b border-neutral-800 pb-4">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                Estimated Investment Breakdown
              </div>
              <h3 className="text-xl font-bold text-neutral-100">
                {calculation.label}
              </h3>
            </div>

            {/* Price Display */}
            <div className="space-y-1">
              <div className="text-xs text-neutral-400 font-medium">Estimated Tuition:</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums text-white">
                  R{calculation.finalAmount}
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  {selectedFormat === 'holiday' ? '/ programme' : '/ month'}
                </span>
              </div>
              {calculation.discount > 0 && (
                <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Includes R{calculation.discount} in applied discounts</span>
                </div>
              )}
            </div>

            {/* Inclusions List */}
            <div className="space-y-2.5 pt-4 border-t border-neutral-800 text-xs">
              <div className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px]">
                Always Included In Your Fee:
              </div>
              {[
                'Full South African CAPS & NSC syllabus coverage',
                'Curated past matric paper practice sets',
                'Continuous attendance & performance records',
                'Monthly detailed written parent report card',
                'Direct tutor WhatsApp support for homework emergencies',
                'Safe, distraction-free tutorial classroom',
              ].map((inc, i) => (
                <div key={i} className="flex items-start gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            {/* Apply button */}
            <div className="pt-4 border-t border-neutral-800">
              <button
                onClick={handleApplyToEnrolment}
                className="w-full py-3.5 px-4 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceed to Enrol with This Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-neutral-400 text-center mt-2 font-normal">
                Payment policies: Monthly in advance. No long-term lock-in contract.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
