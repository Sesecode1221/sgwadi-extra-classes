import React, { useState } from 'react';
import { 
  FileCheck2, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  Lightbulb, 
  CheckCircle, 
  Download, 
  ArrowRight 
} from 'lucide-react';

interface ExamResourcesProps {
  onOpenEnrolment: () => void;
}

export const ExamResources: React.FC<ExamResourcesProps> = ({ onOpenEnrolment }) => {
  const [questionMarks, setQuestionMarks] = useState<number>(15);
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<'maths' | 'science'>('maths');

  // 150 marks in 180 minutes => 1 mark = 1.2 minutes
  const allocatedMinutes = Math.round(questionMarks * 1.2);

  return (
    <section id="resources" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-800 uppercase mb-2">
            Section 4.3 Examination Preparation & Techniques
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mb-4" style={{ textWrap: 'balance' }}>
            NSC Matric Examination Preparation Vault
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal">
            Achieving distinctions in the National Senior Certificate (NSC) requires not only knowledge of formulas, but also systematic exam speed, mark allocation discipline, and memo deduction techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Paper Breakdown Strategy (col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-xl w-fit border border-neutral-200">
              <button
                onClick={() => setSelectedSubjectTab('maths')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedSubjectTab === 'maths'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                Mathematics Paper 1 & 2 Blueprint
              </button>
              <button
                onClick={() => setSelectedSubjectTab('science')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedSubjectTab === 'science'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-950'
                }`}
              >
                Physical Sciences Paper 1 & 2 Blueprint
              </button>
            </div>

            {selectedSubjectTab === 'maths' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Paper 1 */}
                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Paper 1 · 150 Marks (3 Hours)
                  </div>
                  <h4 className="text-base font-bold text-neutral-950">
                    Algebra, Calculus, Graphs & Finance
                  </h4>
                  <ul className="text-xs text-neutral-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q1: Equations & Inequalities (±25m)</strong> — Never leave simple quadratic/surd marks on the table.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q2–3: Patterns & Sequences (±25m)</strong> — Sum to infinity and sigma notation traps.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q4–6: Functions & Inverses (±35m)</strong> — Asymptote identification and inverse restriction notation.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q7: Financial Mathematics (±15m)</strong> — Sinking funds, deferred annuities & loan amortization.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q8–9: Differential Calculus (±35m)</strong> — First principles and geometric cubic curve optimization.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q10: Probability (±15m)</strong> — Counting principle and tree/Venn diagrams.</span>
                    </li>
                  </ul>
                </div>

                {/* Paper 2 */}
                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Paper 2 · 150 Marks (3 Hours)
                  </div>
                  <h4 className="text-base font-bold text-neutral-950">
                    Geometry, Trigonometry & Statistics
                  </h4>
                  <ul className="text-xs text-neutral-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q1–2: Statistics (±20m)</strong> — Regression line equations, correlation r, and box plots.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q3–5: Analytical Geometry (±40m)</strong> — Tangents to circles, circle radii, and angle of inclination.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q6–7: Trigonometry (±40m)</strong> — Double angle reductions and 3D heights/distances with sine/cosine rules.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Q8–10: Euclidean Geometry (±50m)</strong> — Circle theorems, cyclic quad proofs, and proportionality similarity theorems.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Science Paper 1 */}
                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Paper 1 (Physics) · 150 Marks
                  </div>
                  <h4 className="text-base font-bold text-neutral-950">
                    Mechanics, Electricity & Waves
                  </h4>
                  <ul className="text-xs text-neutral-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Newton’s Laws & Free-Body Diagrams (±30m)</strong> — Strict vector sign convention is mandatory.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Vertical Projectile Motion (±20m)</strong> — Symmetry of motion and ground impact velocity.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Work, Energy & Power (±15m)</strong> — Work-energy theorem applications with friction.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Doppler Effect & Waves (±15m)</strong> — Frequency shift formula substitutions.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Circuits & Electrodynamics (±45m)</strong> — Internal resistance graphs and AC/DC generators.</span>
                    </li>
                  </ul>
                </div>

                {/* Science Paper 2 */}
                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Paper 2 (Chemistry) · 150 Marks
                  </div>
                  <h4 className="text-base font-bold text-neutral-950">
                    Organic, Equilibrium & Electrochemistry
                  </h4>
                  <ul className="text-xs text-neutral-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Organic Chemistry (±40m)</strong> — IUPAC nomenclature, chain isomers, and reaction conditions.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Rates of Reaction & Equilibrium (±40m)</strong> — Maxwell-Boltzmann distribution and Le Chatelier’s shifts.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Acids & Bases (±30m)</strong> — Titration stoichiometric calculations and pH determination.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-700 font-bold">•</span>
                      <span><strong>Galvanic & Electrolytic Cells (±30m)</strong> — Standard reduction table readings and electron flow direction.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Exam Time-Pacing Tool (col-span-4) */}
          <div className="lg:col-span-4 bg-neutral-900 text-white rounded-2xl p-6 sm:p-7 border border-neutral-800 shadow-lg space-y-5">
            <div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>NSC Time-Management Engine</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Question Time Allocation Rule
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal mt-1">
                South African matric exams allocate 180 minutes for 150 marks. That equals exactly <strong>1.2 minutes per mark</strong>.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-neutral-800">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-neutral-300">Question Mark Value:</span>
                <span className="text-blue-400 font-bold text-sm tabular-nums">{questionMarks} Marks</span>
              </div>
              <input
                type="range"
                min={3}
                max={30}
                step={1}
                value={questionMarks}
                onChange={(e) => setQuestionMarks(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>3 Marks (Short)</span>
                <span>15 Marks (Medium)</span>
                <span>30 Marks (Multi-part)</span>
              </div>
            </div>

            {/* Allocation Result Box */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1 text-center">
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Maximum Allowed Exam Time
              </div>
              <div className="text-3xl font-extrabold text-white tabular-nums">
                {allocatedMinutes} Minutes
              </div>
              <div className="text-[11px] text-emerald-400">
                Leaves 15 minutes at the end for review & calculation checks
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-neutral-800 text-xs text-neutral-300">
              <div className="font-semibold text-neutral-200">Director Avuma’s 3 Rules:</div>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                1. Never spend more than 1.2 minutes per mark. If stuck, write down the formula, leave blank lines, and move forward immediately.
              </p>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                2. In Euclidean Geometry, always mark equal angles with colored symbols on your question paper diagram first.
              </p>
            </div>

            <button
              onClick={onOpenEnrolment}
              className="w-full py-2.5 px-3 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Join our NSC Exam Prep Masterclasses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
