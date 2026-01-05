"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/**
 * CozyAccordion
 * Wrapper around shadcn Accordion with CozyCat defaults
 */
export function CozyAccordion({ children, className }) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("space-y-3", className)}
    >
      {children}
    </Accordion>
  );
}

/**
 * CozyAccordionItem
 * Opinionated Accordion item styled with Orange Cat theme
 */
export function CozyAccordionItem({ value, title, children }) {
  return (
    <AccordionItem
      value={value}
      className="rounded-lg border border-borderSoft bg-surface"
    >
      <AccordionTrigger
        className={cn(
          "px-4 py-3 text-left font-semibold",
          "text-text-primary",
          "hover:bg-background-subtle",
          "data-[state=open]:bg-background-subtle"
        )}
      >
        {title}
      </AccordionTrigger>

      <AccordionContent className="px-4 pb-4 text-text-secondary">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
