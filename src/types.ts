export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  project?: string;
  unitType?: string;
  submittedAt: string;
  source: "brochure_form" | "modal_enquiry" | "site_visit_form" | "project_selector" | "popup_visit_form";
  preferredDate?: string;
  preferredTime?: string;
  status: "Pending" | "Contacted" | "Scheduled" | "Completed";
  notes?: string;
}

export interface ProjectSpec {
  category: string;
  items: { feature: string; spec: string }[];
}

export interface GreenFeature {
  title: string;
  stat?: string;
  desc: string;
  icon: string;
}

export interface FloorPlanUnit {
  id: string;
  projectId: "aquavista" | "lakewoods";
  projectName: string;
  title: string;
  type: string;
  carpetAreaSqFt: string;
  carpetAreaSqM: string;
  balconyOrDeckSqFt: string;
  utilitySqFt: string;
  totalAreaDisplay: string;
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  keyHighlights: string[];
}

export interface AmenityCategory {
  id: string;
  categoryName: string;
  subtitle: string;
  items: {
    title: string;
    desc: string;
    icon: string;
    tag?: string;
  }[];
}

export interface CommuteDestination {
  id: string;
  name: string;
  category: "transit" | "work" | "education" | "airport";
  distance: string;
  timeEst: string;
  icon: string;
  detail?: string;
}
