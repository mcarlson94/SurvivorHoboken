import { motion } from "framer-motion";
import { Link } from "wouter";

const APPLY_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfAVG1NEsjl69NL5jo6Y9sGMXXhxXXSqXvpjker7g8chpQElg/viewform?usp=header";

export default function Home() {
  return (
    <div className="w-full bg-background">

      {/* Hero Section — two-column, sandy bg */}
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading leading-[0.95] mb-8 text-foreground">
                SURVIVOR IN YOUR CITY
              </h1>

              <p className="font-bold text-base md:text-lg mb-2 text-foreground uppercase tracking-wide">
                SZN 4 April 20th – April 26th (Applications Closed)
              </p>
              <p className="font-bold text-base md:text-lg mb-4 text-foreground uppercase tracking-wide">
                NOW CASTING Survivor Hoboken One-Day Game on Saturday 5/16
              </p>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed max-w-lg">
                Survivor Hoboken is a live reality competition packed with daily challenges, tribal councils, and nonstop strategy — all leading to one local being crowned the Sole Survivor of Hoboken.
              </p>

              <div className="flex flex-row flex-wrap gap-3">
                <Link
                  href="/private-events"
                  className="bg-primary text-white font-heading uppercase px-6 py-3 text-base rounded hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Private Events
                </Link>
                <a
                  href={APPLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white font-heading uppercase px-6 py-3 text-base rounded hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Apply For Survivor Hoboken
                </a>
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <img
                src="/images/challenge-ring-toss.jpeg"
                alt="Survivor Hoboken Challenge"
                className="w-full h-[480px] object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticker — dark rounded card, matching original */}
      <div className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-foreground rounded-xl py-6 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
              className="flex whitespace-nowrap items-center gap-16 font-heading text-xl tracking-wider text-background"
            >
              <span className="italic font-bold text-primary">DO YOU HAVE WHAT IT TAKES?</span>
              <span>HOBOKEN NJ</span>
              <span>ParentPresents.com</span>
              <span className="italic font-bold text-primary">DO YOU HAVE WHAT IT TAKES?</span>
              <span>HOBOKEN NJ</span>
              <span>ParentPresents.com</span>
              <span className="italic font-bold text-primary">DO YOU HAVE WHAT IT TAKES?</span>
              <span>HOBOKEN NJ</span>
              <span>ParentPresents.com</span>
              <span className="italic font-bold text-primary">DO YOU HAVE WHAT IT TAKES?</span>
              <span>HOBOKEN NJ</span>
              <span>ParentPresents.com</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rules Summary */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading mb-10 text-foreground"
          >
            RULES SUMMARY
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-lg text-foreground/80 text-left max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              Survivor Hoboken will be played similar to your favorite reality TV show Survivor without the cameras, grueling conditions, and living together. The game will run over the course of one week starting on a Monday at 6:30 PM and going until Sunday. There will be 1 to 2 tribal councils per day in which people will be continuously eliminated from the game until we are down to a final 3. Tribal Councils and challenges will be held in NON working hours (outside of Monday–Friday 9 to 5) and may be held in person or via Google Meets.
            </p>
            <p>
              There may be hidden immunity idols, backstabbing, and twists! If you've ever dreamed of being on Survivor or love the game of Survivor, this is your chance to play! This is designed to play the game of Survivor that we all know and love and bring people together in the community.
            </p>
            <p className="font-bold text-foreground uppercase">
              You will be required to sign a waiver.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/rule-book"
              className="inline-flex items-center gap-2 font-heading uppercase text-base text-foreground hover:text-primary transition-colors border-b-2 border-foreground hover:border-primary pb-1"
            >
              Read Full Rule Book →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading text-center mb-12 text-foreground"
          >
            HOW TO APPLY
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Fill out a Google Form",
                desc: "This should take 5–10 minutes and will ask you questions about why you are interested in playing Survivor Hoboken."
              },
              {
                step: "2",
                title: "Complete a 5-Minute Google Meets Call",
                desc: "Once you fill out the form you will be emailed a link to schedule a call with host Matt Carlson. You have 5 minutes to explain who you are and why you want to play!"
              },
              {
                step: "3",
                title: "Final Cast Announced",
                desc: "You will be emailed whether or not you've been selected. There will be an entry fee (first 3 players eliminated get refunded), and you must sign a waiver."
              }
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-sm p-8"
              >
                <div className="w-10 h-10 bg-primary text-white font-heading text-xl flex items-center justify-center rounded-full mb-4">
                  {s.step}
                </div>
                <h3 className="font-heading text-xl mb-3 uppercase leading-tight text-foreground">{s.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-heading uppercase px-10 py-4 text-lg rounded hover:opacity-90 transition-opacity inline-block"
            >
              Apply For Survivor Hoboken
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-center mb-12 text-foreground"
          >
            FROM THE PLAYERS
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-sm p-8"
            >
              <p className="text-2xl font-heading uppercase text-foreground mb-4 leading-tight">
                10 out of 10! I had an incredible time.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                "It felt like getting all the best parts of the show without having to sleep on the beach."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 bg-primary text-white font-heading flex items-center justify-center rounded-full text-sm">D</div>
                <div>
                  <p className="font-heading uppercase text-foreground text-sm">Danielle</p>
                  <p className="text-primary text-xs font-bold uppercase">Season 2</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card border border-border rounded-sm p-8"
            >
              <p className="text-2xl font-heading uppercase text-foreground mb-4 leading-tight">
                One of the best experiences of my life
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                "I found a community of people who I look forward to continuing to get to know after the game. I can't express how grateful I am for the opportunity."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 bg-foreground text-background font-heading flex items-center justify-center rounded-full text-sm">P</div>
                <div>
                  <p className="font-heading uppercase text-foreground text-sm">Anonymous</p>
                  <p className="text-primary text-xs font-bold uppercase">Player</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
