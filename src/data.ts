import { FloorPlanUnit, CommuteDestination, AmenityCategory, ProjectSpec, GreenFeature } from "./types";

export interface ProjectData {
  id: "aquavista" | "lakewoods";
  name: string;
  codename?: string;
  tagline: string;
  subtagline: string;
  description: string;
  badge: string;
  reraNumber: string;
  reraProjectName: string;
  reraValidUntil: string;
  heroImage: string;
  typologies: string[];
  startingPrice: string;
  carpetAreaRange: string;
  greenRating: string;
  keyFeature: string;
  featuresList: string[];
  stats: { label: string; value: string }[];
}

export const projectsData: Record<"aquavista" | "lakewoods", ProjectData> = {
  aquavista: {
    id: "aquavista",
    name: "Codename AquaVista",
    codename: "AquaVista",
    tagline: "A life replete with space, greenery, and peace at abodes that are deservingly distinct",
    subtagline: "The Quintessence of Panache and Tranquillity",
    description: "Located within the 1,500 acre Mahindra World City, Codename AquaVista offers large sized premium homes overlooking serene Kolavai Lake and rolling hills. Enjoy an exclusive low density community with a 16,000 sq.ft clubhouse and a 2 acre central park.",
    badge: "Lakefront Luxury Living",
    reraNumber: "TN/01/Building/0174/2022",
    reraProjectName: "Aqualily phase 2C2",
    reraValidUntil: "31.12.2024",
    heroImage: "/aquavista-hero.jpg",
    typologies: ["3 BHK", "3.5 BHK", "4 BHK Duplex"],
    startingPrice: "₹ 79 Lakhs*",
    carpetAreaRange: "1,053.5 to 1,610.2 Sq.Ft. Carpet",
    greenRating: "IGBC Pre certified Gold",
    keyFeature: "16,000 Sq.Ft. Clubhouse & 2 Acre Central Park Overlooking Kolavai Lake",
    featuresList: [
      "Multi storeyed towers (C7 & C8) with 3, 3.5 BHK & 4 BHK Duplex apartments",
      "Overlooking serene Kolavai Lake & surrounding hillscapes",
      "Stunning 16,000 sq. ft clubhouse with pool, gym, aerobics & indoor games",
      "2 acre central park with shaded walkways, seating areas & amphitheatre",
      "French windows at balconies for maximum daylight and cross ventilation",
      "Private terraces for duplex residences with granite finish & SS railings",
      "Exclusive bay windows in living room & dedicated study room in 3.5 BHK",
      "Pre certified IGBC Gold rated Green homes with 20% power savings"
    ],
    stats: [
      { label: "Clubhouse", value: "16,000 Sq.Ft." },
      { label: "Central Park", value: "2.0 Acres" },
      { label: "Configuration", value: "3, 3.5 & 4 BHK Duplex" },
      { label: "Green Rating", value: "IGBC Gold" }
    ]
  },
  lakewoods: {
    id: "lakewoods",
    name: "Mahindra Lakewoods",
    tagline: "An abode where you can Rediscover Yourself",
    subtagline: "Rediscover The Pride of a Beautiful Home",
    description: "Nestled in the pristine greens of Mahindra World City, Mahindra Lakewoods offers thoughtfully crafted 2 & 3 BHK residences designed with NO common walls for absolute privacy, surrounded by a massive 3.8 acre central vehicle free podium.",
    badge: "Podium Living & Zero Common Walls",
    reraNumber: "TN/01/Building/0041/2022",
    reraProjectName: "Lakewoods Towers D & E",
    reraValidUntil: "31.05.2025",
    heroImage: "/lakewoods-hero.jpg",
    typologies: ["Spacious 2 BHK", "Luxury 3 BHK"],
    startingPrice: "₹ 55 Lakhs*",
    carpetAreaRange: "751.2 to 1,013.9 Sq.Ft. Carpet",
    greenRating: "IGBC Pre certified Platinum",
    keyFeature: "3.8 Acre Central Vehicle Free Podium & Zero Common Walls for Utmost Privacy",
    featuresList: [
      "Multi storeyed towers (Towers A to E) with spacious 2 & 3 BHK residences",
      "Maximum privacy: Homes designed with NO common walls",
      "3.8 acre central vehicle free podium with abundant green spaces",
      "Private decks with wooden tile finish offering views of lake, hill & podium",
      "Swimming pool, kids pool, elevated lounge, gym & open badminton court",
      "6ft wide corridor leading to spacious living & dining with hand wash nook",
      "High performance heat reducing glass, UPVC windows & 100% SRI roof paint",
      "Pre certified IGBC Platinum rated Green homes with solar PV common lighting"
    ],
    stats: [
      { label: "Green Podium", value: "3.8 Acres" },
      { label: "Privacy Level", value: "0 Common Walls" },
      { label: "Configuration", value: "2 & 3 BHK" },
      { label: "Green Rating", value: "IGBC Platinum" }
    ]
  }
};

