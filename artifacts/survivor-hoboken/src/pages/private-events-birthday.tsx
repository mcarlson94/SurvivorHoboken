import { motion } from "framer-motion";
import { Link } from "wouter";
import { HubspotBooking } from "@/components/hubspot-booking";
import { useSEO } from "@/hooks/use-seo";
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
    quote: "A lot of fun! I got to play Survivor! I was really excited for the challenges, and they were awesome to compete in. I was curious to see how this would run — and it turned out to be an incredible experience.",
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
    q: "How far in advance should we book?",
    a: "Most birthday parties book 4-8 weeks out. That said, we can often accommodate short notice requests – just reach out and we'll do our best to make it work!",
  },
  {
    q: "Do people need to know Survivor to enjoy this?",
    a: "At least some of your group should be familiar with Survivor, or everyone should familiarize themselves with the rules or watch a few episodes beforehand to understand the basics. Matt will run through the rules quickly at the start, but having that foundation makes the strategy way more fun. For competitive challenges only (no voting/elimination): Zero Survivor knowledge needed! We'll just run exciting physical and mental competitions, keep score, and crown a winner. Perfect for mixed groups or people who just want to compete and have fun.",
  },
  {
    q: "Can we take photos and videos?",
    a: "Absolutely! We encourage you to document everything. Just know that we don't film or produce video content – we're focused on running an amazing live event, not making a TV show. If you want footage of the experience, you'll need to coordinate your own videographer or designate someone to capture it.",
  },
  {
    q: "How physical are the challenges?",
    a: "Challenges are designed for all fitness levels – think strategy and coordination rather than CrossFit. We include a mix of physical, mental, and balance challenges so everyone has a chance to shine. We can adjust difficulty based on your group's abilities.",
  },
  {
    q: "Do you provide food/drinks?",
    a: "No, we do not provide food or drinks.",
  },
];

export default function BirthdayParties() {
  useSEO({
    title: "Survivor Birthday Party | Survivor Hoboken",
    description: "Throw a Survivor-themed birthday party in NYC or NJ. Custom challenges, a tribal council, and a host who runs the whole game for you.",
    canonical: "https://survivorhoboken.com/private-events/birthday/",
  });

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
            Survivor Birthday Party NJ &amp; NYC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-lg md:text-xl font-bold uppercase text-primary mb-4"
          >
            Professional Live Reality Game Show Host
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl text-background/90 mb-8"
          >
            Experience Survivor with your friends and family—real challenges, tribal councils, and strategic gameplay.
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

      <PrivateEventVideo src="/videos/corporate-event.mp4" poster="/videos/corporate-event-poster.jpg" portrait />

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 text-lg font-medium text-foreground/90 max-w-3xl mb-12">
            <p>
              Your birthday deserves better than cake, small talk, and everyone checking their phones an hour in. You need an experience that actually gets people engaged, competing, laughing, and creating memories they'll talk about for months.
            </p>
            <p>
              That's exactly what our Survivor birthday parties deliver. Real immunity challenges. Real tribal councils. Real competition.
            </p>
            <p>
              Based in Hoboken and serving Northern NJ, Central NJ, Manhattan, Jersey City, and the entire NYC metro area, we bring everything you need to turn your birthday into an unforgettable Survivor experience (Ages 10+).
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

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">Why Our Survivor Birthday Party Experience Stands Out?</h2>
          <div className="space-y-4 text-lg font-medium text-foreground/90 max-w-3xl mb-16">
            <p>We've run multiple successful games across Survivor Hoboken and Survivor Manhattan. We know which challenges spark the most fun and drama, and Matt knows exactly how to ask the right questions at Tribal Council to bring the Survivor energy.</p>
            <ul className="space-y-3 mt-4">
              {[
                "We bring everything: challenges, props, puzzles, immunity idols, and buffs.",
                "We bring the energy: professional hosting so you feel like you have your own Jeff Probst.",
                "We bring the drama: tribal councils, hidden immunity idols, and unforgettable moments.",
                "We bring it anywhere: your home, parks, event spaces across NYC & NJ.",
                "We fit your schedule: from a quick 90-minute showdown, to a full-day adventure, to an epic weekend or week-long game.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-primary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold">This isn't just another event. It's Survivor 🌴🔥</p>
          </div>

          <ChallengeSlider />

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">How Your Survivor Birthday Party Works</h2>
          <div className="space-y-10 mb-16">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-heading uppercase mb-3">1. We Plan Your Event (15-30 min call)</h3>
              <p className="font-bold mb-2">Want the FULL Survivor experience?</p>
              <p className="text-foreground/80 mb-4">Blindsides, secret alliances, hidden idols, scrambling before tribal council, fire-making at final 4 – we'll orchestrate the complete strategic game. Perfect for superfans who want to actually play Survivor.</p>
              <p className="font-bold mb-2">Want fun competitive challenges without the drama?</p>
              <p className="text-foreground/80">No problem! We can run a few hours of exciting physical and mental challenges, keep score, crown a winner – without the social strategy element. Perfect for mixed groups or people who just want to compete and have fun.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-heading uppercase mb-3">2. Game Day – We Handle Everything</h3>
              <p className="text-foreground/80 mb-3">We arrive 30 – 60 minutes early to set up challenge stations, tribal council area, and any props.</p>
              <ul className="space-y-2 text-foreground/80">
                {[
                  "Tribe divisions with custom buffs",
                  "Immunity challenges tailored to your group's competitive level",
                  "Tribal councils",
                  "Hidden advantages (if you want them)",
                  "Final showdown and winner crowned",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-primary shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground/80 mt-3">You just show up and play. We handle timing, logistics, equipment, hosting, and making sure everyone's engaged.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-heading uppercase mb-3">3. Post-Game Debrief &amp; Clean Up</h3>
              <p className="text-foreground/80">We crown the Sole Survivor, pack up all the equipment, and your group gets to spend the rest of the party reliving every challenge, alliance, and blindside.</p>
              <p className="text-foreground/80 mt-2">(And if your group is like most of ours, people will still be talking about betrayals and big moves for months.)</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-8">Who Is This For?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border-4 border-foreground p-6 brutal-shadow">
              <h3 className="font-heading text-xl uppercase mb-3">Any Age, Any Group</h3>
              <p className="text-foreground/80">We customize the Survivor experience for kids (10+), teens, adults, and mixed-age family groups. Whether you want lighthearted competition for younger players or full strategic gameplay for superfans, we adapt to your group.</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 brutal-shadow">
              <h3 className="font-heading text-xl uppercase mb-3">Ideal Group Size: 10-20 guests</h3>
              <p className="text-foreground/80">This gives you the perfect balance of competition, strategy, and engagement – everyone gets to play, form alliances, and compete for immunity.</p>
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
