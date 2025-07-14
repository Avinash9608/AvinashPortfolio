"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const roles = ["Software Developer", "UI/UX Enthusiast", "Problem Solver"];

export function HeroSection() {
    const typewriterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
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
            clearInterval(typingInterval);
        };
    }, []);
    
    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section">
            <div className="img-overlay"></div>
            <div className="content-container">
                <div className="text-container">
                    <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-white font-headline">Avinash</h1>
                    <p className="subtitle">
                      <span ref={typewriterRef} className="typewriter-text"></span>
                    </p>
                    <p className="max-w-xl text-lg text-gray-300 mb-8">
                        A passionate engineer crafting beautiful and functional web experiences. Welcome to my digital space.
                    </p>
                    <Link href="#projects" onClick={handleScrollToProjects}>
                        <Button size="lg" variant="default" className="relative overflow-hidden bg-primary text-primary-foreground transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 hover:before:translate-x-full">
                            View My Work
                        </Button>
                    </Link>
                </div>
                <div className="hero-image-container">
                    <Image
                        src="https://res.cloudinary.com/dfdtdqumn/image/upload/v1751812777/twitter-clone/rhexdqmzpzc2v4ifs2uh.jpg"
                        alt="Avinash Kumar"
                        width={350}
                        height={350}
                        className="hero-image object-cover"
                        data-ai-hint="profile picture"
                    />
                </div>
            </div>
        </section>
    );
}
