import Image from "next/image";
import { aboutPoints } from "@/lib/data";
import { Button, Section, SectionHeading } from "./ui";

export default function About() {
  return (
    <Section id="about" tone="light" padding="pb-14 pt-8 sm:pb-16 sm:pt-10 lg:flex lg:min-h-[calc(100vh-4.5rem)] lg:items-start lg:pb-12 lg:pt-[6.25rem]">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/facility.jpg"
            alt="Rows of industrial washing machines and conveyor lines on the Arrow factory floor"
            width={600}
            height={800}
            className="aspect-[2/3] w-full rounded-2xl object-cover object-center"
          />
          <Image
            src="/images/about-inspection.jpg"
            alt="Workers inspecting washed denim jeans"
            width={600}
            height={800}
            className="mt-12 aspect-[2/3] w-full rounded-2xl object-cover object-[85%_center]"
          />
        </div>

        <div className="lg:relative lg:-top-2">
          <SectionHeading
            eyebrow="Who we are"
            title="Your trusted|washing partner"
            spacing="mb-4 sm:mb-5"
            leading="leading-[1.32]"
            eyebrowSpacing="mb-7"
            titleClassName="lg:relative lg:-top-2.5"
            text="We are a garment washing and finishing house built for export manufacturers and global brands. Modern machines, skilled technicians and careful planning let us turn raw garments into retail-ready products, season after season."
          />
          <ul className="mb-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {aboutPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base font-medium sm:text-[17px]">
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Button href="#contact">Work with us</Button>
        </div>
      </div>
    </Section>
  );
}
