"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhotographyImage } from "@/components/photography-image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-32">
      
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            The space between <br className="hidden md:block" />
            <span className="italic text-muted">logic</span> and <span className="italic text-muted">imagination</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl">
            I am Uka Stara Nnennaya, a Multidisciplinary Creative Technologist bridging the precision of software engineering with the empathy of visual storytelling.
          </p>
        </motion.div>
      </section>

      {/* 2. Hero Image */}
      <section className="w-full px-6 md:px-12 mb-32">
        <div className="w-full h-[60vh] md:h-[80vh] relative">
          <PhotographyImage 
            src="/images/photography/gallery/uka-stara-landscape-3.jpg" 
            alt="Uka Stara Environmental Portrait" 
            fill
            className="w-full h-full"
            imageClassName="object-cover object-center"
          />
        </div>
      </section>

      {/* 3. The Dual Identity Story */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 flex flex-col gap-8 text-lg text-muted font-light leading-relaxed"
          >
            <h2 className="text-3xl font-serif text-foreground mb-4">The Editorial Engineer</h2>
            <p>
              My journey didn&apos;t start behind a lens. It started behind a screen, writing code. 
              Studying Software Engineering at the Federal University of Technology Owerri (FUTO) rewired 
              my brain to think in systems, architectures, and scalable logic. 
            </p>
            <p>
              But systems alone lack a soul. I picked up a camera to document the world outside the IDE. 
              What began as a creative outlet rapidly evolved into an editorial discipline. I discovered that 
              structuring a beautiful codebase and composing a cinematic photograph require the exact same core 
              skill: <span className="text-foreground font-medium">knowing what to remove until only the essential remains.</span>
            </p>
            <p>
              Today, I operate at this intersection. Whether I am architecting a React application, designing 
              a user interface, or shooting an environmental portrait, my philosophy is identical—build with 
              intention, execute with precision, and always center the human experience.
            </p>
          </motion.div>

          {/* Image Column */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <PhotographyImage 
              src="/images/photography/portraits/uka-stara-portrait-5.jpg" 
              alt="Uka Stara Portrait" 
              className="w-full aspect-[3/4]"
            />
          </div>

        </div>
      </section>

      {/* 4. Skills & Capabilities */}
      <section className="container mx-auto px-6 mb-32 border-t border-muted/20 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-foreground mb-8 pb-4 border-b border-muted/20">Engineering</h3>
            <ul className="flex flex-col gap-4 text-muted font-light">
              <li>Frontend Development</li>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>UI/UX Implementation</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-foreground mb-8 pb-4 border-b border-muted/20">Photography</h3>
            <ul className="flex flex-col gap-4 text-muted font-light">
              <li>Editorial Portraiture</li>
              <li>Environmental Storytelling</li>
              <li>Creative Direction</li>
              <li>Color Grading</li>
              <li>Retouching</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-foreground mb-8 pb-4 border-b border-muted/20">Select Clients & Media</h3>
            <ul className="flex flex-col gap-4 text-muted font-light italic">
              <li>Available for assignments</li>
              <li>Based in Nigeria</li>
              <li>Global availability</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-muted/5 py-24 px-6"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Let&apos;s build something beautiful.</h2>
          <p className="text-muted mb-10 max-w-lg mx-auto font-light">
            Whether you need a digital platform engineered or a story captured through the lens, my inbox is open.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-muted transition-colors">
            Get in touch
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