export const mwcTownshipHighlights = {
  name: "Mahindra World City, Chennai",
  subheading: "India's 1st Integrated Green Township & Zero Waste City",
  totalAcres: "1,500 Acres",
  greeneryAcres: "150 Acres Greenery",
  forestLakes: "1,000 Acres Reserve Forest & 7 Lakes",
  workingPop: "1,00,000+ Professionals",
  companies: "65+ Global Corporates",
  families: "2,500+ Resident Families",
  cityRank: "4th Best City to Live in India (JLL Report)",
  certifications: [
    "India's 1st Integrated Green Township",
    "1st City to receive 'Zero Waste to Landfill' certification",
    "India's 1st Food Waste Free City",
    "India's 1st IGBC Gold Certified Green Township"
  ],
  corporateHubs: [
    { name: "Infosys", sector: "Information Technology", campus: "Flagship SEZ Campus" },
    { name: "BMW", sector: "Automotive", campus: "Assembly & Engineering" },
    { name: "Renault Nissan", sector: "Automotive & R&D", campus: "Technology Centre" },
    { name: "Timken", sector: "Precision Engineering", campus: "Global Tech Hub" },
    { name: "Saint-Gobain", sector: "Advanced Materials", campus: "Industrial Park" },
    { name: "Parker Hannifin", sector: "Motion & Control", campus: "Manufacturing" },
    { name: "Fujitec", sector: "Elevators & Systems", campus: "Global Manufacturing" },
    { name: "B. Braun", sector: "Healthcare & Pharma", campus: "Medical Solutions" }
  ],
  socialInfra: [
    {
      title: "Mahindra World School",
      desc: "Co educational CBSE school with state of the art academic & sports facilities right within the township.",
      icon: "school",
      image: "/ground3.jpg"
    },
    {
      title: "The Canopy Commercial Centre",
      desc: "Multi level shopping destination with Pizza Hut, Amul Ice Cream, superstores, banks, ATMs, and casual dining.",
      icon: "shopping_bag",
      image: "/ground4.jpg"
    },
    {
      title: "Fairfield by Marriott",
      desc: "Four star international hospitality and business hotel for guests, dining, and corporate conferences.",
      icon: "hotel",
      image: "/building2.jpg"
    },
    {
      title: "MWC Club & Recreation",
      desc: "Private lifestyle club with tennis, squash, swimming, gymnasium, spa/salon, sports bar & restaurant.",
      icon: "sports_tennis",
      image: "/partyhall.jpg"
    },
    {
      title: "Healthcare & Care Centers",
      desc: "On campus multi speciality medical clinic, pharmacy, and Amelio Child Care & Daycare centre.",
      icon: "local_hospital",
      image: "/ground.jpg"
    },
    {
      title: "Eco Mobility & Bio Buses",
      desc: "Township internal commute powered by clean Bio CNG fueled shuttle buses and electric mobility.",
      icon: "directions_bus",
      image: "/ground2.jpg"
    }
  ]
};

