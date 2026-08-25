"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-muted/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-2xl tracking-wide hover:opacity-70 transition-opacity z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            UKA STARA
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm tracking-widest uppercase transition-colors relative",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="header-active-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-foreground"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden z-50 text-foreground p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 h-screen"
          >
            <nav className="flex flex-col items-center gap-12">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-3xl font-serif tracking-widest uppercase transition-colors relative",
                        isActive ? "text-foreground" : "text-muted hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-24 flex gap-8 text-sm uppercase tracking-widest text-muted"
            >
              <a href="#">IG</a>
              <a href="#">IN</a>
              <a href="#">GH</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
