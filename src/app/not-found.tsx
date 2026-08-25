import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <h2 className="text-6xl md:text-8xl font-serif mb-6 tracking-wider">404</h2>
      <p className="text-xl text-muted font-light mb-12 uppercase tracking-widest">
        Page Not Found
      </p>
      <div className="w-16 h-[1px] bg-muted/30 mb-12" />
      <p className="text-muted max-w-md mb-12 font-light leading-relaxed">
        The page you are looking for has been moved or does not exist.
      </p>
      <Link 
        href="/"
        className="px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-muted transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