export const floorPlansData: FloorPlanUnit[] = [
  // AquaVista Plans
  {
    id: "av-3bhk",
    projectId: "aquavista",
    projectName: "Codename AquaVista",
    title: "AquaVista Tower C7/C8: 3 BHK",
    type: "3 BHK Luxury",
    carpetAreaSqFt: "1,053.5",
    carpetAreaSqM: "97.88",
    balconyOrDeckSqFt: "108.3",
    utilitySqFt: "32.51",
    totalAreaDisplay: "1,053.5 Sq.Ft. Carpet (+ 140.8 Sq.Ft. Balcony & Utility)",
    imageUrl: "/unit-402.png",
    bedrooms: 3,
    bathrooms: 3,
    features: [
      "Master Bedroom with en-suite toilet & French balcony access",
      "Full height French windows in living & dining room",
      "Separate utility area attached to kitchen",
      "Vitrified tile flooring in all living spaces",
      "Roca sanitaryware & Grohe bath fittings"
    ],
    keyHighlights: [
      "RERA Carpet Area: 97.88 Sq.M (1053.5 Sq.Ft)",
      "Balcony Area: 10.07 Sq.M (108.3 Sq.Ft)",
      "Utility Area: 3.02 Sq.M (32.51 Sq.Ft)",
      "Lake/Green Vista Balcony"
    ]
  },
  {
    id: "av-3.5bhk",
    projectId: "aquavista",
    projectName: "Codename AquaVista",
    title: "AquaVista Tower C7/C8: 3.5 BHK + Study",
    type: "3.5 BHK + Study",
    carpetAreaSqFt: "1,346.5",
    carpetAreaSqM: "125.1",
    balconyOrDeckSqFt: "100.4",
    utilitySqFt: "30.7",
    totalAreaDisplay: "1,346.5 Sq.Ft. Carpet (+ 131.1 Sq.Ft. Balcony & Utility)",
    imageUrl: "/unit-1503.png",
    bedrooms: 3,
    bathrooms: 3,
    features: [
      "Dedicated Private Study Room / Work From Home Office",
      "Exclusive Bay Window in the living room for lake gazing",
      "Spacious dining hall with adjoining deep balcony",
      "Large kitchen with attached service utility area",
      "Cross ventilated bedrooms with natural light on 3 sides"
    ],
    keyHighlights: [
      "RERA Carpet Area: 125.1 Sq.M (1346.5 Sq.Ft)",
      "Balcony Area: 9.33 Sq.M (100.4 Sq.Ft)",
      "Utility Area: 2.86 Sq.M (30.7 Sq.Ft)",
      "Dedicated 11'3\" x 7'6\" Study Room"
    ]
  },
  {
    id: "av-4bhk-duplex",
    projectId: "aquavista",
    projectName: "Codename AquaVista",
    title: "AquaVista Tower C7/C8: 4 BHK Duplex with Private Terrace",
    type: "4 BHK Duplex",
    carpetAreaSqFt: "1,610.2",
    carpetAreaSqM: "149.59",
    balconyOrDeckSqFt: "214.4",
    utilitySqFt: "31.3",
    totalAreaDisplay: "1,610.2 Sq.Ft. Carpet (+ 245.7 Sq.Ft. Terrace, Balcony & Utility)",
    imageUrl: "/balcony.png",
    bedrooms: 4,
    bathrooms: 4,
    features: [
      "Two level Duplex with internal granite staircase & stainless steel railings",
      "Exclusive expansive private rooftop party terrace with panoramic lake & hill views",
      "Grand double height living dining ambience",
      "Master bedroom with private sunset balcony",
      "Multi generational floorplan with guest bedroom on lower level"
    ],
    keyHighlights: [
      "RERA Carpet Area: 149.59 Sq.M (1610.19 Sq.Ft)",
      "Balcony & Terrace: 19.92 Sq.M (214.42 Sq.Ft)",
      "Utility Area: 2.91 Sq.M (31.32 Sq.Ft)",
      "Exclusive Duplex Upper & Lower Living"
    ]
  },

  // Lakewoods Plans
  {
    id: "lw-2bhk",
    projectId: "lakewoods",
    projectName: "Mahindra Lakewoods",
    title: "Lakewoods Towers A to E: 2 BHK Comfort",
    type: "2 BHK Smart",
    carpetAreaSqFt: "751.22",
    carpetAreaSqM: "69.79",
    balconyOrDeckSqFt: "37.89",
    utilitySqFt: "24.54",
    totalAreaDisplay: "751.22 Sq.Ft. Carpet (+ 62.43 Sq.Ft. Deck & Utility)",
    imageUrl: "/Ground-floor-plan.png",
    bedrooms: 2,
    bathrooms: 2,
    features: [
      "Zero common walls for unmatched privacy & peaceful living",
      "Private deck with authentic wooden tile finish",
      "6ft wide entrance corridor leading to open concept living & dining",
      "Separate common hand wash niche for guests",
      "UPVC heat reducing glass windows for lower temperature"
    ],
    keyHighlights: [
      "RERA Carpet Area: 69.79 Sq.M (751.22 Sq.Ft)",
      "Deck Area: 3.52 Sq.M (37.89 Sq.Ft)",
      "Utility Area: 2.28 Sq.M (24.54 Sq.Ft)",
      "Common Area: 24.65 Sq.M (265.33 Sq.Ft)"
    ]
  },
  {
    id: "lw-3bhk",
    projectId: "lakewoods",
    projectName: "Mahindra Lakewoods",
    title: "Lakewoods Towers A to E: 3 BHK Grand Deck",
    type: "3 BHK Grand",
    carpetAreaSqFt: "1,013.86",
    carpetAreaSqM: "94.19",
    balconyOrDeckSqFt: "84.82",
    utilitySqFt: "24.43",
    totalAreaDisplay: "1,013.86 Sq.Ft. Carpet (+ 109.25 Sq.Ft. Deck & Utility)",
    imageUrl: "/podium-floor-plan.png",
    bedrooms: 3,
    bathrooms: 3,
    features: [
      "Zero common walls: Complete independence from neighboring units",
      "Large private deck with wooden tile flooring overlooking the 3.8 acre podium",
      "Cross ventilation designed bedrooms to channel natural breeze",
      "Niche wardrobe spaces in guest & family bedrooms",
      "Anti skid ceramic flooring in bathrooms & scratch resistant sink"
    ],
    keyHighlights: [
      "RERA Carpet Area: 94.19 Sq.M (1013.86 Sq.Ft)",
      "Deck Area: 7.88 Sq.M (84.82 Sq.Ft)",
      "Utility Area: 2.27 Sq.M (24.43 Sq.Ft)",
      "Common Area: 32.97 Sq.M (354.89 Sq.Ft)"
    ]
  }
];

