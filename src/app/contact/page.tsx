"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhotographyImage } from "@/components/photography-image";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder for actual form submission logic (e.g., Formspree, Resend)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Form & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-16"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                Let&apos;s talk.
              </h1>
              <p className="text-lg text-muted font-light leading-relaxed max-w-md">
                Available for freelance software engineering projects and editorial photography assignments in Nigeria and globally.
              </p>
            </div>

            <div className="flex gap-8 text-sm uppercase tracking-widest text-foreground font-medium">
              <a href="#" className="hover:text-muted transition-colors">Instagram</a>
              <a href="#" className="hover:text-muted transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-muted transition-colors">GitHub</a>
            </div>

            <div className="w-full h-[1px] bg-muted/20" />

            {/* Contact Form */}
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 flex flex-col items-start gap-4"
              >
                <h3 className="text-2xl font-serif text-foreground">Message received.</h3>
                <p className="text-muted font-light">I will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="bg-transparent border-b border-muted/30 pb-2 text-foreground focus:outline-none focus:border-foreground transition-colors font-light placeholder:text-muted/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="bg-transparent border-b border-muted/30 pb-2 text-foreground focus:outline-none focus:border-foreground transition-colors font-light placeholder:text-muted/30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted">Subject / Inquiry Type</label>
                  <select 
                    id="subject"
                    className="bg-transparent border-b border-muted/30 pb-2 text-foreground focus:outline-none focus:border-foreground transition-colors font-light appearance-none rounded-none"
                  >
                    <option value="engineering" className="bg-background">Software Engineering Project</option>
                    <option value="photography" className="bg-background">Photography Assignment</option>
                    <option value="other" className="bg-background">General Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="bg-transparent border-b border-muted/30 pb-2 text-foreground focus:outline-none focus:border-foreground transition-colors font-light resize-none placeholder:text-muted/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="self-start mt-4 group flex items-center gap-4 text-sm uppercase tracking-widest disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Closing Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block w-full h-[80vh] relative"
          >
            <PhotographyImage 
              src="/images/photography/portraits/uka-stara-portrait-6.jpg" 
              alt="Uka Stara Professional Portrait" 
              fill
              className="w-full h-full"
              imageClassName="object-cover"
            />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
