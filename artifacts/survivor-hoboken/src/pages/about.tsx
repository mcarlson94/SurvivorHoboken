import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full pt-16 md:pt-20">
      <div className="bg-foreground text-background py-20 px-4 border-b-4 border-primary">
        <div className="container mx-auto max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading mb-8"
          >
            ABOUT US
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl space-y-6"
          >
            <p>
              Born from a passion for Survivor and a love of competition, Survivor Hoboken is designed to bring people together, challenge them, and create lasting friendships.
            </p>
            <p className="text-primary font-bold">
              At its core, this is a passion project — one that brings value to others through unforgettable experiences.
            </p>
            <p>
              While the vision is to keep evolving, our focus today is on building and strengthening Survivor Hoboken through live competitions, watch parties, and local events.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              <img
                src="/images/matt-1.png"
                alt="Matt Carlson"
                className="w-full h-64 object-cover object-[center_35%] border-4 border-foreground"
              />
              <img
                src="/images/matt-2.png"
                alt="Matt Carlson - Survivor Hoboken Day Two"
                className="w-full h-64 object-cover object-[center_18%] border-4 border-foreground"
              />
              <div className="relative col-span-2">
                <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3"></div>
                <img
                  src="/images/matt-4.jpeg"
                  alt="Matt Carlson"
                  className="relative z-10 w-full h-60 object-cover object-top border-4 border-foreground"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-heading mb-8 uppercase leading-none">
                MEET YOUR<br/>
                <span className="text-primary">JEFF PROBST</span>
              </h2>
              <div className="space-y-6 text-lg font-medium text-foreground/90">
                <p className="text-2xl font-heading uppercase text-foreground mb-4">
                  Survivor Hoboken is facilitated by Matt Carlson.
                </p>
                <p>
                  Matt fell in love with Survivor over 10 years ago and has applied for the show more than six times.
                </p>
                <p>
                  Ever since he saw games being facilitated across the country, like Survivor Maryland, he's wanted to run one himself. Now, he's creating unforgettable Survivor experiences and building a community right here in Hoboken.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
