import { motion } from "framer-motion";
import { Link } from "wouter";
import { HubspotBooking } from "@/components/hubspot-booking";
import { usePageMeta } from "@/hooks/use-page-meta";
import { PrivateEventVideo } from "@/components/private-event-video";
import { ChallengeSlider } from "@/components/challenge-slider";
import { ReviewsSlider } from "@/components/reviews-slider";

const testimonials = [
  {
    quote: "10 out of 10! I had an incredible time. It felt like getting all the best parts of the show without having to sleep on the beach.",
    name: "Danielle",
    season: "Hoboken SZN 2",
  },
  {
    quote: "A lot of fun! I got to play Survivor! I was really excited for the challenges, and they were awesome to compete in. I was curious to see how this would run, and it turned out to be an incredible experience.",
    name: "Tyler",
    season: "Manhattan SZN 1",
  },
  {
    quote: "Matt does a phenomenal job hosting. Tribal councils are so well done, and he truly brings the Survivor energy you are looking for.",
    name: "Tom",
    season: "Hoboken SZN 2",
  },
];

const faqs = [
  {
    q: "Do we vote people out?",
    a: "If you would like the REAL Survivor Experience with Tribal Councils, Blindsides, Hidden Immunity Idols, Twists and more we can provide that! Our typical corporate package is more challenge and team building based.",
  },
  {
    q: "How physical are the challenges?",
    a: "Challenges are designed for all fitness levels. Think strategy and coordination rather than CrossFit. We can adjust difficulty based on your team's abilities.",
  },
  {
    q: "How far in advance should we book?",
    a: "2-4 weeks minimum, but 6-8 weeks is ideal, especially for larger groups or specific dates. We can try to make things work on a quicker timeline if needed.",
  },
  {
    q: "Can remote team members participate virtually?",
    a: "Currently our experience is designed for in-person participation, but we're developing hybrid options. Contact us to discuss.",
  },
  {
    q: "Do you provide food/drinks?",
    a: "No, we do not provide food or drinks.",
  },
];

const perfectFor = [
  "Sales Kickoffs: Start the quarter with high energy and team alignment",
  "Department Offsites: Break down silos between teams",
  "New Team Integration: Help new hires or merged teams bond",
  "Annual Company Retreats: Make it the highlight of your gathering",
  "Leadership Development: See who steps up under pressure",
  "Summer Outings: Beat the typical picnic or happy hour",
  "End-of-Year Celebrations: Reward your team with something epic",
];

