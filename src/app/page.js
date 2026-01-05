import {
  CozyAccordion,
  CozyAccordionItem,
} from "@/components/cozy/accordion";

export default function Page() {
  return (
    <main className="min-h-screen bg-background-light p-10">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-3xl font-bold text-text-primary">
          Orange Cat FAQ 🐱
        </h1>

        <CozyAccordion>
          <CozyAccordionItem
            value="item-1"
            title="What is CozyCat?"
          >
            CozyCat is a cozy component library built on shadcn/ui.
          </CozyAccordionItem>

          <CozyAccordionItem
            value="item-2"
            title="Why JSX?"
          >
            JSX keeps things simple and approachable.
          </CozyAccordionItem>
        </CozyAccordion>
      </div>
    </main>
  );
}
