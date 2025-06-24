"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const subtitleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
};

const subtitleItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const HeroSection = () => {
  const subtitles = ['Developer', 'AI Explorer', 'Cybersecurity Enthusiast'];

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      <div className="z-10 flex flex-col items-center space-y-8">
        <motion.h1
          className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Shruti Rathod
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4 text-xl md:text-2xl lg:text-3xl font-medium text-primary text-glow"
          variants={subtitleContainer}
          initial="hidden"
          animate="visible"
        >
          {subtitles.map((text, i) => (
            <React.Fragment key={text}>
              <motion.span variants={subtitleItem} className="inline-block">
                {text}
              </motion.span>
              {i < subtitles.length - 1 && (
                <motion.span variants={subtitleItem} className="text-accent/50 text-3xl md:text-4xl select-none -translate-y-1">
                  |
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <Button asChild size="lg" className="mt-4 button-glow">
            <Link href="#about">
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-foreground/50"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
