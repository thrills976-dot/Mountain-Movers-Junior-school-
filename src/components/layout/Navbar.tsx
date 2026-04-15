import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/constants/images";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Academics", href: "/#academics" },
  { name: "Activities", href: "/#activities" },
  { name: "Admissions", href: "/#admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={cn(
        "bg-primary text-primary-foreground py-2 px-4 text-sm transition-all duration-300 hidden md:block",
        isScrolled ? "opacity-0 h-0 py-0 overflow-hidden" : "opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 078 691 9470
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> mountainmoversjuniorschools@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> 158 Herbert Chitepo, Mutare Zimbabwe
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "transition-all duration-300 px-4 md:px-8",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={IMAGES.LOGO} 
                alt="School Logo" 
                className="w-12 h-12 object-contain rounded-lg"
                onError={(e) => {
                  // Fallback if logo doesn't exist yet
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
                referrerPolicy="no-referrer"
              />
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform hidden">
                M
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-heading font-bold text-xl leading-none",
                  !isScrolled && location.pathname === "/" ? "text-white" : "text-primary"
                )}>
                  MOUNTAIN MOVERS
                </span>
                <span className={cn(
                  "text-[10px] tracking-[0.2em] font-medium",
                  !isScrolled && location.pathname === "/" ? "text-white/80" : "text-muted-foreground"
                )}>
                  JUNIOR SCHOOL
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  !isScrolled && location.pathname === "/" 
                    ? "text-white/90" 
                    : "text-foreground/80",
                  location.pathname === link.href && "text-secondary font-bold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
              <Link to="/admissions">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 rounded-md",
              !isScrolled && location.pathname === "/" ? "text-white" : "text-primary"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-lg font-medium py-2 border-b border-slate-100",
                  location.pathname === link.href ? "text-primary font-bold" : "text-foreground/70"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-primary text-white">
              <Link to="/admissions" onClick={() => setIsOpen(false)}>Apply Today</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
