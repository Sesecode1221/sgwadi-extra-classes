import React from 'react';
import { Award, GraduationCap, Target, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/curriculumData';

export const DirectorProfile: React.FC = () => {
  return (
    <section id="director" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column (4 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200/90 aspect-square max-w-md mx-auto bg-neutral-100">
              <img
                src="/src/assets/images/director_avuma_sigwadi_1791141355077.jpg"
                alt="Director Mr Avuma Sigwadi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Leadership & Academic Direction
                </div>
                <div className="text-xl font-bold">Mr Avuma Sigwadi</div>
                <div className="text-xs text-neutral-300">Director, Sigwadi Maths & Science Tutorial</div>
              </div>
            </div>

            {/* University Credentials Card */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center gap-2 font-bold text-neutral-900">
                <GraduationCap className="w-4 h-4 text-blue-800" />
                <span>Academic Qualification:</span>
              </div>
              <p className="text-neutral-700 pl-6">
                <strong>Bachelor of Commerce (BCom) Degree in Accounting</strong>
                <br />
                <span className="text-neutral-500">Nelson Mandela University (NMU), South Africa</span>
              </p>
            </div>
          </div>

          {/* Director Story & Vision (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold tracking-wider text-blue-800 uppercase">
              Vision, Mission & Leadership
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950" style={{ textWrap: 'balance' }}>
              “Building Strong Foundations for Academic Excellence”
            </h2>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed font-normal">
              <p>
                Led by <strong>Mr Avuma Sigwadi</strong>, an alumnus of <strong>Nelson Mandela University</strong> with a Bachelor of Commerce in Accounting, Sigwadi Maths and Science Tutorial brings quantitative rigor, systematic analytical thinking, and disciplined problem-solving directly to South African high school classrooms.
              </p>
              <p>
                Too many capable South African learners are locked out of university degrees in engineering, medicine, actuarial science, and commerce simply because foundational concepts in Grades 8 through 11 were never firmly cemented. Our academy’s purpose is to complement formal schooling, demystify mathematics and physical sciences, and instill lasting academic confidence.
              </p>
            </div>

            {/* Vision & Mission Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4 text-blue-700" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  To become a leading and trusted Mathematics and Science tutoring institution that empowers high school learners to achieve academic excellence and access better tertiary and career opportunities.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4 text-blue-700" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  To provide accessible, affordable, and high-quality tutoring that develops learners' academic knowledge, confidence, discipline, and problem-solving abilities.
                </p>
              </div>
            </div>

            {/* Social & Economic Impact (Section 13) */}
            <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs space-y-2">
              <div className="font-bold text-blue-950 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-blue-800" />
                <span>Section 13 · Social & Economic Community Commitment</span>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                We believe in creating tangible social mobility across the Eastern Cape and South Africa. By elevating learners into top NSC achievement bands, we build a direct pipeline of future South African doctors, data scientists, chartered accountants, and engineers, while creating employment opportunities for talented university graduates.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
