import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    type: 'experience',
    icon: <Briefcase className="h-5 w-5" />,
    date: 'Present',
    title: 'Backend Developer Intern',
    company: 'Self-Employed',
    description: 'Working with React, Node.js, Express, and MongoDB to build robust web applications.',
  },
  {
    type: 'experience',
    icon: <Briefcase className="h-5 w-5" />,
    date: 'Internship',
    title: 'Cyber Security Researcher',
    company: 'ZetPeak',
    description: 'Explored various cyber security research tools and best practices to identify and mitigate vulnerabilities.',
  },
  {
    type: 'experience',
    icon: <Briefcase className="h-5 w-5" />,
    date: 'Internship',
    title: 'Java Developer',
    company: 'Bharat Intern',
    description: 'Developed a full-featured Online Quiz Application using Java, including separate interfaces for admin and student users.',
  },
  {
    type: 'education',
    icon: <GraduationCap className="h-5 w-5" />,
    date: '2020 - 2024',
    title: 'B.Tech in Computer Science',
    company: 'Purnea College of Engineering',
    description: 'Graduated with a CGPA of 7.95, gaining a strong foundation in computer science fundamentals.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">Career & Education</h2>
          <p className="mt-2 text-lg text-muted-foreground">My professional and academic milestones.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {timelineItems.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className={`w-full shadow-md hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <CardHeader>
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <p className="text-sm font-semibold text-primary">{item.date}</p>
                      <div className="flex-grow border-t"></div>
                    </div>
                    <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-background border-4 border-primary rounded-full p-2">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}