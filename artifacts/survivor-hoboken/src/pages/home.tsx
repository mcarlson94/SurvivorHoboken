import { motion } from "framer-motion";
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
    image: "/images/survivor-hoboken-snake-maze-challenge.webp",
    alt: "Players competing in a custom Survivor snake maze challenge at a Survivor Hoboken event",
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
    image: "/images/challenge-ring-toss.jpeg",
    alt: "Groups of players competing together in a Survivor Hoboken team challenge",
    title: "Built for Any Group",
    body: "From an intimate party to a 24-player multi-day game, we scale the experience to your event.",
    href: "/private-events",
  },
];

const TESTIMONIALS = [
  {
    pull: "10 out of 10! I had an incredible time.",
    quote: "It felt like getting all the best parts of the show without having to sleep on the beach.",
    name: "Danielle",
    label: "Season 2",
    photo: "",
    initial: "D",
  },
  {
    pull: "One of the best experiences of my life.",
    quote: "I found a community of people who I look forward to continuing to get to know after the game. I can't express how grateful I am for the opportunity.",
    name: "Karah",
    label: "Season 2",
    photo: "",
    initial: "K",
  },
  {
    pull: "10/10! 5 stars! Would recommend!",
    quote: "Matt does such a great job making every little detail feel like the real Survivor! Added bonus that you get to walk away with new friends!",
    name: "Casey",
    label: "Season 3",
    photo: "",
    initial: "C",
  },
  {
    pull: "Matt does a phenomenal job hosting.",
    quote: "Tribal councils are so well done, and he truly brings the Survivor energy you are looking for.",
    name: "Tom",
    label: "Player",
    photo: "",
    initial: "T",
  },
];

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

      {/* ── 4. SOCIAL PROOF ──────────────────────────────────── */}
      <section className="py-24 px-4 border-t border-border bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading uppercase text-center text-foreground mb-12"
          >
            From the players
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border p-8"
              >
                <p className="text-2xl font-heading uppercase text-foreground mb-4 leading-tight">
                  {t.pull}
                </p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-primary text-white font-heading flex items-center justify-center rounded-full text-sm shrink-0">
                      {t.initial}
                    </div>
                  )}
                  <div>
                    <p className="font-heading uppercase text-foreground text-sm">{t.name}</p>
                    <p className="text-primary text-xs font-bold uppercase">{t.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
