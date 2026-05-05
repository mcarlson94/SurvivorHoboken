import { motion } from "framer-motion";

export default function RuleBook() {
  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="py-16 px-4 text-center border-b border-border">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading uppercase text-foreground"
        >
          Rule Book
        </motion.h1>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading uppercase mb-4 text-foreground">Rules</h2>
          </motion.div>

          {/* 1. Tribes */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">1. Tribes</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>Players will be <strong>divided into tribes</strong>.</li>
              <li>These tribes will be <strong>chosen by the gamemaster</strong>.</li>
              <li>These tribes will <strong>compete against each other in challenges</strong>.</li>
              <li>The <strong>losing tribe/tribes of each challenge will attend Tribal Council</strong>, where they will vote out a member.</li>
              <li>A <strong>tribe swap may occur at any point</strong> during the game to shake things up.</li>
              <li>Eventually, the tribes will <strong>merge</strong> into one group <strong>where contestants will now compete in individual immunity challenges</strong>.</li>
            </ul>
          </motion.div>

          {/* 2. Challenges */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">2. Challenges</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>Challenges will take place <strong>daily</strong> and will test a combination of <strong>physical, mental, and strategic skills</strong>.</li>
              <li>Before the challenge takes place, each team will have the opportunity to ask questions; however, there may be some challenges where contestants will not have the opportunity to ask questions.</li>
              <li><strong>Pre-merge challenges</strong> will be <strong>tribe-based</strong>, with the winning tribe earning immunity and the losing tribe/tribes going to Tribal Council.</li>
              <li>If tribes have uneven numbers, there may be instances where some players must sit out and cheer on their team.</li>
              <li><strong>Post-merge challenges</strong> will be <strong>individual immunity challenges</strong>, with the winner safe from elimination.</li>
              <li>Some challenges may include <strong>puzzles, endurance, team coordination, balance, memory, or trivia</strong>.</li>
              <li>In the event of a <strong>tie in a challenge</strong>, a tiebreaker will be determined by the gamemaster.</li>
              <li>The gamemaster will oversee and ensure fairness in all challenges.</li>
              <li>If a team is deemed to be cheating in the challenge by the gamemaster, they can be penalized in that challenge, or if the infraction is severe, they may be given a loss and sent to Tribal Council.</li>
            </ul>
          </motion.div>

          {/* 3. Tribal Council */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">3. Tribal Council</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>Tribal Council can take place <strong>in person or via Google Meet</strong>.</li>
              <li>If Tribal Council is taking place via Google Meet, contestants are <strong>REQUIRED</strong> to have their cameras on. If they do not, without a good reason, they will not be able to vote, and their vote will not count. However, they can still be voted out by the other contestants.</li>
              <li>If Tribal Council is on Google Meets, players will <strong>cast their vote via a text message to the gamemaster</strong>.</li>
              <li>Once your text message is sent, you <strong>CANNOT</strong> change your vote.</li>
              <li>If the gamemaster sees that the message is edited, the vote will not count.</li>
              <li>When Tribal Council is in person, sometimes <strong>players will write down their votes</strong>, other times they will cast their vote via a text message to the gamemaster.</li>
              <li>If you have a <strong>Hidden Immunity Idol</strong> or <strong>advantage</strong>, you can play it at any time during Tribal Council.</li>
              <li>Just like Jeff Probst, the gamemaster will ask if anyone has any advantages or Hidden Immunity Idols and would like to play it — <strong>now would be the time to do so</strong>.</li>
              <li>Once the gamemaster says, "I will read the votes," <strong>NO advantages can be played</strong>.</li>
              <li><strong>Tiebreaker Rule:</strong> If there is a tie, everyone <strong>except</strong> the two tied players will revote.</li>
              <li>If the revote also results in a tie, those two players are <strong>SAFE</strong>, and the remaining at-risk players will <strong>draw rocks</strong> to determine who goes home.</li>
              <li>Any player who played an idol or has individual immunity is also <strong>safe</strong>.</li>
              <li>If you still have an idol but did not play it before the tie, it is <strong>too late</strong> and it <strong>CANNOT be used</strong>.</li>
              <li>In-person tribals will actually be <strong>drawing rocks</strong>, while Google Meet tribals will be done via a <strong>random name spinner</strong>.</li>
            </ul>
          </motion.div>

          {/* 4. Voted Out/Jury */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">4. Voted Out / Jury</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>If you are voted out, you will have a quick exit interview with the gamemaster.</li>
              <li>If Tribal Council is held via Google Meet, you must stay on the call for a few extra minutes before leaving.</li>
              <li>If you are voted out while holding an advantage, that advantage is <strong>eliminated from the game</strong>.</li>
              <li>Once eliminated, you are expected to <strong>leave the team group chat</strong> and refrain from interfering in the game.</li>
              <li>While there is <strong>nothing physically preventing you</strong> from being around the other players, we ask that you <strong>respect the integrity of the game</strong> and refrain from interfering once eliminated.</li>
              <li>If you are eliminated at a stage in the game where you make the jury, you will still be invited to attend Tribal Council and all remaining immunity challenges.</li>
              <li>If you are on the jury, we ask that you <strong>do not interact with the players</strong> at Tribal Council.</li>
              <li>If Tribal Council is held via Google Meet, jury members must join the call but <strong>remain muted with their cameras off</strong>.</li>
            </ul>
          </motion.div>

          {/* 5. Final 4 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">5. Final 4</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>Just like old-school Survivor, after the Final 4 individual immunity challenge, there will be a typical tribal council.</li>
              <li>If the votes are split 2-2, the 2 people who received votes will then compete in a head-to-head challenge to determine who makes it to the final 3.</li>
            </ul>
          </motion.div>

          {/* 6. Final Tribal Council */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">6. Final Tribal Council &amp; Winning the Game</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>The final remaining players will face the <strong>jury at Final Tribal Council</strong>.</li>
              <li>Each finalist will have the opportunity to <strong>make their case</strong> for why they deserve to win.</li>
              <li>Just like old-school Survivor, each jury member will have the chance to <strong>ask one question or make one statement — nothing more</strong> to the finalists.</li>
              <li>After questioning, each jury member will cast a <strong>final vote for the winner</strong>.</li>
              <li>The player with the <strong>most votes from the jury</strong> will be crowned the <strong>Sole Survivor</strong>.</li>
              <li>If there is a tie between two players, the other finalist will cast the deciding vote to determine the winner.</li>
              <li>If there is a tie between all three finalists, the players who are present at the final tribal council that did not make the jury will vote to determine the winner.</li>
              <li>If the revote still results in a tie, a <strong>challenge will determine the winner of the game</strong>.</li>
            </ul>
          </motion.div>

          {/* 7. Absent Players */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">7. Absent Players</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>If a player <strong>misses a challenge</strong>, they will not receive any advantages or exemptions.</li>
              <li>If a player <strong>misses Tribal Council</strong>, they <strong>cannot vote</strong> but <strong>can still be voted out</strong>.</li>
              <li>If a player <strong>shows up late after the vote begins</strong>, they will <strong>NOT</strong> be able to vote.</li>
              <li>If team members are in communication with the late player, a <strong>5-minute grace period</strong> may be allowed at the gamemaster's discretion.</li>
              <li>If a jury member <strong>misses Final Tribal Council</strong>, they will <strong>lose their right to vote for the winner</strong>.</li>
              <li>The gamemaster reserves the right to <strong>remove a player from the game</strong> if repeated absences disrupt the integrity of the competition.</li>
            </ul>
          </motion.div>

          {/* 8. Advantages */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">8. Advantages</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>There may be advantages in this game, such as <strong>Hidden Immunity Idols</strong>.</li>
              <li>If you find an advantage, you <strong>MUST</strong> text the gamemaster immediately and send a picture of the advantage as proof of possession.</li>
              <li>The gamemaster will <strong>like your message</strong> to indicate they have seen it but will <strong>NOT verify</strong> whether or not the advantage is real.</li>
              <li>The gamemaster <strong>MUST</strong> know who has the advantages at all times.</li>
              <li>If you give the advantage to someone else, you <strong>MUST</strong> text in a group chat with the gamemaster and the recipient.</li>
              <li>The gamemaster will <strong>like the message</strong> to verify they have seen the transfer.</li>
              <li>If you are voted out with an advantage, that advantage is <strong>fully eliminated from the game</strong>.</li>
              <li>The last Tribal Council where advantages can be played is when there are <strong>5 players left in the game</strong>.</li>
              <li>If Tribal Council is in person, you <strong>must have the advantage in your possession</strong>.</li>
              <li>If Tribal Council is held via Google Meet, you <strong>must have the advantage in your possession and show it on camera</strong>.</li>
              <li>If you play an advantage during a Google Meets tribal, you must then return the advantage to the game master the next time you see them.</li>
              <li>Advantages can be played <strong>up until the gamemaster completes saying "I will read the votes" and starts reading the first vote</strong>.</li>
            </ul>
          </motion.div>

          {/* 9. Shot In The Dark */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">9. Shot In The Dark</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>When it's your turn to vote, instead of texting Matt a player's name, text: <strong>"shot in the dark." If you are writing down your vote, write "Shot In the Dark"</strong></li>
              <li>This means you are <strong>giving up your vote</strong> for the round in exchange for a <strong>1 in 6 chance at safety</strong>.</li>
              <li>You must have the shot in the dark in your possession in order to play it, after you use your shot in the dark it is taken by the gamemaster and is out of the game.</li>
              <li>If you play your Shot in the Dark, it will be <strong>publicly revealed by the gamemaster at Tribal Council</strong>. You do <strong>not</strong> need to announce it yourself.</li>
              <li><strong>In person:</strong> You'll roll a standard <strong>6-sided die</strong>. If you roll a <strong>6</strong>, you are SAFE. Any other number = not safe.</li>
              <li><strong>On Google Meet:</strong> The gamemaster will share their screen and spin a <strong>6-sided wheel</strong>, with one section labeled SAFE.</li>
              <li><strong>If You're Safe:</strong> Any votes against you <strong>will not count</strong>, and you <strong>cannot be eliminated.</strong></li>
              <li><strong>If You're Not Safe:</strong> Your vote is still lost, and you remain <strong>fully vulnerable to being voted out</strong>.</li>
              <li>Each player is given one shot in the dark at the beginning of the game.</li>
              <li>A shot in the dark can be transferred to you from an ACTIVE player <strong>on your tribe.</strong> To transfer a Shot in the Dark, both players must text Matt in a group chat to confirm the handoff.</li>
              <li>At Tribal Council, if a Shot in the Dark has been played, Matt will announce it right before reading the votes, and the player will come forward to roll (or watch the spin).</li>
              <li>After the Shot in the Dark result is revealed, other players or that player may use any other advantages.</li>
              <li>If multiple players use Shot in the Dark in the same round, each rolls (or spins) separately.</li>
              <li>All Shot in the Dark rolls are public and witnessed live at Tribal Council.</li>
              <li>The last tribal that the Shot In The Dark can be used is when there are 6 players left in the game.</li>
              <li>If you use your shot in the dark and the vote is a tie, <strong>you will not get a vote at the revote</strong>.</li>
              <li>If you lose your shot in the dark you will not be given another shot in the dark.</li>
            </ul>
          </motion.div>

          {/* 10. Code of Conduct */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-heading uppercase mb-4 text-foreground">10. Code of Conduct</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed list-disc pl-6">
              <li>This game is meant to be <strong>fun</strong> for all players.</li>
              <li>Harassment or <strong>physical violence</strong> of any kind will <strong>not</strong> be tolerated.</li>
              <li>If a player is deemed to be a <strong>risk to the safety</strong> of others, the gamemaster has the <strong>right to remove them</strong> from the game.</li>
            </ul>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
