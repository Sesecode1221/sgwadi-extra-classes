import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '2mb' }));

// Initialize server-side Gemini client with required User-Agent
function getGenAIClient() {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

export interface LeadRecord {
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

// Initial realistic South African client acquisition pipeline records
const acquisitionLeads: LeadRecord[] = [
  {
    id: 'lead-1',
    referenceCode: 'SIG-2026-GRADE12-8421',
    learnerName: 'Sipho Mokoena',
    grade: 'Grade 12',
    schoolName: 'Alexander Road High School',
    location: 'Gqeberha (Eastern Cape)',
    subjects: 'Both Pure Maths & Physical Science',
    format: 'Small-Group Cohort (Max 8)',
    currentMark: '54%',
    targetMark: '78% (Level 6/7)',
    parentName: 'Mrs N. Mokoena',
    parentPhone: '+27 82 419 3302',
    estimatedMonthlyZar: 1610,
    acquisitionChannel: 'Diagnostic Quiz Lead Magnet',
    status: 'Active Enrolment',
    createdAt: '2026-10-01',
  },
  {
    id: 'lead-2',
    referenceCode: 'SIG-2026-GRADE11-5910',
    learnerName: 'Buhle Ndlovu',
    grade: 'Grade 11',
    schoolName: 'Clarendon High School for Girls',
    location: 'East London (Eastern Cape)',
    subjects: 'Both Pure Maths & Physical Science',
    format: 'Small-Group Cohort (Max 8)',
    currentMark: '49%',
    targetMark: '75%+',
    parentName: 'Mr T. Ndlovu',
    parentPhone: '+27 73 882 1940',
    estimatedMonthlyZar: 1438,
    acquisitionChannel: 'WhatsApp Parent Referral Loop',
    status: 'Cohort Seat Reserved',
    createdAt: '2026-10-02',
  },
  {
    id: 'lead-3',
    referenceCode: 'SIG-2026-GRADE12-3104',
    learnerName: 'Lwandle Dlamini',
    grade: 'Grade 12',
    schoolName: 'St Johns College',
    location: 'Mthatha (Eastern Cape)',
    subjects: 'Physical Sciences Only',
    format: '1-on-1 Individual Tutoring',
    currentMark: '46%',
    targetMark: '70%+ Distinction Track',
    parentName: 'Dr Z. Dlamini',
    parentPhone: '+27 83 510 7741',
    estimatedMonthlyZar: 2080,
    acquisitionChannel: 'School Parent Evening Workshop',
    status: 'Active Enrolment',
    createdAt: '2026-10-03',
  },
  {
    id: 'lead-4',
    referenceCode: 'SIG-2026-GRADE10-7739',
    learnerName: 'Amahle Khumalo',
    grade: 'Grade 10',
    schoolName: 'Collegiate Girls High',
    location: 'Gqeberha (Eastern Cape)',
    subjects: 'Pure Mathematics Only',
    format: 'Online Live Digital Tutoring',
    currentMark: '58%',
    targetMark: '80%+ Distinction',
    parentName: 'Mrs P. Khumalo',
    parentPhone: '+27 76 209 4418',
    estimatedMonthlyZar: 1280,
    acquisitionChannel: 'Facebook Local Parent Campaign',
    status: 'Diagnostic Scheduled',
    createdAt: '2026-10-04',
  },
];

// GET live portfolio & client acquisition pipeline metrics
app.get('/api/portfolio/leads', (_req, res) => {
  res.json({ leads: acquisitionLeads });
});

// POST new learner enrolment / client acquisition lead
app.post('/api/portfolio/leads', (req, res) => {
  const {
    learnerName,
    grade,
    schoolName,
    location,
    subjects,
    format,
    currentMark,
    targetMark,
    parentName,
    parentPhone,
    estimatedMonthlyZar,
    acquisitionChannel,
  } = req.body;

  if (!learnerName || !parentName || !parentPhone) {
    return res.status(400).json({ error: 'Learner name, parent name, and phone number are required.' });
  }

  const randomCode = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `SIG-${new Date().getFullYear()}-${String(grade || 'G11').replace(/\s+/g, '').toUpperCase()}-${randomCode}`;

  const newLead: LeadRecord = {
    id: `lead-${Date.now()}`,
    referenceCode,
    learnerName: String(learnerName).trim(),
    grade: String(grade || 'Grade 11'),
    schoolName: String(schoolName || 'Eastern Cape High School').trim(),
    location: String(location || 'Eastern Cape, ZA').trim(),
    subjects: String(subjects || 'Both Pure Maths & Physical Science'),
    format: String(format || 'Small-Group Cohort (Max 8)'),
    currentMark: String(currentMark || '50%'),
    targetMark: String(targetMark || '75%+'),
    parentName: String(parentName).trim(),
    parentPhone: String(parentPhone).trim(),
    estimatedMonthlyZar: Number(estimatedMonthlyZar) || 1450,
    acquisitionChannel: String(acquisitionChannel || 'Direct Portfolio Enrolment'),
    status: 'Cohort Seat Reserved',
    createdAt: new Date().toISOString().split('T')[0],
  };

  acquisitionLeads.unshift(newLead);
  res.json({ lead: newLead, totalLeads: acquisitionLeads.length });
});

// POST /api/gemini/marketing-insights
// Generates live data-driven marketing & client acquisition intelligence for Sigwadi Maths & Science LMS
app.post('/api/gemini/marketing-insights', async (req, res) => {
  try {
    const {
      targetRegion = 'Gqeberha / Nelson Mandela Bay (Eastern Cape)',
      targetSegment = 'Parents of Grade 11 & 12 FET Learners aiming for University Bachelor Endorsement',
      primaryChannel = 'WhatsApp Parent Broadcasts & Free Diagnostic Assessment Funnel',
      academicSeason = 'Term 3 Preliminary Trials & Final NSC Matric Countdown',
      monthlyBudgetZar = 4500,
    } = req.body;

    const ai = getGenAIClient();

    const prompt = `You are the Chief Growth Officer and Quantitative Marketing Strategist for SIGWADI MATHS AND SCIENCE TUTORIAL & LMS PLATFORM, directed by Mr Avuma Sigwadi (BCom Accounting, Nelson Mandela University).
Business Context:
- Core Offering: High-impact CAPS & NSC Mathematics and Physical Sciences tutoring & interactive LMS for Grades 8 to 12 in South Africa.
- Delivery Formats & Pricing:
  1. Small-Group Cohorts (max 6-8 learners): R600 - R1,000/month (Dual-subject bundle ~R1,480/month).
  2. 1-on-1 Private Tutoring: R150 - R300/hour.
  3. Online Live Digital LMS Tutoring: R100 - R250/hour.
  4. Holiday Bootcamps & NSC Matric Revision Blocks: R500 - R1,500/block.
- Key Competitive Differentiators: Directed by a BCom Accounting (NMU) graduate; strict max 8 learners per cohort; Section 8.4 Monthly Written Parent Progress Audits; diagnostic baseline testing; 1.2 min/mark NSC exam pacing mastery.

Generate a hyper-specific, data-driven Marketing & Client Acquisition Intelligence Plan for:
- Target Geographic Hub: ${targetRegion}
- Target Client Persona: ${targetSegment}
- Primary Acquisition Channel: ${primaryChannel}
- Academic Calendar Window: ${academicSeason}
- Monthly Marketing Budget: R${monthlyBudgetZar} ZAR

Provide realistic South African Rand (ZAR) unit economics, high-converting messaging tailored to South African parents and schools, and concrete client acquisition funnel steps.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategyTitle: { type: Type.STRING },
            executiveThesis: { type: Type.STRING },
            unitEconomics: {
              type: Type.OBJECT,
              properties: {
                estimatedCacZar: { type: Type.NUMBER },
                projectedLtvZar: { type: Type.NUMBER },
                ltvToCacRatio: { type: Type.STRING },
                projectedNewLearnersMonthly: { type: Type.NUMBER },
                projectedMonthlyRecurringRevenueZar: { type: Type.NUMBER },
                paybackPeriodWeeks: { type: Type.NUMBER },
              },
              required: [
                'estimatedCacZar',
                'projectedLtvZar',
                'ltvToCacRatio',
                'projectedNewLearnersMonthly',
                'projectedMonthlyRecurringRevenueZar',
                'paybackPeriodWeeks',
              ],
            },
            marketInsights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  insightHeadline: { type: Type.STRING },
                  dataPointOrBenchmark: { type: Type.STRING },
                  parentPainPointAddressed: { type: Type.STRING },
                  strategicAction: { type: Type.STRING },
                },
                required: [
                  'insightHeadline',
                  'dataPointOrBenchmark',
                  'parentPainPointAddressed',
                  'strategicAction',
                ],
              },
            },
            campaignCopywriting: {
              type: Type.OBJECT,
              properties: {
                whatsappBroadcastScript: { type: Type.STRING },
                socialMediaAdHeadline: { type: Type.STRING },
                socialMediaAdBody: { type: Type.STRING },
                schoolPartnershipEmailPitch: { type: Type.STRING },
                irresistibleLeadMagnetOffer: { type: Type.STRING },
              },
              required: [
                'whatsappBroadcastScript',
                'socialMediaAdHeadline',
                'socialMediaAdBody',
                'schoolPartnershipEmailPitch',
                'irresistibleLeadMagnetOffer',
              ],
            },
            conversionFunnelStages: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  stageName: { type: Type.STRING },
                  conversionMechanism: { type: Type.STRING },
                  targetConversionRate: { type: Type.STRING },
                  kpiMetric: { type: Type.STRING },
                },
                required: ['stageName', 'conversionMechanism', 'targetConversionRate', 'kpiMetric'],
              },
            },
          },
          required: [
            'strategyTitle',
            'executiveThesis',
            'unitEconomics',
            'marketInsights',
            'campaignCopywriting',
            'conversionFunnelStages',
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response from Gemini model');
    }
    const parsed = JSON.parse(text.trim());
    res.json(parsed);
  } catch (error: any) {
    console.error('Error generating marketing insights:', error);
    res.status(500).json({
      error: error?.message || 'Failed to generate live marketing insights via Gemini API.',
    });
  }
});

// POST /api/gemini/financial-audit
// Generates live BCom Accounting Financial & Growth Audit for the Business Plan Portfolio
app.post('/api/gemini/financial-audit', async (req, res) => {
  try {
    const {
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
    } = req.body;

    const ai = getGenAIClient();

    const prompt = `You are Mr Avuma Sigwadi (BCom Accounting, Nelson Mandela University), Director of Sigwadi Maths and Science Tutorial & LMS Platform.
Perform a rigorous BCom Accounting Executive Financial & Client Acquisition Scaling Audit on the current simulated business plan scenario:
- Active Small-Group Cohorts: ${activeCohorts} cohorts (${learnersPerCohort} learners/cohort, max 8 cap)
- Average Cohort Tuition Fee: R${avgCohortFeeZar}/month
- 1-on-1 Private Tutoring Volume: ${privateHoursWeekly} hours/week
- Online Digital LMS Learners: ${onlineLearners} learners
- Monthly Marketing & Acquisition Spend: R${monthlyMarketingSpendZar}
- Monthly Fixed & Tutor Operating Overhead: R${monthlyOperatingOverheadZar}
- Projected Monthly Gross Revenue: R${monthlyRevenueZar}
- Projected Monthly Net Operating Surplus (EBITDA): R${monthlyNetProfitZar} (${operatingMarginPct}% margin)

Return a structured JSON executive financial memo analyzing unit economics, cohort capacity utilization, marketing budget reallocation to accelerate client acquisition, and 3 concrete 90-day scaling milestones.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            auditHeadline: { type: Type.STRING },
            accountingAssessment: { type: Type.STRING },
            capacityUtilizationInsight: { type: Type.STRING },
            marketingRoasProjection: { type: Type.STRING },
            riskMitigationNote: { type: Type.STRING },
            ninetyDayScalingRoadmap: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  monthLabel: { type: Type.STRING },
                  strategicObjective: { type: Type.STRING },
                  targetRevenueDeltaZar: { type: Type.STRING },
                },
                required: ['monthLabel', 'strategicObjective', 'targetRevenueDeltaZar'],
              },
            },
          },
          required: [
            'auditHeadline',
            'accountingAssessment',
            'capacityUtilizationInsight',
            'marketingRoasProjection',
            'riskMitigationNote',
            'ninetyDayScalingRoadmap',
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response from Gemini model');
    }
    res.json(JSON.parse(text.trim()));
  } catch (error: any) {
    console.error('Error generating financial audit:', error);
    res.status(500).json({
      error: error?.message || 'Failed to generate live financial audit via Gemini API.',
    });
  }
});

