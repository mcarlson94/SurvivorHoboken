import { useEffect } from "react";
import { useLocation } from "wouter";

const GA_ID = "G-Y55ZLD8Q0Y";

export function useAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || !(window as any).gtag) return;
    (window as any).gtag("config", GA_ID, {
      page_path: location,
    });
  }, [location]);
}
