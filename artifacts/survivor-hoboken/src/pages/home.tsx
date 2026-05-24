import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/use-page-meta";

const APPLY_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfAVG1NEsjl69NL5jo6Y9sGMXXhxXXSqXvpjker7g8chpQElg/viewform?usp=header";

const PROOF_POINTS = [
  "5 seasons of real gameplay",
  "Real champions crowned",
  "Featured at the Somerset Patriots",
  "NYC & NJ metro area",
];

const TILES = [
  {
    image: "/images/survivor-hoboken-a-bit-tipsy-balance-challenge.webp",
    alt: "Players competing in the A Bit Tipsy balance challenge at a Survivor Hoboken event",
    title: "Real Challenges",
    body: "Custom-built immunity challenges from our actual seasons — balance, puzzles, endurance, and teamwork.",
    href: "/challenges",
  },
  {
    image: "/images/challenge-field.jpeg",
    alt: "Survivor Hoboken host running a live immunity challenge outdoors with competing tribes",
    title: "Live Competition",
    body: "Professionally hosted, Jeff-Probst-style, with tribal councils and real stakes.",
    href: "/private-events",
  },
  {
    image: "/images/survivor-hoboken-group.webp",
    alt: "Groups of players competing together in a Survivor Hoboken team challenge",
    title: "Built for Any Group",
    body: "From an intimate party to a 24-player multi-day game, we scale the experience to your event.",
    href: "/private-events",
  },
];

