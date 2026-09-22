import React, { useState } from 'react';
import { NavPage, ServiceItem } from '../types';
import { SERVICES } from '../data/servicesData';
import { 
  ArrowRight, 
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
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ServicesViewProps {
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
    default: return <Sparkles className={className} />;
  }
};

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onSelectService }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredServices = SERVICES.filter((s) => 
    s.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.keyCapabilities.some(k => k.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
            <span>Our Services Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Scale Marketing Agency delivers exactly 10 specialized digital capabilities designed to support sustainable customer acquisition, authoritative brand presentation, and reliable performance tracking.
          </p>
        </div>

        {/* Search filter */}
        <div className="w-full md:w-72">
          <label htmlFor="service-search" className="sr-only">Search services</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="service-search"
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search by keyword, skill, or service..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 10 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-200"
          >
            {/* Top Visual Banner */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-900">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-[11px] font-mono font-bold text-sky-400 border border-slate-700">
                Service #{service.number}
              </div>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <div className="w-9 h-9 rounded-lg bg-white text-slate-900 flex items-center justify-center shadow-sm">
                  {renderIcon(service.iconName, 'w-4 h-4 text-slate-900')}
                </div>
                <span className="text-[11px] font-semibold tracking-wide text-slate-300">
                  Scale Agency
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Core Deliverable Snippets */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Key Deliverables
                </div>
                <ul className="space-y-1">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 line-clamp-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Learn More Button */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`learn-more-btn-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-900 text-slate-900 hover:text-white text-xs font-bold transition-all duration-150"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id={`inquire-quick-btn-${service.id}`}
                  onClick={() => onNavigate('contact')}
                  className="text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-slate-600 text-sm">No services match your search keyword.</p>
          <button
            onClick={() => setFilterQuery('')}
            className="mt-3 text-xs font-bold text-slate-900 underline"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Agency Technical Standard Callout */}
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <h3 className="text-xl font-bold">Require a Custom Multi-Service Scope?</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Most businesses combine web development with SEO, paid acquisition, and content strategy for maximum performance. Contact us for a tailored proposal.
          </p>
        </div>
        <button
          id="services-contact-custom-scope-btn"
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors shrink-0"
        >
          Discuss Custom Scope
        </button>
      </div>
    </div>
  );
};
