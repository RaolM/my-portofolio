"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 right-0 bg-black py-4 sm:py-2 landscape:top-0 portrait:bottom-0 z-50">
      <div className="container mx-auto px-4 sm:px-2">
        <div className="portrait:flex portrait:justify-around portrait:items-center">
          <div className="hidden landscape:flex landscape:justify-center landscape:items-center landscape:w-full">
            <div className="flex landscape:justify-between landscape:items-center landscape:w-full landscape:backdrop-blur-md landscape:bg-black/70 landscape:rounded-full landscape:px-6 landscape:py-2">
              <span className="text-yellow-400 text-xl font-semibold">Raol Mukarrozi</span>
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-gray-300 hover:text-white text-sm font-medium relative px-2 py-1 transition-colors duration-200",
                      pathname === item.href &&
                        "text-white after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-yellow-400",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="https://github.com/RaolM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="landscape:hidden flex justify-around items-center w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-white text-base font-medium relative px-4 py-2",
                  pathname === item.href && "text-yellow-400",
                )}
              >
                {item.name}
                {pathname === item.href && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

