import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Palette className="w-6 h-6 text-primary" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    title: 'Programming & Concepts',
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ['C/C++', 'Java', 'Data Structures', 'Algorithms', 'OOP'],
  },
  {
    title: 'Tools & Others',
    icon: <Globe className="w-6 h-6 text-primary" />,
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
            <Card key={category.title} className="text-center hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="items-center">
                {category.icon}
                <CardTitle className="mt-4 font-headline">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm cursor-pointer hover:bg-accent/20 transition-colors">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}