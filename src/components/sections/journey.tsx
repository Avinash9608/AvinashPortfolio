"use client";

import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { ChevronLeft, ChevronRight, GraduationCap, Computer, BookOpen, Globe, BrainCircuit, Code, Rocket, Brain } from 'lucide-react';
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


const LeftArrow = () => {
  const { scrollPrev, isFirstItemVisible } = React.useContext(VisibilityContext);
  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 disabled:opacity-50 transition-all mx-4"
    >
      <ChevronLeft className="h-6 w-6 text-primary" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext, isLastItemVisible } = React.useContext(VisibilityContext);
  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 disabled:opacity-50 transition-all mx-4"
    >
      <ChevronRight className="h-6 w-6 text-primary" />
    </button>
  );
};

export function JourneySection() {
  return (
    <section id="journey" className="roadmap-area bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">My Developer Journey</h2>
          <p className="mt-2 text-lg text-muted-foreground">From a student to a software engineer, one step at a time.</p>
        </div>
        <div className="roadmap-horizontal-container">
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName="pb-8">
            {journeyData.map((step, index) => (
              <div key={index} className={cn("roadmap-item", index % 2 !== 0 && "roadmap-item-even")}>
                <span className={cn("roadmap-title", `roadmap-title-${step.color}`)}>{step.date}</span>
                <div className="roadmap-content">
                  <span className={cn("dot", `dot-${step.color}`)}></span>
                  <h4 className="title">{step.title}</h4>
                  <span className="text-sm text-muted-foreground">{step.description}</span>
                </div>
              </div>
            ))}
          </ScrollMenu>
        </div>
      </div>
    </section>
  );
}
