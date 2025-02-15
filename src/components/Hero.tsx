import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Award, Code, Server } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50/50 to-white/50 pt-16 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lead Software Engineer
          </motion.h1>
          <motion.div 
            className="text-lg md:text-xl text-gray-600 mb-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>Over 10+ years of experience in Software Development</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-6">
              <motion.div 
                className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Code className="text-purple-600" />
                <span>Full Stack Development</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Server className="text-purple-600" />
                <span>Cloud & DevOps</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Award className="text-purple-600" />
                <span>Azure Certified</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
              <ArrowDown size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}