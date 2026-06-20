import { useEffect } from "react";
import { Link } from "wouter";
import { InstagramGalleryLoader } from "@/components/instagram-gallery-loader";

const REELS = [
  {
    url: "https://www.instagram.com/reel/DICJ3M6u_zZ/",
    caption: "Part 1 — Olivia kicks off her Survivor Hoboken journey and meets the other players.",
  },
  {
    url: "https://www.instagram.com/reel/DIE9kLxRY6x/",
    caption: "Part 2 — The first challenge gets underway and alliances start to form.",
  },
  {
    url: "https://www.instagram.com/reel/DIFyOf9txnO/",
    caption: "Part 3 — Tribal council drama as the first vote changes the game.",
  },
  {
    url: "https://www.instagram.com/reel/DIHJETwOs2H/",
    caption: "Part 4 — Olivia navigates shifting loyalties and plots her next move.",
  },
  {
    url: "https://www.instagram.com/reel/DIISigctiaw/",
    caption: "Part 5 — A blindside rocks the tribe and Olivia reacts in real time.",
  },
  {
    url: "https://www.instagram.com/reel/DIJos90OlaG/",
    caption: "Part 6 — The mid-game twist throws everyone's plans into chaos.",
  },
  {
    url: "https://www.instagram.com/reel/DIKzxkktvgl/",
    caption: "Part 7 — Olivia fights through a physical immunity challenge.",
  },
  {
    url: "https://www.instagram.com/reel/DIMG0WxuyIj/",
    caption: "Part 8 — The end game closes in and every vote counts.",
  },
  {
    url: "https://www.instagram.com/reel/DJecupUtt6X/",
    caption: "Part 9 — Olivia's final episode recap and her full Survivor Hoboken verdict.",
  },
];

export default function OliviaMarcus() {
  useEffect(() => {
    document.title = "Olivia Marcus — Survivor Hoboken Journey & Vlogs";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = attr.split("=");
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name=description",
      "Follow Olivia Marcus (@oliviamarcus) through her Survivor Hoboken journey — watch all her reels and vlogs from the challenges, twists, and tribal councils."
    );

    setMeta('meta[property="og:title"]', "property=og:title",
      "Olivia Marcus — Survivor Hoboken Journey & Vlogs"
    );
    setMeta('meta[property="og:description"]', "property=og:description",
      "Follow Olivia Marcus (@oliviamarcus) through her Survivor Hoboken journey — watch all her reels and vlogs from the challenges, twists, and tribal councils."
    );
    setMeta('meta[property="og:url"]', "property=og:url",
      "https://survivorhoboken.com/olivia-marcus-survivor-hoboken/"
    );
    setMeta('meta[property="og:type"]', "property=og:type", "article");

    setMeta('meta[name="twitter:card"]', "name=twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name=twitter:title",
      "Olivia Marcus — Survivor Hoboken Journey & Vlogs"
    );
    setMeta('meta[name="twitter:description"]', "name=twitter:description",
      "Follow Olivia Marcus (@oliviamarcus) through her Survivor Hoboken journey."
    );

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://survivorhoboken.com/olivia-marcus-survivor-hoboken/";

    let jsonLd = document.getElementById("olivia-marcus-jsonld");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = "olivia-marcus-jsonld";
      jsonLd.setAttribute("type", "application/ld+json");
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Olivia Marcus — Survivor Hoboken Journey & Vlogs",
      "description": "Follow Olivia Marcus (@oliviamarcus) through her Survivor Hoboken journey — watch all her reels and vlogs from the challenges, twists, and tribal councils.",
      "url": "https://survivorhoboken.com/olivia-marcus-survivor-hoboken/",
      "about": {
        "@type": "Person",
        "name": "Olivia Marcus",
        "sameAs": "https://www.instagram.com/oliviamarcus/"
      }
    });

    return () => {
      const ldEl = document.getElementById("olivia-marcus-jsonld");
      if (ldEl) ldEl.remove();
      const canonEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonEl) canonEl.remove();
    };
  }, []);

  return (
    <div className="bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-16">

        <h1 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">
          Olivia Marcus's Survivor Hoboken Journey
        </h1>

        <p className="text-foreground/80 text-lg leading-relaxed mb-12">
          Content creator Olivia Marcus (
          <a
            href="https://www.instagram.com/oliviamarcus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @oliviamarcus
          </a>
          ) brought her followers along for every step of her Survivor Hoboken
          experience, documenting the entire journey on Instagram. From the
          opening challenge to the final stretch, she captured the strategy, the
          blindsides, the tribal councils, and the friendships that make Survivor
          Hoboken what it is. Below is her full series of reels in order — watch
          her run from the first vote to the last.
        </p>

        <InstagramGalleryLoader />

        <div className="space-y-10">
          {REELS.map((reel, i) => (
            <div key={i}>
              <p className="text-foreground/70 text-sm mb-3 font-medium">{reel.caption}</p>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={reel.url}
                data-instgrm-version="14"
                style={{
                  minHeight: 540,
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0",
                  maxWidth: "540px",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 border-t-2 border-primary pt-10">
          <p className="text-foreground/80 text-lg leading-relaxed">
            Olivia's run is one of dozens of stories that come out of every
            Survivor Hoboken season. Want in?{" "}
            <Link href="/" className="text-primary hover:underline font-semibold">
              Join an upcoming season
            </Link>{" "}
            or{" "}
            <Link href="/private-events" className="text-primary hover:underline font-semibold">
              book your own private Survivor experience
            </Link>{" "}
            for your team, birthday, or crew.
          </p>
        </div>
      </div>
    </div>
  );
}