// POST /api/gemini/lms-diagnostic-coach
// Generates an interactive CAPS & NSC Diagnostic Mastery Breakdown + Parent Enrolment Conversion Pitch
app.post('/api/gemini/lms-diagnostic-coach', async (req, res) => {
  try {
    const {
      subject = 'Pure Mathematics',
      grade = 'Grade 12',
      topic = 'Euclidean Geometry & Circle Theorems',
      learnerChallenge = 'Struggling to identify cyclic quadrilaterals and prove similarity in Paper 2 riders',
      currentMarkPct = 48,
      targetMarkPct = 75,
    } = req.body;

    const ai = getGenAIClient();

    const prompt = `You are the Academic AI Engine inside the Sigwadi Maths and Science LMS Platform (directed by Mr Avuma Sigwadi, BCom Accounting, NMU).
A South African learner/parent has requested a live CAPS & NSC Diagnostic Remediation Plan:
- Subject: ${subject}
- Grade Level: ${grade}
- CAPS Topic: ${topic}
- Specific Stumbling Block: ${learnerChallenge}
- Current Mark: ${currentMarkPct}% -> Target Mark: ${targetMarkPct}%

Generate a structured response that serves BOTH as:
1. An immediate, high-clarity CAPS & NSC pedagogical breakdown (core theorem/formula rule, common exam trap to avoid, and a step-by-step worked micro-example).
2. A data-driven Parent Conversion Recommendation showing how enrolling in Sigwadi's Small-Group Cohort or 1-on-1 LMS programme will bridge the ${targetMarkPct - currentMarkPct}% mark gap over 8 weeks.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnosticSummary: { type: Type.STRING },
            capsExamWeightAndImportance: { type: Type.STRING },
            coreRuleOrFormula: { type: Type.STRING },
            commonMatricExamTrap: { type: Type.STRING },
            workedMicroExample: {
              type: Type.OBJECT,
              properties: {
                problemStatement: { type: Type.STRING },
                stepByStepSolution: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                finalAnswer: { type: Type.STRING },
              },
              required: ['problemStatement', 'stepByStepSolution', 'finalAnswer'],
            },
            eightWeekRemediationPlan: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  weeks: { type: Type.STRING },
                  focusModule: { type: Type.STRING },
                  expectedScoreMilestone: { type: Type.STRING },
                },
                required: ['weeks', 'focusModule', 'expectedScoreMilestone'],
              },
            },
            recommendedSigwadiProgramme: { type: Type.STRING },
            parentConversionMessage: { type: Type.STRING },
          },
          required: [
            'diagnosticSummary',
            'capsExamWeightAndImportance',
            'coreRuleOrFormula',
            'commonMatricExamTrap',
            'workedMicroExample',
            'eightWeekRemediationPlan',
            'recommendedSigwadiProgramme',
            'parentConversionMessage',
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response from Gemini model');
    }
    res.json(JSON.parse(text.trim()));
  } catch (error: any) {
    console.error('Error in LMS diagnostic coach:', error);
    res.status(500).json({
      error: error?.message || 'Failed to generate LMS diagnostic breakdown via Gemini API.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sigwadi Business Plan Portfolio & LMS Server running on http://localhost:${PORT}`);
  });
}

startServer();
