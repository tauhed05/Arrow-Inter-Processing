"use client";

import type { KeyboardEvent } from "react";

// Starts a phone call to the factory. It is not a real link, so no "tel:" address shows in the
// corner of the browser. On a phone, a tap goes straight to the dialler.
export default function PhoneLink({ phone, className = "" }: { phone: string; className?: string }) {
  const go = () => {
    window.location.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") go();
  };
  return (
    <a role="link" tabIndex={0} onClick={go} onKeyDown={onKeyDown} className={`cursor-pointer ${className}`}>
      {phone}
    </a>
  );
}
