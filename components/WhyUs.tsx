import { whyUs } from "@/lib/data";
import { Section, SectionHeading } from "./ui";

export default function WhyUs() {
  return (
    <Section>
      <SectionHeading eyebrow="Why choose us" title="Eco-efficient washing,|precision finishing" />
      <div className="reveal-children grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-primary/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-light text-primary">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                aria-hidden
              >
                <path d={item.icon} />
              </svg>
            </span>
            <h3 className="mt-5 text-2xl text-primary">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
