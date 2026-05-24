import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Season1() {
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
            Survivor Hoboken Season 1 Recap
          </motion.h1>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Players ranged from 25 to 49 years old and brought their A-game from the very first challenge to the final tribal council. There was an extra vote played, a hidden immunity idol revealed at the same tribal, shocking blindsides, and moments that will go down in Survivor Hoboken history.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            What began with 12 strangers from Hoboken and Jersey City ended as 12 friends — bonded by competition, strategy, and shared memories.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Watch this Season 1 Player's Vlog for a more in-depth look at the game! (<a href="https://survivorhoboken.com/olivia-marcus-survivor-hoboken/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">SEE HERE</a>)
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-4">Final Standings</h4>
            <div className="space-y-1 text-base">
              <p>12th: Julia Campbell</p>
              <p>11th: Kevin Dong</p>
              <p>10th: Bryce Ritter</p>
              <p className="font-bold uppercase text-foreground mt-3">JURY</p>
              <p>9th: Nick Morgillo</p>
              <p>8th: Kayleen Malizia</p>
              <p>7th: Colleen Kovar</p>
              <p>6th: Joe DiBenedetto</p>
              <p>5th: Jen Demirel</p>
              <p>4th: Olivia Marcus (<a href="https://survivorhoboken.com/olivia-marcus-survivor-hoboken/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Survivor Hoboken Vlog</a>)</p>
              <p className="font-bold uppercase text-foreground mt-3">FINAL 3</p>
              <p>3rd: Steven Hurst</p>
              <p>2nd: Chelsea Altchek</p>
              <p className="font-bold text-primary uppercase text-lg mt-2">SOLE SURVIVOR: John Cordone</p>
            </div>
            <div className="mt-6">
              <img
                src="/images/john-cordone.png"
                alt="John Cordone - Sole Survivor Season 1"
                className="rounded w-full max-w-sm"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-4">Hear Game Recap on 13WHAM News</h4>
            <a href="https://13wham.com/news/good-day-arc-rochester/survivor-hoboken-creator-recaps-game" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80 font-bold">
              WATCH HERE
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-6">Follow on Instagram for news on future seasons</h4>
            <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/DIIOe8Nthlu/?utm_source=ig_embed&utm_campaign=loading"
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
                    href="https://www.instagram.com/p/DIIOe8Nthlu/?utm_source=ig_embed&utm_campaign=loading"
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
