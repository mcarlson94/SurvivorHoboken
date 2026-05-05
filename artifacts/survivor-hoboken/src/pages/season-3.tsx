import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Season3() {
  return (
    <div className="w-full pt-20 bg-background min-h-screen">
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
            Survivor Hoboken Season 3 Recap
          </motion.h1>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            14 players from Hoboken, Jersey City, and Weehawken met from September 8th to Sep 14th to compete in the 3rd season of Survivor Hoboken.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            They were split into 2 tribes, the Bloomfield Tribe and the Clinton Tribe. The Team Challenges in this season were difficult and long, spanning all over 1 hr before determining a winner.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            The biggest twist pre-merge was that there were no twists.... we started Monday night and one person was eliminated each night through Friday night till we finally merged with 9 players ahead of the 2nd ever Survivor Hoboken Auction.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Clinton Tribe went into the Merge with a 5-4 lead, and what looked like a boring season where they were going to pick off Bloomfield 1 by 1 turned exciting when the majority alliance tried to split the votes, and an extra vote was successfully played to blindside one of the Clinton Tribe original members.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            With 6 players left in the game, we had another major blindside, where another one of the original Clinton Tribe members was eliminated with an idol in their pocket.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            This group was competitive, intense, and really loved a celebratory tribe drink and dinner! After an awesome 7 days of friendship and memories, it was LJ RUIZ who won the final 4 individual immunity challenge and ultimately won over the jury to claim 6 of the 7 jury votes and the title of Sole Survivor.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-4">Final Standings</h4>
            <div className="space-y-1 text-base">
              <p>14th: Melissa McKeon</p>
              <p>13th: Ryan Devaney</p>
              <p>12th: Michael Haggerty</p>
              <p className="font-bold uppercase text-foreground mt-3">JURY</p>
              <p>11th: Lindsey Silverman</p>
              <p>10th: Sacheev Mandhle</p>
              <p>9th: Jennifer Demirel</p>
              <p>8th: Casey Drake</p>
              <p>7th: Eric Dobric</p>
              <p>6th: Emily Maragni</p>
              <p>5th: Nika Belova</p>
              <p>4th: Joseph Powell</p>
              <p className="font-bold uppercase text-foreground mt-3">FINAL 3</p>
              <p>3rd: Kevin Barry</p>
              <p>2nd: Chris Benvenuto</p>
              <p className="font-bold text-primary uppercase text-lg mt-2">SOLE SURVIVOR: LJ RUIZ</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-4">Follow on Instagram for news on future seasons</h4>
            <a
              href="https://www.instagram.com/reel/DOmV-g6CSqN/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-heading uppercase px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              View on Instagram →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
