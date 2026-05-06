import { motion } from "framer-motion";
import { Link } from "wouter";

export default function SeasonRecaps() {
  const seasons = [
    {
      id: "SZN 4",
      label: "Season 4",
      status: "CURRENT",
      image: "/images/season-4.png",
      title: "April 20th to April 26th",
      desc: "Applications are now closed. The competition has begun.",
      href: null,
    },
    {
      id: "SZN 3",
      label: "Season 3",
      status: "ARCHIVE",
      image: "/images/season-3.png",
      title: "Sole Survivor: LJ Ruiz",
      desc: "14 players from Hoboken, Jersey City, and Weehawken competed September 8th–14th in an intense battle of alliances and blindsides.",
      href: "/season-3",
    },
    {
      id: "SZN 2",
      label: "Season 2",
      status: "ARCHIVE",
      image: "/images/danny-kaplin.png",
      title: "Sole Survivor: Danny Kaplin",
      desc: "15 players, 3 tribes, the first-ever Auction, and the Shot In The Dark — all in the heat of the summer.",
      href: "/season-2",
    },
    {
      id: "SZN 1",
      label: "Season 1",
      status: "ARCHIVE",
      image: "/images/season-1.png",
      title: "Sole Survivor: John Cordone",
      desc: "The inaugural season that started it all — 12 strangers from Hoboken and Jersey City competing for the very first time.",
      href: "/season-1",
    },
  ];

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="py-16 px-4 text-center border-b border-border">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-heading uppercase text-foreground"
        >
          Season Recaps
        </motion.h1>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasons.map((season, i) => {
              const card = (
                <motion.div
                  key={season.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative bg-card border border-border overflow-hidden flex flex-col h-[420px] ${season.href ? "cursor-pointer hover:border-primary transition-colors" : ""}`}
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={season.image}
                      alt={season.label}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between p-8">
                    <div className="flex justify-between items-start">
                      <span className="bg-primary text-white font-heading text-2xl px-4 py-1">
                        {season.id}
                      </span>
                      {season.status === "CURRENT" && (
                        <span className="bg-white text-foreground font-bold px-3 py-1 text-xs tracking-wider uppercase animate-pulse border border-foreground">
                          LIVE
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl font-heading text-white uppercase mb-2">
                        {season.title}
                      </h3>
                      <p className="text-white/80 text-base mb-4">{season.desc}</p>
                      {season.href && (
                        <span className="text-primary font-bold uppercase text-sm tracking-wide group-hover:underline">
                          Read Recap →
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );

              return season.href ? (
                <Link key={season.id} href={season.href}>
                  {card}
                </Link>
              ) : (
                <div key={season.id}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
