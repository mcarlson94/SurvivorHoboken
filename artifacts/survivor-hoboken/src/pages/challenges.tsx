import { motion } from "framer-motion";

const challenges = [
  {
    src: "/images/ch-snake-maze.png",
    alt: "Giant Snake Mazes",
    name: "Giant Snake Mazes",
    season: "As seen on Survivor SZN 28",
    description: "Two eight-foot snakes — blue and yellow — stand head to head. Working the pulleys, castaways guide a ball up through every twist and curve to the top. First to land it claims immunity. Sets up in minutes and reads from clear across the room.",
    blurb: "Easy to start, maddening to finish.",
    tags: ["HEAD-TO-HEAD", "BLUE vs. YELLOW", "INDOOR OR OUTDOOR"],
  },
  {
    src: "/images/ch-a-bit-tipsy.png",
    alt: "A Bit Tipsy",
    name: "A Bit Tipsy (Individual)",
    season: "As seen on Survivor 50",
    description: "Balance is everything. Players steady a wobbling board while stacking tiles one at a time to spell IMMUNITY — lose your nerve and it all topples. It's one of our toughest; runs can stretch past twenty minutes. Five castaways can battle at once.",
    blurb: "One wrong move and it all comes down.",
    tags: ["SOLO", "4 STATIONS", "20+ MIN", "HIGH DIFFICULTY"],
  },
  {
    src: "/images/ch-table-maze.png",
    alt: "Table Maze",
    name: "Table Maze",
    season: "As seen on Survivor SZN 35",
    description: "Precision under pressure. Tribes tilt and steer three balls through a winding maze — first to clear all three takes it. Mount it on a table and players compete standing, which makes it perfect for tighter indoor spaces. Run two and four can play at once.",
    blurb: "Two minutes of pure precision — and panic.",
    tags: ["2–4 PER TEAM", "~2 MIN", "TABLETOP", "INDOOR FRIENDLY"],
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
    season: "As seen on Survivor 36",
    description: "Five tribemates grip a single rope to hoist a platform off the ground, then take turns placing blocks to spell IMMUNITY. One wobble too many and the whole tower comes down — start over. First tribe to spell it and hold steady claims the win. Can your tribe keep it together?",
    blurb: "Five players, one rope, zero room for error.",
    tags: ["5 PER TRIBE", "~20 MIN", "BEST OUTDOORS", "NEEDS 40 FT"],
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
                    {"blurb" in item && (
                      <p className="text-base font-semibold text-foreground/90 italic">
                        {item.blurb}
                      </p>
                    )}
                    {"description" in item && (
                      <p className="text-base text-foreground/60 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {"tags" in item && Array.isArray(item.tags) && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="border border-foreground/20 text-foreground/50 text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
