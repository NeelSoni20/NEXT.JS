"use client";
import { act, use, useState } from "react";
import { REGIONS_DATA,RegionData } from "../data/regions";


const Continent_filter = [
        "All Continents",
        "Asia",
        "Europe",
        "Americas",
    ]

export default function RegionPage() {
    const [selectcontinent, setSelectcontinent] = useState("All Continents")
    const [active, setActiveRegion] = useState<RegionData>(REGIONS_DATA[0])

    const filterregions = selectcontinent === "All Continents"
    ? REGIONS_DATA
    : REGIONS_DATA.filter((item)=> item.continent === selectcontinent)
  return (

    
  <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Technical URI Sub-Header Banner (From Screenshot) */}
      
      <div className="bg-slate-50 border border-slate-200/80 rounded-md px-4 py-2 mb-6 flex flex-wrap justify-between items-center text-xs font-mono text-slate-600">
      
        <div className="flex items-center gap-2">
          <span className="text-slate-400">URI:</span>
          <span className="text-teal-700 font-semibold">{active.uri}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400">TYPE:</span>
          <span className="font-medium text-slate-700">{active.type}</span>
        </div>
      
        <div className="flex items-center gap-2 text-slate-400">
          <span>CRS: {active.crs}</span>
          <span>•</span>
          <span>INDEX_ID: {active.indexId}</span>
        </div>
      </div>
        {/* Header Section */}
      <div className="flex justify-between items-end mb-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <span>REGIONAL INDEX // 02</span>
            <span className="font-bold text-teal-600">• MACRO SURVEY</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Explore spatial regions
          </h1>
          <p className="text-sm text-slate-500">
            Macro-level terrain sectors and geographic zone coordinates.
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            TOTAL SECTORS INDEXED
          </p>
          <p className="text-lg font-bold font-mono text-slate-800">
            0{filterregions.length} SECTORS ACTIVE
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-slate-200 my-6" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Continent_filter.map((continent) => {
          const isActive = selectcontinent === continent;
          return (
            <button
              key={continent}
              onClick={() => setSelectcontinent(continent)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {continent}
            </button>
          );
        })}
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filterregions.map((region) => (
          <div
            key={region.id}
            onClick={() => setActiveRegion(region)}
            className={`cursor-pointer border rounded-lg p-5 transition-all ${
              active.id === region.id
                ? "border-teal-600 bg-teal-50/20 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
               }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-mono text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded">
                  {region.indexId}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {region.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {region.subRegion} • {region.continent}
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">
                {region.nodesCount} NODES
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-4">{region.description}</p>

            <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>{region.uri}</span>
              <span className="text-teal-700 font-semibold">Inspect sector &rarr;</span>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 ">
        {/* Left Column: Rail Interconnectivity */}
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">🚆</span>
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
          Rail Interconnectivity &amp; Transit Arteries
        </h3>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">
        The Kansai corridor is bound by one of the densest private and national
        rail meshes globally. The JR Tokaido-Sanyo Shinkansen anchors the
        primary east-west spine connecting Kyoto, Shin-Osaka, and Shin-Kobe in
        under 30 minutes. Hankyu, Hanshin, Keihan, and Kintetsu private
        networks provide non-JR redundant links serving suburban belts and
        pilgrimage footpaths into Mount Koya and Yoshino.
      </p>
    </div>
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">🌡️</span>
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
          Geographic Microclimates &amp; Topography
        </h3>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">
        Flanked by the Tamba highlands to the north, the Kii mountain spine to
        the south, and Osaka Bay to the west, Kansai experiences stark
        microclimates. Kyoto&apos;s closed basin results in sharp seasonal
        temperature deltas (hot humid summers and biting winters), whereas Kobe
        and southern Osaka benefit from maritime moderations created by the Seto
        Inland Sea wind tunnels.
      </p>
    </div>
  </div>
  {/* Footer Metadata Strip */}
  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap justify-between items-center text-[11px] font-mono text-slate-500 gap-2">
    <div>
      <span>Primary pass: JR Kansai Area Pass</span>
      <span className="mx-2">•</span>
      <span>Transit interoperability: ICOCA / Suica integrated</span>
    </div>
    <div>
      <span>Verified spatial notes (Updated: Autumn cycle)</span>
    </div>
  </div>
</div>
    
    

  
  )
}

