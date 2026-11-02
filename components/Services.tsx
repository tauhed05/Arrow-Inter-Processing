import Image from "next/image";
import { services } from "@/lib/data";
import { Section, SectionHeading } from "./ui";

function ServiceCard({
  id,
  title,
  text,
  image,
  tags,
  className = "",
}: (typeof services)[number] & { className?: string }) {
  return (
    <article
      id={id}
      className={`group flex scroll-mt-24 flex-col target:ring-2 target:ring-accent overflow-hidden rounded-2xl border border-primary/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${className}`}
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt=""
          width={640}
          height={400}
          className="aspect-[11/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl text-primary">{title}</h3>
        {/* min height = 3 lines, so tags start on the same line in every card */}
        <p className="mt-2 min-h-[4.875em] text-sm leading-relaxed text-ink/70 sm:text-base">{text}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="rounded-full bg-light px-3 py-1 text-xs font-medium text-accent">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// Every card is the same size. With 5 cards the last two are centred under the first three
// (large screens), and a single last card is centred on its own row (tablets).
function spanFor(index: number, total: number) {
  const lastRowIsShort = total % 3 === 2 && index >= total - 2;
  if (!lastRowIsShort) return "lg:col-span-2";
  if (index === total - 2) return "lg:col-span-2 lg:col-start-2";
  return "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-2 lg:mx-0 lg:w-auto";
}

export default function Services() {
  return (
    <Section id="services" padding="pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
      <SectionHeading
        eyebrow="What we do"
        title="Complete washing solutions"
        spacing="mb-5 sm:mb-7"
      />
      <div className="reveal-children grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} className={spanFor(i, services.length)} />
        ))}
      </div>
    </Section>
  );
}
