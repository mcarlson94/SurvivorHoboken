import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMetaName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaProp(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useSEO({ title, description, canonical, ogImage, noindex, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;

    if (description) setMetaName("description", description);

    setMetaName("robots", noindex ? "noindex, follow" : "index, follow");

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonical;
    }

    setMetaProp("og:title", title);
    if (description) setMetaProp("og:description", description);
    if (canonical) setMetaProp("og:url", canonical);
    setMetaProp("og:type", "website");
    setMetaProp("og:image", ogImage || "https://survivorhoboken.com/images/logo.png");
    setMetaProp("og:site_name", "Survivor Hoboken");

    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", title);
    if (description) setMetaName("twitter:description", description);
    setMetaName("twitter:image", ogImage || "https://survivorhoboken.com/images/logo.png");

    if (jsonLd) {
      let ldEl = document.getElementById("page-jsonld");
      if (!ldEl) {
        ldEl = document.createElement("script");
        ldEl.id = "page-jsonld";
        ldEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(ldEl);
      }
      ldEl.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      const ldEl = document.getElementById("page-jsonld");
      if (ldEl) ldEl.remove();
      const canonEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonEl) canonEl.remove();
    };
  }, [title, description, canonical, ogImage, noindex]);
}
