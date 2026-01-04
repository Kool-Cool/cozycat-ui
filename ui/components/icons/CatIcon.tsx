import { motion } from "framer-motion"

type CatState = "sleep" | "stretch" | "awake"

export function CatIcon({ state }: { state: CatState }) {
  return (
    <motion.svg
      width="72"
      height="48"
      viewBox="0 0 144 96"
      className="text-orange-400"
      fill="currentColor"
      animate={state}
      variants={{
        sleep: {
          scaleX: 1,
          scaleY: 1,
          y: 0,
        },
        stretch: {
          scaleX: 1.1,
          scaleY: 0.9,
          y: -6,
        },
        awake: {
          scaleX: 1,
          scaleY: 1,
          y: -2,
        },
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      {/* Body */}
      <ellipse cx="76" cy="58" rx="42" ry="22" />

      {/* Tail */}
      <motion.path
        d="M118 56 C138 60, 138 80, 118 82"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        animate={{
          rotate: state === "awake" ? 10 : 0,
          originX: "118px",
          originY: "56px",
        }}
      />

      {/* Head */}
      <circle cx="36" cy="48" r="18" />

      {/* Ears */}
      <polygon points="24,30 30,14 36,30" />
      <polygon points="36,30 42,14 48,30" />

      {/* Face */}
      {state === "sleep" && (
        <>
          {/* closed eyes */}
          <path d="M30 48 h8" stroke="black" strokeWidth="2" />
          <path d="M40 48 h8" stroke="black" strokeWidth="2" />
          {/* zzz */}
          <text x="54" y="26" fontSize="10" fill="black">
            zZ
          </text>
        </>
      )}

      {state === "awake" && (
        <>
          {/* open eyes */}
          <circle cx="32" cy="48" r="2" fill="black" />
          <circle cx="42" cy="48" r="2" fill="black" />
        </>
      )}

      {state === "stretch" && (
        <>
          {/* sleepy eyes */}
          <path d="M30 48 q4 4 8 0" stroke="black" strokeWidth="2" fill="none" />
          <path d="M40 48 q4 4 8 0" stroke="black" strokeWidth="2" fill="none" />
        </>
      )}
    </motion.svg>
  )
}
