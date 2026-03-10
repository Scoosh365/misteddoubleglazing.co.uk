export type ServiceSlug =
  | "misted-double-glazing-repairs"
  | "double-glazed-unit-replacement"
  | "locks-handles-hinges"
  | "emergency-boarding";

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortHeading: string;
  description: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "misted-double-glazing-repairs",
    name: "Misted double glazing repairs",
    shortHeading: "Misted & blown double glazing repairs",
    description:
      "Clear, long-lasting repairs for foggy or steamed-up double glazed units without replacing frames.",
    benefits: [
      "Restore a clear view without full window replacement",
      "High-performance replacement sealed units",
      "Tidy, minimal-disruption installations",
    ],
  },
  {
    slug: "double-glazed-unit-replacement",
    name: "Double glazed unit replacement",
    shortHeading: "Failed sealed unit replacement",
    description:
      "We measure, supply and fit new sealed units to match your existing frames and style.",
    benefits: [
      "Like-for-like or upgraded glass options",
      "Improved thermal performance where needed",
      "Frames and surrounding finishes left intact",
    ],
  },
  {
    slug: "locks-handles-hinges",
    name: "Locks, handles & hinges",
    shortHeading: "Window and door hardware repairs",
    description:
      "Repairs and replacements for stiff, failed or insecure locks, handles and hinges on uPVC and aluminium windows.",
    benefits: [
      "Smoother opening, closing and locking",
      "Improved security and safety",
      "Often cheaper than full frame replacement",
    ],
  },
  {
    slug: "emergency-boarding",
    name: "Emergency boarding & make-safe",
    shortHeading: "Emergency boarding and make-safe",
    description:
      "Short-notice boarding-up and make-safe work after damage, break-ins or accidents.",
    benefits: [
      "Fast response in many areas",
      "Secure temporary boarding solutions",
      "Follow-on repair or replacement available",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

