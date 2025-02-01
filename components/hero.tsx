"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedText } from "./animated-text"

const WavingHand = () => {
  return (
    <motion.span
      className="inline-block"
      animate={{
        rotate: [0, 14, -8, 14, -4, 10, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      👋
    </motion.span>
  )
}

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative inline-block"
        >
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 blur-md opacity-50 animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300" />
          <div className="relative">
            <Image
              src="https://i.ibb.co.com/Kh2VFL3/IMG-20241205-WA0742.jpg"
              alt="My Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-black object-cover"
              priority
            />
          </div>
        </motion.div>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-yellow-400 text-xl mb-2"
        >
          Hello World, I&apos;m
        </motion.p>
        
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-4"
        >
          Raol Mukarrozi 
        </motion.h1>
        
        <div className="text-3xl font-semibold mb-4 h-12 flex items-center justify-center">
          <AnimatedText />
        </div>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl"
        >
          Welcome to My personal website. <WavingHand />
        </motion.p>
      </div>
    </section>
  )
}

