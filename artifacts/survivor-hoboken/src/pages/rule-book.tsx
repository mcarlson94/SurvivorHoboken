import { motion } from "framer-motion";

const sections = [
  {
    number: "01",
    title: "Tribes",
    items: [
      <>Players will be <strong>divided into tribes</strong>.</>,
      <>These tribes will be <strong>chosen by the gamemaster</strong>.</>,
      <>These tribes will <strong>compete against each other in challenges</strong>.</>,
      <>The <strong>losing tribe/tribes of each challenge will attend Tribal Council</strong>, where they will vote out a member.</>,
      <>A <strong>tribe swap may occur at any point</strong> during the game to shake things up.</>,
      <>Eventually, the tribes will <strong>merge</strong> into one group <strong>where contestants will now compete in individual immunity challenges</strong>.</>,
    ],
  },
  {
    number: "02",
    title: "Challenges",
    items: [
      <>Challenges will take place <strong>daily</strong> and will test a combination of <strong>physical, mental, and strategic skills</strong>.</>,
      <>Before the challenge takes place, each team will have the opportunity to ask questions; however, there may be some challenges where contestants will not have the opportunity to ask questions.</>,
      <><strong>Pre-merge challenges</strong> will be <strong>tribe-based</strong>, with the winning tribe earning immunity and the losing tribe/tribes going to Tribal Council.</>,
      <>If tribes have uneven numbers, there may be instances where some players must sit out and cheer on their team.</>,
      <><strong>Post-merge challenges</strong> will be <strong>individual immunity challenges</strong>, with the winner safe from elimination.</>,
      <>Some challenges may include <strong>puzzles, endurance, team coordination, balance, memory, or trivia</strong>.</>,
      <>In the event of a <strong>tie in a challenge</strong>, a tiebreaker will be determined by the gamemaster.</>,
      <>The gamemaster will oversee and ensure fairness in all challenges.</>,
      <>If a team is deemed to be cheating in the challenge by the gamemaster, they can be penalized in that challenge, or if the infraction is severe, they may be given a loss and sent to Tribal Council.</>,
    ],
  },
  {
    number: "03",
    title: "Tribal Council",
    items: [
      <>Tribal Council can take place <strong>in person or via Google Meet</strong>.</>,
      <>If Tribal Council is taking place via Google Meet, contestants are <strong>REQUIRED</strong> to have their cameras on. If they do not, without a good reason, they will not be able to vote, and their vote will not count. However, they can still be voted out by the other contestants.</>,
      <>If Tribal Council is on Google Meets, players will <strong>cast their vote via a text message to the gamemaster</strong>.</>,
      <>Once your text message is sent, you <strong>CANNOT</strong> change your vote.</>,
      <>If the gamemaster sees that the message is edited, the vote will not count.</>,
      <>When Tribal Council is in person, sometimes <strong>players will write down their votes</strong>, other times they will cast their vote via a text message to the gamemaster.</>,
      <>If you have a <strong>Hidden Immunity Idol</strong> or <strong>advantage</strong>, you can play it at any time during Tribal Council.</>,
      <>Just like Jeff Probst, the gamemaster will ask if anyone has any advantages or Hidden Immunity Idols and would like to play it — <strong>now would be the time to do so</strong>.</>,
      <>Once the gamemaster says, "I will read the votes," <strong>NO advantages can be played</strong>.</>,
      <><strong>Tiebreaker Rule:</strong> If there is a tie, everyone <strong>except</strong> the two tied players will revote.</>,
      <>If the revote also results in a tie, those two players are <strong>SAFE</strong>, and the remaining at-risk players will <strong>draw rocks</strong> to determine who goes home.</>,
      <>Any player who played an idol or has individual immunity is also <strong>safe</strong>.</>,
      <>If you still have an idol but did not play it before the tie, it is <strong>too late</strong> and it <strong>CANNOT be used</strong>.</>,
      <>In-person tribals will actually be <strong>drawing rocks</strong>, while Google Meet tribals will be done via a <strong>random name spinner</strong>.</>,
    ],
  },
  {
    number: "04",
    title: "Voted Out / Jury",
    items: [
      <>If you are voted out, you will have a quick exit interview with the gamemaster.</>,
      <>If Tribal Council is held via Google Meet, you must stay on the call for a few extra minutes before leaving.</>,
      <>If you are voted out while holding an advantage, that advantage is <strong>eliminated from the game</strong>.</>,
      <>Once eliminated, you are expected to <strong>leave the team group chat</strong> and refrain from interfering in the game.</>,
      <>While there is <strong>nothing physically preventing you</strong> from being around the other players, we ask that you <strong>respect the integrity of the game</strong> and refrain from interfering once eliminated.</>,
      <>If you are eliminated at a stage in the game where you make the jury, you will still be invited to attend Tribal Council and all remaining immunity challenges.</>,
      <>If you are on the jury, we ask that you <strong>do not interact with the players</strong> at Tribal Council.</>,
      <>If Tribal Council is held via Google Meet, jury members must join the call but <strong>remain muted with their cameras off</strong>.</>,
    ],
  },
  {
    number: "05",
    title: "Final 4",
    items: [
      <>Just like old-school Survivor, after the Final 4 individual immunity challenge, there will be a typical tribal council.</>,
      <>If the votes are split 2-2, the 2 people who received votes will then compete in a head-to-head challenge to determine who makes it to the final 3.</>,
    ],
  },
  {
    number: "06",
    title: "Final Tribal Council & Winning the Game",
    items: [
      <>The final remaining players will face the <strong>jury at Final Tribal Council</strong>.</>,
      <>Each finalist will have the opportunity to <strong>make their case</strong> for why they deserve to win.</>,
      <>Just like old-school Survivor, each jury member will have the chance to <strong>ask one question or make one statement — nothing more</strong> to the finalists.</>,
      <>After questioning, each jury member will cast a <strong>final vote for the winner</strong>.</>,
      <>The player with the <strong>most votes from the jury</strong> will be crowned the <strong>Sole Survivor</strong>.</>,
      <>If there is a tie between two players, the other finalist will cast the deciding vote to determine the winner.</>,
      <>If there is a tie between all three finalists, the players who are present at the final tribal council that did not make the jury will vote to determine the winner.</>,
      <>If the revote still results in a tie, a <strong>challenge will determine the winner of the game</strong>.</>,
    ],
  },
  {
    number: "07",
    title: "Absent Players",
    items: [
      <>If a player <strong>misses a challenge</strong>, they will not receive any advantages or exemptions.</>,
      <>If a player <strong>misses Tribal Council</strong>, they <strong>cannot vote</strong> but <strong>can still be voted out</strong>.</>,
      <>If a player <strong>shows up late after the vote begins</strong>, they will <strong>NOT</strong> be able to vote.</>,
      <>If team members are in communication with the late player, a <strong>5-minute grace period</strong> may be allowed at the gamemaster's discretion.</>,
      <>If a jury member <strong>misses Final Tribal Council</strong>, they will <strong>lose their right to vote for the winner</strong>.</>,
      <>The gamemaster reserves the right to <strong>remove a player from the game</strong> if repeated absences disrupt the integrity of the competition.</>,
    ],
  },
  {
    number: "08",
    title: "Advantages",
    items: [
      <>There may be advantages in this game, such as <strong>Hidden Immunity Idols</strong>.</>,
      <>If you find an advantage, you <strong>MUST</strong> text the gamemaster immediately and send a picture of the advantage as proof of possession.</>,
      <>The gamemaster will <strong>like your message</strong> to indicate they have seen it but will <strong>NOT verify</strong> whether or not the advantage is real.</>,
      <>The gamemaster <strong>MUST</strong> know who has the advantages at all times.</>,
      <>If you give the advantage to someone else, you <strong>MUST</strong> text in a group chat with the gamemaster and the recipient.</>,
      <>The gamemaster will <strong>like the message</strong> to verify they have seen the transfer.</>,
      <>If you are voted out with an advantage, that advantage is <strong>fully eliminated from the game</strong>.</>,
      <>The last Tribal Council where advantages can be played is when there are <strong>5 players left in the game</strong>.</>,
      <>If Tribal Council is in person, you <strong>must have the advantage in your possession</strong>.</>,
      <>If Tribal Council is held via Google Meet, you <strong>must have the advantage in your possession and show it on camera</strong>.</>,
      <>If you play an advantage during a Google Meets tribal, you must then return the advantage to the game master the next time you see them.</>,
      <>Advantages can be played <strong>up until the gamemaster completes saying "I will read the votes" and starts reading the first vote</strong>.</>,
    ],
  },
  {
    number: "09",
    title: "Shot In The Dark",
    items: [
      <>When it's your turn to vote, instead of texting Matt a player's name, text: <strong>"shot in the dark."</strong> If you are writing down your vote, write <strong>"Shot In the Dark."</strong></>,
      <>This means you are <strong>giving up your vote</strong> for the round in exchange for a <strong>1 in 6 chance at safety</strong>.</>,
      <>You must have the shot in the dark in your possession in order to play it. After you use it, it is taken by the gamemaster and is out of the game.</>,
      <>If you play your Shot in the Dark, it will be <strong>publicly revealed by the gamemaster at Tribal Council</strong>. You do <strong>not</strong> need to announce it yourself.</>,
      <><strong>In person:</strong> You'll roll a standard <strong>6-sided die</strong>. If you roll a <strong>6</strong>, you are SAFE. Any other number = not safe.</>,
      <><strong>On Google Meet:</strong> The gamemaster will share their screen and spin a <strong>6-sided wheel</strong>, with one section labeled SAFE.</>,
      <><strong>If You're Safe:</strong> Any votes against you <strong>will not count</strong>, and you <strong>cannot be eliminated</strong>.</>,
      <><strong>If You're Not Safe:</strong> Your vote is still lost, and you remain <strong>fully vulnerable to being voted out</strong>.</>,
      <>Each player is given one shot in the dark at the beginning of the game.</>,
      <>A shot in the dark can be transferred to you from an ACTIVE player <strong>on your tribe.</strong> To transfer, both players must text Matt in a group chat to confirm the handoff.</>,
      <>At Tribal Council, if a Shot in the Dark has been played, Matt will announce it right before reading the votes, and the player will come forward to roll (or watch the spin).</>,
      <>After the Shot in the Dark result is revealed, other players or that player may use any other advantages.</>,
      <>If multiple players use Shot in the Dark in the same round, each rolls (or spins) separately.</>,
      <>All Shot in the Dark rolls are public and witnessed live at Tribal Council.</>,
      <>The last tribal that the Shot In The Dark can be used is when there are <strong>6 players left</strong> in the game.</>,
      <>If you use your shot in the dark and the vote is a tie, <strong>you will not get a vote at the revote</strong>.</>,
      <>If you lose your shot in the dark you will not be given another shot in the dark.</>,
    ],
  },
  {
    number: "10",
    title: "Code of Conduct",
    items: [
      <>This game is meant to be <strong>fun</strong> for all players.</>,
      <>Harassment or <strong>physical violence</strong> of any kind will <strong>not</strong> be tolerated.</>,
      <>If a player is deemed to be a <strong>risk to the safety</strong> of others, the gamemaster has the <strong>right to remove them</strong> from the game.</>,
    ],
  },
];

