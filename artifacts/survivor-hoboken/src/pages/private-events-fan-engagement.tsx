import { motion } from "framer-motion";
import { Link } from "wouter";
import { HubspotBooking } from "@/components/hubspot-booking";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ChallengeSlider } from "@/components/challenge-slider";
import { ReviewsSlider } from "@/components/reviews-slider";
import { useEffect } from "react";

function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}

export default function FanEngagement() {
  usePageMeta({
    title: "Fan Engagement Experiences | Survivor Hoboken",
    description:
      "Bring live Survivor challenges to your stadium, arena, festival, or brand activation. Real immunity challenges. Real crowd energy.",
  });

  return (
    <div className="w-full pt-16 md:pt-20">
      {/* Hero */}
      <div className="bg-secondary text-secondary-foreground py-24 px-4 border-b-4 border-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/private-events" className="inline-flex items-center gap-2 text-secondary-foreground/60 font-bold uppercase tracking-widest text-xs mb-8 hover:text-primary transition-colors">
            ← Private Events
          </Link>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-heading text-sm uppercase tracking-widest mb-3"
          >
            Large-Scale Activations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-heading uppercase text-white mb-6 leading-tight"
          >
            Fan Engagement<br />
            <span className="text-primary">Experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 max-w-2xl mb-10"
          >
            Bring Survivor Hoboken to your venue as a live fan activation. We set up real immunity challenges on the concourse, field, or floor and let fans compete head-to-head in front of a crowd.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            href="https://meetings-na2.hubspot.com/matthew-carlson/private-events-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-heading uppercase tracking-widest px-8 py-4 text-sm border-4 border-primary hover:bg-transparent hover:text-white transition-colors"
          >
            Schedule 15-min Call
          </motion.a>
        </div>
      </div>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">

          {/* Venue types */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-heading uppercase mb-10">
              Where We Activate
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Stadiums & Arenas", icon: "🏟️" },
                { label: "Survivor Nights", icon: "🔥" },
                { label: "Festivals & Fairs", icon: "🎪" },
                { label: "Trade Shows", icon: "🤝" },
                { label: "Brand Activations", icon: "📣" },
                { label: "Sponsor Events", icon: "🏆" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card border-4 border-foreground p-5 flex items-center gap-3 brutal-shadow"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-heading text-sm uppercase leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Somerset Patriots callout */}
          <div className="mb-20">
            <div className="bg-foreground text-background border-4 border-foreground brutal-shadow p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">
                    As Seen At
                  </p>
                  <h3 className="text-4xl font-heading uppercase text-background mb-4">
                    Somerset Patriots
                  </h3>
                  <p className="text-background/80 text-lg leading-relaxed">
                    We brought live Survivor challenges to the concourse at a Somerset Patriots game, giving fans a real immunity challenge experience between innings. The crowd loved it — real competition, real energy, right on the concourse.
                  </p>
                  <p className="text-primary font-heading text-sm uppercase tracking-widest mt-4">
                    Minor League Baseball ✦ TD Bank Ballpark
                  </p>
                </div>
                <div className="md:w-64 shrink-0 bg-background border-4 border-primary p-6 text-center">
                  <p className="font-heading text-5xl text-primary mb-2">✦</p>
                  <p className="font-heading text-xl uppercase text-foreground leading-tight">Live Fan Activation</p>
                  <p className="text-foreground/60 text-sm mt-2">Between-inning challenges open to all fans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Somerset Patriots Instagram Reel */}
          <div className="mb-20">
            <InstagramEmbed url="https://www.instagram.com/reel/DYATD5KRkEx/" />
          </div>

          {/* What makes it stand out */}
          <div className="mb-20 bg-card border-4 border-foreground p-8 md:p-12 brutal-shadow relative">
            <div className="absolute -top-6 right-8 bg-primary text-white font-heading text-2xl px-6 py-2 brutal-shadow transform rotate-2">
              WHY IT WORKS
            </div>
            <ul className="space-y-6 mt-8">
              {[
                "Real Survivor-style challenges fans recognize from TV",
                "High energy — designed to draw a crowd",
                "Head-to-head format keeps spectators engaged",
                "Fully portable — sets up anywhere in minutes",
                "Custom branding and sponsor integration available",
                "Professional Game Master facilitation by Matt Carlson",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-lg md:text-xl font-bold">
                  <div className="w-4 h-4 bg-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <ChallengeSlider />

          <ReviewsSlider />
        </div>
      </section>

      <HubspotBooking />
    </div>
  );
}
