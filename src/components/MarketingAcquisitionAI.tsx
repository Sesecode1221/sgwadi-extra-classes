import React, { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  Target,
  Copy,
  Check,
  MessageCircle,
  Users,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Search,
  Filter,
  Send,
} from 'lucide-react';
import { INITIAL_MARKETING_INTELLIGENCE, BUSINESS_INFO } from '../data/curriculumData';

export interface AcquisitionLead {
  id: string;
  referenceCode: string;
  learnerName: string;
  grade: string;
  schoolName: string;
  location: string;
  subjects: string;
  format: string;
  currentMark: string;
  targetMark: string;
  parentName: string;
  parentPhone: string;
  estimatedMonthlyZar: number;
  acquisitionChannel: string;
  status: 'Diagnostic Scheduled' | 'Cohort Seat Reserved' | 'Active Enrolment';
  createdAt: string;
}

interface MarketingAcquisitionAIProps {
  leads: AcquisitionLead[];
  onOpenEnrolment: (planSummary?: string) => void;
}

export const MarketingAcquisitionAI: React.FC<MarketingAcquisitionAIProps> = ({
  leads,
  onOpenEnrolment,
}) => {
  const [targetRegion, setTargetRegion] = useState<string>(
    'Gqeberha / Nelson Mandela Bay (Eastern Cape)'
  );
  const [targetSegment, setTargetSegment] = useState<string>(
    'Parents of Grade 11 & 12 FET Learners (NSC Distinction & Bachelor Endorsement)'
  );
  const [primaryChannel, setPrimaryChannel] = useState<string>(
    'WhatsApp Parent Broadcasts & Free Diagnostic Assessment Funnel'
  );
  const [academicSeason, setAcademicSeason] = useState<string>(
    'Term 3 Preliminary Trials & Final NSC Matric Countdown'
  );
  const [monthlyBudgetZar, setMonthlyBudgetZar] = useState<number>(4500);

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [intelligence, setIntelligence] = useState(INITIAL_MARKETING_INTELLIGENCE);

  const [activeCopyTab, setActiveCopyTab] = useState<'whatsapp' | 'social' | 'school'>('whatsapp');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Pipeline table filtering
  const [leadSearch, setLeadSearch] = useState<string>('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('All');

  const handleGenerateInsights = async () => {
    setIsGenerating(true);
    setErrorMsg(null);
    try {
      const response = await fetch('/api/gemini/marketing-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetRegion,
          targetSegment,
          primaryChannel,
          academicSeason,
          monthlyBudgetZar,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate marketing insights');
      }
      setIntelligence(data);
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to generate live insights right now.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = leadStatusFilter === 'All' || lead.status === leadStatusFilter;
    const query = leadSearch.toLowerCase().trim();
    const matchesQuery =
      !query ||
      lead.learnerName.toLowerCase().includes(query) ||
      lead.schoolName.toLowerCase().includes(query) ||
      lead.location.toLowerCase().includes(query) ||
      lead.referenceCode.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  const totalPipelineMrr = leads.reduce((sum, item) => sum + (item.estimatedMonthlyZar || 0), 0);

  return (
    <section id="acquisition-ai" className="py-16 sm:py-20 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2">
              <span className="text-blue-900 font-bold">02. GEMINI AI CLIENT ACQUISITION ENGINE</span>
              <span aria-hidden="true">·</span>
              <span>SECTION 6 MARKETING STRATEGY</span>
              <span aria-hidden="true">·</span>
              <span>LIVE DATA-DRIVEN INSIGHTS</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950"
              style={{ textWrap: 'balance' }}
            >
              Live AI Marketing Intelligence & Client Acquisition Accelerator
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed mt-3 font-normal">
              Powered by server-side Gemini AI, this intelligence studio synthesizes localized South African market demand, calculates CAC-to-LTV unit economics, and generates high-converting WhatsApp, social, and school partnership campaigns to accelerate learner enrolment.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() =>
                onOpenEnrolment(
                  `Diagnostic Funnel Lead · ${intelligence.campaignCopywriting.irresistibleLeadMagnetOffer}`
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Test Live Lead Capture Modal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Campaign Parameters Deck (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-neutral-200 space-y-5">
            <div className="border-b border-neutral-200 pb-3">
              <div className="text-xs font-bold text-blue-900">
                Campaign Parameter Configuration
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                Configure target region, buyer segment, and budget to synthesize live Gemini marketing intelligence.
              </p>
            </div>

            {/* 1. Target Region */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                1. Target Geographic Hub
              </label>
              <select
                value={targetRegion}
                onChange={(e) => setTargetRegion(e.target.value)}
                className="w-full px-3 py-2.5 text-xs border border-neutral-300 rounded-lg bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Gqeberha / Nelson Mandela Bay (Eastern Cape)">
                  Gqeberha / Nelson Mandela Bay (Eastern Cape)
                </option>
                <option value="East London / Buffalo City (Eastern Cape)">
                  East London / Buffalo City (Eastern Cape)
                </option>
                <option value="Mthatha & OR Tambo District (Eastern Cape)">
                  Mthatha & OR Tambo District (Eastern Cape)
                </option>
                <option value="Makhanda & Sarah Baartman Academic Hub">
                  Makhanda & Sarah Baartman Academic Hub
                </option>
                <option value="Nationwide Online LMS (Gauteng, Western Cape, KZN & EC)">
                  Nationwide Online LMS (Gauteng, WC, KZN & EC)
                </option>
              </select>
            </div>

            {/* 2. Target Persona */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                2. Target Client Persona
              </label>
              <select
                value={targetSegment}
                onChange={(e) => setTargetSegment(e.target.value)}
                className="w-full px-3 py-2.5 text-xs border border-neutral-300 rounded-lg bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Parents of Grade 11 & 12 FET Learners (NSC Distinction & Bachelor Endorsement)">
                  Parents of Grade 11 & 12 FET Learners (Matric Distinction)
                </option>
                <option value="Parents of Grade 8 & 9 Senior Phase Learners (Pure Maths Foundation)">
                  Parents of Grade 8 & 9 Learners (Pure Maths Foundation)
                </option>
                <option value="High School Principals, Maths/Science HoDs & School Governing Bodies">
                  High School Principals, STEM HoDs & SGB Partnerships
                </option>
                <option value="Corporate CSI & Accounting/Engineering Bursary Sponsors">
                  Corporate CSI & STEM Bursary Sponsors
                </option>
              </select>
            </div>

            {/* 3. Primary Acquisition Channel */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                3. Primary Acquisition Channel
              </label>
              <select
                value={primaryChannel}
                onChange={(e) => setPrimaryChannel(e.target.value)}
                className="w-full px-3 py-2.5 text-xs border border-neutral-300 rounded-lg bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="WhatsApp Parent Broadcasts & Free Diagnostic Assessment Funnel">
                  WhatsApp Parent Broadcasts & Diagnostic Quiz Funnel
                </option>
                <option value="Facebook & Instagram Local Geo-Targeted Parent Campaigns">
                  Facebook & Instagram Local Geo-Targeted Parent Ads
                </option>
                <option value="School Parent Evening Workshops & Past-Paper Masterclasses">
                  School Parent Evening Workshops & Past-Paper Seminars
                </option>
                <option value="10% Sibling & Parent Report Card Referral Viral Loop">
                  10% Sibling & Parent Report Card Referral Loop
                </option>
              </select>
            </div>

            {/* 4. Academic Calendar Window */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                4. Academic Calendar Window
              </label>
              <select
                value={academicSeason}
                onChange={(e) => setAcademicSeason(e.target.value)}
                className="w-full px-3 py-2.5 text-xs border border-neutral-300 rounded-lg bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Term 1 Foundation & Cohort Intake (Jan – Mar)">
                  Term 1 Foundation & Cohort Intake (Jan – Mar)
                </option>
                <option value="Term 2 Mid-Year June Exam Intensive (Apr – Jun)">
                  Term 2 Mid-Year June Exam Intensive (Apr – Jun)
                </option>
                <option value="Term 3 Preliminary Trials & Final NSC Matric Countdown">
                  Term 3 Preliminary Trials & Matric Countdown (Jul – Sep)
                </option>
                <option value="Term 4 Final NSC Matric Revision & Early Bird Intake">
                  Term 4 Final NSC Matric Revision & Summer Intake
                </option>
              </select>
            </div>

            {/* 5. Monthly Marketing Budget Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-neutral-800">5. Monthly Campaign Budget:</span>
                <span className="font-mono font-bold text-blue-800 tabular-nums">
                  R{monthlyBudgetZar.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min={1500}
                max={15000}
                step={500}
                value={monthlyBudgetZar}
                onChange={(e) => setMonthlyBudgetZar(Number(e.target.value))}
                className="w-full accent-blue-700 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-0.5 tabular-nums">
                <span>R1,500 (Local)</span>
                <span>R6,000 (Growth)</span>
                <span>R15,000 (Multi-Hub)</span>
              </div>
            </div>

            <button
              onClick={handleGenerateInsights}
              disabled={isGenerating}
              className="w-full py-3.5 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-60 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>
                {isGenerating
                  ? 'Synthesizing Live Gemini Strategy...'
                  : 'Generate Live Gemini Marketing Strategy'}
              </span>
            </button>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          {/* Right Column: Live Synthesized Marketing Intelligence & Playbook (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Strategy Header & Unit Economics Strip */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-6">
              <div className="border-b border-neutral-200 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 mb-2">
                  <span className="font-bold text-blue-800">
                    LIVE GEMINI CLIENT ACQUISITION BLUEPRINT
                  </span>
                  <span className="font-mono">
                    Target Budget: R{monthlyBudgetZar.toLocaleString()} ZAR
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-neutral-950 leading-snug">
                  {intelligence.strategyTitle}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mt-2 font-normal">
                  {intelligence.executiveThesis}
                </p>
              </div>

              {/* 6 Quantitative Acquisition Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/90">
                  <div className="text-[11px] text-neutral-500">Est. Blended CAC</div>
                  <div className="text-base font-extrabold text-neutral-950 font-mono tabular-nums mt-0.5">
                    R{intelligence.unitEconomics.estimatedCacZar}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/90">
                  <div className="text-[11px] text-neutral-500">Learner LTV</div>
                  <div className="text-base font-extrabold text-neutral-950 font-mono tabular-nums mt-0.5">
                    R{intelligence.unitEconomics.projectedLtvZar.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/90">
                  <div className="text-[11px] text-neutral-500">LTV : CAC Ratio</div>
                  <div className="text-base font-extrabold text-emerald-700 font-mono tabular-nums mt-0.5">
                    {intelligence.unitEconomics.ltvToCacRatio}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/90">
                  <div className="text-[11px] text-neutral-500">New Learners / Mo</div>
                  <div className="text-base font-extrabold text-blue-800 font-mono tabular-nums mt-0.5">
                    +{intelligence.unitEconomics.projectedNewLearnersMonthly}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/90">
                  <div className="text-[11px] text-neutral-500">Added New MRR</div>
                  <div className="text-base font-extrabold text-neutral-950 font-mono tabular-nums mt-0.5">
                    R{intelligence.unitEconomics.projectedMonthlyRecurringRevenueZar.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/90">
                  <div className="text-[11px] text-neutral-500">CAC Payback</div>
                  <div className="text-base font-extrabold text-neutral-950 font-mono tabular-nums mt-0.5">
                    {intelligence.unitEconomics.paybackPeriodWeeks} wks
                  </div>
                </div>
              </div>

              {/* 4 Data-Driven Market Insights Cards */}
              <div>
                <div className="text-xs font-bold text-neutral-800 mb-3">
                  Data-Driven Market Demand & Behavioral Triggers
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {intelligence.marketInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-50/90 border border-neutral-200 flex flex-col justify-between space-y-2.5"
                    >
                      <div>
                        <div className="text-xs font-mono font-bold text-blue-800 mb-1">
                          0{idx + 1} · {insight.dataPointOrBenchmark}
                        </div>
                        <h4 className="text-sm font-bold text-neutral-950 leading-snug">
                          {insight.insightHeadline}
                        </h4>
                        <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-normal">
                          <strong className="text-neutral-800">Parent Pain Point:</strong>{' '}
                          {insight.parentPainPointAddressed}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-neutral-200/80 text-xs text-neutral-800">
                        <strong className="text-blue-900">Execution Action:</strong>{' '}
                        {insight.strategicAction}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready-to-Deploy Multi-Channel Campaign Copywriting */}
              <div className="pt-2 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      Ready-to-Deploy Multi-Channel Acquisition Scripts
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Lead Magnet Offer: {intelligence.campaignCopywriting.irresistibleLeadMagnetOffer}
                    </div>
                  </div>

                  {/* Segmented Copy Switcher */}
                  <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200">
                    <button
                      onClick={() => setActiveCopyTab('whatsapp')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                        activeCopyTab === 'whatsapp'
                          ? 'bg-neutral-900 text-white'
                          : 'text-neutral-600 hover:text-neutral-950'
                      }`}
                    >
                      WhatsApp Broadcast
                    </button>
                    <button
                      onClick={() => setActiveCopyTab('social')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                        activeCopyTab === 'social'
                          ? 'bg-neutral-900 text-white'
                          : 'text-neutral-600 hover:text-neutral-950'
                      }`}
                    >
                      Facebook / IG Ad
                    </button>
                    <button
                      onClick={() => setActiveCopyTab('school')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                        activeCopyTab === 'school'
                          ? 'bg-neutral-900 text-white'
                          : 'text-neutral-600 hover:text-neutral-950'
                      }`}
                    >
                      School Principal Pitch
                    </button>
                  </div>
                </div>

                {activeCopyTab === 'whatsapp' && (
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
                      <span>WhatsApp Parent Group & Broadcast Template</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleCopyText(
                              'whatsapp',
                              intelligence.campaignCopywriting.whatsappBroadcastScript
                            )
                          }
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
                        >
                          {copiedKey === 'whatsapp' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Script</span>
                            </>
                          )}
                        </button>
                        <a
                          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                            intelligence.campaignCopywriting.whatsappBroadcastScript
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Launch on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                    <pre className="text-xs text-neutral-200 whitespace-pre-wrap font-sans leading-relaxed">
                      {intelligence.campaignCopywriting.whatsappBroadcastScript}
                    </pre>
                  </div>
                )}

                {activeCopyTab === 'social' && (
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
                      <span>Geo-Targeted Parent Social Ad Creative</span>
                      <button
                        onClick={() =>
                          handleCopyText(
                            'social',
                            `${intelligence.campaignCopywriting.socialMediaAdHeadline}\n\n${intelligence.campaignCopywriting.socialMediaAdBody}`
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
                      >
                        {copiedKey === 'social' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Ad Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="text-sm font-bold text-white">
                      {intelligence.campaignCopywriting.socialMediaAdHeadline}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {intelligence.campaignCopywriting.socialMediaAdBody}
                    </p>
                  </div>
                )}

                {activeCopyTab === 'school' && (
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
                      <span>High School Principal & HoD Partnership Outreach</span>
                      <button
                        onClick={() =>
                          handleCopyText(
                            'school',
                            intelligence.campaignCopywriting.schoolPartnershipEmailPitch
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
                      >
                        {copiedKey === 'school' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Letter</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs text-neutral-200 whitespace-pre-wrap font-sans leading-relaxed">
                      {intelligence.campaignCopywriting.schoolPartnershipEmailPitch}
                    </pre>
                  </div>
                )}
              </div>

              {/* 3-Stage Conversion Funnel Architecture */}
              <div className="pt-2 border-t border-neutral-200">
                <div className="text-xs font-bold text-neutral-800 mb-3">
                  3-Stage Client Acquisition Conversion Funnel
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {intelligence.conversionFunnelStages.map((stage, i) => (
                    <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                      <div className="text-xs font-bold text-neutral-950">{stage.stageName}</div>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {stage.conversionMechanism}
                      </p>
                      <div className="mt-3 pt-2 border-t border-neutral-200/80 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-blue-800 font-semibold">{stage.targetConversionRate}</span>
                        <span className="text-emerald-700 font-bold">{stage.kpiMetric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Client Acquisition Pipeline & CRM Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-neutral-200 mb-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-semibold mb-1">
                <span className="text-blue-900 font-bold">LIVE ACQUISITION PIPELINE LEDGER</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{leads.length} Active Records</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-emerald-700 font-bold tabular-nums">
                  Pipeline Value: R{totalPipelineMrr.toLocaleString()}/mo
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-neutral-950">
                Real-Time Client Acquisition & Cohort Enrolment Tracker
              </h3>
            </div>

            {/* Search & Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  placeholder="Search learner, school, ref..."
                  className="pl-8 pr-3 py-1.5 text-xs border border-neutral-300 rounded-lg bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200">
                {['All', 'Active Enrolment', 'Cohort Seat Reserved', 'Diagnostic Scheduled'].map(
                  (st) => (
                    <button
                      key={st}
                      onClick={() => setLeadStatusFilter(st)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                        leadStatusFilter === st
                          ? 'bg-white text-neutral-950 shadow-sm font-semibold'
                          : 'text-neutral-600 hover:text-neutral-950'
                      }`}
                    >
                      {st}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* High-Density Data Table */}
          {filteredLeads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 text-[11px] font-bold text-neutral-500">
                    <th className="py-2.5 px-3">Ref Code</th>
                    <th className="py-2.5 px-3">Learner & Grade</th>
                    <th className="py-2.5 px-3">School & Hub</th>
                    <th className="py-2.5 px-3">Programme & Subject</th>
                    <th className="py-2.5 px-3">Mark Lift Target</th>
                    <th className="py-2.5 px-3">Acquisition Source</th>
                    <th className="py-2.5 px-3">Pipeline Status</th>
                    <th className="py-2.5 px-3 text-right">Monthly Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-xs">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-neutral-50/90 transition-colors">
                      <td className="py-3 px-3 font-mono font-semibold text-neutral-800 whitespace-nowrap">
                        {lead.referenceCode}
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-bold text-neutral-950">{lead.learnerName}</div>
                        <div className="text-[11px] text-neutral-500">
                          {lead.grade} · Parent: {lead.parentName}
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-neutral-800">{lead.schoolName}</div>
                        <div className="text-[11px] text-neutral-500">{lead.location}</div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-neutral-900">{lead.subjects}</div>
                        <div className="text-[11px] text-neutral-500">{lead.format}</div>
                      </td>
                      <td className="py-3 px-3 font-mono tabular-nums text-neutral-800 whitespace-nowrap">
                        {lead.currentMark} → <strong className="text-emerald-700">{lead.targetMark}</strong>
                      </td>
                      <td className="py-3 px-3 text-neutral-600">{lead.acquisitionChannel}</td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        {lead.status === 'Active Enrolment' && (
                          <span className="text-emerald-700 font-semibold">● Active Enrolment</span>
                        )}
                        {lead.status === 'Cohort Seat Reserved' && (
                          <span className="text-blue-700 font-semibold">▲ Seat Reserved</span>
                        )}
                        {lead.status === 'Diagnostic Scheduled' && (
                          <span className="text-amber-700 font-semibold">◆ Diagnostic Booked</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right font-mono font-bold text-neutral-950 tabular-nums whitespace-nowrap">
                        R{lead.estimatedMonthlyZar.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-10 text-center space-y-3">
              <div className="text-sm font-semibold text-neutral-800">
                No acquisition leads match your current filter.
              </div>
              <p className="text-xs text-neutral-500">
                Clear the search filter or log a new learner registration to populate the pipeline.
              </p>
              <button
                onClick={() => {
                  setLeadSearch('');
                  setLeadStatusFilter('All');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg"
              >
                Reset Pipeline Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
