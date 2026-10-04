import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  TrendingUp, 
  FileText, 
  Users, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const MonitoringSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sampleReport' | 'process'>('sampleReport');

  const topicsProgress = [
    { topic: 'Algebra & Inequalities', baseline: 42, current: 84, status: 'Mastered' },
    { topic: 'Functions & Inverses', baseline: 38, current: 78, status: 'Mastered' },
    { topic: 'Euclidean Geometry', baseline: 30, current: 72, status: 'Steady Progress' },
    { topic: 'Differential Calculus', baseline: 45, current: 81, status: 'Mastered' },
    { topic: 'Newtonian Mechanics', baseline: 35, current: 76, status: 'Steady Progress' },
    { topic: 'Chemical Equilibrium & Rates', baseline: 40, current: 85, status: 'Mastered' },
  ];

  return (
    <section id="monitoring" className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-800 uppercase mb-2">
            Section 8.4 Academic Quality Assurance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mb-4" style={{ textWrap: 'balance' }}>
            Continuous Learner Monitoring & Parent Feedback
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal">
            At Sigwadi Maths and Science Tutorial, academic progress is never left to guesswork. We document attendance, track weekly assessment marks, pinpoint specific conceptual weak points, and keep parents continually informed.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-neutral-200/80 rounded-xl w-fit mb-8 border border-neutral-300">
          <button
            onClick={() => setActiveTab('sampleReport')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'sampleReport'
                ? 'bg-white text-neutral-950 shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            Sample Learner Progress Report
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'process'
                ? 'bg-white text-neutral-950 shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            The 4-Pillar Monitoring System
          </button>
        </div>

        {activeTab === 'sampleReport' ? (
          /* Interactive Report Card Preview */
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-10 max-w-4xl mx-auto">
            
            {/* Header of Report */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 gap-4">
              <div>
                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                  SIGWADI MATHS & SCIENCE TUTORIAL · PROGRESS RECORD
                </div>
                <h3 className="text-xl font-extrabold text-neutral-950">
                  Learner Academic Performance Audit
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mt-1">
                  <span>Learner: <strong>Sipho M.</strong></span>
                  <span>·</span>
                  <span>Grade: <strong>Grade 12 (NSC Matric)</strong></span>
                  <span>·</span>
                  <span>Term: <strong>Term 2 Evaluation</strong></span>
                </div>
              </div>

              {/* Status summary */}
              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 flex items-center gap-6">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase font-bold">Attendance</div>
                  <div className="text-lg font-bold text-neutral-900 tabular-nums">96%</div>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase font-bold">Overall Average</div>
                  <div className="text-lg font-bold text-emerald-700 tabular-nums">79.3%</div>
                </div>
              </div>
            </div>

            {/* Topic by Topic Comparison Table */}
            <div className="py-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Curriculum Competency Tracking (Diagnostic vs Current)
                </h4>
                <span className="text-[11px] text-neutral-500">Target: NSC Level 7 Distinction (&ge;80%)</span>
              </div>

              <div className="space-y-3">
                {topicsProgress.map((item, idx) => {
                  const gain = item.current - item.baseline;
                  return (
                    <div key={idx} className="p-3 rounded-lg bg-neutral-50/80 border border-neutral-200/80">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-neutral-900">{item.topic}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-neutral-500 text-[11px] tabular-nums">Baseline: {item.baseline}%</span>
                          <span className="font-bold text-neutral-900 tabular-nums">Current: {item.current}%</span>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            +{gain}%
                          </span>
                        </div>
                      </div>

                      {/* Dual Progress Bar */}
                      <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-700 h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.current}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Director's Assessment Notes */}
            <div className="pt-4 border-t border-neutral-200 bg-neutral-50 p-4 rounded-xl text-xs space-y-2">
              <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-700" />
                <span>Director’s Feedback & Next Milestones (Avuma Sigwadi):</span>
              </div>
              <p className="text-neutral-600 leading-relaxed font-normal">
                “Sipho has demonstrated outstanding commitment, particularly in Differential Calculus and Chemical Equilibrium. Initial confusion with Euclidean circle proofs and tangent theorems has been substantially remediated through daily past NSC question drills. For the upcoming month, our primary focus will be on timing accuracy for Matric Paper 2 (Trigonometry 3D models).”
              </p>
            </div>

          </div>
        ) : (
          /* Process Explanation */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Baseline Diagnostic',
                description: 'Every newly enrolled learner completes a structured diagnostic assessment to pinpoint exact conceptual knowledge gaps from prior grades.',
              },
              {
                step: '02',
                title: 'Weekly Mark Auditing',
                description: 'Regular micro-tests and homework reviews are recorded in our digital tracking database to ensure concepts stick before advancing.',
              },
              {
                step: '03',
                title: 'Targeted Remediation',
                description: 'When a learner struggles with a topic like Euclidean Geometry or Stoichiometry, immediate intervention drills are scheduled.',
              },
              {
                step: '04',
                title: 'Parent Consultations',
                description: 'Parents receive monthly written progress reports, attendance audits, and transparent feedback directly from the tutorial director.',
              },
            ].map((pillar) => (
              <div key={pillar.step} className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-800 tracking-wider mb-2">
                    STAGE {pillar.step}
                  </div>
                  <h4 className="text-base font-bold text-neutral-950 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
