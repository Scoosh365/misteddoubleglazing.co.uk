export type LocationSlug =
  | "edinburgh"
  | "glasgow"
  | "manchester"
  | "birmingham"
  | "london";

export interface Location {
  slug: LocationSlug;
  city: string;
  region: string;
  weatherContext: string;
  subAreas: string[];
  postcodeAreas: string[];
  toneSnippet: string;
}

export const locations: Location[] = [
  {
    slug: "edinburgh",
    city: "Edinburgh",
    region: "East Coast",
    weatherContext: "Don’t let the East Coast haar ruin your view.",
    subAreas: ["Leith", "Portobello"],
    postcodeAreas: ["EH1", "EH2", "EH6", "EH7"],
    toneSnippet: "From New Town tenements to modern flats in Leith.",
  },
  {
    slug: "glasgow",
    city: "Glasgow",
    region: "West Coast",
    weatherContext: "Keep the rain on the outside, not between the panes.",
    subAreas: ["West End", "Southside"],
    postcodeAreas: ["G1", "G2", "G3", "G41", "G42"],
    toneSnippet: "Tenements, townhouses and everything in between.",
  },
  {
    slug: "manchester",
    city: "Manchester",
    region: "North West",
    weatherContext: "Grey skies outside, clear glass inside.",
    subAreas: ["Chorlton", "Didsbury"],
    postcodeAreas: ["M1", "M14", "M20", "M21"],
    toneSnippet: "Perfect for terraces and modern apartments.",
  },
  {
    slug: "birmingham",
    city: "Birmingham",
    region: "West Midlands",
    weatherContext: "Cut traffic noise and draughts with healthy double glazing.",
    subAreas: ["Harborne", "Selly Oak"],
    postcodeAreas: ["B1", "B17", "B29"],
    toneSnippet: "From Victorian semis to new-build estates.",
  },
  {
    slug: "london",
    city: "London",
    region: "Greater London",
    weatherContext: "Keep the city outside where it belongs.",
    subAreas: ["Islington", "Croydon"],
    postcodeAreas: ["N1", "SE1", "SW16", "E14"],
    toneSnippet: "Sash, casement and everything in between.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

