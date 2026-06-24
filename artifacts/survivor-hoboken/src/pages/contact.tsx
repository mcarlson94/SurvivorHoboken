import { useSEO } from "@/hooks/use-seo";
import { HubspotBooking } from "@/components/hubspot-booking";

export default function Contact() {
  useSEO({
    title: "Contact Survivor Hoboken",
    description: "Get in touch with Survivor Hoboken to book a private event, join a season, or ask a question. Serving Hoboken, NYC, and NJ.",
    canonical: "https://survivorhoboken.com/contact/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Survivor Hoboken",
      "url": "https://survivorhoboken.com/contact/",
      "description": "Contact Survivor Hoboken to book a private event or join a season.",
    },
  });

  return (
    <div className="bg-background text-foreground w-full pt-16 md:pt-20">
      <div className="bg-foreground text-background py-20 px-4 border-b-4 border-primary">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-heading uppercase mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-3xl text-background/80">
            Ready to book a private Survivor experience, apply for a season, or just have a question? Reach out below.
          </p>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl uppercase mb-8">Get in Touch</h2>
              <ul className="space-y-6 text-lg font-medium">
                <li>
                  <span className="font-heading uppercase text-sm text-foreground/60 block mb-1">Email</span>
                  <a
                    href="mailto:Tribal@survivorhoboken.com"
                    className="text-primary hover:underline text-xl"
                  >
                    Tribal@survivorhoboken.com
                  </a>
                </li>
                <li>
                  <span className="font-heading uppercase text-sm text-foreground/60 block mb-1">Phone</span>
                  <a
                    href="tel:2016582062"
                    className="text-primary hover:underline text-xl"
                  >
                    201-658-2062
                  </a>
                </li>
                <li>
                  <span className="font-heading uppercase text-sm text-foreground/60 block mb-1">Instagram</span>
                  <a
                    href="https://www.instagram.com/survivorhoboken/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-xl"
                  >
                    @survivorhoboken
                  </a>
                </li>
                <li>
                  <span className="font-heading uppercase text-sm text-foreground/60 block mb-1">Service Area</span>
                  <span className="text-foreground/80">Based in Hoboken · Serving the NJ/NY metro and beyond</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl uppercase mb-8">Book a 15-Min Call</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                The fastest way to get your questions answered and lock in availability for a private event is a quick 15-minute call with Matt.
              </p>
              <div className="border-4 border-foreground overflow-hidden" style={{ height: 420 }}>
                <iframe
                  src="https://meetings-na2.hubspot.com/matthew-carlson/private-events-?embed=true"
                  title="Schedule a call with Survivor Hoboken"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="camera; microphone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
