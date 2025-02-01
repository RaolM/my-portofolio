"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  icon: string
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'tech' | 'tools'>('tech')
  
  const techStack: Skill[] = [
    { name: "HTML", icon: "https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284975.png?f=webp&w=512" },
    { name: "CSS", icon: "https://cdn.iconscout.com/icon/free/png-512/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png?f=webp&w=512" },
    { name: "PHP", icon: "https://cdn.iconscout.com/icon/free/png-512/free-php-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175127.png?f=webp&w=512" },
    { name: "JavaScript", icon: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=512" },
    { name: "Laravel", icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/laravel-9305885-7694084.png?f=webp&w=512" },
    { name: "Vue.js", icon: "https://cdn.iconscout.com/icon/free/png-512/free-vuejs-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175070.png?f=webp&w=512" },
    { name: "Node.js", icon: "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226034.png?f=webp&w=512" },
    { name: "Bootstrap", icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
    { name: "React.js", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Tailwind", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  ]

  const tools: Skill[] = [
    { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "NPM", icon: "https://cdn.worldvectorlogo.com/logos/npm.svg" },
    { name: "MySQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg" },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 portrait:pb-20 landscape:pt-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-zinc-900/50 rounded-lg p-6 mb-8"
            {...fadeInUp}
          >
            <motion.h1
              className="text-2xl font-bold mb-6 inline-block relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </motion.h1>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 blur-md opacity-50 animate-pulse" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300" />
                <div className="relative w-32 h-32">
                  <Image
                    src="https://i.ibb.co.com/Kh2VFL3/IMG-20241205-WA0742.jpg"
                    alt="My Profile"
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-black object-cover"
                  />
                </div>
              </motion.div>
              <div className="flex-1">
                <p className="text-gray-300 mb-4">
                  Hi everyone! I'm a passionate web developer with expertise in both front-end and back-end development. 
                  With several years of experience in web development, I specialize in creating responsive and user-friendly applications.
                </p>
                <p className="text-gray-300">
                  I believe in writing clean, maintainable code and creating intuitive user experiences. 
                  My goal is to build websites that not only function flawlessly but also provide an engaging user experience.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/50 rounded-lg p-6 mb-8"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 inline-block relative">
              Skills
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h2>
            
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab('tech')}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  activeTab === 'tech' 
                    ? "bg-yellow-400/20 text-yellow-400" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                Tech Stack
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  activeTab === 'tools' 
                    ? "bg-yellow-400/20 text-yellow-400" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                Tools
              </button>
            </div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: { staggerChildren: 0.05 }
                }
              }}
            >
              {(activeTab === 'tech' ? techStack : tools).map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-yellow-400 hover:border-yellow-400/50 transition-colors bg-zinc-900/50"
                  variants={fadeInUp}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/50 rounded-lg p-6"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 inline-block relative">
              Contact Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-yellow-400 hover:underline">
                    your.email@example.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-yellow-400 hover:underline"
                  >
                    linkedin.com/in/your-profile
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Your City, Country</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Available for</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Freelance Projects</li>
                    <li>Full-time Positions</li>
                    <li>Collaborations</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Navbar />
    </div>
  )
}

