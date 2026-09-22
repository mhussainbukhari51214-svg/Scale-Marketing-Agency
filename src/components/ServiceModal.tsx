import React from 'react';
import { ServiceItem } from '../types';
import { 
  X, 
  CheckCircle2, 
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
  Sparkles
} from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
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

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image & overlay */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover opacity-40 filter saturate-120"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          
          <button
            id="close-service-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors border border-slate-700 focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold">
                <span>Service Category #{service.number}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {service.title}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-lg">
              {renderIcon(service.iconName, 'w-6 h-6 text-slate-900')}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-14rem)] overflow-y-auto">
          {/* Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Overview & Methodology
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Core Deliverables & Scope
            </h4>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Tags */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Technical & Creative Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.keyCapabilities.map((cap, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-700"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Business Impact Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
            <div className="font-semibold text-slate-900 mb-1">
              Commercial Objective
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {service.businessOutcome}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-white transition-colors"
          >
            Close Details
          </button>
          <button
            id={`inquire-service-btn-${service.id}`}
            onClick={() => {
              onInquire(service.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-sm font-semibold transition-all shadow-sm"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