export const amenitiesCategories: AmenityCategory[] = [
  {
    id: "aquavista-club",
    categoryName: "Codename AquaVista Club & Park",
    subtitle: "16,000 Sq.Ft. Clubhouse & 2 Acre Central Park Overlooking Kolavai Lake",
    items: [
      {
        title: "16,000 Sq.Ft. Grand Clubhouse",
        desc: "Multi level recreation hub with reception lobby, multipurpose hall, yoga/aerobics room, and indoor games room.",
        icon: "castle",
        tag: "AquaVista"
      },
      {
        title: "Resort Style Swimming Pool",
        desc: "Crystal clear adult swimming pool and dedicated kids splash pool with sun loungers.",
        icon: "pool",
        tag: "AquaVista"
      },
      {
        title: "2 Acre Central Park & Shaded Walkways",
        desc: "Expansive landscaped central green park with pedestrian seating pavilions and tree lined jogging paths.",
        icon: "park",
        tag: "AquaVista"
      },
      {
        title: "Open Amphitheatre & Party Lawns",
        desc: "Stepped open air amphitheatre for cultural gatherings, musical nights, and festive community celebrations.",
        icon: "theater_comedy",
        tag: "AquaVista"
      },
      {
        title: "Outdoor Tennis & Badminton Courts",
        desc: "Full sized regulation outdoor tennis court and outdoor badminton courts for sports enthusiasts.",
        icon: "sports_tennis",
        tag: "AquaVista"
      },
      {
        title: "Half Basketball Court & Play Arena",
        desc: "Dedicated half basketball hoop court and safe multi play equipment zone for kids.",
        icon: "sports_basketball",
        tag: "AquaVista"
      }
    ]
  },
  {
    id: "lakewoods-podium",
    categoryName: "Mahindra Lakewoods 3.8 Acre Podium",
    subtitle: "Vehicle Free Elevated Realm of Peace, Fitness & Unmatched Privacy",
    items: [
      {
        title: "3.8 Acre Vehicle Free Podium",
        desc: "Zero traffic, pristine elevated podium providing total safety for children and seniors to stroll freely.",
        icon: "nature_people",
        tag: "Lakewoods"
      },
      {
        title: "Elevated Lounge & Skyview Decks",
        desc: "Bespoke social pavilion overlooking the green podium, rolling reserve hills, and distant lake waters.",
        icon: "deck",
        tag: "Lakewoods"
      },
      {
        title: "Lap Pool & Kids Pool Deck",
        desc: "Sparkling swimming pool with changing rooms, dedicated shallow pool for children, and expansive timber deck.",
        icon: "water",
        tag: "Lakewoods"
      },
      {
        title: "Podium Fitness Gym & Jogging Loop",
        desc: "Fully equipped gymnasium with cardio and strength training gear, opening onto a soft cushion jogging track.",
        icon: "fitness_center",
        tag: "Lakewoods"
      },
      {
        title: "Open Badminton Court & Play Lawn",
        desc: "Outdoor badminton court and sprawling manicured lawns for morning yoga and evening family recreation.",
        icon: "sports_kabaddi",
        tag: "Lakewoods"
      },
      {
        title: "Multipurpose Hall & Indoor Games",
        desc: "Air conditioned celebration hall with indoor games room for table tennis, carrom, and board games.",
        icon: "sports_esports",
        tag: "Lakewoods"
      }
    ]
  },
  {
    id: "mwc-club",
    categoryName: "MWC Club & Township Infrastructure",
    subtitle: "Privileged Access to World Class Sports, Dining, Hospitality & Nature",
    items: [
      {
        title: "The MWC Club & Sports Bar",
        desc: "Exclusive private retreat with squash court, tennis, billiards room, reading lounge, multicuisine dining & sports bar.",
        icon: "local_bar",
        tag: "MWC Club"
      },
      {
        title: "Mahindra World School (CBSE)",
        desc: "Premier educational institution with world class sports grounds, labs, and holistic student development.",
        icon: "school",
        tag: "Education"
      },
      {
        title: "The Canopy Shopping Centre",
        desc: "Walk to retail complex featuring Pizza Hut, Amul, multi cuisine food courts, ATMs, grocery, and salons.",
        icon: "storefront",
        tag: "Retail"
      },
      {
        title: "Fairfield by Marriott",
        desc: "4 star international business hotel offering premium stays, banquet venues, and fine dining for your guests.",
        icon: "hotel",
        tag: "Hospitality"
      },
      {
        title: "1,000 Acres Reserve Forest & 7 Lakes",
        desc: "Live alongside Kolavai Lake, Periya Lake, Paranur Lake, and protected green forests with 3 Lakh+ trees.",
        icon: "forest",
        tag: "Eco Habitat"
      },
      {
        title: "On Site Paranur Railway Station",
        desc: "Direct local suburban train station connecting to Tambaram, Guindy, Chennai Central, and Chengalpattu.",
        icon: "train",
        tag: "Transit"
      }
    ]
  }
];

