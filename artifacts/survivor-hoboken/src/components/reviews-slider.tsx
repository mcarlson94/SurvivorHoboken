import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Tom",
    label: "Season 2 Player",
    pull: "\u201CMatt does a phenomenal job hosting.\u201D",
    quote: "Tribal councils are so well done, and he truly brings the Survivor energy you are looking for.",
    photo: "/images/testimonial-tom.webp",
  },
  {
    name: "Cary",
    label: "NYC 31st Birthday Party \u2014 May 2025",
    pull: "\u201CA fun and unique birthday event!\u201D",
    quote: "Matt was very professional through all the prep and ultimately pulled together an awesome set of challenges that all the guests loved. Highly recommend this for a fun and unique birthday event!",
    photo: null,
  },
  {
    name: "Danielle",
    label: "Season 2 Player",
    pull: "\u201C10 out of 10! I had an incredible time.\u201D",
    quote: "It felt like getting all the best parts of the show without having to sleep on the beach.",
    photo: "/images/testimonial-danielle.webp",
  },
  {
    name: "Rachel",
    label: "NJ Birthday Party \u2014 Feb 2026",
    pull: "\u201CWorth every penny. Highly recommend!\u201D",
    quote: "We hired Survivor Hoboken for my son's 13th birthday and it was absolutely incredible. From the second the host arrived he brought nonstop energy and had the kids completely engaged. The challenges felt like a real Survivor experience and everyone was all in the entire time (which is saying a lot for a group of middle schoolers!)\n\nMy son is a huge Survivor fan and this was truly a core memory for him. He hasn't stopped talking about it. The kids were screaming, strategizing, and having the best time, and the parents are still texting me about how amazing it was. Worth every penny. Highly recommend!",
    photo: null,
  },
];

const CHAR_LIMIT = 140;
const PAD = 2;

function ReviewCard({ review }: { review: (typeof REVIEWS)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > CHAR_LIMIT;
  const displayText =
    !isLong || expanded
      ? review.quote
      : review.quote.slice(0, CHAR_LIMIT).trimEnd() + "\u2026";

  return (
    <div className="bg-background border-4 border-foreground p-6 md:p-8 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-5">
        {review.photo ? (
          <img
            src={review.photo}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-primary shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="font-heading text-2xl text-white">{review.name[0]}</span>
          </div>
        )}
        <div>
          <p className="font-heading text-lg uppercase text-foreground leading-tight">{review.name}</p>
          <p className="text-primary text-xs font-bold uppercase tracking-wide">{review.label}</p>
        </div>
      </div>

      <p className="font-heading text-base uppercase text-foreground mb-3 leading-snug">
        {review.pull}
      </p>

      <p className="text-foreground/70 text-sm leading-relaxed flex-1">
        &ldquo;{displayText}&rdquo;
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-3 text-primary font-bold text-xs uppercase tracking-widest hover:underline self-start"
        >
          {expanded ? "Read less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
}

export type Review = (typeof REVIEWS)[0];

export function ReviewsSlider({ reviews = REVIEWS }: { reviews?: Review[] } = {}) {
  const [cardsVisible, setCardsVisible] = useState(2);
  const n = reviews.length;

  useEffect(() => {
    const update = () => setCardsVisible(window.innerWidth < 768 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cardWidth = 100 / cardsVisible;

  const looped = [
    ...Array.from({ length: PAD }, (_, i) => reviews[(n - PAD + i + n) % n]),
    ...reviews,
    ...Array.from({ length: PAD }, (_, i) => reviews[i % n]),
  ];
  const totalLen = looped.length;

  const [displayOffset, setDisplayOffset] = useState(PAD);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (instant) return;
    let target: number | null = null;
    if (displayOffset < PAD) target = displayOffset + n;
    else if (displayOffset >= PAD + n) target = displayOffset - n;
    if (target === null) return;
    const id = setTimeout(() => {
      setInstant(true);
      setDisplayOffset(target!);
    }, 460);
    return () => clearTimeout(id);
  }, [displayOffset, instant, n]);

  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  const prev = useCallback(() => setDisplayOffset((d) => d - 1), []);
  const next = useCallback(() => setDisplayOffset((d) => d + 1), []);

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-heading uppercase">
          What People Are Saying
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 flex items-center justify-center bg-foreground text-background text-xl hover:bg-primary transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 flex items-center justify-center bg-foreground text-background text-xl hover:bg-primary transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex items-stretch"
          animate={{ x: `-${displayOffset * (100 / totalLen)}%` }}
          transition={instant ? { duration: 0 } : { duration: 0.45, ease: "easeInOut" }}
          style={{ width: `${totalLen * cardWidth}%` }}
        >
          {looped.map((review, i) => (
            <div
              key={i}
              className="px-2 md:px-3"
              style={{ width: `${100 / totalLen}%` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
