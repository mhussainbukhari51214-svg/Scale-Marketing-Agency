export type NavPage = 'home' | 'about' | 'services' | 'jobs' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  deliverables: string[];
  keyCapabilities: string[];
  businessOutcome: string;
}

export interface JobDiscipline {
  id: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  engagement: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface JobApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  discipline: string;
  portfolioUrl: string;
  experienceYears: string;
  message: string;
}
