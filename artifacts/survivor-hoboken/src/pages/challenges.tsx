import { motion } from "framer-motion";

export default function Challenges() {
  return (
    <div className="w-full pt-20">
      <div className="bg-primary text-primary-foreground py-20 px-4 border-b-4 border-foreground text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 uppercase brutal-shadow inline-block px-8 py-4 bg-background text-foreground transform -rotate-2"
          >
            CHALLENGE<br />EXAMPLES
          </motion.h1>
        </div>
      </div>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-heading mb-8 uppercase text-foreground border-l-8 border-primary pl-6">
                IN PERSON CHALLENGES
              </h2>
              <div className="space-y-6 text-lg font-medium leading-relaxed">
                <p>
                  Survivor Hoboken features a wide variety of challenges designed to test many different skills throughout the game. While strategy and social gameplay are critical, challenges play a major role in determining who gains power and who is at risk.
                </p>
                <p className="bg-card p-6 border-2 border-foreground brutal-shadow">
                  Players can expect competitions that test balance, endurance, coordination, puzzle-solving ability, and mental toughness. Some challenges require standing perfectly still while maintaining balance under pressure. Others test focus and patience as players work through complex puzzles or problem-solving tasks. Many challenges also require teamwork, where tribes must communicate and coordinate to succeed.
                </p>
                <p>
                  No two challenges are exactly the same. Some emphasize physical stamina, others require precision and accuracy, and many push players to stay calm and focused while competing under pressure.
                </p>
                <p className="text-xl font-bold text-primary">
                  In Survivor Hoboken, challenges are designed to push players both physically and mentally, rewarding those who can stay composed, think clearly, and perform when it matters most.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video brutal-shadow border-4 border-foreground overflow-hidden"
              >
                <img 
                  src="/images/challenge-ring-toss.jpeg" 
                  alt="Ring Toss Challenge at TD Bank Park" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video brutal-shadow border-4 border-foreground overflow-hidden transform rotate-2"
              >
                <img 
                  src="/images/challenge-pinball.jpeg" 
                  alt="Pinball Challenge" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative aspect-video brutal-shadow border-4 border-foreground overflow-hidden transform -rotate-1"
              >
                <img 
                  src="/images/challenge-field.jpeg" 
                  alt="Field Challenge" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary text-secondary-foreground p-8 md:p-12 brutal-shadow"
          >
            <h2 className="text-4xl md:text-5xl font-heading mb-8 uppercase text-white border-b-4 border-primary pb-4 inline-block">
              AT HOME CHALLENGES
            </h2>
            <div className="space-y-6 text-xl font-medium max-w-4xl">
              <p>
                Occasionally, we include at-home challenges during Survivor Hoboken. For these challenges, players will receive instructions a few hours before the challenge begins.
              </p>
              
              <div className="bg-background text-foreground p-8 border-4 border-primary brutal-shadow mt-8">
                <p className="font-heading text-2xl mb-4 text-primary uppercase">Example from Season 2:</p>
                <p className="text-2xl font-bold mb-6 leading-tight">
                  "Each player had to text the Game Master the names of 5 U.S. states."
                </p>
                <ul className="space-y-4 text-lg ml-6 list-disc marker:text-primary">
                  <li>The player who submitted the most unique states (states that no other player submitted) won Immunity.</li>
                  <li>If there was a tie in the number of unique states, the winner was determined by which tied player submitted the state with the larger population.</li>
                  <li className="font-bold text-primary">All state submissions had to be sent by 6:30 PM EST.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
