"use client"

import { FC, useState } from "react"
import { AccordionProps } from "./accordion.types"
import { accordionPersonalityMap } from "./accordion.variants"

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  personality = "orange",
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen)

  const styles = accordionPersonalityMap[personality]

  return (
    <div className="cc-accordion w-full max-w-md">
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`
          relative w-full px-4 py-3 rounded-t-xl
          font-semibold flex justify-center items-center
          select-none transition-transform
          ${styles.header}
          ${open ? styles.openAnimation : ""}
        `}
      >
        {/* Cat Ears (optional later via variant) */}
        {personality === "orange" && (
          <>
            <span className="absolute -top-3 left-6 w-4 h-4 bg-orange-400 rotate-45 rounded-sm" />
            <span className="absolute -top-3 right-6 w-4 h-4 bg-orange-400 rotate-45 rounded-sm" />
          </>
        )}

        🐈 {title}
      </button>

      {/* Body */}
      <div
        className={`
          origin-top overflow-hidden rounded-b-xl
          transition-all duration-500
          ${styles.body}
          ${open ? `max-h-96 p-4 ${styles.stretchAnimation}` : "max-h-0 p-0"}
        `}
      >
        <div className="text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
