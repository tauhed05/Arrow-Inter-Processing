"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/lib/data";
import { Button, Container } from "./ui";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#top" aria-label={`${company.name} home`} className="flex items-center gap-1.5">
      <Image src="/images/logo-mark.png" alt="" width={200} height={207} className="h-10 w-auto sm:h-[44px]" />
      <span className="relative top-[4px] leading-none">
        <span
          className={`relative top-[6px] block font-serif text-[1.2rem] font-bold uppercase leading-none tracking-[0.01em] ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          Arrow
        </span>
        <span
          className={`mt-2 block text-[11px] font-semibold leading-none tracking-[0.03em] ${
            onDark ? "text-[#b9c4bd]" : "text-ink/60"
          }`}
        >
          Inter Processing
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-primary/10 bg-paper/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md shadow-primary/10" : ""
      }`}
    >
      <div className="hidden bg-[#245a42] text-sm font-normal leading-none text-white sm:block">
        <Container className="flex h-9 items-center justify-between">
          <span>{company.address}</span>
          <span className="flex items-center gap-6">
            <span>{company.phone}</span>
            <span>{company.email}</span>
          </span>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="border-b-2 border-transparent py-1 text-lg font-extrabold text-ink/80 transition-colors hover:border-accent hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" className="hidden sm:inline-flex">
            Contact Us
          </Button>
          <button
            type="button"
            className="rounded-md p-2 text-primary xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" className="border-t border-primary/10 bg-paper xl:hidden" aria-label="Mobile">
          <Container className="flex flex-col py-2">
            {[...navLinks, { href: "#contact", label: "Contact Us" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-primary/10 py-3 text-xl font-extrabold last:border-0"
              >
                {l.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
