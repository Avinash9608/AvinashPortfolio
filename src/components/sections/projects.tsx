import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Online Quiz Application',
    description: 'A robust quiz platform with separate admin and student modules, built with Java and SQL.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Java', 'SQL', 'Web App'],
    github: '#',
    live: '#',
    aiHint: 'quiz application'
  },
  {
    title: 'Online Food Delivery App',
    description: 'A secure food delivery service featuring email validation and password encryption.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'Security'],
    github: '#',
    live: '#',
    aiHint: 'food delivery'
  },
  {
    title: 'Movie Website',
    description: 'A responsive website for browsing and discovering movies, built with modern frontend tech.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'API', 'Frontend'],
    github: '#',
    live: '#',
    aiHint: 'movie streaming'
  },
  {
    title: 'Blogging Platform',
    description: 'A full-stack blogging website that allows users to create, read, and manage posts.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Full-Stack', 'MongoDB', 'CMS'],
    github: '#',
    live: '#',
    aiHint: 'blog website'
  },
  {
    title: 'GrameenBharat',
    description: 'An e-commerce platform focused on rural products, connecting local artisans to a wider market.',
    image: 'https://placehold.co/600x400.png',
    tags: ['E-commerce', 'React', 'Node.js'],
    github: '#',
    live: '#',
    aiHint: 'ecommerce platform'
  },
];

const ongoingProjects = [
    { name: 'IT Service Website', progress: 75 },
    { name: 'Bakery Shop Website', progress: 40 },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">My Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">A showcase of my passion for development.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.aiHint} 
                />
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <CardTitle className="font-headline text-2xl text-white mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary" className="backdrop-blur-sm">{tag}</Badge>)}
                </div>

                {/* This content is hidden by default and appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <div className="flex justify-start gap-4">
                    <Link href={project.github} target="_blank">
                      <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                    </Link>
                    <Link href={project.live} target="_blank">
                      <Button variant="default" size="sm">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-bold font-headline text-center mb-8">Currently Working On</h3>
            <div className="max-w-2xl mx-auto space-y-6">
                {ongoingProjects.map((project, index) => (
                    <Card key={index} className="p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-base font-medium text-foreground">{project.name}</span>
                            <span className="text-sm font-medium text-primary">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
