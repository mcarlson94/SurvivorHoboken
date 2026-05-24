import { useState } from "react";
import { Link } from "wouter";
import { BookingModal } from "@/components/booking-modal";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z"/>
    </svg>
  );
}

export function Footer() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <footer className="bg-secondary text-secondary-foreground border-t-4 border-foreground mt-24">
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    alt="Survivor Hoboken"
                    className="h-20 w-auto mb-4"
                  />
                </Link>
                <p className="text-secondary-foreground/80 max-w-md font-medium text-lg leading-relaxed">
                  Survivor Hoboken designs and produces unforgettable Survivor-style experiences. We bring the game people love to life with real challenges, real competition, and real stakes for communities, companies, and celebrations alike.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl mb-4">Quick Links</h3>
                <ul className="flex flex-col gap-3 font-bold uppercase tracking-wider text-sm">
                  <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="/challenges" className="hover:text-primary transition-colors">Challenges</Link></li>
                  <li><Link href="/rule-book" className="hover:text-primary transition-colors">Rule Book</Link></li>
                  <li><Link href="/season-recaps" className="hover:text-primary transition-colors">Season Recaps</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-xl mb-4">Connect</h3>
                <ul className="flex flex-col gap-3 font-bold uppercase tracking-wider text-sm">
                  <li><Link href="/private-events" className="hover:text-primary transition-colors">Private Events</Link></li>
                  <li>
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="hover:text-primary transition-colors uppercase tracking-wider text-sm font-bold"
                    >
                      Book a 15-Min Call
                    </button>
                  </li>
                  <li>
                    <a href="mailto:Tribal@survivorhoboken.com" className="hover:text-primary transition-colors">
                      Tribal@survivorhoboken.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:2016582062" className="hover:text-primary transition-colors">
                      201-658-2062
                    </a>
                  </li>
                </ul>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.instagram.com/survivorhoboken/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Survivor Hoboken on Instagram"
                    className="hover:text-primary transition-colors"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.tiktok.com/@survivorhoboken"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Survivor Hoboken on TikTok"
                    className="hover:text-primary transition-colors"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-foreground/60 font-medium text-sm">
                &copy; {new Date().getFullYear()} Survivor Hoboken. All rights reserved.
              </p>
              <p className="text-secondary-foreground/60 font-medium text-sm text-center md:text-right">
                Not affiliated with CBS or Survivor TV Show.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
