import { sustainability } from "@/lib/data";
import { Section, SectionHeading } from "./ui";

export default function Sustainability() {
  return (
    <Section id="sustainability" tone="primary" padding="pb-14 pt-10 sm:pb-16 sm:pt-12 lg:flex lg:min-h-[calc(100vh-4rem)] lg:pb-10 lg:pt-[4.25rem]">
      <div className="grid gap-10 lg:h-full lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:self-center">
          <SectionHeading
            inverse
            eyebrow="Sustainability"
            title="Cleaner washing for|a better tomorrow"
            text="We believe premium quality and responsible production go together. Every process we run is designed to save water, energy and chemicals."
          />
          <p className="border-l-4 border-accent py-1 pl-5 font-display text-xl font-bold uppercase leading-tight sm:text-2xl">
            Less water. Less waste. The same premium finish.
          </p>
        </div>

        <div className="reveal-children grid gap-5 sm:grid-cols-2 lg:grid-rows-2">
          {sustainability.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/15 bg-[#3d7860] p-6 sm:p-7 lg:flex lg:flex-col lg:justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
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
                  <path d={f.icon} />
                </svg>
              </span>
              <h3 className="mt-4 text-2xl">{f.title}</h3>
              <p className="mt-2.5 text-base leading-7 text-white/80">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
