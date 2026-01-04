

import AnimatedAccordion from "@/ui/components/accordion/AnimatedAccordion";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>🐾 Orange Cat Accordion Demo</h1>

      <AnimatedAccordion title="About the Orange Cat">
        <p>
          The Orange Cat UI theme blends playfulness and warmth. When you open this
          accordion, the cat pops up to trip the yarn ball — a delightful way to
          show hidden content.
        </p>
        <p>
          The yarn now lives in the top-right corner and scrolls naturally as you
          explore the content below.
        </p>
      </AnimatedAccordion>

      <AnimatedAccordion title="Our Yarn Philosophy">
        <p>
          The yarn represents creativity — always rolling, always connecting one
          idea to the next.
        </p>
      </AnimatedAccordion>
    </main>
  );
}
