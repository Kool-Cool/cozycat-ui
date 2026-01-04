import { AccordionPersonality } from "./accordion.types"

export const accordionPersonalityMap: Record<
  AccordionPersonality,
  {
    header: string
    body: string
    openAnimation: string
    stretchAnimation: string
  }
> = {
  orange: {
    header: "bg-orange-400 text-white",
    body: "bg-orange-100 text-orange-900",
    openAnimation: "cc-animate-orange-wobble",
    stretchAnimation: "cc-animate-orange-stretch",
  },

  "black-cat": {
    header: "bg-gray-900 text-white",
    body: "bg-gray-800 text-gray-100",
    openAnimation: "",
    stretchAnimation: "",
  },

  sleepy: {
    header: "bg-amber-200 text-amber-900",
    body: "bg-amber-50 text-amber-900",
    openAnimation: "",
    stretchAnimation: "",
  },
}
