// CatIcon.tsx
import { motion } from "framer-motion"

export function CatIcon({ state }: { state: "sleep" | "stretch" | "awake" }) {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 64 64"
      fill="none"
      className="text-orange-400"
      animate={state}
      variants={{
        sleep: {
          scale: 1,
          rotate: 0,
          y: 0,
        },
        stretch: {
          scale: 1.1,
          rotate: -5,
          y: -4,
        },
        awake: {
          scale: 1,
          rotate: 0,
          y: -2,
        },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* head */}
      <circle cx="32" cy="34" r="14" fill="currentColor" />
      {/* ears */}
      <polygon points="22,18 26,8 30,18" fill="currentColor" />
      <polygon points="42,18 38,8 34,18" fill="currentColor" />
      {/* eyes */}
      {state === "sleep" ? (
        <>
          <line x1="26" y1="34" x2="30" y2="34" stroke="black" strokeWidth="2" />
          <line x1="34" y1="34" x2="38" y2="34" stroke="black" strokeWidth="2" />
        </>
      ) : (
        <>
          <circle cx="28" cy="34" r="2" fill="black" />
          <circle cx="36" cy="34" r="2" fill="black" />
        </>
      )}
    </motion.svg>
  )
}
