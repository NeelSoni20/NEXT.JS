export interface RegionData {
  id: string;
  uri: string;
  type: string;
  crs: string;
  indexId: string;
  name: string;
  continent: string;
  subRegion: string;
  nodesCount: number;
  description: string;
}

export const REGIONS_DATA: RegionData[] = [
  {
    id: "kansai",
    uri: "/regions/asia/japan/kansai",
    type: "SUB_REGION_INDEX",
    crs: "EPSG:4326",
    indexId: "#7240-KNSI",
    name: "Kansai Sector",
    continent: "Asia",
    subRegion: "East Asia",
    nodesCount: 12,
    description: "Cultural heartland of Honshu comprising Kyoto, Osaka, and Nara basin systems.",
  },
  {
    id: "scandinavia",
    uri: "/regions/europe/nordic/scandinavia",
    type: "MACRO_REGION_INDEX",
    crs: "EPSG:4326",
    indexId: "#3810-SCND",
    name: "Scandinavia Sector",
    continent: "Europe",
    subRegion: "Northern Europe",
    nodesCount: 8,
    description: "Glacial fjord corridors, alpine plateaus, and Arctic coastal waterways.",
  },
  {
    id: "oaxaca-valley",
    uri: "/regions/americas/mexico/oaxaca",
    type: "SUB_REGION_INDEX",
    crs: "EPSG:4326",
    indexId: "#1092-OAXC",
    name: "Oaxaca Central Valleys",
    continent: "Americas",
    subRegion: "Central America",
    nodesCount: 6,
    description: "High-altitude tropical plateau surrounded by Sierra Madre del Sur ranges.",
  },
  {
    id: "tuscany",
    uri: "/regions/europe/italy/tuscany",
    type: "SUB_REGION_INDEX",
    crs: "EPSG:4326",
    indexId: "#5014-TSCY",
    name: "Tuscan Basin",
    continent: "Europe",
    subRegion: "Southern Europe",
    nodesCount: 9,
    description: "Rolling pre-Apennine hills, alluvial river basins, and Mediterranean coastlines.",
  },
];