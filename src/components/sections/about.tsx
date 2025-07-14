import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-lg">
                <AvatarImage src="https://res.cloudinary.com/dfdtdqumn/image/upload/v1751806536/twitter-clone/slbe7orgsgdi71hatana.png" alt="Avinash Kumar" data-ai-hint="profile picture" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-4 -right-4 bg-background p-2 rounded-full shadow-lg animate-float-less">
                <Image src="https://res.cloudinary.com/dfdtdqumn/image/upload/v1751522151/products/dinner-set-1751522136934.png" data-ai-hint="dinner set" alt="Dinner Set Icon" width={48} height={48} className="rounded-full" />
              </div>
               <div className="absolute top-0 -left-4 bg-background p-2 rounded-full shadow-lg animate-float">
                <Image src="https://res.cloudinary.com/dfdtdqumn/image/upload/v1751522151/products/dinner-set-1751522136934.png" data-ai-hint="dinner set" alt="Dinner Set Icon" width={48} height={48} className="rounded-full" />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold font-headline tracking-tight mb-4 text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A driven software engineer and passionate about crafting high-performance, user-centric solutions. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through clean, efficient code and intuitive design.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Bihar, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
