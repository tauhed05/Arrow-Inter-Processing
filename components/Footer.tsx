import type { ReactNode } from "react";
import { company, navLinks, services } from "@/lib/data";
import { Logo } from "./Header";
import EmailLink from "./EmailLink";
import PhoneLink from "./PhoneLink";
import ScrollLink from "./ScrollLink";
import { Container } from "./ui";

// Every column starts with a 48px header row (logo or heading, centred in it) and its content
// starts on the same line below, so the columns line up across.
const headerRow = "flex h-12 items-center";
const contentTop = "mt-3 leading-7";

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className={`${headerRow} relative top-1.5 text-xs font-black uppercase tracking-[0.18em] text-white`}>{title}</h4>
      <ul className={`${contentTop} text-sm`}>{children}</ul>
    </div>
  );
}

function ContactItem({ icon, className = "", children }: { icon: string; className?: string; children: ReactNode }) {
  return (
    <li className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 flex-none text-[#9ad4b6]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d={icon} />
      </svg>
      {children}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B3D0B] pt-14 text-white/75">
      <Container>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_auto]">
          {/* The whole logo + description block sits 18px lower so the logo's top edge is level with the headings' tops. */}
          <div className="lg:mt-[18px]">
            <div className={headerRow}>
              <Logo onDark />
            </div>
            <p className={`${contentTop} max-w-[17rem] text-base text-[#c6d9ce]`}>
              Arrow Inter Processing provides
              <br />
              everything a garment needs
              <br />
              after sewing, under one roof and
              <br />
              one quality standard.
            </p>
          </div>
          <FooterList title="Company">
            {navLinks
              .map((l) => (
                <li key={l.href}>
                  <ScrollLink to={l.href} className="hover:text-white">
                    {l.label}
                  </ScrollLink>
                </li>
              ))}
          </FooterList>
          <FooterList title="Services">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <ScrollLink to={s.id} className="hover:text-white">
                  {s.title}
                </ScrollLink>
              </li>
            ))}
          </FooterList>
          <FooterList title="Contact">
            <ContactItem icon="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" className="lg:whitespace-nowrap">
              {company.address}
            </ContactItem>
            <ContactItem icon="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z">
              <PhoneLink phone={company.phone} className="underline-offset-4 hover:text-white hover:underline" />
            </ContactItem>
            <ContactItem icon="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM22 7l-10 6L2 7" className="break-words">
              <EmailLink email={company.email} subject="Wash order enquiry" className="underline-offset-4 hover:text-white hover:underline" />
            </ContactItem>
          </FooterList>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 py-6 text-xs">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Premium garment washing, dyeing &amp; finishing</span>
        </div>
      </Container>
    </footer>
  );
}
