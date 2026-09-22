import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { SERVICES } from '../data/servicesData';
import { CheckCircle2, Send, Mail, Phone, User, MessageSquare, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContactViewProps {
  initialService?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: initialService || 'Search Engine Optimization (SEO)',
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate realistic asynchronous submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Search Engine Optimization (SEO)',
      message: ''
    });
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
          <span>Project Inquiries & Consultation</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Discuss Your Digital Requirements
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          Contact Scale Marketing Agency to explore your digital marketing, web engineering, analytics, or creative objectives with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          {submitted ? (
            <div className="py-12 px-4 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Inquiry Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your project briefing regarding <strong className="text-slate-900">{formData.service}</strong> has been logged. Our strategy team will evaluate your scope and reply to <span className="text-slate-900 font-medium">{formData.email}</span> within 1 business day.
                </p>
              </div>
              <div className="pt-4">
                <button
                  id="contact-send-another-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Submit Your Project Brief
              </h2>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="contact-full-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Harrison"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Service Interested In */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Service Interested In *
                </label>
                <select
                  id="contact-service-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden transition-colors"
                >
                  <option value="General Digital Consultation">General Digital Consultation (Multi-Service)</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.number}. {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Message & Objectives *
                </label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide a brief summary of your business goals, target timelines, current marketing challenges, or technical specifications."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-hidden transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-sm font-semibold transition-all shadow-sm disabled:opacity-60"
                >
                  {submitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 text-sky-400" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Agency Communication Standards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5">
            <h2 className="text-lg font-bold text-slate-900">
              What to Expect
            </h2>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-semibold">1 Business Day Response</strong>
                  <span>Every inquiry is reviewed by an agency strategist who will follow up with initial observations and schedule a structured conversation.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Confidentiality Assured</strong>
                  <span>Your commercial objectives, domain assets, and marketing parameters are kept strictly confidential.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Scoped Proposal</strong>
                  <span>Following discovery, we provide a clear, itemized proposal outlining deliverables, timelines, and measurable success criteria.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
            <h3 className="text-base font-bold text-white">
              Scale Marketing Agency
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Providing digital marketing, web engineering, analytics, and creative services designed to build sustainable digital growth.
            </p>
            <div className="pt-2 text-xs font-mono text-sky-400">
              inquiries@scalemarketing.agency
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
