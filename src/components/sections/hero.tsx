"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

declare global {
    interface Window {
        VanillaTilt: any;
    }
}

export function HeroSection() {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tiltRef.current && window.VanillaTilt) {
            window.VanillaTilt.init(tiltRef.current, {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                perspective: 1000,
            });
        }

        return () => {
             if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
                (tiltRef.current as any).vanillaTilt.destroy();
            }
        };
    }, []);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    };

    return (
        <section 
            ref={tiltRef}
            className="hero-section"
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
