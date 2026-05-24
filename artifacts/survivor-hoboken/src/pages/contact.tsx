import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="w-full pt-16 md:pt-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading uppercase text-foreground mb-6">
              GET IN<br />
              <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-xl font-medium leading-relaxed mb-8 max-w-md">
              Have questions about Survivor Hoboken? Want to book a private event or partner with us? Reach out below.
            </p>

            <div className="bg-card p-6 border-l-8 border-foreground brutal-shadow inline-block mb-12">
              <p className="font-heading uppercase text-sm text-foreground/60 mb-1">Direct Email</p>
              <a href="mailto:matt@survivorhoboken.com" className="text-2xl font-bold hover:text-primary transition-colors break-all">
                matt@survivorhoboken.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-heading uppercase text-lg mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-card border-2 border-foreground p-4 font-medium text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-heading uppercase text-lg mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-card border-2 border-foreground p-4 font-medium text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-heading uppercase text-lg mb-2">Subject</label>
                <select 
                  id="subject" 
                  required
                  className="w-full bg-card border-2 border-foreground p-4 font-medium text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Question</option>
                  <option value="private-event">Private Event Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-heading uppercase text-lg mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-card border-2 border-foreground p-4 font-medium text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="brutal-button w-full text-2xl py-5 hover:rotate-1"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block relative h-full min-h-[600px] border-4 border-foreground brutal-shadow"
          >
            <img 
              src="/images/contact-host.png" 
              alt="Matt Carlson" 
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 grayscale"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-8 right-8 bg-background p-4 border-4 border-foreground brutal-shadow transform rotate-3">
              <p className="font-heading text-3xl uppercase text-foreground">
                READY TO<br/>PLAY?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
