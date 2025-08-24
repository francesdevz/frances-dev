"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import logo from '../../../../public/favicon.ico'

interface LoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export default function LoadingScreen({ onComplete, duration = 3000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        <div className="w-24 h-24">
          <Image
            src={logo}
            alt="Portfolio Logo"
            width={96}
            height={96}
            className="w-full h-full object-contain filter invert"
            style={{
              animation: "transform-logo 2s ease-in-out infinite",
            }}
          />
        </div>
        <div className="absolute inset-0 w-24 h-24 border-2 border-transparent border-t-white rounded-full animate-spin opacity-40"></div>
        <div
          className="absolute inset-2 w-20 h-20 border border-transparent border-r-white rounded-full animate-spin opacity-30"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
        <div
          className="absolute inset-4 w-16 h-16 border border-transparent border-b-white rounded-full animate-spin opacity-20"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes transform-logo {
          0% { 
            transform: scale(1) rotate(0deg);
          }
          25% { 
            transform: scale(1.1) rotate(90deg);
          }
          50% { 
            transform: scale(0.9) rotate(180deg);
          }
          75% { 
            transform: scale(1.05) rotate(270deg);
          }
          100% { 
            transform: scale(1) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
