import React from 'react';
import { NavPage, ServiceItem } from '../types';
import { SERVICES } from '../data/servicesData';
import { TrendingUp, ArrowUpRight, ShieldCheck, Clock, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (service: ServiceItem) => {
    onSelectService(service);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5 text-sky-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Scale Marketing Agency
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Scale Marketing Agency provides digital marketing, web development, data analytics, and creative services engineered to help businesses establish strong online authority, acquire qualified customers, and achieve sustainable digital growth.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Strategic rigor and performance-focused execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Responsive business communication within 1 business day</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors duration-150 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors duration-150 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors duration-150 text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  id="footer-link-jobs"
                  onClick={() => handleNav('jobs')}
                  className="hover:text-white transition-colors duration-150 text-left flex items-center gap-1.5"
                >
                  <span>Jobs at Scale</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-sky-400 font-medium">Hiring</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors duration-150 text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (Left Column) */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Services (1-5)
            </div>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    id={`footer-service-${service.id}`}
                    onClick={() => handleServiceClick(service)}
                    className="text-slate-400 hover:text-white transition-colors duration-150 text-left line-clamp-1"
                    title={service.title}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (Right Column) */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Services (6-10)
            </div>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(5, 10).map((service) => (
                <li key={service.id}>
                  <button
                    id={`footer-service-${service.id}`}
                    onClick={() => handleServiceClick(service)}
                    className="text-slate-400 hover:text-white transition-colors duration-150 text-left line-clamp-1"
                    title={service.title}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Scale Marketing Agency. All rights reserved. Professional digital marketing services.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('services')}
              className="hover:text-slate-200 transition-colors"
            >
              All 10 Services
            </button>
            <button
              onClick={() => handleNav('jobs')}
              className="hover:text-slate-200 transition-colors"
            >
              Work With Us
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-slate-200 transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
