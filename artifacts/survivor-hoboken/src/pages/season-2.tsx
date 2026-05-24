import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Season2() {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full pt-16 md:pt-20 bg-background min-h-screen">
      <div className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <Link href="/season-recaps" className="text-sm font-bold uppercase tracking-wide text-foreground/60 hover:text-primary transition-colors mb-6 inline-block">
            ← Season Recaps
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading uppercase text-foreground"
          >
            Survivor Hoboken Season 2 Recap
          </motion.h1>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            15 players ranging from 24 to 44 years old met in the heat of the summer from July 21st – July 27th to compete in the 2nd season of Survivor Hoboken.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            They randomly drew buffs out of a bag and were divided into 3 tribes of 5; Jackson, Willow, &amp; Monroe.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            This season was filled with many twists and firsts. We introduced the Shot In The Dark, which was unsuccessfully played 3 times throughout the course of the game. We had the first-ever Survivor Hoboken Journey, and we had the first-ever Survivor Hoboken Auction!
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Hoboken Mike, Runner-up Survivor CBS Season 2, came to be a part of the auction, and one player purchased the marquee item, a "strategy session" with Hoboken Mike.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            What began with 15 strangers ended as a group of friends — bonded by competition, strategy, and shared memories.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-4">Final Standings</h4>
            <div className="space-y-1 text-base">
              <p>15th: Scott Schuman</p>
              <p>14th: Anna Wu</p>
              <p>13th: Sam Zecca</p>
              <p className="font-bold uppercase text-foreground mt-3">JURY</p>
              <p>12th: Abby Koenig</p>
              <p>11th: Tom Egan</p>
              <p>10th: Mel Wile</p>
              <p>9th: Danielle Finnegan</p>
              <p>8th: Jack Estavanik</p>
              <p>7th: Andrew Anderson</p>
              <p>6th: Luke Farienella</p>
              <p>5th: Karah Barrist</p>
              <p>4th: Rob Askes</p>
              <p className="font-bold uppercase text-foreground mt-3">FINAL 3</p>
              <p>T2: Maya Grossman</p>
              <p>T2: Kyle Krause</p>
              <p className="font-bold text-primary uppercase text-lg mt-2">SOLE SURVIVOR: Danny Kaplin</p>
            </div>
            <div className="mt-6">
              <img
                src="/images/danny-kaplin.png"
                alt="Danny Kaplin - Sole Survivor Season 2"
                className="rounded w-full max-w-sm"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-6">Follow on Instagram for news on future seasons</h4>
            <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/DMrB6D_pJ8E/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: 1,
                  maxWidth: 540,
                  minWidth: 326,
                  padding: 0,
                  width: "calc(100% - 2px)",
                }}
              >
                <div style={{ padding: 16 }}>
                  <a
                    href="https://www.instagram.com/p/DMrB6D_pJ8E/?utm_source=ig_embed&utm_campaign=loading"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: "#FFFFFF", lineHeight: 0, padding: 0, textAlign: "center", textDecoration: "none", width: "100%", display: "block" }}
                  >
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
