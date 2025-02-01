"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const words = ["Full-Stack Engineer", "Web Developer", "UI/UX Enthusiast"]

export function AnimatedText() {
  const [currentWord, setCurrentWord] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === words[currentWord]) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1500)
        return
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentWord((prev) => (prev + 1) % words.length)
        return
      }

      const nextText = isDeleting
        ? words[currentWord].substring(0, currentText.length - 1)
        : words[currentWord].substring(0, currentText.length + 1)

      setCurrentText(nextText)
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentWord, isDeleting])

  return (
    <div className="h-8 overflow-hidden">
      <motion.div
        key={currentWord}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-yellow-400 flex items-center"
      >
        {currentText}
        <span className="w-1 h-8 bg-yellow-400 ml-1 animate-blink"></span>
      </motion.div>
    </div>
  )
}

