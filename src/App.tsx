import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessPlanPortfolio } from './components/BusinessPlanPortfolio';
import { MarketingAcquisitionAI, AcquisitionLead } from './components/MarketingAcquisitionAI';
import { LmsDiagnosticWorkbench } from './components/LmsDiagnosticWorkbench';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { ProgramsSection } from './components/ProgramsSection';
import { TuitionCalculator } from './components/TuitionCalculator';
import { MonitoringSystem } from './components/MonitoringSystem';
import { DirectorProfile } from './components/DirectorProfile';
import { ExamResources } from './components/ExamResources';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EnrolmentModal } from './components/EnrolmentModal';

const FALLBACK_LEADS: AcquisitionLead[] = [
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

export default function App() {
  const [isEnrolmentOpen, setIsEnrolmentOpen] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<string | undefined>(undefined);
  const [activePortfolioView, setActivePortfolioView] = useState<
    'all' | 'business-plan' | 'marketing-ai' | 'lms-platform' | 'tuition-governance'
  >('all');
  const [leads, setLeads] = useState<AcquisitionLead[]>(FALLBACK_LEADS);

  useEffect(() => {
    fetch('/api/portfolio/leads')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.leads) && data.leads.length > 0) {
          setLeads(data.leads);
        }
      })
      .catch(() => {
        // Fallback leads remain populated
      });
  }, []);

  const handleOpenEnrolment = (plan?: string) => {
    if (typeof plan === 'string') {
      setSelectedPlanDetails(plan);
    }
    setIsEnrolmentOpen(true);
  };

  const handleCloseEnrolment = () => {
    setIsEnrolmentOpen(false);
  };

  const handleLeadCreated = (newLead: AcquisitionLead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleExploreFees = () => {
    setActivePortfolioView('all');
    setTimeout(() => {
      const el = document.getElementById('calculator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigateToMarketingAI = () => {
    setActivePortfolioView('all');
    setTimeout(() => {
      const el = document.getElementById('acquisition-ai');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-blue-700 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar onOpenEnrolment={() => handleOpenEnrolment()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenEnrolment={() => handleOpenEnrolment()}
          onExploreFees={handleExploreFees}
        />

        {/* Intelligent Portfolio Architecture Navigation & Mode Switcher */}
        <div className="bg-white border-b border-neutral-200 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs font-semibold text-neutral-600">
              <span>Portfolio Workspace View:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200">
              {[
                { id: 'all', label: 'Complete Executive Portfolio' },
                { id: 'business-plan', label: '01. Business Plan & Financials' },
                { id: 'marketing-ai', label: '02. Gemini Marketing AI' },
                { id: 'lms-platform', label: '03. Interactive LMS & CAPS' },
                { id: 'tuition-governance', label: '04. Tuition & Leadership' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePortfolioView(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    activePortfolioView === tab.id
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 01. Executive Business Plan Portfolio & BCom Financial Simulator */}
        {(activePortfolioView === 'all' || activePortfolioView === 'business-plan') && (
          <BusinessPlanPortfolio
            onNavigateToMarketingAI={handleNavigateToMarketingAI}
            onOpenEnrolment={(plan) => handleOpenEnrolment(plan)}
          />
        )}

        {/* 02. Gemini AI Marketing Intelligence & Client Acquisition Accelerator */}
        {(activePortfolioView === 'all' || activePortfolioView === 'marketing-ai') && (
          <MarketingAcquisitionAI
            leads={leads}
            onOpenEnrolment={(plan) => handleOpenEnrolment(plan)}
          />
        )}

        {/* 03. Sigwadi Interactive LMS & AI Diagnostic Workbench */}
        {(activePortfolioView === 'all' || activePortfolioView === 'lms-platform') && (
          <>
            <LmsDiagnosticWorkbench
              onOpenEnrolment={(plan) => handleOpenEnrolment(plan)}
            />
            <CurriculumExplorer
              onOpenEnrolment={() => handleOpenEnrolment()}
            />
            <MonitoringSystem />
            <ExamResources
              onOpenEnrolment={() => handleOpenEnrolment()}
            />
          </>
        )}

        {/* 04. Programs, Tuition Calculator, Director Profile & FAQs */}
        {(activePortfolioView === 'all' || activePortfolioView === 'tuition-governance') && (
          <>
            <ProgramsSection
              onOpenEnrolment={() => handleOpenEnrolment()}
              onExploreFees={handleExploreFees}
            />
            <TuitionCalculator
              onSelectPlan={(plan) => handleOpenEnrolment(plan)}
            />
            <DirectorProfile />
            <FaqSection
              onOpenEnrolment={() => handleOpenEnrolment()}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenEnrolment={() => handleOpenEnrolment()} />

      {/* Enrolment Modal */}
      <EnrolmentModal
        isOpen={isEnrolmentOpen}
        onClose={handleCloseEnrolment}
        preselectedPlan={selectedPlanDetails}
        onLeadCreated={handleLeadCreated}
      />
    </div>
  );
}
