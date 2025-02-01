"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Award, Layers } from "lucide-react"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

type TabType = "projects" | "certificates" | "tech-stack"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>("projects")

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      icon: Code2,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: Award,
    },
    {
      id: "tech-stack",
      label: "Tech Stack",
      icon: Layers,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 portrait:pb-20 landscape:pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Portfolio Showcase</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore my journey through projects, certifications, and technical expertise. Each section represents a
              milestone in my continuous learning path.
            </p>
          </motion.div>

          <div className="relative mb-12">
            <div className="bg-zinc-900 rounded-2xl" />

            <div className="relative flex justify-around items-center p-4 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={cn(
                    "flex flex-col items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-zinc-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-zinc-800/50",
                  )}
                >
                  <tab.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {activeTab === "projects" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Project content coming soon...</h3>
                </div>
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Certificate content coming soon...</h3>
                </div>
              </div>
            )}

            {activeTab === "tech-stack" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Tech stack content coming soon...</h3>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Navbar />
    </div>
  )
}

