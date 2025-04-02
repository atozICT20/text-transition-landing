'use client';

import { useEffect, useState } from 'react';

interface TextTransitionProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const TextTransition = ({ 
  texts, 
  interval = 3000,
  className = ''
}: TextTransitionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`inline-block ${className}`}>
      <span
        className={`inline-block ${
          isAnimating ? 'animate-text-fade-out' : 'animate-text-fade-in'
        }`}
        key={currentIndex}
      >
        {texts[currentIndex]}
      </span>
    </span>
  );
};

export default TextTransition;