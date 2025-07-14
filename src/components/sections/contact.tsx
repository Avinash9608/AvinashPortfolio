"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Twitter, Mail, Send } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/avinash-kumar-653001213/' },
  { name: 'GitHub', icon: <Github />, url: 'https://github.com/Avinash9608' },
  { name: 'Twitter', icon: <Twitter />, url: 'https://x.com/Avinashmadhuka' },
  { name: 'Email', icon: <Mail />, url: 'mailto:avinashmadhukar4@gmail.com' },
];

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration logic would go here
    alert('Form submitted! (This is a demo)');
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">Get In Touch</h2>
          <p className="mt-2 text-lg text-muted-foreground">Feel free to reach out. I'm always open to new opportunities and collaborations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div>
                 <h3 className="text-2xl font-bold font-headline mb-4">Contact Me</h3>
                 <p className="text-muted-foreground mb-8">
                    Have a project in mind or just want to say hello? Fill out the form, and I&apos;ll get back to you as soon as possible.
                 </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder="Your Name" required type="text" />
                    <Input placeholder="Your Email" required type="email" />
                    <Textarea placeholder="Your Message" required rows={5} />
                    <Button type="submit" className="w-full">
                    Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </div>
            <div className="flex flex-col justify-center">
                 <h3 className="text-2xl font-bold font-headline mb-4">Connect with Me</h3>
                 <p className="text-muted-foreground mb-8">
                    You can also find me on these platforms.
                 </p>
                 <div className="space-y-4">
                    {socialLinks.map(link => (
                        <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center p-4 rounded-lg bg-secondary hover:bg-accent/20 transition-colors cursor-pointer">
                                <div className="text-primary">{link.icon}</div>
                                <span className="ml-4 font-medium">{link.name}</span>
                            </div>
                        </Link>
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
