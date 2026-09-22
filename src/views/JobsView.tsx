import React, { useState } from 'react';
import { NavPage } from '../types';
import { JOB_AREAS, WORK_PILLARS } from '../data/jobsData';
import { 
  ArrowRight, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Code, 
  BarChart2, 
  PenTool, 
  Video, 
  Search, 
  Palette, 
  FileText 
} from 'lucide-react';

interface JobsViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenApply: (discipline?: string) => void;
}

export const JobsView: React.FC<JobsViewProps> = ({ onNavigate, onOpenApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Marketing',
    'SEO',
    'Web Development',
    'Graphic Design',
    'Video Editing',
    'Content & Copywriting',
    'Data Analytics',
    'Other Digital Skills'
  ];

  const filteredJobs = selectedCategory === 'All' 
    ? JOB_AREAS 
    : JOB_AREAS.filter(j => j.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
          <Briefcase className="w-3.5 h-3.5 text-sky-600" />
          <span>Careers & Collaboration</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Jobs at Scale
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          Scale Marketing Agency is looking for talented people who want to work with the agency and contribute their skills to digital projects.
        </p>

        <div className="pt-2">
          <button
            id="jobs-hero-apply-btn"
            onClick={() => onOpenApply()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-sm font-semibold transition-all shadow-sm"
          >
            <span>Apply to Work With Us</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </div>

      {/* Why Work With Scale */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Professional Standards
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            How We Work With Talent
          </h2>
          <p className="text-sm text-slate-600">
            We value craftsmanship, dependable communication, and domain depth across every project deliverable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PILLARS.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2.5">
              <div className="text-xs font-mono font-bold text-sky-600">0{idx + 1}</div>
              <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Opportunities Section */}
      <div className="space-y-8 pt-6 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Department Openings
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Current Opportunities
            </h2>
            <p className="text-sm text-slate-600">
              Explore key discipline areas where Scale Marketing Agency actively welcomes skilled professionals.
            </p>
          </div>

          <button
            id="jobs-header-apply-cta"
            onClick={() => onOpenApply()}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-900 text-xs font-bold transition-colors"
          >
            General Application
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Opportunities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              id={`job-item-${job.id}`}
              className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
                    {job.category}
                  </span>
                  <span className="text-xs font-medium text-slate-600">
                    {job.engagement}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {job.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Core Competencies & Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600">Scale Project Team</span>
                <button
                  id={`apply-btn-${job.id}`}
                  onClick={() => onOpenApply(job.category)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  <span>Apply to Work With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Application Banner */}
      <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white text-center space-y-5">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to Contribute Your Skills?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Submit your background, portfolio, and areas of expertise to be considered for upcoming digital marketing and technology projects.
          </p>
        </div>

        <div>
          <button
            id="jobs-bottom-apply-btn"
            onClick={() => onOpenApply()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors"
          >
            <span>Apply to Work With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
