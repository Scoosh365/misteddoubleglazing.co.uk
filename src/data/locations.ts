export type LocationSlug =
  | "edinburgh"
  | "glasgow"
  | "manchester"
  | "birmingham"
  | "london"
  | "leeds"
  | "newcastle"
  | "bristol"
  | "stirling"
  | "falkirk"
  | "alloa"
  | "dunfermline"
  | "perth"
  | "aberdeen"
  | "dundee"
  | "liverpool"
  | "kilmarnock"
  | "preston";

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
  {
    slug: "leeds",
    city: "Leeds",
    region: "Yorkshire",
    weatherContext: "Rain, wind and busy ring roads are hard on older seals.",
    intro:
      "From stone terraces to modern city-centre apartments, failed double glazed units are common around Leeds.",
    neighbourhoodsBlurb:
      "We’re often in areas like Headingley and Chapel Allerton replacing misted units and improving draughty windows.",
    faqs: [
      {
        question: "Do you repair upstairs windows in terraced streets?",
        answer:
          "Yes, we regularly work on first- and second-floor windows in Leeds terraces. Let us know about access, parking and floor level when you enquire.",
      },
    ],
    subAreas: ["Headingley", "Chapel Allerton"],
    postcodeAreas: ["LS1", "LS6", "LS7"],
    toneSnippet: "Ideal for terraces, semis and student lets.",
  },
  {
    slug: "newcastle",
    city: "Newcastle upon Tyne",
    region: "North East",
    weatherContext: "North Sea air and driving rain can be tough on seals.",
    intro:
      "Newcastle’s mix of Victorian streets, estates and riverside apartments means misted double glazing can crop up in all kinds of homes.",
    neighbourhoodsBlurb:
      "We regularly help homeowners around Jesmond, Gosforth and nearby postcodes replace failed units and cut down on draughts and condensation.",
    faqs: [
      {
        question: "Can you work on upper-floor flats with limited parking?",
        answer:
          "Yes, we’re used to working in tighter Newcastle streets and apartment blocks. Share as much detail as you can about access, parking and floor level when you request a quote.",
      },
    ],
    subAreas: ["Jesmond", "Gosforth"],
    postcodeAreas: ["NE1", "NE2", "NE3"],
    toneSnippet: "From city flats to family semis across the Tyne.",
  },
  {
    slug: "bristol",
    city: "Bristol",
    region: "South West",
    weatherContext:
      "Harbour air, traffic and mixed weather can all shorten the life of older seals.",
    intro:
      "From coloured terraces in Totterdown to harbourside apartments, failed double glazed units are common around Bristol’s hills and busy roads.",
    neighbourhoodsBlurb:
      "We regularly help homeowners in areas like Clifton and Bishopston clear misted panes, cut down on draughts and improve street-noise insulation.",
    faqs: [
      {
        question: "Do you work on Victorian terraces on steep streets?",
        answer:
          "Yes, we’re used to working on stepped terraces and tighter Bristol streets. Let us know about parking, access and floor level when you request a quote.",
      },
    ],
    subAreas: ["Clifton", "Bishopston"],
    postcodeAreas: ["BS1", "BS3", "BS7", "BS8"],
    toneSnippet: "Perfect for colourful terraces and city apartments.",
  },
  {
    slug: "stirling",
    city: "Stirling",
    region: "Central Scotland",
    weatherContext: "Changeable Central Belt weather can be hard on older timber and seals.",
    intro:
      "Stirling’s mix of older stone homes and newer estates means misted units can appear anywhere from town centre streets to modern cul‑de‑sacs.",
    neighbourhoodsBlurb:
      "We’re often in areas around the city centre and Bridge of Allan replacing failed units while keeping existing frames wherever possible.",
    faqs: [
      {
        question: "Can you match existing styles in older stone properties?",
        answer:
          "In most cases, yes. We’ll measure each opening, discuss your existing glass and quote to replace just the failed units while keeping the look of the property.",
      },
    ],
    subAreas: ["City Centre", "Bridge of Allan"],
    postcodeAreas: ["FK7", "FK8", "FK9"],
    toneSnippet: "Ideal for older stone homes and newer estates around the Ochils.",
  },
  {
    slug: "falkirk",
    city: "Falkirk",
    region: "Central Scotland",
    weatherContext:
      "Wind, rain and exposure between Edinburgh and Glasgow can take their toll on seals.",
    intro:
      "Falkirk’s estates, new-build developments and older streets all see misted and blown units as seals fail over time.",
    neighbourhoodsBlurb:
      "We help households around Camelon, Larbert and surrounding FK postcodes replace failed glass units without unnecessary frame replacement.",
    faqs: [
      {
        question: "Do you cover both older estates and new-build developments?",
        answer:
          "Yes, we regularly work across Falkirk’s older schemes and newer developments, measuring each unit and supplying like‑for‑like replacements where possible.",
      },
    ],
    subAreas: ["Camelon", "Larbert"],
    postcodeAreas: ["FK1", "FK2", "FK5"],
    toneSnippet: "From established estates to newer developments around the Kelpies.",
  },
  {
    slug: "alloa",
    city: "Alloa",
    region: "Clackmannanshire",
    weatherContext:
      "Firth of Forth air and exposed positions can push moisture into older double glazing.",
    intro:
      "In Alloa and the Wee County, older frames and seals often show up as fogged or misted panes rather than clear glass.",
    neighbourhoodsBlurb:
      "We regularly work in Alloa and nearby towns across Clackmannanshire, replacing failed units and improving comfort without pushing full window replacement.",
    faqs: [
      {
        question: "Can you work in smaller flats and bungalows?",
        answer:
          "Yes, we help with everything from small ground‑floor flats to bungalows and family homes. Let us know access and parking details when you enquire.",
      },
    ],
    subAreas: ["Alloa Town", "Clackmannan"],
    postcodeAreas: ["FK10", "FK11"],
    toneSnippet: "Ideal for Wee County flats, bungalows and family homes.",
  },
  {
    slug: "dunfermline",
    city: "Dunfermline",
    region: "Fife",
    weatherContext:
      "Coastal winds and showers across Fife can accelerate wear on older units.",
    intro:
      "Dunfermline’s mix of newer developments and older streets means misted double glazing is a common call‑out across the town.",
    neighbourhoodsBlurb:
      "We frequently visit areas like Duloch and the town centre suburbs, replacing failed glass units and improving draughty windows.",
    faqs: [
      {
        question: "Do you work in newer developments around Duloch?",
        answer:
          "Yes, we regularly replace failed units in modern estates around Duloch and eastern Dunfermline, matching existing specifications wherever possible.",
      },
    ],
    subAreas: ["Duloch", "Town Centre Suburbs"],
    postcodeAreas: ["KY11", "KY12"],
    toneSnippet: "From town centre streets to newer estates across Fife.",
  },
  {
    slug: "perth",
    city: "Perth",
    region: "Perthshire",
    weatherContext:
      "Cooler Perthshire winters and river air can expose weak points in older glazing.",
    intro:
      "From traditional stone homes near the Tay to newer housing on the edge of town, misted and fogged units are a common sight around Perth.",
    neighbourhoodsBlurb:
      "We often help homeowners in the city centre and Scone areas restore clear views and better insulation without replacing whole frames.",
    faqs: [
      {
        question: "Can you work on upper floors in traditional townhouses?",
        answer:
          "Yes, we regularly work in multi‑storey homes and flats around Perth. Share floor level and access details so we can plan the visit safely.",
      },
    ],
    subAreas: ["City Centre", "Scone"],
    postcodeAreas: ["PH1", "PH2"],
    toneSnippet: "Ideal for Perthshire townhouses and newer family homes.",
  },
  {
    slug: "aberdeen",
    city: "Aberdeen",
    region: "North East Scotland",
    weatherContext:
      "North Sea air, wind and driving rain can be especially hard on older seals.",
    intro:
      "From granite tenements to newer estates on the edge of the city, misted and blown units are a common issue around Aberdeen.",
    neighbourhoodsBlurb:
      "We regularly help homeowners in areas like Rosemount and Bridge of Don replace failed glass units while keeping existing frames wherever possible.",
    faqs: [
      {
        question: "Can you work in upper-floor granite tenements?",
        answer:
          "Yes, we frequently work in traditional Aberdeen tenements. Let us know the floor level, stair access and parking so we can plan the visit safely.",
      },
    ],
    subAreas: ["Rosemount", "Bridge of Don"],
    postcodeAreas: ["AB10", "AB11", "AB22"],
    toneSnippet: "Ideal for granite tenements and modern estates along the North Sea coast.",
  },
  {
    slug: "dundee",
    city: "Dundee",
    region: "Tayside",
    weatherContext:
      "River Tay air and coastal winds can push moisture into tired double glazing.",
    intro:
      "Dundee’s mix of older tenements, townhouses and newer developments means failed and fogged units can crop up across the city.",
    neighbourhoodsBlurb:
      "We often visit areas like the West End and Broughty Ferry to replace misted panes, improve insulation and cut down on draughts.",
    faqs: [
      {
        question: "Do you work in both central flats and coastal suburbs?",
        answer:
          "Yes, we cover central Dundee and surrounding suburbs such as Broughty Ferry, bringing replacement units to suit each property.",
      },
    ],
    subAreas: ["West End", "Broughty Ferry"],
    postcodeAreas: ["DD1", "DD2", "DD5"],
    toneSnippet: "From student flats to family homes along the Tay.",
  },
  {
    slug: "liverpool",
    city: "Liverpool",
    region: "Merseyside",
    weatherContext:
      "Coastal winds and city traffic can both highlight weak spots in older double glazing.",
    intro:
      "Across Liverpool’s terraces, semis and apartments, failed seals often show up as permanently fogged or streaked panes.",
    neighbourhoodsBlurb:
      "We regularly help households in areas like Anfield and Allerton replace misted units, improve warmth and reduce outside noise.",
    faqs: [
      {
        question: "Can you repair windows in busy terraced streets?",
        answer:
          "Yes, we’re used to working in tighter Liverpool streets and terraces. Share parking and access details when you enquire so we can plan the visit.",
      },
    ],
    subAreas: ["Anfield", "Allerton"],
    postcodeAreas: ["L1", "L4", "L18"],
    toneSnippet: "Perfect for Merseyside terraces, semis and city apartments.",
  },
  {
    slug: "kilmarnock",
    city: "Kilmarnock",
    region: "Ayrshire",
    weatherContext:
      "Wind, rain and coastal weather across Ayrshire can all put extra pressure on older seals and frames.",
    intro:
      "From traditional sandstone streets to newer housing schemes, misted and blown units are a common sight around Kilmarnock.",
    neighbourhoodsBlurb:
      "We regularly help homeowners in areas like Bonnyton and New Farm Loch replace failed glass units, improve comfort and cut down on draughts.",
    faqs: [
      {
        question: "Do you cover both older tenements and newer estates in Kilmarnock?",
        answer:
          "Yes, we work across central Kilmarnock and surrounding estates, measuring each unit and supplying replacements to suit your existing frames.",
      },
    ],
    subAreas: ["Bonnyton", "New Farm Loch"],
    postcodeAreas: ["KA1", "KA3"],
    toneSnippet: "Ideal for Kilmarnock tenements, terraces and newer family homes.",
  },
  {
    slug: "preston",
    city: "Preston",
    region: "Lancashire",
    weatherContext:
      "North West rain and temperature swings can highlight weak seals and tired glazing over time.",
    intro:
      "Across Preston’s terraces, semis and newer developments, failed sealed units often show up as permanently fogged or misted panes.",
    neighbourhoodsBlurb:
      "We regularly help homeowners in areas like Fulwood and Ashton-on-Ribble replace failed glass units, reduce draughts and improve comfort without replacing whole frames.",
    faqs: [
      {
        question: "Do you cover suburbs and nearby villages around Preston?",
        answer:
          "Yes. We cover Preston and surrounding PR postcodes. Share your postcode and any access notes in your enquiry so we can match you to a nearby technician.",
      },
    ],
    subAreas: ["Fulwood", "Ashton-on-Ribble"],
    postcodeAreas: ["PR1", "PR2"],
    toneSnippet:
      "Ideal for Preston terraces, semis and modern developments across Lancashire.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

