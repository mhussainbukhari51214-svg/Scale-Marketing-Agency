import React from 'react';
import { NavPage, ServiceItem } from '../types';
import { SERVICES } from '../data/servicesData';
import { 
  ArrowRight, 
  ArrowUpRight, 
  TrendingUp, 
  Check, 
  Layers, 
  Cpu, 
  BarChart2, 
  Users, 
  Search, 
  Share2, 
  Code2, 
  BarChart3, 
  Target, 
  Film, 
  Languages, 
  PenTool, 
  Palette, 
  Mail,
  ShieldCheck
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
  onSelectService: (service: ServiceItem) => void;
}

const renderIcon = (iconName: string, className: string = 'w-5 h-5') => {
  switch (iconName) {
    case 'Search': return <Search className={className} />;
    case 'Share2': return <Share2 className={className} />;
    case 'Code2': return <Code2 className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Target': return <Target className={className} />;
    case 'Film': return <Film className={className} />;
    case 'Languages': return <Languages className={className} />;
    case 'PenTool': return <PenTool className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Mail': return <Mail className={className} />;
    default: return <TrendingUp className={className} />;
  }
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectService }) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Messaging & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>Integrated Digital Marketing Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Driving Sustainable Digital Growth and Measurable Online Performance
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Scale Marketing Agency provides digital marketing, modern web development, data analytics, and high-impact creative services designed to help businesses improve their online presence, reach targeted audiences, and scale their commercial operations with confidence.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-sm font-semibold transition-all duration-150 shadow-sm"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 text-sm font-semibold transition-all duration-150 shadow-2xs"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Core Execution Badges (No fake stats, genuine professional commitments) */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Transparent Attribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Modern Tech Architecture</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Layers className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>10 Core Disciplines</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Quality Professional Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-xl aspect-4/3 sm:aspect-5/4 lg:aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Scale Marketing Agency - Digital Analytics & Business Strategy"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Visual Caption Box */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Scale Strategic Operations</span>
                    <span className="text-sky-400 font-mono text-[11px]">Online Performance</span>
                  </div>
                  <p className="text-slate-300 leading-snug text-[11px]">
                    Structured execution across search, paid advertising, web infrastructure, and continuous data validation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Agency Working Principles (Direct, business-focused approach) */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Agency Approach
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A Disciplined Framework for Digital Execution
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We align technical capabilities directly with commercial outcomes, ensuring every channel, asset, and campaign operates with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Target className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                1. Strategic Clarity
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prioritizing clear market definition, customer intent, and value propositions before deploying capital across marketing channels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Code2 className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                2. Technical Precision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Constructing fast, accessible websites, clean tracking pixels, structured schema data, and reliable digital systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Layers className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                3. Multichannel Synergy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Harmonizing organic search, targeted advertising, video creative, and email workflows into one unified conversion engine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                4. Verifiable Analytics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tracking exact user behavior, cost metrics, and attribution models to refine campaigns using verified performance facts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Overview (Preview of the 10 Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Our Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Complete Digital Marketing Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We offer 10 dedicated service categories designed to address every stage of modern digital acquisition, engagement, and retention.
            </p>
          </div>

          <button
            id="home-view-all-services-btn"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors self-start md:self-auto"
          >
            <span>View All 10 Services</span>
            <ArrowRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* 6 Featured Cards with Learn More */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                    {renderIcon(service.iconName, 'w-5 h-5')}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {service.number}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`home-learn-more-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-slate-900 hover:text-sky-700 flex items-center gap-1 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-600 font-medium">
                  {service.keyCapabilities[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold">Looking for all 10 specialized categories?</h4>
            <p className="text-sm text-slate-300">
              Includes SEO, SMMA, Web Development, Analytics, PPC, Video Editing, Translation, Copywriting, Design, and Email.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-colors"
          >
            Explore Services Directory
          </button>
        </div>
      </section>

      {/* 4. About Us Preview Section */}
      <section className="bg-slate-50/50 border-t border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Scale Marketing Agency Team Strategy"
                className="w-full h-80 lg:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                About Scale Marketing Agency
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Built to Deliver Tangible Digital Competence
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Scale Marketing Agency provides digital marketing and technology services designed to help businesses improve their online presence, reach their target audiences, and build sustainable digital growth.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                We believe in straightforward commercial honesty. Rather than selling vague promises or vanity metrics, our agency focuses on the technical fundamentals: discoverability through search engines, conversion architecture on websites, disciplined ad spend efficiency, and compelling creative messaging.
              </p>

              <div className="pt-2">
                <button
                  id="home-about-link-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>Read More About Our Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Jobs at Scale Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>Career Opportunities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Jobs at Scale
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Scale Marketing Agency is looking for talented people who want to work with the agency and contribute their skills to digital projects. We collaborate across marketing, SEO, web development, graphic design, video editing, copywriting, and data analytics.
            </p>

            <div className="pt-2">
              <button
                id="home-jobs-apply-cta"
                onClick={() => onNavigate('jobs')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors"
              >
                <span>View Opportunities & Apply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing Contact Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Ready to Discuss Your Digital Requirements?
        </h2>
        <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Whether you need a full-scale digital audit, custom web development, or targeted campaign management, our team is ready to review your objectives.
        </p>
        <div>
          <button
            id="home-bottom-contact-cta"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm"
          >
            <span>Contact Scale Marketing Agency</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </section>
    </div>
  );
};
