'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useRef, useEffect, ReactNode } from 'react';

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const MotionDiv = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2,
  variants = defaultVariants,
}: MotionDivProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
