"use client";

import React, { useState } from "react";
import { Button } from "./Button";

export const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 bg-slate-950/90 backdrop-blur-sm border-t border-slate-700 font-sans">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-300 tracking-tight">
          EvoChip uses cookies to improve your experience. Review our policies
          for more info.
        </p>
        <div className="flex gap-3">
          <Button
            variant="primary"
            className="text-xs py-2 px-3"
            onClick={() => setIsVisible(false)}
          >
            Agree
          </Button>
        </div>
      </div>
    </div>
  );
};
