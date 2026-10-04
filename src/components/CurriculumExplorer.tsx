import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle, HelpCircle, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { 
  MATHEMATICS_CURRICULUM, 
  SCIENCE_CURRICULUM, 
  DIAGNOSTIC_QUESTIONS, 
  SubjectTopic, 
  DiagnosticQuestion 
} from '../data/curriculumData';

interface CurriculumExplorerProps {
  onOpenEnrolment: () => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({ onOpenEnrolment }) => {
  const [selectedSubject, setSelectedSubject] = useState<'Mathematics' | 'Physical Sciences'>('Mathematics');
  const [selectedGrade, setSelectedGrade] = useState<string>('All');
  const [activeQuizQuestion, setActiveQuizQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [answeredMap, setAnsweredMap] = useState<Record<number, boolean>>({});

  const topics = selectedSubject === 'Mathematics' ? MATHEMATICS_CURRICULUM : SCIENCE_CURRICULUM;

  const filteredTopics = topics.filter((t) => {
    if (selectedGrade === 'All') return true;
    if (selectedGrade === 'GET (8-9)') return t.grades.includes('Grade 8') || t.grades.includes('Grade 9');
    return t.grades.includes(selectedGrade);
  });

  const currentQuiz = DIAGNOSTIC_QUESTIONS[activeQuizQuestion];

  const handleSelectOption = (idx: number) => {
    if (showAnswer) return;
    setSelectedOption(idx);
    setShowAnswer(true);
    if (idx === currentQuiz.correctIndex && !answeredMap[currentQuiz.id]) {
      setQuizScore((prev) => prev + 1);
    }
    setAnsweredMap((prev) => ({ ...prev, [currentQuiz.id]: true }));
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setActiveQuizQuestion((prev) => (prev + 1) % DIAGNOSTIC_QUESTIONS.length);
  };

  return (
    <section id="curriculum" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-800 uppercase mb-2">
            South African CAPS & NSC Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mb-4" style={{ textWrap: 'balance' }}>
            Structured Syllabi Built for Matric Excellence
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal">
            Every lesson at Sigwadi Maths and Science Tutorial is mapped to the Department of Basic Education Curriculum and Assessment Policy Statement (CAPS). We target the exact high-frequency, high-mark areas that determine university entrance thresholds.
          </p>
        </div>

        {/* Interactive Subject & Grade Selectors */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 mb-8">
          {/* Functional Button Segmented Control for Subject */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl border border-neutral-200/80">
            <button
              onClick={() => setSelectedSubject('Mathematics')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                selectedSubject === 'Mathematics'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              Pure Mathematics (Paper 1 & 2)
            </button>
            <button
              onClick={() => setSelectedSubject('Physical Sciences')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                selectedSubject === 'Physical Sciences'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              Physical Sciences (Physics & Chem)
            </button>
          </div>

          {/* Grade filter tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
            <span className="text-neutral-500 font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Grade:
            </span>
            {['All', 'GET (8-9)', 'Grade 10', 'Grade 11', 'Grade 12'].map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap ${
                  selectedGrade === grade
                    ? 'bg-blue-50 text-blue-900 font-semibold border border-blue-200'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTopics.map((topic) => (
            <div
              key={topic.title}
              className="bg-neutral-50/70 hover:bg-white rounded-xl p-6 border border-neutral-200/90 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Quiet unboxed metadata line */}
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-2">
                  <span className="font-semibold text-blue-900">{topic.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-600">{topic.examWeight}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-950 mb-2 leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {topic.description}
                </p>

                {/* Key Concepts bulleted list */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider">
                    Core Concepts Covered:
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    {topic.keyConcepts.map((concept, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold leading-tight mt-0.5">•</span>
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                <span>Offered in: {topic.grades.join(', ')}</span>
                <button
                  onClick={onOpenEnrolment}
                  className="font-semibold text-blue-800 hover:text-blue-950 flex items-center gap-0.5"
                >
                  Join topic <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Diagnostic Quiz Section */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                Free Diagnostic Concept Check
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Test Your Exam Readiness
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Try this sample question from past South African NSC papers. At Sigwadi Tutorial, we break down every problem step-by-step to eliminate anxiety and build calculation confidence.
              </p>

              <div className="pt-2 text-xs text-neutral-400 flex items-center gap-4">
                <span>Question {activeQuizQuestion + 1} of {DIAGNOSTIC_QUESTIONS.length}</span>
                <span>·</span>
                <span>Score: {quizScore} / {Object.keys(answeredMap).length || 0}</span>
              </div>

              <div className="flex gap-2 pt-1">
                {DIAGNOSTIC_QUESTIONS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveQuizQuestion(idx);
                      setSelectedOption(null);
                      setShowAnswer(false);
                    }}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                      idx === activeQuizQuestion
                        ? 'bg-blue-600 text-white'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Card */}
            <div className="lg:col-span-7 bg-neutral-950/80 rounded-xl p-6 border border-neutral-800">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 pb-2 border-b border-neutral-800">
                <span className="font-semibold text-blue-400">{currentQuiz.subject} ({currentQuiz.grade})</span>
                <span className="text-neutral-500">{currentQuiz.topic}</span>
              </div>

              <p className="text-base font-semibold text-neutral-100 mb-5 leading-snug">
                {currentQuiz.question}
              </p>

              {/* Options */}
              <div className="space-y-2.5 mb-5">
                {currentQuiz.options.map((option, optIdx) => {
                  let optStyle = 'border-neutral-800 bg-neutral-900/90 text-neutral-200 hover:border-neutral-600';
                  if (showAnswer) {
                    if (optIdx === currentQuiz.correctIndex) {
                      optStyle = 'border-emerald-500/80 bg-emerald-950/40 text-emerald-200';
                    } else if (selectedOption === optIdx) {
                      optStyle = 'border-rose-500/80 bg-rose-950/40 text-rose-200';
                    } else {
                      optStyle = 'border-neutral-800 bg-neutral-900/40 text-neutral-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={showAnswer}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${optStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {showAnswer && (
                <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 text-xs space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-200">Solution Analysis: </span>
                      <span className="text-neutral-300 leading-relaxed">{currentQuiz.explanation}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                    <button
                      onClick={onOpenEnrolment}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      Need help with {currentQuiz.topic}? Register with us →
                    </button>

                    <button
                      onClick={handleNextQuiz}
                      className="px-3.5 py-1.5 text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-200 rounded-md transition-colors"
                    >
                      Next Question
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
