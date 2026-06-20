import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";

const PLAYERS = [
  {
    name: "Nichole Scholl",
    season: "Season 4",
    title: "Sole Survivor — Season 4",
    bio: "Nichole navigated Season 4 with a sharp social game, building trust across tribal lines and surviving every vote until she claimed the title of Sole Survivor.",
  },
  {
    name: "LJ Ruiz",
    season: "Season 3",
    title: "Sole Survivor — Season 3",
    bio: "LJ's combination of challenge strength and strategic positioning made him one of the most dominant winners in Survivor Hoboken history, never losing control of the game.",
  },
  {
    name: "Danny Kaplin",
    season: "Season 2",
    title: "Sole Survivor — Season 2",
    bio: "Danny outlasted 14 other players across Season 2 — a season that introduced the Auction, the Shot In The Dark, and the most aggressive tribal council gameplay the game had seen.",
  },
  {
    name: "Jacqui Cook",
    season: "One Day Game — May 2026",
    title: "Sole Survivor — One Day Game",
    bio: "Jacqui won the first-ever one-day format in Survivor Hoboken history, earning a 4-2-1 jury vote with a social and strategic game that stood out even in the compressed format.",
  },
  {
    name: "Roshan Jobanputra",
    season: "One Day Game — May 2026",
    title: "First Successful Shot in the Dark",
    bio: "Roshan made Survivor Hoboken history at the very first Tribal Council of the one-day game by playing his Shot in the Dark and rolling a six — the first player ever to successfully hit it.",
  },
  {
    name: "Jake Parish",
    season: "One Day Game — May 2026",
    title: "Runner-Up — One Day Game",
    bio: "Jake won three consecutive individual immunity challenges to force his way into the Final 3, one of the most impressive immunity runs in the game's history.",
  },
];

export default function MeetThePlayers() {
  useSEO({
    title: "Meet the Players | Survivor Hoboken Cast",
    description: "Meet the players who've competed across Survivor Hoboken seasons — the strategists, underdogs, and winners of the game.",
    canonical: "https://survivorhoboken.com/meet-the-players/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Meet the Players | Survivor Hoboken Cast",
      "description": "Profiles of notable players across Survivor Hoboken seasons.",
      "url": "https://survivorhoboken.com/meet-the-players/",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Survivor Hoboken",
        "url": "https://survivorhoboken.com",
      },
    },
  });

  return (
    <div className="bg-background text-foreground w-full pt-16 md:pt-20">
      <div className="bg-foreground text-background py-20 px-4 border-b-4 border-primary">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-heading uppercase mb-6">
            Meet the Players
          </h1>
          <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl text-background/80">
            Every Survivor Hoboken season creates new stories — alliances, blindsides, and winners. Here are some of the players who've made the game what it is.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {PLAYERS.map((player) => (
              <article
                key={player.name}
                className="border-4 border-foreground p-8 bg-background"
              >
                <p className="text-primary font-heading uppercase text-sm tracking-widest mb-2">
                  {player.season}
                </p>
                <h2 className="font-heading text-3xl uppercase text-foreground mb-1">
                  {player.name}
                </h2>
                <p className="font-bold uppercase text-sm text-foreground/60 mb-4">
                  {player.title}
                </p>
                <p className="text-foreground/80 leading-relaxed">{player.bio}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t-4 border-primary pt-10">
            <p className="text-foreground/80 text-lg leading-relaxed">
              These are just a few of the players who've competed. Every season brings a new cast of strategists, competitors, and characters.{" "}
              <Link href="/season-recaps" className="text-primary hover:underline font-semibold">
                Read the season recaps
              </Link>{" "}
              for the full story, or{" "}
              <Link href="/" className="text-primary hover:underline font-semibold">
                apply to join an upcoming season
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
