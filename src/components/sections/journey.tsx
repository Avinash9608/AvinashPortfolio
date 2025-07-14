
"use client";

import React from 'react';
import { GraduationCap, Computer, BookOpen, Globe, BrainCircuit, Code, Rocket, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const journeyData = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'B.Tech in CSE',
    date: '2020 - 2024',
    description: 'Graduated with 7.95 CGPA, building a strong academic foundation.',
    color: 'primary'
  },
  {
    icon: <Computer className="w-5 h-5" />,
    title: 'Computer Fundamentals',
    date: 'Year 1',
    description: 'Mastered basics of computer systems, networking, and protocols.',
    color: 'accent'
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Mastered Programming',
    date: 'Year 2',
    description: 'Learned C, C++, Java, and practiced on platforms like HackerRank and GFG.',
    color: 'destructive'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Web Development',
    date: 'Year 2',
    description: 'Explored HTML, CSS, JavaScript, and React for frontend development.',
    color: 'primary'
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: 'DSA Practice',
    date: 'Year 3',
    description: 'Solved problems on LeetCode, GFG, and InterviewBit, honing my logic.',
    color: 'accent'
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'Backend Technologies',
    date: 'Year 3',
    description: 'Gained expertise in Node.js, Express, MongoDB, and AWS.',
    color: 'destructive'
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: 'Full Stack Developer Intern',
    date: 'Present',
    description: 'Working as a Full Stack Developer Intern at INDTechMark, applying skills in a professional environment.',
    color: 'primary'
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'Future Learning',
    date: 'Ongoing',
    description: 'Continuously exploring new tech like TypeScript, AI, and other emerging technologies.',
    color: 'accent'
  },
];

const colorClasses = {
  primary: {
    border: 'border-primary-c',
    text: 'text-primary-c',
    bg: 'bg-primary-grad',
  },
  accent: {
    border: 'border-accent-c',
    text: 'text-accent-c',
    bg: 'bg-accent-grad',
  },
  destructive: {
    border: 'border-destructive-c',
    text: 'text-destructive-c',
    bg: 'bg-destructive-grad',
  }
};

export function JourneySection() {
  return (
    <section id="journey" className="roadmap-area bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">My Developer Journey</h2>
          <p className="mt-2 text-lg text-muted-foreground">From a student to a software engineer, one step at a time.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {journeyData.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <div key={index} className={cn('roadmap-item', colors.border)}>
                <div className="roadmap-icon-wrapper">
                  <div className={cn("roadmap-icon-bg", colors.bg)}>
                    {step.icon}
                  </div>
                </div>
                <div className="roadmap-content">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <p className={cn("date", colors.text)}>{step.date}</p>
                      <h4 className="title">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
