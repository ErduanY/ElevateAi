import { Triangle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-[#0B0F1A] text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <Triangle className="w-8 h-8 fill-current" />
          <span className="text-3xl font-bold">ElevateAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-lg font-semibold">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-lg font-semibold">
            About
          </Link>
        </nav>

        <Link
          to="/input-form"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
        >
          Get started
        </Link>
      </div>
    </header>
  )
}

export default Header

