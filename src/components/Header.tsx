import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Durga Rao Pamarthi
          </motion.h1>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6">
            <motion.a 
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
             <motion.a 
              href="#skills"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#certifications"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
            >
              Certifications
            </motion.a><motion.a 
              href="#employment"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
            >
              Experience
            </motion.a>
            <motion.a 
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </nav>

          {/* Desktop social links */}
          <div className="hidden md:flex gap-4">
            <motion.a
              href="https://github.com/pamarthidurgarao"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/durga-rao-pamarthi-412388a8/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:pamarthidurgarao1@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <nav className="flex flex-col gap-4 py-4">
              <a 
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
               <a 
                href="#certifications"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </a>
               <a 
                href="#employment"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            <div className="flex gap-4 py-4 border-t border-gray-200">
              <a
                href="https://github.com/pamarthidurgarao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/durga-rao-pamarthi-412388a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:pamarthidurgarao1@gmail.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}