const TESTIMONIALS = [
  {
    pull: "\u201C10 out of 10! I had an incredible time.\u201D",
    quote: "It felt like getting all the best parts of the show without having to sleep on the beach.",
    name: "Danielle",
    label: "Season 2",
    photo: "/images/testimonial-danielle.webp",
    initial: "D",
  },
  {
    pull: "\u201COne of the best experiences of my life.\u201D",
    quote: "I found a community of people who I look forward to continuing to get to know after the game. I can't express how grateful I am for the opportunity.",
    name: "Karah",
    label: "Season 2",
    photo: "/images/testimonial-karah.webp",
    initial: "K",
  },
  {
    pull: "\u201CMatt does a phenomenal job hosting.\u201D",
    quote: "Tribal councils are so well done, and he truly brings the Survivor energy you are looking for.",
    name: "Tom",
    label: "Season 2",
    photo: "/images/testimonial-tom.webp",
    initial: "T",
  },
  {
    pull: "\u201C10/10! 5 stars! Would recommend!\u201D",
    quote: "Matt does such a great job making every little detail feel like the real Survivor! Added bonus that you get to walk away with new friends!",
    name: "Casey",
    label: "Season 3",
    photo: "/images/testimonial-casey.webp",
    initial: "C",
  },
  {
    pull: "\u201C10/10 \u2014 Absolutely would do again.\u201D",
    quote: "I've truly never done anything like this, and I really surprised myself throughout the game.",
    name: "Aliya",
    label: "Season 4",
    photo: "/images/testimonial-aliya.webp",
    initial: "A",
  },
  {
    pull: "\u201COne of the most unexpected experiences of my life.\u201D",
    quote: "I met such fantastic people and never imagined I'd become so invested. Would play over and over if I could.",
    name: "Brian",
    label: "Season 4",
    photo: "/images/testimonial-brian.webp",
    initial: "B",
  },
  {
    pull: "\u201COne of the best days of my life.\u201D",
    quote: "It somehow captured the strategy, chaos, social dynamics, and adrenaline of the actual game while still being incredibly fun and well-run. Something I will never forget.",
    name: "Jacqui",
    label: "5/16/26 One-Day Game",
    photo: "/images/testimonial-jacqui.webp",
    initial: "J",
  },
  {
    pull: "\u201CAn absolutely unforgettable experience.\u201D",
    quote: "From the gameplay, to the twists, to the challenges, to the tribals — every moment left us feeling like we were immersed in the game of Survivor.",
    name: "Jake",
    label: "5/16/26 One-Day Game",
    photo: "/images/testimonial-jake.webp",
    initial: "J",
  },
  {
    pull: "\u201CA lot of fun! I got to play Survivor!\u201D",
    quote: "I was really excited for the challenges, and they were awesome to compete in. I was curious to see how this would run — and it turned out to be an incredible experience.",
    name: "Tyler",
    label: "Survivor Manhattan",
    photo: "/images/testimonial-tyler.webp",
    initial: "T",
  },
];

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const n = TESTIMONIALS.length;
  const cardWidth = 100 / 3; // percent per card (3 visible)

  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Duplicate cards to create seamless loop: [...last2, ...all, ...first2]
  const looped = [
    TESTIMONIALS[n - 2],
    TESTIMONIALS[n - 1],
    ...TESTIMONIALS,
    TESTIMONIALS[0],
    TESTIMONIALS[1],
  ];
  const offset = index + 2; // account for the 2 prepended cards

  return (
    <section className="py-24 px-4 border-t border-border bg-foreground">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading uppercase text-center text-background mb-12"
        >
          From the players
        </motion.h2>

        <div className="relative">
          {/* Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${offset * (100 / looped.length)}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{ width: `${looped.length * cardWidth}%` }}
            >
              {looped.map((t, i) => (
                <div
                  key={i}
                  className="px-3"
                  style={{ width: `${100 / looped.length}%` }}
                >
                  <div className="bg-background rounded-sm p-8 flex flex-col items-center text-center h-full">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-6"
                      loading="lazy"
                    />
                    <p className="text-lg font-heading uppercase text-foreground mb-3 leading-tight">
                      {t.pull}
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-1">
                      "{t.quote}"
                    </p>
                    <div>
                      <p className="font-heading uppercase text-foreground text-sm">{t.name}</p>
                      <p className="text-primary text-xs font-bold uppercase tracking-wide">{t.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 flex items-center justify-center bg-primary text-white text-xl rounded-full hover:opacity-80 transition-opacity"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 flex items-center justify-center bg-primary text-white text-xl rounded-full hover:opacity-80 transition-opacity"
          >
            ›
          </button>
        </div>

      </div>

      {/* Apply CTA */}
      <div className="sticky bottom-0 z-20 bg-foreground border-t border-background/20 py-4 px-4">
        <div className="container mx-auto max-w-6xl flex justify-center">
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-heading uppercase tracking-widest text-sm px-10 py-3 hover:opacity-90 transition-opacity"
          >
            Apply To Play
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(
    "Survivor Hoboken | Live Survivor Games & Private Events in NJ & NYC",
    "Survivor Hoboken runs live, multi-season Survivor games and brings custom Survivor experiences to private events, corporate teams, and celebrations across the NYC & NJ metro area."
  );

  return (
    <div className="w-full bg-background">

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/images/challenge-snake-maze.jpeg"
          alt="Players competing head-to-head in a live Survivor Hoboken snake maze immunity challenge"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-4 max-w-4xl mx-auto pt-24"
        >
          <img
            src="/images/logo.png"
            alt="Survivor Hoboken"
            className="h-28 md:h-36 w-auto mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase text-white leading-[0.92] mb-6">
            The real Survivor experience, brought to life.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Real challenges, real competition, and real stakes for communities, companies, and celebrations alike.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/private-events"
              className="bg-primary text-white font-heading uppercase px-8 py-4 text-base rounded hover:opacity-90 transition-opacity text-center"
            >
              Private Events
            </Link>
            <a
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-heading uppercase px-8 py-4 text-base rounded hover:opacity-90 transition-opacity text-center"
            >
              Apply To Play (Rolling Application)
            </a>
          </div>

          <p className="text-white/50 text-sm uppercase tracking-widest font-bold">
            Serving the NYC &amp; NJ metro area
          </p>
        </motion.div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────── */}
      <div className="bg-foreground py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
          className="flex whitespace-nowrap items-center gap-16 font-heading text-xl tracking-wider text-background"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              <span className="italic font-bold text-primary">DO YOU HAVE WHAT IT TAKES?</span>
              <span>HOBOKEN NJ</span>
              <span>SurvivorHoboken.com</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── 3. PROOF BAR ─────────────────────────────────────── */}
      <div className="border-t border-b border-border py-6 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {PROOF_POINTS.map((point) => (
              <p key={point} className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/60">
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. SOCIAL PROOF — CAROUSEL ───────────────────────── */}
      <TestimonialCarousel />

      {/* ── 5. WHAT MAKES IT REAL ────────────────────────────── */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading uppercase text-center text-foreground mb-12"
          >
            What makes it real
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TILES.map((tile, i) => (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={tile.href} className="group block">
                  <div className="overflow-hidden mb-5">
                    <img
                      src={tile.image}
                      alt={tile.alt}
                      loading="lazy"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl uppercase text-foreground mb-2">{tile.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-3">{tile.body}</p>
                  <span className="text-primary font-bold text-xs uppercase tracking-wide group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CLOSING CTA ───────────────────────────────────── */}
      <section className="py-28 px-4 bg-foreground text-background text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-heading text-sm uppercase tracking-widest mb-4">
              Ready to play?
            </p>
            <h2 className="text-5xl md:text-7xl font-heading uppercase text-background leading-tight mb-6">
              The tribe has spoken.
            </h2>
            <p className="text-background/70 text-lg mb-10">
              Let's build your Survivor experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/private-events"
                className="bg-primary text-white font-heading uppercase px-8 py-4 text-base rounded hover:opacity-90 transition-opacity text-center"
              >
                Book your event
              </Link>
              <a
                href={APPLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-heading uppercase px-8 py-4 text-base rounded hover:opacity-90 transition-opacity text-center"
              >
                Apply to play
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
