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
          Book a <span className="text-primary">15-Min Call</span>
        </h2>
        <p className="text-background/80 text-lg mb-12">
          The Tribe Has Spoken — It's Time to Plan Your Event
        </p>
        <div
          className="meetings-iframe-container"
          data-src="https://meetings-na2.hubspot.com/matthew-carlson/private-events-?embed=true"
        />
      </div>
    </section>
  );
}
