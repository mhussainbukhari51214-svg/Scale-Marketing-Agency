import React from 'react';
import { NavPage } from '../types';
import { ArrowRight, CheckCircle2, Shield, Target, Award, Lightbulb, Users2, Workflow } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
          <span>About Us</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          About Scale Marketing Agency
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Scale Marketing Agency provides digital marketing and technology services designed to help businesses improve their online presence, reach their target audiences, and build sustainable digital growth.
        </p>
      </div>

      {/* Main Narrative with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-base">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Purpose & Core Philosophy
          </h2>
          <p>
            In an increasingly crowded digital landscape, businesses face growing complexity when attempting to acquire customers and demonstrate credible market authority. Traditional agency models often fragment strategy across disconnected tactics—separating website engineering from paid acquisition, or creative storytelling from measurable analytics.
          </p>
          <p>
            Scale Marketing Agency was established to solve this fragmentation. We deliver an integrated suite of 10 specialized digital marketing and technology disciplines, operating under a unified standard of technical rigor and commercial honesty.
          </p>
          <p>
            Our focus is not on fleeting viral gimmicks or superficial vanity metrics. Instead, we architect sound digital ecosystems: fast, accessible websites; technically sound search visibility; disciplined paid campaign management; articulate copywriting; and precise analytics infrastructure that tracks real business performance.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
              alt="Scale Marketing Agency Strategy & Operations"
              className="w-full h-80 sm:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Four Core Values */}
      <div className="space-y-8 pt-8 border-t border-slate-200">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            How We Deliver Business Value
          </h2>
          <p className="text-sm text-slate-600">
            Our operating commitments ensure high standards, clear communication, and reliable deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-sky-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Commercial Integrity</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide direct, objective counsel on what channels, technologies, and marketing budgets make genuine commercial sense for your business.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-sky-400 flex items-center justify-center">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Technical Rigor</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              From clean code standards and semantic SEO markup to server-side event tracking, our technical output adheres to modern industry benchmarks.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-sky-400 flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Multidisciplinary Talent</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our projects assemble dedicated specialists in web development, copy, video editing, analytics, and advertising to ensure top-tier execution.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-sky-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Accountable Measurement</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              All campaign performance is measured through accurate reporting, unified dashboards, and honest evaluation of return on investment.
            </p>
          </div>
        </div>
      </div>

      {/* Engagement Process */}
      <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Project Lifecycle
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Client Collaboration Framework
          </h2>
          <p className="text-sm text-slate-600">
            Every engagement follows a structured, milestone-based methodology to ensure alignment from discovery through deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-sky-600">Phase 01</div>
            <h3 className="text-base font-bold text-slate-900">Discovery & Technical Audit</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We analyze current digital assets, search indexing, competitor landscapes, and existing analytics setups.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-sky-600">Phase 02</div>
            <h3 className="text-base font-bold text-slate-900">Strategic Roadmap</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We define key deliverables, timeline schedules, asset specifications, and performance milestones for each channel.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-sky-600">Phase 03</div>
            <h3 className="text-base font-bold text-slate-900">Execution & Deployment</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our specialists build code, produce creative assets, configure campaign targeting, and establish baseline tracking.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-sky-600">Phase 04</div>
            <h3 className="text-base font-bold text-slate-900">Analysis & Optimization</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We review actual traffic and conversion figures, conduct iterative improvements, and communicate clear monthly findings.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-xl bg-slate-900 text-white">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">Have a Project or Strategic Objective?</h3>
          <p className="text-sm text-slate-300">
            Discuss your digital marketing, web engineering, or analytics requirements with our agency team.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('services')}
            className="px-4 py-2.5 rounded-lg border border-slate-700 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Review Services
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-bold transition-colors flex items-center gap-1.5"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
