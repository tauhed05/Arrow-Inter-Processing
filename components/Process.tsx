import { steps } from "@/lib/data";
import { Section, SectionHeading } from "./ui";

export default function Process() {
  return (
    <Section id="process" tone="light" padding="pb-14 pt-12 sm:pb-16 sm:pt-12 lg:pb-16 lg:pt-14">
      <SectionHeading
        spacing="mb-3 sm:mb-4"
        eyebrow="Our process"
        title="From raw garment|to retail ready"
        text="Six controlled stages, tracked lot by lot, so you always know where your order stands."
      />
      <div className="overflow-hidden rounded-2xl border border-primary/15">
      <ol className="reveal-children grid gap-px bg-primary/15 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-paper p-5">
            <span className="block font-display text-5xl font-bold leading-none text-accent/40 sm:text-4xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-2xl text-ink">{s.title}</h3>
            <p className="mt-1 text-sm leading-6 text-ink/70 sm:text-[15px]">{s.text}</p>
          </li>
        ))}
      </ol>
      </div>
    </Section>
  );
}
