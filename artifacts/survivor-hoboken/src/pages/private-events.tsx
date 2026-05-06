import { motion } from "framer-motion";
import { Link } from "wouter";

export default function PrivateEvents() {
  return (
    <div className="w-full pt-24">
      <div className="bg-secondary text-secondary-foreground py-24 px-4 border-b-4 border-foreground relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-heading mb-6 uppercase text-white"
            >
              PRIVATE<br/>
              <span className="text-primary">EVENTS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 max-w-xl mb-8"
            >
              Want to bring the Survivor Hoboken experience to your private event? We can run a custom Survivor-style competition for your group.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact" className="brutal-button inline-block bg-background text-foreground">
                Get in touch to book
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative aspect-square w-full max-w-md brutal-shadow border-4 border-primary transform rotate-3"
          >
            <img 
              src="/images/private-events.png" 
              alt="Private Events Team Building" 
              className="w-full h-full object-cover filter contrast-125"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white font-heading text-2xl p-4 brutal-shadow transform -rotate-6">
              TEAM BUILDING
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading uppercase inline-block border-b-4 border-foreground pb-2">
              Perfect For
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20 font-heading text-2xl md:text-3xl text-foreground uppercase text-center">
            <span className="bg-card px-6 py-3 border-2 border-foreground brutal-shadow">Corporate Team Building</span>
            <span className="bg-primary text-white px-6 py-3 border-2 border-foreground brutal-shadow transform rotate-1">Birthday Parties</span>
            <span className="bg-card px-6 py-3 border-2 border-foreground brutal-shadow transform -rotate-1">Bachelorette Parties</span>
            <span className="bg-secondary text-white px-6 py-3 border-2 border-foreground brutal-shadow">Reunions & More</span>
          </div>

          <div className="bg-card border-4 border-foreground p-8 md:p-12 brutal-shadow relative">
            <div className="absolute -top-6 right-8 bg-primary text-white font-heading text-3xl px-6 py-2 brutal-shadow transform rotate-2">
              WHAT'S INCLUDED
            </div>
            
            <ul className="space-y-6 mt-8">
              {[
                "Custom challenge design tailored for your group",
                "Professional Game Master facilitation by Matt Carlson",
                "In-person or hybrid formats available",
                "Ideal for groups of 8-30 participants",
                "Fully customizable experience"
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
    </div>
  );
}
