import Link from "next/link";
import { DESTINATIONS_DATA } from "@/app/data/destination"; // Adjust path to your data file

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 1. Read params asynchronously on the server
  const { id } = await params;

  
  const data = DESTINATIONS_DATA[id as keyof typeof DESTINATIONS_DATA] || DESTINATIONS_DATA.kyoto;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 text-slate-800">
      {/* 1. Breadcrumbs & Back Navigation */}
      <div className="mb-6">
        <p className="text-xs font-mono text-slate-400 mb-2">
          Destinations / {data.region} / {data.country} /{" "}
          <span className="text-slate-700">{data.title}</span>
        </p>
        <Link
          href="/destination"
          className="text-xs font-medium text-teal-800 hover:text-teal-900 flex items-center gap-1"
        >
          &larr; Back to destinations
        </Link>
      </div>

      <hr className="border-t border-slate-200 mb-8" />

      {/* 2. Header Title & Badges */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
            {data.country} • {data.region}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            {data.title}
          </h1>
        </div>

        {/* Spatial Coordinate Badges */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded text-slate-600">
            {data.geo}
          </span>
          <span className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded text-slate-700 font-semibold">
            {data.index}
          </span>
        </div>
      </div>

      {/* 3. Cartographic Overview Box */}
      <div className="border border-slate-200 rounded-lg p-6 bg-slate-50/40 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <div>
            <span className="text-[11px] font-mono text-teal-800 font-bold uppercase tracking-wider block mb-2">
              CARTOGRAPHIC OVERVIEW
            </span>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {data.overview}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200/80 flex gap-8 text-xs font-mono text-slate-500">
            <div>
              <span className="text-slate-400">Elevation: </span>
              <span className="text-slate-800 font-medium">{data.elevation}</span>
            </div>
            <div>
              <span className="text-slate-400">Prefecture / State: </span>
              <span className="text-slate-800 font-medium">{data.prefecture}</span>
            </div>
          </div>
        </div>

        {/* Spatial Inset Graphic Box */}
        <div className="border border-slate-200 bg-slate-100 rounded-md p-3 relative flex flex-col justify-between h-40">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 z-10">
            <span className="bg-white/80 backdrop-blur px-1.5 py-0.5 rounded border border-slate-200">
              🖼 Spatial Inset
            </span>
            <span>{data.resolution}</span>
          </div>

          <div className="text-right text-[11px] font-mono text-slate-700 font-bold z-10">
            {data.zone}
          </div>
        </div>
      </div>

      {/* 4. Key Information Table */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
          <span className="w-1 h-4 bg-teal-800 rounded-full inline-block"></span>
          Key Information
        </h2>
        <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 text-xs bg-white">
          <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-2">
            <span className="font-semibold text-slate-500 flex items-center gap-2">
              <span>📅</span> Best season
            </span>
            <span className="md:col-span-3 text-slate-800 font-medium">
              {data.bestSeason}
            </span>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-2">
            <span className="font-semibold text-slate-500 flex items-center gap-2">
              <span>🎯</span> Known for
            </span>
            <span className="md:col-span-3 text-slate-800 font-medium">
              {data.knownFor}
            </span>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-2">
            <span className="font-semibold text-slate-500 flex items-center gap-2">
              <span>⏱</span> Typical trip length
            </span>
            <span className="md:col-span-3 text-slate-800 font-medium">
              {data.tripLength}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Practical Transit Notes Banner */}
      <div className="border border-slate-200 bg-slate-50/70 rounded-lg p-5 mb-8 flex gap-4 items-start">
        <div className="bg-slate-200/60 p-2 rounded text-lg">🚃</div>
        <div>
          <h3 className="text-xs font-bold text-slate-900 mb-1">
            Practical Transit Notes
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {data.transitNotes}
          </p>
        </div>
      </div>

      {/* 6. Taxonomy Footer Strip */}
      <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs font-mono text-slate-500">
        <span>{data.taxonomy}</span>
        <Link
          href="/regions"
          className="text-teal-800 hover:text-teal-900 font-semibold flex items-center gap-1"
        >
          Explore Regional Sectors &rarr;
        </Link>
      </div>
    </div>
  );
}