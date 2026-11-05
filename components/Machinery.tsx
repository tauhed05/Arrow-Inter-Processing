import Image from "next/image";
import { machines } from "@/lib/data";
import { Section, SectionHeading } from "./ui";

function MachineCard({ name, type, text, image }: (typeof machines)[number]) {
  return (
    <article className="overflow-hidden rounded-2xl border border-primary/10 bg-white">
      <Image src={image} alt={`${name}, ${type}`} width={480} height={360} className="aspect-[4/3] w-full bg-white object-contain p-3" />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{type}</p>
        <h3 className="mt-1 text-xl text-primary">{name}</h3>
        <p className="mt-2 text-sm text-ink/70">{text}</p>
      </div>
    </article>
  );
}

export default function Machinery() {
  return (
    <Section id="machinery" padding="pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
      <SectionHeading
        spacing="mb-5 sm:mb-6"
        eyebrow="Our machinery"
        title="Modern machines,|consistent results"
      />
      <div className="reveal-children grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {machines.map((m, i) => (
          <MachineCard key={i} {...m} />
        ))}
        <a
          href="#contact"
          className="flex flex-col justify-center rounded-2xl bg-primary p-8 text-white transition-colors hover:bg-[#245a42]"
        >
          <h3 className="text-3xl leading-[1.05]">Need capacity details?</h3>
          <p className="mt-4 text-base leading-7 text-white/80">
            Ask us about machine counts, load sizes and lead times for your order.
          </p>
          <span className="mt-6 font-display text-xl font-bold uppercase tracking-wider">Contact us →</span>
        </a>
      </div>
    </Section>
  );
}
