export default function Header() {
  return (
    <>
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
    <div className="border-b border-gray-200 pb-2 mb-4"></div>
    
    </>
  );
}

