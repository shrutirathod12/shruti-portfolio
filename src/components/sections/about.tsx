"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MotionDiv } from '@/components/motion-div';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const skills = [
  'Java', 'Python', 'Flask', 'C++', 'HTML/CSS/JS', 'MySQL', 'Git & GitHub', 'Docker'
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-primary text-glow">Me</span>
          </h2>
        </MotionDiv>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
          <MotionDiv delay={0.2}>
            <Avatar className="w-32 h-32 border-4 border-primary/50 shadow-lg">
              <AvatarImage src="https://placehold.co/150x150.png" alt="Shruti Rathod" data-ai-hint="woman portrait" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
          </MotionDiv>
          <MotionDiv delay={0.4}>
            <p className="text-foreground/80 text-lg leading-relaxed">
              I am a passionate and dedicated B.Tech Computer Science student building intelligent and secure digital experiences, with a strong interest in AI and cybersecurity. My goal is to leverage technology to build innovative solutions that solve real-world problems.
              <br /><br />
              I am a quick learner, always eager to explore new technologies and expand my skillset. My academic and personal projects have provided me with hands-on experience in software development, machine learning, and secure coding practices.
            </p>
          </MotionDiv>
          <MotionDiv delay={0.6} className="w-full">
            <h3 className="font-headline text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-base px-4 py-2 bg-primary/20 text-primary border-0 cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
