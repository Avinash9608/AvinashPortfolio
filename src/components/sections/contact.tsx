"use client"

import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Twitter, Mail, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/app/actions';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';


const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/avinash-kumar-653001213/' },
  { name: 'GitHub', icon: <Github />, url: 'https://github.com/Avinash9608' },
  { name: 'Twitter', icon: <Twitter />, url: 'https://x.com/Avinashmadhuka' },
  { name: 'Email', icon: <Mail />, url: 'mailto:avinashmadhukar4@gmail.com' },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;


export function ContactSection() {
    const { toast } = useToast();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const { isSubmitting } = form.formState;

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            await sendEmail(data);
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });
            form.reset();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem sending your message. Please try again later.",
            });
        }
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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="sr-only">Your Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="sr-only">Your Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Email" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="sr-only">Your Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your Message" rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                                </>
                            ) : (
                                <>
                                Send Message <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                </Form>
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
