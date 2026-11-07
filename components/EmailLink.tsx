"use client";

import type { KeyboardEvent } from "react";

// Opens a new Gmail message to the factory on computers, and the phone's own mail app on phones
// and tablets. It is not a real link, so no "mailto:" address shows in the corner of the browser.
export default function EmailLink({ email, subject, className = "" }: { email: string; subject: string; className?: string }) {
  const go = () => {
    const phone = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (phone) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") go();
  };
  return (
    <a role="link" tabIndex={0} onClick={go} onKeyDown={onKeyDown} className={`cursor-pointer ${className}`}>
      {email}
    </a>
  );
}
