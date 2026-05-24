import { motion } from "framer-motion";
import { Link } from "wouter";
import { HubspotBooking } from "@/components/hubspot-booking";

const eventTypes = [
  {
    href: "/private-events/birthday",
    title: "Birthday Parties",
    tagline: "For kids, teens, and adults who want more than just cake.",
    color: "bg-primary",
    rotate: "rotate-1",
  },
  {
    href: "/private-events/corporate",
    title: "Corporate Team Building",
    tagline: "Better than escape rooms. Compete in tribes, build trust, and boost collaboration.",
    color: "bg-secondary",
    rotate: "-rotate-1",
  },
  {
    href: "/private-events/bachelor",
    title: "Bachelor & Bachelorette",
    tagline: "The ultimate showdown before the big day.",
    color: "bg-foreground",
    rotate: "rotate-1",
  },
];

export default function PrivateEvents() {
  return (
    <div className="w-full pt-16 md:pt-20">
      <div className="bg-secondary text-secondary-foreground py-24 px-4 border-b-4 border-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-heading mb-6 uppercase text-white"
            >
              PRIVATE<br />
              <span className="text-primary">EVENTS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 max-w-xl mb-8"
            >
              Want to bring the Survivor Hoboken experience to your private event? We run custom Survivor-style competitions for any occasion.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative w-full max-w-md border-4 border-primary md:rotate-3"
          >
            <img
              src="/images/private-events.png"
              alt="Private Events Team Building"
              className="w-full aspect-square object-cover filter contrast-125"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-white font-heading text-xl p-3 transform -rotate-3 hidden md:block">
              TEAM BUILDING
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading uppercase inline-block border-b-4 border-foreground pb-2">
              Choose Your Event
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((event, i) => (
              <motion.div
                key={event.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={event.href} className="block group">
                  <div className={`relative border-4 border-foreground brutal-shadow group-hover:translate-x-1 group-hover:translate-y-1 transition-transform`}>
                    <div className={`${event.color} p-8 h-full`}>
                      <h3 className="font-heading text-2xl uppercase text-white mb-4 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-white/80 font-medium mb-6">
                        {event.tagline}
                      </p>
                      <span className="font-heading text-sm uppercase tracking-widest text-white border-b-2 border-white/50 pb-1">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ── FAN ENGAGEMENT ──────────────────────────────────── */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-foreground text-background border-4 border-foreground brutal-shadow p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <p className="text-primary font-heading text-sm uppercase tracking-widest mb-3">
                    Large-Scale Activations
                  </p>
                  <h2 className="text-4xl md:text-5xl font-heading uppercase text-background leading-tight mb-6">
                    Fan Engagement<br />Experiences
                  </h2>
                  <p className="text-background/80 text-lg leading-relaxed mb-6">
                    Bring Survivor Hoboken to your venue as a live fan activation. We set up real immunity challenges on the concourse, field, or floor and let fans compete head-to-head in front of a crowd.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      "Stadiums & Arenas",
                      "Survivor Nights",
                      "Festivals & Fairs",
                      "Trade Shows",
                      "Brand Activations",
                      "Sponsor Events",
                    ].map((venue) => (
                      <div key={venue} className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary shrink-0" />
                        <span className="text-background/90 font-medium text-sm">{venue}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://meetings-na2.hubspot.com/matthew-carlson/private-events-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white font-heading uppercase tracking-widest px-8 py-4 text-sm hover:opacity-90 transition-opacity"
                  >
                    Book a Fan Activation
                  </a>
                </div>

                {/* Somerset Patriots callout */}
                <div className="md:w-72 shrink-0">
                  <div className="bg-background border-4 border-primary p-6 relative">
                    <div className="absolute -top-4 left-6 bg-primary text-white font-heading text-xs uppercase tracking-widest px-3 py-1">
                      As Seen At
                    </div>
                    <p className="text-foreground font-heading text-2xl uppercase mt-2 mb-3">
                      Somerset Patriots
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      We brought live Survivor challenges to the concourse at a Somerset Patriots game, giving fans a real immunity challenge experience between innings.
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-primary font-heading text-xs uppercase tracking-widest">
                        Minor League Baseball ✦ TD Bank Ballpark
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 bg-card border-4 border-foreground p-8 md:p-12 brutal-shadow relative">
            <div className="absolute -top-6 right-8 bg-primary text-white font-heading text-3xl px-6 py-2 brutal-shadow transform rotate-2">
              WHAT'S INCLUDED
            </div>
            <ul className="space-y-6 mt-8">
              {[
                "Custom challenge design tailored for your group",
                "Professional Game Master facilitation by Matt Carlson",
                "In-person or hybrid formats available",
                "Ideal for groups of 8–30 participants",
                "Fully customizable experience",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-xl md:text-2xl font-bold">
                  <div className="w-4 h-4 bg-primary shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HubspotBooking />
    </div>
  );
}
