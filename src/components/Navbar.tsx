import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, Calculator, LogIn, Smartphone, Globe } from "lucide-react";
import sisLogo from "@/assets/sis-logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ServiceForm from "./ServiceForm";
import { FileText } from "lucide-react";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#approach", label: "Our Approach" },
    { href: "#services", label: "Services" },
    { href: "#leadership", label: "Leadership" },
    { href: "#gallery", label: "Gallery" },
    { href: "#achievements", label: "Awards" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-4 sm:left-8 md:left-16 lg:left-24 right-4 sm:right-8 md:right-16 lg:right-24 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/70 backdrop-blur-xl shadow-2xl border border-border/50"
        : "bg-background/40 backdrop-blur-lg border border-border/30"
        } rounded-full`}
    >
      <div className="mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          <a href="#" className="flex items-center">
            <img src={sisLogo} alt="Smart Investment Solutions" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground/80 hover:text-primary transition-colors relative group text-sm cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/50 hover:bg-primary/10"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <a
                    href="https://fundzbazar.com/Link/jKJUH99KgH4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    Mobile App
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://fundzbazar.com/Link/MjHqZqpf3UQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
             <Button asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link to="/form" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      LIC policy Servicing
                    </Link>
                  </Button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              <Link to="/calculator" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Calculator
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-foreground" aria-label="Toggle menu">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <p className="text-sm text-foreground/60 px-4">Login to FundzBazar</p>
                    <a
                      href="https://fundzbazar.com/Link/jKJUH99KgH4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Smartphone className="w-5 h-5" />
                      Mobile App
                    </a>
                    <a
                      href="https://fundzbazar.com/Link/MjHqZqpf3UQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Globe className="w-5 h-5" />
                      Website
                    </a>
                  </div>

                  <Button asChild className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link to="/form" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      LIC policy Servicing
                    </Link>
                  </Button>





                  <Button
                    asChild
                    className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/calculator" className="flex items-center justify-center gap-2">
                      <Calculator className="w-4 h-4" />
                      Calculator
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
