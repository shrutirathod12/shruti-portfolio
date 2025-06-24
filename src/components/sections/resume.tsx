"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Eye } from 'lucide-react';
import { MotionDiv } from '@/components/motion-div';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 md:py-24">
      <MotionDiv className="container mx-auto px-4 md:px-6 text-center">
        <FileText className="h-16 w-16 mx-auto text-primary animate-bounce" />
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mt-4 mb-6">
          My <span className="text-primary text-glow">Resume</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
          Interested in my full qualifications? You can download or view my complete resume to learn more about my experience and skills.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="button-glow w-60">
              {/* 
                Note to developer: 
                Replace "#" with the actual path to the resume file. 
                It's recommended to place the PDF file in the `public` directory.
                For example: href="/Shruti_Rathod_Resume.pdf"
              */}
              <a href="/Shruti_Rathod_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" asChild className="button-glow w-60">
              <a href="/Shruti_Rathod_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
        </div>
      </MotionDiv>
    </section>
  );
};

export default ResumeSection;
