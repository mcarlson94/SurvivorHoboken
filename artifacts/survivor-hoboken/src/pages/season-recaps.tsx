import { motion } from "framer-motion";

export default function SeasonRecaps() {
  const seasons = [
    {
      id: "SZN 4",
      status: "CURRENT",
      image: "/images/season-4.png",
      title: "April 20th to April 26th",
      desc: "Applications are now closed. The competition has begun."
    },
    {
      id: "SZN 3",
      status: "ARCHIVE",
      image: "/images/season-3.png",
      title: "High Stakes & Blindsides",
      desc: "Season 3 brought even more drama, blindsides, and incredible challenge performances from Hoboken's most competitive players."
    },
    {
      id: "SZN 2",
      status: "ARCHIVE",
      image: "/images/season-2.png",
      title: "Raising the Bar",
      desc: "Season 2 raised the stakes with tougher challenges and bigger twists. Danielle called it one of the best experiences of her life."
    },
    {
      id: "SZN 1",
      status: "ARCHIVE",
      image: "/images/season-1.png",
      title: "The Inaugural Season",
      desc: "The inaugural season that started it all. Hoboken's first Survivor experience brought together 16 players for an unforgettable week of competition."
    }
  ];

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-heading uppercase text-foreground inline-block relative"
        >
          SEASON RECAPS
          <span className="absolute -bottom-4 left-1/4 right-1/4 h-2 bg-primary"></span>
        </motion.h1>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {seasons.map((season, i) => (
              <motion.div
                key={season.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-card border-4 border-foreground brutal-shadow overflow-hidden flex flex-col h-[500px]"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={season.image} 
                    alt={season.id} 
                    className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between p-8">
                  <div className="flex justify-between items-start">
                    <span className="bg-primary text-white font-heading text-3xl px-4 py-1 brutal-shadow">
                      {season.id}
                    </span>
                    {season.status === "CURRENT" && (
                      <span className="bg-background text-foreground font-bold px-3 py-1 text-sm tracking-wider uppercase animate-pulse border-2 border-foreground">
                        LIVE
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-heading text-white uppercase mb-3 line-clamp-2">
                      {season.title}
                    </h3>
                    <p className="text-white/90 text-lg font-medium line-clamp-3">
                      {season.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
