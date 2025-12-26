import { Accordion } from "@/ui/components/accordion"
import "@/ui/styles/index.css"
import OrangeCatAccordion from "@/ui/components/accordion/OrangeCatAccordion"

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="space-y-6 w-full max-w-md">
        <Accordion
          title="The Big Stretch"
          personality="orange"
        >
          <p>
            The orange cat wakes up, stretches way too far,
            wobbles a bit, and somehow acts like it meant to do that.
          </p>
        </Accordion>

        <Accordion
          title="Silent Judgment"
          personality="black-cat"
        >
          <p>
            This accordion opens quietly and judges your
            life choices without saying a word.
          </p>
        </Accordion>

        <Accordion
          title="Nap Time"
          personality="sleepy"
        >
          <p>
            It might open… or it might just stay cozy.
            Nobody knows.
          </p>
        </Accordion>

      </div>
    </main>
  )
}
