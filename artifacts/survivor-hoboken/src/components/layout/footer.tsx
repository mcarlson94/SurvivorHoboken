import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 border-t-4 border-foreground mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading mb-4 text-primary">SURVIVOR HOBOKEN</h2>
            <p className="text-secondary-foreground/80 max-w-md font-medium text-lg leading-relaxed">
              A live reality competition packed with daily challenges, tribal councils, and nonstop strategy — all leading to one local being crowned the Sole Survivor of Hoboken.
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
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="mailto:matt@survivorhoboken.com" className="hover:text-primary transition-colors">matt@survivorhoboken.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 font-medium text-sm">
            © {new Date().getFullYear()} Survivor Hoboken. All rights reserved.
          </p>
          <p className="text-secondary-foreground/60 font-medium text-sm text-center md:text-right">
            Not affiliated with CBS or Survivor TV Show.
          </p>
        </div>
      </div>
    </footer>
  );
}
