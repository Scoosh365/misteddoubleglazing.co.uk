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
  intro: string;
  neighbourhoodsBlurb: string;
  faqs: { question: string; answer: string }[];
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
    intro:
      "From sandstone tenements in Leith to townhouses around the Meadows, failed double glazed units are common in Edinburgh’s changeable, coastal climate.",
    neighbourhoodsBlurb:
      "We regularly work in New Town, Leith, Portobello and the surrounding EH postcodes, replacing misted units while keeping original frames and character details wherever possible.",
    faqs: [
      {
        question: "Do you repair misted double glazing in top-floor tenements?",
        answer:
          "Yes. We regularly work in Edinburgh tenements and can usually access top-floor windows from inside the property. Let us know the floor level and stair access when you request a quote.",
      },
      {
        question: "Can you work in conservation areas like New Town?",
        answer:
          "We can normally replace failed double glazed units on a like-for-like basis within existing frames, which is often acceptable in conservation areas. If you have specific restrictions, mention them in your enquiry.",
      },
    ],
    subAreas: ["Leith", "Portobello"],
    postcodeAreas: ["EH1", "EH2", "EH6", "EH7"],
    toneSnippet: "From New Town tenements to modern flats in Leith.",
  },
  {
    slug: "glasgow",
    city: "Glasgow",
    region: "West Coast",
    weatherContext: "Keep the rain on the outside, not between the panes.",
    intro:
      "In Glasgow’s wet, maritime climate, older seals can fail and let moisture creep between the panes, leaving bay windows and tenement flats permanently fogged.",
    neighbourhoodsBlurb:
      "We help homeowners and landlords across the West End, Southside and city centre postcodes keep their double glazing clear and efficient without unnecessary full-frame replacement.",
    faqs: [
      {
        question: "Can you fix misted bays in Glasgow tenements?",
        answer:
          "Yes, we frequently replace failed units in large bay windows in traditional Glasgow flats. We’ll measure each pane and supply sealed units to suit.",
      },
    ],
    subAreas: ["West End", "Southside"],
    postcodeAreas: ["G1", "G2", "G3", "G41", "G42"],
    toneSnippet: "Tenements, townhouses and everything in between.",
  },
  {
    slug: "manchester",
    city: "Manchester",
    region: "North West",
    weatherContext: "Grey skies outside, clear glass inside.",
    intro:
      "Manchester’s mix of terraces, apartments and new-build homes means misted double glazing can show up anywhere from city-centre flats to suburban semis.",
    neighbourhoodsBlurb:
      "We’re often in areas like Chorlton and Didsbury replacing failed units, improving insulation and cutting down on condensation around window reveals.",
    faqs: [
      {
        question: "Do you repair windows in rented properties?",
        answer:
          "Yes. We work with both homeowners and landlords across Manchester. If you’re a tenant, we can still offer guidance and arrange to speak with your landlord if needed.",
      },
    ],
    subAreas: ["Chorlton", "Didsbury"],
    postcodeAreas: ["M1", "M14", "M20", "M21"],
    toneSnippet: "Perfect for terraces and modern apartments.",
  },
  {
    slug: "birmingham",
    city: "Birmingham",
    region: "West Midlands",
    weatherContext: "Cut traffic noise and draughts with healthy double glazing.",
    intro:
      "From busy city streets to quieter suburbs, clear and well-sealed double glazing makes a big difference to noise and comfort in Birmingham homes.",
    neighbourhoodsBlurb:
      "We regularly visit areas like Harborne and Selly Oak to replace misted units, improve draughty windows and keep homes warmer through the winter.",
    faqs: [
      {
        question: "Can you match existing glass patterns and tints?",
        answer:
          "In most cases, yes. Let us know if you have patterned, frosted or tinted glass and we’ll quote to match it as closely as possible when replacing failed units.",
      },
    ],
    subAreas: ["Harborne", "Selly Oak"],
    postcodeAreas: ["B1", "B17", "B29"],
    toneSnippet: "From Victorian semis to new-build estates.",
  },
  {
    slug: "london",
    city: "London",
    region: "Greater London",
    weatherContext: "Keep the city outside where it belongs.",
    intro:
      "London’s traffic, pollution and variable weather are hard on double glazing. When seals fail, windows can fog permanently and lose valuable insulation.",
    neighbourhoodsBlurb:
      "We help keep everything from Victorian terraces in Islington to modern apartments in Canary Wharf clear and efficient, replacing just the failed glass units instead of full frames.",
    faqs: [
      {
        question: "Do you work in flats with limited parking or access?",
        answer:
          "Yes. We’re used to working in central London locations with restricted access and parking. Share as much detail as you can in your enquiry so we can plan the visit.",
      },
    ],
    subAreas: ["Islington", "Croydon"],
    postcodeAreas: ["N1", "SE1", "SW16", "E14"],
    toneSnippet: "Sash, casement and everything in between.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

