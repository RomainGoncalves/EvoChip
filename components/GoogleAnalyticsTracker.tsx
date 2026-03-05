"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!measurementId || typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
