import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, Computer, BookOpen, Globe, BrainCircuit, Code, Rocket, Brain } from 'lucide-react';

const journeySteps = [
  { icon: <GraduationCap />, title: 'B.Tech in CSE', description: 'Graduated in June 2024 with 7.95 CGPA, building a strong academic foundation.' },
  { icon: <Computer />, title: 'Computer Fundamentals', description: 'Mastered basics of computer systems, networking, and protocols.' },
  { icon: <BookOpen />, title: 'Mastered Programming', description: 'Learned C, C++, Java, and practiced on platforms like HackerRank and GFG.' },
  { icon: <Globe />, title: 'Web Development', description: 'Explored HTML, CSS, JavaScript, and React for frontend development.' },
  { icon: <BrainCircuit />, title: 'DSA Practice', description: 'Solved problems on LeetCode, GFG, and InterviewBit, honing my logic.' },
  { icon: <Brain />, title: 'Backend Technologies', description: 'Gained expertise in Node.js, Express, MongoDB, and AWS.' },
  { icon: <Code />, title: 'Internship Experience', description: 'Applied skills as a backend developer intern, using the MERN stack.' },
  { icon: <Rocket />, title: 'Future Learning', description: 'Exploring new tech like TypeScript, AI, and other emerging technologies.' },
];

export function JourneySection() {
  return (
    <section id="journey" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">My Developer Journey</h2>
          <p className="mt-2 text-lg text-muted-foreground">From a student to a software engineer, one step at a time.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <Card key={index} className="text-center group hover:border-primary transition-colors duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {React.cloneElement(step.icon, { className: 'w-8 h-8' })}
                </div>
                <CardTitle className="mt-4 font-headline text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
