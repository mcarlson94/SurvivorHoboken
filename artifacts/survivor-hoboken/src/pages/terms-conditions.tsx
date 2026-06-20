import { useSEO } from "@/hooks/use-seo";

export default function TermsConditions() {
  useSEO({
    title: "Terms & Conditions | Survivor Hoboken",
    description: "The terms and conditions for participating in Survivor Hoboken games and private events.",
    canonical: "https://survivorhoboken.com/terms-conditions/",
  });

  return (
    <div className="bg-background text-foreground w-full pt-16 md:pt-20">
      <div className="bg-foreground text-background py-20 px-4 border-b-4 border-primary">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-heading uppercase mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-background/70 text-lg">Last updated: June 2026</p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg text-foreground/80 space-y-10">

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">1. Participation</h2>
            <p>By registering for or participating in any Survivor Hoboken event — including public seasons, private events, corporate team-building sessions, birthday parties, or any other format — you agree to these terms and conditions in full.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">2. Physical Activity &amp; Risk</h2>
            <p>Survivor Hoboken events involve physical activity including, but not limited to, running, carrying objects, balance challenges, puzzles, and outdoor activities. Participants acknowledge that physical activity carries inherent risks. By participating, you confirm that you are physically fit to take part and accept all risks associated with physical participation.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">3. Liability Waiver</h2>
            <p>Survivor Hoboken, its organizers, hosts, and staff are not liable for any personal injury, loss, or damage to property that occurs during an event. Participants may be required to sign a separate liability waiver before competing.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">4. Photo &amp; Video Consent</h2>
            <p>By participating in a Survivor Hoboken event, you grant Survivor Hoboken the right to photograph and video record you during the event and to use that content for promotional purposes, including on social media, the website, and marketing materials. If you do not consent, you must notify the organizer in writing before the event.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">5. Private Events: Deposits &amp; Cancellations</h2>
            <p>Private event bookings require a deposit to secure the date. Deposits are non-refundable unless Survivor Hoboken cancels the event. Cancellations by the client within 14 days of the event date may result in forfeiture of all payments made. Please contact us directly to discuss specific circumstances.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">6. Conduct</h2>
            <p>All participants are expected to compete with sportsmanship and respect. Survivor Hoboken reserves the right to remove any participant from an event for behavior deemed unsafe, disruptive, or disrespectful, without refund.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">7. Not Affiliated with CBS</h2>
            <p>Survivor Hoboken is an independent, privately run game inspired by the Survivor format. It is not affiliated with, sponsored by, or endorsed by CBS, the producers of the Survivor television show, or any related entities.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">8. Changes to Terms</h2>
            <p>Survivor Hoboken reserves the right to update these terms at any time. Continued participation in events after any update constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl uppercase text-foreground mb-3">9. Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a href="mailto:Tribal@survivorhoboken.com" className="text-primary hover:underline">
                Tribal@survivorhoboken.com
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
