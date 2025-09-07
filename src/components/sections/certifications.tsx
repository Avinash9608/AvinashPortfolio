
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    title: 'Cpp through C',
    issuer: 'Certificate of Training',
    url: 'https://drive.google.com/file/d/14IQXE39GeRm2WQOSkdRNyvoA_fkgXayI/view?usp=sharing',
  },
  {
    title: 'Java Standard Edition',
    issuer: 'Certificate of Training',
    url: 'https://drive.google.com/file/d/1zGwHs2zUITc2FcC9jfgmtLMjiAOEn4Kt/view?usp=sharing',
  },
  {
    title: 'JAVA Enterprise Edition',
    issuer: 'Certificate of Training',
    url: 'https://drive.google.com/file/d/165hJ2FJJRasMu6beWk8XVjV9FmUqlWaC/view?usp=sharing',
  },
  {
    title: 'Frontend with React',
    issuer: 'Certificate of Completion',
    url: 'https://drive.google.com/file/d/163M4ECnDMy0dcmUxqL82hIOmGdjv2W_X/view?usp=sharing',
  },
  {
    title: 'YumExpress (Food delivery application)',
    issuer: 'Certificate of Completion',
    url: 'https://drive.google.com/file/d/1x48XlRAtmSsv7zBue7qVTe4FdeQ0GvHS/view?usp=sharing',
  },
  {
    title: 'Machine Learning',
    issuer: 'Great Learning',
    url: 'https://drive.google.com/file/d/1v9kOIcYq3lTmsE1ZamXXX53u98wQfr6t/view?usp=sharing',
  },
  {
    title: 'Node Js',
    issuer: 'Great Learning',
    url: 'https://drive.google.com/file/d/1vUBCERnD4yojq2CnzCyxEn8ardTclxF5/view?usp=sharing',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Great Learning',
    url: 'https://drive.google.com/file/d/1vU0xF941C90zaczZGJg6qwHnlbP8KrCr/view?usp=sharing',
  },
  {
    title: 'Cyber Security',
    issuer: 'Great Learning',
    url: 'https://drive.google.com/file/d/1vRwteIOSDqgBGDOq3x4_F9WEYyCS_qWR/view?usp=sharing',
  },
  {
    title: 'AWS',
    issuer: 'Great Learning',
    url: 'https://drive.google.com/file/d/1vekXOQ3HWc7wko8n38W7EkQ03Spskt5X/view?usp=sharing',
  },
  {
    title: 'Artificial Inteligence',
    issuer: 'Great Learning',
    url: 'https://drive.google.com/file/d/1vYBoRKV6ih0OC4ScLKdS0MbSAxai4leK/view?usp=sharing',
  },
  {
    title: 'API',
    issuer: 'Great Learning',
    url: 'https://drive.google.com/file/d/1vowMds8ApLDsF4wYjY-K3fswaSicOutL/view?usp=sharing',
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">Certifications & Training</h2>
          <p className="mt-2 text-lg text-muted-foreground">My credentials and official recognitions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="certification-card flex flex-col text-center">
              <CardHeader className="flex-grow">
                <div className="flex justify-center mb-4">
                  <div className="certification-icon-wrapper">
                    <Award className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="font-headline text-2xl text-accent">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{cert.issuer}</p>
                <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                  <Button>
                    View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
