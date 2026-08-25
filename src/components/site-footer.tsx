import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-muted/20 bg-background py-12 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-serif text-xl tracking-wider">
            UKA STARA
          </Link>
          <p className="text-xs text-muted tracking-widest uppercase">
            Creative Technologist &bull; Nigeria
          </p>
        </div>
        
        <div className="flex gap-6 text-sm text-muted">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
        
        <div className="text-xs text-muted">
          &copy; {currentYear} Stara Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
