import React from 'react';
import { motion } from 'framer-motion';

const TechElement = ({ delay, className }: { delay: number; className: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0.8] }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const CodeLine = ({ delay, left, width }: { delay: number; left: string; width: string }) => (
  <motion.div
    className="absolute h-px bg-purple-200"
    style={{ left, width }}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: [0, 1, 0] }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, purple 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating tech elements */}
      <TechElement
        delay={0}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/5 to-blue-300 blur-xl"
      />
      <TechElement
        delay={2}
        className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-300 blur-xl"
      />
      <TechElement
        delay={4}
        className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-300 blur-xl"
      />

      {/* Code lines */}
      <CodeLine delay={0} left="10%" width="20%" />
      <CodeLine delay={2} left="40%" width="15%" />
      <CodeLine delay={4} left="70%" width="25%" />

      {/* Binary particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-600 text-xs font-mono"
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: -20
          }}
          animate={{
            opacity: [0, 1, 0],
            y: window.innerHeight + 20
          }}
          transition={{
            duration: 10,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}

      {/* Abstract shapes */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <pattern
          id="tech-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 10h80v80h-80z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#tech-pattern)" />
      </svg>
    </div>
  );
}