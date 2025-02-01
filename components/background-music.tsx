"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false) // Start unmuted for autoplay attempt
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      // Set initial volume
      audio.volume = 0.5

      const handleEnded = () => {
        setIsPlaying(false)
        setIsMuted(true)
        if (audio) {
          audio.muted = true
          audio.pause()
        }
      }

      const handlePlay = () => {
        setIsPlaying(true)
        setIsMuted(false)
      }

      const handlePause = () => {
        setIsPlaying(false)
      }

      // Add event listeners
      audio.addEventListener("ended", handleEnded)
      audio.addEventListener("play", handlePlay)
      audio.addEventListener("pause", handlePause)

      // Attempt autoplay
      const attemptAutoplay = async () => {
        try {
          await audio.play()
          setIsPlaying(true)
          setIsMuted(false)
        } catch (error) {
          console.log("Autoplay failed:", error)
          setIsPlaying(false)
          setIsMuted(true)
          audio.muted = true
        }
      }

      attemptAutoplay()

      // Cleanup
      return () => {
        audio.removeEventListener("ended", handleEnded)
        audio.removeEventListener("play", handlePlay)
        audio.removeEventListener("pause", handlePause)
      }
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      try {
        audio.muted = false
        await audio.play()
        setIsPlaying(true)
        setIsMuted(false)
      } catch (error) {
        console.log("Playback failed:", error)
        setIsPlaying(false)
        setIsMuted(true)
        audio.muted = true
      }
    } else {
      audio.muted = true
      audio.pause()
      setIsPlaying(false)
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="https://files.catbox.moe/hbb762.mp3" preload="auto" />
      <button
        onClick={togglePlayback}
        className="fixed bottom-4 right-4 z-50 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors touch-manipulation"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  )
}