export const connectivityDestinations: CommuteDestination[] = [
  {
    id: "paranur-stn",
    name: "Paranur Railway Station (On site)",
    category: "transit",
    distance: "500 m to 4 km",
    timeEst: "2 to 5 mins",
    icon: "train",
    detail: "Direct suburban trains to Tambaram, Guindy, Egmore, and Chennai Central"
  },
  {
    id: "nh32",
    name: "GST Road (NH 32) Highway",
    category: "transit",
    distance: "Adjacent",
    timeEst: "2 mins",
    icon: "directions_car",
    detail: "Seamless 8 lane expressway connecting Chennai City to Trichy & South Tamil Nadu"
  },
  {
    id: "chengalpattu-stn",
    name: "Chengalpattu Railway Junction",
    category: "transit",
    distance: "9.0 km",
    timeEst: "12 mins",
    icon: "train",
    detail: "Major express junction for interstate and regional express trains"
  },
  {
    id: "airport",
    name: "Chennai International Airport",
    category: "airport",
    distance: "37.0 km",
    timeEst: "40 mins",
    icon: "flight_takeoff",
    detail: "Fast corridor via signal free GST expressway and Metro feeder"
  },
  {
    id: "parandur-airport",
    name: "Proposed Parandur Greenfield Airport",
    category: "airport",
    distance: "52.6 km",
    timeEst: "50 mins",
    icon: "flight",
    detail: "Upcoming second international airport hub of Chennai"
  },
  {
    id: "tambaram",
    name: "Tambaram Railway Junction & Bus Terminal",
    category: "transit",
    distance: "29.0 km",
    timeEst: "30 mins",
    icon: "directions_bus",
    detail: "Gateway to South Chennai and major commercial transport hub"
  },
  {
    id: "ford",
    name: "Ford India / Maraimalai Nagar",
    category: "work",
    distance: "10.0 to 12.2 km",
    timeEst: "15 mins",
    icon: "domain",
    detail: "Major automotive & industrial manufacturing corridor"
  },
  {
    id: "zoho",
    name: "Zoho Corporation Global HQ",
    category: "work",
    distance: "16.1 km",
    timeEst: "20 mins",
    icon: "apartment",
    detail: "Premier software & technology campus on GST road"
  },
  {
    id: "oragadam",
    name: "Oragadam Industrial Corridor (SEZ)",
    category: "work",
    distance: "22.4 km",
    timeEst: "25 mins",
    icon: "precision_manufacturing",
    detail: "Asia's leading automotive corridor with Renault, Daimler & Apollo"
  },
  {
    id: "mepz",
    name: "MEPZ Special Economic Zone",
    category: "work",
    distance: "30.5 km",
    timeEst: "35 mins",
    icon: "business_center",
    detail: "Export and IT hub near Tambaram / Sanatorium"
  },
  {
    id: "srm-univ",
    name: "SRM Hospital & University (Kattankulathur)",
    category: "education",
    distance: "16.1 km",
    timeEst: "18 mins",
    icon: "school",
    detail: "Top tier multispeciality hospital, medical, dental, and engineering university"
  },
  {
    id: "vit-chennai",
    name: "VIT Chennai Campus (Vandalur Kelambakkam)",
    category: "education",
    distance: "31.5 km",
    timeEst: "35 mins",
    icon: "school",
    detail: "Renowned technical institute and university campus"
  },
  {
    id: "chengalpattu-colleges",
    name: "Chengalpattu Medical & Law Colleges",
    category: "education",
    distance: "12.0 km",
    timeEst: "15 mins",
    icon: "local_hospital",
    detail: "Premier government medical and legal education institutions"
  }
];

