import Image from "next/image";
import { washes } from "@/lib/data";
import { Section, SectionHeading } from "./ui";

export default function WashLibrary() {
  return (
    <Section id="wash-library" tone="light" padding="pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 sm:mb-10">
        <SectionHeading
          eyebrow="Wash library"
          title="Signature wash looks"
          text="A few of the standard shades we run every week. We also develop custom looks from your references."
          spacing="mb-0"
        />
        <a
          href="#contact"
          className="font-display text-lg font-bold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
        >
          Send us your reference →
        </a>
      </div>

      <div className="reveal-children grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {washes.map((w) => (
          <div key={w.name} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl shadow-md shadow-primary/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/20">
              {w.image ? (
                <Image
                  src={w.image}
                  alt={`${w.name} sample`}
                  fill
                  sizes="(min-width: 1024px) 200px, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-full" style={{ background: w.background }} />
              )}
            </div>
            <p className="mt-4 text-center font-display text-xl font-bold uppercase tracking-wide text-primary">
              {w.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
