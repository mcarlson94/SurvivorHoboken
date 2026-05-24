import { motion } from "framer-motion";
import { Link } from "wouter";
import { HubspotBooking } from "@/components/hubspot-booking";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ChallengeSlider } from "@/components/challenge-slider";
import { ReviewsSlider } from "@/components/reviews-slider";

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "Most private games book 4–8 weeks out. That said, we can often accommodate short notice — just reach out and we'll see what we can make work.",
  },
  {
    q: "Where do these games take place?",
    a: "We can run games at your rental house, campsite, backyard, park, or any event space. If you're planning a weekend getaway, we'll coordinate around your venue and schedule.",
  },
  {
    q: "Do people need to know Survivor to play?",
    a: "At least some of your group should be familiar with Survivor, or everyone should watch a few episodes beforehand to understand the basics. Matt will run through the rules at the start, but having that foundation makes the strategy way more fun.",
  },
  {
    q: "How long does a full game run?",
    a: "A full Survivor-style game with challenges, tribal councils, and a finale typically runs 6–10 hours. We can also spread it across multiple days for a true immersive experience. Shorter formats (2–4 hours) are available if you just want challenges and competition without the full strategic game.",
  },
  {
    q: "What's included?",
    a: "We bring everything: challenges, props, puzzles, immunity idols, buffs, tribal council setup, and professional hosting by Matt Carlson. You just show up and play.",
  },
];

export default function PrivateGames() {
  usePageMeta(
    "Private Survivor Games – Weekend Getaways & Reunions | Survivor Hoboken",
    "Turn your weekend getaway, friend trip, or reunion into the ultimate Survivor experience. Real challenges, tribal councils, and professional hosting."
  );

  return (
    <div className="w-full pt-16 md:pt-20">
      <div className="bg-foreground text-background py-20 px-4 border-b-4 border-primary">
        <div className="container mx-auto max-w-5xl">
          <Link href="/private-events" className="inline-block text-background/60 hover:text-primary font-bold uppercase text-sm tracking-wide mb-8 transition-colors">
            ← Private Events
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading mb-4 uppercase leading-none"
          >
            Private Games
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-lg md:text-xl font-bold uppercase text-primary mb-4"
          >
            The Ultimate Survivor Experience
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl text-background/90 mb-8"
          >
            Weekend getaway. Friend trip. Reunion. Whatever the occasion — we'll turn it into a full Survivor experience your group will never forget.
          </motion.p>
          <motion.a
            href="https://meetings-na2.hubspot.com/matthew-carlson/private-events-"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-block bg-primary text-white font-heading text-xl px-8 py-4 border-4 border-white brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
          >
            Schedule 15-min Call
          </motion.a>
        </div>
      </div>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 text-lg font-medium text-foreground/90 max-w-3xl mb-12">
            <p>
              You're planning something special — a weekend away with your closest friends, a reunion that finally gets everyone together, a trip where you actually do something unforgettable. Don't settle for the same bars and restaurants.
            </p>
            <p>
              We bring the full Survivor experience to you: real immunity challenges, tribal councils, hidden idols, alliances, and a professional host who keeps the energy and drama dialed in from start to finish.
            </p>
            <p>
              Whether it's a one-day showdown or spread across an entire weekend, we'll build the game around your group, your schedule, and your vibe.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <a
              href="https://meetings-na2.hubspot.com/matthew-carlson/private-events-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-heading text-xl px-8 py-4 border-4 border-foreground brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
            >
              Schedule 15-min Call
            </a>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">What We Can Build For You</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "The Full Game",
                body: "Tribes, challenges, tribal councils, hidden immunity idols, fire-making, and a Sole Survivor crowned at the end. This is the complete Survivor experience — strategic, social, and unforgettable.",
              },
              {
                title: "Multi-Day Adventure",
                body: "Spread the game across your entire trip. Morning challenges, evening tribal councils, alliance scheming in between. Perfect for a weekend rental house or camp getaway.",
              },
              {
                title: "Challenges Only",
                body: "No voting, no elimination — just a full day of competitive Survivor challenges with scoring and a champion crowned at the end. Great for mixed groups or anyone who wants pure competition.",
              },
              {
                title: "Custom Format",
                body: "Tell us your group size, timeframe, and goals. We'll design the format around you — from 2 hours to 2 days, 8 players to 30+.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border-4 border-foreground p-6 brutal-shadow">
                <h3 className="font-heading text-xl uppercase mb-3">{item.title}</h3>
                <p className="text-foreground/80">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">Perfect For</h2>
          <ul className="space-y-3 text-lg font-medium text-foreground/90 max-w-3xl mb-16">
            {[
              "Weekend getaways and rental houses",
              "Friend group reunions",
              "College or post-college trips",
              "Superfan groups who want to actually play the game",
              "Any occasion where you want a real shared experience",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-4 h-4 bg-primary shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ChallengeSlider />

          <div className="flex justify-center my-16">
            <a
              href="https://meetings-na2.hubspot.com/matthew-carlson/private-events-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-heading text-xl px-8 py-4 border-4 border-foreground brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
            >
              Schedule 15-min Call
            </a>
          </div>

          <ReviewsSlider />

          <HubspotBooking />

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="border-4 border-foreground p-6 brutal-shadow">
                <h3 className="font-heading text-lg uppercase mb-3">{faq.q}</h3>
                <p className="text-foreground/80">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="https://meetings-na2.hubspot.com/matthew-carlson/private-events-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-heading text-xl px-8 py-4 border-4 border-foreground brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
            >
              Schedule 15-min Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