export const projectSpecifications: ProjectSpec[] = [
  {
    category: "Structure & Architecture",
    items: [
      { feature: "AquaVista Structure", spec: "RCC framed multi storeyed towers designed for seismic zone safety" },
      { feature: "Lakewoods Structure", spec: "Aluminium formwork RCC structure for sleek finishes & superior longevity" },
      { feature: "Podium / Car Parking", spec: "Stilt & covered parking with 3.8 acre vehicle free podium at Lakewoods" },
      { feature: "Corridor / Foyers", spec: "6ft wide spacious corridors with granite / vitrified tile flooring" }
    ]
  },
  {
    category: "Flooring & Finishes",
    items: [
      { feature: "Living / Dining / Bedrooms", spec: "Premium Vitrified tiles across foyer, living, dining and all bedrooms" },
      { feature: "Kitchen", spec: "Matt finish vitrified tile flooring with granite slab 2' width and SS sink" },
      { feature: "Balconies & Decks", spec: "Ceramic tile / wooden tile finish on private decks with MS / SS railing" },
      { feature: "Duplex Staircase (AquaVista)", spec: "Granite slab / step tiles with designer Stainless Steel (SS) railing" },
      { feature: "Toilets & Utility", spec: "Anti skid ceramic floor tiles with ceramic wall dado up to 7'0\" height" }
    ]
  },
  {
    category: "Doors & Windows",
    items: [
      { feature: "Main Entrance Door", spec: "Pre hung factory made laminated flush wooden door with Dorset hardware" },
      { feature: "Internal Doors", spec: "Flush doors with enamel paint / laminated finish" },
      { feature: "Windows & French Doors", spec: "UPVC sliding / operable windows with high performance glass to reduce heat" },
      { feature: "Deck Doors", spec: "UPVC glass sliding doors opening to private deck and panoramic views" }
    ]
  },
  {
    category: "Sanitary & Bath Fittings",
    items: [
      { feature: "Sanitaryware", spec: "Roca / equivalent wall mounted EWC with concealed dual flush cistern" },
      { feature: "Wash Basins", spec: "Roca / equivalent counter top wash basin (Master) & semi recessed (Common)" },
      { feature: "Bath & CP Fittings", spec: "Grohe / Jaquar or equivalent luxury single lever CP fittings" },
      { feature: "Water & Plumbing", spec: "Provisions for geyser, exhaust fan & water purifier with STP treated water supply" }
    ]
  },
  {
    category: "Electrical & Safety Systems",
    items: [
      { feature: "Wiring & Switches", spec: "Concealed copper wiring with modular switches (Anchor / Schneider / equivalent)" },
      { feature: "Power Supply", spec: "3 Phase electric supply with dedicated circuit breakers" },
      { feature: "Power Backup", spec: "100% common area backup; 0.75 KW to 1 KW per unit, up to 3 KW for 4 BHK Duplex" },
      { feature: "Elevators", spec: "2 high speed SS finish passenger elevators per residential tower" },
      { feature: "Security & Surveillance", spec: "CCTV at entry gates, stilt lobbies & play areas; Intercom facility" }
    ]
  }
];

