import Image from "next/image";
import { stats } from "@/lib/data";
import { Button, Container } from "./ui";

export default function Hero() {
  return (
    <section id="home">
      <div className="relative isolate overflow-hidden bg-[#1b4332] text-white">
        <Image
          src="/images/facility.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 scale-105 object-cover blur-sm"
        />
        <div className="absolute inset-0 -z-10 bg-[#1b4332]/85" />

        <Container className="grid items-center gap-12 pb-20 pt-10 sm:pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-16">
          <div>
            <p className="rise rise-1 mb-5 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]">
              Garment washing · dyeing · finishing
            </p>
            <h1 className="rise rise-2 max-w-3xl text-4xl sm:text-5xl lg:text-[3.75rem]">
              Premium
              <br />
              washing.
              <span className="block text-[0.8em] text-[#9ad4b6]">Precise finish.</span>
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-[17px]">
              Arrow Inter Processing gives denim and woven garments their final look. Our wet and dry lines deliver
              consistent shades, soft hand-feel and on-time shipments for brands that care about their quality.
            </p>
            <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
              <Button href="#contact" variant="light">
                Request a Sample
              </Button>
              <Button href="#services" variant="outline">
                Our Services
              </Button>
            </div>
          </div>

          <div className="rise rise-3 relative mx-auto w-full max-w-[600px] lg:ml-auto lg:mr-0">
            <div className="absolute -left-6 -top-6 hidden h-40 w-48 rounded-2xl bg-white/10 sm:block" aria-hidden />
            <Image
              src="/images/about-inspection.jpg"
              alt="Workers inspecting washed denim jeans"
              width={900}
              height={675}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover object-[70%_center]"
            />
            <div className="absolute -bottom-8 left-6 rounded-lg bg-accent px-6 py-4 shadow-lg sm:left-8">
              <strong className="block font-display text-3xl font-bold leading-none">10+</strong>
              <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.14em]">
                Years of washing expertise
              </span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="relative z-10 -mt-10 sm:-mt-12">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#6f9e9f] shadow-lg shadow-primary/20 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-accent p-5 sm:p-7">
              <dt className="order-2 mt-1 text-sm text-white/90">{s.label}</dt>
              <dd className="order-1 font-display text-2xl font-bold text-white sm:text-4xl">
                {s.value}
                <small className="ml-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 sm:text-sm">
                  {s.unit}
                </small>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
