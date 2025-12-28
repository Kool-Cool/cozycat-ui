// CatAccordion.tsx
import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CatIcon } from "../icons/CatIcon";

export function CatAccordion() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const catState = animating ? "stretch" : open ? "awake" : "sleep";

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full max-w-md mx-auto rounded-xl bg-orange-50 shadow"
      onValueChange={(value) => {
        setAnimating(true);
        setOpen(Boolean(value));
        setTimeout(() => setAnimating(false), 300);
      }}
    >
      <Accordion.Item value="item-1">
        {/* HEADER */}
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <CatIcon state={catState as any} />
              <span className="font-semibold text-orange-700">
                Orange Cat Secrets
              </span>
            </div>

            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              className="text-orange-500"
            >
              ▼
            </motion.span>
          </Accordion.Trigger>
        </Accordion.Header>

        {/* CONTENT */}
        <AnimatePresence initial={false}>
          {open && (
            <Accordion.Content forceMount asChild>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden px-4 pb-4 text-orange-800"
              >
                <p>
                  Orange cats are known for being dramatic, sleepy, and
                  surprisingly affectionate. This one just woke up to tell you a
                  secret.
                </p>
              </motion.div>
            </Accordion.Content>
          )}
        </AnimatePresence>
      </Accordion.Item>
    </Accordion.Root>
  );
}
