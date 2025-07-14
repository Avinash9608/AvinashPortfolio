"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline">
            <Code className="w-8 h-8 text-primary" />
            <span className="text-accent">Avinash</span>
            <span className={cn(isScrolled ? 'text-foreground' : 'text-white')}>Kumar</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled ? 'text-foreground hover:bg-accent/50 hover:text-accent-foreground' : 'text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn(!isScrolled && 'text-white hover:bg-white/10 hover:text-white')}>
                {isMenuOpen ? <X /> : <Menu />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent/50 hover:text-accent-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
