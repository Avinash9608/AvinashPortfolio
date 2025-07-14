
"use client";

import React from 'react';
import { GraduationCap, Computer, BookOpen, Globe, BrainCircuit, Code, Rocket, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

const journeyData = [
  {
    icon: <GraduationCap />,
    title: 'B.Tech in CSE',
    date: '2020 - 2024',
    description: 'Graduated with 7.95 CGPA, building a strong academic foundation.',
    color: 'primary'
  },
  {
    icon: <Computer />,
    title: 'Computer Fundamentals',
    date: 'Year 1',
    description: 'Mastered basics of computer systems, networking, and protocols.',
    color: 'accent'
  },
  {
    icon: <BookOpen />,
    title: 'Mastered Programming',
    date: 'Year 2',
    description: 'Learned C, C++, Java, and practiced on platforms like HackerRank and GFG.',
    color: 'destructive'
  },
  {
    icon: <Globe />,
    title: 'Web Development',
    date: 'Year 2',
    description: 'Explored HTML, CSS, JavaScript, and React for frontend development.',
    color: 'primary'
  },
  {
    icon: <BrainCircuit />,
    title: 'DSA Practice',
    date: 'Year 3',
    description: 'Solved problems on LeetCode, GFG, and InterviewBit, honing my logic.',
    color: 'accent'
  },
  {
    icon: <Brain />,
    title: 'Backend Technologies',
    date: 'Year 3',
    description: 'Gained expertise in Node.js, Express, MongoDB, and AWS.',
    color: 'destructive'
  },
  {
    icon: <Code />,
    title: 'Internship Experience',
    date: 'Year 4',
    description: 'Applied skills as a backend developer intern, using the MERN stack.',
    color: 'primary'
  },
  {
    icon: <Rocket />,
    title: 'Future Learning',
    date: 'Present',
    description: 'Exploring new tech like TypeScript, AI, and other emerging technologies.',
    color: 'accent'
  },
];

export function JourneySection() {
  return (
    <section id="journey" className="roadmap-area bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">My Developer Journey</h2>
          <p className="mt-2 text-lg text-muted-foreground">From a student to a software engineer, one step at a time.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-border/50 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {journeyData.map((step, index) => (
              <div
                key={index}
                className={cn(
                  'relative flex items-center',
                   index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                )}
              >
                <div
                  className={cn(
                    'md:w-1/2',
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  )}
                >
                  <div className="relative p-6 rounded-lg bg-card border-l-4 md:border-l-0 md:border-transparent" style={{ borderColor: `hsl(var(--${step.color}))` }}>
                     <div
                      className={cn(
                        'absolute w-4 h-4 rounded-full top-7 -translate-y-1/2 hidden md:block',
                        `bg-${step.color}`
                      )}
                      style={index % 2 === 0 ? { right: '-2.5rem', backgroundColor: `hsl(var(--${step.color}))` } : { left: '-2.5rem', backgroundColor: `hsl(var(--${step.color}))` }}
                    />
                    <div className="absolute w-3 h-3 rounded-full top-7 -translate-y-1/2 -left-1.5 md:hidden" style={{ backgroundColor: `hsl(var(--${step.color}))` }} />

                    <span className={cn("roadmap-title text-sm", `roadmap-title-${step.color}`)}>
                       {step.date}
                     </span>
                    <h4 className="title text-xl font-bold font-headline mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
