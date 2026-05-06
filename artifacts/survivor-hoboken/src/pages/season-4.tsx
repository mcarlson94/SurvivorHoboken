import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Season4() {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <Link href="/season-recaps" className="text-sm font-bold uppercase tracking-wide text-foreground/60 hover:text-primary transition-colors mb-6 inline-block">
            ← Season Recaps
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading uppercase text-foreground"
          >
            Survivor Hoboken Season 4 Recap
          </motion.h1>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <div className="space-y-1 text-base">
              <p className="font-bold text-primary uppercase text-lg mt-2">SOLE SURVIVOR: Nichole Scholl</p>
            </div>
            <div className="mt-6">
              <img
                src="/images/nichole-scholl.jpeg"
                alt="Nichole Scholl - Sole Survivor Season 4"
                className="rounded w-full max-w-sm"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4">
            <h4 className="text-2xl font-heading uppercase text-foreground mb-6">Follow on Instagram for news on future seasons</h4>
            <a
              href="https://www.instagram.com/survivorhoboken/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-heading uppercase px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              @survivorhoboken →
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
