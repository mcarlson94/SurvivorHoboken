import { motion } from "framer-motion";
import { Link } from "wouter";
import { HubspotBooking } from "@/components/hubspot-booking";

export default function CorporateEvents() {
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
            CORPORATE<br />
            <span className="text-primary">TEAM BUILDING</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl text-background/90"
          >
            Better than escape rooms. Compete in tribes, build trust, and boost collaboration.
          </motion.p>
        </div>
      </div>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8 text-lg font-medium text-foreground/90 max-w-3xl mb-16">
            <p className="text-2xl font-heading uppercase text-foreground">
              Team building that your team will actually remember.
            </p>
            <p>
              Forget trust falls and conference room icebreakers. Survivor Hoboken's corporate experience drops your team into a real-life strategy game that demands communication, leadership, and collaboration to win.
            </p>
            <p>
              Employees are split into tribes, compete in physical and mental challenges, and navigate the social dynamics of Tribal Council — all while building the exact skills your company needs: trust, adaptability, and teamwork under pressure.
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
                "Custom challenge design tailored for your team",
                "Professional facilitation by Matt Carlson",
                "Full Tribal Council experience with live vote reveal",
                "Ideal for groups of 8–30 participants",
                "In-person or hybrid formats available",
                "Half-day and full-day packages",
                "Fully customizable to your company culture",
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
