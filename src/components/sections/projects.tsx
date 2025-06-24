"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import RecipeGenerator from '@/components/recipe-generator';
import { MotionDiv } from '@/components/motion-div';

const projects = [
  {
    title: 'Smart Recipe Generator',
    description: 'An AI-powered application that generates unique recipes based on user-provided ingredients, leveraging NLP models.',
    tags: ['Flask', 'NLP', 'Hugging Face', 'AI'],
    github: 'https://github.com/shrutirathod12/Smart-Recipe-Generator',
    live: '#',
    isAiDemo: true,
  },
  {
    title: 'Graphical Password System',
    description: 'A secure authentication system that uses images and patterns instead of traditional text-based passwords.',
    tags: ['Flask', 'SQLite', 'SHA-256'],
    github: 'https://github.com/shrutirathod12/Graphical-Password-to-avoid-shoulder-surfing',
    live: '#',
    isAiDemo: false,
  },
  {
    title: 'YouTube Transcript Summarizer',
    description: 'A Chrome extension that summarizes long YouTube videos by processing their transcripts, making content more accessible.',
    tags: ['Chrome Extension', 'JavaScript', 'API'],
    github: 'https://github.com/shrutirathod12/youtube-transcript-summarizer-chrome-extension',
    live: 'https://github.com',
    isAiDemo: false,
  },
  {
    title: 'Image Generation via Stable Diffusion',
    description: 'Exploring text-to-image synthesis by implementing and experimenting with the Stable Diffusion model using Comfy UI.',
    tags: ['Stable Diffusion', 'Comfy UI', 'AI'],
    github: 'https://github.com/shrutirathod12/image-generation-using-stable-diffusion---comfy-UI',
    live: '#',
    isAiDemo: false,
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const LiveButton = (
    <Button asChild variant="secondary" className="button-glow bg-secondary/80 hover:bg-secondary">
      <a href={project.live!} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
      </a>
    </Button>
  );

  return (
    <Card className="glassmorphism transition-all duration-300 hover:scale-105 hover:border-accent h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-0">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {project.github && (
          <Button asChild variant="ghost">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        )}
        {project.live && (
          project.isAiDemo ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="button-glow bg-secondary/80 hover:bg-secondary">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] md:max-w-lg glassmorphism">
                <RecipeGenerator />
              </DialogContent>
            </Dialog>
          ) : LiveButton
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-primary text-glow">Projects</span>
          </h2>
        </MotionDiv>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionDiv key={project.title} delay={index * 0.1} className="h-full">
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