export default function CorporateEvents() {
  usePageMeta(
    "Survivor Corporate Team Building NJ & NYC - Survivor Hoboken",
    "Survivor-style corporate team building in NYC, NJ & Central Jersey. Professional host, real challenges, team competition. Book your event today."
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
            Survivor-Style Corporate Team Building in NJ &amp; NYC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl text-background/90 mb-8"
          >
            Build stronger teams through competition, strategy, and real challenges, just like the hit TV show.
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

      <PrivateEventVideo />

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 text-lg font-medium text-foreground/90 max-w-3xl mb-12">
            <p>
              Your team doesn't need another trust fall. They need an experience that actually gets them working together, communicating under pressure, and having fun while doing it.
            </p>
            <p>
              That's exactly what our Survivor-style corporate team building delivers. Real challenges. Real competition. Real results.
            </p>
            <p>
              Based in Hoboken and serving companies across Northern NJ, Central NJ, Manhattan, Jersey City, and the entire NYC metro area, we bring everything you need for an unforgettable team building event.
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

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-6">What Is Survivor-Style Team Building?</h2>
          <div className="space-y-4 text-lg font-medium text-foreground/90 max-w-3xl mb-4">
            <p>Imagine your team competing in the same challenges you've watched on TV: strategy games, physical competitions, puzzle-solving, and high-stakes tribal councils.</p>
            <p>We divide your group into tribes, each wearing colored buffs. Over 2-4 hours, they'll compete in a series of carefully designed challenges that require:</p>
          </div>
          <ul className="space-y-3 mb-6 max-w-3xl">
            {[
              "Clear communication: Coordinating under time pressure",
              "Physical teamwork: Working together to complete tasks",
              "Creative problem-solving: Thinking outside the box",
              "Trust building: Relying on teammates' strengths",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg font-medium">
                <div className="w-4 h-4 bg-primary shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-medium text-foreground/80 max-w-3xl mb-16">
            Unlike escape rooms or generic team building activities, Survivor events get people moving, competing, and genuinely engaged for the entire event.
          </p>

          <ChallengeSlider />

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-heading uppercase">Our Signature Corporate Format</h2>
            <span className="text-foreground/50 font-bold text-sm uppercase tracking-wide">Roughly ~4 hours</span>
          </div>
          <p className="text-lg font-medium text-foreground/80 max-w-3xl mb-10">
            This is our proven structure for corporate groups. Three phases, one scoring system, and a finale your team will talk about for years.
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-4 border-foreground brutal-shadow p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <span className="bg-primary text-white font-heading text-sm uppercase px-3 py-1 w-fit">Phase 1</span>
                <span className="text-foreground/50 font-bold text-sm uppercase tracking-wide">~90 min</span>
              </div>
              <h3 className="font-heading text-2xl uppercase mb-3">Tribes Form</h3>
              <p className="text-foreground/80 leading-relaxed">
                Players draw buffs and split into tribes of six. Tribes compete head-to-head in physical and coordination challenges: balance, dexterity, teamwork. Every member of a winning tribe earns fire tokens. This phase is pure team building: you win together or you lose together.
              </p>
            </div>

            <div className="border-4 border-foreground brutal-shadow p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <span className="bg-primary text-white font-heading text-sm uppercase px-3 py-1 w-fit">Phase 2</span>
                <span className="text-foreground/50 font-bold text-sm uppercase tracking-wide">~60 min</span>
              </div>
              <h3 className="font-heading text-2xl uppercase mb-3">Stations Open</h3>
              <p className="text-foreground/80 leading-relaxed">
                Tribes dissolve. Every player is now on their own. Individual skill stations open across the floor: puzzles, snake mazes, stacked up, slide puzzles. Players rotate freely, challenge each other head-to-head, and earn fire tokens solo. A rolling leaderboard keeps the pressure on.
              </p>
            </div>

            <div className="border-4 border-foreground brutal-shadow p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <span className="bg-primary text-white font-heading text-sm uppercase px-3 py-1 w-fit">Phase 3</span>
                <span className="text-foreground/50 font-bold text-sm uppercase tracking-wide">~75 min</span>
              </div>
              <h3 className="font-heading text-2xl uppercase mb-3">Final Six</h3>
              <p className="text-foreground/80 leading-relaxed">
                The top fire token earners advance to the finale. Everyone else becomes the live audience and jury. The finale runs your way: a pure challenge gauntlet with immunity rounds and no vote-outs, or a full Tribal Council format with votes and a Sole Survivor crowned at the end. Full Probst-mode energy, either way.
              </p>
            </div>
          </div>

          <div className="bg-foreground text-background p-6 border-l-4 border-primary mb-16">
            <p className="font-heading text-lg uppercase mb-1">Fire Tokens</p>
            <p className="text-background/75 leading-relaxed">
              Fire tokens are the scoring currency that runs through all three phases. Earn them in tribal challenges, earn them at individual stations, and carry them into the finale. The player who accumulates the most has the best shot at advancing, but the finale is where it all gets decided.
            </p>
          </div>

          <div className="bg-card border-4 border-foreground brutal-shadow p-8 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading uppercase mb-3">Built for Your Team</h2>
            <p className="text-lg font-medium text-foreground/80 mb-8">
              The three-phase format is our proven default. We'll happily reshape it around your headcount, timeline, and goals.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "Group Size",
                  body: "Optimized for around 30 players. We routinely run events for 20 to 50, and can build out larger formats with more tribes, more stations, and an expanded finale for bigger companies.",
                },
                {
                  label: "Time",
                  body: "Standard format runs 3 to 4 hours. We can compress it for a tight schedule or extend it for a full-day experience.",
                },
                {
                  label: "Finale Style",
                  body: "Challenge-only gauntlet with no vote-outs, or a full Tribal Council with live votes and a Sole Survivor. Your call: we run both at the same level.",
                },
                {
                  label: "Custom Elements",
                  body: "Company-branded buffs, themed tribe names, and custom challenges built around your team or industry. These are available as add-ons.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p className="font-heading uppercase text-base text-primary">{item.label}</p>
                  <p className="text-foreground/80 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">Perfect For These Corporate Events</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {perfectFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-lg font-medium p-4 bg-card border-2 border-foreground/20">
                <span className="text-primary font-bold text-xl shrink-0">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">Pricing &amp; Details</h2>
          <div className="bg-card border-4 border-foreground p-8 brutal-shadow mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg uppercase mb-2">Group Size</h3>
                <p className="text-foreground/80">Works best for teams of 8-20 participants. Have a larger group? We have two options:</p>
                <ul className="mt-2 space-y-1 text-foreground/80">
                  <li>• We can adapt the full Survivor experience for groups of 20-40 (contact us to discuss logistics)</li>
                  <li>• For groups of 40+, we can bring our complete challenge library and create a challenge fair format where teams rotate through different Survivor challenges at their own pace</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase mb-2">Duration Options</h3>
                <ul className="space-y-1 text-foreground/80">
                  <li>• 2-Hour Express: Core experience, 3-4 challenges</li>
                  <li>• 3-Hour Standard: Full experience, 5-6 challenges</li>
                  <li>• 4-Hour Premium: Extended gameplay, 7-8 challenges</li>
                  <li>• Full-Day Adventure: Multiple rounds, more complex strategy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase mb-2">Starting Investment</h3>
                <p className="text-foreground/80">Contact us for custom pricing based on group size and duration.</p>
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase mb-2">What's Included</h3>
                <ul className="space-y-1 text-foreground/80">
                  {[
                    "Professional host/facilitator",
                    "All challenges, props, and equipment",
                    "Tribe buffs for all participants",
                    "Hidden immunity idols",
                    "Tribal council setup",
                    "Setup and breakdown",
                  ].map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase mb-2">Available Add-Ons</h3>
                <ul className="space-y-1 text-foreground/80">
                  <li>• Custom challenges based on your company</li>
                  <li>• Branded buffs with your company logo</li>
                </ul>
              </div>
            </div>
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
