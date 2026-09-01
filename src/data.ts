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
    heroImage: "/aquavista/aqua gallery.png",
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
    heroImage: "/lakewoods/lakewood gallery.png",
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
    { name: "Infosys", sector: "Information Technology", campus: "Flagship SEZ Campus", image: "/aquavista/infosys.png" },
    { name: "BMW", sector: "Automotive", campus: "Assembly & Engineering", image: "/aquavista/bmw.png" },
    { name: "Renault Nissan", sector: "Automotive & R&D", campus: "Technology Centre", image: "/aquavista/renault.png" },
    { name: "Timken", sector: "Precision Engineering", campus: "Global Tech Hub", image: "/aquavista/timken.png" },
    { name: "Saint-Gobain", sector: "Advanced Materials", campus: "Industrial Park", image: "/aquavista/saint gobain.png" },
    { name: "Parker Hannifin", sector: "Motion & Control", campus: "Manufacturing", image: "/aquavista/parker.png" },
    { name: "Fujitec", sector: "Elevators & Systems", campus: "Global Manufacturing", image: "/aquavista/fujitec.png" },
    { name: "B. Braun", sector: "Healthcare & Pharma", campus: "Medical Solutions", image: "/aquavista/b braun.png" }
  ],
  socialInfra: [
    {
      title: "The Canopy Commercial Centre",
      desc: "Multi level shopping destination with Pizza Hut, Amul Ice Cream, superstores, banks, ATMs, and casual dining.",
      icon: "shopping_bag",
      image: "/aquavista/canopy.png"
    },
    {
      title: "Fairfield by Marriott",
      desc: "Four star international hospitality and business hotel for guests, dining, and corporate conferences.",
      icon: "hotel",
      image: "/aquavista/fairfield.png"
    },
    {
      title: "MWC Club & Recreation",
      desc: "Private lifestyle club with tennis, squash, swimming, gymnasium, spa/salon, sports bar & restaurant.",
      icon: "sports_tennis",
      image: "/aquavista/mwc club.png"
    },
    {
      title: "Healthcare & Care Centers",
      desc: "On campus multi speciality medical clinic, pharmacy, and Amelio Child Care & Daycare centre.",
      icon: "local_hospital",
      image: "/aquavista/healthcare.png"
    },
    {
      title: "Eco Mobility & Bio Buses",
      desc: "Township internal commute powered by clean Bio CNG fueled shuttle buses and electric mobility.",
      icon: "directions_bus",
      image: "/aquavista/eco mobility.png"
    },
    {
      title: "Mahindra World School (CBSE)",
      desc: "Co educational CBSE school with state of the art academic & sports facilities right within the township.",
      icon: "school",
      image: "/aquavista/central podium.png"
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
    imageUrl: "/aquavista/3 bhk.png",
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
    imageUrl: "/aquavista/3.5 bhk.png",
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
    imageUrl: "/aquavista/4 bhk.png",
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
    imageUrl: "/lakewoods/2 bhk lakewood.png",
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
    title: "Lakewoods Towers A to E: 3 BHK Deck",
    type: "3 BHK Deck",
    carpetAreaSqFt: "925.4",
    carpetAreaSqM: "85.97",
    balconyOrDeckSqFt: "62.1",
    utilitySqFt: "24.43",
    totalAreaDisplay: "925.4 Sq.Ft. Carpet (+ 86.5 Sq.Ft. Deck & Utility)",
    imageUrl: "/lakewoods/3 bhk lakewood.png",
    bedrooms: 3,
    bathrooms: 3,
    features: [
      "Zero common walls: Complete independence from neighboring units",
      "Private deck with wooden tile flooring overlooking the 3.8 acre podium",
      "Cross ventilation designed bedrooms to channel natural breeze",
      "Niche wardrobe spaces in guest & family bedrooms",
      "Anti skid ceramic flooring in bathrooms & scratch resistant sink"
    ],
    keyHighlights: [
      "RERA Carpet Area: 85.97 Sq.M (925.4 Sq.Ft)",
      "Deck Area: 5.77 Sq.M (62.1 Sq.Ft)",
      "Utility Area: 2.27 Sq.M (24.43 Sq.Ft)",
      "Zero Common Walls Design"
    ]
  },
  {
    id: "lw-3bhk-grand",
    projectId: "lakewoods",
    projectName: "Mahindra Lakewoods",
    title: "Lakewoods Towers A to E: 3 BHK Grand Deck",
    type: "3 BHK Grand",
    carpetAreaSqFt: "1,013.86",
    carpetAreaSqM: "94.19",
    balconyOrDeckSqFt: "84.82",
    utilitySqFt: "24.43",
    totalAreaDisplay: "1,013.86 Sq.Ft. Carpet (+ 109.25 Sq.Ft. Deck & Utility)",
    imageUrl: "/lakewoods/3 bhk grand lakewood.png",
    bedrooms: 3,
    bathrooms: 3,
    features: [
      "Zero common walls: Ultra private corner positioning",
      "Expansive grand deck offering panoramic 3.8 acre podium views",
      "Three side open cross ventilation with abundant sunlight",
      "Spacious master bedroom with dedicated wardrobe recess",
      "Premium sanitary fittings and luxury vitrified floor finishes"
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
        tag: "AquaVista",
        image: "/aquavista/grand clubhouse.png"
      },
      {
        title: "Resort Style Swimming Pool",
        desc: "Crystal clear adult swimming pool and dedicated kids splash pool with sun loungers.",
        icon: "pool",
        tag: "AquaVista",
        image: "/aquavista/resort style pool.png"
      },
      {
        title: "2 Acre Central Park & Shaded Walkways",
        desc: "Expansive landscaped central green park with pedestrian seating pavilions and tree lined jogging paths.",
        icon: "park",
        tag: "AquaVista",
        image: "/aquavista/central podium.png"
      },
      {
        title: "Open Amphitheatre & Party Lawns",
        desc: "Stepped open air amphitheatre for cultural gatherings, musical nights, and festive community celebrations.",
        icon: "theater_comedy",
        tag: "AquaVista",
        image: "/aquavista/open amphitheatre.png"
      },
      {
        title: "Regulation Badminton Court",
        desc: "Outdoor badminton courts and athletic facilities for residents of all age groups.",
        icon: "sports_tennis",
        tag: "AquaVista",
        image: "/aquavista/badminton court.png"
      },
      {
        title: "Half Basketball Court & Play Arena",
        desc: "Dedicated half basketball hoop court and safe multi play equipment zone for kids.",
        icon: "sports_basketball",
        tag: "AquaVista",
        image: "/aquavista/half basketball.png"
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
        tag: "Lakewoods",
        image: "/lakewoods/lakewood gallery.png"
      },
      {
        title: "Open to Sky Swimming Pool",
        desc: "Sparkling resort swimming pool with changing rooms, dedicated shallow pool for children, and expansive timber deck.",
        icon: "water",
        tag: "Lakewoods",
        image: "/lakewoods/pool-amenities.jpg"
      },
      {
        title: "Elevated Lounge & Skyview Decks",
        desc: "Bespoke social pavilion overlooking the green podium, rolling reserve hills, and distant lake waters.",
        icon: "deck",
        tag: "Lakewoods",
        image: "/lakewoods/podium-park.jpg"
      },
      {
        title: "Podium Fitness Gym & Jogging Loop",
        desc: "Fully equipped gymnasium with cardio and strength training gear, opening onto a soft cushion jogging track.",
        icon: "fitness_center",
        tag: "Lakewoods",
        image: "/lakewoods/hero.jpg"
      },
      {
        title: "Open Badminton Court & Play Lawn",
        desc: "Outdoor badminton court and sprawling manicured lawns for morning yoga and evening family recreation.",
        icon: "sports_kabaddi",
        tag: "Lakewoods",
        image: "/aquavista/badminton court.png"
      },
      {
        title: "Multipurpose Hall & Indoor Games",
        desc: "Air conditioned celebration hall with indoor games room for table tennis, carrom, and board games.",
        icon: "sports_esports",
        tag: "Lakewoods",
        image: "/aquavista/grand clubhouse.png"
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
        tag: "MWC Club",
        image: "/aquavista/mwc club.png"
      },
      {
        title: "The Canopy Shopping Centre",
        desc: "Walk to retail complex featuring Pizza Hut, Amul, multi cuisine food courts, ATMs, grocery, and salons.",
        icon: "storefront",
        tag: "Retail",
        image: "/aquavista/canopy.png"
      },
      {
        title: "Fairfield by Marriott",
        desc: "4 star international business hotel offering premium stays, banquet venues, and fine dining for your guests.",
        icon: "hotel",
        tag: "Hospitality",
        image: "/aquavista/fairfield.png"
      },
      {
        title: "Healthcare & Care Centers",
        desc: "On campus multi speciality medical clinic, pharmacy, and Amelio Child Care & Daycare centre.",
        icon: "local_hospital",
        tag: "Healthcare",
        image: "/aquavista/healthcare.png"
      },
      {
        title: "Eco Mobility & Bio Buses",
        desc: "Township internal commute powered by clean Bio CNG fueled shuttle buses and electric mobility.",
        icon: "directions_bus",
        tag: "Eco Transit",
        image: "/aquavista/eco mobility.png"
      },
      {
        title: "Mahindra World School (CBSE)",
        desc: "Premier educational institution with world class sports grounds, labs, and holistic student development.",
        icon: "school",
        tag: "Education",
        image: "/aquavista/central podium.png"
      }
    ]
  }
];

