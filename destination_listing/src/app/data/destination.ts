export interface DestinationDetail {
  id: string;
  code: string;
  badge: string;
  title: string;
  country: string;
  region: string;
  countryCode: string;
  geo: string;
  index: string;
  overview: string;
  elevation: string;
  prefecture: string;
  zone: string;
  resolution: string;
  bestSeason: string;
  knownFor: string;
  tripLength: string;
  transitNotes: string;
  taxonomy: string;
  description: string; // Used for catalogue card previews
}

// 1. Array version for filtering and mapping on the main catalogue page
export const DESTINATIONS: DestinationDetail[] = [
  {
    id: "kyoto",
    code: "LOC-35.0116",
    badge: "EA-01",
    title: "Kyoto",
    country: "Japan",
    region: "East Asia",
    countryCode: "JPN",
    geo: "GEO: 35.0116° N, 135.7681° E",
    index: "INDEX: KIX-KANSAI",
    overview:
      "Former imperial capital renowned for classical Buddhist temples, Zen gardens, imperial palaces, Shinto shrines, and preserved wooden merchant townhouses.",
    elevation: "54m",
    prefecture: "Kyoto (京都府)",
    zone: "Zone 03 / Historic Core",
    resolution: "480 × 200 Ref",
    bestSeason:
      "Spring (March–May) for cherry blossoms or Autumn (October–November) for foliage",
    knownFor:
      "Zen gardens, bamboo forests, Kaiseki dining, and historic preservation",
    tripLength: "4 to 6 days",
    transitNotes:
      "Intercity arrival routes through Kyoto Station via the Tokaido Shinkansen, linking central Tokyo within approximately 135 minutes. Intra-city navigation relies predominantly on integrated municipal bus lines and the Karasuma and Tozai subway networks via standard IC tap cards.",
    taxonomy: "Spatial Taxonomy Division: West Honshu Basin",
    description: "Historic shrines, bamboo groves, and traditional wooden tea houses.",
  },
  {
    id: "bergen",
    code: "LOC-60.3913",
    badge: "SC-04",
    title: "Bergen",
    country: "Norway",
    region: "Scandinavia",
    countryCode: "NOR",
    geo: "GEO: 60.3913° N, 5.3221° E",
    index: "INDEX: BGO-VESTLAND",
    overview:
      "Coastal fjord gateway known for colorful wooden wharfs, Seven Mountains backdrop, and direct access to Sognefjord and Hardangerfjord navigation routes.",
    elevation: "12m",
    prefecture: "Vestland",
    zone: "Zone 01 / Bryggen Waterfront",
    resolution: "480 × 200 Ref",
    bestSeason: "May to September for mild temperatures and long daylight hours",
    knownFor: "UNESCO World Heritage Bryggen wharf, Fløibanen funicular, and fjord tours",
    tripLength: "3 to 5 days",
    transitNotes:
      "Arrival via Bergen Airport Flesland with Light Rail (Bybanen) connection into the city center in 45 minutes. Regionally connected via the scenic Bergen Line railway to Oslo.",
    taxonomy: "Spatial Taxonomy Division: Vestland Fjord Corridor",
    description: "Coastal fjord gateway known for colorful wooden wharfs and mountain funiculars.",
  },
  {
    id: "oaxaca",
    code: "LOC-17.0732",
    badge: "CA-02",
    title: "Oaxaca",
    country: "Mexico",
    region: "Central America",
    countryCode: "MEX",
    geo: "GEO: 17.0732° N, 96.7266° W",
    index: "INDEX: OAX-VALLEYS",
    overview:
      "High-altitude colonial city renowned for indigenous Zapotec and Mixtec heritage, vibrant craft markets, Barro Negro pottery, and world-class gastronomy.",
    elevation: "1,550m",
    prefecture: "Oaxaca State",
    zone: "Zone 02 / Central Historic District",
    resolution: "480 × 200 Ref",
    bestSeason: "October to April during dry weather and Day of the Dead celebrations",
    knownFor: "Mole gastronomy, Monte Albán ruins, Mezcal artisanal production, and textiles",
    tripLength: "4 to 7 days",
    transitNotes:
      "Served by Xoxocotlán International Airport (OAX). Intra-valley trips to Mitla and Hierve el Agua depend on local collectivo taxis and suburban bus lines.",
    taxonomy: "Spatial Taxonomy Division: Sierra Madre del Sur Plateau",
    description: "Colonial architecture, indigenous craft markets, and renowned culinary traditions.",
  },
  {
    id: "florence",
    code: "LOC-43.7696",
    badge: "SE-08",
    title: "Florence",
    country: "Italy",
    region: "Southern Europe",
    countryCode: "ITA",
    geo: "GEO: 43.7696° N, 11.2558° E",
    index: "INDEX: FLR-TUSCANY",
    overview:
      "Cradle of the Italian Renaissance, featuring iconic terracotta-domed cathedrals, Uffizi masterpieces, and historic bridges across the Arno River.",
    elevation: "50m",
    prefecture: "Tuscany (Toscana)",
    zone: "Zone 04 / Historic Center",
    resolution: "480 × 200 Ref",
    bestSeason: "April to June and September to October for pleasant Mediterranean climate",
    knownFor: "Renaissance art, Duomo di Milano architecture, leathercraft, and Tuscan wine",
    tripLength: "3 to 5 days",
    transitNotes:
      "Central rail hub at Firenze Santa Maria Novella station connected via Frecciarossa high-speed rail to Rome (90 mins) and Milan (120 mins). High pedestrian accessibility.",
    taxonomy: "Spatial Taxonomy Division: Arno River Basin",
    description: "Renaissance art museums, terracotta-domed cathedral, and Tuscan wine country.",
  },
  {
    id: "essaouira",
    code: "LOC-31.5085",
    badge: "NA-03",
    title: "Essaouira",
    country: "Morocco",
    region: "North Africa",
    countryCode: "MAR",
    geo: "GEO: 31.5085° N, 9.7595° W",
    index: "INDEX: ESU-ATLANTIC",
    overview:
      "Fortified Atlantic port city characterized by 18th-century ramparts, wind-swept beaches, artisan Thuya woodcraft, and a pedestrian medina.",
    elevation: "11m",
    prefecture: "Marrakesh-Safi",
    zone: "Zone 01 / Medina Ramparts",
    resolution: "480 × 200 Ref",
    bestSeason: "May to October for coastal breezes and windsurfing conditions",
    knownFor: "Atlantic ramparts, Gnawa music festival, fresh seafood, and Thuya woodworking",
    tripLength: "2 to 4 days",
    transitNotes:
      "Accessible via Supratours coach buses directly from Marrakesh (3 hours). Intra-medina transport is strictly pedestrian with handcarts for cargo.",
    taxonomy: "Spatial Taxonomy Division: Atlantic Coastal Margin",
    description: "Atlantic port ramparts, breezy medina alleyways, and artisan woodcraft.",
  },
  {
    id: "queenstown",
    code: "LOC-45.0312",
    badge: "OC-06",
    title: "Queenstown",
    country: "New Zealand",
    region: "Oceania",
    countryCode: "NZL",
    geo: "GEO: 45.0312° S, 168.6626° E",
    index: "INDEX: ZQN-SOUTHERN",
    overview:
      "Alpine lake resort town set against Lake Wakatipu and the Remarkables range, known as the adventure tourism hub of the South Island.",
    elevation: "310m",
    prefecture: "Otago",
    zone: "Zone 05 / Wakatipu Basin",
    resolution: "480 × 200 Ref",
    bestSeason: "December to February for summer hiking or June to August for skiing",
    knownFor: "Lake Wakatipu cruises, bungee jumping, Milford Sound access, and Pinot Noir wine",
    tripLength: "4 to 7 days",
    transitNotes:
      "Served by Queenstown Airport (ZQN) with direct trans-Tasman flights. Orbus public transit network provides affordable connectivity to Frankton and Arrowtown.",
    taxonomy: "Spatial Taxonomy Division: Southern Alps Glacial Lake Basin",
    description: "Alpine lake landscapes, glacial valleys, and outdoor trail expeditions.",
  },
];

// 2. Object Dictionary version for O(1) dynamic lookups in [id]/page.tsx
export const DESTINATIONS_DATA: Record<string, DestinationDetail> = DESTINATIONS.reduce(
  (acc, item) => {
    acc[item.id] = item;
    return acc;
  },
  {} as Record<string, DestinationDetail>
);