"use client";

import type { KeyboardEvent, ReactNode } from "react";

// Scrolls to a section without being a real link, so the browser does not show the "…/#section"
// address in the corner of the screen and the address bar does not change.
export default function ScrollLink({
  to,
  className = "",
  onClick,
  children,
  ...rest
}: {
  to: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  "aria-label"?: string;
}) {
  const go = () => {
    document.getElementById(to.replace("#", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClick?.();
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") go();
  };
  return (
    <a role="link" tabIndex={0} onClick={go} onKeyDown={onKeyDown} className={`cursor-pointer ${className}`} {...rest}>
      {children}
    </a>
  );
}
