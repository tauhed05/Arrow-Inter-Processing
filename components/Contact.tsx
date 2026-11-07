import Image from "next/image";
import { company } from "@/lib/data";
import EmailLink from "./EmailLink";
import PhoneLink from "./PhoneLink";
import { Section, SectionHeading } from "./ui";

export default function Contact() {
  const facts = [
    { label: "Factory", value: company.address },
    { label: "Phone", value: company.phone, phone: true },
    { label: "Email", value: company.email, email: true },
    { label: "Hours", value: company.hours },
  ];

  return (
    <Section id="contact" padding="pb-14 pt-10 sm:pb-16 sm:pt-12 lg:flex lg:min-h-[calc(100vh-4.5rem)] lg:items-center lg:pb-10 lg:pt-[4.25rem]">
      <div className="grid gap-10 lg:grid-cols-[auto_auto_auto] lg:justify-between lg:gap-x-12">
        <div>
          <SectionHeading
            eyebrow="Get started"
            spacing="mb-5 sm:mb-6"
            leading="leading-[0.96]"
            eyebrowSpacing="mb-3"
            title="Let's talk about|your order"
            text="Send us your wash reference, quantity and delivery date. Our team replies within|one working day."
          />
          <dl className="divide-y divide-primary/10 border-y border-primary/10">
            {facts.map((f) => (
              <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[110px_1fr] sm:items-baseline sm:gap-4">
                <dt className="text-sm font-bold uppercase leading-6 tracking-wider text-accent">{f.label}</dt>
                <dd className="break-words text-sm font-normal leading-6">
                  {f.phone ? (
                    <PhoneLink phone={company.phone} className="underline-offset-4 hover:text-primary hover:underline" />
                  ) : f.email ? (
                    <EmailLink
                      email={company.email}
                      subject="Wash order enquiry"
                      className="underline-offset-4 hover:text-primary hover:underline"
                    />
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* A line (two thirds of the section's height), centred between the details and the WhatsApp card. */}
        <div aria-hidden className="hidden self-stretch lg:flex lg:items-center">
          <div className="h-2/3 w-0.5 rounded-full bg-primary/25" />
        </div>

        {/* Visitors scan the code to chat on WhatsApp, with no form to fill in. */}
        {/* "Need help fast?" card: heading, the QR code, then a button for phone visitors. */}
        <div className="w-full max-w-[310px] justify-self-center rounded-2xl border-t-4 lg:w-[310px] lg:self-center border-primary bg-white p-6 text-center shadow-lg shadow-primary/10">
          <h3 className="font-body text-2xl font-extrabold normal-case leading-tight tracking-tight text-ink">
            Need Contact fast?
          </h3>
          <p className="mt-1 text-base leading-6 text-ink/70">
            Scan to message support on
            <br />
            WhatsApp
          </p>
          <Image
            src="/images/whatsapp-qr-code.png"
            alt="WhatsApp QR code. Scan it to chat with Arrow Inter Processing."
            width={425}
            height={425}
            className="mx-auto mt-2 -mb-2 h-auto w-full max-w-[190px]"
          />
          <p className="text-sm text-ink/70">or</p>
          {/* A phone cannot scan its own screen, so this button is how phone visitors start the chat. */}
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#245a42]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
