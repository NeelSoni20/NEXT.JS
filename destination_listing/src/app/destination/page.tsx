"use client";
import { useState } from "react";
import { DESTINATIONS } from "../data/destination";
export default function Destination() {

  const REGIONS =  [
  "All Regions",
  "East Asia",
  "Southern Europe",
  "Scandinavia",
  "South America",
  "North Africa",
];

const [selectRegion, setselectRegion] = useState("All Regions")
const filterDestinations = selectRegion === "All Regions"
  ?  DESTINATIONS
  :  DESTINATIONS.filter((item) => item.region === selectRegion)

  
  return (
    <div>
      {/* Header */}
    <div className="flex justify-between items-end px-6 py-8 mx-auto max-w-7xl">
    
      <div className="flex flex-col gap-1">
       
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-500">
          <span>CATALOGUE // 01</span>
          <span className="font-bold text-green-600">• LIVE SURVEY</span>
        </div>

        
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Explore destinations
        </h1>

        
        <p className="text-sm text-gray-500">
          Browse curated travel places organized by geographic region and terrain.
        </p>
      </div>

     
      <div className="text-right">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
          TOTAL RECORDED ENTITIES
        </p>
        <p className="text-lg font-bold font-mono text-gray-800">
          06 NODES ACTIVE
        </p>
       
      </div>
      
    </div>
    <hr className="border-t border-gray-200 my-6" />
    {/* Filter */}
    <div className="flex flex-wrap gap-2 mb-8 mx-5">
        {REGIONS.map((region) => {
          const isActive = selectRegion === region;
          return (
            <button
              key={region}
              onClick={() => setselectRegion(region)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                isActive
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {region}
            </button>
          );
        })}
      </div>
      {/*  Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-5 p-1 ">
        {filterDestinations.map((item) => (
          <div
            key={item.id}
            className="border border-slate-200 rounded-lg p-5 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="bg-slate-50 border border-slate-100 p-3 rounded mb-4 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>{item.code}</span>
                <span className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-400 mb-3">
                {item.country} • {item.region}
              </p>
              <p className="text-sm text-slate-600 mb-6">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Coordinate Format */}
      <div className="flex flex-row justify-between items-center mt-12  border border-slate-200 bg-slate-50/50 p-4 rounded-lg m-20 ">
        <p className="text-gray-600 ">Destination are systmatically validate Agaist cartographic terrain datasets.</p><p className="left flex text-gray-500">COORDINATE FORMAT: WFS84</p>
      </div>
    </div>
    
   
  )
}

