import { useEffect } from "react";

export function HubspotBooking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 px-4 bg-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading uppercase text-background mb-4">
          The Tribe Has Spoken
        </h2>
        <p className="text-background/60 text-lg mb-8">
          It's time to plan your event. Book a 15-min call or reach out directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:Tribal@survivorhoboken.com"
            className="text-xl md:text-2xl font-heading uppercase text-background hover:text-primary transition-colors tracking-wide"
          >
            Tribal@survivorhoboken.com
          </a>
          <span className="hidden sm:block text-background/30 text-2xl">|</span>
          <a
            href="tel:2016582062"
            className="text-xl md:text-2xl font-heading uppercase text-background hover:text-primary transition-colors tracking-wide"
          >
            201-658-2062
          </a>
        </div>
        <div
          className="meetings-iframe-container"
          data-src="https://meetings-na2.hubspot.com/matthew-carlson/private-events-?embed=true"
        />
      </div>
    </section>
  );
}