export const connectivityDestinations: CommuteDestination[] = [
  {
    id: "paranur-stn",
    name: "Paranur Railway Station",
    category: "transit",
    distance: "0.5 Km",
    timeEst: "2 mins",
    icon: "train",
    detail: "Inside Township. Direct suburban trains to Tambaram, Guindy & Central"
  },
  {
    id: "gst-road",
    name: "GST Road (NH 32)",
    category: "transit",
    distance: "0.0 Km",
    timeEst: "Direct Access",
    icon: "add_road",
    detail: "Direct 6-lane arterial highway corridor connecting Chennai & South TN"
  },
  {
    id: "chengalpattu-jn",
    name: "Chengalpattu Railway Junction",
    category: "transit",
    distance: "7.0 Km",
    timeEst: "10 mins",
    icon: "directions_railway",
    detail: "Major Southern Railway junction with express trains to Bangalore, Madurai, Trichy"
  },
  {
    id: "infosys-mwc",
    name: "Infosys Mahindra World City",
    category: "work",
    distance: "1.2 Km",
    timeEst: "3 mins",
    icon: "corporate_fare",
    detail: "Walk to work convenience for 25,000+ Infosys tech workforce"
  },
  {
    id: "bmw-mwc",
    name: "BMW India Manufacturing Plant",
    category: "work",
    distance: "1.8 Km",
    timeEst: "4 mins",
    icon: "precision_manufacturing",
    detail: "Inside MWC Auto Zone"
  },
  {
    id: "renault-mwc",
    name: "Renault Nissan Technology Centre",
    category: "work",
    distance: "2.0 Km",
    timeEst: "5 mins",
    icon: "engineering",
    detail: "Global automotive R&D centre employing 8,000+ engineers"
  },
  {
    id: "srm-univ",
    name: "SRM University & SRM Hospital",
    category: "education",
    distance: "14.0 Km",
    timeEst: "15 mins",
    icon: "school",
    detail: "Premier multidisciplinary university & 1,500 bed medical college hospital"
  },
  {
    id: "chennai-airport",
    name: "Chennai International Airport (MAA)",
    category: "airport",
    distance: "38.0 Km",
    timeEst: "40 mins",
    icon: "flight_takeoff",
    detail: "Fast signal free commute via Grand Southern Trunk Expressway"
  }
];

