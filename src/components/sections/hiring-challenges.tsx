
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Building, Code } from 'lucide-react';
import Link from 'next/link';

const challenges = [
  {
    company: 'CIAA Cyber Tech Private Limited',
    task: 'A full-stack clone of the popular professional networking site, LinkedIn.',
    links: [
      { type: 'live', url: 'https://linkedin-clone-client.vercel.app/', label: 'Live App' },
      { type: 'backend_live', url: 'https://linkedin-clone-server-five.vercel.app/', label: 'Backend' },
      { type: 'github', url: 'https://github.com/Avinash9608/linkedin-clone-client.git', label: 'Frontend Repo' },
      { type: 'github', url: 'https://github.com/Avinash9608/linkedin-clone-server.git', label: 'Backend Repo' }
    ]
  },
  {
    company: 'RapidQuest',
    task: 'Real-time chat simulation with a WhatsApp Web–like UI, featuring a webhook payload processor, WebSockets for real-time updates, and a Node.js backend.',
    links: [
      { type: 'live', url: 'https://whatsapp-clone-frontend-alpha.vercel.app/', label: 'Live App' },
      { type: 'backend_live', url: 'https://whatsapp-clone-backend-gamma.vercel.app/', label: 'Backend' },
      { type: 'github', url: 'https://github.com/Avinash9608/whatsapp-clone-frontend.git', label: 'Frontend Repo' },
      { type: 'github', url: 'https://github.com/Avinash9608/whatsapp-clone-backend.git', label: 'Backend Repo' }
    ]
  },
  {
    company: 'Throttle Theory',
    task: 'A dynamic and animated e-commerce prototype for a clothing shop.',
    links: [
      { type: 'live', url: 'https://apex-velocity.vercel.app/', label: 'Live Prototype' },
      { type: 'github', url: 'https://github.com/Avinash9608/Apex-Velocity.git', label: 'GitHub Repo' }
    ]
  },
  {
    company: 'CFI',
    task: 'A comprehensive full-stack application with separate frontend, backend, and admin panel deployments.',
    links: [
      { type: 'live', url: 'https://cfi-frontend.vercel.app/', label: 'Frontend' },
      { type: 'backend_live', url: 'https://cfi-backend.vercel.app/', label: 'Backend' },
      { type: 'admin', url: 'https://cfi-admin-panel.vercel.app/', label: 'Admin Panel' },
      { type: 'github', url: 'https://github.com/Avinash9608/CFI-Frontend.git', label: 'Frontend Repo' },
      { type: 'github', url: 'https://github.com/Avinash9608/CFI-Backend.git', label: 'Backend Repo' },
      { type: 'github', url: 'https://github.com/Avinash9608/CFI-AdminPanel-.git', label: 'Admin Repo' }
    ]
  }
];

const LinkButton = ({ type, url, label }: { type: string, url: string, label: string }) => {
  const getIcon = () => {
    switch (type) {
      case 'github': return <Github className="mr-2 h-4 w-4" />;
      case 'live': return <ExternalLink className="mr-2 h-4 w-4" />;
      default: return <Code className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button variant={type === 'github' ? 'secondary' : 'default'} size="sm">
        {getIcon()}
        {label}
      </Button>
    </Link>
  );
};


export function HiringChallengesSection() {
  return (
    <section id="hiring-challenges">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">Company Hiring Challenges</h2>
          <p className="mt-2 text-lg text-muted-foreground">Solutions developed for technical assessments.</p>
        </div>
        <div className="space-y-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="challenge-card overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <CardHeader className="bg-muted/50 p-6">
                <div className="flex items-center gap-4">
                    <div className="challenge-icon-wrapper">
                        <Building className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl text-foreground">{challenge.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">{challenge.task}</p>
                <div className="flex flex-wrap gap-3">
                  {challenge.links.map(link => (
                    <LinkButton key={link.url} type={link.type} url={link.url} label={link.label} />
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
