import { motion } from "framer-motion";

export default function RuleBook() {
  const rules = [
    {
      title: "The Schedule",
      content: "The game runs for one week (Monday 6:30 PM through Sunday). Tribal Councils and challenges are held outside 9-5 M-F work hours."
    },
    {
      title: "Eliminations",
      content: "There will be 1-2 tribal councils per day in which people will be continuously eliminated from the game until we are down to a Final 3."
    },
    {
      title: "Format",
      content: "Challenges and Tribal Councils may be held in person or virtually via Google Meets depending on the day's schedule."
    },
    {
      title: "Gameplay Elements",
      content: "Expect the unexpected. There may be hidden immunity idols, backstabbing, and twists throughout the week."
    },
    {
      title: "Requirements",
      content: "All selected players will be required to sign a liability waiver before participating."
    },
    {
      title: "Entry Fee",
      content: "There is an entry fee to play. However, the first 3 players eliminated will get refunded."
    }
  ];

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="py-20 px-4 text-center border-b-4 border-foreground relative overflow-hidden bg-card">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#1a1a1a_25%,transparent_25%,transparent_50%,#1a1a1a_50%,#1a1a1a_75%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading uppercase text-foreground mb-6"
          >
            OFFICIAL<br/>
            <span className="text-primary brutal-shadow bg-foreground text-background px-4 inline-block mt-2">RULE BOOK</span>
          </motion.h1>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-neutral max-w-none prose-headings:font-heading prose-headings:uppercase prose-p:font-medium prose-p:leading-relaxed"
          >
            <p className="text-2xl font-bold border-l-8 border-primary pl-6 mb-12 bg-white/50 p-6 brutal-shadow">
              Survivor Hoboken will be played similar to your favorite reality TV show Survivor without the cameras, grueling conditions, and living together.
            </p>

            <div className="space-y-8">
              {rules.map((rule, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-card border-2 border-foreground p-6 brutal-shadow-hover transition-transform hover:-translate-y-1">
                  <div className="font-heading text-5xl text-primary md:w-20 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading uppercase mb-3 text-foreground m-0">{rule.title}</h3>
                    <p className="text-lg m-0 text-foreground/80">{rule.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-12 text-center brutal-shadow transform rotate-1">
              <h2 className="text-4xl text-background font-heading uppercase mb-6 m-0">The Bottom Line</h2>
              <p className="text-2xl font-bold m-0 leading-tight">
                If you've ever dreamed of being on Survivor or love the game of Survivor, this is your chance to play! This is designed to play the game of Survivor that we all know and love and bring people together in the community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
