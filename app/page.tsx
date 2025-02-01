"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="container mx-auto px-4 portrait:pb-16 landscape:pt-16">
          <Hero />
        </main>
        <Navbar />
      </div>
    </ThemeProvider>
  )
}

