import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto px-6 py-6">
            
            <p className=" left-7 text-gray-600">© 2025 Wayfinder Spatial Index. All rights reserved.</p>
            <div className="flex gap-2 text-gray-600 " >
                <Link href="/">Index</Link>
                <Link href="/">Cartography</Link>
                <Link href="/">Data Sources</Link>
                <Link href="/">Privacy policy</Link>
            </div>
        </div>

    </footer>
  )
}

export default Footer
