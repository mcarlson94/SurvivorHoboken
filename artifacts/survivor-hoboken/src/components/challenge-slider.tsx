import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const CHALLENGES = [
  {
    src: "/images/survivor-hoboken-snake-maze-challenge.webp",
    name: "Giant Snake Mazes",
    blurb: "Easy to start, maddening to finish.",
    season: "As seen on Survivor SZN 28",
  },
  {
    src: "/images/survivor-hoboken-a-bit-tipsy-balance-challenge.webp",
    name: "A Bit Tipsy",
    blurb: "One wrong move and it all comes down.",
    season: "As seen on Survivor 50",
  },
  {
    src: "/images/survivor-hoboken-table-maze-challenge.webp",
    name: "Table Maze",
    blurb: "Two minutes of pure precision and panic.",
    season: "As seen on Survivor SZN 35",
  },
  {
    src: "/images/survivor-hoboken-bow-diddley-balance-challenge.webp",
    name: "Full-Size Bow Diddley",
    blurb: "Hold steady. Last one standing takes it.",
    season: "As seen on Survivor 50",
  },
  {
    src: "/images/survivor-hoboken-stacked-up-challenge.webp",
    name: "Stacked Up",
    blurb: "One slip and you start from zero.",
    season: "As seen on Survivor 48",
  },
  {
    src: "/images/survivor-hoboken-team-immunity-stack-challenge.webp",
    name: "Team Immunity Stack",
    blurb: "Five players, one rope, zero room for error.",
    season: "As seen on Survivor 36",
  },
  {
    src: "/images/survivor-hoboken-survivor-style-puzzles.webp",
    name: "Survivor Style Puzzles",
    blurb: "Outthink the other tribe.",
    season: "As seen on Survivor",
  },
];

export function ChallengeSlider() {
  const [index, setIndex] = useState(0);
  const n = CHALLENGES.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  const visible = [
    CHALLENGES[index % n],
    CHALLENGES[(index + 1) % n],
    CHALLENGES[(index + 2) % n],
  ];

  return (
    <div className="mt-16 mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-heading uppercase">
          Some of Our Challenges
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous challenge"
            className="w-10 h-10 flex items-center justify-center bg-foreground text-background text-xl hover:bg-primary transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next challenge"
            className="w-10 h-10 flex items-center justify-center bg-foreground text-background text-xl hover:bg-primary transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {visible.map((c, i) => (
          <motion.div
            key={`${index}-${i}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="border-4 border-foreground overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={c.src}
                alt={c.name}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-card">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                {c.season}
              </p>
              <h3 className="font-heading text-lg uppercase mb-1">{c.name}</h3>
              <p className="text-foreground/60 text-sm">{c.blurb}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/challenges"
          className="inline-block border-4 border-foreground bg-background font-heading uppercase tracking-widest px-8 py-3 text-sm brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          See All Challenges →
        </Link>
      </div>
    </div>
  );
}
