import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "/images/challenge-snake-maze.jpeg",
    alt: "Giant Snake Mazes",
    name: "Giant Snake Mazes",
    season: "As seen on Survivor SZN 28",
  },
  {
    src: "/images/challenge-bow-diddley-1.jpeg",
    alt: "Bow Diddley Balancing",
    name: "Bow Diddley Balancing",
    season: "As seen on Survivor 50",
  },
  {
    src: "/images/challenge-table-maze.png",
    alt: "Table Maze",
    name: "Table Maze",
    season: "As seen on Survivor SZN 35",
  },
  {
    src: "/images/challenge-stacked-up.png",
    alt: "Stacked Up",
    name: "Stacked Up",
    season: "As seen on Survivor 48",
  },
];

export default function Challenges() {
  return (
    <div className="w-full pt-24">
      <div className="bg-primary text-primary-foreground py-16 px-4 border-b-4 border-foreground text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase"
          >
            CHALLENGE<br />EXAMPLES
          </motion.h1>
        </div>
      </div>

      {/* Gallery — alternating photo/text units */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-28">
            {galleryItems.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}
                >
                  {/* Photo */}
                  <div className="w-full md:w-1/2 shrink-0">
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 space-y-5">
                    <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground leading-tight">
                      {item.name}
                    </h2>
                    <div className="inline-block border border-primary/50 text-primary/80 text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.season}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="border-t border-foreground/10 mx-auto max-w-5xl" />

      {/* In-person challenges */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-heading uppercase text-foreground">
                In Person Challenges
              </h2>
              <div className="space-y-5 text-base text-foreground/70 leading-relaxed">
                <p>
                  Survivor Hoboken features a wide variety of challenges designed to test many different skills throughout the game. While strategy and social gameplay are critical, challenges play a major role in determining who gains power and who is at risk.
                </p>
                <p>
                  Players can expect competitions that test balance, endurance, coordination, puzzle-solving ability, and mental toughness. Some challenges require standing perfectly still while maintaining balance under pressure. Others test focus and patience as players work through complex puzzles or problem-solving tasks. Many challenges also require teamwork, where tribes must communicate and coordinate to succeed.
                </p>
                <p>
                  No two challenges are exactly the same. Some emphasize physical stamina, others require precision and accuracy, and many push players to stay calm and focused while competing under pressure.
                </p>
                <p className="text-foreground font-medium">
                  In Survivor Hoboken, challenges are designed to push players both physically and mentally, rewarding those who can stay composed, think clearly, and perform when it matters most.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {[
                { src: "/images/challenge-ring-toss.jpeg", alt: "Ring Toss Challenge at TD Bank Park" },
                { src: "/images/challenge-pinball.jpeg", alt: "Pinball Challenge" },
                { src: "/images/challenge-field.jpeg", alt: "Field Challenge" },
              ].map((img, i) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* At-home challenges */}
          <div className="border-t border-foreground/10 pt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading uppercase text-foreground mb-8">
                At Home Challenges
              </h2>
              <div className="space-y-5 text-base text-foreground/70 leading-relaxed max-w-3xl">
                <p>
                  Occasionally, we include at-home challenges during Survivor Hoboken. For these challenges, players will receive instructions a few hours before the challenge begins.
                </p>
              </div>

              <div className="mt-10 border-l-2 border-primary/40 pl-8 max-w-3xl space-y-4">
                <span className="inline-block border border-primary/50 text-primary/80 text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                  Example — Season 2
                </span>
                <p className="text-xl text-foreground font-medium leading-snug">
                  "Each player had to text the Game Master the names of 5 U.S. states."
                </p>
                <ul className="space-y-3 text-base text-foreground/70">
                  <li>The player who submitted the most unique states (states that no other player submitted) won Immunity.</li>
                  <li>If there was a tie in the number of unique states, the winner was determined by which tied player submitted the state with the larger population.</li>
                  <li className="text-foreground/90">All state submissions had to be sent by 6:30 PM EST.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
