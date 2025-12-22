"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded font-bold transition-transform",
        variant === "primary" ? "bg-pink-300 text-white hover:scale-105" : "bg-gray-200 text-black hover:scale-105",
        className
      )}
      {...props}
    />
  )
}
