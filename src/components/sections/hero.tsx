"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const roles = ["A Software Engineer.", "A Web Developer.", "A UI/UX Enthusiast."];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typingAnimationKey, setTypingAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setTypingAnimationKey(prevKey => prevKey + 1); // Reset animation
    }, 4000); // Change role every 4 seconds

    return () => clearInterval(interval);
  }, []);
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-background dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      
      <div className="z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter mb-4">
          Hi, I&apos;m Avinash Kumar
        </h1>
        <div className="typewriter inline-block">
            <h2 key={typingAnimationKey} className="text-2xl sm:text-3xl md:text-4xl text-primary font-headline tracking-tight">
                {roles[currentRoleIndex]}
            </h2>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Passionate about crafting high-performance solutions and building beautiful, intuitive web experiences.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#projects" onClick={(e) => handleScrollTo(e, '#projects')}>
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowDown className="mr-2 h-5 w-5" />
              View My Work
            </Button>
          </Link>
          <Link href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contact Me
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
}
