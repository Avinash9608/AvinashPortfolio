import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Palette className="w-8 h-8 text-primary" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-8 h-8 text-primary" />,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    title: 'Programming & Concepts',
    icon: <Code className="w-8 h-8 text-primary" />,
    skills: ['C/C++', 'Java', 'Data Structures', 'Algorithms', 'OOP'],
  },
  {
    title: 'Tools & Others',
    icon: <Globe className="w-8 h-8 text-primary" />,
    skills: ['Git', 'GitHub', 'AWS', 'Cyber Security', 'UI/UX Design'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">My Tech Stack</h2>
          <p className="mt-2 text-lg text-muted-foreground">A collection of technologies I use to build things.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card-wrapper">
              <div className="skill-card">
                 <div className="text-center">
                    <div className="inline-block p-4 mb-4 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-4">{category.title}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
