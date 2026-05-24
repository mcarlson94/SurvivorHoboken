import { motion } from "framer-motion";

const challenges = [
  {
    src: "/images/ch-snake-maze.png",
    alt: "Giant Snake Mazes",
    name: "Giant Snake Mazes",
    season: "As seen on Survivor SZN 28",
  },
  {
    src: "/images/ch-a-bit-tipsy.png",
    alt: "A Bit Tipsy",
    name: "A Bit Tipsy",
    season: "As seen on Survivor",
  },
  {
    src: "/images/ch-table-maze.png",
    alt: "Table Maze",
    name: "Table Maze",
    season: "As seen on Survivor SZN 35",
  },
  {
    src: "/images/ch-bow-diddley.png",
    alt: "Bow Diddley Balancing",
    name: "Bow Diddley Balancing",
    season: "As seen on Survivor 50",
  },
  {
    src: "/images/ch-stacked-up.png",
    alt: "Stacked Up",
    name: "Stacked Up",
    season: "As seen on Survivor 48",
  },
  {
    src: "/images/ch-team-immunity-stack.png",
    alt: "Team Immunity Stack",
    name: "Team Immunity Stack",
    season: "As seen on Survivor",
  },
  {
    src: "/images/ch-survivor-puzzles.png",
    alt: "Survivor Style Puzzles",
    name: "Survivor Style Puzzles",
    season: "As seen on Survivor",
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

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-28">
            {challenges.map((item, i) => {
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
                  <div className="w-full md:w-1/2 shrink-0">
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

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
    </div>
  );
}
