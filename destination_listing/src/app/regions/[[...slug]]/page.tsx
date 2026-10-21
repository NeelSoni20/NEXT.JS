import Link from "next/link";

export default async function RegionalSlugPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // If slug is undefined or empty, it means we are at the root /regions page
  const isRoot = !slug || slug.length === 0;
  
  // Example path representation
  const currentPath = isRoot ? "/regions" : `/regions/${slug.join("/")}`;
  const resolutionLevel = isRoot ? "ContinentalDivisionRegistry::Root" : `SubDivision::${slug[slug.length - 1].toUpperCase()}`;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 text-slate-800">
      {/* Breadcrumbs */}
      <p className="text-xs font-mono text-slate-400 mb-6">
        catalog / <span className="text-slate-700">Regions</span>
        {!isRoot && slug.map((s, i) => <span key={s}> / {s}</span>)}
      </p>

      {/* Header Section */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">INDEX ROOT</span>
            <span>• LEVEL {isRoot ? "0" : slug.length}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {isRoot ? "Geographic Regions" : `Sector: ${slug[slug.length - 1]}`}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {isRoot
              ? "Explore global destinations cataloged by continent, subcontinent, and terrain systems. Select a continental division to drill down into nested jurisdictions."
              : `Viewing nested taxonomic records for path vector: ${currentPath}`}
          </p>
        </div>

        <div className="flex gap-4 text-right font-mono text-xs">
          <div className="border border-slate-200 bg-slate-50 px-3 py-1.5 rounded">
            <span className="text-slate-400 block">SETTLEMENTS</span>
            <span className="font-bold text-slate-800">70 Indexed</span>
          </div>
          <div className="border border-slate-200 bg-slate-50 px-3 py-1.5 rounded">
            <span className="text-slate-400 block">JURISDICTIONS</span>
            <span className="font-bold text-slate-800">4 Divisions</span>
          </div>
        </div>
      </div>

      {/* Route Architecture Diagnostic Banner (Matching your screenshot) */}
      <div className="border border-slate-200 bg-slate-50/70 rounded-lg p-4 mb-8 text-xs font-mono text-slate-600 flex justify-between items-center">
        <div>
          <span className="text-slate-400">Route Architecture </span>
          <span className="bg-teal-50 text-teal-800 border border-teal-200 px-1.5 py-0.5 rounded font-semibold">
            optional catch-all
          </span>
          <p className="text-slate-500 mt-1">
            Optional catch-all route pattern: <code className="text-teal-700">/regions/[[...slug]]</code> — currently at root segment level.
          </p>
        </div>
        <div className="text-right text-[11px] text-slate-500">
          <p>PARAMS: slug: {isRoot ? "undefined" : JSON.stringify(slug)}</p>
          <p>RESOLUTION: {resolutionLevel}</p>
        </div>
      </div>

      {/* Continental Divisions Grid (Sample Cards) */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold text-slate-900">Continental Divisions <span className="text-xs font-normal text-slate-400">4 systems</span></h2>
        <span className="text-xs font-mono text-slate-400">SORT: CANONICAL GEODESIC</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Card 1: East Asia */}
        <Link
          href="/regions/asia/east-asia"
          className="border border-slate-200 hover:border-teal-700 bg-white rounded-lg p-5 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono text-slate-600">DIV-EA • PACIFIC RIM</span>
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">18 settlements</span>
            </div>
            <div className="border border-slate-200 bg-slate-100 h-28 rounded mb-3 flex items-center justify-center text-xs font-mono text-slate-400">
              [Terrain Map Preview: Island Arcs &amp; Basins]
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
              East Asia
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Sub-regions: Japan, South Korea, Taiwan • 18 cataloged settlements
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center text-xs font-mono text-slate-500">
            <span>JURISDICTION CODE 01</span>
            <span className="text-teal-800 font-semibold">Browse East Asia &rarr;</span>
          </div>
        </Link>

        {/* Card 2: Southern Europe */}
        <Link
          href="/regions/europe/southern-europe"
          className="border border-slate-200 hover:border-teal-700 bg-white rounded-lg p-5 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono text-slate-600">DIV-SE • MEDITERRANEAN BASIN</span>
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">24 settlements</span>
            </div>
            <div className="border border-slate-200 bg-slate-100 h-28 rounded mb-3 flex items-center justify-center text-xs font-mono text-slate-400">
              [Terrain Map Preview: Karst &amp; Valleys]
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
              Southern Europe
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Sub-regions: Italy, Spain, Greece, Portugal • 24 cataloged settlements
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center text-xs font-mono text-slate-500">
            <span>JURISDICTION CODE 02</span>
            <span className="text-teal-800 font-semibold">Browse Southern Europe &rarr;</span>
          </div>
        </Link>
      </div>

      {/* Index Status Footer bar */}
      <div className="border-t border-slate-200 pt-4 flex flex-wrap justify-between items-center text-xs font-mono text-slate-500">
        <div>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
          <span>INDEX STATUS: SYNCED (EP-2025.04.1)</span>
        </div>
        <div className="flex gap-4">
          <span>PROJECTION: EPSG:4326</span>
          <span>•</span>
          <span>GRANULARITY: SUBREGIONAL</span>
        </div>
      </div>
    </div>
  );
}