import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!open) return;
    if (scriptRef.current) return;
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="relative bg-background border-4 border-foreground w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b-4 border-foreground">
              <h2 className="font-heading text-2xl uppercase">Book a 15-Min Call</h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 flex items-center justify-center bg-foreground text-background text-xl hover:bg-primary transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div
                className="meetings-iframe-container"
                data-src="https://meetings-na2.hubspot.com/matthew-carlson/private-events-?embed=true"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
