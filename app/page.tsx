"use client"

import { motion } from "framer-motion"
import { CatAccordion } from "../ui/components/accordion/CatAccordion"
import { CatIcon } from "../ui/components/icons/CatIcon"


export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex flex-col items-center justify-center px-4">
      
      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center gap-4 mb-4">
          <CatIcon state="sleep" />
          <CatIcon state="awake" />
          <CatIcon state="stretch" />
        </div>

        <h1 className="text-3xl font-bold text-orange-700">
          Orange Cat UI Components 🐈
        </h1>

        <p className="text-orange-600 mt-2">
          An animated accordion inspired by orange cat behavior
        </p>
      </motion.header>

      {/* Accordion Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full flex justify-center"
      >
        <CatAccordion />
      </motion.section>

      {/* Footer Icons */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex gap-6 text-orange-400"
      >
        <motion.span whileHover={{ scale: 1.2, rotate: -10 }}>🐾</motion.span>
        <motion.span whileHover={{ scale: 1.2, rotate: 10 }}>😺</motion.span>
        <motion.span whileHover={{ scale: 1.2, rotate: -10 }}>🍊</motion.span>
      </motion.footer>
    </main>
  )
}
