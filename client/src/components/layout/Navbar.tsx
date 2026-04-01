
import { Link, useLocation } from "wouter";
import { NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/logo_1766161297981.png";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-auto overflow-hidden">
               <img src={logo} alt="Grupo Las Margaritas" className="h-full w-auto object-contain" />
            </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-secondary",
                location === item.href
                  ? "text-primary font-bold"
                  : isScrolled ? "text-foreground/80" : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contacto" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
             Contactar
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-base font-medium p-2 rounded-md hover:bg-muted transition-colors",
                  location === item.href ? "text-primary bg-muted/50" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-2 bg-primary text-primary-foreground text-center px-5 py-3 rounded-full text-base font-semibold hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
              data-testid="mobile-cta-contactar"
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
