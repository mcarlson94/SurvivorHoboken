import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramGalleryLoader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const load = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => window.instgrm && window.instgrm.Embeds.process();
      document.body.appendChild(s);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} aria-hidden="true" />;
}
