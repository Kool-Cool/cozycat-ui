"use client"

import { FC, ReactNode, useState } from "react"

interface OrangeCatAccordionProps {
  title: string
  children: ReactNode
}

const OrangeCatAccordion: FC<OrangeCatAccordionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`relative w-full bg-orange-400 text-white px-4 py-3
          rounded-t-xl font-semibold flex justify-center items-center
          select-none transition-transform
          ${isOpen ? "cat-wobble" : ""}`}
      >
        {/* Ears */}
        <span className="absolute -top-3 left-6 w-4 h-4 bg-orange-400 rotate-45 rounded-sm" />
        <span className="absolute -top-3 right-6 w-4 h-4 bg-orange-400 rotate-45 rounded-sm" />

        🐈 {title}
      </button>

      {/* Body */}
      <div
        className={`
          origin-top overflow-hidden bg-orange-100 text-orange-900
          rounded-b-xl transition-all duration-500
          ${isOpen ? "max-h-96 p-4 cat-stretch" : "max-h-0 p-0"}
        `}
      >
        <div className="text-sm leading-relaxed">
          {children}
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        .cat-stretch {
          animation: catStretch 0.6s cubic-bezier(.34,1.56,.64,1);
        }

        .cat-wobble {
          animation: catWobble 0.4s ease-in-out;
        }

        @keyframes catStretch {
          0% {
            transform: scaleY(0.4);
            opacity: 0;
          }
          60% {
            transform: scaleY(1.05);
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes catWobble {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
          75% { transform: rotate(1deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  )
}

export default OrangeCatAccordion