export default function RuleBook() {
  return (
    <div className="w-full pt-16 md:pt-20 bg-background min-h-screen">
      {/* Hero */}
      <div className="py-20 px-4 text-center border-b-4 border-foreground relative overflow-hidden bg-card">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#1a1a1a_25%,transparent_25%,transparent_50%,#1a1a1a_50%,#1a1a1a_75%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading uppercase text-foreground mb-6"
          >
            OFFICIAL<br />
            <span className="text-primary brutal-shadow bg-foreground text-background px-4 inline-block mt-2">
              RULE BOOK
            </span>
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold border-l-8 border-primary pl-6 mb-14 bg-white/50 p-6 brutal-shadow"
          >
            Survivor Hoboken will be played similar to your favorite reality TV show Survivor without the cameras, grueling conditions, and living together.
          </motion.p>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="bg-card border-2 border-foreground brutal-shadow-hover transition-transform hover:-translate-y-1"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 px-6 py-4 border-b-2 border-foreground">
                  <span className="font-heading text-4xl text-primary leading-none w-16 shrink-0">
                    {section.number}
                  </span>
                  <h3 className="text-xl font-heading uppercase text-foreground">
                    {section.title}
                  </h3>
                </div>

                {/* Bullet List */}
                <ul className="px-6 py-5 space-y-3 pl-10 list-disc marker:text-primary">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-foreground/80 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary text-primary-foreground p-12 text-center brutal-shadow transform rotate-1"
          >
            <h2 className="text-4xl text-background font-heading uppercase mb-6">The Bottom Line</h2>
            <p className="text-2xl font-bold leading-tight">
              If you've ever dreamed of being on Survivor or love the game of Survivor, this is your chance to play! This is designed to play the game of Survivor that we all know and love and bring people together in the community.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
