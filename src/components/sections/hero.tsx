"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

declare global {
    interface Window {
        VanillaTilt: any;
    }
}

const roles = ["Software Developer", "UI/UX Enthusiast", "Problem Solver"];

export function HeroSection() {
    const tiltRef = useRef<HTMLDivElement>(null);
    const typewriterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (tiltRef.current && window.VanillaTilt) {
            window.VanillaTilt.init(tiltRef.current, {
                max: 5,
                speed: 300,
                glare: true,
                "max-glare": 0.1,
                perspective: 1000,
            });
        }
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeSpeed = 150;
        const deleteSpeed = 100;
        const delay = 2000;

        const type = () => {
            const currentRole = roles[roleIndex];
            if (typewriterRef.current) {
                 if (isDeleting) {
                    typewriterRef.current.textContent = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typewriterRef.current.textContent = currentRole.substring(0, charIndex + 1);
                    charIndex++;
                }

                if (!isDeleting && charIndex === currentRole.length) {
                    setTimeout(() => isDeleting = true, delay);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }
        };

        const typingInterval = setInterval(type, isDeleting ? deleteSpeed : typeSpeed);


        return () => {
            if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
                (tiltRef.current as any).vanillaTilt.destroy();
            }
            clearInterval(typingInterval);
        };
    }, []);
    
    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section 
            ref={tiltRef}
            className="hero-section"
        >
            <div className="img-overlay"></div>
            <div className="text-container">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-headline">Avinash</h1>
                <div className="subtitle">
                  <span ref={typewriterRef}></span>
                  <span className="inline-block animate-pulse">|</span>
                </div>
                <p className="max-w-xl text-lg text-gray-300 mb-8">
                    A passionate engineer crafting beautiful and functional web experiences. Welcome to my digital space.
                </p>
                <Link href="#projects" onClick={handleScrollToProjects}>
                    <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:border-accent transition-all duration-300">
                        View My Work
                    </Button>
                </Link>
            </div>
        </section>
    );
}
