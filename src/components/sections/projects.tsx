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
    title: 'Publicity Poster',
    description: 'A platform to generate publicity posters with Nodemailer and Twilio integration.',
    image: 'https://plus.unsplash.com/premium_photo-1661604459763-e18e4370e629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVibGlzaXR5JTIwcG9zdGVyJTIwYXBwfGVufDB8fDB8fHww',
    tags: ['TypeScript', 'Twilio', 'API', 'Nodemailer'],
    github: 'https://github.com/Avinash9608/Poster.git',
    live: 'https://poster-self.vercel.app/',
    aiHint: 'publicity poster'
  },
  {
    title: 'Readymate Template',
    description: 'A responsive and ready-to-use website template for various business needs.',
    image: 'https://plus.unsplash.com/premium_photo-1661753668576-d7e14f27edf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVtcGxhdGV8ZW58MHx8MHx8fDA%3D',
    tags: ['React', 'Template', 'Frontend'],
    github: 'https://github.com/Avinash9608/ReadymateTemplate.git',
    live: 'https://readymate-template-alfd.vercel.app/',
    aiHint: 'website template'
  },
  {
    title: 'Wedding Landing Page',
    description: 'A beautiful and responsive landing page template for wedding invitations.',
    image: 'https://media.istockphoto.com/id/1216462542/photo/saas-software-as-a-service-concept-with-technology-light-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=o3DLzrnlEvgZtzsP3GcVFqNtbkarfIicAEpVaiaWcOk=',
    tags: ['SaaS', 'Template', 'React'],
    github: '#', // Not provided for this one
    live: 'https://wedding-landing-page-amber.vercel.app/',
    aiHint: 'wedding website'
  },
  {
    title: 'Blogging Platform',
    description: 'A full-stack blogging website that allows users to create, read, and manage posts.',
    image: 'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Full-Stack', 'MongoDB', 'CMS'],
    github: '#',
    live: '#',
    aiHint: 'blog website'
  },
  {
    title: 'GrameenBharat',
    description: 'An e-commerce platform focused on rural products, connecting local artisans to a wider market.',
    image: 'https://images.unsplash.com/photo-1698864656701-557a5840239b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxHcmFtZWVuJTIwQmhhcmF0fGVufDB8fDB8fHww',
    tags: ['E-commerce', 'React', 'Node.js'],
    github: '#',
    live: 'https://grameenbharat.vercel.app/',
    aiHint: 'ecommerce platform'
  },
    {
    title: 'Online Food Delivery App',
    description: 'A secure food delivery service featuring email validation and password encryption.',
    image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww',
    tags: ['React', 'Node.js', 'Security'],
    github: '#',
    live: '#',
    aiHint: 'food delivery'
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
                      <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20" disabled={project.github === '#'}>
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                    </Link>
                    <Link href={project.live} target="_blank">
                      <Button variant="default" size="sm" disabled={project.live === '#'}>
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="https://github.com/Avinash9608" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              View More on GitHub <Github className="ml-2 h-4 w-4" />
            </Button>
          </Link>
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
