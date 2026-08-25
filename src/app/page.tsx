"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhotographyImage } from "@/components/photography-image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <PhotographyImage 
          src="/images/photography/gallery/uka-stara-landscape-1.jpg" 
          alt="Uka Stara - Creative Technologist" 
          priority 
          fill
          className="absolute inset-0 z-0"
          imageClassName="object-cover object-top" 
        />
        {/* Subtle gradient overlay to ensure text readability while preserving image richness */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-black/30 z-10" />
        
        <div className="z-20 text-center px-4 mt-32 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide"
          >
            UKA STARA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 text-xs md:text-sm uppercase tracking-[0.3em] text-white/90"
          >
            Creative Technologist
          </motion.p>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* 2. THE HOOK (Editorial Statement) */}
      <section className="py-24 md:py-40 px-6 container mx-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Bridging software engineering with visual storytelling across Africa.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1"
          >
            <p className="text-muted leading-relaxed text-lg font-light">
              My work explores the intersection of logic and imagination. I build robust digital systems and capture the human experience through an editorial lens. 
              <br /><br />
              This is the architecture of imagination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED PHOTOGRAPHY (Asymmetric Grid) */}
      <section className="py-24 px-6 md:px-12 container mx-auto border-t border-muted/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-lg">
            <h3 className="text-sm uppercase tracking-widest text-muted mb-4">Selected Work</h3>
            <h2 className="text-4xl md:text-5xl font-serif">The Human Element</h2>
          </div>
          <Link href="/photography" className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-muted transition-colors">
            View Full Gallery 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col gap-6 md:gap-16">
            <PhotographyImage 
              src="/images/photography/portraits/uka-stara-portrait-1.jpg" 
              alt="Editorial Portrait" 
              className="w-full aspect-[3/4]"
            />
            <div className="hidden md:block w-4/5 self-end">
              <PhotographyImage 
                src="/images/photography/gallery/uka-stara-landscape-2.jpg" 
                alt="Environmental Portrait" 
                className="w-full aspect-[4/3]"
              />
            </div>
          </div>
          
          {/* Right Column (Staggered downwards on desktop) */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-16 md:pt-32">
            <PhotographyImage 
              src="/images/photography/portraits/uka-stara-portrait-2.jpg" 
              alt="Studio Portrait" 
              className="w-full aspect-[4/5]"
            />
            <div className="w-11/12 self-start md:self-end">
              <PhotographyImage 
                src="/images/photography/portraits/uka-stara-portrait-3.jpg" 
                alt="Detail Portrait" 
                className="w-full aspect-[3/4]"
              />
            </div>
            
            <div className="md:hidden mt-8">
              <PhotographyImage 
                src="/images/photography/gallery/uka-stara-landscape-2.jpg" 
                alt="Environmental Portrait" 
                className="w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / TECH TEASER */}
      <section className="py-32 px-6 bg-muted/5">
        <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-24 h-24 rounded-full overflow-hidden mb-8 relative"
          >
             <PhotographyImage 
                src="/images/photography/portraits/uka-stara-portrait-4.jpg" 
                alt="Uka Stara" 
                className="w-full h-full"
                imageClassName="object-cover"
              />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">The Engineer Behind the Lens</h2>
          <p className="text-muted leading-relaxed text-lg max-w-2xl mb-12 font-light">
            While my photography captures the moment, my foundation in software engineering allows me to build the platforms that host them. Discover the logic that powers the creativity.
          </p>
          <Link href="/about" className="px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-muted transition-colors">
            Read My Story
          </Link>
        </div>
      </section>
    </div>
  );
}
