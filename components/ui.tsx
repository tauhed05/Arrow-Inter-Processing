import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  maxWidth = "max-w-[1232px]",
}: {
  children: ReactNode;
  className?: string;
  /** Tailwind max-width class; narrower values leave more empty space on both sides. */
  maxWidth?: string;
}) {
  return <div className={`mx-auto w-full ${maxWidth} px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  tone = "base",
  maxWidth,
  padding = "py-14 sm:py-16 lg:py-20",
  children,
}: {
  id?: string;
  tone?: "base" | "light" | "primary";
  maxWidth?: string;
  /** Vertical padding classes, for sections that need to sit closer to the one above. */
  padding?: string;
  children: ReactNode;
}) {
  const tones = {
    base: "bg-paper",
    light: "bg-light",
    primary: "bg-primary text-white",
  };
  return (
    <section id={id} className={`${padding} ${tones[tone]}`}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  inverse = false,
  spacing = "mb-8 sm:mb-10",
  leading = "leading-[1.1]",
  eyebrowSpacing = "mb-5",
  titleClassName = "",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  inverse?: boolean;
  /** Space below the heading block. */
  spacing?: string;
  /** Line height of the title, for headings that need a little more space between their two lines. */
  leading?: string;
  /** Space between the small label and the title. */
  eyebrowSpacing?: string;
  /** Extra classes for the title, e.g. to nudge it without moving the text around it. */
  titleClassName?: string;
}) {
  return (
    <div className={`reveal max-w-2xl ${spacing}`}>
      <p
        className={`${eyebrowSpacing} flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] sm:text-base ${
          inverse ? "text-white/80" : "text-ink/60"
        }`}
      >
        <span className={`h-0.5 w-9 ${inverse ? "bg-white/60" : "bg-ink/60"}`} />
        {eyebrow}
      </p>
      <h2 className={`text-[1.75rem] ${leading} sm:text-4xl lg:text-[2.75rem] ${titleClassName}`}>
        {/* "|" in a title marks the line break, so headings keep the same two lines at every font size. */}
        {title.split("|").map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-7 sm:text-[17px] ${inverse ? "text-white/80" : "text-ink/70"}`}>
          {/* "|" in the text marks a fixed line break, the same as in titles. */}
          {text.split("|").map((line) => (
            <span key={line} className={`block ${text.includes("|") ? "lg:whitespace-nowrap" : ""}`}>
              {line}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-[#245a42]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary",
    light: "bg-white text-primary hover:bg-light",
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-display text-lg font-bold uppercase tracking-wider transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