export const projectSpecifications: ProjectSpec[] = [
  {
    category: "Structure & Architecture",
    items: [
      { feature: "Superstructure", spec: "Aluminium formwork RCC framed earthquake resistant structure with high strength concrete" },
      { feature: "Walls", spec: "Engineered RCC walls offering smooth finish, maximum usable carpet area, and enhanced durability" },
      { feature: "Floor to Ceiling Height", spec: "Generous 9.8 ft clear internal ceiling height for superior air circulation" }
    ]
  },
  {
    category: "Flooring & Finishes",
    items: [
      { feature: "Living, Dining & Bedrooms", spec: "Premium 800mm x 800mm double charged vitrified tiles with elegant gloss finish" },
      { feature: "Balconies & Private Decks", spec: "Anti skid rustic ceramic tiles with authentic wooden plank texture & SS glass railings" },
      { feature: "Kitchen & Utility", spec: "Vitrified tiles with polished granite countertop, stainless steel sink & ceramic dado up to 2 ft" },
      { feature: "Duplex Rooftop Terraces", spec: "Waterproof weather proof terracotta tiles with outdoor party drainage channel" }
    ]
  },
  {
    category: "Doors, Windows & Balconies",
    items: [
      { feature: "Main Door", spec: "Teakwood frame with elegant engineered flush shutter, digital biometric Yale lock, and brass fittings" },
      { feature: "Internal Doors", spec: "Seasoned hardwood frame with premium laminated flush doors and cylindrical locks" },
      { feature: "Windows & French Doors", spec: "Heavy duty UPVC sliding windows with bug mesh and energy efficient heat reducing glass" }
    ]
  },
  {
    category: "Plumbing, CP & Sanitary Fittings",
    items: [
      { feature: "Sanitaryware", spec: "Wall hung EWC with concealed dual flush cistern by Roca or Kohler" },
      { feature: "CP Fittings", spec: "Single lever diverter, overhead rain shower and chrome plated fixtures by Grohe" },
      { feature: "Piping", spec: "CPVC water supply lines and SWR drainage pipes with acoustic sound proofing" }
    ]
  },
  {
    category: "Electrical & Smart Provisions",
    items: [
      { feature: "Wiring & Switches", spec: "Fire resistant low smoke (FRLS) copper wiring with modular switches by Legrand or Schneider" },
      { feature: "Power Backup", spec: "100% DG backup for essential lighting, fans, elevators, and common area amenities" },
      { feature: "Air Conditioning", spec: "Concealed drain pipes & copper conduit provisions for split ACs in living and all bedrooms" }
    ]
  }
];

