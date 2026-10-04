import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { LMS_MODULES, LmsModuleItem } from '../data/curriculumData';

interface LmsDiagnosticWorkbenchProps {
  onOpenEnrolment: (planSummary?: string) => void;
}

interface DiagnosticCoachResult {
  diagnosticSummary: string;
  capsExamWeightAndImportance: string;
  coreRuleOrFormula: string;
  commonMatricExamTrap: string;
  workedMicroExample: {
    problemStatement: string;
    stepByStepSolution: string[];
    finalAnswer: string;
  };
  eightWeekRemediationPlan: {
    weeks: string;
    focusModule: string;
    expectedScoreMilestone: string;
  }[];
  recommendedSigwadiProgramme: string;
  parentConversionMessage: string;
}

export const LmsDiagnosticWorkbench: React.FC<LmsDiagnosticWorkbenchProps> = ({
  onOpenEnrolment,
}) => {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('All');
  const [activeModule, setActiveModule] = useState<LmsModuleItem>(LMS_MODULES[0]);

  // Gemini AI LMS Diagnostic Coach State
  const [subject, setSubject] = useState<string>('Pure Mathematics');
  const [grade, setGrade] = useState<string>('Grade 12 (NSC)');
  const [topic, setTopic] = useState<string>('Euclidean Geometry & Circle Theorems');
  const [learnerChallenge, setLearnerChallenge] = useState<string>(
    'Struggling to identify cyclic quadrilaterals and prove triangle similarity in multi-step Paper 2 riders'
  );
  const [currentMarkPct, setCurrentMarkPct] = useState<number>(48);
  const [targetMarkPct, setTargetMarkPct] = useState<number>(78);

  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [coachError, setCoachError] = useState<string | null>(null);
  const [coachResult, setCoachResult] = useState<DiagnosticCoachResult>({
    diagnosticSummary:
      'Learner understands basic circle angle definitions in isolation but loses marks when combining Tangent-Chord and Cyclic Quadrilateral properties inside multi-step NSC Paper 2 riders.',
    capsExamWeightAndImportance:
      '±50 Marks out of 150 in NSC Mathematics Paper 2 (33.3% of the entire Paper 2 examination).',
    coreRuleOrFormula:
      'Tangent-Chord Theorem: Angle between tangent and chord equals angle subtended by the chord in the alternate segment. Similarity: Prove two angles equal (AAA) → state proportional sides.',
    commonMatricExamTrap:
      'Assuming a quadrilateral is cyclic or a line is a tangent without explicit given proof, or writing similarity vertex order incorrectly (e.g., ΔABC ||| ΔDEF when vertices do not correspond).',
    workedMicroExample: {
      problemStatement:
        'Given circle O with tangent PT at T and chord TR. Chord RS is parallel to PT. Prove ΔPTR ||| ΔRST.',
      stepByStepSolution: [
        'Step 1: Identify ∠T₁ = ∠R₂ (Alternate angles, PT || RS given).',
        'Step 2: Apply Tangent-Chord Theorem: ∠T₁ = ∠S (angle between tangent PT and chord TR equals angle subtended by TR in alternate segment).',
        'Step 3: Deduce ∠R₂ = ∠S (both equal to ∠T₁) and match remaining equal angles via chord subtension to establish AAA similarity.',
      ],
      finalAnswer: '∴ ΔPTR ||| ΔRST (Equiangular / AAA) ⇒ PT/RS = TR/ST = PR/RT',
    },
    eightWeekRemediationPlan: [
      {
        weeks: 'Weeks 1–2',
        focusModule: 'Visual Color-Coding of Circle Theorems & Cyclic Quad 3-Condition Drills',
        expectedScoreMilestone: '48% → 58% Baseline Lift',
      },
      {
        weeks: 'Weeks 3–5',
        focusModule: 'Proportionality Theorem & AAA Similarity Proof Structure (1.2 min/mark)',
        expectedScoreMilestone: '58% → 69% Proficiency',
      },
      {
        weeks: 'Weeks 6–8',
        focusModule: '10-Year NSC Past Paper Q8–Q10 Timed Rider Masterclasses & Memo Audit',
        expectedScoreMilestone: '69% → 78%+ Distinction Readiness',
      },
    ],
    recommendedSigwadiProgramme:
      'Small-Group FET Cohort (Max 8 Learners) + Monthly Section 8.4 Parent Progress Audit (R850–R950/mo)',
    parentConversionMessage:
      'By enrolling your child in our 8-learner FET Mathematics Cohort, we systematically replace Paper 2 geometry anxiety with a repeatable 3-step deductive checklist—lifting their overall Mathematics average by an estimated +30 percentage points over 8 weeks.',
  });

  const filteredModules =
    selectedSubjectFilter === 'All'
      ? LMS_MODULES
      : LMS_MODULES.filter((m) => m.subject === selectedSubjectFilter);

  const handleRunDiagnosticCoach = async () => {
    setIsAnalyzing(true);
    setCoachError(null);
    try {
      const response = await fetch('/api/gemini/lms-diagnostic-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          grade,
          topic,
          learnerChallenge,
          currentMarkPct,
          targetMarkPct,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate LMS diagnostic plan');
      }
      setCoachResult(data);
    } catch (err: any) {
      setCoachError(err.message || 'Unable to generate live diagnostic breakdown.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="lms-platform" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2">
              <span className="text-blue-900 font-bold">03. SIGWADI INTERACTIVE LMS & AI DIAGNOSTIC ENGINE</span>
              <span aria-hidden="true">·</span>
              <span>CAPS & NSC ALIGNED</span>
              <span aria-hidden="true">·</span>
              <span>GRADES 8 TO 12</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950"
              style={{ textWrap: 'balance' }}
            >
              Digital Learning Management System & Live AI Remediation Coach
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed mt-3 font-normal">
              Our LMS platform pairs structured CAPS mastery modules with a live Gemini AI Diagnostic Coach—turning every learner’s stumbling block into a step-by-step pedagogical solution and a clear 8-week parent enrolment roadmap.
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200 shrink-0">
            {['All', 'Pure Mathematics', 'Physical Sciences'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedSubjectFilter(tab)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedSubjectFilter === tab
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Part 1: Interactive LMS Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredModules.map((mod) => {
            const isSelected = activeModule.id === mod.id;
            return (
              <div
                key={mod.id}
                onClick={() => {
                  setActiveModule(mod);
                  setSubject(mod.subject);
                  setGrade(mod.grade);
                  setTopic(mod.title);
                }}
                className={`rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                    : 'bg-neutral-50/70 hover:bg-white text-neutral-900 border-neutral-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-mono font-bold ${isSelected ? 'text-blue-400' : 'text-blue-800'}`}>
                      {mod.code} · {mod.grade}
                    </span>
                    <span className={isSelected ? 'text-neutral-400' : 'text-neutral-500'}>
                      {mod.nscPaperWeight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug mb-3">{mod.title}</h3>

                  {/* Formula Callout Bar */}
                  <div
                    className={`p-2.5 rounded-lg font-mono text-xs mb-4 border ${
                      isSelected
                        ? 'bg-neutral-950 text-blue-300 border-neutral-800'
                        : 'bg-white text-neutral-800 border-neutral-200/90'
                    }`}
                  >
                    {mod.interactiveFormula}
                  </div>

                  {/* Mastery Checkpoints */}
                  <ul className="space-y-1.5 text-xs mb-5">
                    {mod.masteryCheckpoints.map((cp, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-1.5 ${
                          isSelected ? 'text-neutral-300' : 'text-neutral-600'
                        }`}
                      >
                        <span className={isSelected ? 'text-blue-400 font-bold' : 'text-blue-700 font-bold'}>
                          •
                        </span>
                        <span>{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`pt-3 border-t flex items-center justify-between text-xs font-mono tabular-nums ${
                    isSelected ? 'border-neutral-800 text-neutral-300' : 'border-neutral-200 text-neutral-600'
                  }`}
                >
                  <span>Completion: {mod.completionRatePct}%</span>
                  <span className={isSelected ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>
                    Avg Gain: +{mod.avgCohortGainPct}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Part 2: Live Gemini AI LMS Diagnostic & Lead-Conversion Coach */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 border border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold mb-1">
                <span>LIVE GEMINI AI DIAGNOSTIC & CONVERSION WORKBENCH</span>
                <span aria-hidden="true">·</span>
                <span>INTERACTIVE LEAD MAGNET</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                AI CAPS Concept Remediation & 8-Week Parent Grade-Lift Generator
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl font-normal">
                Enter any Mathematics or Physical Sciences topic challenge below. Gemini AI generates an immediate CAPS solution walkthrough alongside an 8-week cohort remediation plan for parents.
              </p>
            </div>

            <button
              onClick={handleRunDiagnosticCoach}
              disabled={isAnalyzing}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-200 disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin text-blue-700' : ''}`} />
              <span>{isAnalyzing ? 'Generating CAPS Blueprint...' : 'Run Live Gemini Diagnostic Coach'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Diagnostic Input Form (4 cols) */}
            <div className="lg:col-span-4 bg-neutral-950/90 p-5 rounded-xl border border-neutral-800 space-y-4">
              <div className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2">
                Learner Diagnostic Profile
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 mb-1">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-lg bg-neutral-900 border border-neutral-700 text-white"
                  >
                    <option value="Pure Mathematics">Pure Mathematics</option>
                    <option value="Physical Sciences">Physical Sciences</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 mb-1">
                    Grade Level
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-lg bg-neutral-900 border border-neutral-700 text-white"
                  >
                    <option value="Grade 8–9">Grade 8–9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12 (NSC)">Grade 12 (NSC)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 mb-1">
                  Target CAPS Topic
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-900 border border-neutral-700 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 mb-1">
                  Specific Exam Stumbling Block
                </label>
                <textarea
                  rows={3}
                  value={learnerChallenge}
                  onChange={(e) => setLearnerChallenge(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-900 border border-neutral-700 text-white leading-relaxed"
                />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    {
                      label: 'Cubic Optimization',
                      subj: 'Pure Mathematics',
                      top: 'Differential Calculus & Optimization',
                      desc: 'Difficulty constructing volume/area equations and finding stationary points f’(x) = 0',
                    },
                    {
                      label: 'Equilibrium Kc Table',
                      subj: 'Physical Sciences',
                      top: 'Chemical Equilibrium (Kc) & Le Chatelier',
                      desc: 'Confusing initial vs equilibrium moles in RICE tables and Le Chatelier shifts',
                    },
                    {
                      label: '2-Body Newton Laws',
                      subj: 'Physical Sciences',
                      top: 'Newtonian Mechanics & Inclined Planes',
                      desc: 'Resolving parallel weight components and simultaneous tension equations',
                    },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setSubject(preset.subj);
                        setTopic(preset.top);
                        setLearnerChallenge(preset.desc);
                      }}
                      className="px-2 py-1 text-[11px] rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current vs Target Mark Sliders */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-neutral-800">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-neutral-400">Current Mark:</span>
                    <span className="font-mono font-bold text-amber-400 tabular-nums">
                      {currentMarkPct}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={25}
                    max={75}
                    step={1}
                    value={currentMarkPct}
                    onChange={(e) => setCurrentMarkPct(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-neutral-400">Target Mark:</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">
                      {targetMarkPct}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={60}
                    max={95}
                    step={1}
                    value={targetMarkPct}
                    onChange={(e) => setTargetMarkPct(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right Diagnostic Output & Parent Conversion Brief (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              {coachError && (
                <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-700 text-xs text-rose-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{coachError}</span>
                </div>
              )}

              <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3 text-xs">
                  <span className="font-bold text-blue-400">
                    CAPS & NSC PEDAGOGICAL REMEDIATION REPORT
                  </span>
                  <span className="font-mono text-neutral-400">
                    Exam Weight: {coachResult.capsExamWeightAndImportance}
                  </span>
                </div>

                <p className="text-sm text-neutral-200 leading-relaxed">
                  {coachResult.diagnosticSummary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <div className="font-bold text-blue-400 mb-1">Core CAPS Theorem / Formula Rule</div>
                    <p className="text-neutral-300 font-mono leading-relaxed">
                      {coachResult.coreRuleOrFormula}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800">
                    <div className="font-bold text-amber-400 mb-1">Common NSC Exam Trap to Avoid</div>
                    <p className="text-neutral-300 leading-relaxed">
                      {coachResult.commonMatricExamTrap}
                    </p>
                  </div>
                </div>

                {/* Worked Micro Example */}
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2.5 text-xs">
                  <div className="font-bold text-white">
                    Step-by-Step Worked NSC Micro-Example: {coachResult.workedMicroExample.problemStatement}
                  </div>
                  <div className="space-y-1.5 text-neutral-300">
                    {coachResult.workedMicroExample.stepByStepSolution.map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="font-mono text-blue-400 font-bold">{i + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-neutral-800 font-mono font-bold text-emerald-400">
                    {coachResult.workedMicroExample.finalAnswer}
                  </div>
                </div>

                {/* 8-Week Grade Lift Roadmap */}
                <div>
                  <div className="text-xs font-bold text-neutral-300 mb-2.5">
                    8-Week Sigwadi Cohort Remediation Trajectory ({currentMarkPct}% → {targetMarkPct}%)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {coachResult.eightWeekRemediationPlan.map((milestone, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                          <span className="text-blue-400 font-bold">{milestone.weeks}</span>
                          <span className="text-emerald-400 font-bold tabular-nums">
                            {milestone.expectedScoreMilestone}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-snug">
                          {milestone.focusModule}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parent Conversion Call to Action */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <div className="text-xs font-bold text-emerald-400">
                      Recommended Enrolment Path: {coachResult.recommendedSigwadiProgramme}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {coachResult.parentConversionMessage}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      onOpenEnrolment(
                        `${coachResult.recommendedSigwadiProgramme} | Diagnostic Topic: ${topic} (${currentMarkPct}% → ${targetMarkPct}%)`
                      )
                    }
                    className="px-5 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Enrol Learner in This Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