export const sustainabilityScorecard: GreenFeature[] = [
  {
    title: "Energy Optimisation",
    stat: "Up to 20% Electricity Savings",
    desc: "Energy efficient walls, roofs with 100% SRI (Solar Reflective Index) paint, window shading, and 95% regular daylighting.",
    icon: "solar_power"
  },
  {
    title: "Solar PV Clean Power",
    stat: "50% Solar Common Lighting",
    desc: "Rooftop Solar Photovoltaic panels catering to 50% of tower common area lighting, pathways, and landscape fixtures.",
    icon: "lightbulb"
  },
  {
    title: "Water Conservation & STP",
    stat: "Up to 30% Water Bill Savings",
    desc: "Low flow aerated fixtures, rainwater harvesting capturing >85% to 95% of rain, and on site STP treating >90% of wastewater.",
    icon: "water_drop"
  },
  {
    title: "Healthy Indoors",
    stat: ">75% Cross Ventilation",
    desc: "Engineered wind channeling, Low VOC paints, and CFC free eco friendly air conditioning provisions for pristine indoor air.",
    icon: "air"
  },
  {
    title: "Waste to Wealth",
    stat: "Zero Waste to Landfill",
    desc: "Dry and wet waste segregation at source with on site organic waste converter transforming garbage into landscaping manure.",
    icon: "recycling"
  },
  {
    title: "EV Mobility & Accessibility",
    stat: "EV Charging Infrastructure",
    desc: "Dedicated electric vehicle charging spots, Bio CNG shuttle transit, plus hindrance free ramps and restrooms for differently abled.",
    icon: "electric_car"
  }
];

export const mahindraLegacyData = {
  title: "The Mahindra Legacy",
  subtitle: "Pioneering Sustainable Living & Smart Urbanisation",
  stats: [
    { value: "260,000+", label: "Employees Across 100+ Countries" },
    { value: "27.4 Million", label: "Sq.Ft. Residential Footprint" },
    { value: "5,000 Acres", label: "Integrated Cities Across 4 Locations" },
    { value: "#1 Worldwide", label: "Tractor Manufacturer by Volume" }
  ],
  verticals: [
    { name: "Automotive & EVs", desc: "India's leading utility vehicle and electric mobility pioneer" },
    { name: "Real Estate & Urban", desc: "Mahindra Lifespaces: sustainable homes & smart cities" },
    { name: "Information Technology", desc: "Tech Mahindra: digital transformation & enterprise solutions" },
    { name: "Financial Services", desc: "Mahindra Finance: rural & semi urban empowerment" },
    { name: "Hospitality & Leisure", desc: "Club Mahindra: 100+ vacation ownership resorts" },
    { name: "Aerospace & Defense", desc: "Cutting edge defense systems & aircraft component manufacturing" }
  ]
};
