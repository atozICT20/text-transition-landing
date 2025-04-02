'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 100);
    mouseY.set(((e.clientY - top) / height) * 100);
  };

  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, var(--tw-gradient-stops))`;

  if (!isMounted) {
    return (
      <div className="relative h-screen w-full bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="absolute inset-0"
        style={{
          background
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Floating particles - now client-only */}
      {isMounted && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            x: mouseX.get() * 0.1,
            y: mouseY.get() * 0.1,
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.h1 
          className="text-5xl md:text-8xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Create{' '}
          <motion.span
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.2 }}
          >
            Digital Magic
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crafting immersive experiences that captivate and inspire
        </motion.p>
      </div>
    </div>
  );
}