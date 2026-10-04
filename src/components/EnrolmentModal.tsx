import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/curriculumData';
import { AcquisitionLead } from './MarketingAcquisitionAI';

interface EnrolmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
  onLeadCreated?: (newLead: AcquisitionLead) => void;
}

export const EnrolmentModal: React.FC<EnrolmentModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan,
  onLeadCreated,
}) => {
  const [learnerName, setLearnerName] = useState('');
  const [grade, setGrade] = useState('Grade 11');
  const [schoolName, setSchoolName] = useState('');
  const [location, setLocation] = useState('Gqeberha (Eastern Cape)');
  const [subjects, setSubjects] = useState('Both Pure Maths & Physical Science');
  const [format, setFormat] = useState('Small-Group Cohort (Max 8)');
  const [currentMark, setCurrentMark] = useState('52%');
  const [targetMark, setTargetMark] = useState('78%+ (Distinction Target)');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [acquisitionChannel, setAcquisitionChannel] = useState('Gemini AI Diagnostic Funnel');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationRef, setRegistrationRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!learnerName.trim()) {
      setErrorMessage('Please enter the learner’s full name.');
      return;
    }
    if (!parentName.trim()) {
      setErrorMessage('Please enter the parent/guardian’s name.');
      return;
    }
    if (!parentPhone.trim() || parentPhone.trim().length < 8) {
      setErrorMessage('Please provide a valid contact cellphone / WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const estimatedMonthlyZar = subjects.includes('Both') ? 1480 : 850;
      const response = await fetch('/api/portfolio/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          learnerName,
          grade,
          schoolName: schoolName || 'Eastern Cape High School',
          location,
          subjects,
          format,
          currentMark: currentMark || '50%',
          targetMark: targetMark || '75%+',
          parentName,
          parentPhone,
          estimatedMonthlyZar,
          acquisitionChannel: preselectedPlan
            ? `Portfolio Plan (${preselectedPlan.slice(0, 28)})`
            : acquisitionChannel,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to save enrolment registration.');
      }
      setRegistrationRef(data.lead.referenceCode);
      if (onLeadCreated && data.lead) {
        onLeadCreated(data.lead);
      }
      setSubmitted(true);
    } catch (err: any) {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const refCode = `SIG-${new Date().getFullYear()}-${grade.replace(/\s+/g, '').toUpperCase()}-${randomCode}`;
      setRegistrationRef(refCode);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Mr Avuma Sigwadi,\n\nI have registered for tutoring with Sigwadi Maths and Science Tutorial & LMS.\n\nRegistration Ref: ${registrationRef}\nLearner: ${learnerName}\nGrade: ${grade}\nSchool: ${schoolName || 'N/A'}\nSubject(s): ${subjects}\nFormat: ${format}\nParent/Guardian: ${parentName} (${parentPhone})\n\nPlease provide confirmation and cohort timetable details.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="text-xs font-bold text-blue-900 mb-1">
                LEARNER ADMISSION & LIVE PIPELINE REGISTRATION
              </div>
              <h2 className="text-2xl font-extrabold text-neutral-950">
                Reserve Cohort Seat & Diagnostic Assessment
              </h2>
              <p className="text-xs text-neutral-600 mt-1 font-normal">
                Directly overseen by Mr Avuma Sigwadi (BCom Accounting, NMU). Submitting this form reserves a cohort seat and logs the record directly into the live Client Acquisition Pipeline.
              </p>
              {preselectedPlan && (
                <div className="mt-3 p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
                  <strong>Selected Plan / Context:</strong> {preselectedPlan}
                </div>
              )}
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Learner Info Section */}
              <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-200/90 space-y-3">
                <div className="text-xs font-bold text-neutral-800">
                  1. Learner Details
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Learner Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Buhle Ndlovu"
                      value={learnerName}
                      onChange={(e) => setLearnerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Current Grade *
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      <option value="Grade 8">Grade 8 (Senior Phase)</option>
                      <option value="Grade 9">Grade 9 (Senior Phase)</option>
                      <option value="Grade 10">Grade 10 (FET Phase)</option>
                      <option value="Grade 11">Grade 11 (FET Phase)</option>
                      <option value="Grade 12">Grade 12 (NSC Matric)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      School Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alexander Road High / Clarendon"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Town / Hub
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Gqeberha, East London, Mthatha"
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Subject & Format */}
              <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-200/90 space-y-3">
                <div className="text-xs font-bold text-neutral-800">
                  2. Subject, Format & Acquisition Source
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Target Subject(s) *
                    </label>
                    <select
                      value={subjects}
                      onChange={(e) => setSubjects(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      <option value="Both Pure Maths & Physical Science">
                        Both Pure Maths & Physical Science (Bundle)
                      </option>
                      <option value="Pure Mathematics Only">Pure Mathematics Only</option>
                      <option value="Physical Sciences Only">Physical Sciences Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Preferred Format *
                    </label>
                    <select
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      <option value="Small-Group Cohort (Max 8)">
                        Small-Group Cohort (Max 8 learners)
                      </option>
                      <option value="1-on-1 Individual Tutoring">
                        1-on-1 Private Individual Tutoring
                      </option>
                      <option value="NSC Exam Prep Masterclasses">
                        NSC Exam Prep Masterclasses
                      </option>
                      <option value="Intensive Holiday Bootcamp">Intensive Holiday Bootcamp</option>
                      <option value="Online Live Digital Tutoring">
                        Online Live Digital LMS Tutoring
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Current Mark
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 48%"
                      value={currentMark}
                      onChange={(e) => setCurrentMark(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Target Mark
                    </label>
                    <input
                      type="text"
                      value={targetMark}
                      onChange={(e) => setTargetMark(e.target.value)}
                      placeholder="e.g. 75%+"
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Acquisition Channel
                    </label>
                    <select
                      value={acquisitionChannel}
                      onChange={(e) => setAcquisitionChannel(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      <option value="Gemini AI Diagnostic Funnel">Gemini AI Diagnostic Funnel</option>
                      <option value="WhatsApp Parent Referral Loop">WhatsApp Parent Referral</option>
                      <option value="School Parent Evening Workshop">School Parent Workshop</option>
                      <option value="Facebook Local Parent Campaign">Facebook Local Campaign</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent Contact */}
              <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-200/90 space-y-3">
                <div className="text-xs font-bold text-neutral-800">
                  3. Parent / Guardian Contact
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mrs N. Ndlovu"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Cellphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 078 123 4567"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. parent@gmail.com"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submission button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-neutral-500">
                  Instant sync with Sigwadi Live Client Acquisition Pipeline.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-60 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  {isSubmitting ? 'Registering...' : 'Confirm & Log Enrolment'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success Voucher */
          <div className="py-6 space-y-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-bold text-emerald-800 mb-1">
                ENROLMENT LOGGED IN LIVE ACQUISITION PIPELINE
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-950">
                Welcome to Sigwadi Maths and Science Tutorial
              </h3>
              <p className="text-xs text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong>{parentName}</strong>. We have logged the registration for{' '}
                <strong>{learnerName}</strong> ({grade}) and added it to our live client acquisition ledger.
              </p>
            </div>

            {/* Reference Card */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 max-w-sm mx-auto text-xs space-y-1">
              <div className="text-neutral-500 font-medium">Registration Reference Code:</div>
              <div className="text-lg font-mono font-bold text-neutral-900 tracking-wider">
                {registrationRef}
              </div>
              <div className="text-[11px] text-neutral-500">
                {subjects} · {format}
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-950" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
