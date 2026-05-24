import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/use-page-meta";

const challenges = [
  {
    src: "/images/survivor-hoboken-snake-maze-challenge.webp",
    alt: "Players maneuvering a ball up a giant snake maze immunity challenge at Survivor Hoboken",
    name: "Giant Snake Mazes",
    season: "As seen on Survivor SZN 28",
    description: "Two eight-foot snakes, blue and yellow, stand head to head. Working the pulleys, castaways guide a ball up through every twist and curve to the top. First to land it claims immunity. Sets up in minutes and reads from clear across the room.",
    blurb: "Easy to start, maddening to finish.",
    tags: ["HEAD-TO-HEAD", "BLUE vs. YELLOW", "INDOOR OR OUTDOOR"],
  },
  {
    src: "/images/survivor-hoboken-a-bit-tipsy-balance-challenge.webp",
    alt: "Castaways balancing stacked immunity tiles on a wobbling board in Survivor Hoboken's A Bit Tipsy challenge",
    name: "A Bit Tipsy (Individual)",
    season: "As seen on Survivor 50",
    description: "Balance is everything. Players steady a wobbling board while stacking tiles one at a time to spell IMMUNITY. Lose your nerve and it all topples. It's one of our toughest; runs can stretch past twenty minutes. Five castaways can battle at once.",
    blurb: "One wrong move and it all comes down.",
    tags: ["SOLO", "4 STATIONS", "20+ MIN", "HIGH DIFFICULTY"],
  },
  {
    src: "/images/survivor-hoboken-table-maze-challenge.webp",
    alt: "Tribe members steering balls through a tabletop maze during a Survivor Hoboken immunity challenge",
    name: "Table Maze",
    season: "As seen on Survivor SZN 35",
    description: "Precision under pressure. Tribes tilt and steer three balls through a winding maze; first to clear all three takes it. Mount it on a table and players compete standing, which makes it perfect for tighter indoor spaces. Run two and four can play at once.",
    blurb: "Two minutes of pure precision and panic.",
    tags: ["2–4 PER TEAM", "~2 MIN", "TABLETOP", "INDOOR FRIENDLY"],
  },
  {
    src: "/images/survivor-hoboken-bow-diddley-balance-challenge.webp",
    alt: "Contestants holding a ball balanced on a bow in Survivor Hoboken's full-size Bow Diddley endurance challenge",
    name: "Full-Size Bow Diddley",
    season: "As seen on Survivor 50",
    description: "Steady hands win. Players balance a ball on the bow and hold it as long as they can. Drop it and you're out, last castaway standing wins. Want it harder? We have them balance on one foot and switch. Six can compete side by side.",
    blurb: "Hold steady. Last one standing takes it.",
    tags: ["SOLO ELIMINATION", "6 BOWS", "UP TO 10 MIN"],
  },
  {
    src: "/images/survivor-hoboken-stacked-up-challenge.webp",
    alt: "Castaways using a rod to build a five-ball tower in Survivor Hoboken's Stacked Up challenge",
    name: "Stacked Up",
    season: "As seen on Survivor 48",
    description: "Patience and a steady rod. Castaways ferry balls and discs back and forth, racing to build a tower five balls high topped with a disc. One slip and the whole stack collapses, back to the start. Four can go head to head.",
    blurb: "One slip and you start from zero.",
    tags: ["HEAD-TO-HEAD", "4 STATIONS", "HIGH DIFFICULTY", "INDOOR OR OUTDOOR"],
  },
  {
    src: "/images/survivor-hoboken-team-immunity-stack-challenge.webp",
    alt: "Five players gripping a shared rope while stacking immunity blocks in Survivor Hoboken's team challenge",
    name: "Team Immunity Stack",
    season: "As seen on Survivor 36",
    description: "Five tribemates grip a single rope to hoist a platform off the ground, then take turns placing blocks to spell IMMUNITY. One wobble too many and the whole tower comes down. Start over. First tribe to spell it and hold steady claims the win. Can your tribe keep it together?",
    blurb: "Five players, one rope, zero room for error.",
    tags: ["5 PER TRIBE", "~20 MIN", "BEST OUTDOORS", "NEEDS 40 FT"],
  },
  {
    src: "/images/survivor-hoboken-survivor-style-puzzles.webp",
    alt: "Custom Survivor Hoboken puzzles including tower, flame, seahorse, and slide puzzle designs for live events",
    name: "Survivor Style Puzzles",
    season: "As seen on Survivor",
    description: "Our custom puzzle arsenal, built for team races: tower puzzles, flame puzzles, seahorse puzzles, and Survivor Hoboken slide puzzles. We mix and match for rounds that run from a five-minute sprint to a fifteen-minute team brain-burner. Outthink the other tribe.",
    blurb: "Outthink the other tribe.",
    tags: ["TEAM RACES", "2–4 PER TEAM", "5–15 MIN", "MIX & MATCH"],
  },
];

function BookingSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section className="py-24 px-4 bg-foreground text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading text-sm uppercase tracking-widest mb-4">
            Ready to compete?
          </p>
          <h2 className="text-4xl md:text-6xl font-heading uppercase text-background leading-tight mb-6">
            Book Survivor Hoboken
          </h2>
          <p className="text-background/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Bring these challenges to your next event. We'll handle everything, challenges, hosting, and tribal council.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:Tribal@survivorhoboken.com"
              className="text-xl md:text-2xl font-heading uppercase text-background hover:text-primary transition-colors tracking-wide"
            >
              Tribal@survivorhoboken.com
            </a>
            <span className="hidden sm:block text-background/30 text-2xl">|</span>
            <a
              href="tel:2016582062"
              className="text-xl md:text-2xl font-heading uppercase text-background hover:text-primary transition-colors tracking-wide"
            >
              201-658-2062
            </a>
          </div>
          <div
            className="meetings-iframe-container"
            data-src="https://meetings-na2.hubspot.com/matthew-carlson/private-events-?embed=true"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function Challenges() {
  usePageMeta(
    "Survivor Challenges for Events | Survivor Hoboken",
    "Real, custom-built Survivor immunity challenges we run across our live seasons: balance, puzzle, endurance, and team challenges for events in the NYC & NJ metro area."
  );

  return (
    <div className="w-full pt-16 md:pt-20">
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
              const isFirst = i === 0;
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
                    <div
                      className="relative w-full overflow-hidden rounded-lg"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading={isFirst ? "eager" : "lazy"}
                        width={800}
                        height={600}
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

      {/* CTA */}
      <BookingSection />
    </div>
  );
}
