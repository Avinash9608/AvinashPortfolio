"use client";

import React, { useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sectionRef.current) return;
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = sectionRef.current;
        
        const x = clientX - offsetLeft;
        const y = clientY - offsetTop;

        const rotateY = -1 * ((x - offsetWidth / 2) / (offsetWidth / 2)) * 10;
        const rotateX = ((y - offsetHeight / 2) / (offsetHeight / 2)) * 10;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <section 
            ref={sectionRef}
            className="hero-section"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s'
            }}
        >
            <div className="img-overlay"></div>
            <div className="text-section">
                <h1>Moi & L'Amant</h1>
                <p>L’accès au site avec abonnement vous permet d’accéder à tous les contenus et archives du Monde.</p>
                <Link href="#">voir plus</Link>
                <div className="absolute top-4 right-4 z-20">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-white group"
                        onClick={handleLike}
                    >
                        <Heart className={cn(
                            "w-8 h-8 text-red-500 transition-all duration-300 group-hover:scale-110",
                            isLiked ? "fill-current" : "fill-none stroke-current"
                        )} />
                        <span className="font-bold text-lg">{likes}</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}