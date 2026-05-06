import { motion } from "framer-motion";
import { Link } from "wouter";
import { HubspotBooking } from "@/components/hubspot-booking";

export default function BirthdayParties() {
  return (
    <div className="w-full pt-24">
      <div className="bg-foreground text-background py-20 px-4 border-b-4 border-primary">
        <div className="container mx-auto max-w-5xl">
          <Link href="/private-events" className="inline-block text-background/60 hover:text-primary font-bold uppercase text-sm tracking-wide mb-8 transition-colors">
            ← Private Events
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading mb-6 uppercase leading-none"
          >
            BIRTHDAY<br />
            <span className="text-primary">PARTIES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl text-background/90"
          >
            For kids, teens, and adults who want more than just cake.
          </motion.p>
        </div>
      </div>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8 text-lg font-medium text-foreground/90 max-w-3xl mb-16">
            <p className="text-2xl font-heading uppercase text-foreground">
              Skip the boring party. Play Survivor.
            </p>
            <p>
              Imagine your birthday group split into tribes, competing in custom challenges, voting each other out, and crowning one person the Sole Survivor — all in your honor. It's interactive, hilarious, and unlike anything your guests have ever done.
            </p>
            <p>
              Whether you're turning 16 or 60, a Survivor-themed birthday is the kind of party people talk about for years. Matt Carlson personally facilitates every event, bringing the same energy and structure he uses in Survivor Hoboken's full seasons.
            </p>
            <p>
              If you've ever said <em>"I wish I could play Survivor in real life"</em> — this is it.
            </p>
          </div>

          <div className="bg-card border-4 border-foreground p-8 md:p-12 brutal-shadow relative mb-16">
            <div className="absolute -top-6 right-8 bg-primary text-white font-heading text-2xl px-6 py-2 brutal-shadow transform rotate-2">
              WHAT'S INCLUDED
            </div>
            <ul className="space-y-5 mt-8">
              {[
                "Custom Survivor-style challenges designed for your group",
                "Professional facilitation by Matt Carlson",
                "Tribal Council with live vote reveal",
                "Ideal for groups of 8–30 participants",
                "Works for all ages — kids, teens, and adults",
                "Indoor or outdoor formats available",
                "Fully customizable to your party theme",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-4 h-4 bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary text-white p-8 border-4 border-foreground brutal-shadow">
            <h3 className="font-heading text-2xl uppercase mb-4">Get in Touch</h3>
            <p className="text-white/80 mb-2">Email: <strong className="text-white">Tribal@survivorhoboken.com</strong></p>
            <p className="text-white/80">Call/Text: <strong className="text-white">201-658-2062</strong></p>
          </div>
        </div>
      </section>

      <HubspotBooking />
    </div>
  );
}
