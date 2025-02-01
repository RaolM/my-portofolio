import { Github } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-black py-6 portrait:block landscape:hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-yellow-400 text-xl font-semibold">
            Raol Mukarrozi
          </h1>
          <Link 
            href="https://github.com/RaolM" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub Profile</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

