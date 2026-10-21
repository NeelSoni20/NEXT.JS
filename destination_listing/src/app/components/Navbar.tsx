
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between w-full py-4 pr-8 pl-0 bg-white border-b'>
      
      {/* Left side: Logo + Nav Links */}
      <div className="flex items-center space-x-10"> 
        <Link className='flex text-xl font-bold pl-4' href="/">
          Wayfinders
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link className='hover:text-green-800' href="/destination" >Destinations</Link>
          <Link className='hover:text-green-800' href="/">Regions</Link>
          <Link className='hover:text-green-800' href="/">About</Link>
        </div>
      </div>

      {/* Right side: Plan Trip & Login */}
      <div className='flex items-center space-x-6'>
        <Link className='hover:text-blue-600' href="/">Plan Trip</Link>
        <Link className='hover:text-blue-600' href="/ ">Login</Link>
      </div>

    </nav>
  );
}
