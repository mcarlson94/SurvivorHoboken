import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function OneDayGame516() {
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
            One Day Game — 5/16/26
          </motion.h1>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            15 players arrived at 9AM on Saturday 5/16 for the first-ever one-day game in Survivor Hoboken history. Players came from both near and far — one living in the building next to where we started, while others drove over an hour from Central New Jersey to compete. What was expected to be a "shortened" version quickly turned into one of the most intense formats we've ever run.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            Players started in 3 tribes of 5 and hit the ground running with back-to-back challenges, fast alliances, and nowhere to hide. With only 20–30 minutes to scramble between challenges, first impressions were critical. The pace forced players to trust their instincts and play aggressively from the jump.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Roshan made Survivor Hoboken history at the very first Tribal Council, playing his Shot in the Dark and rolling a six — becoming the first player ever to successfully hit it.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            As the day unfolded, tribal lines blurred and the strategy picked up fast. In an otherwise clean game where no advantages were successfully played, multiple players were eliminated with advantages still in their pockets. After the merge, the game briefly stabilized as the larger group came together to vote unanimously three straight times, taking out Kayla, Ed, and Josh.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            But that unity didn't last. At the Final 5, Tory was blindsided, leaving Jake on the outs with no room for error. He responded by winning his 3rd consecutive individual immunity to secure his spot in the Final 3.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            At Final 4, the remaining players attempted to force a tie and send the game to a challenge, but Jake shut it down, flipping the vote and sending Jona home in a 2-1-1 vote. In the end, the jury rewarded Jacqui for her strong social and strategic game, crowning her the Sole Survivor of the first-ever one-day game in a 4-2-1 final vote.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-4">Final Standings</h4>
            <div className="space-y-1 text-base">
              <p>15th: Ashley</p>
              <p>14th: Natasha</p>
              <p>13th: Roshan</p>
              <p>12th: Maddy</p>
              <p>11th: Erik</p>
              <p className="font-bold uppercase text-foreground mt-3">JURY</p>
              <p>10th: Scott</p>
              <p>9th: Gianna</p>
              <p>8th: Kayla</p>
              <p>7th: Ed</p>
              <p>6th: Josh</p>
              <p>5th: Tory</p>
              <p className="font-bold uppercase text-foreground mt-3">FINAL 4</p>
              <p>4th: Jona</p>
              <p className="font-bold uppercase text-foreground mt-3">FINAL 3</p>
              <p>3rd: Garret</p>
              <p>2nd: Jake</p>
              <p className="font-bold text-primary uppercase text-lg mt-2">SOLE SURVIVOR: Jacqui</p>
            </div>
            <div className="mt-6">
              <img
                src="/images/survivor-hoboken-winner-jacqui-may-2025.webp"
                alt="Jacqui — Sole Survivor of the Survivor Hoboken One Day Game, May 16 2026"
                className="rounded w-full max-w-sm"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-6">Follow on Instagram for news on future seasons</h4>
            <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/reel/DYcylH5JWZm/?utm_source=ig_embed&utm_campaign=loading"
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
                    href="https://www.instagram.com/reel/DYcylH5JWZm/?utm_source=ig_embed&utm_campaign=loading"
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
