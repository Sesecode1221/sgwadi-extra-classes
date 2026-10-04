import React, { useState } from 'react';
import {
  FileSpreadsheet,
  TrendingUp,
  Briefcase,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  BarChart3,
  Layers,
  Award,
} from 'lucide-react';
import { BUSINESS_PLAN_CHAPTERS, BusinessPlanChapter } from '../data/curriculumData';

interface BusinessPlanPortfolioProps {
  onNavigateToMarketingAI: () => void;
  onOpenEnrolment: (planSummary?: string) => void;
}

interface FinancialAuditResult {
  auditHeadline: string;
  accountingAssessment: string;
  capacityUtilizationInsight: string;
  marketingRoasProjection: string;
  riskMitigationNote: string;
  ninetyDayScalingRoadmap: {
    monthLabel: string;
    strategicObjective: string;
    targetRevenueDeltaZar: string;
  }[];
}

export const BusinessPlanPortfolio: React.FC<BusinessPlanPortfolioProps> = ({
  onNavigateToMarketingAI,
  onOpenEnrolment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeChapterId, setActiveChapterId] = useState<string>(BUSINESS_PLAN_CHAPTERS[0].id);

  // Interactive BCom Accounting Unit Economics Simulator State
  const [activeCohorts, setActiveCohorts] = useState<number>(6);
  const [learnersPerCohort, setLearnersPerCohort] = useState<number>(7);
  const [avgCohortFeeZar, setAvgCohortFeeZar] = useState<number>(1250);
  const [privateHoursWeekly, setPrivateHoursWeekly] = useState<number>(12);
  const [onlineLearners, setOnlineLearners] = useState<number>(14);
  const [monthlyMarketingSpendZar, setMonthlyMarketingSpendZar] = useState<number>(4500);

  // Gemini Live Financial Audit State
  const [isAuditing, setIsAuditing] = useState<boolean>(false);
  const [auditError, setAuditError] = useState<string | null>(null);
  const [auditResult, setAuditResult] = useState<FinancialAuditResult>({
    auditHeadline: 'BCom Accounting Unit Economics Verification: Strong 64%+ Operating Leverage',
    accountingAssessment:
      'At 6 cohorts averaging 7 learners per cohort (87.5% seat utilization) paired with 14 online LMS subscribers, monthly recurring tuition revenue covers fixed venue and tutor remuneration more than 2.8x over.',
    capacityUtilizationInsight:
      'Filling the remaining 1 seat per existing cohort (6 additional learners across 6 cohorts) adds R7,500/month in pure gross margin with zero additional tutor hour cost.',
    marketingRoasProjection:
      'A R4,500 monthly acquisition allocation at a R310 blended CAC yields ±14 new learner enrolments per month, generating R17,500 in new first-month tuition (3.88x immediate ROAS).',
    riskMitigationNote:
      'Maintain monthly advance fee collection by the 2nd of each month and lock in multi-term retention via Section 8.4 Monthly Written Parent Progress Audits.',
    ninetyDayScalingRoadmap: [
      {
        monthLabel: 'Month 1 (Days 1–30)',
        strategicObjective: 'Fill all existing cohorts to 8/8 capacity via Free CAPS Diagnostic WhatsApp Funnel',
        targetRevenueDeltaZar: '+R9,000 / mo MRR',
      },
      {
        monthLabel: 'Month 2 (Days 31–60)',
        strategicObjective: 'Launch 2 new FET Grade 11/12 Dual-Subject Cohorts + Saturday NSC Paper 2 Masterclass',
        targetRevenueDeltaZar: '+R20,000 / mo MRR',
      },
      {
        monthLabel: 'Month 3 (Days 61–90)',
        strategicObjective: 'Scale Nationwide Online Live LMS Tier & Holiday Revision Bootcamp Pre-bookings',
        targetRevenueDeltaZar: '+R32,500 / mo MRR',
      },
    ],
  });

  const filteredChapters =
    selectedCategory === 'All'
      ? BUSINESS_PLAN_CHAPTERS
      : BUSINESS_PLAN_CHAPTERS.filter((ch) => ch.category === selectedCategory);

  const activeChapter: BusinessPlanChapter =
    BUSINESS_PLAN_CHAPTERS.find((ch) => ch.id === activeChapterId) || BUSINESS_PLAN_CHAPTERS[0];

  // Live Unit Economics Calculations
  const cohortLearners = activeCohorts * learnersPerCohort;
  const totalActiveLearners = cohortLearners + onlineLearners + Math.ceil(privateHoursWeekly / 2);
  const cohortRevenueZar = cohortLearners * avgCohortFeeZar;
  const privateRevenueZar = privateHoursWeekly * 4 * 230; // R230/hr avg
  const onlineRevenueZar = onlineLearners * 780; // R780/mo avg online LMS tier
  const monthlyRevenueZar = cohortRevenueZar + privateRevenueZar + onlineRevenueZar;

  // Tutor & operational costs (BCom Accounting realistic model)
  const tutorDirectCostZar = activeCohorts * 2800 + privateHoursWeekly * 4 * 110 + onlineLearners * 180;
  const fixedVenueAndLmsCostZar = 6500;
  const monthlyOperatingOverheadZar = tutorDirectCostZar + fixedVenueAndLmsCostZar + monthlyMarketingSpendZar;
  const monthlyNetProfitZar = monthlyRevenueZar - monthlyOperatingOverheadZar;
  const operatingMarginPct =
    monthlyRevenueZar > 0 ? Math.round((monthlyNetProfitZar / monthlyRevenueZar) * 1000) / 10 : 0;
  const annualProjectedRevenueZar = monthlyRevenueZar * 12;
  const seatUtilizationPct = Math.round((learnersPerCohort / 8) * 100);

  const handleRunLiveFinancialAudit = async () => {
    setIsAuditing(true);
    setAuditError(null);
    try {
      const response = await fetch('/api/gemini/financial-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          activeCohorts,
          learnersPerCohort,
          avgCohortFeeZar,
          privateHoursWeekly,
          onlineLearners,
          monthlyMarketingSpendZar,
          monthlyOperatingOverheadZar,
          monthlyRevenueZar,
          monthlyNetProfitZar,
          operatingMarginPct,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to run Gemini financial audit');
      }
      setAuditResult(data);
    } catch (err: any) {
      setAuditError(err.message || 'Unable to reach Gemini Financial Audit service.');
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <section id="business-plan" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2">
              <span className="text-blue-900 font-bold">01. EXECUTIVE BUSINESS PLAN PORTFOLIO</span>
              <span aria-hidden="true">·</span>
              <span>BCOM ACCOUNTING (NMU) GOVERNANCE</span>
              <span aria-hidden="true">·</span>
              <span>SECTIONS 1 TO 14</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950"
              style={{ textWrap: 'balance' }}
            >
              Intelligent Business Plan Architecture & Unit Economics Simulator
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed mt-3 font-normal">
              Explore the complete strategic blueprint of Sigwadi Maths and Science Tutorial & LMS Platform. Every chapter connects pedagogical excellence with disciplined financial modeling and client acquisition scalability.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onNavigateToMarketingAI}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Open Gemini Marketing AI Studio</span>
            </button>
          </div>
        </div>

        {/* Part 1: Interactive 6-Chapter Business Plan Explorer */}
        <div className="mb-16">
          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-neutral-200 mb-6">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200">
              {['All', 'Strategy & Governance', 'Market & Acquisition', 'LMS & Operations', 'Financials & Impact'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      const firstMatch =
                        cat === 'All'
                          ? BUSINESS_PLAN_CHAPTERS[0]
                          : BUSINESS_PLAN_CHAPTERS.find((c) => c.category === cat);
                      if (firstMatch) setActiveChapterId(firstMatch.id);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            <div className="text-xs text-neutral-500">
              <span>Showing {filteredChapters.length} Business Plan Modules</span>
              <span className="mx-1.5" aria-hidden="true">·</span>
              <span className="font-medium text-neutral-800">Director: Mr Avuma Sigwadi</span>
            </div>
          </div>

          {/* Master-Detail Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Chapter Index (4 cols) */}
            <div className="lg:col-span-4 space-y-2.5">
              {filteredChapters.map((chapter) => {
                const isSelected = chapter.id === activeChapter.id;
                return (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapterId(chapter.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                        : 'bg-neutral-50/80 hover:bg-white text-neutral-800 border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-mono font-semibold ${isSelected ? 'text-blue-400' : 'text-blue-800'}`}>
                        Chapter {chapter.sectionNumber}
                      </span>
                      <span className={isSelected ? 'text-neutral-400' : 'text-neutral-500'}>
                        {chapter.category}
                      </span>
                    </div>
                    <div className="text-sm font-bold leading-snug">{chapter.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Right Active Chapter Deep-Dive (8 cols) */}
            <div className="lg:col-span-8 bg-neutral-50/70 rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-6">
              <div className="border-b border-neutral-200 pb-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mb-2">
                  <span className="font-mono font-bold text-blue-800">CHAPTER {activeChapter.sectionNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-neutral-700">{activeChapter.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>SIGWADI BUSINESS PLAN PORTFOLIO</span>
                </div>
                <h3 className="text-2xl font-extrabold text-neutral-950 leading-snug">
                  {activeChapter.executiveHeadline}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mt-3 font-normal">
                  {activeChapter.summary}
                </p>
              </div>

              {/* Quantitative Proof Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activeChapter.keyMetrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-neutral-200/90">
                    <div className="text-[11px] font-medium text-neutral-500">{m.label}</div>
                    <div className="text-lg font-extrabold text-neutral-950 tabular-nums mt-0.5">{m.value}</div>
                    <div className="text-[11px] text-neutral-500 mt-0.5 leading-tight">{m.context}</div>
                  </div>
                ))}
              </div>

              {/* 3 Strategic Execution Pillars */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-neutral-800">
                  Core Operational & Strategic Mechanisms
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeChapter.strategicPillars.map((pillar, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-neutral-200/90 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-mono font-bold text-blue-800 mb-1">
                          0{idx + 1}. {pillar.title}
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Acquisition Impact Callout */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-neutral-700">
                  <span className="font-bold text-neutral-950">Client Acquisition Linkage: </span>
                  <span>{activeChapter.acquisitionLinkage}</span>
                </div>
                <button
                  onClick={() => onOpenEnrolment(`Business Plan Inquiry · ${activeChapter.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 hover:text-blue-950 whitespace-nowrap shrink-0"
                >
                  <span>Enrol or Partner on This Pillar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Interactive BCom Accounting Unit Economics & Gemini Financial Audit Simulator */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 border border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold mb-1">
                <span>SECTION 10 FINANCIAL PLAN & LIVE AI SCALING MODEL</span>
                <span aria-hidden="true">·</span>
                <span>ZAR (R) UNIT ECONOMICS</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Interactive Financial & Client Acquisition Revenue Simulator
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl font-normal">
                Adjust cohort capacity, tuition bundles, and marketing spend below to stress-test Sigwadi Tutorial’s commercial performance and run a live Gemini AI BCom Accounting audit.
              </p>
            </div>

            <button
              onClick={handleRunLiveFinancialAudit}
              disabled={isAuditing}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-200 disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isAuditing ? 'animate-spin text-blue-700' : ''}`} />
              <span>{isAuditing ? 'Auditing Model with Gemini AI...' : 'Run Live Gemini Financial Audit'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Parameter Sliders (5 cols) */}
            <div className="lg:col-span-5 bg-neutral-950/90 p-6 rounded-xl border border-neutral-800 space-y-5">
              <div className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2">
                Operational & Acquisition Input Parameters
              </div>

              {/* Slider 1: Active Small-Group Cohorts */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-neutral-300 font-medium">Active Small-Group Cohorts:</span>
                  <span className="font-mono font-bold text-blue-400 tabular-nums">{activeCohorts} Cohorts</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={16}
                  step={1}
                  value={activeCohorts}
                  onChange={(e) => setActiveCohorts(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-0.5 tabular-nums">
                  <span>2 (Seed Phase)</span>
                  <span>8 (Regional Hub)</span>
                  <span>16 (Multi-Centre)</span>
                </div>
              </div>

              {/* Slider 2: Avg Learners per Cohort */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-neutral-300 font-medium">Learners per Cohort (Cap = 8):</span>
                  <span className="font-mono font-bold text-blue-400 tabular-nums">
                    {learnersPerCohort} / 8 ({seatUtilizationPct}% Utilized)
                  </span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={8}
                  step={1}
                  value={learnersPerCohort}
                  onChange={(e) => setLearnersPerCohort(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Slider 3: Average Monthly Cohort Fee */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-neutral-300 font-medium">Avg Monthly Tuition / Learner:</span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">R{avgCohortFeeZar} / mo</span>
                </div>
                <input
                  type="range"
                  min={700}
                  max={1600}
                  step={50}
                  value={avgCohortFeeZar}
                  onChange={(e) => setAvgCohortFeeZar(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-0.5 tabular-nums">
                  <span>R700 (1 Subject)</span>
                  <span>R1,250 (Blended)</span>
                  <span>R1,600 (Dual FET)</span>
                </div>
              </div>

              {/* Slider 4: 1-on-1 Private Hours & Online LMS Subscribers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-800">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-300">1-on-1 Hrs/Wk:</span>
                    <span className="font-mono font-bold text-white tabular-nums">{privateHoursWeekly}h</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={30}
                    step={2}
                    value={privateHoursWeekly}
                    onChange={(e) => setPrivateHoursWeekly(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-300">Online LMS Users:</span>
                    <span className="font-mono font-bold text-white tabular-nums">{onlineLearners}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={2}
                    value={onlineLearners}
                    onChange={(e) => setOnlineLearners(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Slider 5: Monthly Marketing & Client Acquisition Spend */}
              <div className="pt-2 border-t border-neutral-800">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-neutral-300 font-medium">Monthly Marketing & Ad Spend:</span>
                  <span className="font-mono font-bold text-amber-400 tabular-nums">
                    R{monthlyMarketingSpendZar.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={1500}
                  max={12000}
                  step={500}
                  value={monthlyMarketingSpendZar}
                  onChange={(e) => setMonthlyMarketingSpendZar(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Live Financial Ledger & Gemini Executive Audit Output (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top 4 Financial Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Active Enrolled Learners</div>
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums mt-1">
                    {totalActiveLearners}
                  </div>
                  <div className="text-[11px] text-blue-400 mt-0.5 tabular-nums">
                    {cohortLearners} Cohort · {onlineLearners} Online
                  </div>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Monthly Gross Revenue</div>
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums mt-1">
                    R{monthlyRevenueZar.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 tabular-nums">
                    R{annualProjectedRevenueZar.toLocaleString()} / yr ARR
                  </div>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Net Monthly Surplus</div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums mt-1">
                    R{monthlyNetProfitZar.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-0.5 tabular-nums">
                    ● {operatingMarginPct}% EBITDA Margin
                  </div>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Acquisition Velocity</div>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums mt-1">
                    +{Math.max(4, Math.round(monthlyMarketingSpendZar / 310))}/mo
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 tabular-nums">
                    Est. New Learners @ R310 CAC
                  </div>
                </div>
              </div>

              {auditError && (
                <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-700 text-xs text-rose-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{auditError}</span>
                </div>
              )}

              {/* Gemini AI Executive Audit Report */}
              <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                    <Sparkles className="w-4 h-4" />
                    <span>GEMINI AI BCOM ACCOUNTING & GROWTH AUDIT</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    Director Review · Avuma Sigwadi
                  </span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug">
                  {auditResult.auditHeadline}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-neutral-200">Unit Economics & Margin Analysis</div>
                    <p className="text-neutral-400 leading-relaxed font-normal">
                      {auditResult.accountingAssessment}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-neutral-200">Cohort Seat Utilization & ROAS</div>
                    <p className="text-neutral-400 leading-relaxed font-normal">
                      {auditResult.capacityUtilizationInsight} {auditResult.marketingRoasProjection}
                    </p>
                  </div>
                </div>

                {/* 90-Day Scaling Roadmap Table */}
                <div className="pt-3 border-t border-neutral-800">
                  <div className="text-xs font-semibold text-neutral-300 mb-2.5">
                    90-Day Client Acquisition & Revenue Scaling Roadmap
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {auditResult.ninetyDayScalingRoadmap.map((step, i) => (
                      <div key={i} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                          <span className="text-blue-400 font-bold">{step.monthLabel}</span>
                          <span className="text-emerald-400 font-bold tabular-nums">
                            {step.targetRevenueDeltaZar}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-snug font-normal">
                          {step.strategicObjective}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
