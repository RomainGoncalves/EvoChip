"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";

export const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already acknowledged the privacy notice
    const hasAcknowledged = localStorage.getItem("privacyNoticeAccepted");
    if (!hasAcknowledged) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Save acknowledgment to localStorage
    localStorage.setItem("privacyNoticeAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 bg-slate-950/90 backdrop-blur-sm border-t border-slate-700 font-sans">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-300 tracking-tight">
          EvoChip uses browser storage to improve your experience and remember your preferences. No cookies or tracking are used.{" "}
          <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
            Learn more
          </Link>
        </p>
        <div className="flex gap-3">
          <Button
            variant="primary"
            className="text-xs py-2 px-3"
            onClick={handleAccept}
          >
            Understood
          </Button>
        </div>
      </div>
    </div>
  );
};
