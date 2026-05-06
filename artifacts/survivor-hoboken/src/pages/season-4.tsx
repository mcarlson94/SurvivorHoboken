import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Season4() {
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
    <div className="w-full pt-24 bg-background min-h-screen">
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
            Survivor Hoboken Season 4 Recap
          </motion.h1>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            16 players — 8 guys and 8 girls — met for our biggest season yet, running Monday through Sunday. After no tribe swaps in SZN 3 till merge, SZN 4 started as 2 tribes of 8 and swapped to 3 tribes of 5 on Tuesday night! 3 separate journeys took place on Wednesday night before a Hoboken Mike watch party at the Hoboken Elks, where Survivor Hoboken contributed over $600 to the Elks and the community pantry.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            Friday we merged with 11 players but had our first ever blood moon twist! 9 went on to a cold rainy Saturday where 5 players outlasted the elements and each other. Sunday it was ultimately Nichole Scholl who won final 4 individual immunity and pitched a strong case to the jury to become the first female winner — and the first Hoboken resident winner — of Survivor Hoboken!
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-4">Final Standings</h4>
            <div className="space-y-1 text-base">
              <p>16th: Chad Langdon</p>
              <p>15th: Alicia H</p>
              <p>14th: Khushi Umarwadia</p>
              <p className="font-bold uppercase text-foreground mt-3">JURY</p>
              <p>13th: Kema Tuchscherer</p>
              <p>12th: Paul Minetti</p>
              <p>11th: Abby Patel</p>
              <p>10th: Chloe Chaffin</p>
              <p>9th: Avery Benzaken</p>
              <p>8th: Sam Fellin</p>
              <p>7th: Franck Meyer</p>
              <p>6th: Eric Vanchieri</p>
              <p className="font-bold uppercase text-foreground mt-3">FINAL 5</p>
              <p>5th: Aliya Davne</p>
              <p>4th: Jackson Tennant</p>
              <p className="font-bold uppercase text-foreground mt-3">FINAL 3</p>
              <p>3rd: Jason Shindler</p>
              <p>2nd: Brian Knight</p>
              <p className="font-bold text-primary uppercase text-lg mt-2">SOLE SURVIVOR: Nichole Scholl</p>
            </div>
            <div className="mt-6">
              <img
                src="/images/nichole-scholl.jpeg"
                alt="Nichole Scholl - Sole Survivor Season 4"
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
                data-instgrm-permalink="https://www.instagram.com/reel/DXokac4kw3l/?utm_source=ig_embed&utm_campaign=loading"
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
                    href="https://www.instagram.com/reel/DXokac4kw3l/?utm_source=ig_embed&utm_campaign=loading"
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
