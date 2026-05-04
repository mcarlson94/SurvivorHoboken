import { motion } from "framer-motion";
import { Link } from "wouter";

const APPLY_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfAVG1NEsjl69NL5jo6Y9sGMXXhxXXSqXvpjker7g8chpQElg/viewform?usp=header";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/images/home-hero.png" 
            alt="Survivor Hoboken Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block brutal-shadow bg-primary text-primary-foreground font-bold px-4 py-1 mb-6 transform -rotate-2">
              SZN 4 APRIL 20TH – APRIL 26TH (APPLICATIONS CLOSED)
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 text-white leading-[0.9]">
              SURVIVOR<br />
              <span className="text-primary">IN YOUR CITY</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-4 text-white uppercase tracking-wide">
              NOW CASTING Survivor Hoboken One-Day Game on Saturday 5/16
            </p>
            <p className="text-lg md:text-xl max-w-2xl mb-10 text-white/90 font-medium leading-relaxed">
              Survivor Hoboken is a live reality competition packed with daily challenges, tribal councils, and nonstop strategy — all leading to one local being crowned the Sole Survivor of Hoboken.
            </p>
            
            <a 
              href={APPLY_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutal-button inline-block text-xl"
            >
              Apply To Play
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Ticker */}
      <div className="bg-primary text-primary-foreground py-4 overflow-hidden border-y-4 border-foreground flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap items-center font-heading text-3xl tracking-wider"
        >
          <span className="mx-8 px-4 py-1 bg-background text-foreground transform rotate-1">DO YOU HAVE WHAT IT TAKES?</span>
          <span className="mx-8">HOBOKEN NJ</span>
          <span className="mx-8">ParentPresents.com</span>
          <span className="mx-8 px-4 py-1 bg-background text-foreground transform -rotate-1">DO YOU HAVE WHAT IT TAKES?</span>
          <span className="mx-8">HOBOKEN NJ</span>
          <span className="mx-8">ParentPresents.com</span>
          <span className="mx-8 px-4 py-1 bg-background text-foreground transform rotate-1">DO YOU HAVE WHAT IT TAKES?</span>
          <span className="mx-8">HOBOKEN NJ</span>
          <span className="mx-8">ParentPresents.com</span>
          <span className="mx-8 px-4 py-1 bg-background text-foreground transform -rotate-1">DO YOU HAVE WHAT IT TAKES?</span>
          <span className="mx-8">HOBOKEN NJ</span>
          <span className="mx-8">ParentPresents.com</span>
        </motion.div>
      </div>

      {/* Rules Summary Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl mb-8 relative inline-block">
                RULES<br />SUMMARY
                <span className="absolute -bottom-4 left-0 w-3/4 h-2 bg-primary"></span>
              </h2>
              <div className="space-y-6 text-lg font-medium">
                <p>
                  Survivor Hoboken will be played similar to your favorite reality TV show Survivor without the cameras, grueling conditions, and living together. The game will run over the course of one week starting on a Monday at 6:30 PM and going until Sunday. There will be 1 to 2 tribal councils per day in which people will be continuously eliminated from the game until we are down to a final 3. Tribal Councils and challenges will be held in NON working hours (outside of Monday-Friday 9 to 5) and may be held in person or via Google Meets.
                </p>
                <p className="bg-card p-6 brutal-shadow border-2 border-foreground">
                  There may be hidden immunity idols, backstabbing, and twists! If you've ever dreamed of being on Survivor or love the game of Survivor, this is your chance to play! This is designed to play the game of Survivor that we all know and love and bring people together in the community.
                </p>
                <p className="text-primary font-bold uppercase text-xl">
                  You will be required to sign a waiver.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/rule-book" className="inline-flex items-center gap-2 font-heading uppercase text-xl hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
                  Read Full Rule Book <span>→</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] brutal-shadow bg-foreground p-4 transform rotate-2"
            >
              <img 
                src="/images/challenges-balance.png" 
                alt="Challenges" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center brutal-shadow transform -rotate-12 animate-pulse">
                <span className="font-heading text-white text-xl text-center leading-tight">ONLY 1<br/>SURVIVOR</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-24 bg-card border-y-4 border-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-4 inline-block transform -rotate-1 bg-primary text-primary-foreground px-6 py-2 brutal-shadow">
              HOW TO APPLY
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                step: "1",
                title: "Fill out a Google Form",
                desc: "This should take 5-10 minutes and will ask you questions about why you are interested in playing Survivor Hoboken."
              },
              {
                step: "2",
                title: "Complete a 5 Minute Google Meets call",
                desc: "Once you fill out the form you will be emailed a link to schedule a Google Meets call with the host Matt Carlson. You have 5 minutes to explain who you are and why you want to play Survivor Hoboken!"
              },
              {
                step: "3",
                title: "Final Cast Announced",
                desc: "You will be emailed by the game master on a specified date whether or not you have been selected to participate in Survivor Hoboken. There will be an entry fee (first 3 players eliminated will get refunded), and you must sign a waiver."
              }
            ].map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={s.step} 
                className="bg-background border-4 border-foreground p-8 relative brutal-shadow hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary text-primary-foreground font-heading text-4xl flex items-center justify-center brutal-shadow transform -rotate-12">
                  {s.step}
                </div>
                <h3 className="font-heading text-2xl mb-4 mt-4 uppercase leading-tight">{s.title}</h3>
                <p className="font-medium text-lg text-foreground/80 leading-snug">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={APPLY_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutal-button inline-block text-2xl px-12 py-6 transform rotate-1 hover:rotate-0"
            >
              Apply To Play Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-6xl text-center mb-16 text-foreground font-heading uppercase tracking-tight">
            From the Players Themselves
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-secondary text-secondary-foreground p-10 brutal-shadow relative"
            >
              <div className="text-primary text-6xl font-serif absolute top-4 left-4 opacity-50">"</div>
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-heading mb-6 leading-tight uppercase text-white">
                  10 out of 10! I had an incredible time.
                </p>
                <p className="text-xl mb-8 font-medium text-white/80">
                  "It felt like getting all the best parts of the show without having to sleep on the beach."
                </p>
                <div className="flex items-center gap-4 border-t-2 border-white/20 pt-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading text-xl brutal-shadow">D</div>
                  <div>
                    <p className="font-heading uppercase text-white">Danielle</p>
                    <p className="text-primary font-bold uppercase text-sm">Season 2</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-primary-foreground p-10 brutal-shadow relative mt-12 md:mt-0"
            >
              <div className="text-background text-6xl font-serif absolute top-4 left-4 opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-heading mb-6 leading-tight uppercase text-white">
                  One of the best experiences of my life
                </p>
                <p className="text-xl mb-8 font-medium text-white/90">
                  "I found a community of people who I look forward to continuing to get to know after the game. I can't express how grateful I am for the opportunity."
                </p>
                <div className="flex items-center gap-4 border-t-2 border-white/20 pt-6">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center text-background font-heading text-xl brutal-shadow">P</div>
                  <div>
                    <p className="font-heading uppercase text-white">Anonymous</p>
                    <p className="text-background font-bold uppercase text-sm">Player</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
