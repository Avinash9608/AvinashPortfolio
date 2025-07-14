import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

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
        
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col group overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="overflow-hidden rounded-t-lg">
                        <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.aiHint} />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                      <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-6 pt-0">
                        <Link href={project.github} target="_blank">
                            <Button variant="outline" size="sm"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
                        </Link>
                        <Link href={project.live} target="_blank">
                            <Button variant="default" size="sm">Live Demo <ExternalLink className="ml-2 h-4 w-4" /></Button>
                        </Link>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="mt-20">
            <h3 className="text-2xl font-bold font-headline text-center mb-8">Currently Working On</h3>
            <div className="max-w-2xl mx-auto space-y-6">
                {ongoingProjects.map((project, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-foreground">{project.name}</span>
                            <span className="text-sm font-medium text-primary">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}