export const sustainabilityScorecard: GreenFeature[] = [
  {
    title: "20% Lower Electricity Bills",
    stat: "20% Savings",
    desc: "Energy efficient lighting, solar PV common power, and heat reducing UPVC windows cut household utility costs.",
    icon: "bolt"
  },
  {
    title: "100% Rainwater Harvesting",
    stat: "Zero Depletion",
    desc: "Integrated township percolation pits, recharge wells, and lake catchment systems replenish ground water naturally.",
    icon: "water_drop"
  },
  {
    title: "100% Waste Recycling",
    stat: "Zero Landfill",
    desc: "Organic Waste Converters transform food scrap into rich nutrient compost for the 150 acres of township greenery.",
    icon: "recycling"
  },
  {
    title: "3 Lakh+ Indigenous Trees",
    stat: "3,00,000+ Flora",
    desc: "Abundant tree canopy produces cleaner oxygen, lowers ambient temperature by 2 to 3°C, and protects native bird species.",
    icon: "forest"
  },
  {
    title: "Electric & Bio CNG Mobility",
    stat: "Eco Transport",
    desc: "Internal shuttle bio buses and electric vehicle EV charging bays promote zero carbon township travel.",
    icon: "electric_car"
  }
];

export const mahindraLegacyData = {
  title: "The Mahindra Group Legacy",
  subtitle: "75+ Years of Trust, Integrity & Innovation",
  stats: [
    { label: "Global Revenue", value: "$ 21+ Billion" },
    { label: "Countries Present", value: "100+ Nations" },
    { label: "Global Workforce", value: "2,60,000+ Employees" },
    { label: "Development Footprint", value: "35+ Million Sq.Ft." }
  ],
  verticals: [
    { name: "Automotive Leadership", desc: "India's No. 1 SUV brand (Thar, Scorpio-N, XUV700) & pioneer in electric mobility." },
    { name: "Farm Equipment", desc: "World's largest tractor manufacturer by volume, empowering farmers across 5 continents." },
    { name: "Tech Mahindra", desc: "Top tier global digital transformation, consulting, and enterprise AI engineering provider." },
    { name: "Mahindra Lifespaces", desc: "India's pioneer in green homes and developer of 1,500 acre integrated cities in Chennai & Jaipur." },
    { name: "Financial Services", desc: "Serving over 7.5 million customers with vehicle, SME, and housing finance solutions." },
    { name: "Renewable Energy", desc: "Mahindra Susten leading India's clean energy transition with utility scale solar parks." }
  ]
};
