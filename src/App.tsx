import React, { useState, useEffect } from 'react';
import { NavPage, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { JobApplicationModal } from './components/JobApplicationModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { JobsView } from './views/JobsView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [jobModalOpen, setJobModalOpen] = useState<boolean>(false);
  const [jobDiscipline, setJobDiscipline] = useState<string>('Marketing');
  const [contactPreselectService, setContactPreselectService] = useState<string>('');

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about' || hash === 'services' || hash === 'jobs' || hash === 'contact') {
        setCurrentPage(hash as NavPage);
      } else {
        setCurrentPage('home');
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  const handleInquireFromService = (serviceTitle: string) => {
    setContactPreselectService(serviceTitle);
    handleNavigate('contact');
  };

  const handleOpenApply = (discipline: string = 'Marketing') => {
    setJobDiscipline(discipline);
    setJobModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 font-sans">
      {/* Sticky Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Canvas */}
      <main className="flex-1 pt-20">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'jobs' && (
          <JobsView
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView initialService={contactPreselectService} />
        )}
      </main>

      {/* Service "Learn More" Scope Modal */}
      <ServiceModal
        service={selectedService}
        onClose={handleCloseServiceModal}
        onInquire={handleInquireFromService}
      />

      {/* Jobs at Scale "Apply to Work With Us" Modal */}
      <JobApplicationModal
        isOpen={jobModalOpen}
        onClose={() => setJobModalOpen(false)}
        defaultDiscipline={jobDiscipline}
      />

      {/* Corporate Agency Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={handleSelectService}
      />
    </div>
  );
}
