import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/challenges", label: "Challenges" },
  { href: "/rule-book", label: "Rule Book" },
  { href: "/private-events", label: "Private Events" },
  { href: "/season-recaps", label: "Season Recaps" },
];

const APPLY_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfAVG1NEsjl69NL5jo6Y9sGMXXhxXXSqXvpjker7g8chpQElg/viewform?usp=header";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-transparent ${
        scrolled ? "bg-background/95 backdrop-blur-md border-foreground shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50 group">
          <span className="font-heading text-2xl tracking-tighter group-hover:text-primary transition-colors">
            SURVIVOR<br />HOBOKEN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-button text-sm px-4 py-2"
          >
            Apply To Play
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-background border-b-4 border-foreground shadow-2xl pt-24 pb-8 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 items-center text-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-heading text-2xl uppercase ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={APPLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button w-full mt-4"
              >
                Apply To Play
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
