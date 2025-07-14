
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineData = [
  {
    type: 'experience',
    icon: <Briefcase className="h-6 w-6" />,
    date: 'Present',
    title: 'Backend Developer Intern',
    company: 'Self-Employed',
    items: [
      'Working with React and Node.js',
      'Building RESTful APIs with Express',
      'Database management with MongoDB'
    ]
  },
  {
    type: 'experience',
    icon: <Briefcase className="h-6 w-6" />,
    date: 'Internship',
    title: 'Cyber Security Researcher',
    company: 'ZetPeak',
    items: [
        'Explored various cyber security tools',
        'Learned best practices for vulnerability mitigation',
        'Contributed to security assessments'
    ]
  },
  {
    type: 'experience',
    icon: <Briefcase className="h-6 w-6" />,
    date: 'Internship',
    title: 'Java Developer',
    company: 'Bharat Intern',
    items: [
        'Developed a full-featured Online Quiz App',
        'Created separate interfaces for admin and student users',
        'Implemented core quiz logic in Java'
    ]
  },
  {
    type: 'education',
    icon: <GraduationCap className="h-6 w-6" />,
    date: '2020 - 2024',
    title: 'B.Tech in Computer Science',
    company: 'Purnea College of Engineering',
    items: [
        'Graduated with a CGPA of 7.95',
        'Strong foundation in CS fundamentals',
        'Specialized in software engineering'
    ]
  },
];

const TimelineCard = ({ item, index }: { item: (typeof timelineData)[0], index: number }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className="timeline-item group">
      <div className="timeline-dot group-hover:bg-primary transition-colors duration-300" />
      <Card className="timeline-card border-primary/20 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:border-primary">
        <CardHeader>
          <div className={cn("flex items-center gap-4", isOdd && "md:flex-row-reverse")}>
            <p className="text-sm font-semibold text-primary">{item.date}</p>
            <div className="flex-grow border-t border-dashed"></div>
          </div>
          <CardTitle className="font-headline text-2xl text-accent">{item.title}</CardTitle>
          <CardDescription className="font-semibold">{item.company}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {item.items.map((point, i) => (
              <li key={i} className={cn("flex items-start gap-2", isOdd && "md:text-right md:justify-end")}>
                 <CheckCircle className="h-4 w-4 text-primary/70 shrink-0 mt-1" />
                <span className={cn(isOdd && "md:text-right")}>{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export function ExperienceSection() {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && timelineRef.current) {
        const { top } = containerRef.current.getBoundingClientRect();
        const timelineHeight = timelineRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollPercent = Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + timelineHeight / 2)));
        
        setLineHeight(scrollPercent * timelineHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" ref={containerRef} className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">Career &amp; Education</h2>
          <p className="mt-2 text-lg text-muted-foreground">My professional and academic milestones.</p>
        </div>
        <div className="timeline-container" ref={timelineRef}>
           <div className="timeline-line" style={{ height: `${lineHeight}px` }} />
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
