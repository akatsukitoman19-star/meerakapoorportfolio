export interface ArtistProfile {
  name: string;
  tagline: string;
  experienceYears: string;
  location: string;
  travelAvailability: string;
  whatsappNumber: string; // e.g. "+919876543210" or "919876543210"
  displayPhone: string;
  instagramHandle: string;
  instagramUrl: string;
  email: string;
  bioIntro: string;
  philosophy: string;
}

export type LookCategory = 'all' | 'traditional' | 'modern' | 'engagement' | 'reception';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'traditional' | 'modern' | 'engagement' | 'reception';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  palette: string;
  technique: string;
  occasion: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  idealFor: string;
  inclusions: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  eventDate: string;
  eventType: string;
  location: string;
  timeSlot: string;
  guestCount: string;
  additionalNotes: string;
}
