import { ReactNode } from "react"

export type AccordionPersonality =
  | "orange"
  | "black-cat"
  | "sleepy"

export interface AccordionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  personality?: AccordionPersonality
}
